import { describe, expect, it, vi } from 'vitest'
import { CacheItem } from '../CacheItem'

/** Deferred value for deterministic concurrency checks / Отложенное значение для проверки конкуренции */
export interface Deferred<T> {
  /** Pending result / Ожидаемый результат */
  promise: Promise<T>
  /** Resolves the result / Завершает вычисление успешно */
  resolve: (value: T) => void
  /** Rejects the result / Завершает вычисление с ошибкой */
  reject: (reason: unknown) => void
}

/**
 * Creates a manually resolved promise.
 *
 * Создаёт Promise с ручным завершением.
 * @returns Deferred promise and resolver / Отложенный Promise и функция завершения
 */
function createDeferred<T>(): Deferred<T> {
  let resolve!: (value: T) => void
  let reject!: (reason: unknown) => void
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise
    reject = rejectPromise
  })
  return { promise, resolve, reject }
}

describe('CacheItem', () => {
  describe('getCache', () => {
    it('computes once with default dependencies', () => {
      const callback = vi.fn(() => 'value')
      const item = new CacheItem(callback)
      expect(item.getCache()).toBe('value')
      expect(item.getCache()).toBe('value')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it.each([0, false, '', null])('caches the valid value %s', (value) => {
      const callback = vi.fn(() => value)
      const item = new CacheItem(callback)
      expect(item.getCache()).toBe(value)
      expect(item.getCache()).toBe(value)
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('invalidates on changed values and lengths', () => {
      let count = 0
      const item = new CacheItem(() => ++count)
      expect(item.getCache([1])).toBe(1)
      expect(item.getCache([1])).toBe(1)
      expect(item.getCache([2])).toBe(2)
      expect(item.getCache([2, 3])).toBe(3)
      expect(item.getCache([])).toBe(4)
    })

    it('compares object dependencies by reference', () => {
      let count = 0
      const item = new CacheItem(() => ++count)
      const dependency = { id: 1 }
      expect(item.getCache([dependency])).toBe(1)
      expect(item.getCache([dependency])).toBe(1)
      expect(item.getCache([{ id: 1 }])).toBe(2)
    })

    it('takes a dependency snapshot', () => {
      let count = 0
      const item = new CacheItem(() => ++count)
      const dependencies = [1]
      expect(item.getCache(dependencies)).toBe(1)
      dependencies[0] = 2
      expect(item.getCache(dependencies)).toBe(2)
    })

    it('keeps the previous successful value', () => {
      let count = 0
      const item = new CacheItem(() => ++count)
      expect(item.getCacheOld()).toBeUndefined()
      item.getCache([1])
      expect(item.getCacheOld()).toBeUndefined()
      item.getCache([2])
      expect(item.getCacheOld()).toBe(1)
      item.getCache([2])
      expect(item.getCacheOld()).toBe(1)
      item.getCache([3])
      expect(item.getCacheOld()).toBe(2)
    })

    it('isolates instances', () => {
      const first = new CacheItem(() => 'first')
      const second = new CacheItem(() => 'second')
      expect(first.getCache()).toBe('first')
      expect(second.getCache()).toBe('second')
    })

    it('retries a failed initial computation', () => {
      const callback = vi.fn<() => string>()
        .mockImplementationOnce(() => { throw new Error('temporary') })
        .mockReturnValueOnce('recovered')
      const item = new CacheItem(callback)
      expect(() => item.getCache(['A'])).toThrow('temporary')
      expect(item.getCache(['A'])).toBe('recovered')
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('retries a failed refresh with the same dependencies', () => {
      const callback = vi.fn<() => string>()
        .mockReturnValueOnce('A')
        .mockImplementationOnce(() => { throw new Error('temporary') })
        .mockReturnValueOnce('B')
      const item = new CacheItem(callback)
      expect(item.getCache(['A'])).toBe('A')
      expect(() => item.getCache(['B'])).toThrow('temporary')
      expect(item.getCache(['B'])).toBe('B')
      expect(callback).toHaveBeenCalledTimes(3)
      expect(item.getCacheOld()).toBe('A')
    })
  })

  describe('setCallback', () => {
    it('uses the new factory only when dependencies invalidate the cached value', () => {
      const first = vi.fn(() => 'A')
      const second = vi.fn(() => 'B')
      const item = new CacheItem(first)
      expect(item.getCache([1])).toBe('A')
      expect(item.setCallback(second)).toBe(item)
      expect(item.getCache([1])).toBe('A')
      expect(second).not.toHaveBeenCalled()
      expect(item.getCache([2])).toBe('B')
      expect(first).toHaveBeenCalledTimes(1)
      expect(second).toHaveBeenCalledTimes(1)
      expect(item.getCacheOld()).toBe('A')
    })

    it('keeps an already started operation bound to its original factory', async () => {
      const deferred = createDeferred<string>()
      const first = vi.fn(() => deferred.promise)
      const second = vi.fn(async () => 'B')
      const item = new CacheItem(first)
      const pending = item.getCacheAsync([1])
      item.setCallback(second)
      const duplicate = item.getCacheAsync([1])
      deferred.resolve('A')
      expect(await Promise.all([pending, duplicate])).toEqual(['A', 'A'])
      expect(second).not.toHaveBeenCalled()
      expect(await item.getCacheAsync([2])).toBe('B')
      expect(second).toHaveBeenCalledTimes(1)
      expect(item.getCacheOld()).toBe('A')
    })
  })

  describe('getCacheAsync', () => {
    it('caches successful results and tracks successful history', async () => {
      const callback = vi.fn<() => Promise<string>>()
        .mockResolvedValueOnce('A')
        .mockResolvedValueOnce('B')
      const item = new CacheItem(callback)
      expect(await item.getCacheAsync(['A'])).toBe('A')
      expect(await item.getCacheAsync(['A'])).toBe('A')
      expect(await item.getCacheAsync(['B'])).toBe('B')
      expect(callback).toHaveBeenCalledTimes(2)
      expect(item.getCacheOld()).toBe('A')
    })

    it('accepts a synchronous callback', async () => {
      const item = new CacheItem(() => 0)
      expect(await item.getCacheAsync()).toBe(0)
    })

    it('retries an initially rejected operation', async () => {
      const callback = vi.fn<() => Promise<string>>()
        .mockRejectedValueOnce(new Error('temporary'))
        .mockResolvedValueOnce('A')
      const item = new CacheItem(callback)
      await expect(item.getCacheAsync(['A'])).rejects.toThrow('temporary')
      expect(await item.getCacheAsync(['A'])).toBe('A')
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('retries a rejected refresh without relabelling old data', async () => {
      const callback = vi.fn<() => Promise<string>>()
        .mockResolvedValueOnce('A')
        .mockRejectedValueOnce(new Error('temporary'))
        .mockResolvedValueOnce('B')
      const item = new CacheItem(callback)
      expect(await item.getCacheAsync(['A'])).toBe('A')
      await expect(item.getCacheAsync(['B'])).rejects.toThrow('temporary')
      expect(await item.getCacheAsync(['B'])).toBe('B')
      expect(callback).toHaveBeenCalledTimes(3)
      expect(item.getCacheOld()).toBe('A')
    })

    it('shares an initial operation for identical dependencies', async () => {
      const deferred = createDeferred<string>()
      const callback = vi.fn(() => deferred.promise)
      const item = new CacheItem(callback)
      const first = item.getCacheAsync(['A'])
      const second = item.getCacheAsync(['A'])
      deferred.resolve('A')
      expect(await Promise.all([first, second])).toEqual(['A', 'A'])
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('waits for a matching refresh instead of returning old data', async () => {
      const deferred = createDeferred<string>()
      const callback = vi.fn<() => Promise<string>>()
        .mockResolvedValueOnce('A')
        .mockImplementationOnce(() => deferred.promise)
      const item = new CacheItem(callback)
      await item.getCacheAsync(['A'])
      const first = item.getCacheAsync(['B'])
      let settled = false
      const second = item.getCacheAsync(['B']).then((value) => {
        settled = true
        return value
      })
      await Promise.resolve()
      const wasPending = !settled
      deferred.resolve('B')
      const values = await Promise.all([first, second])
      expect(wasPending).toBe(true)
      expect(values).toEqual(['B', 'B'])
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('does not let an older completion overwrite the newer cache', async () => {
      const firstDeferred = createDeferred<string>()
      const secondDeferred = createDeferred<string>()
      const callback = vi.fn<() => Promise<string>>()
        .mockImplementationOnce(() => firstDeferred.promise)
        .mockImplementationOnce(() => secondDeferred.promise)
      const item = new CacheItem(callback)
      const first = item.getCacheAsync(['A'])
      const second = item.getCacheAsync(['B'])
      secondDeferred.resolve('B')
      expect(await second).toBe('B')
      firstDeferred.resolve('A')
      expect(await first).toBe('A')
      expect(await item.getCacheAsync(['B'])).toBe('B')
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('keeps a newer operation pending when an older operation finishes', async () => {
      const firstDeferred = createDeferred<string>()
      const secondDeferred = createDeferred<string>()
      const callback = vi.fn<() => Promise<string>>()
        .mockImplementationOnce(() => firstDeferred.promise)
        .mockImplementationOnce(() => secondDeferred.promise)
      const item = new CacheItem(callback)
      const first = item.getCacheAsync(['A'])
      const second = item.getCacheAsync(['B'])
      firstDeferred.resolve('A')
      expect(await first).toBe('A')
      expect(item.getCacheOld()).toBeUndefined()

      const duplicate = item.getCacheAsync(['B'])
      secondDeferred.resolve('B')
      expect(await Promise.all([second, duplicate])).toEqual(['B', 'B'])
      expect(callback).toHaveBeenCalledTimes(2)
      expect(item.getCacheOld()).toBeUndefined()
    })

    it('clears a shared rejected operation and allows retry', async () => {
      const deferred = createDeferred<string>()
      const callback = vi.fn<() => Promise<string>>()
        .mockImplementationOnce(() => deferred.promise)
        .mockResolvedValueOnce('recovered')
      const item = new CacheItem(callback)
      const failure = new Error('temporary')
      const results = Promise.allSettled([
        item.getCacheAsync(['A']),
        item.getCacheAsync(['A'])
      ])
      deferred.reject(failure)
      expect(await results).toEqual([
        { status: 'rejected', reason: failure },
        { status: 'rejected', reason: failure }
      ])
      expect(await item.getCacheAsync(['A'])).toBe('recovered')
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('preserves successful history when a refresh fails', async () => {
      const callback = vi.fn<() => Promise<string>>()
        .mockResolvedValueOnce('A')
        .mockResolvedValueOnce('B')
        .mockRejectedValueOnce(new Error('temporary'))
      const item = new CacheItem(callback)
      await item.getCacheAsync(['A'])
      await item.getCacheAsync(['B'])
      await expect(item.getCacheAsync(['C'])).rejects.toThrow('temporary')
      expect(item.getCacheOld()).toBe('A')
      expect(await item.getCacheAsync(['B'])).toBe('B')
      expect(callback).toHaveBeenCalledTimes(3)
    })

    it('keeps the dependency snapshot while an operation is pending', async () => {
      const deferred = createDeferred<string>()
      const callback = vi.fn(() => deferred.promise)
      const item = new CacheItem(callback)
      const dependencies = ['A']
      const pending = item.getCacheAsync(dependencies)
      dependencies[0] = 'B'
      const duplicate = item.getCacheAsync(['A'])
      deferred.resolve('A')
      expect(await Promise.all([pending, duplicate])).toEqual(['A', 'A'])
      expect(await item.getCacheAsync(['A'])).toBe('A')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('does not overwrite a newer synchronous computation', async () => {
      const callback = vi.fn<() => string>()
        .mockReturnValueOnce('A')
        .mockReturnValueOnce('B')
      const item = new CacheItem(callback)
      const first = item.getCacheAsync(['A'])
      expect(item.getCache(['B'])).toBe('B')
      expect(await first).toBe('A')
      expect(item.getCache(['B'])).toBe('B')
      expect(callback).toHaveBeenCalledTimes(2)
      expect(item.getCacheOld()).toBeUndefined()
    })
  })
})
