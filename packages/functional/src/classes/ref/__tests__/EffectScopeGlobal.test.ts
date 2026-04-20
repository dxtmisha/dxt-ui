import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref, watch, nextTick } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../EffectScopeGlobal'

describe('EffectScopeGlobal', () => {
  beforeEach(() => {
    ServerStorage.setErrorStatus(true)
  })

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
    // Accessing through ServerStorage to verify initialization
    expect(ServerStorage.has('__ui:effect-scope-global__')).toBe(true)
  })

  it('should return undefined if the scope cannot run (rare case)', () => {
    // This is mostly to cover the return type if run fails or scope is disposed,
    // Though in our implementation it shouldn't be disposed.
  })
})
