import { describe, it, expect } from 'vitest'
import { copyObject } from '../copyObject'

describe('copyObject', () => {
  it('should deeply copy a simple object', () => {
    const original = { a: 1, b: { c: 2 } }
    const copy = copyObject(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy.b).not.toBe(original.b)
  })

  it('should copy an array', () => {
    const original = [1, 2, { a: 3 }]
    const copy = copyObject(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy[2]).not.toBe(original[2])
  })

  it('should handle primitive values', () => {
    expect(copyObject('hello')).toBe('hello')
    expect(copyObject(123)).toBe(123)
    expect(copyObject(true)).toBe(true)
  })

  it('should ignore functions and undefined properties (due to JSON.stringify)', () => {
    const original = { a: 1, b: undefined, c: () => { } }
    const copy = copyObject(original)

    expect(copy).toEqual({ a: 1 })
  })
})
