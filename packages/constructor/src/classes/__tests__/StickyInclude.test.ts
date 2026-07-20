// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { ref } from 'vue'
import { StickyInclude } from '../StickyInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: any) => fn(),
    onUnmounted: (fn: any) => {}
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

  it('should initialize and apply transform positioning by default', () => {
    const parentRef = ref(parentElement)
    const elementRef = ref(stickyElement)

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

    const sticky = new StickyInclude({}, elementRef, parentRef)

    // Top is at 100px relative to viewport, boundaryTop + topOffset = 0.
    // calculatedTop = 0 - 100 = -100, clamped to [0, 450] -> 0
    expect(stickyElement.style.transform).toBe('translateY(0px)')
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-top')).toBe('0px')
    sticky.reset()
  })

  it('should adjust position when scrolled past the viewport top', () => {
    const parentRef = ref(parentElement)
    const elementRef = ref(stickyElement)

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

    const sticky = new StickyInclude({}, elementRef, parentRef)

    // calculatedTop = 0 - (-100) = 100px, clamped to [0, 450] -> 100px
    expect(stickyElement.style.transform).toBe('translateY(100px)')
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-top')).toBe('100px')
    sticky.reset()
  })

  it('should respect top offset option', () => {
    const parentRef = ref(parentElement)
    const elementRef = ref(stickyElement)

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

    const sticky = new StickyInclude({ top: 20 }, elementRef, parentRef)

    // calculatedTop = (0 + 20) - (-100) = 120px
    expect(stickyElement.style.transform).toBe('translateY(120px)')
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-top')).toBe('120px')
    sticky.reset()
  })

  it('should clamp position to parent height boundaries', () => {
    const parentRef = ref(parentElement)
    const elementRef = ref(stickyElement)

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

    const sticky = new StickyInclude({}, elementRef, parentRef)

    // calculatedTop = 0 - (-600) = 600px, clamped to parent height - element height (500 - 50 = 450px)
    expect(stickyElement.style.transform).toBe('translateY(450px)')
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-top')).toBe('450px')
    sticky.reset()
  })

  it('should support top positioning mode', () => {
    const parentRef = ref(parentElement)
    const elementRef = ref(stickyElement)

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

    const sticky = new StickyInclude({ mode: 'top' }, elementRef, parentRef)

    expect(stickyElement.style.top).toBe('100px')
    expect(stickyElement.style.transform).toBe('')
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-top')).toBe('100px')
    sticky.reset()
  })

  it('should support custom positioning mode (only CSS variable)', () => {
    const parentRef = ref(parentElement)
    const elementRef = ref(stickyElement)

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

    const sticky = new StickyInclude({ mode: 'custom' }, elementRef, parentRef)

    expect(stickyElement.style.top).toBe('')
    expect(stickyElement.style.transform).toBe('')
    expect(stickyElement.style.getPropertyValue('--dxt-sticky-top')).toBe('100px')
    sticky.reset()
  })
})
