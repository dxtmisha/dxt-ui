// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { HashInstance } from '../HashInstance'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('HashInstance', () => {
  let instance: HashInstance

  beforeEach(() => {
    vi.useFakeTimers()
    history.replaceState(null, '', '/')
    instance = new HashInstance()
  })

  afterEach(() => {
    instance.destroy()
    vi.clearAllTimers()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  describe('reading and serialization', () => {
    it('returns undefined when no value or default exists', () => {
      expect(instance.get('missing')).toBeUndefined()
    })

    it('applies a default factory only once', () => {
      const factory = vi.fn(() => 'default')
      expect(instance.get('value', factory)).toBe('default')
      expect(instance.get('value', factory)).toBe('default')
      expect(factory).toHaveBeenCalledTimes(1)
    })

    it.each([0, false, ''])('accepts the falsy default %s', (value) => {
      expect(instance.get('value', value)).toBe(value)
    })

    it('decodes encoded keys and values', () => {
      history.replaceState(null, '', '/#query=hello%20world;filter%5Btype%5D=admin')
      expect(instance.get('query')).toBe('hello world')
      expect(instance.get('filter[type]')).toBe('admin')
    })

    it('accepts both supported key-value separators', () => {
      history.replaceState(null, '', '/#first=value;second:other')
      expect(instance.get('first')).toBe('value')
      expect(instance.get('second')).toBe('other')
    })

    it('keeps malformed encoded values and excludes prototype keys', () => {
      history.replaceState(null, '', '/#bad=%E0%A4%A;__proto__=bad;constructor=bad')
      expect(instance.get('bad')).toBe('%E0%A4%A')
      expect(instance.get('__proto__')).toBeUndefined()
      expect(instance.get('constructor')).toBeUndefined()
    })

    it('updates the hash and returns the same instance', () => {
      expect(instance.set('query', 'hello world')).toBe(instance)
      expect(instance.get('query')).toBe('hello world')
      expect(location.hash).toBe('#query=hello%20world')
    })

    it('accepts a factory when setting a value', () => {
      instance.set('value', () => 42)
      expect(instance.get('value')).toBe(42)
    })
  })

  describe('history state preservation', () => {
    it.each([
      { state: { position: 7, back: '/previous', scroll: { left: 0, top: 100 } } },
      { state: 'application-state' },
      { state: 42 },
      { state: ['first', 'second'] }
    ])('preserves the existing history state %j', ({ state }) => {
      history.replaceState(state, '', '/before?sort=old')
      instance.set('page', 2)
      expect(history.state).toEqual(state)
      expect(location.pathname).toBe('/before')
      expect(location.search).toBe('?sort=old')
      expect(location.hash).toBe('#page=2')
    })

    it('preserves history state while writing a missing default', () => {
      const state = { position: 3, current: '/app' }
      history.replaceState(state, '', '/app')
      expect(instance.get('page', 1)).toBe(1)
      expect(history.state).toEqual(state)
    })

    it('retains null when no application history state exists', () => {
      instance.set('page', 1)
      expect(history.state).toBeNull()
    })
  })

  describe('watchers and lifecycle', () => {
    it('does not register duplicate listeners on repeated reload', () => {
      const listenerSpy = vi.spyOn(globalThis, 'addEventListener')
      instance.reload()
      instance.reload()
      instance.get('page')
      expect(listenerSpy.mock.calls.filter(([type]) => type === 'hashchange')).toHaveLength(1)
    })

    it('registers hashchange when reload is the first operation', () => {
      history.replaceState(null, '', '/#page=1')
      const values: unknown[] = []
      instance.addWatch('page', value => values.push(value))
      instance.reload()
      history.replaceState(history.state, '', '/#page=2')
      dispatchEvent(new HashChangeEvent('hashchange'))
      expect(values).toEqual([1, 2])
      expect(instance.get('page')).toBe(2)
    })

    it('reads the published state from an initial watcher', () => {
      history.replaceState(null, '', '/#page=2')
      const values: unknown[] = []
      instance.addWatch<number>('page', () => {
        values.push(instance.get('page'))
      })
      expect(instance.get('page')).toBe(2)
      expect(values).toEqual([2])
    })

    it('notifies only remaining watchers when the hash changes', () => {
      instance.get('page')
      const removed = vi.fn()
      const kept = vi.fn()
      instance.addWatch('page', removed)
      instance.addWatch('page', kept)
      instance.removeWatch('page', removed)
      history.replaceState(null, '', '/#page=2')
      dispatchEvent(new HashChangeEvent('hashchange'))
      expect(removed).not.toHaveBeenCalled()
      expect(kept).toHaveBeenCalledWith(2)
    })

    it('waits for the write block to expire before reloading', () => {
      instance.set('page', 1)
      const watcher = vi.fn()
      instance.addWatch('page', watcher)
      history.replaceState(null, '', '/#page=2')
      instance.reload()
      vi.advanceTimersByTime(32)
      expect(watcher).not.toHaveBeenCalled()
      vi.advanceTimersByTime(128)
      expect(watcher).toHaveBeenCalledTimes(1)
      expect(watcher).toHaveBeenCalledWith(2)
    })

    it('removes the browser listener and cancels pending reload on destroy', () => {
      instance.set('page', 1)
      const watcher = vi.fn()
      instance.addWatch('page', watcher)
      history.replaceState(null, '', '/#page=2')
      instance.reload()
      instance.destroy()
      dispatchEvent(new HashChangeEvent('hashchange'))
      vi.advanceTimersByTime(200)
      expect(watcher).not.toHaveBeenCalled()
      expect(vi.getTimerCount()).toBe(0)
    })

    it('does not write browser history when the DOM runtime is disabled', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const state = { position: 1 }
      history.replaceState(state, '', '/before')
      const previousUrl = location.href
      instance.set('page', 2)
      expect(instance.get('page')).toBe(2)
      expect(history.state).toEqual(state)
      expect(location.href).toBe(previousUrl)
    })
  })
})
