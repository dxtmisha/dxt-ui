// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { MotionAxisElement } from '../MotionAxisElement'

describe('MotionAxisElement', () => {
  const naming = new DesignName('base.class')

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('should generate classStatus map and toggle start/move states', () => {
    const container = document.createElement('div')
    const element = new MotionAxisElement(ref(container), naming)

    expect(element.get()).toBe(container)
    expect(element.getClassStatus()).toEqual({
      main: 'base-class__slide',
      previous: 'base-class__slide--previous',
      preparation: 'base-class__slide--preparation',
      active: 'base-class__slide--active'
    })

    expect(element.getStart()).toBe(false)
    element.toStart()
    expect(element.getStart()).toBe(true)
    element.toEnd()
    expect(element.getStart()).toBe(false)

    expect(element.getMove()).toBe(false)
    element.toMove()
    expect(element.getMove()).toBe(true)
    element.toStop()
    expect(element.getMove()).toBe(false)
  })

  it('should check isActive and find preparation element', () => {
    const container = document.createElement('div')
    const activeSlide = document.createElement('div')
    activeSlide.className = 'base-class__slide base-class__slide--active'
    const prepSlide = document.createElement('div')
    prepSlide.className = 'base-class__slide base-class__slide--preparation'
    container.append(activeSlide, prepSlide)

    const element = new MotionAxisElement(ref(container), naming)

    expect(element.isActive(activeSlide)).toBe(true)
    expect(element.isActive(prepSlide)).toBe(false)
    expect(element.isActive(null)).toBe(false)
    expect(element.getElementPreparation()).toBe(prepSlide)

    const emptyElement = new MotionAxisElement(ref(undefined), naming)
    expect(emptyElement.getElementPreparation()).toBeUndefined()
  })

  it('should block and restore scroll on closest scroll ancestor', () => {
    const container = document.createElement('div')
    const scrollContainer = document.createElement('div')
    scrollContainer.className = 'base-class__scroll'
    scrollContainer.appendChild(container)

    const element = new MotionAxisElement(ref(container), naming)

    element.blockScroll()
    expect(scrollContainer.classList.contains('base-class__scroll--hidden')).toBe(true)

    element.returnScroll()
    expect(scrollContainer.classList.contains('base-class__scroll--hidden')).toBe(false)

    const detached = new MotionAxisElement(ref(document.createElement('div')), naming)
    expect(() => detached.blockScroll()).not.toThrow()
    expect(() => detached.returnScroll()).not.toThrow()
  })

  it('should handle transitionend on active slide and fallback timeout cleanly', () => {
    vi.useFakeTimers()

    const container = document.createElement('div')
    const activeSlide = document.createElement('div')
    activeSlide.className = 'base-class__slide--active'
    const inactiveSlide = document.createElement('div')
    inactiveSlide.className = 'base-class__slide--previous'
    container.append(activeSlide, inactiveSlide)

    const element = new MotionAxisElement(ref(container), naming)
    const callback = vi.fn()

    element.toMove()
    element.initEvent(callback)

    // Unrelated property should be ignored
    const opacityEvent = new Event('transitionend', { bubbles: true }) as TransitionEvent
    Object.defineProperty(opacityEvent, 'propertyName', { value: 'opacity' })
    activeSlide.dispatchEvent(opacityEvent)
    expect(callback).not.toHaveBeenCalled()

    // Non-active target should be ignored
    const wrongTargetEvent = new Event('transitionend', { bubbles: true }) as TransitionEvent
    Object.defineProperty(wrongTargetEvent, 'propertyName', { value: 'transform' })
    inactiveSlide.dispatchEvent(wrongTargetEvent)
    expect(callback).not.toHaveBeenCalled()

    // Matching transform event on active target triggers callback and stops move
    const validEvent = new Event('transitionend', { bubbles: true }) as TransitionEvent
    Object.defineProperty(validEvent, 'propertyName', { value: 'transform' })
    activeSlide.dispatchEvent(validEvent)

    expect(callback).toHaveBeenCalledTimes(1)
    expect(element.getMove()).toBe(false)

    // Advancing timer after transitionend should not re-trigger callback
    vi.advanceTimersByTime(2000)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should trigger callback via fallback timeout and clean up previous timers on re-init or unmount', () => {
    vi.useFakeTimers()

    const container = document.createElement('div')
    const elementRef = ref<HTMLDivElement | undefined>(container)
    const element = new MotionAxisElement(elementRef, naming)
    const removeSpy = vi.spyOn(container, 'removeEventListener')

    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    element.toMove()
    element.initEvent(firstCallback)

    // Re-initialize before timeout expires
    element.initEvent(secondCallback)
    expect(removeSpy).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(1024)
    expect(firstCallback).not.toHaveBeenCalled()
    expect(secondCallback).toHaveBeenCalledTimes(1)
    expect(element.getMove()).toBe(false)

    // Test unmount cleanup even when element ref becomes undefined
    const thirdCallback = vi.fn()
    element.toMove()
    element.initEvent(thirdCallback)
    elementRef.value = undefined
    element.onUnmounted()

    vi.advanceTimersByTime(2000)
    expect(thirdCallback).not.toHaveBeenCalled()
    expect(removeSpy).toHaveBeenCalledTimes(3)
  })
})
