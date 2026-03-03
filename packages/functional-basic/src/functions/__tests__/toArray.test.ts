import { describe, it, expect } from 'vitest'
import { toArray } from '../toArray'

describe('toArray', () => {
  it('should return the array if the input is an array', () => {
    const input = [1, 2, 3]
    const result = toArray(input)
    expect(result).toBe(input)
  })

  it('should wrap a non-array value in an array', () => {
    const input = 1
    const result = toArray(input)
    expect(result).toEqual([1])
  })

  it('should wrap null in an array', () => {
    const result = toArray(null)
    expect(result).toEqual([null])
  })

  it('should wrap undefined in an array', () => {
    const result = toArray(undefined)
    expect(result).toEqual([undefined])
  })

  it('should wrap an object in an array', () => {
    const obj = { a: 1 }
    const result = toArray(obj)
    expect(result).toEqual([obj])
  })
})
