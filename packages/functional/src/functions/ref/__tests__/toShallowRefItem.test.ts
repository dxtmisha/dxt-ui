import { describe, it, expect, vi } from 'vitest'
import { ref, computed, shallowRef, isRef, watch } from 'vue'
import { toShallowRefItem } from '../toShallowRefItem'

describe('toShallowRefItem', () => {
  it('should return the same ShallowRef instance if input is already a shallowRef', () => {
    const original = shallowRef({ count: 1 })
    const result = toShallowRefItem(original)

    expect(isRef(result)).toBe(true)
    expect(result).toBe(original)
    expect(result.value).toEqual({ count: 1 })
  })

  it('should return the same Ref instance if input is a normal ref', () => {
    const originalRef = ref('hello')
    const result = toShallowRefItem(originalRef)

    expect(isRef(result)).toBe(true)
    expect(result).toBe(originalRef)
    expect(result.value).toBe('hello')
  })

  it('should return the same ComputedRef instance if input is a computed', () => {
    const source = ref(5)
    const computedVal = computed(() => source.value * 2)
    const result = toShallowRefItem(computedVal)

    expect(isRef(result)).toBe(true)
    expect(result).toBe(computedVal)
    expect(result.value).toBe(10)
  })

  it('should wrap a primitive string in a shallowRef', () => {
    const result = toShallowRefItem('test')
    expect(isRef(result)).toBe(true)
    expect(result.value).toBe('test')
  })

  it('should wrap numbers (including 0, negative, NaN) in a shallowRef', () => {
    expect(toShallowRefItem(100).value).toBe(100)
    expect(toShallowRefItem(0).value).toBe(0)
    expect(toShallowRefItem(-15).value).toBe(-15)
    expect(Number.isNaN(toShallowRefItem(NaN).value)).toBe(true)
  })

  it('should wrap booleans in a shallowRef', () => {
    expect(toShallowRefItem(true).value).toBe(true)
    expect(toShallowRefItem(false).value).toBe(false)
  })

  it('should wrap BigInt and Symbol values in a shallowRef', () => {
    const sym = Symbol('shallow')
    const big = 9999n

    expect(toShallowRefItem(sym).value).toBe(sym)
    expect(toShallowRefItem(big).value).toBe(big)
  })

  it('should wrap an object without creating a deep reactive proxy', () => {
    const rawObject = { nested: { count: 1 } }
    const result = toShallowRefItem(rawObject)

    expect(isRef(result)).toBe(true)
    // In shallowRef, the value is the exact raw object reference (not a Proxy)
    expect(result.value).toBe(rawObject)
  })

  it('should not trigger watcher on nested property mutations in shallowRef', () => {
    const rawObject = { nested: { count: 1 } }
    const result = toShallowRefItem(rawObject)
    const watcher = vi.fn()

    watch(result, watcher, { flush: 'sync' })

    // Mutating nested property does NOT trigger shallowRef watcher
    result.value.nested.count = 2
    expect(watcher).not.toHaveBeenCalled()

    // Replacing the root value DOES trigger watcher
    result.value = { nested: { count: 3 } }
    expect(watcher).toHaveBeenCalledTimes(1)
  })

  it('should wrap arrays in a shallowRef without proxying array methods', () => {
    const rawArray = [1, 2, 3]
    const result = toShallowRefItem(rawArray)

    expect(isRef(result)).toBe(true)
    expect(result.value).toBe(rawArray)
  })

  it('should wrap null in a shallowRef', () => {
    const result = toShallowRefItem(null)
    expect(isRef(result)).toBe(true)
    expect(result.value).toBeNull()
  })

  it('should wrap undefined in a shallowRef', () => {
    const result = toShallowRefItem(undefined)
    expect(isRef(result)).toBe(true)
    expect(result.value).toBeUndefined()
  })

  it('should support calling toShallowRefItem without arguments', () => {
    const result = toShallowRefItem()
    expect(isRef(result)).toBe(true)
    expect(result.value).toBeUndefined()
  })

  it('should support updating value reactively', () => {
    const result = toShallowRefItem<number>(10)
    expect(result.value).toBe(10)

    result.value = 42
    expect(result.value).toBe(42)
  })
})
