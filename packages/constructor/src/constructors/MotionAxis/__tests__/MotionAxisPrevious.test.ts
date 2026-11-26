// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick } from 'vue'
import { MotionAxisPrevious } from '../MotionAxisPrevious'
import type { MotionAxisStyles } from '../MotionAxisStyles'

describe('MotionAxisPrevious', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  it('should defer watcher registration until onMounted and reactively invoke styles', async () => {
    const mockStyles = {
      add: vi.fn(),
      remove: vi.fn()
    } as unknown as MotionAxisStyles
    const stylesGetter = vi.fn(() => mockStyles)

    const scope = effectScope()
    cleanups.push(() => scope.stop())

    const previous = new MotionAxisPrevious(stylesGetter)
    expect(stylesGetter).not.toHaveBeenCalled()

    // Before onMounted, setting item should not trigger styles watcher
    previous.set('slide-pre')
    await nextTick()
    expect(mockStyles.add).not.toHaveBeenCalled()

    // Activate lifecycle watcher inside effectScope
    scope.run(() => {
      previous.onMounted()
    })

    previous.set('slide-old')
    expect(previous.is('slide-old')).toBe(true)
    expect(previous.get()).toBe('slide-old')
    await nextTick()
    expect(mockStyles.add).toHaveBeenCalledWith('slide-old')

    previous.set(undefined)
    expect(previous.is('slide-old')).toBe(false)
    expect(previous.get()).toBeUndefined()
    await nextTick()
    expect(mockStyles.remove).toHaveBeenCalledTimes(1)
  })
})
