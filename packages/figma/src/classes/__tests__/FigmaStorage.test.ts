import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { FigmaStorage } from '../FigmaStorage'

describe('FigmaStorage', () => {
  const mockPluginData = new Map<string, string>()
  const mockItem = {
    getPluginData: vi.fn((key: string) => mockPluginData.get(key) || ''),
    setPluginData: vi.fn((key: string, value: string) => {
      mockPluginData.set(key, value)
    })
  }

  // Mock figma global
  ;(global as any).figma = {
    root: mockItem
  } as any

  beforeEach(() => {
    mockPluginData.clear()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize correctly', () => {
    const storage = new FigmaStorage('test', mockItem as any)
    expect(storage).toBeInstanceOf(FigmaStorage)
    expect(storage.getName()).toBe('test')
  })

  it('should save data to PluginData', () => {
    const storage = new FigmaStorage('test', mockItem as any)
    storage.set({ foo: 'bar' })

    const raw = mockPluginData.get('test')
    expect(raw).toBeTruthy()
    const parsed = JSON.parse(raw!)
    expect(parsed.value).toEqual({ foo: 'bar' })
  })

  it('should retrieve saved data', () => {
    const storage = new FigmaStorage('test', mockItem as any)
    storage.set('val')

    const retrieved = storage.get()
    expect(retrieved).toBe('val')
  })

  it('should return defaultValue if no data is found', () => {
    const storage = new FigmaStorage('test-empty1', mockItem as any)
    const retrieved = storage.get('defaultVal')

    expect(retrieved).toBe('defaultVal')
  })

  it('should execute functions passed as value', () => {
    const storage = new FigmaStorage('test-func1', mockItem as any)
    storage.set(() => 'funcVal')

    expect(storage.get()).toBe('funcVal')
  })

  it('should execute functions passed as defaultValue', () => {
    const storage = new FigmaStorage('test-empty2', mockItem as any)
    const retrieved = storage.get(() => 'funcDefault')

    expect(retrieved).toBe('funcDefault')
  })

  it('should remove data when explicit undefined is passed to set', () => {
    const storage = new FigmaStorage('test-remove1', mockItem as any)
    storage.set('val')
    storage.set(undefined)

    expect(storage.get()).toBeUndefined()
    expect(mockPluginData.has('test-remove1')).toBe(true)
    expect(mockPluginData.get('test-remove1')).toBe('')
  })

  it('should remove data via remove method', () => {
    const storage = new FigmaStorage('test-remove2', mockItem as any)
    storage.set('val')
    storage.remove()

    expect(storage.get()).toBeUndefined()
    expect(mockPluginData.get('test-remove2')).toBe('')
  })

  it('should handle cache limits', () => {
    const storage = new FigmaStorage('test-cache-limit', mockItem as any, 20)
    storage.set('expiring-val')

    // Initial check (no cache limit)
    expect(storage.get()).toBe('expiring-val')

    // Fast-forward 10 seconds
    vi.advanceTimersByTime(10000)

    // Should return value if the cache limit is large enough
    expect(storage.get()).toBe('expiring-val')

    // Fast-forward enough to expire
    vi.advanceTimersByTime(11000) // Total 21s elapsed

    // Should not return value if expired
    expect(storage.get()).toBeUndefined()
  })

  it('should lazy load data from storage on get', () => {
    mockPluginData.set('test-lazy', JSON.stringify({ value: 'val-from-storage', age: new Date().getTime() }))

    const storage = new FigmaStorage('test-lazy', mockItem as any)
    // Initially we don't have value in memory (unless we called constructor recently, but constructor doesn't call make anymore in the user's version)
    // Wait, the user removed initialization in constructor.

    const retrieved = storage.get()
    expect(retrieved).toBe('val-from-storage')
  })

  it('it should not expire if the cache is not set', () => {
    const storage = new FigmaStorage('test-no-cache', mockItem as any)
    storage.set('persistent-val')

    vi.advanceTimersByTime(1000000)

    expect(storage.get()).toBe('persistent-val')
  })
})
