/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createApp, effectScope, h, nextTick, ref } from 'vue'
import { useApiRef, type UseApiRef } from '../useApiRef'
import { useApiAsyncRef } from '../useApiAsyncRef'
import { Api, ApiMethodItem, type ApiDataValidation, type ApiFetch, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiRef', () => {
  let mockApiInstance: ApiInstance
  let mockGetResponse: any

  beforeEach(() => {
    vi.clearAllMocks()
    mockGetResponse = {
      emulatorAsync: vi.fn()
    }
    mockApiInstance = {
      request: vi.fn(),
      getResponse: vi.fn().mockReturnValue(mockGetResponse)
    } as unknown as ApiInstance

    // Mock the default Api.getItem()
    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
  })

  describe('recovery', () => {
    it.each([
      ['useApiRef', useApiRef],
      ['useApiAsyncRef', useApiAsyncRef]
    ] as const)('should synchronously validate and transform recovered data in %s', (_, createApi) => {
      const response = { name: '  Alice  ' }
      const validationResult = { status: 'success' as const }
      const validation = vi.fn(() => validationResult)
      const transformation = vi.fn((data: { name: string }, result?: ApiDataValidation) => ({
        name: data.name.trim(),
        valid: result?.status === 'success'
      }))
      mockGetResponse.emulatorAsync.mockReturnValue(response)
      const scope = effectScope()

      try {
        scope.run(() => {
          const apiRef = createApi<{ name: string, valid: boolean }, { name: string }>(
            'test/path', undefined, true, undefined, transformation, validation
          )

          expect(apiRef.data.value).toEqual({ name: 'Alice', valid: true })
          expect(apiRef.responseValidationResult.value).toEqual(validationResult)
          expect(apiRef.isResponseContractValid.value).toBe(true)
          expect(apiRef.starting.value).toBe(false)
          expect(apiRef.loading.value).toBe(false)
          expect(apiRef.data.value).toEqual({ name: 'Alice', valid: true })
          expect(validation).toHaveBeenCalledExactlyOnceWith(response)
          expect(transformation).toHaveBeenCalledExactlyOnceWith(response, validationResult)
          expect(mockApiInstance.request).not.toHaveBeenCalled()
        })
      } finally {
        scope.stop()
      }
    })

    it.each(['success', 'error'] as const)('should expose %s validation for recovered data without a transformation', (status) => {
      const response = { name: 'Alice' }
      const validationResult = { status }
      const validation = vi.fn(() => validationResult)
      mockGetResponse.emulatorAsync.mockReturnValue(response)
      const scope = effectScope()

      try {
        scope.run(() => {
          const apiRef = useApiRef<{ name: string }>(
            'test/path', undefined, true, undefined, undefined, validation
          )

          expect(apiRef.data.value).toEqual(response)
          expect(apiRef.responseValidationResult.value).toEqual(validationResult)
          expect(apiRef.isResponseContractValid.value).toBe(status === 'success')
          expect(validation).toHaveBeenCalledExactlyOnceWith(response)
          expect(mockApiInstance.request).not.toHaveBeenCalled()
        })
      } finally {
        scope.stop()
      }
    })

    it('should transform a recovered array without a validator', () => {
      const response = [{ name: 'Alice' }, { name: 'Bob' }]
      const transformation = vi.fn((data: { name: string }[]) => data.map(item => item.name))
      mockGetResponse.emulatorAsync.mockReturnValue(response)
      const scope = effectScope()

      try {
        scope.run(() => {
          const apiRef = useApiRef<string[], { name: string }[]>(
            'test/path', undefined, true, undefined, transformation
          )

          expect(apiRef.data.value).toEqual(['Alice', 'Bob'])
          expect(apiRef.responseValidationResult.value).toBeUndefined()
          expect(transformation).toHaveBeenCalledExactlyOnceWith(response, undefined)
          expect(mockApiInstance.request).not.toHaveBeenCalled()
        })
      } finally {
        scope.stop()
      }
    })

    it('should process recovered and fetched responses identically', async () => {
      const response = { name: '  Alice  ' }
      const validation = vi.fn(() => ({ status: 'success' as const }))
      const transformation = vi.fn((data: { name: string }) => ({ name: data.name.trim() }))
      mockGetResponse.emulatorAsync.mockReturnValueOnce(response)
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const recovered = useApiRef('test/cached', undefined, true, undefined, transformation, validation)
          expect(recovered.data.value).toEqual({ name: 'Alice' })
          expect(mockApiInstance.request).not.toHaveBeenCalled()

          const fetched = useApiRef('test/fetched', undefined, true, undefined, transformation, validation)
          fetched.init()
          await nextTick()

          expect(fetched.data.value).toEqual(recovered.data.value)
          expect(fetched.responseValidationResult.value).toEqual(recovered.responseValidationResult.value)
          expect(fetched.isResponseContractValid.value).toBe(recovered.isResponseContractValid.value)
          expect(validation).toHaveBeenCalledTimes(2)
          expect(transformation).toHaveBeenCalledTimes(2)
          expect(mockApiInstance.request).toHaveBeenCalledTimes(1)
        })
      } finally {
        scope.stop()
      }
    })

    it('should recover data from cache synchronously during init', async () => {
      const cachedData = { data: 'cached' }
      mockGetResponse.emulatorAsync.mockReturnValue(cachedData)

      const { item, data } = useApiRef('test/path')

      // recovery() is called inside init, and init is called inside getter of item/data
      // In this setup, recovery() is also called at the end of useApiRef execution
      expect(item.value).toEqual(cachedData)
      expect(data.value).toEqual(cachedData)
      expect(mockGetResponse.emulatorAsync).toHaveBeenCalled()
    })

    it('should NOT trigger reset if data was recovered from cache', async () => {
      const cachedData = { data: 'cached' }
      mockGetResponse.emulatorAsync.mockReturnValue(cachedData)

      const { data } = useApiRef('test/path')

      // Access data to trigger init
      const value = data.value
      expect(value).toEqual(cachedData)

      await nextTick()
      // Since item.value is now defined, init() should skip reset()
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })
  })

  describe('initialization', () => {
    it('should initialize with default states and NOT trigger request immediately', async () => {
      const { starting, loading, reading } = useApiRef('test/path', { method: ApiMethodItem.get })

      expect(starting.value).toBe(true)
      expect(loading.value).toBe(false)
      expect(reading.value).toBe(false)
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })

    it('should trigger a request on first data access (computed/lazy)', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ data: 'mocked-data' })

      const { data } = useApiRef('test/path')

      // Access data.value (computed) to trigger init()
      expect(data.value).toBeUndefined()

      await nextTick()

      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
    })

    it('should use custom apiInstance if provided', async () => {
      const customGetResponse = { emulatorAsync: vi.fn() }
      const customInstance = {
        request: vi.fn(),
        getResponse: vi.fn().mockReturnValue(customGetResponse)
      } as unknown as ApiInstance
      vi.mocked(customInstance.request).mockResolvedValueOnce({ data: 'custom' })

      const { data } = useApiRef(
        'test/path',
        {},
        true,
        undefined,
        undefined,
        undefined,
        undefined,
        true,
        customInstance
      )

      expect(data.value).toBeUndefined()
      await nextTick()

      expect(customInstance.request).toHaveBeenCalled()
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })
  })

  describe('reactivity', () => {
    it.each(['path', 'options'] as const)('should fetch changed %s while loading and ignore the previous response', async (source) => {
      let resolvePrevious!: (value: { id: number }) => void
      let resolveLatest!: (value: { id: number }) => void
      const previousResponse = new Promise<{ id: number }>((resolve) => {
        resolvePrevious = resolve
      })
      const latestResponse = new Promise<{ id: number }>((resolve) => {
        resolveLatest = resolve
      })
      vi.mocked(mockApiInstance.request)
        .mockReturnValueOnce(previousResponse)
        .mockReturnValueOnce(latestResponse)
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const path = ref('initial/path')
          const options = ref<ApiFetch>({ request: { page: 1 } })
          const transformation = vi.fn((value: { id: number }) => value)
          const validation = vi.fn(() => ({ status: 'success' as const }))
          const apiRef = useApiRef(path, options, true, undefined, transformation, validation)
          apiRef.init()
          const previousFetch = vi.mocked(mockApiInstance.request).mock.calls[0]?.[0] as ApiFetch

          if (source === 'path') {
            path.value = 'latest/path'
          } else {
            options.value = { request: { page: 2 } }
          }
          await nextTick()

          expect(mockApiInstance.request).toHaveBeenCalledTimes(2)
          expect(mockApiInstance.request).toHaveBeenLastCalledWith(expect.objectContaining(
            source === 'path' ? { path: 'latest/path' } : { request: { page: 2 } }
          ))
          expect(previousFetch.controller?.signal.aborted).toBe(true)
          expect(apiRef.loading.value).toBe(true)

          resolvePrevious({ id: 1 })
          await previousResponse
          await nextTick()

          expect(apiRef.getItem()).toBeUndefined()
          expect(apiRef.loading.value).toBe(true)
          expect(validation).not.toHaveBeenCalled()
          expect(transformation).not.toHaveBeenCalled()

          resolveLatest({ id: 2 })
          await latestResponse
          await nextTick()

          expect(apiRef.getItem()).toEqual({ id: 2 })
          expect(apiRef.loading.value).toBe(false)
          expect(validation).toHaveBeenCalledExactlyOnceWith({ id: 2 })
          expect(transformation).toHaveBeenCalledTimes(1)
        })
      } finally {
        scope.stop()
      }
    })

    it('should keep the latest request loading when the aborted request rejects', async () => {
      let rejectPrevious!: (reason: Error) => void
      let resolveLatest!: (value: { id: number }) => void
      const previousResponse = new Promise<{ id: number }>((_, reject) => {
        rejectPrevious = reject
      })
      const latestResponse = new Promise<{ id: number }>((resolve) => {
        resolveLatest = resolve
      })
      vi.mocked(mockApiInstance.request)
        .mockReturnValueOnce(previousResponse)
        .mockReturnValueOnce(latestResponse)
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const path = ref('initial/path')
          const apiRef = useApiRef(path)
          apiRef.init()
          path.value = 'latest/path'
          await nextTick()

          rejectPrevious(new DOMException('Request aborted', 'AbortError'))
          await nextTick()

          expect(apiRef.loading.value).toBe(true)
          resolveLatest({ id: 2 })
          await latestResponse
          await nextTick()

          expect(apiRef.getItem()).toEqual({ id: 2 })
          expect(apiRef.loading.value).toBe(false)
        })
      } finally {
        scope.stop()
      }
    })

    it('should preserve the latest data when the previous request fails afterwards', async () => {
      let rejectPrevious!: (reason: Error) => void
      const previousResponse = new Promise<{ id: number }>((_, reject) => {
        rejectPrevious = reject
      })
      vi.mocked(mockApiInstance.request)
        .mockReturnValueOnce(previousResponse)
        .mockResolvedValueOnce({ id: 2 })
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const path = ref('initial/path')
          const apiRef = useApiRef(path)
          apiRef.init()
          path.value = 'latest/path'
          await nextTick()
          await nextTick()

          expect(apiRef.getItem()).toEqual({ id: 2 })
          rejectPrevious(new Error('Previous request failed'))
          await nextTick()

          expect(apiRef.getItem()).toEqual({ id: 2 })
          expect(apiRef.loading.value).toBe(false)
        })
      } finally {
        scope.stop()
      }
    })

    it.each(['path', 'conditions'] as const)('should cancel loading when %s disables the request and resume when enabled', async (source) => {
      let resolvePrevious!: (value: { id: number }) => void
      const previousResponse = new Promise<{ id: number }>((resolve) => {
        resolvePrevious = resolve
      })
      vi.mocked(mockApiInstance.request)
        .mockReturnValueOnce(previousResponse)
        .mockResolvedValueOnce({ id: 2 })
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const path = ref<string | undefined>('initial/path')
          const conditions = ref(true)
          const apiRef = useApiRef(path, undefined, true, conditions)
          apiRef.init()
          const previousFetch = vi.mocked(mockApiInstance.request).mock.calls[0]?.[0] as ApiFetch

          if (source === 'path') {
            path.value = undefined
          } else {
            conditions.value = false
          }
          await nextTick()

          expect(previousFetch.controller?.signal.aborted).toBe(true)
          expect(apiRef.loading.value).toBe(false)
          expect(mockApiInstance.request).toHaveBeenCalledTimes(1)

          resolvePrevious({ id: 1 })
          await previousResponse
          await nextTick()
          expect(apiRef.getItem()).toBeUndefined()

          if (source === 'path') {
            path.value = 'latest/path'
          } else {
            conditions.value = true
          }
          await nextTick()
          await nextTick()

          expect(mockApiInstance.request).toHaveBeenCalledTimes(2)
          expect(apiRef.getItem()).toEqual({ id: 2 })
          expect(apiRef.loading.value).toBe(false)
        })
      } finally {
        scope.stop()
      }
    })

    it('should keep only the response for the latest of several path changes', async () => {
      let resolveFirst!: (value: { id: number }) => void
      let resolveSecond!: (value: { id: number }) => void
      const firstResponse = new Promise<{ id: number }>((resolve) => {
        resolveFirst = resolve
      })
      const secondResponse = new Promise<{ id: number }>((resolve) => {
        resolveSecond = resolve
      })
      vi.mocked(mockApiInstance.request)
        .mockReturnValueOnce(firstResponse)
        .mockReturnValueOnce(secondResponse)
        .mockResolvedValueOnce({ id: 3 })
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const path = ref('first/path')
          const apiRef = useApiRef(path)
          apiRef.init()
          path.value = 'second/path'
          await nextTick()
          path.value = 'latest/path'
          await nextTick()
          await nextTick()

          expect(mockApiInstance.request).toHaveBeenCalledTimes(3)
          expect(apiRef.getItem()).toEqual({ id: 3 })

          resolveSecond({ id: 2 })
          resolveFirst({ id: 1 })
          await Promise.all([firstResponse, secondResponse])
          await nextTick()

          expect(apiRef.getItem()).toEqual({ id: 3 })
          expect(apiRef.loading.value).toBe(false)
        })
      } finally {
        scope.stop()
      }
    })

    it('should not cancel a caller controller reused by the latest request', async () => {
      let resolvePrevious!: (value: { id: number }) => void
      const previousResponse = new Promise<{ id: number }>((resolve) => {
        resolvePrevious = resolve
      })
      vi.mocked(mockApiInstance.request)
        .mockReturnValueOnce(previousResponse)
        .mockResolvedValueOnce({ id: 2 })
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const controller = new AbortController()
          const path = ref('initial/path')
          const apiRef = useApiRef(path, { controller })
          apiRef.init()
          path.value = 'latest/path'
          await nextTick()
          await nextTick()

          expect(mockApiInstance.request).toHaveBeenCalledTimes(2)
          expect(controller.signal.aborted).toBe(false)
          expect(mockApiInstance.request).toHaveBeenLastCalledWith(expect.objectContaining({ controller }))
          expect(apiRef.getItem()).toEqual({ id: 2 })

          resolvePrevious({ id: 1 })
          await previousResponse
          await nextTick()
          expect(apiRef.getItem()).toEqual({ id: 2 })
        })
      } finally {
        scope.stop()
      }
    })

    it('should not refetch changed options when reactivity is disabled', async () => {
      let resolveResponse!: (value: { id: number }) => void
      const response = new Promise<{ id: number }>((resolve) => {
        resolveResponse = resolve
      })
      vi.mocked(mockApiInstance.request).mockReturnValueOnce(response)
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const options = ref<ApiFetch>({ request: { page: 1 } })
          const apiRef = useApiRef('test/path', options, false)
          apiRef.init()
          options.value = { request: { page: 2 } }
          await nextTick()

          expect(mockApiInstance.request).toHaveBeenCalledTimes(1)
          resolveResponse({ id: 1 })
          await response
          await nextTick()
          expect(apiRef.getItem()).toEqual({ id: 1 })
        })
      } finally {
        scope.stop()
      }
    })

    it('should react to path changes after initialization', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValue({ data: 'response' })
      const pathRef = ref('initial/path')

      const apiRef = useApiRef(pathRef)
      apiRef.init() // Explicitly init with awaitFetch

      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'initial/path' }))

      // Change path
      pathRef.value = 'new/path'
      await nextTick()
      await new Promise(resolve => setTimeout(resolve, 0))

      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'new/path' }))
    })
  })

  describe('conditions', () => {
    it('should not fetch if conditions are false after init', async () => {
      const conditions = ref(false)
      const apiRef = useApiRef('test/path', undefined, true, conditions)

      apiRef.init()
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })

    it('should fetch when conditions become true after init', async () => {
      const conditions = ref(false)
      const apiRef = useApiRef('test/path', undefined, true, conditions)

      apiRef.init()
      expect(mockApiInstance.request).not.toHaveBeenCalled()

      conditions.value = true
      await nextTick()
      await new Promise(resolve => setTimeout(resolve, 0))

      expect(mockApiInstance.request).toHaveBeenCalled()
    })
  })

  describe('transformations', () => {
    it('should apply transformation to response data', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ rawInfo: '  text  ' })

      const transformation = (data: any) => ({ cleanInfo: data.rawInfo.trim() })
      const { data } = useApiRef('test/path', undefined, true, undefined, transformation)

      // Access to init
      expect(data.value).toBeUndefined()
      await new Promise(r => setTimeout(r, 0))

      expect(data.value).toEqual({ cleanInfo: 'text' })
    })
  })

  describe('abort and stop', () => {
    it.each([false, true])('should abort the active request and ignore its late response with an external controller: %s', async (externalController) => {
      let resolveResponse!: (value: { id: number }) => void
      const response = new Promise<{ id: number }>((resolve) => {
        resolveResponse = resolve
      })
      vi.mocked(mockApiInstance.request).mockReturnValueOnce(response)
      const controller = new AbortController()
      const validation = vi.fn(() => ({ status: 'success' as const }))
      const transformation = vi.fn((value: { id: number }) => value)
      const scope = effectScope()
      const apiRef = scope.run(() => useApiRef(
        'test/path', externalController ? { controller } : undefined,
        true, undefined, transformation, validation
      ))!

      try {
        apiRef.init()
        const fetchOptions = vi.mocked(mockApiInstance.request).mock.calls[0]?.[0] as ApiFetch
        expect(apiRef.loading.value).toBe(true)
        expect(apiRef.reading.value).toBe(true)

        apiRef.stop()

        expect(fetchOptions.controller?.signal.aborted).toBe(true)
        expect(apiRef.loading.value).toBe(false)
        expect(apiRef.reading.value).toBe(false)
        expect(apiRef.getItem()).toBeUndefined()
        expect(apiRef.responseValidationResult.value).toBeUndefined()

        resolveResponse({ id: 1 })
        await response
        await nextTick()

        expect(apiRef.getItem()).toBeUndefined()
        expect(apiRef.loading.value).toBe(false)
        expect(apiRef.reading.value).toBe(false)
        expect(apiRef.responseValidationResult.value).toBeUndefined()
        expect(validation).not.toHaveBeenCalled()
        expect(transformation).not.toHaveBeenCalled()
      } finally {
        apiRef.stop()
        scope.stop()
      }
    })

    it('should clear recovered data and validation when stopped', () => {
      mockGetResponse.emulatorAsync.mockReturnValue({ id: 1 })
      const validation = vi.fn(() => ({ status: 'success' as const }))
      const scope = effectScope()
      const apiRef = scope.run(() => useApiRef<{ id: number }>(
        'test/path', undefined, true, undefined, undefined, validation
      ))!

      try {
        apiRef.init()
        expect(apiRef.getItem()).toEqual({ id: 1 })
        expect(apiRef.isResponseContractValid.value).toBe(true)

        apiRef.stop()

        expect(apiRef.getItem()).toBeUndefined()
        expect(apiRef.responseValidationResult.value).toBeUndefined()
        expect(apiRef.isResponseContractValid.value).toBe(false)
        expect(mockApiInstance.request).not.toHaveBeenCalled()
      } finally {
        scope.stop()
      }
    })

    it.each(['resolve', 'reject'] as const)('should preserve a restarted request when the stopped request later %ss', async (outcome) => {
      let resolvePrevious!: (value: { id: number }) => void
      let rejectPrevious!: (reason: Error) => void
      let resolveLatest!: (value: { id: number }) => void
      const previousResponse = new Promise<{ id: number }>((resolve, reject) => {
        resolvePrevious = resolve
        rejectPrevious = reject
      })
      const latestResponse = new Promise<{ id: number }>((resolve) => {
        resolveLatest = resolve
      })
      vi.mocked(mockApiInstance.request)
        .mockReturnValueOnce(previousResponse)
        .mockReturnValueOnce(latestResponse)
      const scope = effectScope()
      const path = ref('initial/path')
      const apiRef = scope.run(() => useApiRef<{ id: number }>(path))!

      try {
        apiRef.init()
        const previousFetch = vi.mocked(mockApiInstance.request).mock.calls[0]?.[0] as ApiFetch
        apiRef.stop()
        path.value = 'latest/path'
        await nextTick()
        expect(mockApiInstance.request).toHaveBeenCalledTimes(1)

        scope.run(() => apiRef.init())
        const latestFetch = vi.mocked(mockApiInstance.request).mock.calls[1]?.[0] as ApiFetch
        expect(previousFetch.controller?.signal.aborted).toBe(true)
        expect(latestFetch.controller).not.toBe(previousFetch.controller)
        expect(latestFetch.controller?.signal.aborted).toBe(false)

        if (outcome === 'resolve') {
          resolvePrevious({ id: 1 })
        } else {
          rejectPrevious(new DOMException('Request aborted', 'AbortError'))
        }
        await nextTick()

        expect(apiRef.getItem()).toBeUndefined()
        expect(apiRef.loading.value).toBe(true)
        expect(apiRef.reading.value).toBe(true)

        resolveLatest({ id: 2 })
        await latestResponse
        await nextTick()

        expect(apiRef.getItem()).toEqual({ id: 2 })
        expect(apiRef.loading.value).toBe(false)
      } finally {
        apiRef.stop()
        scope.stop()
      }
    })

    it('should allow stop before initialization and repeated stop after cancellation', async () => {
      let rejectResponse!: (reason: Error) => void
      const response = new Promise<unknown>((_, reject) => {
        rejectResponse = reject
      })
      vi.mocked(mockApiInstance.request).mockReturnValueOnce(response)
      const scope = effectScope()
      const apiRef = scope.run(() => useApiRef('test/path'))!

      try {
        apiRef.stop()
        apiRef.stop()
        expect(mockApiInstance.request).not.toHaveBeenCalled()

        scope.run(() => apiRef.init())
        const fetchOptions = vi.mocked(mockApiInstance.request).mock.calls[0]?.[0] as ApiFetch
        const controller = fetchOptions.controller!
        const abortSpy = vi.spyOn(controller, 'abort')

        apiRef.stop()
        apiRef.stop()
        rejectResponse(new DOMException('Request aborted', 'AbortError'))
        await nextTick()

        expect(abortSpy).toHaveBeenCalledTimes(1)
        expect(controller.signal.aborted).toBe(true)
        expect(apiRef.getItem()).toBeUndefined()
        expect(apiRef.loading.value).toBe(false)
        expect(apiRef.reading.value).toBe(false)
      } finally {
        apiRef.stop()
        scope.stop()
      }
    })

    it.each([true, false])('should respect the unmounted option (%s) for pending requests', async (unmounted) => {
      let resolveResponse!: (value: { id: number }) => void
      const response = new Promise<{ id: number }>((resolve) => {
        resolveResponse = resolve
      })
      vi.mocked(mockApiInstance.request).mockReturnValueOnce(response)
      let apiRef: UseApiRef<{ id: number }> | undefined
      const application = createApp({
        setup(): () => ReturnType<typeof h> {
          apiRef = useApiRef<{ id: number }>(
            'test/path', undefined, true, undefined, undefined, undefined, undefined, unmounted
          )
          apiRef.init()
          return () => h('div')
        }
      })

      application.mount(document.createElement('div'))

      try {
        expect(mockApiInstance.request).toHaveBeenCalledTimes(1)
        expect(apiRef?.loading.value).toBe(true)
      } finally {
        application.unmount()
      }

      try {
        const fetchOptions = vi.mocked(mockApiInstance.request).mock.calls[0]?.[0] as ApiFetch
        expect(fetchOptions.controller?.signal.aborted).toBe(unmounted)

        resolveResponse({ id: 1 })
        await response
        await nextTick()

        expect(apiRef?.getItem()).toEqual(unmounted ? undefined : { id: 1 })
        expect(apiRef?.loading.value).toBe(false)
        expect(apiRef?.reading.value).toBe(!unmounted)
      } finally {
        apiRef?.stop()
      }
    })

    it('should provide an abort method which calls controller abort', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ data: 'ok' })
      const abortSpy = vi.spyOn(AbortController.prototype, 'abort')

      const { data, abort } = useApiRef('test/path')
      expect(data.value).toBeUndefined() // init

      abort()

      expect(abortSpy).toHaveBeenCalled()
    })

    it('should stop watcher correctly', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValue({ data: 'ok' })
      const pathRef = ref('path1')
      const { data, stop } = useApiRef(pathRef)

      expect(data.value).toBeUndefined() // init
      await nextTick()
      expect(mockApiInstance.request).toHaveBeenCalledTimes(1)

      stop()

      // Changing ref should no longer trigger the watch
      pathRef.value = 'path2'
      await nextTick()

      expect(mockApiInstance.request).toHaveBeenCalledTimes(1) // Still 1
    })
  })

  describe('validation', () => {
    it('should reflect response validation status', async () => {
      const mockResult = { status: 'success', data: {} }
      const validateResponseContract = vi.fn().mockReturnValue(mockResult)

      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ some: 'data' })

      const { isResponseContractValid, responseValidationResult, data } = useApiRef(
        'test/path',
        undefined,
        true,
        undefined,
        undefined,
        validateResponseContract
      )

      // trigger init
      expect(data.value).toBeUndefined()
      await nextTick()

      expect(validateResponseContract).toHaveBeenCalledWith({ some: 'data' })
      expect(isResponseContractValid.value).toBe(true)
      expect(responseValidationResult.value).toEqual(mockResult)
    })

    it('should reflect invalid response contract', async () => {
      const mockResult = { status: 'error', errors: { field: 'invalid' } }
      const validateResponseContract = vi.fn().mockReturnValue(mockResult)

      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ some: 'invalid-data' })

      const { isResponseContractValid, responseValidationResult, data } = useApiRef(
        'test/path',
        undefined,
        true,
        undefined,
        undefined,
        validateResponseContract
      )

      // trigger init
      expect(data.value).toBeUndefined()
      await nextTick()

      expect(isResponseContractValid.value).toBe(false)
      expect(responseValidationResult.value).toEqual(mockResult)
    })
  })

  describe('utility methods', () => {
    it('should return correct values for isStarting, isLoading, isReading, getItem', async () => {
      vi.mocked(mockApiInstance.request).mockImplementation(() => new Promise((resolve) => {
        setTimeout(() => resolve({ data: 'ok' }), 50)
      }))

      const apiRef = useApiRef('test/path')

      expect(apiRef.isStarting()).toBe(true)
      expect(apiRef.isLoading()).toBe(false)
      expect(apiRef.isReading()).toBe(false)
      expect(apiRef.getItem()).toBeUndefined()

      // trigger init
      apiRef.init()

      expect(apiRef.isLoading()).toBe(true)
      expect(apiRef.isReading()).toBe(true)

      await new Promise(r => setTimeout(r, 60))

      expect(apiRef.isStarting()).toBe(false)
      expect(apiRef.isLoading()).toBe(false)
      expect(apiRef.isReading()).toBe(true)
      expect(apiRef.getItem()).toEqual({ data: 'ok' })
    })

    it('should return correct length', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce([{ id: 1 }, { id: 2 }])

      const { length, data } = useApiRef('test/path')

      expect(length.value).toBe(0)

      expect(data.value).toBeUndefined()
      await nextTick()

      expect(length.value).toBe(2)
    })
  })

  describe('error handling', () => {
    it('should handle API errors and clear data', async () => {
      vi.mocked(mockApiInstance.request).mockRejectedValueOnce(new Error('Network error'))

      const { data, loading } = useApiRef('test/path')

      expect(data.value).toBeUndefined() // init
      await new Promise(r => setTimeout(r, 0))

      expect(data.value).toBeUndefined()
      expect(loading.value).toBe(false)
    })
  })
})
