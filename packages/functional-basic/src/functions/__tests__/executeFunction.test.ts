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
})
