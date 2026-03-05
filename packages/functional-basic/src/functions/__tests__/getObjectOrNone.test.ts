import { describe, it, expect } from 'vitest'
import { getObjectOrNone } from '../getObjectOrNone'

describe('getObjectOrNone', () => {
  it('should return the object itself if it is a plain object', () => {
    const obj = { a: 1, b: 2 }
    expect(getObjectOrNone(obj)).toBe(obj)
  })

  it('should return an empty object if the value is an array', () => {
    expect(getObjectOrNone([1, 2, 3])).toEqual({})
  })

  it('should return an empty object if the value is null', () => {
    expect(getObjectOrNone(null)).toEqual({})
  })

  it('should return an empty object if the value is undefined', () => {
    expect(getObjectOrNone(undefined)).toEqual({})
  })

  it('should return an empty object if the value is a string', () => {
    expect(getObjectOrNone('hello')).toEqual({})
  })

  it('should return an empty object if the value is a number', () => {
    expect(getObjectOrNone(42)).toEqual({})
  })

  it('should return an empty object if the value is a boolean', () => {
    expect(getObjectOrNone(true)).toEqual({})
    expect(getObjectOrNone(false)).toEqual({})
  })
})
