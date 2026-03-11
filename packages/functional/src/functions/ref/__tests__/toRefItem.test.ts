import { describe, it, expect } from 'vitest'
import { ref, isRef } from 'vue'
import { toRefItem } from '../toRefItem'

describe('toRefItem', () => {
  it('should return the same Ref if the input is already a Ref', () => {
    const originalRef = ref('hello')
    const result = toRefItem(originalRef)

    expect(isRef(result)).toBe(true)
    expect(result).toBe(originalRef)
    expect(result.value).toBe('hello')
  })

  it('should wrap a primitive string in a Ref', () => {
    const input = 'world'
    const result = toRefItem(input)

    expect(isRef(result)).toBe(true)
    expect(result.value).toBe(input)
  })

  it('should wrap a number in a Ref', () => {
    const input = 12345
    const result = toRefItem(input)

    expect(isRef(result)).toBe(true)
    expect(result.value).toBe(input)
  })

  it('should wrap a boolean in a Ref', () => {
    const input = true
    const result = toRefItem(input)

    expect(isRef(result)).toBe(true)
    expect(result.value).toBe(input)
  })

  it('should wrap an object in a Ref', () => {
    const input = { key: 'value', nested: { a: 1 } }
    const result = toRefItem(input)

    expect(isRef(result)).toBe(true)
    // Use toEqual for object values as ref() creates a proxy for objects
    expect(result.value).toEqual(input)
  })

  it('should wrap null in a Ref', () => {
    const result = toRefItem(null)

    expect(isRef(result)).toBe(true)
    expect(result.value).toBeNull()
  })

  it('should wrap undefined in a Ref', () => {
    const result = toRefItem(undefined)

    expect(isRef(result)).toBe(true)
    expect(result.value).toBeUndefined()
  })

  it('should behave reactively when wrapped', () => {
    const input = 10
    const result = toRefItem(input)

    expect(result.value).toBe(10)
    result.value = 20
    expect(result.value).toBe(20)
  })
})
