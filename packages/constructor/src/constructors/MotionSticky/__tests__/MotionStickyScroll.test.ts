// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'
import * as functional from '@dxtmisha/functional'
import { MotionStickyElement } from '../MotionStickyElement'
import { MotionStickyScroll } from '../MotionStickyScroll'
import type { MotionStickyProps } from '../props'

describe('MotionStickyScroll', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('should not invoke stickyElement getter or register listeners during construction', () => {
    const elementSpy = vi.fn(() => new MotionStickyElement({}, ref()))
    const addListenerSpy = vi.spyOn(window, 'addEventListener')

    const scroll = new MotionStickyScroll({}, elementSpy)

    expect(scroll).toBeDefined()
    expect(elementSpy).not.toHaveBeenCalled()
    expect(addListenerSpy).not.toHaveBeenCalled()
  })

  it('should attach passive scroll listener and calculate sticky status on mount', () => {
    const target = document.createElement('div')
    const container = document.createElement('div')
    container.appendChild(target)
    document.body.appendChild(container)

    const addListenerSpy = vi.spyOn(container, 'addEventListener')
    const stickyElement = new MotionStickyElement({ elementScroll: container }, ref(target))

    vi.spyOn(stickyElement, 'getPositionStyle').mockReturnValue({ top: 0, bottom: 0 })
    vi.spyOn(stickyElement, 'getPositionElement').mockReturnValue({ top: 0, bottom: 200 })
    const setStatusSpy = vi.spyOn(stickyElement, 'setStatus')

    const scroll = new MotionStickyScroll({}, () => stickyElement)
    scroll.onMounted()

    expect(addListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })

    vi.runAllTimers()
    expect(setStatusSpy).toHaveBeenCalledWith(true)

    scroll.onUnmounted()
  })

  it('should set status false when element position does not match sticky boundaries', () => {
    const container = document.createElement('div')
    const target = document.createElement('div')
    const stickyElement = new MotionStickyElement({ elementScroll: container }, ref(target))

    vi.spyOn(stickyElement, 'getPositionStyle').mockReturnValue({ top: 10, bottom: 20 })
    vi.spyOn(stickyElement, 'getPositionElement').mockReturnValue({ top: 50, bottom: 100 })
    const setStatusSpy = vi.spyOn(stickyElement, 'setStatus')

    const scroll = new MotionStickyScroll({}, () => stickyElement)
    scroll.onMounted()
    vi.runAllTimers()

    expect(setStatusSpy).toHaveBeenCalledWith(false)

    scroll.onUnmounted()
  })

  it('should not falsely match top=0 when CSS top is auto (undefined)', () => {
    const container = document.createElement('div')
    const target = document.createElement('div')
    const stickyElement = new MotionStickyElement({ elementScroll: container }, ref(target))

    vi.spyOn(stickyElement, 'getPositionStyle').mockReturnValue({ top: undefined, bottom: 16 })
    vi.spyOn(stickyElement, 'getPositionElement').mockReturnValue({ top: 0, bottom: 200 })
    const setStatusSpy = vi.spyOn(stickyElement, 'setStatus')

    const scroll = new MotionStickyScroll({}, () => stickyElement)
    scroll.onMounted()
    vi.runAllTimers()

    expect(setStatusSpy).toHaveBeenCalledWith(false)

    scroll.onUnmounted()
  })

  it('should skip setStatus when positionStyle or positionElement is undefined', () => {
    const container = document.createElement('div')
    const target = document.createElement('div')
    const stickyElement = new MotionStickyElement({ elementScroll: container }, ref(target))

    vi.spyOn(stickyElement, 'getPositionStyle').mockReturnValue(undefined)
    const setStatusSpy = vi.spyOn(stickyElement, 'setStatus')

    const scroll = new MotionStickyScroll({}, () => stickyElement)
    scroll.onMounted()
    vi.runAllTimers()

    expect(setStatusSpy).not.toHaveBeenCalled()

    scroll.onUnmounted()
  })

  it('should clean up old listener when reactive eventElement or element changes', async () => {
    const containerA = document.createElement('div')
    const containerB = document.createElement('div')
    const target = document.createElement('div')
    document.body.append(containerA, containerB)

    const removeASpy = vi.spyOn(containerA, 'removeEventListener')
    const addBSpy = vi.spyOn(containerB, 'addEventListener')

    const props = reactive<MotionStickyProps>({ elementScroll: containerA })
    const elementRef = ref<HTMLElement | undefined>(target)
    const stickyElement = new MotionStickyElement(props, elementRef)

    const scroll = new MotionStickyScroll(props, () => stickyElement)
    scroll.onMounted()

    props.elementScroll = containerB
    await nextTick()

    expect(removeASpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
    expect(addBSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })

    scroll.onUnmounted()
  })

  it('should stop listeners, watcher, and cancel pending animation frame on unmount', async () => {
    const container = document.createElement('div')
    const target = document.createElement('div')
    document.body.appendChild(container)

    const removeSpy = vi.spyOn(container, 'removeEventListener')
    const cancelFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')

    const elementRef = ref<HTMLElement | undefined>(target)
    const stickyElement = new MotionStickyElement({ elementScroll: container }, elementRef)
    const setStatusSpy = vi.spyOn(stickyElement, 'setStatus')
    vi.spyOn(stickyElement, 'getPositionStyle').mockReturnValue({ top: 0, bottom: 0 })
    vi.spyOn(stickyElement, 'getPositionElement').mockReturnValue({ top: 0, bottom: 0 })

    const scroll = new MotionStickyScroll({}, () => stickyElement)
    scroll.onMounted()

    scroll.onUnmounted()

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
    expect(cancelFrameSpy).toHaveBeenCalled()

    vi.runAllTimers()
    expect(setStatusSpy).not.toHaveBeenCalled()

    const addSpyAfterUnmount = vi.spyOn(container, 'addEventListener')
    elementRef.value = document.createElement('div')
    await nextTick()
    expect(addSpyAfterUnmount).not.toHaveBeenCalled()
  })

  it('should not throw when update runs in non-DOM runtime', () => {
    vi.spyOn(functional, 'isDomRuntime').mockReturnValue(false)
    const stickyElement = new MotionStickyElement({}, ref())
    const scroll = new MotionStickyScroll({}, () => stickyElement)

    expect(() => scroll.update()).not.toThrow()
  })
})
