import { describe, it, expect } from 'vitest'
import { copyObject } from '../copyObject'

describe('copyObject', () => {
  it('should deeply copy simple objects and arrays', () => {
    const original = { a: 1, b: { c: [2, 3] } }
    const copy = copyObject(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy.b).not.toBe(original.b)
    expect(copy.b.c).not.toBe(original.b.c)
  })

  it('should strip functions and undefined values (JSON behavior)', () => {
    const original = { a: 1, b: undefined, c: () => {} }
    const copy = copyObject(original)

    expect(copy).toEqual({ a: 1 })
    expect('b' in copy).toBe(false)
    expect('c' in copy).toBe(false)
  })

  it('should convert Date to string (JSON behavior)', () => {
    const date = new Date('2024-01-01')
    const original = { date }
    const copy = copyObject(original)

    expect(typeof (copy as any).date).toBe('string')
    expect((copy as any).date).toBe(date.toJSON())
  })
})
