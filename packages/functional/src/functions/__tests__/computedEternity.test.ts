/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest'
import { effectScope, getCurrentScope, nextTick, ref, watch, type EffectScope } from 'vue'
import * as functionalBasic from '@dxtmisha/functional-basic'
import { ErrorCenter, ServerStorage } from '@dxtmisha/functional-basic'

import { computedEternity } from '../computedEternity'
import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'
import { FUNCTIONAL_ERROR_GROUP } from '../../types/errorTypes'

/** Controllable asynchronous result / Управляемый асинхронный результат */
export interface Deferred<T> {
  /** Result promise / Промис результата */
  readonly promise: Promise<T>
  /** Resolves the result / Завершает результат успешно */
  readonly resolve: (value: T) => void
  /** Rejects the result / Завершает результат с ошибкой */
  readonly reject: (reason: unknown) => void
}

/**
 * Creates a promise with completion controlled by the test.
 *
 * Создаёт промис, завершением которого управляет тест.
 * @returns controllable result / управляемый результат
 */
function createDeferred<T>(): Deferred<T> {
  let resolvePromise: (value: T) => void
  let rejectPromise: (reason: unknown) => void
  const promise = new Promise<T>((resolve, reject) => {
    resolvePromise = resolve
    rejectPromise = reject
  })

  return {
    promise,
    resolve: (value: T): void => resolvePromise(value),
    reject: (reason: unknown): void => rejectPromise(reason)
  }
}

/**
 * Flushes resolved promise continuations and reactive notifications.
 *
 * Дожидается продолжений завершённых промисов и реактивных уведомлений.
 * @returns completion after pending evaluations and notifications / завершение ожидающих вычислений и уведомлений
 */
async function flushEvaluation(): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 0)
  })
  await nextTick()
}

describe('computedEternity', () => {
  /** Persistent scope owned by this test / Постоянная область эффектов текущего теста */
  let scope: EffectScope

  beforeEach(() => {
    ServerStorage.init(() => undefined)
    ServerStorage.reset()
    const currentScope = EffectScopeGlobal.run(() => getCurrentScope())

    if (!currentScope) {
      throw new Error('An active global effect scope is required')
    }

    scope = currentScope
  })

  afterEach(() => {
    scope.stop()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  describe('Lazy evaluation and initial state', () => {
    it('starts on the first read and caches the result across repeated reads', async () => {
      const getter = vi.fn(() => 'value')
      const result = computedEternity(getter)

      expect(getter).not.toHaveBeenCalled()
      expect(result.value).toBeUndefined()
      expect(result.value).toBeUndefined()
      await flushEvaluation()

      expect(result.value).toBe('value')
      expect(result.value).toBe('value')
      expect(getter).toHaveBeenCalledTimes(1)
    })

    it.each([
      { label: 'direct value', getter: 'direct value', expected: 'direct value' },
      { label: 'direct promise', getter: Promise.resolve('promise value'), expected: 'promise value' }
    ])('resolves a $label passed as getter', async ({ getter, expected }) => {
      const result = computedEternity(getter, 'initial')

      expect(result.value).toBe('initial')
      await flushEvaluation()

      expect(result.value).toBe(expected)
    })

    it('keeps the initial value until an asynchronous getter resolves', async () => {
      const pending = createDeferred<string>()
      const result = computedEternity(() => pending.promise, 'loading')

      expect(result.value).toBe('loading')
      await flushEvaluation()
      expect(result.value).toBe('loading')
      pending.resolve('resolved')
      await flushEvaluation()

      expect(result.value).toBe('resolved')
    })

    it('supports an initial state with a distinct type', async () => {
      const pending = createDeferred<{ id: number }>()
      const result = computedEternity(() => pending.promise, null)

      expect(result.value).toBeNull()
      pending.resolve({ id: 1 })
      await flushEvaluation()

      expect(result.value).toEqual({ id: 1 })
    })

    it.each([
      { label: 'zero', value: 0 },
      { label: 'false', value: false },
      { label: 'empty string', value: '' },
      { label: 'null', value: null },
      { label: 'undefined', value: undefined }
    ])('preserves $label as the initial value', async ({ value }) => {
      const result = computedEternity<string | number | boolean | null | undefined>(() => 'resolved', value)

      expect(result.value).toBe(value)
      await flushEvaluation()
      expect(result.value).toBe('resolved')
    })

    it('calls the initial-state factory immediately and only once', async () => {
      const initialState = vi.fn(() => 'initial')
      const getter = vi.fn(() => 'resolved')
      const result = computedEternity(getter, initialState)

      expect(initialState).toHaveBeenCalledTimes(1)
      expect(getter).not.toHaveBeenCalled()
      expect(result.value).toBe('initial')
      await flushEvaluation()

      expect(result.value).toBe('resolved')
      expect(initialState).toHaveBeenCalledTimes(1)
      expect(getter).toHaveBeenCalledTimes(1)
    })

    it('propagates an initial-state factory failure without starting the getter', () => {
      const failure = new Error('Initial state failed')
      const getter = vi.fn(() => 'resolved')
      const initialState = (): string => {
        throw failure
      }

      expect(() => computedEternity(getter, initialState)).toThrow(failure)
      expect(getter).not.toHaveBeenCalled()
    })
  })

  describe('Reactive updates and readonly access', () => {
    it('recomputes from dependencies and retains the committed value until the update resolves', async () => {
      const count = ref(0)
      const getter = vi.fn(() => count.value * 2)
      const result = computedEternity(getter)

      expect(result.value).toBeUndefined()
      await flushEvaluation()
      expect(result.value).toBe(0)
      count.value = 5
      expect(result.value).toBe(0)
      await flushEvaluation()

      expect(result.value).toBe(10)
      expect(getter).toHaveBeenCalledTimes(2)
    })

    it('does not trigger watchers when the resolved value is identical via Object.is', async () => {
      const source = ref(1)
      const changed = vi.fn()
      const result = computedEternity(() => source.value > 0 ? NaN : 0, NaN)

      scope.run(() => watch(result, changed))
      await flushEvaluation()
      expect(changed).not.toHaveBeenCalled()

      source.value = 2
      await flushEvaluation()
      expect(changed).not.toHaveBeenCalled()
    })

    it('reports to ErrorCenter on assignment without changing the result or eagerly starting the getter', async () => {
      const errorHandler = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const getter = vi.fn(() => 'resolved')
      const result = computedEternity(getter, 'initial')

      result.value = 'assigned'

      expect(errorHandler).toHaveBeenCalledExactlyOnceWith({
        group: FUNCTIONAL_ERROR_GROUP,
        code: 'computed-eternity',
        message: 'computedEternity: value is read-only.',
        details: 'assigned'
      })
      expect(getter).not.toHaveBeenCalled()
      expect(result.value).toBe('initial')
      await flushEvaluation()
      expect(result.value).toBe('resolved')
    })

    it('retains the identity of an object returned by the getter', async () => {
      const state = { count: ref(0) }
      const result = computedEternity(() => state)

      expect(result.value).toBeUndefined()
      await flushEvaluation()
      expect(result.value).toBe(state)
      state.count.value = 3
      expect(result.value?.count.value).toBe(3)
    })
  })

  describe('Error handling and recovery', () => {
    it.each(['throw', 'reject'])('resets to initialValue on current %s, reports to ErrorCenter, and recovers', async (failureType) => {
      const errorHandler = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const source = ref('loaded')
      const failure = new Error('Evaluation failed')
      const result = computedEternity(() => {
        if (source.value === 'failed') {
          if (failureType === 'reject') {
            return Promise.reject<string>(failure)
          }

          throw failure
        }

        return Promise.resolve(source.value)
      }, 'fallback')

      expect(result.value).toBe('fallback')
      await flushEvaluation()
      expect(result.value).toBe('loaded')

      source.value = 'failed'
      await flushEvaluation()

      expect(result.value).toBe('fallback')
      expect(errorHandler).toHaveBeenCalledExactlyOnceWith({
        group: FUNCTIONAL_ERROR_GROUP,
        code: 'computed-eternity',
        details: failure
      })

      source.value = 'recovered'
      await flushEvaluation()
      expect(result.value).toBe('recovered')
    })

    it('ignores a rejected obsolete evaluation without resetting the value or reporting to ErrorCenter', async () => {
      const errorHandler = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const previous = createDeferred<string>()
      const source = ref(false)
      const result = computedEternity(() => source.value ? 'current' : previous.promise, 'initial')

      expect(result.value).toBe('initial')
      source.value = true
      await flushEvaluation()
      expect(result.value).toBe('current')

      previous.reject(new Error('Obsolete error'))
      await flushEvaluation()

      expect(result.value).toBe('current')
      expect(errorHandler).not.toHaveBeenCalled()
    })
  })

  describe('Concurrent evaluations', () => {
    it('keeps the latest result when an older promise completes afterwards', async () => {
      const previous = createDeferred<string>()
      const current = createDeferred<string>()
      const source = ref(false)
      const result = computedEternity(() => source.value ? current.promise : previous.promise, 'initial')

      expect(result.value).toBe('initial')
      source.value = true
      await nextTick()

      current.resolve('current')
      await flushEvaluation()
      expect(result.value).toBe('current')

      previous.resolve('previous')
      await flushEvaluation()
      expect(result.value).toBe('current')
    })

    it('does not publish an obsolete result while the current promise is still pending', async () => {
      const previous = createDeferred<string>()
      const current = createDeferred<string>()
      const source = ref(false)
      const changed = vi.fn()
      const result = computedEternity(() => source.value ? current.promise : previous.promise, 'initial')

      scope.run(() => watch(result, changed))
      source.value = true
      await nextTick()

      previous.resolve('previous')
      await flushEvaluation()
      expect(result.value).toBe('initial')
      expect(changed).not.toHaveBeenCalled()

      current.resolve('current')
      await flushEvaluation()
      expect(result.value).toBe('current')
      expect(changed).toHaveBeenCalledTimes(1)
    })

    it.each([
      { label: 'zero', value: 0 },
      { label: 'false', value: false },
      { label: 'empty string', value: '' },
      { label: 'undefined', value: undefined },
      { label: 'null', value: null },
      { label: 'NaN', value: NaN }
    ])('accepts the latest $label result and ignores an older result', async ({ value }) => {
      const previous = createDeferred<string | number | boolean | null | undefined>()
      const current = createDeferred<string | number | boolean | null | undefined>()
      const source = ref(false)
      const result = computedEternity(() => source.value ? current.promise : previous.promise, 'initial')

      expect(result.value).toBe('initial')
      source.value = true
      await nextTick()

      current.resolve(value)
      await flushEvaluation()
      expect(result.value).toBe(value)

      previous.resolve('previous')
      await flushEvaluation()
      expect(result.value).toBe(value)
    })

    it('keeps a previously committed value while ignoring an obsolete pending update', async () => {
      const previous = createDeferred<string>()
      const current = createDeferred<string>()
      const generation = ref(0)
      const result = computedEternity(() => {
        if (generation.value === 0) {
          return 'committed'
        }

        return generation.value === 1 ? previous.promise : current.promise
      })

      expect(result.value).toBeUndefined()
      await flushEvaluation()
      expect(result.value).toBe('committed')
      generation.value = 1
      await nextTick()
      generation.value = 2
      await nextTick()
      previous.resolve('obsolete')
      await flushEvaluation()
      expect(result.value).toBe('committed')
      current.resolve('current')
      await flushEvaluation()
      expect(result.value).toBe('current')
    })
  })

  describe('Effect scope ownership and SSR guard', () => {
    it('keeps its watcher active after the calling scope stops', async () => {
      const source = ref(1)
      const owner = effectScope()
      const result = owner.run(() => computedEternity(() => source.value))

      try {
        expect(result?.value).toBeUndefined()
        await flushEvaluation()
        expect(result?.value).toBe(1)

        owner.stop()
        source.value = 2
        await flushEvaluation()
        expect(result?.value).toBe(2)
      } finally {
        owner.stop()
      }
    })

    it('does not publish a pending result after its global watcher scope stops', async () => {
      const pending = createDeferred<string>()
      const result = computedEternity(() => pending.promise, 'initial')

      expect(result.value).toBe('initial')
      scope.stop()
      pending.resolve('late')
      await flushEvaluation()

      expect(result.value).toBe('initial')
    })

    it('skips evaluation and returns the initial state when isDomRuntime is false', async () => {
      vi.spyOn(functionalBasic, 'isDomRuntime').mockReturnValue(false)
      const getter = vi.fn(() => 'client')
      const initialState = vi.fn(() => 'server')
      const result = computedEternity(getter, initialState)

      expect(result.value).toBe('server')
      await flushEvaluation()

      expect(result.value).toBe('server')
      expect(getter).not.toHaveBeenCalled()
      expect(initialState).toHaveBeenCalledTimes(1)
    })
  })
})
