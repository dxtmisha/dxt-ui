// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import * as functional from '@dxtmisha/functional'
import { ScrollToXInclude } from '../ScrollToXInclude'

describe('ScrollToXInclude', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    element.scrollLeft = 0
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return non-passive onWheel binds', () => {
    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)

    expect(scrollToX.binds.onWheel).toBe(scrollToX.onScrollToX)
    expect(scrollToX.binds.onWheelPassive).toBeUndefined()
  })

  it('should scroll horizontally forward and backward when wheel event is triggered', () => {
    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)

    const forwardEvent = new WheelEvent('wheel', { deltaY: 50, cancelable: true })
    const forwardPreventSpy = vi.spyOn(forwardEvent, 'preventDefault')
    scrollToX.onScrollToX(forwardEvent)

    expect(element.scrollLeft).toBe(50)
    expect(forwardPreventSpy).toHaveBeenCalledTimes(1)

    const backwardEvent = new WheelEvent('wheel', { deltaY: -20, cancelable: true })
    const backwardPreventSpy = vi.spyOn(backwardEvent, 'preventDefault')
    scrollToX.onScrollToX(backwardEvent)

    expect(element.scrollLeft).toBe(30)
    expect(backwardPreventSpy).toHaveBeenCalledTimes(1)
  })

  it('should not scroll if deltaY is 0', () => {
    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)
    const event = new WheelEvent('wheel', { deltaY: 0, cancelable: true })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

    scrollToX.onScrollToX(event)

    expect(element.scrollLeft).toBe(0)
    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  it('should not scroll if scroll snap is mandatory', () => {
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      scrollSnapType: 'x mandatory'
    } as CSSStyleDeclaration)

    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)
    const event = new WheelEvent('wheel', { deltaY: 50, cancelable: true })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

    scrollToX.onScrollToX(event)

    expect(element.scrollLeft).toBe(0)
    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  it('should safely ignore wheel events when element ref is undefined', () => {
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const scrollToX = new ScrollToXInclude(elementRef)
    const event = new WheelEvent('wheel', { deltaY: 50, cancelable: true })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

    expect(() => scrollToX.onScrollToX(event)).not.toThrow()
    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  it('should skip getComputedStyle when isDomRuntime returns false', () => {
    vi.spyOn(functional, 'isDomRuntime').mockReturnValue(false)
    const getComputedStyleSpy = vi.spyOn(window, 'getComputedStyle')

    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)
    const event = new WheelEvent('wheel', { deltaY: 40, cancelable: true })

    scrollToX.onScrollToX(event)

    expect(getComputedStyleSpy).not.toHaveBeenCalled()
    expect(element.scrollLeft).toBe(40)
  })
})
