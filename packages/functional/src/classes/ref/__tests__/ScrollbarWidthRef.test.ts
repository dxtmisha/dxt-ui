import { beforeEach, describe, expect, it, vi } from 'vitest'
import { isDomRuntime, ScrollbarWidth } from '@dxtmisha/functional-basic'
import { ScrollbarWidthRef } from '../ScrollbarWidthRef'

vi.mock('@dxtmisha/functional-basic', () => ({
  isDomRuntime: vi.fn(),
  ScrollbarWidth: { is: vi.fn(), get: vi.fn() }
}))

/** Deferred measurement result / Отложенный результат измерения */
export interface DeferredMeasurement<T> {
  /** Measurement promise / Promise измерения */
  promise: Promise<T>
  /** Measurement completion / Завершение измерения */
  resolve: (value: T) => void
}

/**
 * Creates an independently controlled measurement promise.
 *
 * Создает Promise измерения с независимым управлением завершением.
 * @returns promise and resolver / Promise и функция завершения
 */
function createDeferred<T>(): DeferredMeasurement<T> {
  let resolve!: (value: T) => void
  const promise = new Promise<T>((complete) => {
    resolve = complete
  })
  return { promise, resolve }
}

describe('ScrollbarWidthRef', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(isDomRuntime).mockReturnValue(true)
    vi.mocked(ScrollbarWidth.is).mockResolvedValue(false)
    vi.mocked(ScrollbarWidth.get).mockResolvedValue(0)
  })

  describe('Asynchronous measurement and readiness', () => {
    it('marks the flag ready independently of the width promise', async () => {
      const flag = createDeferred<boolean>()
      const width = createDeferred<number>()
      vi.mocked(ScrollbarWidth.is).mockReturnValue(flag.promise)
      vi.mocked(ScrollbarWidth.get).mockReturnValue(width.promise)
      const scrollbar = new ScrollbarWidthRef()
      expect(scrollbar.item.value).toBeUndefined()
      expect(scrollbar.width.value).toBe(0)
      expect(scrollbar.is.value).toBe(false)

      flag.resolve(false)
      await flag.promise
      expect(scrollbar.item.value).toBe(false)
      expect(scrollbar.is.value).toBe(true)
      expect(scrollbar.width.value).toBe(0)

      width.resolve(15)
      await width.promise
      expect(scrollbar.width.value).toBe(15)
      expect(ScrollbarWidth.is).toHaveBeenCalledTimes(1)
      expect(ScrollbarWidth.get).toHaveBeenCalledTimes(1)
    })

    it('keeps readiness false when width resolves before the flag', async () => {
      const flag = createDeferred<boolean>()
      vi.mocked(ScrollbarWidth.is).mockReturnValue(flag.promise)
      vi.mocked(ScrollbarWidth.get).mockResolvedValue(8)
      const scrollbar = new ScrollbarWidthRef()
      await Promise.resolve()
      expect(scrollbar.width.value).toBe(8)
      expect(scrollbar.is.value).toBe(false)
      flag.resolve(true)
      await flag.promise
      expect(scrollbar.item.value).toBe(true)
      expect(scrollbar.is.value).toBe(true)
    })

    it.each([true, false])('accepts zero width with a %s flag', async (flag) => {
      vi.mocked(ScrollbarWidth.is).mockResolvedValue(flag)
      const scrollbar = new ScrollbarWidthRef()
      await Promise.resolve()
      expect(scrollbar.item.value).toBe(flag)
      expect(scrollbar.width.value).toBe(0)
      expect(scrollbar.is.value).toBe(true)
    })

    it('keeps public refs independent between instances', async () => {
      const first = new ScrollbarWidthRef()
      const second = new ScrollbarWidthRef()
      await Promise.resolve()
      first.width.value = 12
      first.item.value = true
      expect(second.width.value).toBe(0)
      expect(second.item.value).toBe(false)
    })
  })

  describe('SSR safety', () => {
    it('keeps defaults without accessing browser measurement APIs', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const scrollbar = new ScrollbarWidthRef()
      expect(scrollbar.item.value).toBeUndefined()
      expect(scrollbar.width.value).toBe(0)
      expect(scrollbar.is.value).toBe(false)
      expect(ScrollbarWidth.is).not.toHaveBeenCalled()
      expect(ScrollbarWidth.get).not.toHaveBeenCalled()
    })
  })
})
