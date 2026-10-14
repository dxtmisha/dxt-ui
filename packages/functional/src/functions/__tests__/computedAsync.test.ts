/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  type ComputedRef,
  createApp,
  defineComponent,
  type EffectScope,
  effectScope,
  isReadonly,
  isRef,
  nextTick,
  ref,
  watchEffect
} from 'vue'
import * as functionalBasic from '@dxtmisha/functional-basic'

import { computedAsync } from '../computedAsync'
import { FUNCTIONAL_ERROR_GROUP } from '../../types/errorTypes'

/** Controllable asynchronous result / Управляемый асинхронный результат */
interface Deferred<T> {
  /** Result promise / Промис результата */
  readonly promise: Promise<T>
  /** Resolves the result / Завершает результат успешно */
  readonly resolve: (value: T) => void
  /** Rejects the result / Завершает результат с ошибкой */
  readonly reject: (reason: unknown) => void
}

/**
 * Creates a promise whose completion is controlled by the test.
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

describe('computedAsync', () => {
  let scope: EffectScope

  beforeEach(() => {
    scope = effectScope()
  })

  afterEach(() => {
    scope.stop()
    vi.restoreAllMocks()
  })

  it.each([
    { getter: async (): Promise<string> => 'async value', expected: 'async value' },
    { getter: (): string => 'sync value', expected: 'sync value' },
    { getter: 'raw value', expected: 'raw value' }
  ])('resolves $expected and returns a read-only computed ref', async ({ getter, expected }) => {
    await scope.run(async () => {
      const result = computedAsync(getter)

      expect(isRef(result)).toBe(true)
      expect(isReadonly(result)).toBe(true)
      expect(result.value).toBeUndefined()

      await nextTick()
      await nextTick()

      expect(result.value).toBe(expected)
    })
  })

  it('does not evaluate the getter until first access or repeat it on unchanged reads', async () => {
    await scope.run(async () => {
      const getter = vi.fn(() => 'value')
      const result = computedAsync(getter)

      expect(getter).not.toHaveBeenCalled()
      expect(result.value).toBeUndefined()
      expect(getter).toHaveBeenCalledTimes(1)

      await nextTick()
      await nextTick()

      expect(result.value).toBe('value')
      expect(result.value).toBe('value')
      expect(getter).toHaveBeenCalledTimes(1)
    })
  })

  it('evaluates the initial state factory once and preserves it while loading', async () => {
    await scope.run(async () => {
      const pending = createDeferred<string>()
      const initialState = vi.fn(() => 'loading')
      const result = computedAsync(() => pending.promise, initialState)

      expect(initialState).toHaveBeenCalledTimes(1)
      expect(result.value).toBe('loading')

      pending.resolve('resolved')
      await nextTick()
      await nextTick()

      expect(result.value).toBe('resolved')
      expect(initialState).toHaveBeenCalledTimes(1)
    })
  })

  it('recomputes from reactive dependencies and notifies watchers', async () => {
    await scope.run(async () => {
      const source = ref(1)
      const values: (number | undefined)[] = []
      const result = computedAsync(async () => source.value + 10)

      watchEffect(() => {
        values.push(result.value)
      })

      await nextTick()
      await nextTick()
      await nextTick()

      expect(result.value).toBe(11)

      source.value = 2
      await nextTick()
      await nextTick()
      await nextTick()

      expect(result.value).toBe(12)
      expect(values).toEqual([undefined, 11, 12])
    })
  })

  it('ignores an explicitly supplied value and accepts subsequent results', async () => {
    await scope.run(async () => {
      const source = ref(1)
      const result = computedAsync(() => source.value, undefined, 2)

      expect(result.value).toBeUndefined()
      await nextTick()
      await nextTick()
      expect(result.value).toBe(1)

      source.value = 2
      await nextTick()
      await nextTick()
      expect(result.value).toBe(1)

      source.value = 3
      await nextTick()
      await nextTick()
      expect(result.value).toBe(3)
    })
  })

  it('clears previous data when the getter returns undefined without an ignore argument', async () => {
    await scope.run(async () => {
      const source = ref<string | undefined>('loaded')
      const result = computedAsync(() => source.value)

      expect(result.value).toBeUndefined()
      await nextTick()
      await nextTick()
      expect(result.value).toBe('loaded')

      source.value = undefined
      await nextTick()
      await nextTick()
      expect(result.value).toBeUndefined()

      source.value = 'recovered'
      await nextTick()
      await nextTick()
      expect(result.value).toBe('recovered')
    })
  })

  it('preserves previous data when undefined is explicitly ignored', async () => {
    await scope.run(async () => {
      const source = ref<string | undefined>('loaded')
      const result = computedAsync(() => source.value, undefined, undefined)

      expect(result.value).toBeUndefined()
      await nextTick()
      await nextTick()
      expect(result.value).toBe('loaded')

      source.value = undefined
      await nextTick()
      await nextTick()
      expect(result.value).toBe('loaded')
    })
  })

  it.each([0, false, '', null])('accepts the falsy result %s', async (value) => {
    await scope.run(async () => {
      const result = computedAsync<string | number | boolean | null>(value)

      expect(result.value).toBeUndefined()
      await nextTick()
      await nextTick()

      expect(result.value).toBe(value)
    })
  })

  it('keeps the latest result when an older evaluation finishes afterwards', async () => {
    await scope.run(async () => {
      const previous = createDeferred<string>()
      const current = createDeferred<string>()
      const source = ref(false)
      const result = computedAsync(() => source.value ? current.promise : previous.promise)

      expect(result.value).toBeUndefined()
      source.value = true
      await nextTick()

      current.resolve('current')
      await nextTick()
      await nextTick()
      expect(result.value).toBe('current')

      previous.resolve('previous')
      await nextTick()
      await nextTick()
      expect(result.value).toBe('current')
    })
  })

  it('does not publish an older result while the latest evaluation is pending', async () => {
    await scope.run(async () => {
      const previous = createDeferred<string>()
      const current = createDeferred<string>()
      const source = ref(false)
      const result = computedAsync(() => source.value ? current.promise : previous.promise, 'loading')

      expect(result.value).toBe('loading')
      source.value = true
      await nextTick()

      previous.resolve('previous')
      await nextTick()
      await nextTick()
      expect(result.value).toBe('loading')

      current.resolve('current')
      await nextTick()
      await nextTick()
      expect(result.value).toBe('current')
    })
  })

  it('invalidates an older evaluation even when the latest result is ignored', async () => {
    await scope.run(async () => {
      const previous = createDeferred<string>()
      const source = ref(false)
      const result = computedAsync(() => source.value ? 'ignored' : previous.promise, 'initial', 'ignored')

      expect(result.value).toBe('initial')
      source.value = true
      await nextTick()
      await nextTick()

      previous.resolve('previous')
      await nextTick()
      await nextTick()
      expect(result.value).toBe('initial')
    })
  })

  it('discards a rejected evaluation after it becomes outdated', async () => {
    const errorHandler = vi.spyOn(functionalBasic.ErrorCenter, 'on').mockImplementation(() => undefined)

    await scope.run(async () => {
      const previous = createDeferred<string>()
      const source = ref(false)
      const result = computedAsync(() => source.value ? 'current' : previous.promise)

      expect(result.value).toBeUndefined()
      source.value = true
      await nextTick()
      await nextTick()
      expect(result.value).toBe('current')

      previous.reject(new Error('Outdated evaluation'))
      await nextTick()
      await nextTick()
      expect(result.value).toBe('current')
      expect(errorHandler).not.toHaveBeenCalled()
    })
  })

  it('does not publish pending data after the owning scope stops', async () => {
    await scope.run(async () => {
      const pending = createDeferred<string>()
      const result = computedAsync(() => pending.promise, 'initial')

      expect(result.value).toBe('initial')
      scope.stop()
      pending.resolve('late')
      await nextTick()
      await nextTick()

      expect(result.value).toBe('initial')
    })
  })

  it('binds a watcher first accessed outside setup to the scope where it was created', async () => {
    const source = ref(1)
    const getter = vi.fn(() => source.value)
    const result = scope.run(() => computedAsync(getter))

    if (!result) {
      throw new Error('The effect scope must be active')
    }

    expect(result.value).toBeUndefined()
    await nextTick()
    await nextTick()
    expect(result.value).toBe(1)

    scope.stop()
    source.value = 2
    await nextTick()
    await nextTick()

    expect(getter).toHaveBeenCalledTimes(1)
    expect(result.value).toBe(1)
  })

  it('does not start a lazy watcher after the owning scope has already stopped', async () => {
    const getter = vi.fn(() => 'loaded')
    const result = scope.run(() => computedAsync(getter, 'initial'))

    if (!result) {
      throw new Error('The effect scope must be active')
    }

    scope.stop()
    expect(result.value).toBe('initial')
    await nextTick()
    await nextTick()

    expect(getter).not.toHaveBeenCalled()
  })

  it('returns the initial state without evaluating a browser getter during SSR', async () => {
    vi.spyOn(functionalBasic, 'isDomRuntime').mockReturnValue(false)

    await scope.run(async () => {
      const getter = vi.fn(() => 'client result')
      const initialState = vi.fn(() => 'server result')
      const result = computedAsync(getter, initialState)

      expect(result.value).toBe('server result')
      await nextTick()
      await nextTick()

      expect(getter).not.toHaveBeenCalled()
      expect(initialState).toHaveBeenCalledTimes(1)
    })
  })

  it.each(['throw', 'reject'])('clears a current %s, reports it to ErrorCenter and allows recovery', async (failureType) => {
    const errorHandler = vi.spyOn(functionalBasic.ErrorCenter, 'on').mockImplementation(() => undefined)

    await scope.run(async () => {
      const source = ref('loaded')
      const failure = new Error('Current evaluation failed')
      const result = computedAsync(() => {
        if (source.value === 'failed') {
          if (failureType === 'reject') {
            return Promise.reject<string>(failure)
          }

          throw failure
        }

        return Promise.resolve(source.value)
      })

      expect(result.value).toBeUndefined()
      await nextTick()
      await nextTick()
      expect(result.value).toBe('loaded')

      source.value = 'failed'
      await nextTick()
      await nextTick()

      expect(result.value).toBeUndefined()
      expect(errorHandler).toHaveBeenCalledExactlyOnceWith({
        group: FUNCTIONAL_ERROR_GROUP,
        code: 'computed-async',
        details: failure
      })

      source.value = 'recovered'
      await nextTick()
      await nextTick()
      expect(result.value).toBe('recovered')
    })
  })

  it('does not publish pending data after a component unmounts', async () => {
    const pending = createDeferred<string>()
    let result: ComputedRef<string | undefined> | undefined
    const application = createApp(defineComponent({
      setup() {
        const data = computedAsync(() => pending.promise, 'initial')
        result = data
        return () => data.value
      }
    }))

    application.mount(document.createElement('div'))
    let mounted = true

    try {
      expect(result?.value).toBe('initial')
      application.unmount()
      mounted = false
      pending.resolve('late')
      await nextTick()
      await nextTick()
      expect(result?.value).toBe('initial')
    } finally {
      if (mounted) {
        application.unmount()
      }
    }
  })
})
