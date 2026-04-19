import { describe, it, expect } from 'vitest'
import { executeFunction } from '../executeFunction'

describe('executeFunction', () => {
  it('should execute if a function is passed and return its result', () => {
    const fn = () => 'function result'
    expect(executeFunction(fn)).toBe('function result')
  })

  it('should execute a function returning a specific value type', () => {
    const fn = () => 42
    expect(executeFunction(fn)).toBe(42)
  })

  it('should return the original value if it is not a function', () => {
    expect(executeFunction('direct string')).toBe('direct string')
    expect(executeFunction(123)).toBe(123)
  })

  it('should return objects and arrays directly if passed', () => {
    const obj = { key: 'value' }
    const arr = [1, 2, 3]

    expect(executeFunction(obj)).toBe(obj)
    expect(executeFunction(arr)).toBe(arr)
  })

  it('should handle null and undefined correctly', () => {
    expect(executeFunction(null)).toBeNull()
    expect(executeFunction(undefined)).toBeUndefined()
  })

  it('should execute function with multiple arguments', () => {
    const fn = (a: number, b: number, c: string) => `${a + b} ${c}`
    expect(executeFunction(fn, 2, 3, 'test')).toBe('5 test')
  })

  it('should execute function with single argument', () => {
    const fn = (value: string) => value.toUpperCase()
    expect(executeFunction(fn, 'hello')).toBe('HELLO')
  })

  it('should execute function with array argument', () => {
    const fn = (arr: number[]) => arr.reduce((sum, num) => sum + num, 0)
    expect(executeFunction(fn, [1, 2, 3, 4, 5])).toBe(15)
  })

  it('should execute function with object argument', () => {
    const fn = (obj: any) => obj.name.toUpperCase()
    expect(executeFunction(fn, { name: 'test' })).toBe('TEST')
  })

  it('should execute function with no arguments', () => {
    const fn = () => 'no args'
    expect(executeFunction(fn)).toBe('no args')
  })

  it('should ignore extra arguments when value is not a function', () => {
    expect(executeFunction('static value', 1, 2, 3)).toBe('static value')
    expect(executeFunction(42, 'extra')).toBe(42)
  })

  it('should handle functions that return undefined', () => {
    const fn = () => undefined
    expect(executeFunction(fn)).toBeUndefined()
  })

  it('should handle functions that return complex types', () => {
    const fn = () => ({ key: 'value', nested: { prop: 123 } })
    const result = executeFunction(fn)
    expect(result).toEqual({ key: 'value', nested: { prop: 123 } })
  })

  it('should handle functions that return arrays', () => {
    const fn = () => [1, 2, 3, 4, 5]
    expect(executeFunction(fn)).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle arrow functions correctly', () => {
    const fn = (x: number) => x * 2
    expect(executeFunction(fn, 5)).toBe(10)
  })
})
