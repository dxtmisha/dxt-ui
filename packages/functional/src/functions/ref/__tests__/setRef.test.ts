import { describe, it, expect, vi } from 'vitest'
import { ref, shallowRef, watch, type Ref } from 'vue'
import { setRef } from '../setRef'

describe('setRef', () => {
  it('should update the Ref value when value is different', () => {
    const item = ref(1)
    setRef(item, 2)
    expect(item.value).toBe(2)
  })

  it('should update string values correctly', () => {
    const item = ref('initial')
    setRef(item, 'updated')
    expect(item.value).toBe('updated')
  })

  it('should update boolean values correctly', () => {
    const item = ref(false)
    setRef(item, true)
    expect(item.value).toBe(true)
  })

  it('should not trigger setter if the primitive value is identical', () => {
    const item = ref(10)
    let setCalled = false

    const proxy = new Proxy(item, {
      set(target, p, value) {
        if (p === 'value') {
          setCalled = true
        }
        return Reflect.set(target, p, value)
      }
    })

    setRef(proxy, 10)
    expect(setCalled).toBe(false)

    setRef(proxy, 20)
    expect(setCalled).toBe(true)
  })

  it('should handle object reference equality with shallowRef', () => {
    const shared = { key: 'value' }
    const item = shallowRef(shared)
    let setCalled = false

    const proxy = new Proxy(item, {
      set(target, p, value) {
        if (p === 'value') {
          setCalled = true
        }
        return Reflect.set(target, p, value)
      }
    })

    setRef(proxy as unknown as Ref<{ key: string }>, shared)
    expect(setCalled).toBe(false)

    const updated = { key: 'value' }
    setRef(proxy as unknown as Ref<{ key: string }>, updated)
    expect(setCalled).toBe(true)
    expect(item.value).toBe(updated)
  })

  it('should update from primitive to null and undefined', () => {
    const item = ref<number | null | undefined>(42)

    setRef(item, null)
    expect(item.value).toBeNull()

    setRef(item, undefined)
    expect(item.value).toBeUndefined()
  })

  it('should not trigger setter when updating null to null', () => {
    const item = ref<string | null>(null)
    let setCalled = false

    const proxy = new Proxy(item, {
      set(target, p, value) {
        if (p === 'value') {
          setCalled = true
        }
        return Reflect.set(target, p, value)
      }
    })

    setRef(proxy, null)
    expect(setCalled).toBe(false)
  })

  it('should not trigger setter when updating undefined to undefined', () => {
    const item = ref<string | undefined>(undefined)
    let setCalled = false

    const proxy = new Proxy(item, {
      set(target, p, value) {
        if (p === 'value') {
          setCalled = true
        }
        return Reflect.set(target, p, value)
      }
    })

    setRef(proxy, undefined)
    expect(setCalled).toBe(false)
  })

  it('should trigger Vue watchers only when value changes', () => {
    const item = ref('hello')
    const watcher = vi.fn()

    watch(item, watcher, { flush: 'sync' })

    setRef(item, 'hello')
    expect(watcher).not.toHaveBeenCalled()

    setRef(item, 'world')
    expect(watcher).toHaveBeenCalledTimes(1)
    expect(watcher).toHaveBeenCalledWith('world', 'hello', expect.anything())
  })

  it('should work seamlessly with shallowRef', () => {
    const initialList = [1, 2, 3]
    const listRef = shallowRef(initialList)

    setRef(listRef, initialList)
    expect(listRef.value).toBe(initialList)

    const nextList = [1, 2, 3, 4]
    setRef(listRef, nextList)
    expect(listRef.value).toBe(nextList)
  })

  it('should support symbol and bigint values', () => {
    const sym1 = Symbol('test1')
    const sym2 = Symbol('test2')
    const symRef = ref<symbol>(sym1)

    setRef(symRef, sym2)
    expect(symRef.value).toBe(sym2)

    const bigRef = ref(100n)
    setRef(bigRef, 200n)
    expect(bigRef.value).toBe(200n)
  })
})
