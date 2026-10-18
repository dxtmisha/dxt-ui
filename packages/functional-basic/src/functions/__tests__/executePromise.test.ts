import { describe, it, expect } from 'vitest'
import { executePromise } from '../executePromise'

describe('executePromise', () => {
  describe('Standard functional requirements (Functions, Promises, and values)', () => {
    it('should execute an async function returning a Promise and resolve it', async () => {
      const fn = async () => 'async result'
      const result = await executePromise(fn)
      expect(result).toBe('async result')
    })

    it('should execute a synchronous function returning a value and wrap it in a Promise', async () => {
      const fn = () => 'sync result'
      const result = await executePromise(fn)
      expect(result).toBe('sync result')
    })

    it('should resolve a raw Promise if passed directly', async () => {
      const promise = Promise.resolve('raw promise')
      const result = await executePromise(promise)
      expect(result).toBe('raw promise')
    })

    it('should return a raw static string directly wrapped in a resolved promise', async () => {
      const result = await executePromise('raw string')
      expect(result).toBe('raw string')
    })

    it('should handle async functions that return complex objects', async () => {
      const fn = async () => ({ key: 'value', nested: { prop: 123 } })
      const result = await executePromise(fn)
      expect(result).toEqual({ key: 'value', nested: { prop: 123 } })
    })

    it('should handle async functions that return arrays', async () => {
      const fn = async () => [1, 2, 3, 4, 5]
      const result = await executePromise(fn)
      expect(result).toEqual([1, 2, 3, 4, 5])
    })

    it('should handle a function returning an inner function without invoking it', async () => {
      const innerFn = (value: number) => value * 2
      const fn = () => innerFn
      const result = await executePromise(fn)
      expect(result).toBe(innerFn)
      expect(result(5)).toBe(10)
    })
  })

  describe('Argument passing and generic parameter inference', () => {
    it('should execute async function with multiple arguments', async () => {
      const fn = async (a: number, b: number, c: string) => `${a + b} ${c}`
      const result = await executePromise(fn, 2, 3, 'test')
      expect(result).toBe('5 test')
    })

    it('should execute async function with a single argument', async () => {
      const fn = async (value: string) => value.toUpperCase()
      const result = await executePromise(fn, 'hello')
      expect(result).toBe('HELLO')
    })

    it('should execute sync function with arguments', async () => {
      const fn = (a: number, b: number) => a * b
      const result = await executePromise(fn, 5, 6)
      expect(result).toBe(30)
    })

    it('should pass array and typed object arguments properly without any', async () => {
      interface User {
        name: string
      }
      const fn = async (user: User) => user.name.toUpperCase()
      const result = await executePromise(fn, { name: 'test' })
      expect(result).toBe('TEST')
    })

    it('should handle array argument with sum calculation', async () => {
      const fn = async (arr: number[]) => {
        return arr.reduce((sum, num) => sum + num, 0)
      }
      const result = await executePromise(fn, [1, 2, 3, 4, 5])
      expect(result).toBe(15)
    })

    it('should not mutate the arguments array passed into the callback', async () => {
      const originalArgs = [10, 20, 30]
      const fn = (a: number, b: number, c: number) => a + b + c
      const result = await executePromise(fn, originalArgs[0], originalArgs[1], originalArgs[2])
      expect(result).toBe(60)
      expect(originalArgs).toEqual([10, 20, 30])
    })
  })

  describe('Boundary values, falsy primitives, and nullish inputs', () => {
    it('should correctly handle and resolve 0 (zero)', async () => {
      expect(await executePromise(0)).toBe(0)
      expect(await executePromise(() => 0)).toBe(0)
      expect(await executePromise(async () => 0)).toBe(0)
    })

    it('should correctly handle negative numbers and decimals', async () => {
      expect(await executePromise(-42)).toBe(-42)
      expect(await executePromise(() => -0.5)).toBe(-0.5)
      expect(await executePromise(async () => -100)).toBe(-100)
    })

    it('should correctly handle NaN and Infinity', async () => {
      expect(Number.isNaN(await executePromise(Number.NaN))).toBe(true)
      expect(await executePromise(Number.POSITIVE_INFINITY)).toBe(Number.POSITIVE_INFINITY)
      expect(await executePromise(Number.NEGATIVE_INFINITY)).toBe(Number.NEGATIVE_INFINITY)
    })

    it('should correctly handle and resolve boolean false', async () => {
      expect(await executePromise(false)).toBe(false)
      expect(await executePromise(() => false)).toBe(false)
      expect(await executePromise(async () => false)).toBe(false)
    })

    it('should correctly handle and resolve boolean true', async () => {
      expect(await executePromise(true)).toBe(true)
      expect(await executePromise(() => true)).toBe(true)
      expect(await executePromise(async () => true)).toBe(true)
    })

    it('should correctly handle and resolve empty string and whitespace', async () => {
      expect(await executePromise('')).toBe('')
      expect(await executePromise('   ')).toBe('   ')
      expect(await executePromise(() => '')).toBe('')
      expect(await executePromise(async () => '')).toBe('')
    })

    it('should correctly handle and resolve null and undefined', async () => {
      expect(await executePromise(null)).toBeNull()
      expect(await executePromise(undefined)).toBeUndefined()
      expect(await executePromise(() => null)).toBeNull()
      expect(await executePromise(() => undefined)).toBeUndefined()
      expect(await executePromise(async () => null)).toBeNull()
      expect(await executePromise(async () => undefined)).toBeUndefined()
    })

    it('should handle empty object and empty array', async () => {
      expect(await executePromise({})).toEqual({})
      expect(await executePromise([])).toEqual([])
    })
  })

  describe('Non-standard data types (Date, BigInt, Symbol)', () => {
    it('should handle Date instances', async () => {
      const now = new Date()
      expect(await executePromise(now)).toBe(now)
      expect(await executePromise(() => now)).toBe(now)
    })

    it('should handle BigInt values', async () => {
      const big = BigInt(9007199254740991)
      expect(await executePromise(big)).toBe(big)
      expect(await executePromise(() => big)).toBe(big)
    })

    it('should handle Symbol values', async () => {
      const sym = Symbol('test')
      expect(await executePromise(sym)).toBe(sym)
      expect(await executePromise(() => sym)).toBe(sym)
    })
  })

  describe('Error handling and rejected promises', () => {
    it('should properly reject when an async function throws', async () => {
      const fn = async () => {
        throw new Error('Async error')
      }
      await expect(executePromise(fn)).rejects.toThrow('Async error')
    })

    it('should properly reject when a synchronous function throws', async () => {
      const fn = () => {
        throw new Error('Sync error')
      }
      await expect(executePromise(fn)).rejects.toThrow('Sync error')
    })

    it('should properly reject when a raw rejected Promise is passed', async () => {
      const rejectedPromise = Promise.reject(new Error('Direct rejection'))
      await expect(executePromise(rejectedPromise)).rejects.toThrow('Direct rejection')
    })

    it('should handle custom error instances with specific messages', async () => {
      class CustomError extends Error {
        code = 'CUSTOM_CODE'
      }
      const fn = async () => {
        throw new CustomError('Specific domain failure')
      }
      await expect(executePromise(fn)).rejects.toThrow('Specific domain failure')
    })
  })

  describe('Thenables, PromiseLike, and cross-realm compatibility', () => {
    it('should properly await a custom Thenable object', async () => {
      const thenable: PromiseLike<string> = {
        then(onfulfilled, onrejected) {
          return Promise.resolve('from-thenable').then(onfulfilled, onrejected)
        }
      }
      const result = await executePromise(thenable)
      expect(result).toBe('from-thenable')
    })

    it('should properly await a function returning a Thenable object', async () => {
      const fn = () => {
        const thenable: PromiseLike<number> = {
          then(onfulfilled, onrejected) {
            return Promise.resolve(42).then(onfulfilled, onrejected)
          }
        }
        return thenable
      }
      const result = await executePromise(fn)
      expect(result).toBe(42)
    })

    it('should properly reject when a Thenable invokes reject callback', async () => {
      const rejectedThenable: PromiseLike<string> = {
        then(onfulfilled, onrejected) {
          return Promise.reject(new Error('Thenable rejection')).then(onfulfilled, onrejected)
        }
      }
      await expect(executePromise(rejectedThenable)).rejects.toThrow('Thenable rejection')
    })

    it('should resolve asynchronously delayed Thenables', async () => {
      const delayedThenable: PromiseLike<string> = {
        then(onfulfilled, onrejected) {
          return new Promise<string>((resolve) => {
            setTimeout(() => resolve('delayed-ok'), 5)
          }).then(onfulfilled, onrejected)
        }
      }
      const result = await executePromise(delayedThenable)
      expect(result).toBe('delayed-ok')
    })

    it('should resolve deeply nested promises (Promise<Promise<T>>)', async () => {
      const nested = Promise.resolve(Promise.resolve('nested-value'))
      const result = await executePromise(nested)
      expect(result).toBe('nested-value')
    })
  })

  describe('Concurrency and execution isolation', () => {
    it('should safely execute multiple concurrent promises without interference', async () => {
      const tasks = [
        executePromise(async () => {
          await new Promise(r => setTimeout(r, 10))
          return 1
        }),
        executePromise(() => 2),
        executePromise(Promise.resolve(3)),
        executePromise(4)
      ]

      const results = await Promise.all(tasks)
      expect(results).toEqual([1, 2, 3, 4])
    })
  })
})
