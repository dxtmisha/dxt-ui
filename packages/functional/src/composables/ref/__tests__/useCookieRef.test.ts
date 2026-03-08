/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick, ref } from 'vue'
import { useCookieRef } from '../useCookieRef'

// Mock Cookie from functional-basic
const cookieMocks = {
  get: vi.fn(),
  set: vi.fn()
}

vi.mock('@dxtmisha/functional-basic', () => {
  return {
    Cookie: class {
      constructor(public name: string) {}

      get(defaultValue: any, options: any) {
        return cookieMocks.get(this.name, defaultValue, options)
      }

      set(value: any, options: any) {
        cookieMocks.set(this.name, value, options)
      }
    }
  }
})

// Mock useBroadcastValueRef to avoid real broadcast logic
vi.mock('../useBroadcastValueRef', () => {
  return {
    useBroadcastValueRef: vi.fn((_key: string, initialValue: any) => ref(initialValue))
  }
})

import { useBroadcastValueRef } from '../useBroadcastValueRef'

describe('useCookieRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Note: 'items' in useCookieRef.ts is a module-level variable and cannot be easily reset
    // without re-importing the module or adding a reset function.
    // We'll use unique names for each test.
  })

  it('should initialize with value from a cookie', () => {
    const name = 'test-cookie-init'
    const defaultValue = 'default'
    cookieMocks.get.mockReturnValue('value-from-cookie')

    const item = useCookieRef(name, defaultValue)

    expect(cookieMocks.get).toHaveBeenCalledWith(name, defaultValue, undefined)
    expect(useBroadcastValueRef).toHaveBeenCalledWith(`__cookie:${name}`, 'value-from-cookie')
    expect(item.value).toBe('value-from-cookie')
  })

  it('should update cookie when ref value changes', async () => {
    const name = 'test-cookie-update'
    cookieMocks.get.mockReturnValue('initial')

    const item = useCookieRef(name)
    item.value = 'new-value'

    await nextTick()

    expect(cookieMocks.set).toHaveBeenCalledWith(name, 'new-value', undefined)
  })

  it('should implement a singleton pattern per cookie name', () => {
    const name = 'test-cookie-single'

    const item1 = useCookieRef(name, 'first')
    const item2 = useCookieRef(name, 'second')

    expect(item1).toBe(item2)
    // The second call should not even trigger cookie.get because it returns from 'items'
    expect(cookieMocks.get).toHaveBeenCalledTimes(1)
  })

  it('should pass options to cookie methods', () => {
    const name = 'test-cookie-options'
    const options = { age: 7 }

    useCookieRef(name, 'val', options)
    expect(cookieMocks.get).toHaveBeenCalledWith(name, 'val', options)
  })
})
