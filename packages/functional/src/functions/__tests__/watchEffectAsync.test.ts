/**
 * @vitest-environment jsdom
 */

import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, ref } from 'vue'
import * as functionalBasic from '@dxtmisha/functional-basic'

import { watchEffectAsync } from '../watchEffectAsync'

describe('watchEffectAsync', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Immediate execution and reactivity', () => {
    it('executes the effect immediately and provides isCurrent returning true', () => {
      let executed = false
      let currentInRun = false

      const stop = watchEffectAsync(async (isCurrent) => {
        executed = true
        currentInRun = isCurrent()
      })

      expect(executed).toBe(true)
      expect(currentInRun).toBe(true)
      stop()
    })

    it('marks isCurrent as false when the watcher is stopped and remains false (idempotent)', () => {
      let checkCurrent: (() => boolean) | undefined

      const stop = watchEffectAsync(async (isCurrent) => {
        checkCurrent = isCurrent
      })

      expect(checkCurrent?.()).toBe(true)
      stop()
      expect(checkCurrent?.()).toBe(false)
      expect(checkCurrent?.()).toBe(false)
    })

    it('marks isCurrent of older run as false when reactive dependency changes', async () => {
      const count = ref(0)
      const runs: boolean[] = []
      let checkPreviousRun: (() => boolean) | undefined

      const stop = watchEffectAsync(async (isCurrent) => {
        runs.push(isCurrent())

        if (count.value === 0) {
          checkPreviousRun = isCurrent
        }
      })

      expect(runs).toEqual([true])
      expect(checkPreviousRun?.()).toBe(true)

      count.value++
      await nextTick()

      expect(runs).toEqual([true, true])
      expect(checkPreviousRun?.()).toBe(false)
      stop()
    })

    it('marks isCurrent as false when the owning effectScope stops', () => {
      const scope = effectScope()
      let checkCurrent: (() => boolean) | undefined

      scope.run(() => {
        watchEffectAsync(async (isCurrent) => {
          checkCurrent = isCurrent
        })
      })

      expect(checkCurrent?.()).toBe(true)
      scope.stop()
      expect(checkCurrent?.()).toBe(false)
    })
  })

  describe('Cleanup callback registration', () => {
    it('supports registering custom onCleanup callbacks alongside isCurrent', () => {
      const cleanupSpy = vi.fn()
      let checkCurrent: (() => boolean) | undefined

      const stop = watchEffectAsync(async (isCurrent, onCleanup) => {
        checkCurrent = isCurrent
        expect(isCurrent()).toBe(true)
        onCleanup(cleanupSpy)
      })

      expect(cleanupSpy).not.toHaveBeenCalled()
      stop()
      expect(cleanupSpy).toHaveBeenCalledTimes(1)
      expect(checkCurrent?.()).toBe(false)
    })
  })

  describe('Watcher options', () => {
    it('supports passing watcher options such as flush sync and flush post', async () => {
      const count = ref(0)
      let syncRunCount = 0
      let postRunCount = 0

      const stopSync = watchEffectAsync(
        async () => {
          void count.value
          syncRunCount++
        },
        { flush: 'sync' }
      )

      const stopPost = watchEffectAsync(
        async () => {
          void count.value
          postRunCount++
        },
        { flush: 'post' }
      )

      expect(syncRunCount).toBe(1)
      expect(postRunCount).toBe(0)

      await nextTick()
      expect(postRunCount).toBe(1)

      count.value++
      expect(syncRunCount).toBe(2)
      expect(postRunCount).toBe(1)

      await nextTick()
      expect(postRunCount).toBe(2)

      stopSync()
      stopPost()
    })
  })

  describe('Asynchronous race condition handling', () => {
    it('allows async operations to check isCurrent before applying results', async () => {
      const count = ref(0)
      let appliedValue: number | undefined

      let resolveFirst!: () => void
      const firstPromise = new Promise<void>((resolve) => {
        resolveFirst = resolve
      })

      const stop = watchEffectAsync(async (isCurrent) => {
        const currentCount = count.value

        if (currentCount === 0) {
          await firstPromise
        }

        if (isCurrent()) {
          appliedValue = currentCount
        }
      })

      // Advance count to 1 while first evaluation is pending
      count.value = 1
      await nextTick()

      // Now resolve first promise; its isCurrent should be false
      resolveFirst()
      await nextTick()

      expect(appliedValue).toBe(1)
      stop()
    })

    it('discards results of superseded out-of-order asynchronous responses', async () => {
      const query = ref('first')
      const results: string[] = []

      let resolveFirstPromise!: (value: string) => void
      const firstPromise = new Promise<string>((resolve) => {
        resolveFirstPromise = resolve
      })

      let resolveSecondPromise!: (value: string) => void
      const secondPromise = new Promise<string>((resolve) => {
        resolveSecondPromise = resolve
      })

      const stop = watchEffectAsync(async (isCurrent) => {
        const currentQuery = query.value
        const data = currentQuery === 'first'
          ? await firstPromise
          : await secondPromise

        if (isCurrent()) {
          results.push(data)
        }
      })

      // Trigger second evaluation while first is pending
      query.value = 'second'
      await nextTick()

      // Second request finishes before first
      resolveSecondPromise('result-second')
      await nextTick()

      // First request finishes afterwards (out-of-order)
      resolveFirstPromise('result-first')
      await nextTick()

      // Only the result from the latest current run is applied
      expect(results).toEqual(['result-second'])
      stop()
    })
  })

  describe('SSR compatibility', () => {
    it('skips execution in SSR environments and returns a no-op stop handle', () => {
      vi.spyOn(functionalBasic, 'isDomRuntime').mockReturnValue(false)
      const effectSpy = vi.fn(async () => {})

      const stop = watchEffectAsync(effectSpy)

      expect(effectSpy).not.toHaveBeenCalled()
      expect(typeof stop).toBe('function')
      expect(() => stop()).not.toThrow()
    })
  })
})
