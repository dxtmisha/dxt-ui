import { describe, it, expect, vi, beforeEach } from 'vitest'
import { StorageCallback } from '../StorageCallback'

describe('StorageCallback', () => {
  beforeEach(() => {
    // Clear the internal items map if possible, but since it's a private constant in the module,
    // we should use different names for each test if they need isolated state.
  })

  it('should create an instance', () => {
    const storage = new StorageCallback('test-storage')
    expect(storage).toBeInstanceOf(StorageCallback)
    expect(storage.getName()).toBe('test-storage')
  })

  it('should return the same instance for the same name and group (singleton behavior)', () => {
    const s1 = new StorageCallback('singleton', 'group1')
    const s2 = new StorageCallback('singleton', 'group1')
    const s3 = StorageCallback.getInstance('singleton', 'group1')

    expect(s1).toBe(s2)
    expect(s1).toBe(s3)
  })

  it('should return different instances for the same name but different groups', () => {
    const s1 = new StorageCallback('resource', 'group1')
    const s2 = new StorageCallback('resource', 'group2')

    expect(s1).not.toBe(s2)
  })

  it('should use "main" as the default group', () => {
    const s1 = new StorageCallback('default')
    const s2 = new StorageCallback('default', 'main')
    const s3 = StorageCallback.getInstance('default')

    expect(s1).toBe(s2)
    expect(s1).toBe(s3)
  })

  it('should return current loading state (isLoading and getLoading)', () => {
    const storage = new StorageCallback('loading-check')
    expect(storage.isLoading()).toBe(false)
    expect(storage.getLoading()).toBe(false)

    storage.preparation()
    expect(storage.isLoading()).toBe(true)
    expect(storage.getLoading()).toBe(true)
  })

  it('should manage callbacks correctly', async () => {
    const storage = new StorageCallback('callback-test')
    const cb1 = vi.fn()
    const cb2 = vi.fn()

    storage.addCallback(cb1)
    storage.addCallback(cb2)

    // Internal callbacks are protected, so we test behavior via run
    await storage.run('data')
    expect(cb1).toHaveBeenCalledWith('data')
    expect(cb2).toHaveBeenCalledWith('data')

    storage.removeCallback(cb1)
    await storage.run('new-data')
    expect(cb1).toHaveBeenCalledTimes(1)
    expect(cb2).toHaveBeenCalledWith('new-data')
  })

  it('should handle loading state correctly', async () => {
    const storage = new StorageCallback('loading-test')
    let resolveCb: any
    const promise = new Promise<void>((resolve) => {
      resolveCb = resolve
    })

    storage.addCallback(async () => {
      await promise
    })

    expect(storage.isLoading()).toBe(false)
    
    // Now preparation must be called manually before run
    storage.preparation()
    expect(storage.isLoading()).toBe(true)

    const runPromise = storage.run('test')
    // Run clears loading immediately at the start in the current implementation
    expect(storage.isLoading()).toBe(false)

    resolveCb()
    await runPromise
    expect(storage.isLoading()).toBe(false)
  })

  it('should execute callbacks sequentially and wait for promises', async () => {
    const storage = new StorageCallback('sequence-test')
    const results: number[] = []

    storage.addCallback(async () => {
      await new Promise(r => setTimeout(r, 10))
      results.push(1)
    })
    storage.addCallback(() => {
      results.push(2)
    })

    await storage.run('any')
    expect(results).toEqual([1, 2])
  })

  it('should handle isOnce correctly', async () => {
    const storage = new StorageCallback('once-test')
    const cbOnce = vi.fn()
    const cbRegular = vi.fn()

    storage.addCallback(cbOnce, true)
    storage.addCallback(cbRegular)

    await storage.run('first')
    expect(cbOnce).toHaveBeenCalledWith('first')
    expect(cbRegular).toHaveBeenCalledWith('first')

    await storage.run('second')
    expect(cbOnce).toHaveBeenCalledTimes(1) // Should not be called again
    expect(cbRegular).toHaveBeenCalledWith('second')
    expect(cbRegular).toHaveBeenCalledTimes(2)
  })
})
