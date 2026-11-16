// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'
import { FrameAbstract } from '../FrameAbstract'

class TestFrame extends FrameAbstract {
  start(callback: FrameRequestCallback): void {
    this.startFrame(callback)
  }

  stop(): void {
    this.stopFrame()
  }

  getFrameId(): number | undefined {
    return this.frameId
  }
}

describe('FrameAbstract', () => {
  let originalRaf: typeof requestAnimationFrame
  let originalCancelRaf: typeof cancelAnimationFrame

  beforeEach(() => {
    originalRaf = window.requestAnimationFrame
    originalCancelRaf = window.cancelAnimationFrame
  })

  afterEach(() => {
    window.requestAnimationFrame = originalRaf
    window.cancelAnimationFrame = originalCancelRaf
    vi.restoreAllMocks()
  })

  it('extends DesignLifecycleAbstract', () => {
    const instance = new TestFrame()
    expect(instance).toBeInstanceOf(DesignLifecycleAbstract)
  })

  it('schedules frame callback, cancels previous pending frame, and clears frameId on execution', () => {
    const callbacks: FrameRequestCallback[] = []
    const cancelSpy = vi.fn()

    window.requestAnimationFrame = (callback) => {
      callbacks.push(callback)
      return callbacks.length
    }
    window.cancelAnimationFrame = cancelSpy

    const instance = new TestFrame()
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    instance.start(firstCallback)
    expect(instance.getFrameId()).toBe(1)
    expect(cancelSpy).not.toHaveBeenCalled()

    instance.start(secondCallback)
    expect(cancelSpy).toHaveBeenCalledWith(1)
    expect(instance.getFrameId()).toBe(2)

    callbacks[1]?.(16)
    expect(secondCallback).toHaveBeenCalledWith(16)
    expect(firstCallback).not.toHaveBeenCalled()
    expect(instance.getFrameId()).toBeUndefined()
  })

  it('cancels pending frame on onUnmounted and ignores repeated calls', () => {
    const cancelSpy = vi.fn()

    window.requestAnimationFrame = () => 7
    window.cancelAnimationFrame = cancelSpy

    const instance = new TestFrame()
    instance.start(vi.fn())
    expect(instance.getFrameId()).toBe(7)

    instance.onUnmounted()
    expect(cancelSpy).toHaveBeenCalledTimes(1)
    expect(cancelSpy).toHaveBeenCalledWith(7)
    expect(instance.getFrameId()).toBeUndefined()

    instance.stop()
    instance.onUnmounted()
    expect(cancelSpy).toHaveBeenCalledTimes(1)
  })
})
