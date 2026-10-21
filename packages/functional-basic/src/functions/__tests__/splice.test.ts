import { describe, expect, it } from 'vitest'
import { splice } from '../splice'

describe('splice', () => {
  it('should merge objects without indexStart', () => {
    const target = { a: 1 }
    const replacement = { b: 2 }
    expect(splice(target, replacement)).toEqual({ a: 1, b: 2 })
  })

  it('should replace at indexStart matching key and preserve order of following items', () => {
    const target = { a: 1, b: 2, c: 3 }
    const replacement = { d: 4 }

    const result = splice(target, replacement, 'b')
    expect(result).toEqual({ a: 1, d: 4, c: 3 })
    expect(Object.keys(result)).toEqual(['a', 'd', 'c'])
  })

  it('should handle indexStart matching item value', () => {
    const target = { k: 'val', rest: 'preserved' }
    const replacement = { new: 'newVal' }

    const result = splice(target, replacement, 'val')
    expect(result).toEqual({ new: 'newVal', rest: 'preserved' })
    expect(Object.keys(result)).toEqual(['new', 'rest'])
  })

  it('should append replacement at end when indexStart is not found', () => {
    const target = { a: 1, b: 2 }
    const replacement = { c: 3 }

    const result = splice(target, replacement, 'notFound')
    expect(result).toEqual({ a: 1, b: 2, c: 3 })
    expect(Object.keys(result)).toEqual(['a', 'b', 'c'])
  })

  it('should return a copy if replacement is undefined or not an object', () => {
    const target = { a: 1 }

    expect(splice(target, undefined)).toEqual({ a: 1 })
    // @ts-expect-error testing invalid input at runtime
    expect(splice(target, 123)).toEqual({ a: 1 })
    // @ts-expect-error testing invalid input at runtime
    expect(splice(target, 'string')).toEqual({ a: 1 })
  })

  it('should return empty copy if target is empty', () => {
    const target = {}
    const replacement = { a: 1 }

    expect(splice(target, replacement)).toEqual({ a: 1 })
  })

  it('should deeply clone nested objects', () => {
    const nested = { deep: { count: 5 } }
    const replacement = { added: true }

    const result = splice(nested, replacement)
    expect(result).toEqual({ deep: { count: 5 }, added: true })
  })
})
