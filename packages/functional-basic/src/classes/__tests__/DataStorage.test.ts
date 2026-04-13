ч// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { DataStorage } from '../DataStorage'

describe('DataStorage', () => {
  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    DataStorage.setPrefix('ui-storage')
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize correctly with the default prefix', () => {
    const storage = new DataStorage('test')
    expect(storage).toBeInstanceOf(DataStorage)
  })

  it('should save data to localStorage by default', () => {
    const storage = new DataStorage('test')
    storage.set({ foo: 'bar' })

    const raw = localStorage.getItem('ui-storage__test')
    expect(raw).toBeTruthy()
    const parsed = JSON.parse(raw!)
    expect(parsed.value).toEqual({ foo: 'bar' })
  })

  it('should save data to sessionStorage when isSession is true', () => {
    const storage = new DataStorage('test', true)
    storage.set({ foo: 'bar' })

    const raw = sessionStorage.getItem('session#test') || sessionStorage.getItem('ui-storage__test')
    expect(raw).toBeTruthy()
    const parsed = JSON.parse(raw!)
    expect(parsed.value).toEqual({ foo: 'bar' })
  })

  it('should change prefix correctly', () => {
    DataStorage.setPrefix('custom-prefix')
    const storage = new DataStorage('custom-test')
    storage.set('value123')

    const raw = localStorage.getItem('custom-prefix__custom-test')
    expect(raw).toBeTruthy()
    const parsed = JSON.parse(raw!)
    expect(parsed.value).toBe('value123')
  })

  it('should retrieve saved data', () => {
    const storage = new DataStorage('test')
    storage.set('val')

    const retrieved = storage.get()
    expect(retrieved).toBe('val')
  })

  it('should return defaultValue if no data is found', () => {
    const storage = new DataStorage('test-empty1')
    const retrieved = storage.get('defaultVal')

    expect(retrieved).toBe('defaultVal')
  })

  it('should execute functions passed as value', () => {
    const storage = new DataStorage('test-func1')
    storage.set(() => 'funcVal')

    expect(storage.get()).toBe('funcVal')
  })

  it('should execute functions passed as defaultValue', () => {
    const storage = new DataStorage('test-empty2')
    const retrieved = storage.get(() => 'funcDefault')

    expect(retrieved).toBe('funcDefault')
  })

  it('should remove data when explicit undefined is passed to set', () => {
    const storage = new DataStorage('test-remove1')
    storage.set('val')
    storage.set(undefined)

    expect(storage.get()).toBeUndefined()
    expect(localStorage.getItem('ui-storage__test-remove1')).toBeNull()
  })

  it('should remove data via remove method', () => {
    const storage = new DataStorage('test-remove2')
    storage.set('val')
    storage.remove()

    // remove clears memory immediately and also clears localStorage
    expect(storage.get()).toBeUndefined()
    expect(localStorage.getItem('ui-storage__test-remove2')).toBeNull()
  })

  it('should handle cache limits', () => {
    const storage = new DataStorage('test-cache-limit')
    storage.set('expiring-val')

    // Initial check (no cache limit)
    expect(storage.get(undefined, undefined)).toBe('expiring-val')

    // Fast-forward 10 seconds
    vi.advanceTimersByTime(10000)

    // Should return value if the cache limit is large enough
    expect(storage.get(undefined, 20)).toBe('expiring-val')

    // Fast-forward enough to expire
    vi.advanceTimersByTime(11000) // Total 21s elapsed

    // Should not return value if expired
    expect(storage.get(undefined, 20)).toBeUndefined()
  })

  it('should retrieve existing instances from the cache based on name and storage type', () => {
    const storage1 = new DataStorage('test-cache')
    const storage2 = new DataStorage('test-cache')
    const storage3 = new DataStorage('test-cache', true)

    expect(storage1).toBe(storage2)
    expect(storage1).not.toBe(storage3)
  })

  it('should update and rebuild data from storage via the update method', () => {
    const storage = new DataStorage('test-update')
    storage.set('val1')

    localStorage.setItem('ui-storage__test-update', JSON.stringify({ value: 'val2', age: new Date().getTime() }))

    // Memory still holds val1 before the update
    expect(storage.get()).toBe('val1')

    storage.update()

    // Now memory reflects the localStorage directly manipulated
    expect(storage.get()).toBe('val2')
  })
})
