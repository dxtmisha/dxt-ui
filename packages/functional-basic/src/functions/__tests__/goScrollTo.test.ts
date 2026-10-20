// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { goScrollTo } from '../goScrollTo'
import * as isDomRuntimeModule from '../isDomRuntime'

describe('goScrollTo', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
  })

  describe('SSR and invalid input safety', () => {
    it('should return early if not in DOM runtime', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const container = document.createElement('div')
      const elementTo = document.createElement('div')
      container.scrollBy = vi.fn()

      goScrollTo(container, elementTo)
      expect(container.scrollBy).not.toHaveBeenCalled()
    })

    it('should return early if container is null or undefined', () => {
      const elementTo = document.createElement('div')
      elementTo.getBoundingClientRect = vi.fn()

      expect(() => goScrollTo(undefined, elementTo)).not.toThrow()
      expect(() => goScrollTo(null, elementTo)).not.toThrow()
      expect(elementTo.getBoundingClientRect).not.toHaveBeenCalled()
    })

    it('should return early if target elementTo is null or undefined', () => {
      const container = document.createElement('div')
      container.scrollBy = vi.fn()

      expect(() => goScrollTo(container, undefined)).not.toThrow()
      expect(() => goScrollTo(container, null)).not.toThrow()
      expect(container.scrollBy).not.toHaveBeenCalled()
    })

    it('should return early if arguments are primitive values', () => {
      // @ts-expect-error testing primitive safety
      expect(() => goScrollTo(0, 0)).not.toThrow()
      // @ts-expect-error testing primitive safety
      expect(() => goScrollTo('container', 'target')).not.toThrow()
      // @ts-expect-error testing primitive safety
      expect(() => goScrollTo(123, null)).not.toThrow()
    })

    it('should return early if elements lack getBoundingClientRect method', () => {
      const container = {} as unknown as HTMLElement
      const elementTo = document.createElement('div')

      expect(() => goScrollTo(container, elementTo)).not.toThrow()
      expect(() => goScrollTo(elementTo, container)).not.toThrow()
    })
  })

  describe('Scroll calculation and border offset', () => {
    it('should scroll container by deltaTop and deltaLeft with default "smooth" behavior', () => {
      const container = document.createElement('div')
      const elementTo = document.createElement('div')

      container.scrollBy = vi.fn()
      container.getBoundingClientRect = vi.fn(() => ({
        top: 100,
        left: 100
      } as DOMRect))

      elementTo.getBoundingClientRect = vi.fn(() => ({
        top: 250,
        left: 300
      } as DOMRect))

      goScrollTo(container, elementTo)

      expect(container.scrollBy).toHaveBeenCalledWith({
        top: 150, // 250 - 100
        left: 200, // 300 - 100
        behavior: 'smooth'
      })
    })

    it('should respect custom behavior option', () => {
      const container = document.createElement('div')
      const elementTo = document.createElement('div')

      container.scrollBy = vi.fn()
      container.getBoundingClientRect = vi.fn(() => ({ top: 0, left: 0 } as DOMRect))
      elementTo.getBoundingClientRect = vi.fn(() => ({ top: 50, left: 50 } as DOMRect))

      goScrollTo(container, elementTo, 'auto')

      expect(container.scrollBy).toHaveBeenCalledWith({
        top: 50,
        left: 50,
        behavior: 'auto'
      })
    })

    it('should account for container clientTop and clientLeft (borders)', () => {
      const container = document.createElement('div')
      const elementTo = document.createElement('div')

      Object.defineProperty(container, 'clientTop', { value: 15, configurable: true })
      Object.defineProperty(container, 'clientLeft', { value: 20, configurable: true })

      container.scrollBy = vi.fn()
      container.getBoundingClientRect = vi.fn(() => ({
        top: 100,
        left: 100
      } as DOMRect))

      elementTo.getBoundingClientRect = vi.fn(() => ({
        top: 250,
        left: 300
      } as DOMRect))

      goScrollTo(container, elementTo)

      // deltaTop = 250 - (100 + 15) = 135
      // deltaLeft = 300 - (100 + 20) = 180
      expect(container.scrollBy).toHaveBeenCalledWith({
        top: 135,
        left: 180,
        behavior: 'smooth'
      })
    })

    it('should correctly handle negative delta when target is positioned above or to the left', () => {
      const container = document.createElement('div')
      const elementTo = document.createElement('div')

      container.scrollBy = vi.fn()
      container.getBoundingClientRect = vi.fn(() => ({ top: 200, left: 300 } as DOMRect))
      elementTo.getBoundingClientRect = vi.fn(() => ({ top: 120, left: 180 } as DOMRect))

      goScrollTo(container, elementTo)

      expect(container.scrollBy).toHaveBeenCalledWith({
        top: -80, // 120 - 200
        left: -120, // 180 - 300
        behavior: 'smooth'
      })
    })
  })

  describe('Fallback when scrollBy is missing', () => {
    it('should modify scrollTop and scrollLeft directly if scrollBy is not supported', () => {
      const container = document.createElement('div')
      const elementTo = document.createElement('div')

      // @ts-expect-error removing scrollBy to test fallback
      delete container.scrollBy

      container.scrollTop = 50
      container.scrollLeft = 40

      container.getBoundingClientRect = vi.fn(() => ({ top: 100, left: 100 } as DOMRect))
      elementTo.getBoundingClientRect = vi.fn(() => ({ top: 180, left: 160 } as DOMRect))

      goScrollTo(container, elementTo)

      // deltaTop = 80 -> scrollTop = 50 + 80 = 130
      // deltaLeft = 60 -> scrollLeft = 40 + 60 = 100
      expect(container.scrollTop).toBe(130)
      expect(container.scrollLeft).toBe(100)
    })

    it('should apply border offset when falling back to scrollTop and scrollLeft', () => {
      const container = document.createElement('div')
      const elementTo = document.createElement('div')

      // @ts-expect-error removing scrollBy to test fallback
      delete container.scrollBy

      Object.defineProperty(container, 'clientTop', { value: 10, configurable: true })
      Object.defineProperty(container, 'clientLeft', { value: 10, configurable: true })

      container.scrollTop = 100
      container.scrollLeft = 100

      container.getBoundingClientRect = vi.fn(() => ({ top: 50, left: 50 } as DOMRect))
      elementTo.getBoundingClientRect = vi.fn(() => ({ top: 150, left: 150 } as DOMRect))

      goScrollTo(container, elementTo)

      // deltaTop = 150 - (50 + 10) = 90 -> 100 + 90 = 190
      // deltaLeft = 150 - (50 + 10) = 90 -> 100 + 90 = 190
      expect(container.scrollTop).toBe(190)
      expect(container.scrollLeft).toBe(190)
    })
  })
})
