import { describe, it, expect } from 'vitest'
import { replaceRecursive } from '../replaceRecursive'

describe('replaceRecursive', () => {
  it('should recursively merge objects', () => {
    const obj1 = { a: 1, b: { c: 2 } }
    const obj2 = { b: { d: 3 }, e: 4 }
    const result = replaceRecursive(obj1, obj2 as any)

    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
  })

  it('should merge arrays if isMerge is true (default)', () => {
    const obj1 = { list: [1, 2] }
    const obj2 = { list: [2, 3] }
    const result = replaceRecursive(obj1, obj2)

    expect(result.list).toEqual([1, 2, 3])
  })

  it('should overwrite arrays if isMerge is false (note: internal implementation converts to object)', () => {
    const obj1 = { list: [1, 2] }
    const obj2 = { list: [2, 3] }
    const result = replaceRecursive(obj1, obj2, false)

    // Based on implementation: returnData[index] = replaceRecursive({ ...data }, item, false)
    // where {...data} for an array [1, 2] becomes {0: 1, 1: 2}
    expect(result.list).toEqual({ 0: 2, 1: 3 })
  })

  it('should handle non-object values', () => {
    const obj1 = { a: 1 }
    const obj2 = { a: 2 }
    expect(replaceRecursive(obj1, obj2)).toEqual({ a: 2 })
  })
})
