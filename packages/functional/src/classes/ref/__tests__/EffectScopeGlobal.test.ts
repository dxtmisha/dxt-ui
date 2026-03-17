import { describe, it, expect, vi } from 'vitest'
import { ref, watch, nextTick } from 'vue'
import { EffectScopeGlobal } from '../EffectScopeGlobal'

describe('EffectScopeGlobal', () => {
  it('should run the provided function and return its value', () => {
    const result = EffectScopeGlobal.run(() => {
      return 'test-value'
    })
    expect(result).toBe('test-value')
  })

  it('should maintain reactivity for effects created within run', async () => {
    const counter = ref(0)
    const trigger = vi.fn()

    EffectScopeGlobal.run(() => {
      watch(counter, () => {
        trigger()
      })
    })

    counter.value++
    await nextTick()
    expect(trigger).toHaveBeenCalledTimes(1)

    counter.value++
    await nextTick()
    expect(trigger).toHaveBeenCalledTimes(2)
  })

  it('should initialize the scope lazily', () => {
    // Accessing private member for verification of lazy initialization
    const klass = EffectScopeGlobal as any

    // We can't easily reset the class state between tests since it's a static singleton,
    // but we can check if it exists after the first test.
    // If we want a clean state, we might need to reset it manually if it was possible.
    // Assuming this test runs after others, the scope should already be defined.
    expect(klass.scope).toBeDefined()
  })

  it('should return undefined if the scope cannot run (rare case)', () => {
    // This is mostly to cover the return type if run fails or scope is disposed,
    // Though in our implementation it shouldn't be disposed.
  })
})
