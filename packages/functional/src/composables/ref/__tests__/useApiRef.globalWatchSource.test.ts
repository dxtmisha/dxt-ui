/** @vitest-environment jsdom */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp, effectScope, type EffectScope, h, nextTick, ref, type VNode } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { Api, type ApiFetch, type ApiInstance, ServerStorage } from '@dxtmisha/functional-basic'
import { setApiRefGlobalConditions, setApiRefGlobalWatchSource, useApiRef } from '../useApiRef'
import { useApiAsyncRef } from '../useApiAsyncRef'

const source = /*#__PURE__*/ ref<unknown>()
setApiRefGlobalConditions(source)

const request = /*#__PURE__*/ vi.fn<(options: ApiFetch) => Promise<unknown>>()
const emulatorAsync = /*#__PURE__*/ vi.fn<(options: ApiFetch) => unknown>()
const apiInstance = {
  request,
  getResponse: () => ({ emulatorAsync })
} as unknown as ApiInstance
let scope: EffectScope

beforeEach(() => {
  source.value = undefined
  request.mockReset().mockResolvedValue({ id: 1 })
  emulatorAsync.mockReset()
  vi.spyOn(Api, 'getItem').mockReturnValue(apiInstance)
  ServerStorage.reset()
  const context: Record<string, unknown> = {}
  ServerStorage.init(() => context)
  scope = effectScope()
})

afterEach(() => {
  scope.stop()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
  ServerStorage.reset()
})

describe.each([
  ['useApiRef', useApiRef],
  ['useApiAsyncRef', useApiAsyncRef]
] as const)('%s global watch source', (_, createApi) => {
  it.each([false, true, undefined, null, 0, ''])('should fetch regardless of the watch source value %s', async (value) => {
    source.value = value
    const api = scope.run(() => {
      const api = createApi<{ id: number }>('test/watch')
      api.init()
      return api
    })!
    await nextTick()

    expect(request).toHaveBeenCalledTimes(1)
    expect(api.getItem()).toEqual({ id: 1 })
    expect(api.loading.value).toBe(false)
  })

  it('should keep respecting local conditions when the watch source changes', async () => {
    const conditions = ref(false)
    scope.run(() => createApi('test/watch', undefined, true, conditions).init())
    source.value = 'changed'
    await nextTick()
    expect(request).not.toHaveBeenCalled()
    expect(emulatorAsync).not.toHaveBeenCalled()

    conditions.value = true
    await nextTick()
    expect(request).toHaveBeenCalledTimes(1)
  })

  it('should wait for a path when the watch source changes', async () => {
    const path = ref<string>()
    scope.run(() => createApi(path).init())
    source.value = 'changed'
    await nextTick()
    expect(request).not.toHaveBeenCalled()

    path.value = 'test/watch'
    await nextTick()
    expect(request).toHaveBeenCalledTimes(1)
  })

  it('should recover cached data when the watch source is false', () => {
    source.value = false
    emulatorAsync.mockReturnValue({ id: 2 })
    const api = scope.run(() => {
      const api = createApi<{ id: number }>('test/cached')
      api.init()
      return api
    })!

    expect(emulatorAsync).toHaveBeenCalledTimes(1)
    expect(api.getItem()).toEqual({ id: 2 })
    expect(request).not.toHaveBeenCalled()
  })

  it.each([false, true])('should reload on each source change with reactivity %s', async (reactivity) => {
    const api = scope.run(() => {
      const api = createApi<{ id: number }>('test/watch', undefined, reactivity)
      api.init()
      return api
    })!
    await nextTick()
    expect(request).toHaveBeenCalledTimes(1)

    let count = 1
    for (const value of [false, true, 0, '', null, undefined, 'en']) {
      source.value = value
      await nextTick()
      await nextTick()
      expect(request).toHaveBeenCalledTimes(++count)
      expect(api.getItem()).toEqual({ id: 1 })
    }
  })

  it.each(['resolve', 'reject'] as const)('should replace a pending request on source changes and ignore its late %s', async (outcome) => {
    let resolvePrevious!: (data: { id: number }) => void
    let rejectPrevious!: (error: Error) => void
    const previous = new Promise<{ id: number }>((resolve, reject) => {
      resolvePrevious = resolve
      rejectPrevious = reject
    })
    request.mockReturnValueOnce(previous).mockResolvedValueOnce({ id: 2 })
    const validation = vi.fn(() => ({ status: 'success' as const }))
    const transformation = vi.fn((data: { id: number }) => data)
    const api = scope.run(() => {
      const api = createApi<{ id: number }>(
        'test/watch', undefined, true, undefined, transformation, validation
      )
      api.init()
      return api
    })!
    const initialRequest = request.mock.calls[0]![0]

    source.value = false
    await nextTick()
    await nextTick()
    expect(initialRequest.controller?.signal.aborted).toBe(true)
    expect(request).toHaveBeenCalledTimes(2)
    expect(api.getItem()).toEqual({ id: 2 })

    if (outcome === 'resolve') {
      resolvePrevious({ id: 1 })
    } else {
      rejectPrevious(new Error('Previous request failed'))
    }
    await nextTick()

    expect(request).toHaveBeenCalledTimes(2)
    expect(api.getItem()).toEqual({ id: 2 })
    expect(api.loading.value).toBe(false)
    expect(validation).toHaveBeenCalledExactlyOnceWith({ id: 2 })
    expect(transformation).toHaveBeenCalledExactlyOnceWith({ id: 2 }, { status: 'success' })
  })
})

it.each([false, true])('should prefetch on the server regardless of watch source value %s', async (value) => {
  source.value = value
  vi.stubGlobal('window', undefined)
  const app = createSSRApp({
    setup(): () => VNode {
      const api = useApiAsyncRef<{ id: number }>('test/ssr')
      return () => h('span', String(api.getItem()?.id ?? 'empty'))
    }
  })

  expect(await renderToString(app)).toContain('1')
  expect(request).toHaveBeenCalledTimes(1)
  expect(emulatorAsync).not.toHaveBeenCalled()
})

it('should keep watching only the first registered source', async () => {
  const ignoredSource = ref(0)
  setApiRefGlobalWatchSource(ignoredSource)
  scope.run(() => useApiRef('test/watch').init())
  await nextTick()

  ignoredSource.value++
  await nextTick()
  expect(request).toHaveBeenCalledTimes(1)

  source.value = false
  await nextTick()
  expect(request).toHaveBeenCalledTimes(2)
})
