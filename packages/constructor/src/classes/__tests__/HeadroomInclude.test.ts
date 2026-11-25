// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import * as functionalBasic from '@dxtmisha/functional-basic'
import { HeadroomInclude } from '../HeadroomInclude'
import type { HeadroomPropsInclude } from '../../types/headroomTypes'

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@dxtmisha/functional-basic')>()

  return {
    ...actual,
    isDomRuntime: vi.fn(() => true)
  }
})

describe('HeadroomInclude', () => {
  const naming = new DesignName('d-headroom')
  const originalScrollY = window.scrollY

  beforeEach(() => {
    vi.mocked(functionalBasic.isDomRuntime).mockReturnValue(true)
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
      configurable: true
    })
  })

  afterEach(() => {
    document.body.innerHTML = ''
    Object.defineProperty(window, 'scrollY', {
      value: originalScrollY,
      writable: true,
      configurable: true
    })
    vi.restoreAllMocks()
  })

  describe('Static predicate HeadroomInclude.is', () => {
    it('returns false when props are undefined or inactive', () => {
      expect(HeadroomInclude.is()).toBe(false)
      expect(HeadroomInclude.is({})).toBe(false)
      expect(HeadroomInclude.is({ disappears: false, transformThreshold: 0 })).toBe(false)
      expect(HeadroomInclude.is({ disappears: false, transformThreshold: -10 })).toBe(false)
    })

    it('returns true when disappears is enabled or transformThreshold is positive', () => {
      expect(HeadroomInclude.is({ disappears: true })).toBe(true)
      expect(HeadroomInclude.is({ transformThreshold: 1 })).toBe(true)
      expect(HeadroomInclude.is({ disappears: true, transformThreshold: 100 })).toBe(true)
    })
  })

  describe('Constructor and lifecycle management (DesignLifecycleAbstract)', () => {
    it('executes constructor without side effects until onMounted is called', () => {
      const addSpy = vi.spyOn(window, 'addEventListener')
      const element = ref<HTMLElement | undefined>(document.createElement('div'))
      const props = reactive<HeadroomPropsInclude>({ disappears: true })
      const headroom = new HeadroomInclude(props, element, naming)

      expect(addSpy).not.toHaveBeenCalled()
      expect(headroom.value.value).toBe(0)
      expect(headroom.disappearsValue.value).toBe(0)
      expect(headroom.isSticky.value).toBe(false)
    })

    it('attaches passive scroll listener on mount and cleans up watchers & listeners on unmount', async () => {
      const addSpy = vi.spyOn(window, 'addEventListener')
      const removeSpy = vi.spyOn(window, 'removeEventListener')
      const emits = vi.fn()
      const element = ref<HTMLElement | undefined>(document.createElement('div'))
      const props = reactive<HeadroomPropsInclude>({ disappears: true })
      const headroom = new HeadroomInclude(props, element, naming, emits)

      headroom.onMounted()

      expect(addSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      )

      Object.defineProperty(window, 'scrollY', { value: 40, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.isSticky.value).toBe(true)
      expect(emits).toHaveBeenCalledWith('headroomScroll', expect.objectContaining({ value: 40, isSticky: true }))
      expect(emits).toHaveBeenCalledWith('headroomSticky', expect.objectContaining({ value: 40, isSticky: true }))

      emits.mockClear()
      headroom.onUnmounted()

      expect(removeSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      )

      // Scroll after unmount must not trigger updates or emits
      Object.defineProperty(window, 'scrollY', { value: 120, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.value.value).toBe(40)
      expect(emits).not.toHaveBeenCalled()

      // Reactive prop mutations after unmount must not re-attach listeners because watchers were stopped
      addSpy.mockClear()
      props.transformThreshold = 150
      await nextTick()

      expect(addSpy).not.toHaveBeenCalled()
    })

    it('cleans up previous watchers if onMounted is called repeatedly inside an effectScope', async () => {
      const scope = effectScope()
      const emits = vi.fn()
      const element = ref<HTMLElement | undefined>(document.createElement('div'))
      const props = reactive<HeadroomPropsInclude>({ disappears: true })
      let headroom!: HeadroomInclude

      scope.run(() => {
        headroom = new HeadroomInclude(props, element, naming, emits)
        headroom.onMounted()
        headroom.onMounted()
      })

      Object.defineProperty(window, 'scrollY', { value: 25, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      const stickyCalls = emits.mock.calls.filter(([eventName]) => eventName === 'headroomSticky')
      expect(stickyCalls).toHaveLength(1)

      headroom.onUnmounted()
      scope.stop()
    })
  })

  describe('Sticky state, direction, and transform metrics', () => {
    it('tracks scroll value, direction data attributes, and transform CSS variables', async () => {
      const htmlElement = document.createElement('div')
      document.body.appendChild(htmlElement)
      const element = ref<HTMLElement | undefined>(htmlElement)
      const emits = vi.fn()
      const props = reactive<HeadroomPropsInclude>({
        transformThreshold: 100
      })
      const headroom = new HeadroomInclude(props, element, naming, emits)

      headroom.onMounted()

      expect(htmlElement.dataset.headroom).toBe('none')
      expect(htmlElement.dataset.headroomDirection).toBe('none')
      expect(htmlElement.dataset.headroomTransform).toBe('100')
      expect(htmlElement.style.getPropertyValue(naming.getStyle('threshold'))).toBe('100px')
      expect(htmlElement.style.getPropertyValue(naming.getStyle('value'))).toBe('0px')
      expect(htmlElement.style.getPropertyValue(naming.getStyle('percent'))).toBe('0')

      // Scroll down to 50px
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.value.value).toBe(50)
      expect(headroom.isSticky.value).toBe(true)
      expect(headroom.transformValue.value).toBe(50)
      expect(headroom.transformPercent.value).toBe(0.5)
      expect(htmlElement.dataset.headroom).toBe('sticky')
      expect(htmlElement.dataset.headroomDirection).toBe('down')
      expect(htmlElement.style.getPropertyValue(naming.getStyle('value'))).toBe('50px')
      expect(htmlElement.style.getPropertyValue(naming.getStyle('percent'))).toBe('0.5')
      expect(htmlElement.style.getPropertyValue(naming.getStyle('difference'))).toBe('-50px')

      // Scroll down beyond threshold to 160px
      Object.defineProperty(window, 'scrollY', { value: 160, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.transformValue.value).toBe(100)
      expect(headroom.transformPercent.value).toBe(1)

      // Scroll up to 80px
      Object.defineProperty(window, 'scrollY', { value: 80, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(htmlElement.dataset.headroomDirection).toBe('up')
      expect(htmlElement.style.getPropertyValue(naming.getStyle('difference'))).toBe('80px')

      // Scroll back to top (0px)
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.isSticky.value).toBe(false)
      expect(htmlElement.dataset.headroom).toBe('none')
      expect(headroom.expose.getValues()).toEqual({
        value: 0,
        disappearsValue: 0,
        isSticky: false,
        transformThreshold: 100,
        transformValue: 0,
        transformPercent: 0,
        valueDifference: 80
      })

      headroom.onUnmounted()
    })

    it('removes data-headroom-transform attribute when transformThreshold is zero', () => {
      const htmlElement = document.createElement('div')
      htmlElement.dataset.headroomTransform = '50'
      const element = ref<HTMLElement | undefined>(htmlElement)
      const headroom = new HeadroomInclude({ disappears: true, transformThreshold: 0 }, element, naming)

      headroom.onMounted()

      expect(htmlElement.dataset.headroomTransform).toBeUndefined()
      expect(headroom.transformPercent.value).toBe(0)

      headroom.onUnmounted()
    })
  })

  describe('Disappears offset calculation and cleanup', () => {
    it('calculates clamped disappears top offset and cleans up inline style when disabled', async () => {
      const htmlElement = document.createElement('div')
      document.body.appendChild(htmlElement)

      let mockTop = 0
      const rectSpy = vi.spyOn(htmlElement, 'getBoundingClientRect').mockImplementation(() => ({
        top: mockTop,
        height: 60,
        left: 0,
        right: 100,
        bottom: mockTop + 60,
        width: 100,
        x: 0,
        y: mockTop,
        toJSON: () => ({})
      }))

      const element = ref<HTMLElement | undefined>(htmlElement)
      const props = reactive<HeadroomPropsInclude>({
        disappears: true,
        transformThreshold: 0
      })
      const headroom = new HeadroomInclude(props, element, naming)

      headroom.onMounted()
      expect(headroom.disappearsValue.value).toBe(0)
      expect(htmlElement.style.getPropertyValue(naming.getStyle('top'))).toBe('0px')

      // Scroll down 40px: moveOffset = 0 + (-40) = -40 (between -40 and -(60+64) = -124)
      Object.defineProperty(window, 'scrollY', { value: 40, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.disappearsValue.value).toBe(-40)
      expect(htmlElement.style.getPropertyValue(naming.getStyle('top'))).toBe('-40px')

      // Scroll down further to 300px while element top is -50: clamped to -(60 + 64) = -124
      mockTop = -50
      Object.defineProperty(window, 'scrollY', { value: 300, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.disappearsValue.value).toBe(-124)
      expect(htmlElement.style.getPropertyValue(naming.getStyle('top'))).toBe('-124px')

      // Avoids -0 when scrollY is 0 and top is negative
      mockTop = -20
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
      headroom.expose.update()
      expect(Object.is(headroom.disappearsValue.value, 0)).toBe(true)

      // Disabling disappears removes inline top style and resets disappearsValue
      props.disappears = false
      await nextTick()

      expect(headroom.disappearsValue.value).toBe(0)
      expect(headroom.isSticky.value).toBe(false)
      expect(htmlElement.style.getPropertyValue(naming.getStyle('top'))).toBe('')

      rectSpy.mockRestore()
      headroom.onUnmounted()
    })

    it('keeps disappears offset at 0 until transformThreshold is reached', async () => {
      const htmlElement = document.createElement('div')
      document.body.appendChild(htmlElement)
      vi.spyOn(htmlElement, 'getBoundingClientRect').mockReturnValue({
        top: 0,
        height: 50,
        left: 0,
        right: 100,
        bottom: 50,
        width: 100,
        x: 0,
        y: 0,
        toJSON: () => ({})
      })

      const element = ref<HTMLElement | undefined>(htmlElement)
      const props = reactive<HeadroomPropsInclude>({
        disappears: true,
        transformThreshold: 100
      })
      const headroom = new HeadroomInclude(props, element, naming)

      headroom.onMounted()

      Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      // transformValue (50) !== transformThreshold (100) => disappearsValue stays 0
      expect(headroom.disappearsValue.value).toBe(0)

      // Now reach threshold (150 >= 100)
      Object.defineProperty(window, 'scrollY', { value: 150, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.disappearsValue.value).toBe(-100)

      headroom.onUnmounted()
    })

    it('clears disappears inline property when update() is called with disappears = false', () => {
      const htmlElement = document.createElement('div')
      htmlElement.style.setProperty(naming.getStyle('top'), '-60px')
      const element = ref<HTMLElement | undefined>(htmlElement)
      const headroom = new HeadroomInclude({ disappears: false }, element, naming)

      headroom.update()

      expect(headroom.disappearsValue.value).toBe(0)
      expect(htmlElement.style.getPropertyValue(naming.getStyle('top'))).toBe('')
    })
  })

  describe('Custom scrollElement support (Element vs selector vs window)', () => {
    it('tracks scrollTop and subtracts container top when scrollElement is a CSS selector', async () => {
      const container = document.createElement('div')
      container.className = 'scroll-box'
      container.scrollTop = 0
      document.body.appendChild(container)

      const header = document.createElement('div')
      container.appendChild(header)

      vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        height: 400,
        left: 0,
        right: 300,
        bottom: 500,
        width: 300,
        x: 0,
        y: 100,
        toJSON: () => ({})
      })
      vi.spyOn(header, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        height: 50,
        left: 0,
        right: 300,
        bottom: 150,
        width: 300,
        x: 0,
        y: 100,
        toJSON: () => ({})
      })

      const element = ref<HTMLElement | undefined>(header)
      const props = reactive<HeadroomPropsInclude>({
        disappears: true,
        scrollElement: '.scroll-box'
      })
      const headroom = new HeadroomInclude(props, element, naming)

      headroom.onMounted()

      container.scrollTop = 30
      container.dispatchEvent(new Event('scroll'))
      await nextTick()

      expect(headroom.value.value).toBe(30)
      expect(headroom.isSticky.value).toBe(true)
      // header.top (100) - container.top (100) + valueDifference (-30) = -30
      expect(headroom.disappearsValue.value).toBe(-30)

      // Switch scrollElement to an HTMLElement directly
      const otherContainer = document.createElement('div')
      otherContainer.scrollTop = 75
      document.body.appendChild(otherContainer)

      props.scrollElement = otherContainer
      await nextTick()

      expect(headroom.value.value).toBe(75)

      headroom.onUnmounted()
    })
  })

  describe('SSR & non-DOM runtime safety', () => {
    it('does not access window or attach listeners when isDomRuntime returns false', () => {
      vi.mocked(functionalBasic.isDomRuntime).mockReturnValue(false)
      const addSpy = vi.spyOn(window, 'addEventListener')
      const element = ref<HTMLElement | undefined>(undefined)
      const headroom = new HeadroomInclude(
        { disappears: true, transformThreshold: 100 },
        element,
        naming
      )

      expect(() => headroom.onMounted()).not.toThrow()
      expect(() => headroom.update()).not.toThrow()
      expect(addSpy).not.toHaveBeenCalled()
      expect(headroom.value.value).toBe(0)
      expect(headroom.disappearsValue.value).toBe(0)
      expect(headroom.isSticky.value).toBe(false)
      expect(() => headroom.onUnmounted()).not.toThrow()
    })
  })
})
