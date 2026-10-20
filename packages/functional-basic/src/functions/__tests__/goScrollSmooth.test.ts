// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import * as isDomRuntimeModule from '../isDomRuntime'
import { goScrollSmooth } from '../goScrollSmooth'

describe('goScrollSmooth', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)

    // Mock scrollIntoView
    element.scrollIntoView = vi.fn()

    // Mock window.scrollTo
    window.scrollTo = vi.fn()

    // Default window dimensions and scroll positions
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true, configurable: true })
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    Object.defineProperty(window, 'pageYOffset', { value: 0, writable: true, configurable: true })

    // Mock getBoundingClientRect
    element.getBoundingClientRect = vi.fn(() => ({
      top: 100,
      bottom: 200,
      left: 0,
      right: 100,
      width: 100,
      height: 100,
      x: 0,
      y: 100,
      toJSON: () => {}
    }))
  })

  afterEach(() => {
    if (element.parentNode) {
      document.body.removeChild(element)
    }
    vi.restoreAllMocks()
  })

  describe('SSR and invalid input safety', () => {
    it('should return early when isDomRuntime is false', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      goScrollSmooth(element)

      expect(element.scrollIntoView).not.toHaveBeenCalled()
      expect(window.scrollTo).not.toHaveBeenCalled()
    })

    it('should return safely without error when element is null or undefined', () => {
      expect(() => goScrollSmooth(null)).not.toThrow()
      expect(() => goScrollSmooth(undefined)).not.toThrow()
      expect(window.scrollTo).not.toHaveBeenCalled()
    })

    it('should return safely without TypeError when element is a number (primitive)', () => {
      // @ts-expect-error testing runtime safety against primitive values
      expect(() => goScrollSmooth(0)).not.toThrow()
      // @ts-expect-error testing runtime safety against primitive values
      expect(() => goScrollSmooth(150)).not.toThrow()
      expect(window.scrollTo).not.toHaveBeenCalled()
    })

    it('should return safely without TypeError when element is a string', () => {
      // @ts-expect-error testing runtime safety against string
      expect(() => goScrollSmooth('#header')).not.toThrow()
      expect(window.scrollTo).not.toHaveBeenCalled()
    })

    it('should not throw if element lacks both scrollIntoView and getBoundingClientRect', () => {
      const mockObj = {} as unknown as HTMLElement
      expect(() => goScrollSmooth(mockObj)).not.toThrow()
      expect(window.scrollTo).not.toHaveBeenCalled()
    })
  })

  describe('Native scrollIntoView path (shift === 0)', () => {
    it('should call scrollIntoView with default options when shift is 0 or omitted', () => {
      goScrollSmooth(element)

      expect(element.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
      expect(window.scrollTo).not.toHaveBeenCalled()
    })

    it('should pass custom options to scrollIntoView', () => {
      goScrollSmooth(element, { behavior: 'auto', block: 'center', inline: 'nearest' })

      expect(element.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'auto',
        block: 'center',
        inline: 'nearest'
      })
    })

    it('should default behavior to smooth when options object has undefined behavior', () => {
      goScrollSmooth(element, { block: 'end' })

      expect(element.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'end',
        inline: 'start'
      })
    })
  })

  describe('window.scrollTo path (shift !== 0 or scrollIntoView missing)', () => {
    it('should calculate scroll position with default block (start) when shift is provided', () => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true })

      goScrollSmooth(element, undefined, 20)

      // Expected top: window.scrollY (50) + element.top (100) - shift (20) = 130
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 130,
        behavior: 'smooth'
      })
      expect(element.scrollIntoView).not.toHaveBeenCalled()
    })

    it('should calculate scroll position with block: "center"', () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      Object.defineProperty(window, 'innerHeight', { value: 600, writable: true, configurable: true })

      // rect.top = 100, rect.height = 100, innerHeight = 600
      // center offset = 100 + 50 - 300 = -150
      // top = 100 + (-150) - shift (10) = -60
      goScrollSmooth(element, { block: 'center' }, 10)

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: -60,
        behavior: 'smooth'
      })
    })

    it('should calculate scroll position with block: "end"', () => {
      Object.defineProperty(window, 'scrollY', { value: 300, writable: true, configurable: true })
      Object.defineProperty(window, 'innerHeight', { value: 800, writable: true, configurable: true })

      // rect.bottom = 200, innerHeight = 800
      // end offset = 200 - 800 = -600
      // top = 300 + (-600) - shift (25) = -325
      goScrollSmooth(element, { block: 'end' }, 25)

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: -325,
        behavior: 'smooth'
      })
    })

    describe('block: "nearest"', () => {
      it('should adjust to top when element is above viewport (rect.top < 0)', () => {
        element.getBoundingClientRect = vi.fn(() => ({
          top: -50,
          bottom: 50,
          left: 0,
          right: 100,
          width: 100,
          height: 100,
          x: 0,
          y: -50,
          toJSON: () => {}
        }))

        Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })

        goScrollSmooth(element, { block: 'nearest' }, 10)

        // top = 200 + (-50) - 10 = 140
        expect(window.scrollTo).toHaveBeenCalledWith({
          top: 140,
          behavior: 'smooth'
        })
      })

      it('should adjust to bottom when element is below viewport (rect.bottom > innerHeight)', () => {
        Object.defineProperty(window, 'innerHeight', { value: 500, writable: true, configurable: true })
        element.getBoundingClientRect = vi.fn(() => ({
          top: 550,
          bottom: 650,
          left: 0,
          right: 100,
          width: 100,
          height: 100,
          x: 0,
          y: 550,
          toJSON: () => {}
        }))

        Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })

        // elementTop = 650 - 500 = 150
        // top = 100 + 150 - 20 = 230
        goScrollSmooth(element, { block: 'nearest' }, 20)

        expect(window.scrollTo).toHaveBeenCalledWith({
          top: 230,
          behavior: 'smooth'
        })
      })

      it('should keep offset 0 when element is fully inside viewport', () => {
        Object.defineProperty(window, 'innerHeight', { value: 800, writable: true, configurable: true })
        // rect: top = 100, bottom = 200 (both inside [0, 800])
        Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })

        // elementTop = 0
        // top = 100 + 0 - 15 = 85
        goScrollSmooth(element, { block: 'nearest' }, 15)

        expect(window.scrollTo).toHaveBeenCalledWith({
          top: 85,
          behavior: 'smooth'
        })
      })
    })

    it('should respect custom behavior when scrolling via window.scrollTo', () => {
      goScrollSmooth(element, { behavior: 'auto' }, 30)

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 70, // scrollY (0) + rect.top (100) - shift (30)
        behavior: 'auto'
      })
    })

    it('should use window.pageYOffset if window.scrollY is undefined', () => {
      Object.defineProperty(window, 'scrollY', { value: undefined, writable: true, configurable: true })
      Object.defineProperty(window, 'pageYOffset', { value: 75, writable: true, configurable: true })

      goScrollSmooth(element, undefined, 10)

      // top: pageYOffset (75) + rect.top (100) - shift (10) = 165
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 165,
        behavior: 'smooth'
      })
    })

    it('should fallback to 0 when both scrollY and pageYOffset are undefined', () => {
      Object.defineProperty(window, 'scrollY', { value: undefined, writable: true, configurable: true })
      Object.defineProperty(window, 'pageYOffset', { value: undefined, writable: true, configurable: true })

      goScrollSmooth(element, undefined, 20)

      // top: 0 + 100 - 20 = 80
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 80,
        behavior: 'smooth'
      })
    })

    it('should fallback to window.scrollTo when element lacks scrollIntoView even if shift is 0', () => {
      // @ts-expect-error deliberately removing scrollIntoView
      delete element.scrollIntoView

      goScrollSmooth(element)

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 100, // 0 + 100 - 0
        behavior: 'smooth'
      })
    })
  })
})
