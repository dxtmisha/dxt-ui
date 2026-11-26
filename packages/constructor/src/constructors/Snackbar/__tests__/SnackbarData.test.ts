// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { SnackbarData } from '../SnackbarData'
import { SnackbarEvent } from '../SnackbarEvent'
import type { SnackbarValue } from '../basicTypes'
import type { SnackbarProps } from '../props'

/** Mocked visibility toggle / Переключатель видимости для тестов */
let mockVisible = true

vi.mock('@dxtmisha/functional-basic', async () => {
  const actual = await vi.importActual<typeof import('@dxtmisha/functional-basic')>('@dxtmisha/functional-basic')
  return {
    ...actual,
    isElementVisible: () => mockVisible
  }
})

/** Creates a mock event getter and emitter / Создаёт мок геттера событий и эмиттера */
function createEventFixture() {
  const emits = vi.fn()
  const event = new SnackbarEvent(emits)
  const eventGetter = vi.fn(() => event)

  return { emits, event, eventGetter }
}

describe('SnackbarData', () => {
  beforeEach(() => {
    mockVisible = true
    vi.useFakeTimers()
    let frameCounter = 0
    vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback) => {
      const id = ++frameCounter
      setTimeout(() => callback(0), 0)
      return id
    }))
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should initialize empty without eagerly invoking the lazy event getter', () => {
      const { eventGetter } = createEventFixture()
      const data = new SnackbarData(
        { delay: 5000 },
        ref(document.createElement('div')),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      expect(data.isItem()).toBe(false)
      expect(data.isPriority()).toBe(false)
      expect(data.item.value).toEqual([])
      expect(eventGetter).not.toHaveBeenCalled()
    })

    it('should track isItem, isPriority, and getItemByValue accurately', () => {
      const { eventGetter } = createEventFixture()
      const data = new SnackbarData(
        { delay: 5000 },
        ref(document.createElement('div')),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      data.add({ value: 'regular-1', data: { label: 'Normal' } })
      expect(data.isItem()).toBe(true)
      expect(data.isPriority()).toBe(false)
      expect(data.getItemByValue('regular-1')?.data?.label).toBe('Normal')
      expect(data.getItemByValue('missing')).toBeUndefined()

      data.add({ value: 'urgent-1', highPriority: true, data: { label: 'Urgent' } })
      expect(data.isPriority()).toBe(true)
      expect(data.getItemByValue('urgent-1')?.highPriority).toBe(true)

      data.onUnmounted()
    })

    it('should emit show when item element is visible and auto-remove after delay + 256ms', () => {
      const container = document.createElement('div')
      const { emits, eventGetter } = createEventFixture()
      const data = new SnackbarData(
        { delay: 5000 },
        ref(container),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      const itemElement = document.createElement('div')
      itemElement.setAttribute('data-snackbar-item', 'auto-1')
      container.appendChild(itemElement)

      data.add({ value: 'auto-1', delay: 1000, data: { label: 'Auto' } })

      // Flush scheduled rAF
      vi.advanceTimersByTime(0)

      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('show', 'auto-1', expect.objectContaining({ value: 'auto-1', delay: 1000 }))
      expect(data.getItemByValue('auto-1')?.resumableTimer).toBeDefined()

      // Before delay + 256ms elapses, item remains open
      vi.advanceTimersByTime(1255)
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(false)

      // At 1256ms timer fires remove(), adding hide class
      vi.advanceTimersByTime(1)
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(true)

      // Trigger transitionend to finalize hide
      itemElement.dispatchEvent(new Event('transitionend'))
      expect(data.isItem()).toBe(false)
      expect(emits).toHaveBeenCalledWith('hide', 'auto-1', expect.objectContaining({ value: 'auto-1' }))
    })

    it('should retry display check every 128ms until element becomes visible', () => {
      mockVisible = false
      const container = document.createElement('div')
      const { emits, eventGetter } = createEventFixture()
      const data = new SnackbarData(
        { delay: 3000 },
        ref(container),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      const itemElement = document.createElement('div')
      itemElement.setAttribute('data-snackbar-item', 'queued-1')
      container.appendChild(itemElement)

      data.add({ value: 'queued-1', delay: 1000 })
      vi.advanceTimersByTime(0)
      expect(emits).not.toHaveBeenCalled()

      // Still hidden on first retry
      vi.advanceTimersByTime(128)
      expect(emits).not.toHaveBeenCalled()

      // Becomes visible before next retry
      mockVisible = true
      vi.advanceTimersByTime(128)
      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('show', 'queued-1', expect.objectContaining({ value: 'queued-1' }))

      data.onUnmounted()
    })

    it('should scroll container to bottom on add', () => {
      const container = document.createElement('div')
      Object.defineProperty(container, 'scrollHeight', { value: 420, configurable: true })
      const { eventGetter } = createEventFixture()
      const data = new SnackbarData(
        {},
        ref(container),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      data.add({ value: 'scroll-1', delay: -1 })
      vi.advanceTimersByTime(0)

      expect(container.scrollTop).toBe(420)
      data.onUnmounted()
    })

    it('should pause and resume auto-close timers for all displayed items', () => {
      const container = document.createElement('div')
      const { emits, eventGetter } = createEventFixture()
      const data = new SnackbarData(
        {},
        ref(container),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      const itemElement = document.createElement('div')
      itemElement.setAttribute('data-snackbar-item', 'pausable')
      container.appendChild(itemElement)

      data.add({ value: 'pausable', delay: 1000 })
      vi.advanceTimersByTime(0) // starts timer of 1256ms

      // Advance 500ms, then pause
      vi.advanceTimersByTime(500)
      data.pause()

      // Advance 5000ms while paused — should NOT close
      vi.advanceTimersByTime(5000)
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(false)
      expect(emits).not.toHaveBeenCalledWith('hide', expect.anything(), expect.anything())

      // Resume — remaining ~756ms should trigger hide
      data.resume()
      vi.advanceTimersByTime(755)
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(false)
      vi.advanceTimersByTime(1)
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(true)

      // Fallback 512ms timer completes removal when transitionend does not fire
      vi.advanceTimersByTime(512)
      expect(data.isItem()).toBe(false)
      expect(emits).toHaveBeenCalledWith('hide', 'pausable', expect.objectContaining({ value: 'pausable' }))
    })

    it('should remove items synchronously when DOM element is absent and clear all items', () => {
      const { emits, eventGetter } = createEventFixture()
      const data = new SnackbarData(
        {},
        ref(document.createElement('div')),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      data.add({ value: 'item-a', delay: -1 })
      data.add({ value: 'item-b', delay: -1 })
      expect(data.item.value).toHaveLength(2)

      data.clear()
      expect(data.item.value).toHaveLength(0)
      expect(emits).toHaveBeenCalledTimes(2)
      expect(emits).toHaveBeenNthCalledWith(1, 'hide', 'item-a', expect.objectContaining({ value: 'item-a' }))
      expect(emits).toHaveBeenNthCalledWith(2, 'hide', 'item-b', expect.objectContaining({ value: 'item-b' }))
    })
  })

  describe('Boundary values, zero/falsy traps, and special characters', () => {
    it('should resolve delay fallback chain correctly including numeric 0 and negative -1', () => {
      const container = document.createElement('div')
      const { emits, eventGetter } = createEventFixture()
      const props: SnackbarProps = {}
      const data = new SnackbarData(
        props,
        ref(container),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      // Default 10_000 when both item.delay and props.delay are undefined
      data.add({ value: 'default-delay' })
      expect(data.getItemByValue('default-delay')?.delay).toBe(10_000)

      // Numeric 0 is preserved as 0 (not coerced to default)
      data.add({ value: 'zero-delay', delay: 0 })
      expect(data.getItemByValue('zero-delay')?.delay).toBe(0)

      // Negative delay (-1) emits show when visible, but never starts an auto-close timer
      const persistentElement = document.createElement('div')
      persistentElement.setAttribute('data-snackbar-item', 'persistent')
      container.appendChild(persistentElement)

      data.add({ value: 'persistent', delay: -1 })
      expect(data.getItemByValue('persistent')?.delay).toBe(-1)

      vi.advanceTimersByTime(0)
      expect(emits).toHaveBeenCalledWith('show', 'persistent', expect.objectContaining({ value: 'persistent', delay: -1 }))
      expect(data.getItemByValue('persistent')?.resumableTimer).toBeUndefined()

      vi.advanceTimersByTime(60_000)
      expect(data.getItemByValue('persistent')).toBeDefined()
      expect(persistentElement.classList.contains('d1-snackbar--hide')).toBe(false)

      data.onUnmounted()
    })

    it('should update an existing item in place on duplicate value, resetting timers and cancelling active hide transition', () => {
      const container = document.createElement('div')
      const { emits, eventGetter } = createEventFixture()
      const data = new SnackbarData(
        { delay: 5000 },
        ref(container),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      const itemElement = document.createElement('div')
      itemElement.setAttribute('data-snackbar-item', 'sync-status')
      container.appendChild(itemElement)

      data.add({ value: 'sync-status', delay: 1000, data: { label: 'Syncing...' } })
      vi.advanceTimersByTime(0)
      expect(data.item.value).toHaveLength(1)
      expect(data.getItemByValue('sync-status')?.data?.label).toBe('Syncing...')

      // Start hiding the existing item
      data.remove('sync-status')
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(true)

      // Re-adding with the same value updates the existing record in place and cancels hide
      emits.mockClear()
      data.add({
        value: 'sync-status',
        highPriority: true,
        delay: 2000,
        data: { label: 'Sync completed' }
      })

      expect(data.item.value).toHaveLength(1)
      expect(data.getItemByValue('sync-status')?.data?.label).toBe('Sync completed')
      expect(data.getItemByValue('sync-status')?.highPriority).toBe(true)
      expect(data.getItemByValue('sync-status')?.delay).toBe(2000)
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(false)

      // Old hide fallback timer and old 1000ms timer must not remove the updated item
      vi.advanceTimersByTime(0)
      expect(emits).toHaveBeenCalledWith('show', 'sync-status', expect.objectContaining({ value: 'sync-status', delay: 2000 }))
      vi.advanceTimersByTime(1500)
      expect(data.item.value).toHaveLength(1)
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(false)

      // New 2000 + 256ms timer removes it at 2256ms
      vi.advanceTimersByTime(756)
      expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(true)

      data.onUnmounted()
    })

    it('should generate unique sequential IDs when value is omitted or empty string and clear edge-case empty value', () => {
      const { eventGetter } = createEventFixture()
      const data = new SnackbarData(
        {},
        ref(undefined),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      data.add({ delay: -1 })
      data.add({ value: '', delay: -1 })
      data.add({ value: '   ', delay: -1 })

      expect(data.item.value.map(entry => entry.value)).toEqual([
        'snackbar-item-1',
        'snackbar-item-2',
        'snackbar-item-3'
      ])

      // Even if a caller directly assigns empty string value into shallowRef, clear() still removes it
      data.item.value = [{ value: '' }]
      data.clear()
      expect(data.item.value).toHaveLength(0)
    })

    it('should not mutate caller-supplied SnackbarValue object on add', () => {
      const { eventGetter } = createEventFixture()
      const data = new SnackbarData(
        { delay: 3000 },
        ref(undefined),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      const originalInput: SnackbarValue = { data: { label: 'Immutable' } }
      const snapshot = { ...originalInput }

      data.add(originalInput)
      expect(originalInput).toEqual(snapshot)
      expect(originalInput.value).toBeUndefined()
      expect(originalInput.delay).toBeUndefined()

      data.onUnmounted()
    })

    it('should safely match elements whose value contains quotes, brackets, or backslashes without selector errors', () => {
      const container = document.createElement('div')
      const { emits, eventGetter } = createEventFixture()
      const data = new SnackbarData(
        {},
        ref(container),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      const specialValue = 'err-"quoted"-[1]\\path'
      const asideElement = document.createElement('aside')
      asideElement.setAttribute('data-snackbar-item', specialValue)
      container.appendChild(asideElement)

      data.add({ value: specialValue, highPriority: true, delay: -1 })
      expect(() => data.remove(specialValue)).not.toThrow()
      expect(asideElement.classList.contains('d1-snackbar--hide')).toBe(true)

      // Duplicate remove() during active hide transition is safely ignored
      const addListenerSpy = vi.spyOn(asideElement, 'addEventListener')
      data.remove(specialValue)
      expect(addListenerSpy).not.toHaveBeenCalled()

      asideElement.dispatchEvent(new Event('transitionend'))
      expect(data.isItem()).toBe(false)
      expect(emits).toHaveBeenCalledTimes(1)
    })
  })

  describe('Lifecycle cleanup, unmount safety, and non-DOM resilience', () => {
    it('should cancel all pending animation frames, display retry timers, hide timers, transition listeners, and ResumableTimers on unmount', () => {
      mockVisible = false
      const container = document.createElement('div')
      const { emits, eventGetter } = createEventFixture()
      const data = new SnackbarData(
        {},
        ref(container),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      // Item 1: waiting in display retry loop (hidden)
      const hiddenElement = document.createElement('div')
      hiddenElement.setAttribute('data-snackbar-item', 'hidden-1')
      container.appendChild(hiddenElement)
      data.add({ value: 'hidden-1', delay: 2000 })
      vi.advanceTimersByTime(0) // schedules 128ms retry timer

      // Item 2: visible with active ResumableTimer, then enters hide transition
      mockVisible = true
      const activeElement = document.createElement('div')
      activeElement.setAttribute('data-snackbar-item', 'active-2')
      container.appendChild(activeElement)
      data.add({ value: 'active-2', delay: 2000 })
      vi.advanceTimersByTime(0) // emits show and creates ResumableTimer
      const removeListenerSpy = vi.spyOn(activeElement, 'removeEventListener')
      data.remove('active-2')

      // Item 3: freshly added with pending rAF
      data.add({ value: 'raf-3', delay: 2000 })

      emits.mockClear()

      // Unmount cleans everything
      data.onUnmounted()
      expect(cancelAnimationFrame).toHaveBeenCalled()
      expect(removeListenerSpy).toHaveBeenCalledWith('transitionend', expect.any(Function))

      // Advance timers far into the future — zero post-unmount emits or loops!
      vi.advanceTimersByTime(60_000)
      activeElement.dispatchEvent(new Event('transitionend'))
      expect(emits).not.toHaveBeenCalled()

      // Remount resets flag cleanly
      data.onMounted()
      data.add({ value: 'after-remount', delay: -1 })
      expect(data.getItemByValue('after-remount')).toBeDefined()
      data.onUnmounted()
    })

    it('should not throw when requestAnimationFrame is unavailable (SSR / non-DOM)', () => {
      vi.stubGlobal('requestAnimationFrame', undefined)
      const { eventGetter } = createEventFixture()
      const data = new SnackbarData(
        {},
        ref(undefined),
        new DesignName('d1.snackbar'),
        eventGetter
      )

      expect(() => data.add({ value: 'ssr-item', delay: 1000 })).not.toThrow()
      expect(data.isItem()).toBe(true)
      data.onUnmounted()
    })
  })
})
