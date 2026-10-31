import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, effectScope, getCurrentScope, nextTick, onScopeDispose, ref, watch, type ComputedRef, type EffectScope } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../EffectScopeGlobal'

describe('EffectScopeGlobal', () => {
  const scopes = new Set<EffectScope>()

  beforeEach(() => {
    const context: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => context)
  })

  afterEach(() => {
    scopes.forEach(scope => scope.stop())
    scopes.clear()
    ServerStorage.reset()
  })

  describe('Lazy initialization and callback results', () => {
    it('creates one scope lazily and reuses it within a request', () => {
      expect(ServerStorage.has('__ui:effect-scope-global__')).toBe(false)
      const first = EffectScopeGlobal.run(() => getCurrentScope())
      expect(first).toBeDefined()
      if (first) scopes.add(first)
      expect(ServerStorage.has('__ui:effect-scope-global__')).toBe(true)
      expect(EffectScopeGlobal.run(() => getCurrentScope())).toBe(first)
    })

    it.each([0, false, '', undefined, { value: 'tiếng Việt 🚀' }])('preserves callback result %j', (value) => {
      expect(EffectScopeGlobal.run(() => {
        const scope = getCurrentScope()
        if (scope) scopes.add(scope)
        return value
      })).toBe(value)
    })

    it('supports nested invocations (re-entrancy) within the same global scope', () => {
      const result = EffectScopeGlobal.run(() => {
        const outerScope = getCurrentScope()
        if (outerScope) scopes.add(outerScope)

        const innerResult = EffectScopeGlobal.run(() => {
          const innerScope = getCurrentScope()
          return { sameScope: innerScope === outerScope, value: 42 }
        })

        return innerResult
      })

      expect(result).toEqual({ sameScope: true, value: 42 })
    })

    it('propagates callback errors and restores the calling scope', () => {
      const parent = effectScope()
      scopes.add(parent)
      const error = new Error('callback failure')
      parent.run(() => {
        expect(() => EffectScopeGlobal.run(() => {
          const scope = getCurrentScope()
          if (scope) scopes.add(scope)
          throw error
        })).toThrow(error)
        expect(getCurrentScope()).toBe(parent)
      })
    })

    it('returns undefined when running inside an inactive/stopped scope', () => {
      const scope = EffectScopeGlobal.run(() => getCurrentScope())
      expect(scope).toBeDefined()
      if (scope) scopes.add(scope)

      // Explicitly stop the global scope
      scope?.stop()

      // Execution in an inactive scope should return undefined as per contract
      const result = EffectScopeGlobal.run(() => 'should not execute')
      expect(result).toBeUndefined()
    })
  })

  describe('State isolation and lifecycle cleanup', () => {
    it('keeps detached watchers and computed properties alive after calling scope stops', async () => {
      const counter = ref(0)
      const onChange = vi.fn()
      const onDispose = vi.fn()
      const parent = effectScope()
      scopes.add(parent)

      let double: ComputedRef<number> | undefined

      const globalScope = parent.run(() => EffectScopeGlobal.run(() => {
        watch(counter, onChange)
        onScopeDispose(onDispose)
        double = computed(() => counter.value * 2)
        return getCurrentScope()
      }))

      expect(globalScope).toBeDefined()
      if (globalScope) scopes.add(globalScope)
      expect(double?.value).toBe(0)

      // Stop the calling parent scope
      parent.stop()

      counter.value = 1
      await nextTick()
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(double?.value).toBe(2)
      expect(onDispose).not.toHaveBeenCalled()

      // Stop the global scope
      globalScope?.stop()
      counter.value = 2
      await nextTick()
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onDispose).toHaveBeenCalledTimes(1)
    })

    it('uses independent detached scopes for separate server contexts', () => {
      let context: Record<string, unknown> = {}
      ServerStorage.reset()
      ServerStorage.init(() => context)
      const first = EffectScopeGlobal.run(() => getCurrentScope())
      if (first) scopes.add(first)
      context = {}
      const second = EffectScopeGlobal.run(() => getCurrentScope())
      if (second) scopes.add(second)
      expect(first).toBeDefined()
      expect(second).toBeDefined()
      expect(second).not.toBe(first)
      first?.stop()
      expect(second?.active).toBe(true)
    })
  })
})
