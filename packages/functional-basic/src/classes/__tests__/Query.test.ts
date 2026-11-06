// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Query } from '../Query'
import { QueryInstance } from '../QueryInstance'
import { ServerStorage } from '../ServerStorage'

describe('Query', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    Query.getItem().destroy()
    ServerStorage.remove('__ui:query-instance__')
    ServerStorage.remove('__ui:url-item__')
    history.replaceState(null, '', '/')
  })

  afterEach(() => {
    Query.getItem().destroy()
    ServerStorage.remove('__ui:query-instance__')
    ServerStorage.remove('__ui:url-item__')
    vi.clearAllTimers()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('reuses the current instance until reset', () => {
    const first = Query.getItem()
    expect(first).toBeInstanceOf(QueryInstance)
    expect(Query.getItem()).toBe(first)
  })

  it('reads query values from the current URL', () => {
    history.replaceState(null, '', '/?page=2&filter=active')
    expect(Query.get('page')).toBe(2)
    expect(Query.get('filter')).toBe('active')
    expect(Query.get('missing')).toBeUndefined()
  })

  it.each([0, false, ''])('supports the default value %s', (value) => {
    expect(Query.get('value', value)).toBe(value)
  })

  it('evaluates a default factory once and accepts a value factory', () => {
    const factory = vi.fn(() => 1)
    expect(Query.get('page', factory)).toBe(1)
    expect(Query.get('page', factory)).toBe(1)
    expect(factory).toHaveBeenCalledTimes(1)
    Query.set('page', () => 2)
    expect(Query.get('page')).toBe(2)
  })

  it('preserves the path, hash, unrelated parameters and history state', () => {
    const state = { position: 3 }
    history.replaceState(state, '', '/catalog?filter=active#details')
    Query.set('page', 2)
    expect(location.pathname).toBe('/catalog')
    expect(location.hash).toBe('#details')
    expect(new URLSearchParams(location.search).get('filter')).toBe('active')
    expect(new URLSearchParams(location.search).get('page')).toBe('2')
    expect(history.state).toEqual(state)
  })

  it('initializes data and the popstate listener on the first reload', () => {
    history.replaceState(null, '', '/?page=1')
    const values: unknown[] = []
    Query.addWatch('page', value => values.push(value))
    Query.reload()
    history.replaceState(null, '', '/?page=2')
    dispatchEvent(new PopStateEvent('popstate'))
    expect(values).toEqual([1, 2])
    expect(Query.get('page')).toBe(2)
  })

  it('removes only the specified watcher', () => {
    Query.get('page')
    const removed = vi.fn()
    const kept = vi.fn()
    Query.addWatch('page', removed)
    Query.addWatch('page', kept)
    Query.removeWatch('page', removed)
    history.replaceState(null, '', '/?page=2')
    dispatchEvent(new PopStateEvent('popstate'))
    expect(removed).not.toHaveBeenCalled()
    expect(kept).toHaveBeenCalledWith(2)
  })

  it('destroys the old instance and replaces it after reset', () => {
    const before = Query.getItem()
    const destroy = vi.spyOn(before, 'destroy')
    Query.get('page')
    Query.reset()
    expect(destroy).toHaveBeenCalledTimes(1)
    expect(Query.getItem()).not.toBe(before)
  })

  it('reads the current URL after reset', () => {
    history.replaceState(null, '', '/?page=1')
    expect(Query.get('page')).toBe(1)
    Query.reset()
    history.replaceState(null, '', '/?page=2')
    expect(Query.get('page')).toBe(2)
  })

  it('ends old subscriptions and resumes popstate after reset', () => {
    history.replaceState(null, '', '/?page=1')
    Query.get('page')
    const oldWatcher = vi.fn()
    Query.addWatch('page', oldWatcher)
    Query.reset()
    const newWatcher = vi.fn()
    Query.addWatch('page', newWatcher)
    Query.reload()
    newWatcher.mockClear()
    history.replaceState(null, '', '/?page=2')
    dispatchEvent(new PopStateEvent('popstate'))
    expect(oldWatcher).not.toHaveBeenCalled()
    expect(newWatcher).toHaveBeenCalledTimes(1)
    expect(newWatcher).toHaveBeenCalledWith(2)
    expect(Query.get('page')).toBe(2)
  })

  it('cancels pending timers without keeping the next instance blocked', () => {
    Query.set('page', 1)
    const oldWatcher = vi.fn()
    Query.addWatch('page', oldWatcher)
    history.replaceState(null, '', '/?page=2')
    Query.reload()
    Query.reset()
    vi.advanceTimersByTime(200)
    expect(oldWatcher).not.toHaveBeenCalled()
    expect(vi.getTimerCount()).toBe(0)
    expect(Query.get('page')).toBe(2)
    history.replaceState(null, '', '/?page=3')
    dispatchEvent(new PopStateEvent('popstate'))
    expect(Query.get('page')).toBe(3)
  })

  it('resets only the active SSR context without browser globals', () => {
    const firstContext: Record<string, unknown> = {}
    const secondContext: Record<string, unknown> = {}
    let context = firstContext
    vi.stubGlobal('window', undefined)
    vi.stubGlobal('document', undefined)
    ServerStorage.init(() => context)

    try {
      Query.set('page', 1)
      const first = Query.getItem()
      context = secondContext
      Query.set('page', 2)
      const second = Query.getItem()
      expect(second).not.toBe(first)
      context = firstContext
      Query.reset()
      expect(Query.getItem()).not.toBe(first)
      context = secondContext
      expect(Query.getItem()).toBe(second)
      expect(Query.get('page')).toBe(2)
    } finally {
      context = firstContext
      Query.reset()
      ServerStorage.remove('__ui:query-instance__')
      ServerStorage.remove('__ui:url-item__')
      context = secondContext
      Query.reset()
      ServerStorage.remove('__ui:query-instance__')
      ServerStorage.remove('__ui:url-item__')
      ServerStorage.init(() => undefined)
      vi.unstubAllGlobals()
    }
  })
})
