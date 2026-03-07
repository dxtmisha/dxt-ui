// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Hash } from '../Hash'

describe('Hash', () => {
  beforeEach(() => {
    // Reset hash before each test by clearing the private state
    // We need to reset location.hash
    window.location.hash = ''
    ;(Hash as any).hash = {}
    ;(Hash as any).watch = {}
  })

  it('should set and get a value', () => {
    Hash.set('page', 2)
    expect(Hash.get('page')).toBe(2)
  })

  it('should return a default value when the key is not present', () => {
    const value = Hash.get('missing', 'default')
    expect(value).toBe('default')
  })

  it('should return a default value from a function', () => {
    const value = Hash.get('fromFn', () => 99)
    expect(value).toBe(99)
  })

  it('should not update if the value has not changed', () => {
    Hash.set('key', 'value')

    const updateSpy = vi.spyOn(history, 'replaceState')
    Hash.set('key', 'value') // same value

    expect(updateSpy).not.toHaveBeenCalled()
    updateSpy.mockRestore()
  })

  it('should update URL hash when the value changes', () => {
    const replaceStateSpy = vi.spyOn(history, 'replaceState')
    Hash.set('filter', 'active')

    expect(replaceStateSpy).toHaveBeenCalledTimes(1)
    replaceStateSpy.mockRestore()
  })

  it('should set value using a function callback', () => {
    Hash.set('counter', 5)
    Hash.set('counter', () => 10)
    expect(Hash.get('counter')).toBe(10)
  })

  it('should call watcher when the value changes', () => {
    const callback = vi.fn()
    Hash.addWatch<string>('color', callback)

    // Simulate a hashchange with a new value
    ;(Hash as any).hash = { color: 'blue' }
    ;(Hash as any).makeWatch({ color: 'red' })

    expect(callback).toHaveBeenCalledWith('red')
  })

  it('should not call watcher if the value is unchanged', () => {
    const callback = vi.fn()
    Hash.addWatch<string>('shape', callback)
    ;(Hash as any).hash = { shape: 'circle' }
    ;(Hash as any).makeWatch({ shape: 'circle' })

    expect(callback).not.toHaveBeenCalled()
  })

  it('should support multiple watchers for the same key', () => {
    const cb1 = vi.fn()
    const cb2 = vi.fn()
    Hash.addWatch('x', cb1)
    Hash.addWatch('x', cb2)
    ;(Hash as any).hash = { x: 1 }
    ;(Hash as any).makeWatch({ x: 2 })

    expect(cb1).toHaveBeenCalledWith(2)
    expect(cb2).toHaveBeenCalledWith(2)
  })

  it('should reload without throwing (jsdom has a static `location.hash`)', () => {
    // jsdom does not allow writing to `location.hash`, so we just verify reload() runs cleanly
    expect(() => Hash.reload()).not.toThrow()
  })
})
