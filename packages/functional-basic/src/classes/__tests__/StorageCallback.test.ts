import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ErrorCenter } from '../ErrorCenter'
import { ServerStorage } from '../ServerStorage'
import { StorageCallback } from '../StorageCallback'

describe('StorageCallback', () => {
  beforeEach(() => {
    ServerStorage.reset()
    ServerStorage.setErrorStatus(true)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('instantiation and singleton behavior', () => {
    it('should create an instance and return its name via getName()', () => {
      const storage = new StorageCallback('test-storage')
      expect(storage).toBeInstanceOf(StorageCallback)
      expect(storage.getName()).toBe('test-storage')
    })

    it('should return the same instance for the same name and group', () => {
      const storageFirst = new StorageCallback('singleton', 'group1')
      const storageSecond = new StorageCallback('singleton', 'group1')
      const storageThird = StorageCallback.getInstance('singleton', 'group1')

      expect(storageFirst).toBe(storageSecond)
      expect(storageFirst).toBe(storageThird)
    })

    it('should return different instances for the same name but different groups', () => {
      const storageFirst = new StorageCallback('resource', 'group1')
      const storageSecond = new StorageCallback('resource', 'group2')

      expect(storageFirst).not.toBe(storageSecond)
    })

    it('should use "main" as the default group', () => {
      const storageFirst = new StorageCallback('default')
      const storageSecond = new StorageCallback('default', 'main')
      const storageThird = StorageCallback.getInstance('default')

      expect(storageFirst).toBe(storageSecond)
      expect(storageFirst).toBe(storageThird)
    })

    it('should isolate instances across ServerStorage resets', () => {
      const storageFirst = StorageCallback.getInstance('isolated')
      ServerStorage.reset()
      const storageSecond = StorageCallback.getInstance('isolated')

      expect(storageFirst).not.toBe(storageSecond)
    })
  })

  describe('loading state and preparation', () => {
    it('should return current loading state via isLoading() and getLoading(), and set it via preparation()', () => {
      const storage = new StorageCallback('loading-check')
      expect(storage.isLoading()).toBe(false)
      expect(storage.getLoading()).toBe(false)

      const returnValue = storage.preparation()
      expect(returnValue).toBe(storage)
      expect(storage.isLoading()).toBe(true)
      expect(storage.getLoading()).toBe(true)
    })

    it('should keep loading true while async callbacks are executing and set loading to false when completed', async () => {
      const storage = new StorageCallback<string>('loading-async-test')
      let resolvePendingCallback: (() => void) | undefined
      const pendingPromise = new Promise<void>((resolve) => {
        resolvePendingCallback = resolve
      })

      storage.addCallback(async () => {
        await pendingPromise
      })

      expect(storage.isLoading()).toBe(false)

      storage.preparation()
      expect(storage.isLoading()).toBe(true)

      const runPromise = storage.run('test-payload')
      expect(storage.isLoading()).toBe(true)
      expect(storage.getLoading()).toBe(true)

      resolvePendingCallback?.()
      const runResult = await runPromise

      expect(runResult).toBe(storage)
      expect(storage.isLoading()).toBe(false)
      expect(storage.getLoading()).toBe(false)
    })
  })

  describe('callback management and execution', () => {
    it('consumes an async once registration before another run starts', async () => {
      const storage = new StorageCallback<string>('once-overlap')
      let resolvePending: () => void = () => {}
      const pending = new Promise<void>((resolve) => {
        resolvePending = resolve
      })
      const callback = vi.fn(async (): Promise<void> => {
        await pending
      })

      storage.addCallback(callback, true)
      const first = storage.run('first')
      const second = storage.run('second')
      resolvePending()
      await Promise.all([first, second])

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith('first')
      await storage.run('third')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('consumes once across snapshots paused by an earlier callback', async () => {
      const storage = new StorageCallback<string>('once-after-await')
      let resolvePending: () => void = () => {}
      const pending = new Promise<void>((resolve) => {
        resolvePending = resolve
      })
      const callback = vi.fn()

      storage.addCallback(async () => {
        await pending
      })
      storage.addCallback(callback, true)
      const first = storage.run('first')
      const second = storage.run('second')
      resolvePending()
      await Promise.all([first, second])

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith('first')
    })

    it('does not invoke a once registration again during a nested run', async () => {
      const storage = new StorageCallback<string>('once-nested')
      let nested: Promise<StorageCallback<string>> | undefined
      const callback = vi.fn((value: string): void => {
        if (value === 'first') {
          nested = storage.run('nested')
        }
      })

      storage.addCallback(callback, true)
      await storage.run('first')
      await nested

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith('first')
    })

    it('keeps a new once registration of the same function for the next run', async () => {
      const storage = new StorageCallback<string>('once-register-again')
      const callback = vi.fn((value: string): void => {
        if (value === 'first') {
          storage.addCallback(callback, true)
        }
      })

      storage.addCallback(callback, true)
      await storage.run('first')
      await storage.run('second')
      await storage.run('third')

      expect(callback).toHaveBeenCalledTimes(2)
      expect(callback).toHaveBeenNthCalledWith(1, 'first')
      expect(callback).toHaveBeenNthCalledWith(2, 'second')
    })

    it('preserves a regular registration of the same function after consuming once', async () => {
      const storage = new StorageCallback<string>('once-and-regular')
      const callback = vi.fn()

      storage.addCallback(callback, true).addCallback(callback)
      await storage.run('first')
      await storage.run('second')

      expect(callback).toHaveBeenCalledTimes(3)
      expect(callback).toHaveBeenLastCalledWith('second')
    })

    it('should add and remove callbacks and return this for chaining', async () => {
      const storage = new StorageCallback<string>('callback-test')
      const callbackFirst = vi.fn()
      const callbackSecond = vi.fn()

      expect(storage.addCallback(callbackFirst)).toBe(storage)
      expect(storage.addCallback(callbackSecond)).toBe(storage)

      await storage.run('data')
      expect(callbackFirst).toHaveBeenCalledWith('data')
      expect(callbackSecond).toHaveBeenCalledWith('data')

      expect(storage.removeCallback(callbackFirst)).toBe(storage)
      await storage.run('new-data')
      expect(callbackFirst).toHaveBeenCalledTimes(1)
      expect(callbackSecond).toHaveBeenCalledWith('new-data')
    })

    it('should execute callbacks sequentially and wait for promises before finishing', async () => {
      const storage = new StorageCallback<string>('sequence-test')
      const executionOrder: number[] = []

      storage.addCallback(async () => {
        await new Promise(resolve => setTimeout(resolve, 10))
        executionOrder.push(1)
      })
      storage.addCallback(() => {
        executionOrder.push(2)
      })

      await storage.run('any')
      expect(executionOrder).toEqual([1, 2])
    })

    it('should handle isOnce callbacks by consuming each registration before invocation', async () => {
      const storage = new StorageCallback<string>('once-test')
      const callbackOnce = vi.fn()
      const callbackRegular = vi.fn()

      storage.addCallback(callbackOnce, true)
      storage.addCallback(callbackRegular)

      await storage.run('first')
      expect(callbackOnce).toHaveBeenCalledWith('first')
      expect(callbackRegular).toHaveBeenCalledWith('first')

      await storage.run('second')
      expect(callbackOnce).toHaveBeenCalledTimes(1)
      expect(callbackRegular).toHaveBeenCalledWith('second')
      expect(callbackRegular).toHaveBeenCalledTimes(2)
    })

    it('should catch callback errors via ErrorCenter, consume a failing once registration, and continue executing remaining callbacks', async () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      const storage = new StorageCallback<string>('error-test')
      const callbackError = new Error('Callback failed')

      const failingOnceCallback = vi.fn().mockRejectedValue(callbackError)
      const subsequentCallback = vi.fn()

      storage.addCallback(failingOnceCallback, true)
      storage.addCallback(subsequentCallback)
      storage.preparation()

      await expect(storage.run('payload')).resolves.toBe(storage)

      expect(errorSpy).toHaveBeenCalledWith({
        group: 'storage',
        code: 'error',
        details: callbackError
      })
      expect(subsequentCallback).toHaveBeenCalledWith('payload')
      expect(storage.isLoading()).toBe(false)

      await storage.run('second-payload')
      expect(failingOnceCallback).toHaveBeenCalledTimes(1)
      expect(subsequentCallback).toHaveBeenCalledTimes(2)
    })
  })
})
