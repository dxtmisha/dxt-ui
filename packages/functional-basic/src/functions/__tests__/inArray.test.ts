import { describe, it, expect } from 'vitest'
import { inArray } from '../inArray'

describe('inArray', () => {
  it('should return true if the value is in an array', () => {
    const array = [1, 2, 3]
    expect(inArray(array, 2)).toBe(true)
  })

  it('should return false if the value is not in an array', () => {
    const array = [1, 2, 3]
    expect(inArray(array, 4)).toBe(false)
  })

  it('should work with strings', () => {
    const array = ['a', 'b', 'c']
    expect(inArray(array, 'b')).toBe(true)
    expect(inArray(array, 'd')).toBe(false)
  })

  it('should work with objects (reference equality)', () => {
    const obj = { id: 1 }
    const array = [obj]
    expect(inArray(array, obj)).toBe(true)
    expect(inArray(array, { id: 1 })).toBe(false)
  })
})
