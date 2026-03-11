import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { setRef } from '../setRef'

describe('setRef', () => {
  it('should update the Ref value when it is different', () => {
    const item = ref(1)
    setRef(item, 2)
    expect(item.value).toBe(2)
  })

  it('should not trigger setter if the value is the same', () => {
    const item = ref(10)

    let setCalled = false
    const proxy = new Proxy(item, {
      set(target, p, value) {
        if (p === 'value') setCalled = true
        return Reflect.set(target, p, value)
      }
    })

    setRef(proxy as any, 10)
    expect(setCalled).toBe(false)

    setRef(proxy as any, 20)
    expect(setCalled).toBe(true)
  })

  it('should handle object content equality via setRef', () => {
    const obj = { a: 1 }
    const item = ref(obj)

    // In Vue 3, ref(obj).value returns a proxy of obj.
    // However, setRef does item.value !== value.
    // If we pass the same object reference, it should not update.
    setRef(item, obj)
    expect(item.value).toEqual(obj)

    // Different reference with same content
    const newObj = { a: 1 }
    setRef(item, newObj)
    // Vue's !== check in setRef: item.value (Proxy) !== newObj (Raw) -> true
    expect(item.value).toEqual(newObj)
  })

  it('should update to null or undefined', () => {
    const item = ref<number | null | undefined>(1)

    setRef(item, null)
    expect(item.value).toBeNull()

    setRef(item, undefined)
    expect(item.value).toBeUndefined()
  })
})
