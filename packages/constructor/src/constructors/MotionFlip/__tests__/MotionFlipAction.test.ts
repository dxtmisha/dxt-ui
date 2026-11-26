import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MotionFlipAction } from '../MotionFlipAction'
import type { MotionFlipElement } from '../MotionFlipElement'
import type { MotionFlipItems } from '../MotionFlipItems'
import type { MotionFlipProps } from '../props'

describe('MotionFlipAction', () => {
  let rafCallbacks: Map<number, FrameRequestCallback>
  let nextFrameId: number

  const flushNextFrame = () => {
    const entries = Array.from(rafCallbacks.entries())
    rafCallbacks.clear()
    for (const [, callback] of entries) {
      callback(performance.now())
    }
  }

  beforeEach(() => {
    vi.useFakeTimers()
    rafCallbacks = new Map()
    nextFrameId = 1

    vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback) => {
      const id = nextFrameId++
      rafCallbacks.set(id, callback)
      return id
    }))

    vi.stubGlobal('cancelAnimationFrame', vi.fn((id: number) => {
      rafCallbacks.delete(id)
    }))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  const createDependencies = (props: MotionFlipProps = { auto: true }, enabled = true) => {
    const elementManager = {
      isEnable: vi.fn(() => enabled),
      addClassFreeze: vi.fn(),
      addClassGo: vi.fn(),
      resetStatus: vi.fn()
    } as unknown as MotionFlipElement

    const items = {
      init: vi.fn(),
      update: vi.fn(),
      reset: vi.fn(),
      resetItem: vi.fn(() => false)
    } as unknown as MotionFlipItems

    const action = new MotionFlipAction(
      props,
      () => elementManager,
      () => items
    )

    return { action, elementManager, items }
  }

  it('should not invoke dependency getters during construction', () => {
    const elementGetter = vi.fn()
    const itemsGetter = vi.fn()

    new MotionFlipAction({}, elementGetter, itemsGetter)

    expect(elementGetter).not.toHaveBeenCalled()
    expect(itemsGetter).not.toHaveBeenCalled()
  })

  it('should evaluate isEnable based on disabled prop and element availability', () => {
    expect(createDependencies({ disabled: false }, true).action.isEnable()).toBe(true)
    expect(createDependencies({ disabled: true }, true).action.isEnable()).toBe(false)
    expect(createDependencies({ disabled: false }, false).action.isEnable()).toBe(false)
  })

  it('should execute callback without starting FLIP when disabled or element missing', async () => {
    const { action, items } = createDependencies({ disabled: true }, true)
    const callback = vi.fn(async () => undefined)

    await action.update(callback)

    expect(callback).toHaveBeenCalledTimes(1)
    expect(items.init).not.toHaveBeenCalled()
    expect(rafCallbacks.size).toBe(0)
  })

  it('should run full two-frame FLIP cycle on update and reset after fallback timeout', async () => {
    const { action, elementManager, items } = createDependencies({ auto: true }, true)
    const order: string[] = []
    vi.mocked(items.init).mockImplementation(() => order.push('init'))

    await action.update(async () => {
      order.push('callback')
    })

    expect(order).toEqual(['init', 'callback'])
    expect(elementManager.resetStatus).toHaveBeenCalledTimes(1)
    expect(items.reset).toHaveBeenCalledTimes(1)
    expect(rafCallbacks.size).toBe(1)

    // Frame 1: update items & add freeze
    flushNextFrame()
    expect(items.update).toHaveBeenCalledTimes(1)
    expect(elementManager.addClassFreeze).toHaveBeenCalledTimes(1)
    expect(elementManager.addClassGo).not.toHaveBeenCalled()
    expect(rafCallbacks.size).toBe(1)

    // Frame 2: add go & schedule 1024ms timeout
    flushNextFrame()
    expect(elementManager.addClassGo).toHaveBeenCalledTimes(1)
    expect(rafCallbacks.size).toBe(0)

    // Before timeout threshold
    vi.advanceTimersByTime(1023)
    expect(rafCallbacks.size).toBe(0)

    // At 1024ms fallback timeout
    vi.advanceTimersByTime(1)
    expect(rafCallbacks.size).toBe(1)

    flushNextFrame()
    expect(elementManager.resetStatus).toHaveBeenCalledTimes(2)
    expect(items.reset).toHaveBeenCalledTimes(2)
    expect(items.init).toHaveBeenCalledTimes(2)
  })

  it('should not re-initialize items on reset when auto is false', () => {
    const { action, items } = createDependencies({ auto: false }, true)

    action.reset()
    expect(rafCallbacks.size).toBe(1)

    // Deduplicate consecutive reset calls while transitioning
    action.reset()
    expect(rafCallbacks.size).toBe(1)

    flushNextFrame()
    expect(items.reset).toHaveBeenCalledTimes(1)
    expect(items.init).not.toHaveBeenCalled()
  })

  it('should handle onTransition only when resetItem matches', () => {
    const { action, items } = createDependencies({ auto: false }, true)
    const event = {} as TransitionEvent

    vi.mocked(items.resetItem).mockReturnValueOnce(false)
    action.onTransition(event)
    expect(rafCallbacks.size).toBe(0)

    vi.mocked(items.resetItem).mockReturnValueOnce(true)
    action.onTransition(event)
    expect(rafCallbacks.size).toBe(1)
  })

  it('should cancel pending resetFrameId when stop or go is called before reset frame runs', () => {
    const { action, items } = createDependencies({ auto: true }, true)

    action.reset()
    expect(rafCallbacks.size).toBe(1)

    action.stop()
    expect(rafCallbacks.size).toBe(0)
    expect(items.init).not.toHaveBeenCalled()
  })

  it('should cancel all active RAFs and timers on unmount', () => {
    const { action, elementManager, items } = createDependencies({ auto: true }, true)

    action.go()
    flushNextFrame()
    flushNextFrame()
    expect(vi.getTimerCount()).toBe(1)

    action.onUnmounted()

    expect(vi.getTimerCount()).toBe(0)
    expect(rafCallbacks.size).toBe(0)
    expect(elementManager.resetStatus).toHaveBeenCalledTimes(2)
    expect(items.reset).toHaveBeenCalledTimes(2)
  })
})
