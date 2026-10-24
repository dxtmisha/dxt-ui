/**
 * @vitest-environment node
 */

import { describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'

import { computedEternity } from '../computedEternity'

/**
 * Waits for the getter promise and publication of its result.
 *
 * Дожидается промиса геттера и публикации его результата.
 * @returns completion of pending promise continuations / завершение ожидающих продолжений промисов
 */
async function flushEvaluation(): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 0)
  })
  await nextTick()
}

describe('computedEternity: SSR', () => {
  describe('Lazy one-time evaluation', () => {
    it('resolves an asynchronous getter after the first read and caches the result', async () => {
      const getter = vi.fn(async () => 'server result')
      const result = computedEternity(getter, 'initial')

      expect(getter).not.toHaveBeenCalled()
      expect(result.value).toBe('initial')
      await flushEvaluation()

      expect(result.value).toBe('server result')
      expect(result.value).toBe('server result')
      expect(getter).toHaveBeenCalledTimes(1)
    })

    it('does not create a persistent dependency watcher on the server', async () => {
      const source = ref(1)
      const getter = vi.fn(() => source.value)
      const result = computedEternity(getter)

      expect(result.value).toBeUndefined()
      await flushEvaluation()
      expect(result.value).toBe(1)
      source.value = 2
      await flushEvaluation()

      expect(result.value).toBe(1)
      expect(getter).toHaveBeenCalledTimes(1)
    })

    it('keeps results of independently created refs isolated', async () => {
      const firstState = { request: 'first' }
      const secondState = { request: 'second' }
      const first = computedEternity(() => firstState)
      const second = computedEternity(() => secondState)

      expect(first.value).toBeUndefined()
      expect(second.value).toBeUndefined()
      await flushEvaluation()

      expect(first.value).toBe(firstState)
      expect(second.value).toBe(secondState)
      expect(first.value).not.toBe(second.value)
    })
  })
})
