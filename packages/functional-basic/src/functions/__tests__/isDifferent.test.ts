import { describe, it, expect } from 'vitest'
import { isDifferent } from '../isDifferent'

describe('isDifferent', () => {
  it('should return false for identical objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }

    expect(isDifferent(obj1, obj2)).toBe(false)
  })

  it('should return true if properties have different values', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 3 }

    expect(isDifferent(obj1, obj2)).toBe(true)
  })

  it('should return true if objects have a different number of properties', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1 }

    expect(isDifferent(obj1, obj2)).toBe(true)
  })

  it('should return true if objects have the same number of keys but different keys', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, c: 2 }

    expect(isDifferent(obj1, obj2)).toBe(true)
  })

  it('should return false for empty objects', () => {
    expect(isDifferent({}, {})).toBe(false)
  })

  it('should work with arrays representing list items', () => {
    // Though meant for ObjectItem, it works with arrays (keys represent indices)
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    const arr3 = [1, 2, 4]

    expect(isDifferent(arr1 as any, arr2 as any)).toBe(false)
    expect(isDifferent(arr1 as any, arr3 as any)).toBe(true)
  })
})
