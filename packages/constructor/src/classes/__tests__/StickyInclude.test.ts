// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref, type App, type Ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { StickyInclude } from '../StickyInclude'
import type { StickyPropsInclude } from '../../types/stickyTypes'

const createRect = (top: number, height: number = 500): DOMRect => ({
  top,
  bottom: top + height,
  height,
  width: 100,
  left: 0,
  right: 100,
  x: 0,
  y: top,
  toJSON: () => {}
})

describe('StickyInclude', () => {
  let parentElement: HTMLElement
  let stickyElement: HTMLElement
  const mountedApps: { app: App, container: HTMLElement }[] = []

  const mountSticky = (
    props: Readonly<StickyPropsInclude> | (() => Readonly<StickyPropsInclude>),
    elementRef: Ref<HTMLElement | undefined> = ref(stickyElement),
    parentRef: Ref<HTMLElement | undefined> = ref(parentElement)
  ): { sticky: StickyInclude, wrapper: { unmount: () => void } } => {
    let sticky!: StickyInclude

    const TestComponent = defineComponent({
      setup() {
        sticky = new StickyInclude(props, new DesignName('dxt.sticky'), elementRef, parentRef)
        return () => h('div')
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(TestComponent)
    app.mount(container)

    let unmounted = false
    const unmount = (): void => {
      if (!unmounted) {
        unmounted = true
        app.unmount()
        if (container.parentNode === document.body) {
          document.body.removeChild(container)
        }
      }
    }

    mountedApps.push({ app, container })

    return { sticky, wrapper: { unmount } }
  }

  beforeEach(() => {
    parentElement = document.createElement('div')
    stickyElement = document.createElement('div')
    parentElement.appendChild(stickyElement)
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      if (entry) {
        entry.app.unmount()
        if (entry.container.parentNode === document.body) {
          document.body.removeChild(entry.container)
        }
      }
    }

    if (parentElement.parentNode === document.body) {
      document.body.removeChild(parentElement)
    }

    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Positioning & Clamping)', () => {
    it('should initialize and apply top 0px when parent is below viewport top', () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      const { wrapper } = mountSticky(reactive({ stickyScrollBottom: true, stickyEnable: undefined }))

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('0px')
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-height')).toBe('50px')
      expect(stickyElement.dataset.sticky).toBeUndefined()

      wrapper.unmount()
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-height')).toBe('')
      expect(stickyElement.dataset.sticky).toBeUndefined()
    })

    it('should adjust position and set active dataset when scrolled past viewport top', () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      mountSticky(reactive({ stickyScrollBottom: true }))

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('100px')
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-height')).toBe('50px')
      expect(stickyElement.dataset.sticky).toBe('active')
    })

    it('should respect stickyTop as raw number and reactive Ref', async () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      const topOffset = ref(20)
      mountSticky(() => ({ stickyScrollBottom: true, stickyTop: topOffset }))

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('120px')

      topOffset.value = 40
      await nextTick()
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('140px')
    })

    it('should clamp position to parent height minus element height and never go below 0', () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-600, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      mountSticky(reactive({ stickyScrollBottom: true }))

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('450px')
      expect(stickyElement.dataset.sticky).toBe('active')
    })

    it('should clamp to 0px when element height exceeds parent height', () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 30))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      mountSticky(reactive({ stickyScrollBottom: true }))

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('0px')
      expect(stickyElement.dataset.sticky).toBeUndefined()
    })

    it('should support props as a getter function', () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      mountSticky(() => ({ stickyScrollBottom: true, stickyTop: 10, stickyEnable: true }))

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('110px')
    })
  })

  describe('Enablement, falsy boundaries, and reactive Ref unwrapping', () => {
    it('should not track position when stickyEnable is false or stickyScrollBottom is false', () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      mountSticky(reactive({ stickyScrollBottom: true, stickyEnable: false }))
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')

      mountSticky(reactive({ stickyScrollBottom: false, stickyEnable: true }))
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')
    })

    it('should unwrap Ref<boolean> for stickyEnable inside plain/getter props and toggle reactively', async () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      const isEnabled = ref(false)
      mountSticky(() => ({ stickyScrollBottom: true, stickyEnable: isEnabled }))

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')

      isEnabled.value = true
      await nextTick()
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('100px')

      isEnabled.value = false
      await nextTick()
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')
    })

    it('should not apply styles when stickyTop changes while sticky is disabled', async () => {
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      const topOffset = ref(10)
      mountSticky(() => ({ stickyScrollBottom: true, stickyEnable: false, stickyTop: topOffset }))

      topOffset.value = 30
      await nextTick()
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')
    })
  })

  describe('Scroll container discovery, passive listeners, and scroll end timeout', () => {
    it('should discover all scrollable ancestors plus window and attach passive scroll listeners', () => {
      const outerScrollable = document.createElement('div')
      outerScrollable.style.overflowY = 'scroll'
      document.body.appendChild(outerScrollable)

      const innerScrollable = document.createElement('div')
      innerScrollable.style.overflowY = 'auto'
      outerScrollable.appendChild(innerScrollable)

      const testParent = document.createElement('div')
      innerScrollable.appendChild(testParent)

      const testSticky = document.createElement('div')
      testParent.appendChild(testSticky)

      const addEventSpy = vi.spyOn(innerScrollable, 'addEventListener')
      const { sticky } = mountSticky(
        reactive({ stickyScrollBottom: true, stickyEnable: true }),
        ref(testSticky),
        ref(testParent)
      )

      const internal = sticky as unknown as {
        scrollContainer: (HTMLElement | Window)[]
        eventScroll: unknown[]
      }

      expect(internal.scrollContainer).toEqual([innerScrollable, outerScrollable, window])
      expect(internal.eventScroll).toHaveLength(3)
      expect(addEventSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })

      document.body.removeChild(outerScrollable)
    })

    it('should support custom stickyScrollContainer and compute offset relative to container top', () => {
      const customContainer = document.createElement('div')
      document.body.appendChild(customContainer)

      vi.spyOn(customContainer, 'getBoundingClientRect').mockReturnValue(createRect(80, 400))
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-20, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      mountSticky(reactive({
        stickyScrollBottom: true,
        stickyScrollContainer: customContainer,
        stickyTop: 10
      }))

      // (boundaryTop 80 + topOffset 10) - parentTop (-20) = 110px
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('110px')

      document.body.removeChild(customContainer)
    })

    it('should toggle stickyScroll dataset during scroll and clear after 64ms via fake timers', () => {
      vi.useFakeTimers()
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      const { sticky } = mountSticky(reactive({ stickyScrollBottom: true, stickyEnable: true }))
      const getScrollTopSpy = vi.spyOn(sticky as unknown as { getScrollTop(): number }, 'getScrollTop')

      getScrollTopSpy.mockReturnValue(30)
      sticky.onScroll()
      expect(stickyElement.dataset.stickyScroll).toBeUndefined()

      getScrollTopSpy.mockReturnValue(100)
      sticky.onScroll()
      expect(stickyElement.dataset.stickyScroll).toBe('active')

      vi.advanceTimersByTime(63)
      expect(stickyElement.dataset.stickyScroll).toBe('active')

      vi.advanceTimersByTime(1)
      expect(stickyElement.dataset.stickyScroll).toBeUndefined()
    })
  })

  describe('Lifecycle cleanup, element ref swap, and non-component safety', () => {
    it('should clean up styles on previous element when element ref swaps', async () => {
      const secondStickyElement = document.createElement('div')
      parentElement.appendChild(secondStickyElement)

      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)
      vi.spyOn(secondStickyElement, 'offsetHeight', 'get').mockReturnValue(60)

      const elementRef = ref<HTMLElement | undefined>(stickyElement)
      mountSticky(reactive({ stickyScrollBottom: true }), elementRef)

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('100px')
      expect(stickyElement.dataset.sticky).toBe('active')

      elementRef.value = secondStickyElement
      await nextTick()

      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')
      expect(stickyElement.dataset.sticky).toBeUndefined()
      expect(secondStickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('100px')
      expect(secondStickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-height')).toBe('60px')
      expect(secondStickyElement.dataset.sticky).toBe('active')
    })

    it('should stop watchers, remove listeners, clear containers, and cancel timeout on unmount', async () => {
      vi.useFakeTimers()
      vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue(createRect(-100, 500))
      vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

      const removeWindowListenerSpy = vi.spyOn(window, 'removeEventListener')
      const isEnabled = ref(true)
      const { sticky, wrapper } = mountSticky(() => ({
        stickyScrollBottom: true,
        stickyEnable: isEnabled
      }))

      const getScrollTopSpy = vi.spyOn(sticky as unknown as { getScrollTop(): number }, 'getScrollTop')
      getScrollTopSpy.mockReturnValue(120)
      sticky.onScroll()
      expect(stickyElement.dataset.stickyScroll).toBe('active')

      wrapper.unmount()

      const internal = sticky as unknown as {
        scrollContainer: unknown[]
        eventScroll: unknown[]
        watchStops: unknown[]
        scrollTimeout?: unknown
      }

      expect(removeWindowListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
      expect(internal.scrollContainer).toEqual([])
      expect(internal.eventScroll).toEqual([])
      expect(internal.watchStops).toEqual([])
      expect(internal.scrollTimeout).toBeUndefined()
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')
      expect(stickyElement.dataset.stickyScroll).toBeUndefined()

      // Verify stopped watchers do not reanimate tracking after unmount
      isEnabled.value = false
      await nextTick()
      isEnabled.value = true
      await nextTick()
      expect(internal.eventScroll).toEqual([])
      expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-fix')).toBe('')
    })

    it('should not emit Vue lifecycle warnings when instantiated outside a component instance', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      const sticky = new StickyInclude(
        { stickyScrollBottom: true },
        new DesignName('dxt.sticky'),
        ref(stickyElement),
        ref(parentElement)
      )

      expect(sticky).toBeInstanceOf(StickyInclude)
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
