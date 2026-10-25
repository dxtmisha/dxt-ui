/** @vitest-environment jsdom */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { type ApiFetch, type ApiInstance } from '@dxtmisha/functional-basic'
import { useApiRequest } from '../useApiRequest'
import { useApiGet } from '../useApiGet'
import { useApiPost } from '../useApiPost'
import { useApiPut } from '../useApiPut'
import { useApiDelete } from '../useApiDelete'

/** Controllable async operation / Управляемая асинхронная операция */
interface Deferred<T> {
  /** Pending result / Ожидаемый результат */
  promise: Promise<T>
  /** Resolves the operation / Завершает операцию успешно */
  resolve: (value: T) => void
  /** Rejects the operation / Завершает операцию с ошибкой */
  reject: (error: unknown) => void
}

/**
 * Creates an operation whose completion is controlled by the test.
 *
 * Создаёт операцию, завершением которой управляет тест.
 * @returns controllable operation / управляемая операция
 */
function deferred<T>(): Deferred<T> {
  let resolve!: Deferred<T>['resolve']
  let reject!: Deferred<T>['reject']
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise
    reject = rejectPromise
  })
  return { promise, resolve, reject }
}

const request = /*#__PURE__*/ vi.fn<(options: ApiFetch) => Promise<unknown>>()
const apiInstance = { request } as unknown as ApiInstance

beforeEach(() => {
  request.mockReset()
})

describe('useApiRequest concurrent loading', () => {
  it.each([0, 1])('should remain loading when request %s finishes first', async (firstIndex) => {
    const pending = [deferred<unknown>(), deferred<unknown>()]
    request.mockReturnValueOnce(pending[0]!.promise).mockReturnValueOnce(pending[1]!.promise)
    const api = useApiRequest({ path: 'test/concurrent', apiInstance })
    const sends = [api.send(), api.send()]
    const lastIndex = 1 - firstIndex

    expect(request).toHaveBeenCalledTimes(2)
    expect(api.loading.value).toBe(true)
    pending[firstIndex]!.resolve({ success: true, id: firstIndex })
    expect(await sends[firstIndex]).toEqual({ success: true, id: firstIndex })
    expect(api.loading.value).toBe(true)

    pending[lastIndex]!.resolve({ success: true, id: lastIndex })
    expect(await sends[lastIndex]).toEqual({ success: true, id: lastIndex })
    expect(api.loading.value).toBe(false)
  })

  it('should track three overlapping calls until the last one completes', async () => {
    const pending = [deferred<unknown>(), deferred<unknown>(), deferred<unknown>()]
    pending.forEach(operation => request.mockReturnValueOnce(operation.promise))
    const api = useApiRequest({ path: 'test/concurrent', apiInstance })
    const sends = pending.map(() => api.send())

    for (const index of [1, 0]) {
      pending[index]!.resolve({ success: true })
      await sends[index]
      expect(api.loading.value).toBe(true)
    }
    pending[2]!.resolve({ success: true })
    await sends[2]
    expect(api.loading.value).toBe(false)
  })

  it.each(['transport error', 'error response', 'empty response'] as const)(
    'should preserve another request loading after a %s', async (outcome) => {
      const first = deferred<unknown>()
      const last = deferred<unknown>()
      request.mockReturnValueOnce(first.promise).mockReturnValueOnce(last.promise)
      const api = useApiRequest({ path: 'test/concurrent', apiInstance })
      const firstSend = api.send()
      const lastSend = api.send()

      if (outcome === 'transport error') {
        first.reject(new Error('Network error'))
      } else {
        first.resolve(outcome === 'error response' ? { success: false } : undefined)
      }
      expect(await firstSend).toEqual(outcome === 'error response' ? { success: false } : undefined)
      expect(api.loading.value).toBe(true)

      last.resolve({ success: true })
      await lastSend
      expect(api.loading.value).toBe(false)
    }
  )

  it.each(['action', 'actionSuccess', 'actionError'] as const)(
    'should include the pending %s callback in concurrent loading', async (name) => {
      const first = deferred<unknown>()
      const last = deferred<unknown>()
      const callbackStarted = deferred<void>()
      const callbackCompleted = deferred<void>()
      request.mockReturnValueOnce(first.promise).mockReturnValueOnce(last.promise)
      const callback = vi.fn<() => Promise<void> | void>().mockImplementationOnce(() => {
        callbackStarted.resolve()
        return callbackCompleted.promise
      })
      const api = useApiRequest({ path: 'test/concurrent', apiInstance, [name]: callback })
      const firstSend = api.send()
      const lastSend = api.send()
      first.resolve({ success: name !== 'actionError' })
      await callbackStarted.promise

      last.resolve({ success: true })
      await lastSend
      expect(api.loading.value).toBe(true)

      callbackCompleted.resolve()
      await firstSend
      expect(api.loading.value).toBe(false)
    }
  )

  it.each(['throw', 'reject'] as const)('should release only its own loading when a callback fails via %s', async (outcome) => {
    const last = deferred<unknown>()
    request.mockResolvedValueOnce({ success: true }).mockReturnValueOnce(last.promise)
    const action = vi.fn<() => Promise<void> | void>().mockImplementationOnce(() => {
      if (outcome === 'throw') {
        throw new Error('Callback failed')
      }
      return Promise.reject(new Error('Callback failed'))
    })
    const api = useApiRequest({ path: 'test/concurrent', apiInstance, action })
    const firstSend = api.send()
    const lastSend = api.send()

    expect(await firstSend).toBeUndefined()
    expect(api.loading.value).toBe(true)
    last.resolve({ success: true })
    await lastSend
    expect(api.loading.value).toBe(false)
  })

  it.each(['invalid', 'throw'] as const)('should preserve active loading when another request validation is %s', async (outcome) => {
    const active = deferred<unknown>()
    request.mockReturnValueOnce(active.promise)
    const api = useApiRequest<{ success: boolean }, { valid: boolean }>({
      path: 'test/concurrent',
      apiInstance,
      validateRequestContract: (data) => {
        if (data.valid) {
          return { status: 'success', success: true }
        }
        if (outcome === 'throw') {
          throw new Error('Validation failed')
        }
        return { status: 'error', success: false }
      }
    })
    const activeSend = api.send({ valid: true })

    expect(await api.send({ valid: false })).toEqual(outcome === 'throw'
      ? undefined
      : { status: 'error', success: false })
    expect(request).toHaveBeenCalledTimes(1)
    expect(api.loading.value).toBe(true)

    active.resolve({ success: true })
    await activeSend
    expect(api.loading.value).toBe(false)

    request.mockResolvedValueOnce({ success: true })
    await api.send({ valid: true })
    expect(api.loading.value).toBe(false)
  })

  it('should release loading after an early validation return and its asynchronous error callback', async () => {
    const callbackStarted = deferred<void>()
    const callbackCompleted = deferred<void>()
    const api = useApiRequest({
      path: 'test/validation',
      apiInstance,
      validateRequestContract: () => ({ status: 'error' as const }),
      actionError: () => {
        callbackStarted.resolve()
        return callbackCompleted.promise
      }
    })
    const sending = api.send({ valid: false })
    await callbackStarted.promise

    expect(request).not.toHaveBeenCalled()
    expect(api.loading.value).toBe(true)
    callbackCompleted.resolve()
    expect(await sending).toEqual({ status: 'error' })
    expect(api.loading.value).toBe(false)
  })

  it('should keep loading counters independent for separate composable instances', async () => {
    const first = deferred<unknown>()
    const second = deferred<unknown>()
    request.mockReturnValueOnce(first.promise).mockReturnValueOnce(second.promise)
    const firstApi = useApiRequest({ path: 'test/first', apiInstance })
    const secondApi = useApiRequest({ path: 'test/second', apiInstance })
    const firstSend = firstApi.send()
    const secondSend = secondApi.send()

    first.resolve({ success: true })
    await firstSend
    expect(firstApi.loading.value).toBe(false)
    expect(secondApi.loading.value).toBe(true)
    second.resolve({ success: true })
    await secondSend
    expect(secondApi.loading.value).toBe(false)
  })

  it.each([
    ['GET', useApiGet], ['POST', useApiPost], ['PUT', useApiPut], ['DELETE', useApiDelete]
  ] as const)('should preserve concurrent loading through the %s wrapper', async (_, createRequest) => {
    const first = deferred<unknown>()
    const second = deferred<unknown>()
    request.mockReturnValueOnce(first.promise).mockReturnValueOnce(second.promise)
    const api = createRequest({ path: 'test/wrapper', apiInstance })
    const firstSend = api.send()
    const secondSend = api.send()

    first.resolve({ success: true })
    await firstSend
    expect(api.loading.value).toBe(true)
    second.resolve({ success: true })
    await secondSend
    expect(api.loading.value).toBe(false)
  })
})
