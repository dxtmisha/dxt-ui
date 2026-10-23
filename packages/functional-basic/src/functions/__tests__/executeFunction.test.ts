import { describe, it, expect, vi } from 'vitest'
import { executeFunction } from '../executeFunction'

describe('executeFunction', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should execute a passed function and return its string result', () => {
      const callback = () => 'function result'
      expect(executeFunction(callback)).toBe('function result')
    })

    it('should execute a function returning a numeric value', () => {
      const callback = () => 42
      expect(executeFunction(callback)).toBe(42)
    })

    it('should return static primitive values as-is when callback is not a function', () => {
      expect(executeFunction('direct string')).toBe('direct string')
      expect(executeFunction(123)).toBe(123)
      expect(executeFunction(true)).toBe(true)
    })

    it('should return static objects and arrays by reference when passed directly', () => {
      const record = { key: 'value' }
      const items = [1, 2, 3]

      expect(executeFunction(record)).toBe(record)
      expect(executeFunction(items)).toBe(items)
    })

    it('should handle functions that return complex nested objects and arrays', () => {
      const objectCallback = () => ({ key: 'value', nested: { property: 123 } })
      const arrayCallback = () => [1, 2, 3, 4, 5]

      expect(executeFunction(objectCallback)).toEqual({ key: 'value', nested: { property: 123 } })
      expect(executeFunction(arrayCallback)).toEqual([1, 2, 3, 4, 5])
    })

    it('should only execute the outer function once when returning an inner function', () => {
      const innerCallback = (multiplier: number) => multiplier * 3
      const outerCallback = vi.fn(() => innerCallback)

      const result = executeFunction(outerCallback)

      expect(outerCallback).toHaveBeenCalledOnce()
      expect(result).toBe(innerCallback)
      expect(result(4)).toBe(12)
    })
  })

  describe('Argument forwarding and parameter handling', () => {
    it('should execute a function with a single argument', () => {
      const callback = (value: string) => value.toUpperCase()
      expect(executeFunction(callback, 'hello')).toBe('HELLO')
    })

    it('should execute a function with multiple arguments of mixed types', () => {
      const callback = (first: number, second: number, label: string) => `${first + second} ${label}`
      expect(executeFunction(callback, 2, 3, 'test')).toBe('5 test')
    })

    it('should execute a function with an array argument', () => {
      const callback = (numbers: number[]) => numbers.reduce((total, current) => total + current, 0)
      expect(executeFunction(callback, [1, 2, 3, 4, 5])).toBe(15)
    })

    it('should execute a function with a strongly typed object argument', () => {
      interface UserProfile {
        name: string
        active: boolean
      }
      const callback = (user: UserProfile) => `${user.name.toUpperCase()}:${user.active}`
      expect(executeFunction(callback, { name: 'test', active: true })).toBe('TEST:true')
    })

    it('should execute a function with rest parameters', () => {
      const callback = (...values: number[]) => values.join('-')
      expect(executeFunction(callback, 10, 20, 30, 40)).toBe('10-20-30-40')
    })

    it('should execute a function with no extra arguments', () => {
      const callback = vi.fn(() => 'no arguments')
      expect(executeFunction(callback)).toBe('no arguments')
      expect(callback).toHaveBeenCalledWith()
    })

    it('should ignore extra arguments when the provided value is not a function', () => {
      expect(executeFunction('static value', 1, 2, 3)).toBe('static value')
      expect(executeFunction(42, 'extra', true)).toBe(42)
    })

    it('should not mutate object or array arguments passed to the callback', () => {
      const inputArray = [1, 2, 3]
      const inputObject = { count: 10 }
      const callback = (items: number[], state: { count: number }) => items.length + state.count

      expect(executeFunction(callback, inputArray, inputObject)).toBe(13)
      expect(inputArray).toEqual([1, 2, 3])
      expect(inputObject).toEqual({ count: 10 })
    })
  })

  describe('Boundary values, falsy primitives, and nullish inputs', () => {
    it('should correctly handle numeric zero (0 and -0)', () => {
      expect(executeFunction(0)).toBe(0)
      expect(executeFunction(() => 0)).toBe(0)
      expect(Object.is(executeFunction(-0), -0)).toBe(true)
    })

    it('should correctly handle negative numbers, floats, NaN, and Infinity', () => {
      expect(executeFunction(-42)).toBe(-42)
      expect(executeFunction(() => -3.14)).toBe(-3.14)
      expect(Number.isNaN(executeFunction(Number.NaN))).toBe(true)
      expect(Number.isNaN(executeFunction(() => Number.NaN))).toBe(true)
      expect(executeFunction(Number.POSITIVE_INFINITY)).toBe(Number.POSITIVE_INFINITY)
      expect(executeFunction(Number.NEGATIVE_INFINITY)).toBe(Number.NEGATIVE_INFINITY)
    })

    it('should correctly handle boolean false and true', () => {
      expect(executeFunction(false)).toBe(false)
      expect(executeFunction(() => false)).toBe(false)
      expect(executeFunction(true)).toBe(true)
      expect(executeFunction(() => true)).toBe(true)
    })

    it('should correctly handle empty string and whitespace-only strings', () => {
      expect(executeFunction('')).toBe('')
      expect(executeFunction(() => '')).toBe('')
      expect(executeFunction('   ')).toBe('   ')
      expect(executeFunction(() => '\t\n')).toBe('\t\n')
    })

    it('should handle null and undefined both directly and as function return values', () => {
      expect(executeFunction(null)).toBeNull()
      expect(executeFunction(undefined)).toBeUndefined()
      expect(executeFunction(() => null)).toBeNull()
      expect(executeFunction(() => undefined)).toBeUndefined()
    })

    it('should handle empty objects and empty arrays', () => {
      expect(executeFunction({})).toEqual({})
      expect(executeFunction([])).toEqual([])
      expect(executeFunction(() => ({}))).toEqual({})
      expect(executeFunction(() => [])).toEqual([])
    })
  })

  describe('Non-standard data types (Date, RegExp, Map, Set, Symbol, BigInt, Promise)', () => {
    it('should preserve Date and RegExp instances without alteration', () => {
      const dateInstance = new Date('2025-01-01T00:00:00.000Z')
      const regExpInstance = /pattern/gi

      expect(executeFunction(dateInstance)).toBe(dateInstance)
      expect(executeFunction(regExpInstance)).toBe(regExpInstance)
      expect(executeFunction(() => dateInstance)).toBe(dateInstance)
      expect(executeFunction(() => regExpInstance)).toBe(regExpInstance)
    })

    it('should preserve Map, Set, Symbol, and BigInt values', () => {
      const mapInstance = new Map([['key', 1]])
      const setInstance = new Set(['item'])
      const symbolValue = Symbol('identifier')
      const bigIntValue = BigInt(9007199254740991)

      expect(executeFunction(mapInstance)).toBe(mapInstance)
      expect(executeFunction(setInstance)).toBe(setInstance)
      expect(executeFunction(symbolValue)).toBe(symbolValue)
      expect(executeFunction(bigIntValue)).toBe(bigIntValue)
    })

    it('should return a Promise instance when an async function or Promise is passed', async () => {
      const directPromise = Promise.resolve('resolved-direct')
      const asyncCallback = async (text: string) => `async-${text}`

      await expect(executeFunction(directPromise)).resolves.toBe('resolved-direct')
      await expect(executeFunction(asyncCallback, 'ok')).resolves.toBe('async-ok')
    })
  })

  describe('Error propagation and execution isolation', () => {
    it('should propagate errors thrown synchronously by the callback', () => {
      const throwingCallback = () => {
        throw new Error('Callback execution failed')
      }

      expect(() => executeFunction(throwingCallback)).toThrow('Callback execution failed')
    })

    it('should produce deterministic results across repeated invocations', () => {
      const callback = (base: number, offset: number) => base + offset

      expect(executeFunction(callback, 10, 5)).toBe(15)
      expect(executeFunction(callback, 10, 5)).toBe(15)
      expect(executeFunction(callback, 20, 5)).toBe(25)
    })
  })
})
