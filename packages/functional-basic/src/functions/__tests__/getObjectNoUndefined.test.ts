import { describe, it, expect } from 'vitest'
import { getObjectNoUndefined } from '../getObjectNoUndefined'

describe('getObjectNoUndefined', () => {
  it('should remove properties that are strictly equal to undefined by default', () => {
    const data = { a: 1, b: undefined, c: 3, d: undefined }
    expect(getObjectNoUndefined(data)).toEqual({ a: 1, c: 3 })
  })

  it('should preserve falsy values like null, 0, false, and empty strings when default exception is used', () => {
    const data = { a: null, b: 0, c: false, d: '', e: undefined }
    expect(getObjectNoUndefined(data)).toEqual({ a: null, b: 0, c: false, d: '' })
  })

  it('should remove properties matching a custom exception value', () => {
    const data = {
      name: 'John',
      age: 25,
      role: 'guest',
      status: 'guest'
    }
    // Remove all properties with value 'guest'
    expect(getObjectNoUndefined(data, 'guest')).toEqual({ name: 'John', age: 25 })
  })

  it('should work with arrays (indexes become string keys)', () => {
    const data = ['apple', undefined, 'banana']
    // Since getObjectNoUndefined returns an object, the array indexes become object keys
    expect(getObjectNoUndefined(data)).toEqual({ 0: 'apple', 2: 'banana' })
  })

  it('should return a new object and not mutate the original object', () => {
    const data = { x: 1, y: undefined }
    const result = getObjectNoUndefined(data)
    expect(result).not.toBe(data)
    expect(data).toEqual({ x: 1, y: undefined })
  })
})
