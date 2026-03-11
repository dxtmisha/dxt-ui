import { describe, it, expect } from 'vitest'
import { toBinds } from '../toBinds'

describe('toBinds', () => {
  it('should return an empty object when called with no arguments', () => {
    expect(toBinds()).toEqual({})
  })

  it('should return the equivalent object when called with a single argument', () => {
    const obj = { id: 'test', class: 'btn' }
    // toBind with an empty object as the first accumulator
    expect(toBinds(obj)).toEqual(obj)
  })

  it('should sequentially merge multiple objects, overwriting standard properties', () => {
    const o1 = { a: 1, b: 2 }
    const o2 = { b: 3, c: 4 }
    const o3 = { c: 5, d: 6 }

    const result = toBinds(o1, o2, o3)
    // b comes from o2, c comes from o3
    expect(result).toEqual({ a: 1, b: 3, c: 5, d: 6 })
  })

  it('should appropriately merge classes from multiple objects into arrays', () => {
    const o1 = { class: 'c1' }
    const o2 = { class: 'c2' }
    const o3 = { class: 'c3' }

    const result = toBinds(o1, o2, o3)
    // Depending on toBind implementation (array nesting),
    // toBind(data, o1) -> { class: 'c1' }
    // toBind(prev, o2) -> { class: ['c1', 'c2'] }
    // toBind(prev, o3) -> { class: [['c1', 'c2'], 'c3'] }
    expect(result.class).toEqual([['c1', 'c2'], 'c3'])
  })

  it('should appropriately merge styles from multiple objects into arrays', () => {
    const o1 = { style: { color: 'red' } }
    const o2 = { style: { margin: 0 } }
    const o3 = { style: { padding: '10px' } }

    const result = toBinds(o1, o2, o3)
    expect(result.style).toEqual([[{ color: 'red' }, { margin: 0 }], { padding: '10px' }])
  })

  it('should handle complex merging with mixed properties', () => {
    const o1 = { class: 'c1', disabled: false }
    const o2 = { style: { color: 'red' }, disabled: true }
    const o3 = { class: 'c3', id: 'my-id' }

    const result = toBinds(o1, o2, o3)

    expect(result).toEqual({
      class: ['c1', 'c3'], // o2 has no class, so it's just o1 merged with o3
      style: { color: 'red' },
      disabled: true, // o2 overwrites o1
      id: 'my-id'
    })
  })

  it('should ignore undefined or null values in the arguments list', () => {
    const o1 = { id: 1 }
    const o2 = { id: 2, class: 'c' }

    // Using `any` cast to simulate runtime calls with null or undefined
    const result = toBinds(o1, undefined as any, null as any, o2)

    expect(result).toEqual({
      id: 2,
      class: 'c'
    })
  })
})
