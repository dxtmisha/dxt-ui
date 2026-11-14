// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, ref } from 'vue'
import { MotionTransformState } from '../MotionTransformState'

describe('MotionTransformState', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  const createElementMock = (options: {
    animation?: boolean
    windowMode?: boolean
    element?: HTMLDivElement
    head?: HTMLDivElement
    context?: HTMLDivElement
  } = {}) => {
    const element = options.element ?? document.createElement('div')
    const head = options.head ?? document.createElement('div')

    return {
      element: ref(element),
      elementHead: head,
      isAnimation: () => Boolean(options.animation),
      isWindow: () => Boolean(options.windowMode),
      getElement: () => element,
      getElementContext: () => options.context,
      style: {
        top: '--sys-top',
        left: '--sys-left',
        height: '--sys-height',
        scale: '--sys-scale',
        headWidth: '--sys-head-width',
        headHeight: '--sys-head-height',
        headScale: '--sys-head-scale',
        bodyHeight: '--sys-body-height',
        contextWidth: '--sys-context-width',
        contextHeight: '--sys-context-height'
      }
    } as any
  }

  it('should synchronize initial open state on mount when props.open is true', () => {
    vi.useFakeTimers()
    const scope = effectScope()
    const element = document.createElement('div')
    const mockElement = createElementMock({ element })
    const sizeMock = { update: vi.fn(), reset: vi.fn() } as any
    const tabIndexMock = { updateOldElement: vi.fn(), toggle: vi.fn() } as any

    const state = scope.run(() => new MotionTransformState(
      { open: true },
      () => mockElement,
      () => sizeMock,
      () => tabIndexMock
    ))!

    state.onMounted()
    expect(element.dataset.show).toBe('none')
    expect(element.dataset.open).toBe('none')

    vi.advanceTimersToNextFrame()
    expect(state.open.value).toBe(true)
    expect(state.isOpen()).toBe(true)
    expect(state.isShow()).toBe(true)
    expect(sizeMock.update).toHaveBeenCalledTimes(1)

    state.onUnmounted()
    scope.stop()
  })

  it('should handle animated set, rapid cancellation, and unmount cleanup without leaking rAF or timers', () => {
    vi.useFakeTimers()
    const cancelFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')
    const scope = effectScope()
    const element = document.createElement('div')
    const mockElement = createElementMock({ element, animation: true })
    const sizeMock = { update: vi.fn(), reset: vi.fn() } as any
    const tabIndexMock = { updateOldElement: vi.fn(), toggle: vi.fn() } as any

    const state = scope.run(() => new MotionTransformState(
      { open: false, animationShow: true },
      () => mockElement,
      () => sizeMock,
      () => tabIndexMock
    ))!

    state.onMounted()

    // Start opening with animation, then immediately close before rAF fires
    state.set(true, true)
    expect(state.show.value).toBe(true)
    expect(tabIndexMock.updateOldElement).toHaveBeenCalledTimes(1)

    state.set(false, false)
    expect(cancelFrameSpy).toHaveBeenCalled()
    expect(state.open.value).toBe(false)

    // Advance all frames/timers: should not flip back to open: true
    vi.runAllTimers()
    expect(state.open.value).toBe(false)

    // Unmount while animation is pending cancels pending frames and timer
    state.set(true, true)
    state.onUnmounted()
    vi.runAllTimers()
    expect(state.open.value).toBe(false)

    scope.stop()
  })

  it('should restore focus to elementHead on reset when closing', () => {
    vi.useFakeTimers()
    const div = document.createElement('div')
    const head = document.createElement('div')
    head.focus = vi.fn()
    document.body.appendChild(div)
    document.body.appendChild(head)

    const mockElement = createElementMock({ element: div, head })

    const state = new MotionTransformState(
      { open: false, clickOpen: true },
      () => mockElement,
      () => ({ update: vi.fn(), reset: vi.fn() } as any),
      () => ({ updateOldElement: vi.fn(), toggle: vi.fn() } as any)
    )

    state.reset()
    vi.advanceTimersToNextFrame()

    expect(head.focus).toHaveBeenCalledTimes(1)

    state.onUnmounted()
    div.remove()
    head.remove()
  })

  it('should report isTeleportClose only when teleport is active and open is false', () => {
    const state = new MotionTransformState(
      {},
      () => createElementMock(),
      () => ({ update: vi.fn(), reset: vi.fn() } as any),
      () => ({ updateOldElement: vi.fn(), toggle: vi.fn() } as any)
    )

    expect(state.isTeleportClose()).toBe(false)
    state.teleport.value = true
    expect(state.isTeleportClose()).toBe(true)
    state.open.value = true
    expect(state.isTeleportClose()).toBe(false)
  })
})
