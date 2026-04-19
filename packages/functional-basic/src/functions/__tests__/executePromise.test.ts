import { describe, it, expect } from 'vitest'
import { executePromise } from '../executePromise'

describe('executePromise', () => {
  it('should execute a function returning a Promise and resolve it', async () => {
    const fn = async () => 'async result'
    const result = await executePromise(fn)
    expect(result).toBe('async result')
  })

  it('should execute a synchronous function returning a value and wrap it', async () => {
    const fn = () => 'sync result'
    const result = await executePromise(fn)
    expect(result).toBe('sync result')
  })

  it('should resolve a raw Promise if passed directly', async () => {
    const promise = Promise.resolve('raw promise')
    const result = await executePromise(promise)
    expect(result).toBe('raw promise')
  })

  it('should return a raw static value directly wrapped in a resolved promise implicitly', async () => {
    const result = await executePromise('raw string')
    expect(result).toBe('raw string')
  })

  it('should handle rejection properly', async () => {
    const fn = async () => {
      throw new Error('Test error')
    }
    await expect(executePromise(fn)).rejects.toThrow('Test error')
  })

  it('should execute async function with multiple arguments', async () => {
    const fn = async (a: number, b: number, c: string) => {
      return `${a + b} ${c}`
    }
    const result = await executePromise(fn, 2, 3, 'test')
    expect(result).toBe('5 test')
  })

  it('should execute async function with single argument', async () => {
    const fn = async (value: string) => {
      return value.toUpperCase()
    }
    const result = await executePromise(fn, 'hello')
    expect(result).toBe('HELLO')
  })

  it('should execute sync function with arguments', async () => {
    const fn = (a: number, b: number) => a * b
    const result = await executePromise(fn, 5, 6)
    expect(result).toBe(30)
  })

  it('should handle async function that returns complex types', async () => {
    const fn = async () => {
      return { key: 'value', nested: { prop: 123 } }
    }
    const result = await executePromise(fn)
    expect(result).toEqual({ key: 'value', nested: { prop: 123 } })
  })

  it('should handle async function that returns arrays', async () => {
    const fn = async () => {
      return [1, 2, 3, 4, 5]
    }
    const result = await executePromise(fn)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle Promise rejection with custom error message', async () => {
    const fn = async () => {
      throw new Error('Custom error message')
    }
    await expect(executePromise(fn)).rejects.toThrow('Custom error message')
  })

  it('should handle Promise that resolves to undefined', async () => {
    const fn = async () => undefined
    const result = await executePromise(fn)
    expect(result).toBeUndefined()
  })

  it('should handle sync function that returns undefined', async () => {
    const fn = () => undefined
    const result = await executePromise(fn)
    expect(result).toBeUndefined()
  })

  it('should handle array argument properly', async () => {
    const fn = async (arr: number[]) => {
      return arr.reduce((sum, num) => sum + num, 0)
    }
    const result = await executePromise(fn, [1, 2, 3, 4, 5])
    expect(result).toBe(15)
  })

  it('should handle object argument properly', async () => {
    const fn = async (obj: any) => {
      return obj.name.toUpperCase()
    }
    const result = await executePromise(fn, { name: 'test' })
    expect(result).toBe('TEST')
  })
})
