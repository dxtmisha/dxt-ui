import { describe, it, expect } from 'vitest'
import { intersectKey } from '../intersectKey'

describe('intersectKey', () => {
  it('should return properties of data that exist in comparison', () => {
    const data = { a: 1, b: 2, c: 3 }
    const comparison = { b: 'x', c: 'y', d: 'z' }

    expect(intersectKey(data, comparison)).toEqual({ b: 2, c: 3 })
  })

  it('should return an empty object if no keys intersect', () => {
    const data = { a: 1, b: 2 }
    const comparison = { c: 3, d: 4 }

    expect(intersectKey(data, comparison)).toEqual({})
  })

  it('should work with arrays (indexes act as keys)', () => {
    const data = ['apple', 'banana', 'cherry'] // keys: 0, 1, 2
    const comparison = ['x', 'y'] // keys: 0, 1

    // Result should be the elements from 'data' that correspond to valid indexes in 'comparison'
    expect(intersectKey(data, comparison)).toEqual({ 0: 'apple', 1: 'banana' })
  })

  it('should return an empty object if data is undefined', () => {
    const comparison = { a: 1 }
    expect(intersectKey(undefined, comparison)).toEqual({})
  })

  it('should return an empty object if comparison is undefined', () => {
    const data = { a: 1 }
    expect(intersectKey(data, undefined)).toEqual({})
  })

  it('should only check keys in the source data, ignoring extra keys in comparison', () => {
    const data = { a: 1 }
    const comparison = { a: 10, b: 20, c: 30 }

    expect(intersectKey(data, comparison)).toEqual({ a: 1 })
  })
})
