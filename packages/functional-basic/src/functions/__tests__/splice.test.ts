import { describe, it, expect } from 'vitest'
import { splice } from '../splice'

describe('splice', () => {
  it('should merge objects without indexStart', () => {
    const obj = { a: 1 }
    const repl = { b: 2 }
    expect(splice(obj, repl)).toEqual({ a: 1, b: 2 })
  })

  it('should insert at indexStart', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const repl = { d: 4 }
    // When indexStart is 'b', it replaces 'b' and moves following items
    const result = splice(obj, repl, 'b')
    expect(result).toEqual({ a: 1, d: 4, c: 3 })
  })

  it('should handle indexStart matching item value', () => {
    const obj = { k: 'val' }
    const repl = { new: 'newVal' }
    const result = splice(obj, repl, 'val')
    expect(result).toEqual({ new: 'newVal' })
  })

  it('should return copy if replacement is not an object', () => {
    const obj = { a: 1 }
    expect(splice(obj, 123 as any)).toEqual({ a: 1 })
  })
})
