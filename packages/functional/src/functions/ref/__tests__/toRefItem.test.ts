import { describe, it, expect } from 'vitest'
import { ref, computed, shallowRef, isRef } from 'vue'
import { toRefItem } from '../toRefItem'

describe('toRefItem', () => {
  it('should return the same Ref instance if input is already a Ref', () => {
    const originalRef = ref('hello')
    const result = toRefItem(originalRef)

    expect(isRef(result)).toBe(true)
    expect(result).toBe(originalRef)
    expect(result.value).toBe('hello')
  })

  it('should return the same ComputedRef instance if input is a computed', () => {
    const source = ref(10)
    const computedVal = computed(() => source.value * 2)
    const result = toRefItem(computedVal)

    expect(isRef(result)).toBe(true)
    expect(result).toBe(computedVal)
    expect(result.value).toBe(20)
  })

  it('should return the same ShallowRef instance if input is a shallowRef', () => {
    const shallow = shallowRef({ count: 1 })
    const result = toRefItem(shallow)

    expect(isRef(result)).toBe(true)
    expect(result).toBe(shallow)
    expect(result.value).toEqual({ count: 1 })
  })

  it('should wrap a primitive string in a Ref', () => {
    const result = toRefItem('world')
    expect(isRef(result)).toBe(true)
    expect(result.value).toBe('world')
  })

  it('should wrap numbers (including 0, negative, NaN) in a Ref', () => {
    expect(toRefItem(12345).value).toBe(12345)
    expect(toRefItem(0).value).toBe(0)
    expect(toRefItem(-42).value).toBe(-42)
    expect(Number.isNaN(toRefItem(NaN).value)).toBe(true)
  })

  it('should wrap boolean values in a Ref', () => {
    expect(toRefItem(true).value).toBe(true)
    expect(toRefItem(false).value).toBe(false)
  })

  it('should wrap BigInt and Symbol values in a Ref', () => {
    const sym = Symbol('token')
    const big = 1000n

    expect(toRefItem(sym).value).toBe(sym)
    expect(toRefItem(big).value).toBe(big)
  })

  it('should wrap an object in a reactive Ref', () => {
    const obj = { key: 'value', nested: { count: 1 } }
    const result = toRefItem(obj)

    expect(isRef(result)).toBe(true)
    expect(result.value).toEqual(obj)

    result.value.nested.count = 2
    expect(result.value.nested.count).toBe(2)
  })

  it('should wrap an array in a reactive Ref', () => {
    const list = [1, 2, 3]
    const result = toRefItem(list)

    expect(isRef(result)).toBe(true)
    expect(result.value).toEqual(list)

    result.value.push(4)
    expect(result.value).toEqual([1, 2, 3, 4])
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

  it('should support calling toRefItem without arguments', () => {
    const result = toRefItem()
    expect(isRef(result)).toBe(true)
    expect(result.value).toBeUndefined()
  })

  it('should preserve function references when wrapped', () => {
    const fn = (x: number) => x * 2
    const result = toRefItem(fn)

    expect(isRef(result)).toBe(true)
    expect(result.value(5)).toBe(10)
  })

  it('should maintain independent reactivity for distinct wrapped values', () => {
    const refA = toRefItem(10)
    const refB = toRefItem(10)

    expect(refA).not.toBe(refB)
    refA.value = 20
    expect(refA.value).toBe(20)
    expect(refB.value).toBe(10)
  })

  it('should support updating value reactively', () => {
    const result = toRefItem<number>(10)
    expect(result.value).toBe(10)

    result.value = 99
    expect(result.value).toBe(99)
  })
})
