// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { DataStorage } from '../DataStorage'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as isDomDataModule from '../../functions/isDomData'

describe('DataStorage', () => {
  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    ServerStorage.reset()
    ServerStorage.setErrorStatus(true)
    DataStorage.setPrefix('ui-storage')
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
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
    const parsed = JSON.parse(raw!) as { value: { foo: string }, age: number }
    expect(parsed.value).toEqual({ foo: 'bar' })
  })

  it('should save data to sessionStorage when isSession is true', () => {
    const storage = new DataStorage('test', true)
    storage.set({ foo: 'bar' })

    const raw = sessionStorage.getItem('ui-storage__test')
    expect(raw).toBeTruthy()
    const parsed = JSON.parse(raw!) as { value: { foo: string }, age: number }
    expect(parsed.value).toEqual({ foo: 'bar' })
  })

  it('should change prefix correctly', () => {
    DataStorage.setPrefix('custom-prefix')
    const storage = new DataStorage('custom-test')
    storage.set('value123')

    const raw = localStorage.getItem('custom-prefix__custom-test')
    expect(raw).toBeTruthy()
    const parsed = JSON.parse(raw!) as { value: string, age: number }
    expect(parsed.value).toBe('value123')
  })

  it('should retrieve saved data', () => {
    const storage = new DataStorage('test')
    storage.set('savedValue')

    const retrieved = storage.get()
    expect(retrieved).toBe('savedValue')
  })

  it('should return defaultValue and persist it if no data is found', () => {
    const storage = new DataStorage('test-empty1')
    const retrieved = storage.get('defaultValue')

    expect(retrieved).toBe('defaultValue')
    expect(storage.get()).toBe('defaultValue')
  })

  it('should execute functions passed as value', () => {
    const storage = new DataStorage('test-function1')
    storage.set(() => 'functionValue')

    expect(storage.get()).toBe('functionValue')
  })

  it('should execute functions passed as defaultValue', () => {
    const storage = new DataStorage('test-empty2')
    const retrieved = storage.get(() => 'functionDefault')

    expect(retrieved).toBe('functionDefault')
  })

  it('should remove data when explicit undefined is passed to set', () => {
    const storage = new DataStorage('test-remove1')
    storage.set('initialValue')
    storage.set(undefined)

    expect(storage.get()).toBeUndefined()
    expect(localStorage.getItem('ui-storage__test-remove1')).toBeNull()
  })

  it('should remove data via remove method and return this for chaining', () => {
    const storage = new DataStorage('test-remove2')
    storage.set('initialValue')
    const returnValue = storage.remove()

    expect(returnValue).toBe(storage)
    expect(storage.get()).toBeUndefined()
    expect(localStorage.getItem('ui-storage__test-remove2')).toBeNull()
  })

  it('should handle cache limits', () => {
    const storage = new DataStorage('test-cache-limit')
    storage.set('expiring-value')

    expect(storage.get(undefined, undefined)).toBe('expiring-value')

    vi.advanceTimersByTime(10000)

    expect(storage.get(undefined, 20)).toBe('expiring-value')

    vi.advanceTimersByTime(11000)

    expect(storage.get(undefined, 20)).toBeUndefined()
  })

  it('should retrieve existing instances from the cache based on name and storage type', () => {
    const storageFirst = new DataStorage('test-cache')
    const storageSecond = new DataStorage('test-cache')
    const storageSession = new DataStorage('test-cache', true)

    expect(storageFirst).toBe(storageSecond)
    expect(storageFirst).not.toBe(storageSession)
  })

  it('should update and rebuild data from storage via the update method', () => {
    const storage = new DataStorage('test-update')
    storage.set('value1')

    localStorage.setItem('ui-storage__test-update', JSON.stringify({ value: 'value2', age: Date.now() }))

    expect(storage.get()).toBe('value1')

    const returnValue = storage.update()

    expect(returnValue).toBe(storage)
    expect(storage.get()).toBe('value2')
  })

  it('should clear in-memory value when storage entry is deleted externally and update() is called', () => {
    const storage = new DataStorage('test-external-delete')
    storage.set('initial')
    expect(storage.get()).toBe('initial')

    localStorage.removeItem('ui-storage__test-external-delete')
    storage.update()

    expect(storage.get()).toBeUndefined()
  })

  it('should preserve strings containing &, <, > in raw JSON without HTML-entity corruption across update()', () => {
    const storage = new DataStorage<string>('test-special-content')
    const url = 'https://example.com/search?q=1&sort=asc&tag=<ui>'

    storage.set(url)

    const rawStored = localStorage.getItem('ui-storage__test-special-content')
    expect(rawStored).toContain(url)
    expect(rawStored).not.toContain('&amp;')
    expect(rawStored).not.toContain('&lt;')

    storage.update()

    expect(storage.get()).toBe(url)
  })

  describe('different data types', () => {
    it('should handle numbers', () => {
      const storage = new DataStorage('test-number')
      storage.set(42)
      expect(storage.get()).toBe(42)
    })

    it('should handle booleans', () => {
      const storage = new DataStorage('test-boolean')
      storage.set(true)
      expect(storage.get()).toBe(true)

      storage.set(false)
      expect(storage.get()).toBe(false)
    })

    it('should handle objects', () => {
      const storage = new DataStorage('test-object')
      const dataObject = { name: 'test', value: 123, nested: { key: 'value' } }
      storage.set(dataObject)
      expect(storage.get()).toEqual(dataObject)
    })

    it('should handle arrays', () => {
      const storage = new DataStorage('test-array')
      const dataArray = [1, 2, 3, 'four', { five: 5 }]
      storage.set(dataArray)
      expect(storage.get()).toEqual(dataArray)
    })

    it('should handle empty string', () => {
      const storage = new DataStorage('test-empty-string')
      storage.set('')
      expect(storage.get()).toBe('')
    })

    it('should handle zero value', () => {
      const storage = new DataStorage('test-zero')
      storage.set(0)
      expect(storage.get()).toBe(0)
    })

    it('should handle null values by calling remove() and clearing localStorage', () => {
      const storage = new DataStorage<string | null>('test-null')
      storage.set('initial')
      expect(localStorage.getItem('ui-storage__test-null')).toBeTruthy()

      storage.set(null)
      expect(storage.get()).toBeUndefined()
      expect(localStorage.getItem('ui-storage__test-null')).toBeNull()
    })
  })

  describe('edge cases', () => {
    it('should handle consecutive set calls', () => {
      const storage = new DataStorage('test-consecutive')
      storage.set('first')
      storage.set('second')
      storage.set('third')
      expect(storage.get()).toBe('third')
    })

    it('should handle get without default after set', () => {
      const storage = new DataStorage('test-get-after-set')
      storage.set('value')
      expect(storage.get()).toBe('value')
    })

    it('should handle functional value that returns undefined', () => {
      const storage = new DataStorage<string | undefined>('test-function-undefined')
      storage.set(() => undefined)
      expect(storage.get()).toBeUndefined()
    })

    it('should handle special characters in storage name', () => {
      const storage = new DataStorage('test-special-chars_123')
      storage.set('value')
      expect(storage.get()).toBe('value')
    })

    it('should handle large data objects', () => {
      const storage = new DataStorage<{ data: string[] }>('test-large-data')
      const largeObject = {
        data: Array.from({ length: 1000 }, (_, index) => `item-${index}`)
      }
      storage.set(largeObject)
      const retrieved = storage.get()
      expect(retrieved).toEqual(largeObject)
      expect(retrieved?.data.length).toBe(1000)
    })
  })

  describe('cache functionality', () => {
    it('should return undefined when cache expires and no defaultValue is provided', () => {
      const storage = new DataStorage('test-cache-expire')
      storage.set('expiring-data')

      vi.advanceTimersByTime(3000)
      expect(storage.get(undefined, 5)).toBe('expiring-data')

      vi.advanceTimersByTime(3000)
      expect(storage.get(undefined, 5)).toBeUndefined()
    })

    it('should set and return defaultValue when cache expires and defaultValue is provided', () => {
      const storage = new DataStorage('test-cache-expire-default')
      storage.set('initial-data')

      vi.advanceTimersByTime(6000)
      expect(storage.get('refreshed-data', 5)).toBe('refreshed-data')
    })

    it('should ignore cache when not provided', () => {
      const storage = new DataStorage('test-no-cache')
      storage.set('data')

      vi.advanceTimersByTime(10000)
      expect(storage.get()).toBe('data')
    })

    it('should handle zero cache time', () => {
      const storage = new DataStorage('test-zero-cache')
      storage.set('data')

      expect(storage.get(undefined, 0)).toBe('data')

      vi.advanceTimersByTime(1)
      expect(storage.get(undefined, 0)).toBeUndefined()
    })
  })

  describe('session storage and SSR fallback', () => {
    it('should isolate localStorage and sessionStorage', () => {
      const local = new DataStorage('test-isolation', false)
      const session = new DataStorage('test-isolation', true)

      local.set('local-value')
      session.set('session-value')

      expect(local.get()).toBe('local-value')
      expect(session.get()).toBe('session-value')

      expect(localStorage.getItem('ui-storage__test-isolation')).toBeTruthy()
      expect(sessionStorage.getItem('ui-storage__test-isolation')).toBeTruthy()
    })

    it('should work purely in memory in SSR when isDomRuntime() is false', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      const storage = new DataStorage('ssr-memory-item')
      storage.set('ssr-value')

      expect(storage.get()).toBe('ssr-value')
      expect(localStorage.getItem('ui-storage__ssr-memory-item')).toBeNull()
    })

    it('should work purely in memory when isDomData() is true', () => {
      vi.spyOn(isDomDataModule, 'isDomData').mockReturnValue(true)

      const storage = new DataStorage('dom-data-item')
      storage.set('memory-only')

      expect(storage.get()).toBe('memory-only')
      expect(localStorage.getItem('ui-storage__dom-data-item')).toBeNull()
    })
  })

  describe('error handling', () => {
    it('should handle corrupted JSON data gracefully and report to ErrorCenter', () => {
      const customErrorCenter = new ErrorCenterInstance()
      const errorSpy = vi.spyOn(customErrorCenter, 'on').mockImplementation(() => undefined)

      localStorage.setItem('ui-storage__test-corrupted', 'invalid-json')
      const storage = new DataStorage('test-corrupted', false, customErrorCenter)

      expect(storage.get()).toBeUndefined()
      expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({
        group: 'storage',
        code: 'error'
      }))
    })

    it('should handle malformed data structure', () => {
      localStorage.setItem('ui-storage__test-malformed', JSON.stringify({ invalid: 'structure' }))
      const storage = new DataStorage('test-malformed')

      expect(storage.get()).toBeUndefined()
    })

    it('should report error via ErrorCenter when setItem throws QuotaExceededError', () => {
      const customErrorCenter = new ErrorCenterInstance()
      const errorSpy = vi.spyOn(customErrorCenter, 'on').mockImplementation(() => undefined)
      const storage = new DataStorage('test-quota', false, customErrorCenter)
      const quotaError = new Error('QuotaExceededError')

      vi.spyOn(Storage.prototype, 'setItem').mockImplementationOnce(() => {
        throw quotaError
      })

      expect(() => storage.set('large-value')).not.toThrow()
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'storage',
        code: 'error',
        details: quotaError
      })
    })

    it('should report error via ErrorCenter when removeItem throws', () => {
      const customErrorCenter = new ErrorCenterInstance()
      const errorSpy = vi.spyOn(customErrorCenter, 'on').mockImplementation(() => undefined)
      const storage = new DataStorage('test-remove-error', false, customErrorCenter)
      const securityError = new Error('SecurityError')

      vi.spyOn(Storage.prototype, 'removeItem').mockImplementationOnce(() => {
        throw securityError
      })

      expect(() => storage.remove()).not.toThrow()
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'storage',
        code: 'error',
        details: securityError
      })
    })

    it('should report error via ErrorCenter when accessing window.localStorage throws SecurityError', () => {
      const customErrorCenter = new ErrorCenterInstance()
      const errorSpy = vi.spyOn(customErrorCenter, 'on').mockImplementation(() => undefined)
      const accessError = new Error('Access denied')

      vi.spyOn(window, 'localStorage', 'get').mockImplementationOnce(() => {
        throw accessError
      })

      expect(() => new DataStorage('test-access-error', false, customErrorCenter)).not.toThrow()
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'storage',
        code: 'error',
        details: accessError
      })
    })
  })

  describe('prefix management', () => {
    it('should apply prefix to all new instances after setPrefix', () => {
      DataStorage.setPrefix('new-prefix')

      const storage = new DataStorage('test-new-prefix')
      storage.set('value')

      expect(localStorage.getItem('new-prefix__test-new-prefix')).toBeTruthy()
      expect(localStorage.getItem('ui-storage__test-new-prefix')).toBeNull()
    })

    it('should use updated prefix on subsequent set calls', () => {
      const storageFirst = new DataStorage('test-existing')
      storageFirst.set('value1')

      DataStorage.setPrefix('new-prefix')

      const storageSecond = new DataStorage('test-existing')
      storageSecond.set('value2')

      expect(localStorage.getItem('ui-storage__test-existing')).toBeTruthy()
      expect(localStorage.getItem('new-prefix__test-existing')).toBeTruthy()
    })
  })
})
