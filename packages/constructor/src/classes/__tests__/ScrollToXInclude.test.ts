// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { ScrollToXInclude } from '../ScrollToXInclude'

describe('ScrollToXInclude', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    element.scrollLeft = 0
  })

  it('should return onWheelPassive binds', () => {
    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)

    expect(scrollToX.binds.onWheelPassive).toBe(scrollToX.onScrollToX)
  })

  it('should scroll horizontally when wheel event is triggered', () => {
    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)
    const event = new WheelEvent('wheel', { deltaY: 50 })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

    scrollToX.onScrollToX(event)

    expect(element.scrollLeft).toBe(50)
    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('should not scroll if deltaY is 0', () => {
    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)
    const event = new WheelEvent('wheel', { deltaY: 0 })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

    scrollToX.onScrollToX(event)

    expect(element.scrollLeft).toBe(0)
    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  it('should not scroll if scroll snap is mandatory', () => {
    element.style.scrollSnapType = 'x mandatory'

    const elementRef = ref(element)
    const scrollToX = new ScrollToXInclude(elementRef)
    const event = new WheelEvent('wheel', { deltaY: 50 })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

    scrollToX.onScrollToX(event)

    expect(element.scrollLeft).toBe(0)
    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })
})
