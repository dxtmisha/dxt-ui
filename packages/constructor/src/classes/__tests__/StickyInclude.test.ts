// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { ref, reactive } from 'vue'
import { StickyInclude } from '../StickyInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as Record<string, unknown>
  return {
    ...actual,
    onMounted: (callback: () => void) => callback(),
    onUnmounted: () => {}
  }
})

describe('StickyInclude', () => {
  let parentElement: HTMLElement
  let stickyElement: HTMLElement

  beforeEach(() => {
    parentElement = document.createElement('div')
    stickyElement = document.createElement('div')
    parentElement.appendChild(stickyElement)
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    document.body.removeChild(parentElement)
    vi.restoreAllMocks()
  })

  it('should initialize and apply top positioning by default', () => {
    const parentReference = ref(parentElement)
    const elementReference = ref(stickyElement)

    // Mock getBoundingClientRect
    vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 600,
      height: 500,
      width: 100,
      left: 0,
      right: 100,
      x: 0,
      y: 100,
      toJSON: () => {}
    })

    // Mock offsetHeight
    vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

    const sticky = new StickyInclude(reactive({ stickyEnable: undefined }), 'dxt-sticky', elementReference, parentReference)

    // Top is at 100px relative to viewport, boundaryTop + topOffset = 0.
    // calculatedTop = 0 - 100 = -100, clamped to [0, 450] -> 0
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('0px')
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-height')).toBe('50px')
    expect(stickyElement.dataset.sticky).toBeUndefined()
    ;(sticky as unknown as { stop(): void }).stop()
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-height')).toBe('')
    expect(stickyElement.dataset.sticky).toBeUndefined()
  })

  it('should adjust position when scrolled past the viewport top', () => {
    const parentReference = ref(parentElement)
    const elementReference = ref(stickyElement)

    // Parent is scrolled up: top is at -100px relative to viewport
    vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue({
      top: -100,
      bottom: 400,
      height: 500,
      width: 100,
      left: 0,
      right: 100,
      x: 0,
      y: -100,
      toJSON: () => {}
    })

    vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

    const sticky = new StickyInclude(reactive({ stickyEnable: undefined }), 'dxt-sticky', elementReference, parentReference)

    // calculatedTop = 0 - (-100) = 100px, clamped to [0, 450] -> 100px
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('100px')
    expect(stickyElement.dataset.sticky).toBe('active')
    ;(sticky as unknown as { reset(): void }).reset()
  })

  it('should respect top offset option', () => {
    const parentReference = ref(parentElement)
    const elementReference = ref(stickyElement)

    vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue({
      top: -100,
      bottom: 400,
      height: 500,
      width: 100,
      left: 0,
      right: 100,
      x: 0,
      y: -100,
      toJSON: () => {}
    })

    vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

    const sticky = new StickyInclude(reactive({ stickyTop: 20, stickyEnable: undefined }), 'dxt-sticky', elementReference, parentReference)

    // calculatedTop = (0 + 20) - (-100) = 120px
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('120px')
    ;(sticky as unknown as { reset(): void }).reset()
  })

  it('should clamp position to parent height boundaries', () => {
    const parentReference = ref(parentElement)
    const elementReference = ref(stickyElement)

    // Parent is scrolled very far up: top is at -600px relative to viewport
    vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue({
      top: -600,
      bottom: -100,
      height: 500,
      width: 100,
      left: 0,
      right: 100,
      x: 0,
      y: -600,
      toJSON: () => {}
    })

    vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

    const sticky = new StickyInclude(reactive({ stickyEnable: undefined }), 'dxt-sticky', elementReference, parentReference)

    // calculatedTop = 0 - (-600) = 600px, clamped to parent height - element height (500 - 50 = 450px)
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('450px')
    ;(sticky as unknown as { reset(): void }).reset()
  })

  it('should not track position when stickyEnable is false', () => {
    const parentReference = ref(parentElement)
    const elementReference = ref(stickyElement)

    vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue({
      top: -100,
      bottom: 400,
      height: 500,
      width: 100,
      left: 0,
      right: 100,
      x: 0,
      y: -100,
      toJSON: () => {}
    })

    vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

    const sticky = new StickyInclude(reactive({ stickyEnable: false }), 'dxt-sticky', elementReference, parentReference)

    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('')
    ;(sticky as unknown as { reset(): void }).reset()
  })

  it('should reactively disable/enable tracking when stickyEnable changes', async () => {
    const parentReference = ref(parentElement)
    const elementReference = ref(stickyElement)

    vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue({
      top: -100,
      bottom: 400,
      height: 500,
      width: 100,
      left: 0,
      right: 100,
      x: 0,
      y: -100,
      toJSON: () => {}
    })

    vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

    const isEnabled = ref(false)
    const sticky = new StickyInclude(reactive({ stickyEnable: isEnabled }), 'dxt-sticky', elementReference, parentReference)

    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('')

    isEnabled.value = true
    await new Promise((resolve) => setTimeout(resolve, 0)) // let watch trigger
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('100px')

    isEnabled.value = false
    await new Promise((resolve) => setTimeout(resolve, 0)) // let watch trigger
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('')

    ;(sticky as unknown as { reset(): void }).reset()
  })

  it('should support props as a function returning StickyPropsInclude', () => {
    const parentReference = ref(parentElement)
    const elementReference = ref(stickyElement)

    vi.spyOn(parentElement, 'getBoundingClientRect').mockReturnValue({
      top: -100,
      bottom: 400,
      height: 500,
      width: 100,
      left: 0,
      right: 100,
      x: 0,
      y: -100,
      toJSON: () => {}
    })

    vi.spyOn(stickyElement, 'offsetHeight', 'get').mockReturnValue(50)

    const propsFunction = () => reactive({ stickyTop: 10, stickyEnable: true })
    const sticky = new StickyInclude(propsFunction, 'dxt-sticky', elementReference, parentReference)

    // calculatedTop = (0 + 10) - (-100) = 110px
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-sys-sticky-top')).toBe('110px')
    ;(sticky as unknown as { reset(): void }).reset()
  })

  it('should find all scrollable ancestors and window, and listen to scroll events on all of them', () => {
    const outerScrollableElement = document.createElement('div')
    outerScrollableElement.style.overflowY = 'scroll'
    document.body.appendChild(outerScrollableElement)

    const innerScrollableElement = document.createElement('div')
    innerScrollableElement.style.overflowY = 'auto'
    outerScrollableElement.appendChild(innerScrollableElement)

    const testParent = document.createElement('div')
    innerScrollableElement.appendChild(testParent)

    const testSticky = document.createElement('div')
    testParent.appendChild(testSticky)

    const parentReference = ref(testParent)
    const elementReference = ref(testSticky)

    const sticky = new StickyInclude(reactive({ stickyEnable: true }), 'dxt-sticky', elementReference, parentReference)

    // Access protected fields for verification
    const scrollContainers = (sticky as unknown as { scrollContainer: (HTMLElement | Window)[] }).scrollContainer
    const eventScrolls = (sticky as unknown as { eventScroll: unknown[] }).eventScroll

    expect(scrollContainers).toContain(innerScrollableElement)
    expect(scrollContainers).toContain(outerScrollableElement)
    expect(scrollContainers).toContain(window)
    expect(scrollContainers.length).toBe(3)
    expect(eventScrolls.length).toBe(3)

    ;(sticky as unknown as { reset(): void }).reset()
    document.body.removeChild(outerScrollableElement)
  })
})
