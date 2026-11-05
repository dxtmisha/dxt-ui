// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Hash } from '../Hash'
import { HashInstance } from '../HashInstance'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('Hash', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    Hash.reset()
    ServerStorage.remove('__ui:hash-instance__')
    history.replaceState(null, '', '/')
  })

  afterEach(() => {
    Hash.reset()
    ServerStorage.remove('__ui:hash-instance__')
    vi.clearAllTimers()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('returns the same scoped instance until reset', () => {
    const first = Hash.getItem()
    expect(first).toBeInstanceOf(HashInstance)
    expect(Hash.getItem()).toBe(first)
  })

  it.each([0, false, ''])('supports the default value %s', (value) => {
    expect(Hash.get('value', value)).toBe(value)
  })

  it('evaluates a default factory once and supports value factories', () => {
    const factory = vi.fn(() => 1)
    expect(Hash.get('page', factory)).toBe(1)
    expect(Hash.get('page', factory)).toBe(1)
    expect(factory).toHaveBeenCalledTimes(1)
    Hash.set('page', () => 2)
    expect(Hash.get('page')).toBe(2)
  })

  it('keeps application history state when setting a hash value', () => {
    const state = { position: 3 }
    history.replaceState(state, '', '/')
    Hash.set('page', 2)
    expect(history.state).toEqual(state)
    expect(location.hash).toBe('#page=2')
  })

  it('initializes the browser listener when reload is the first operation', () => {
    history.replaceState(null, '', '/#page=1')
    const values: unknown[] = []
    Hash.addWatch('page', value => values.push(value))
    Hash.reload()
    history.replaceState(history.state, '', '/#page=2')
    dispatchEvent(new HashChangeEvent('hashchange'))
    expect(values).toEqual([1, 2])
    expect(Hash.get('page')).toBe(2)
  })

  it('removes explicitly unsubscribed watchers', () => {
    Hash.get('page')
    const removed = vi.fn()
    const kept = vi.fn()
    Hash.addWatch('page', removed)
    Hash.addWatch('page', kept)
    Hash.removeWatch('page', removed)
    history.replaceState(null, '', '/#page=2')
    dispatchEvent(new HashChangeEvent('hashchange'))
    expect(removed).not.toHaveBeenCalled()
    expect(kept).toHaveBeenCalledWith(2)
  })

  describe('reset lifecycle', () => {
    it('resets only the active server context', () => {
      const runtime = vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const firstContext: Record<string, unknown> = {}
      const secondContext: Record<string, unknown> = {}
      let context = firstContext
      ServerStorage.init(() => context)

      try {
        Hash.set('page', 1)
        const firstInstance = Hash.getItem()
        context = secondContext
        Hash.set('page', 2)
        const secondInstance = Hash.getItem()
        context = firstContext
        Hash.reset()
        expect(Hash.getItem()).not.toBe(firstInstance)
        context = secondContext
        expect(Hash.getItem()).toBe(secondInstance)
        expect(Hash.get('page')).toBe(2)
      } finally {
        context = firstContext
        Hash.reset()
        ServerStorage.remove('__ui:hash-instance__')
        context = secondContext
        Hash.reset()
        ServerStorage.remove('__ui:hash-instance__')
        ServerStorage.init(() => undefined)
        runtime.mockRestore()
      }
    })

    it('destroys the old instance and creates a fresh one afterwards', () => {
      const oldInstance = Hash.getItem()
      const destroy = vi.spyOn(oldInstance, 'destroy')
      Hash.get('page')
      Hash.reset()
      expect(destroy).toHaveBeenCalledTimes(1)
      expect(Hash.getItem()).not.toBe(oldInstance)
    })

    it('reads the current URL after reset instead of returning old cached data', () => {
      history.replaceState(null, '', '/#page=1')
      expect(Hash.get('page')).toBe(1)
      Hash.reset()
      history.replaceState(null, '', '/#page=2')
      expect(Hash.get('page')).toBe(2)
    })

    it('does not retain old watchers after reset', () => {
      history.replaceState(null, '', '/#page=1')
      Hash.get('page')
      const oldWatcher = vi.fn()
      Hash.addWatch('page', oldWatcher)
      Hash.reset()
      history.replaceState(null, '', '/#page=2')
      Hash.reload()
      expect(Hash.get('page')).toBe(2)
      expect(oldWatcher).not.toHaveBeenCalled()
    })

    it('reestablishes hashchange synchronization after reset', () => {
      Hash.get('page')
      Hash.reset()
      const watcher = vi.fn()
      Hash.addWatch('page', watcher)
      Hash.reload()
      history.replaceState(null, '', '/#page=2')
      dispatchEvent(new HashChangeEvent('hashchange'))
      expect(watcher).toHaveBeenCalledWith(2)
      expect(Hash.get('page')).toBe(2)
    })

    it('cancels a pending reload during reset', () => {
      Hash.set('page', 1)
      const oldWatcher = vi.fn()
      Hash.addWatch('page', oldWatcher)
      history.replaceState(history.state, '', '/#page=2')
      Hash.reload()
      Hash.reset()
      vi.advanceTimersByTime(200)
      expect(oldWatcher).not.toHaveBeenCalled()
      expect(vi.getTimerCount()).toBe(0)
    })
  })
})
