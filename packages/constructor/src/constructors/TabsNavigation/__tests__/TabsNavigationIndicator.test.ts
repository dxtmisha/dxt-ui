// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import type { TabsNavigationSelected } from '../TabsNavigationSelected'
import { TabsNavigationIndicator } from '../TabsNavigationIndicator'

describe('TabsNavigationIndicator', () => {
  let frameQueue: Map<number, FrameRequestCallback>
  let nextFrameId: number

  beforeEach(() => {
    vi.useFakeTimers()
    frameQueue = new Map()
    nextFrameId = 1

    vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback) => {
      const id = nextFrameId++
      frameQueue.set(id, callback)
      return id
    }))

    vi.stubGlobal('cancelAnimationFrame', vi.fn((id: number) => {
      frameQueue.delete(id)
    }))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  const flushAnimationFrames = () => {
    const callbacks = Array.from(frameQueue.entries())
    frameQueue.clear()
    callbacks.forEach(([, callback]) => callback(0))
  }

  const createFixture = (initialSelected: string | number = 'tab-1') => {
    const container = document.createElement('div')
    const itemFirst = document.createElement('button')
    itemFirst.setAttribute('data-value', 'tab-1')
    itemFirst.getBoundingClientRect = () => ({ left: 20, width: 80 } as DOMRect)
    Object.defineProperty(itemFirst, 'offsetLeft', { value: 20, configurable: true })

    const itemSecond = document.createElement('button')
    itemSecond.setAttribute('data-value', 'tab-2')
    itemSecond.getBoundingClientRect = () => ({ left: 120, width: 100 } as DOMRect)
    Object.defineProperty(itemSecond, 'offsetLeft', { value: 120, configurable: true })

    container.appendChild(itemFirst)
    container.appendChild(itemSecond)

    const setActual = vi.fn()
    const selectedInstance = {
      item: ref<string | number | undefined>(initialSelected),
      setActual
    } as unknown as TabsNavigationSelected

    const naming = new DesignName('d1.tabsNavigation')
    const getSelected = vi.fn(() => selectedInstance)

    const indicator = new TabsNavigationIndicator(
      () => container,
      naming,
      getSelected
    )

    return {
      container,
      itemFirst,
      itemSecond,
      selectedInstance,
      setActual,
      getSelected,
      indicator
    }
  }

  it('should stay side-effect-free in constructor and align initial scrollLeft onMounted', () => {
    const { container, getSelected, indicator } = createFixture('tab-2')

    expect(getSelected).not.toHaveBeenCalled()
    expect(frameQueue.size).toBe(0)

    indicator.onMounted()
    expect(frameQueue.size).toBe(1)

    flushAnimationFrames()
    expect(container.scrollLeft).toBe(120)

    indicator.onUnmounted()
  })

  it('should animate transition variables and remove the exact same variables after 384ms', async () => {
    const { itemFirst, itemSecond, setActual, indicator } = createFixture('tab-1')

    // Forward move: rectOld.left (20) - rectNew.left (120) = -100 (< 0 -> '+')
    await indicator.go('tab-2', 'tab-1')

    expect(itemSecond.style.getPropertyValue('--d1-item-sys-left')).toBe('-100px + var(--d1-item-gap, 0px)')
    expect(itemSecond.style.getPropertyValue('--d1-item-sys-width')).toBe('80px')

    flushAnimationFrames()
    expect(setActual).toHaveBeenCalledWith('tab-2')

    vi.advanceTimersByTime(384)
    expect(itemSecond.style.getPropertyValue('--d1-item-sys-left')).toBe('')
    expect(itemSecond.style.getPropertyValue('--d1-item-sys-width')).toBe('')

    // Backward move: rectOld.left (120) - rectNew.left (20) = 100 (>= 0 -> '-')
    await indicator.go('tab-1', 'tab-2')
    expect(itemFirst.style.getPropertyValue('--d1-item-sys-left')).toBe('100px - var(--d1-item-gap, 0px)')
    expect(itemFirst.style.getPropertyValue('--d1-item-sys-width')).toBe('100px')

    vi.advanceTimersByTime(384)
    expect(itemFirst.style.getPropertyValue('--d1-item-sys-left')).toBe('')
    expect(itemFirst.style.getPropertyValue('--d1-item-sys-width')).toBe('')
  })

  it('should react to selected.item changes when mounted and handle special selector characters', async () => {
    const { container, selectedInstance, setActual, indicator } = createFixture('tab-1')

    const specialValue = 'quote"and\\slash'
    const specialItem = document.createElement('button')
    specialItem.setAttribute('data-value', specialValue)
    specialItem.getBoundingClientRect = () => ({ left: 240, width: 90 } as DOMRect)
    container.appendChild(specialItem)

    indicator.onMounted()
    flushAnimationFrames()

    selectedInstance.item.value = specialValue
    await nextTick()
    await nextTick()

    expect(specialItem.style.getPropertyValue('--d1-item-sys-left')).toBe('-220px + var(--d1-item-gap, 0px)')
    expect(specialItem.style.getPropertyValue('--d1-item-sys-width')).toBe('80px')

    flushAnimationFrames()
    expect(setActual).toHaveBeenCalledWith(specialValue)

    indicator.onUnmounted()
  })

  it('should deduplicate reset timers and cancel all frames, timers, and watchers onUnmounted', async () => {
    const { itemSecond, selectedInstance, setActual, indicator } = createFixture('tab-1')

    indicator.onMounted()

    // Trigger go twice rapidly on same element
    await indicator.go('tab-2', 'tab-1')
    vi.advanceTimersByTime(200)
    await indicator.go('tab-2', 'tab-1')

    // At +200ms (total 400ms from first call, only 200ms from second), style must still exist
    vi.advanceTimersByTime(200)
    expect(itemSecond.style.getPropertyValue('--d1-item-sys-left')).toBe('-100px + var(--d1-item-gap, 0px)')

    // Unmount before timers and frames complete
    indicator.onUnmounted()

    expect(cancelAnimationFrame).toHaveBeenCalled()
    expect(frameQueue.size).toBe(0)

    // Watchers must no longer fire after unmount
    selectedInstance.item.value = 'tab-2'
    await nextTick()
    await nextTick()
    flushAnimationFrames()
    expect(setActual).not.toHaveBeenCalled()

    // In-flight go aborted when unmounted before nextTick resolves
    const goPromise = indicator.go('tab-2', 'tab-1')
    indicator.onUnmounted()
    await goPromise
    expect(frameQueue.size).toBe(0)
  })
})
