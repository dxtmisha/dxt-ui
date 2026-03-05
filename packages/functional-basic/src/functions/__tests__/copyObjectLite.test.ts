import { describe, it, expect } from 'vitest'
import { copyObjectLite } from '../copyObjectLite'

describe('copyObjectLite', () => {
  it('should shallow copy an object?', () => {
    const original = { a: 1, b: { c: 2 } }
    const copy = copyObjectLite(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy.b).toBe(original.b) // Shallow copy
  })

  it('should merge additional properties from the source object', () => {
    const original = { a: 1, b: 2 }
    const source = { b: 3, c: 4 }
    const copy = copyObjectLite(original, source)

    expect(copy).toEqual({ a: 1, b: 3, c: 4 })
    expect(copy).not.toBe(original)
  })

  it('should handle missing source property gracefully', () => {
    const original = { a: 1 }
    const copy = copyObjectLite(original, undefined)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
  })
})
