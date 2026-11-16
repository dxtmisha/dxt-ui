// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { effectScope, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { FieldSize } from '../FieldSize'

describe('FieldSize', () => {
  let originalRaf: typeof requestAnimationFrame
  let originalCancelRaf: typeof cancelAnimationFrame
  const cleanups: Array<() => void> = []

  beforeEach(() => {
    originalRaf = window.requestAnimationFrame
    originalCancelRaf = window.cancelAnimationFrame
  })

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    window.requestAnimationFrame = originalRaf
    window.cancelAnimationFrame = originalCancelRaf
    vi.restoreAllMocks()
  })

  it('should compute offsets and update element CSS variables on mount', () => {
    window.requestAnimationFrame = (callback) => {
      callback(0)
      return 1
    }

    const label = document.createElement('label')
    const spaceEl = document.createElement('div')
    spaceEl.className = 'field-class__body__scoreboard__space'
    Object.defineProperty(spaceEl, 'offsetLeft', { value: 10, configurable: true })
    Object.defineProperty(spaceEl, 'offsetWidth', { value: 50, configurable: true })

    const parentEl = document.createElement('div')
    Object.defineProperty(parentEl, 'offsetWidth', { value: 200, configurable: true })

    label.appendChild(parentEl)
    parentEl.appendChild(spaceEl)

    const prefixEl = document.createElement('div')
    prefixEl.className = 'field-class__prefix'
    Object.defineProperty(prefixEl, 'offsetLeft', { value: 5, configurable: true })
    label.appendChild(prefixEl)

    const fieldSize = new FieldSize(ref(label), new DesignName('field.class'))
    fieldSize.onMounted()

    expect(label.style.getPropertyValue('--field-class-sys-left')).toBe('10px')
    expect(label.style.getPropertyValue('--field-class-sys-right')).toBe('140px')
    expect(label.style.getPropertyValue('--field-class-sys-title')).toBe('5px')
    expect(label.classList.contains('field-class--show')).toBe(true)

    fieldSize.onUnmounted()
  })

  it('should register resize listener via EventItem, cancel pending animation frames, and clean up on unmount', () => {
    const queuedCallbacks: FrameRequestCallback[] = []
    const cancelSpy = vi.fn()
    const addListenerSpy = vi.spyOn(window, 'addEventListener')
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener')

    window.requestAnimationFrame = (callback) => {
      queuedCallbacks.push(callback)
      return queuedCallbacks.length
    }
    window.cancelAnimationFrame = cancelSpy

    const scope = effectScope()
    const label = document.createElement('label')
    let fieldSize!: FieldSize

    scope.run(() => {
      fieldSize = new FieldSize(ref(label), new DesignName('field.class'))
      fieldSize.onMounted()
    })
    cleanups.push(() => scope.stop())

    expect(addListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function), undefined)
    expect(queuedCallbacks).toHaveLength(1)

    fieldSize.onUnmounted()

    expect(removeListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function), undefined)
    expect(cancelSpy).toHaveBeenCalledWith(1)
  })

  it('should stop retrying once recursion limit is exhausted when offsetLeft stays 0', () => {
    let rafCalls = 0
    window.requestAnimationFrame = (callback) => {
      rafCalls += 1
      callback(0)
      return rafCalls
    }

    const label = document.createElement('label')
    const fieldSize = new FieldSize(ref(label), new DesignName('field.class'))
    fieldSize.update(3)

    expect(rafCalls).toBe(3)
    expect(label.style.getPropertyValue('--field-class-sys-left')).toBe('')
  })
})
