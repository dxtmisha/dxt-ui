/**
 * @vitest-environment node
 */

import { describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'

import { computedEternity } from '../computedEternity'

/**
 * Waits for pending microtasks and timers.
 *
 * Дожидается завершения ожидающих микрозадач и таймеров.
 * @returns completion of pending continuations / завершение ожидающих продолжений
 */
async function flushEvaluation(): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 0)
  })
  await nextTick()
}

describe('computedEternity: SSR', () => {
  describe('Server-side evaluation skip', () => {
    it('skips getter evaluation and returns initialState in a non-DOM runtime', async () => {
      const getter = vi.fn(async () => 'server result')
      const initialState = vi.fn(() => 'initial')
      const runSpy = vi.spyOn(EffectScopeGlobal, 'run')
      const result = computedEternity(getter, initialState)

      expect(initialState).toHaveBeenCalledTimes(1)
      expect(getter).not.toHaveBeenCalled()
      expect(result.value).toBe('initial')
      await flushEvaluation()

      expect(result.value).toBe('initial')
      expect(getter).not.toHaveBeenCalled()
      expect(runSpy).not.toHaveBeenCalled()
    })

    it('does not create a dependency watcher or evaluate reactive sources on the server', async () => {
      const source = ref(1)
      const getter = vi.fn(() => source.value)
      const result = computedEternity(getter)

      expect(result.value).toBeUndefined()
      await flushEvaluation()
      expect(result.value).toBeUndefined()
      source.value = 2
      await flushEvaluation()

      expect(result.value).toBeUndefined()
      expect(getter).not.toHaveBeenCalled()
    })

    it('keeps initial states of independently created refs isolated on the server', () => {
      const firstState = { request: 'first' }
      const secondState = { request: 'second' }
      const first = computedEternity(() => ({ request: 'resolved-first' }), () => firstState)
      const second = computedEternity(() => ({ request: 'resolved-second' }), () => secondState)

      expect(first.value).toBe(firstState)
      expect(second.value).toBe(secondState)
      expect(first.value).not.toBe(second.value)
    })
  })
})
