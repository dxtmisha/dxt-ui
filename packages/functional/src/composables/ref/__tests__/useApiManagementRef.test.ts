/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, expectTypeOf, beforeEach, afterEach, vi } from 'vitest'
import { effectScope, ref, nextTick } from 'vue'
import { useApiManagementRef } from '../useApiManagementRef'
import { useApiManagementAsyncRef } from '../useApiManagementAsyncRef'
import { Api, ApiMethodItem, type ApiInstance, FormattersType, ServerStorage } from '@dxtmisha/functional-basic'
import { GeoRef } from '../../../classes/ref/GeoRef'
import type { ApiManagementGet } from '../../../types/apiTypes'

describe('useApiManagementRef', () => {
  let mockApiInstance: ApiInstance

  beforeEach(() => {
    vi.clearAllMocks()
    mockApiInstance = {
      request: vi.fn(),
      getResponse: vi.fn().mockReturnValue({
        emulatorAsync: vi.fn().mockReturnValue(undefined)
      })
    } as unknown as ApiInstance

    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
  })

  describe('GET Initialization and skeleton', () => {
    it.each([
      ['useApiManagementRef', useApiManagementRef],
      ['useApiManagementAsyncRef', useApiManagementAsyncRef]
    ] as const)('should fetch on list access and replace the skeleton with API data in %s', async (_, createManagement) => {
      const skeleton = [{ id: 0 }]
      const response = [{ id: 1 }]
      let resolveRequest!: (value: typeof response) => void
      const responsePromise = new Promise<typeof response>((resolve) => {
        resolveRequest = resolve
      })
      vi.mocked(mockApiInstance.request).mockReturnValueOnce(responsePromise)
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const { list, starting, loading } = createManagement({
            path: 'test/path',
            skeleton: () => skeleton
          })

          expect(mockApiInstance.request).not.toHaveBeenCalled()
          expect(starting.value).toBe(true)
          expect(list.value).toEqual(skeleton)
          expect(loading.value).toBe(true)
          expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
          expect(list.value).toEqual(skeleton)
          expect(mockApiInstance.request).toHaveBeenCalledTimes(1)

          resolveRequest(response)
          await responsePromise
          await nextTick()

          expect(list.value).toEqual(response)
          expect(starting.value).toBe(false)
          expect(loading.value).toBe(false)
          expect(mockApiInstance.request).toHaveBeenCalledTimes(1)
        })
      } finally {
        scope.stop()
      }
    })

    it('should wait for conditions before replacing the skeleton with API data', async () => {
      const skeleton = [{ id: 0 }]
      const response = [{ id: 1 }]
      const conditions = ref(false)
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const { list } = useApiManagementRef({
            path: 'test/path',
            conditions,
            skeleton: () => skeleton
          })

          expect(list.value).toEqual(skeleton)
          expect(mockApiInstance.request).not.toHaveBeenCalled()

          conditions.value = true
          await nextTick()
          await nextTick()

          expect(list.value).toEqual(response)
          expect(mockApiInstance.request).toHaveBeenCalledTimes(1)
        })
      } finally {
        scope.stop()
      }
    })

    it('should use recovered data instead of the skeleton without sending a request', () => {
      const response = [{ id: 1 }]
      vi.spyOn(mockApiInstance.getResponse(), 'emulatorAsync').mockReturnValueOnce(response)
      const scope = effectScope()

      try {
        scope.run(() => {
          const { list, starting } = useApiManagementRef({
            path: 'test/path',
            skeleton: () => [{ id: 0 }]
          })

          expect(list.value).toEqual(response)
          expect(starting.value).toBe(false)
          expect(mockApiInstance.request).not.toHaveBeenCalled()
        })
      } finally {
        scope.stop()
      }
    })

    it('should return API data after fetching via apiInstance', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ data: 'MOCK_DATA' })

      const { data, starting, list } = useApiManagementRef({
        path: 'test/path'
      })

      expect(data.value).toBeUndefined()
      expect(list.value).toBeUndefined()

      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      expect(starting.value).toBe(false)
      expect(data.value).toEqual({ data: 'MOCK_DATA' })
      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
    })

    it('should use custom apiInstance for GET requests', async () => {
      const customInstance = {
        request: vi.fn(),
        getResponse: vi.fn().mockReturnValue({
          emulatorAsync: vi.fn().mockReturnValue(undefined)
        })
      } as unknown as ApiInstance
      vi.mocked(customInstance.request).mockResolvedValueOnce({ data: 'custom' })

      const { data } = useApiManagementRef({ path: 'test/get' }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, customInstance)

      expect(data.value).toBeUndefined()
      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      expect(customInstance.request).toHaveBeenCalled()
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })
  })

  describe('Mutations (POST, PUT, DELETE) propagation', () => {
    describe.each(['post', 'put', 'delete'] as const)('%s callbacks', (method) => {
      it.each(['success', 'error', 'network error'] as const)('should forward callbacks for %s', async (outcome) => {
        const response = { success: outcome === 'success' }
        const error = new Error('Network error')
        if (outcome === 'network error') {
          vi.mocked(mockApiInstance.request).mockRejectedValueOnce(error)
        } else {
          vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
        }
        const action = vi.fn()
        const actionSuccess = vi.fn()
        const actionError = vi.fn()
        const commonAction = vi.fn()
        const mutation = { path: 'test/mutation', action, actionSuccess, actionError }
        const api = useApiManagementRef(
          { path: 'test/get' }, undefined, undefined,
          method === 'post' ? mutation : undefined,
          method === 'put' ? mutation : undefined,
          method === 'delete' ? mutation : undefined,
          commonAction
        )
        const send = method === 'post' ? api.sendPost : method === 'put' ? api.sendPut : api.sendDelete

        expect(await send()).toEqual(outcome === 'network error' ? undefined : response)

        expect(action).toHaveBeenCalledTimes(outcome === 'network error' ? 0 : 1)
        expect(commonAction).toHaveBeenCalledTimes(outcome === 'network error' ? 0 : 1)
        expect(actionSuccess).toHaveBeenCalledTimes(outcome === 'success' ? 1 : 0)
        if (outcome === 'network error') {
          expect(actionError).toHaveBeenCalledExactlyOnceWith(undefined, error)
        } else if (outcome === 'error') {
          expect(actionError).toHaveBeenCalledExactlyOnceWith(response)
        } else {
          expect(actionError).not.toHaveBeenCalled()
        }
        expect(mockApiInstance.request).toHaveBeenCalledTimes(1)
      })
    })

    it('should propagate custom apiInstance to mutation hooks', async () => {
      const customInstance = {
        request: vi.fn(),
        getResponse: vi.fn().mockReturnValue({
          emulatorAsync: vi.fn().mockReturnValue(undefined)
        })
      } as unknown as ApiInstance
      // Mock GET response to let it finish starting
      vi.mocked(customInstance.request).mockResolvedValue([{ id: 1 }])

      const { sendPost, sendPut, sendDelete, list } = useApiManagementRef(
        { path: 'test/get' },
        undefined,
        undefined,
        { path: 'test/post' },
        { path: 'test/put' },
        { path: 'test/delete' },
        undefined,
        undefined,
        undefined,
        customInstance
      )

      // Trigger init
      expect(list.value).toBeUndefined()
      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      vi.mocked(customInstance.request).mockClear()

      // Test POST
      vi.mocked(customInstance.request).mockResolvedValueOnce({ success: true })
      await sendPost({ data: 'post' })
      expect(customInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/post', method: ApiMethodItem.post }))

      // Test PUT
      vi.mocked(customInstance.request).mockResolvedValueOnce({ success: true })
      await sendPut({ data: 'put' })
      expect(customInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/put', method: ApiMethodItem.put }))

      // Test DELETE
      vi.mocked(customInstance.request).mockResolvedValueOnce({ success: true })
      await sendDelete({ data: 'delete' })
      expect(customInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/delete', method: ApiMethodItem.delete }))

      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })
  })

  describe.each([
    ['useApiManagementRef', useApiManagementRef],
    ['useApiManagementAsyncRef', useApiManagementAsyncRef]
  ] as const)('Common asynchronous action in %s', (_, createManagement) => {
    describe.each(['post', 'put', 'delete'] as const)('%s mutation', (method) => {
      it.each([true, false])('should wait for local and common actions with success %s', async (success) => {
        const response = { success }
        vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
        let resolveLocal!: () => void
        let resolveCommon!: () => void
        const localPromise = new Promise<void>((resolve) => { resolveLocal = resolve })
        const commonPromise = new Promise<void>((resolve) => { resolveCommon = resolve })
        const localAction = vi.fn(() => localPromise)
        const commonAction = vi.fn(() => commonPromise)
        const actionSuccess = vi.fn()
        const actionError = vi.fn()
        const mutation = { path: 'test/mutation', action: localAction, actionSuccess, actionError }
        const scope = effectScope()
        const api = scope.run(() => createManagement(
          { path: 'test/get' }, undefined, undefined,
          method === 'post' ? mutation : undefined,
          method === 'put' ? mutation : undefined,
          method === 'delete' ? mutation : undefined,
          commonAction
        ))!
        const send = method === 'post' ? api.sendPost : method === 'put' ? api.sendPut : api.sendDelete
        const loading = method === 'post' ? api.loadingPost : method === 'put' ? api.loadingPut : api.loadingDelete
        const completed = vi.fn()
        const sending = send().then((data) => {
          completed()
          return data
        })

        try {
          await vi.waitFor(() => expect(localAction).toHaveBeenCalledExactlyOnceWith(response))
          expect(commonAction).not.toHaveBeenCalled()
          expect(completed).not.toHaveBeenCalled()

          resolveLocal()
          await vi.waitFor(() => expect(commonAction).toHaveBeenCalledOnce())
          await new Promise<void>(resolve => setTimeout(resolve, 0))

          expect(completed).not.toHaveBeenCalled()
          expect(loading?.value).toBe(true)
          expect(actionSuccess).not.toHaveBeenCalled()
          expect(actionError).not.toHaveBeenCalled()

          resolveCommon()
          expect(await sending).toEqual(response)
          expect(loading?.value).toBe(false)
          expect(actionSuccess).toHaveBeenCalledTimes(success ? 1 : 0)
          expect(actionError).toHaveBeenCalledTimes(success ? 0 : 1)
        } finally {
          resolveLocal()
          resolveCommon()
          await sending
          scope.stop()
        }
      })

      it('should handle a rejected common action inside send', async () => {
        vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ success: true })
        let rejectCommon!: (error: Error) => void
        const commonPromise = new Promise<void>((_, reject) => { rejectCommon = reject })
        const commonAction = vi.fn(() => commonPromise)
        const actionSuccess = vi.fn()
        const actionError = vi.fn()
        const mutation = { path: 'test/mutation', actionSuccess, actionError }
        const scope = effectScope()
        const api = scope.run(() => createManagement(
          { path: 'test/get' }, undefined, undefined,
          method === 'post' ? mutation : undefined,
          method === 'put' ? mutation : undefined,
          method === 'delete' ? mutation : undefined,
          commonAction
        ))!
        const send = method === 'post' ? api.sendPost : method === 'put' ? api.sendPut : api.sendDelete
        const loading = method === 'post' ? api.loadingPost : method === 'put' ? api.loadingPut : api.loadingDelete
        const sending = send()

        try {
          await vi.waitFor(() => expect(commonAction).toHaveBeenCalledOnce())
          rejectCommon(new Error('Common action failed'))

          expect(await sending).toBeUndefined()
          expect(loading?.value).toBe(false)
          expect(actionSuccess).not.toHaveBeenCalled()
          expect(actionError).not.toHaveBeenCalled()
          expect(mockApiInstance.request).toHaveBeenCalledTimes(1)
        } finally {
          rejectCommon(new Error('Test cleanup'))
          await sending
          scope.stop()
        }
      })
    })

    it('should start the background GET refresh only after the common action completes', async () => {
      let resolveCommon!: () => void
      let resolveRefresh!: (data: { id: number }[]) => void
      const commonPromise = new Promise<void>((resolve) => { resolveCommon = resolve })
      const refreshPromise = new Promise<{ id: number }[]>((resolve) => { resolveRefresh = resolve })
      const commonAction = vi.fn(() => commonPromise)
      const scope = effectScope()
      const response = { success: true }
      vi.mocked(mockApiInstance.request)
        .mockResolvedValueOnce([{ id: 1 }])
        .mockResolvedValueOnce(response)
        .mockReturnValueOnce(refreshPromise)
      const api = scope.run(() => createManagement(
        { path: 'test/get' } as ApiManagementGet<{ id: number }[]>, undefined, undefined,
        { path: 'test/post' }, undefined, undefined, commonAction
      ))!

      try {
        api.init()
        await vi.waitFor(() => expect(api.loading.value).toBe(false))
        const sending = api.sendPost()
        await vi.waitFor(() => expect(commonAction).toHaveBeenCalledOnce())
        expect(mockApiInstance.request).toHaveBeenCalledTimes(2)

        resolveCommon()
        expect(await sending).toEqual(response)

        expect(mockApiInstance.request).toHaveBeenCalledTimes(3)
        expect(mockApiInstance.request).toHaveBeenLastCalledWith(expect.objectContaining({ path: 'test/get' }))
        expect(api.loading.value).toBe(true)
        expect(api.loadingPost?.value).toBe(false)

        resolveRefresh([{ id: 1 }, { id: 2 }])
        await vi.waitFor(() => expect(api.loading.value).toBe(false))
        expect(api.list.value).toEqual([{ id: 1 }, { id: 2 }])
      } finally {
        resolveCommon()
        resolveRefresh([])
        await nextTick()
        scope.stop()
      }
    })

    it('should invoke actionSuccess on successful mutation and wait for it before completing', async () => {
      let resolveSuccess!: () => void
      const successPromise = new Promise<void>((resolve) => { resolveSuccess = resolve })
      const commonAction = vi.fn()
      const commonSuccess = vi.fn(() => successPromise)
      const commonError = vi.fn()
      const scope = effectScope()
      const response = { success: true }
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
      const api = scope.run(() => createManagement(
        { path: 'test/get' }, undefined, undefined,
        { path: 'test/post' }, undefined, undefined,
        commonAction, commonSuccess, commonError
      ))!

      const sending = api.sendPost()
      try {
        await vi.waitFor(() => expect(commonAction).toHaveBeenCalledOnce())
        await vi.waitFor(() => expect(commonSuccess).toHaveBeenCalledOnce())
        expect(commonError).not.toHaveBeenCalled()

        resolveSuccess()
        expect(await sending).toEqual(response)
      } finally {
        resolveSuccess()
        await sending
        scope.stop()
      }
    })

    it('should invoke actionError on error mutation and wait for it before completing', async () => {
      let resolveError!: () => void
      const errorPromise = new Promise<void>((resolve) => { resolveError = resolve })
      const commonAction = vi.fn()
      const commonSuccess = vi.fn()
      const commonError = vi.fn(() => errorPromise)
      const scope = effectScope()
      const response = { success: false }
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
      const api = scope.run(() => createManagement(
        { path: 'test/get' }, undefined, undefined,
        { path: 'test/post' }, undefined, undefined,
        commonAction, commonSuccess, commonError
      ))!

      const sending = api.sendPost()
      try {
        await vi.waitFor(() => expect(commonAction).toHaveBeenCalledOnce())
        await vi.waitFor(() => expect(commonError).toHaveBeenCalledOnce())
        expect(commonSuccess).not.toHaveBeenCalled()

        resolveError()
        expect(await sending).toEqual(response)
      } finally {
        resolveError()
        await sending
        scope.stop()
      }
    })
  })

  describe('Validation and isValid', () => {
    it('should return isValid true if typeData is not provided', () => {
      const { isValid } = useApiManagementRef({
        path: 'test/path'
      })
      expect(isValid.value).toBe(true)
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })

    it('should accept only a boolean predicate as typeData', () => {
      expectTypeOf<ApiManagementGet<{ id: number }>['typeData']>()
        .toEqualTypeOf<((data: { id: number }) => boolean) | undefined>()
      expectTypeOf<new () => { id: number }>()
        .not.toMatchTypeOf<NonNullable<ApiManagementGet<{ id: number }>['typeData']>>()
    })

    it.each([
      ['useApiManagementRef', useApiManagementRef],
      ['useApiManagementAsyncRef', useApiManagementAsyncRef]
    ] as const)('should apply the predicate after loading and revalidate changed data in %s', async (_, createManagement) => {
      vi.mocked(mockApiInstance.request)
        .mockResolvedValueOnce({ id: 1 })
        .mockResolvedValueOnce({ id: 0 })
      const typeData = vi.fn((data: { id: number }): boolean => data.id > 0)
      const propsGet: ApiManagementGet<{ id: number }> = { path: 'test/path', typeData }
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const { isValid, init, reset } = createManagement(propsGet)

          expect(isValid.value).toBe(false)
          expect(typeData).not.toHaveBeenCalled()
          expect(mockApiInstance.request).not.toHaveBeenCalled()

          init()
          expect(isValid.value).toBe(false)
          expect(typeData).not.toHaveBeenCalled()
          await nextTick()

          expect(isValid.value).toBe(true)
          expect(typeData).toHaveBeenCalledExactlyOnceWith({ id: 1 })

          await reset()

          expect(isValid.value).toBe(false)
          expect(typeData).toHaveBeenCalledTimes(2)
          expect(typeData).toHaveBeenLastCalledWith({ id: 0 })
        })
      } finally {
        scope.stop()
      }
    })

    it('should pass transformed response data to the predicate', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ user: { id: 1 } })
      const typeData = vi.fn((data: { id: number }): boolean => data.id > 0)
      const propsGet: ApiManagementGet<{ id: number }, { user: { id: number } }> = {
        path: 'test/path',
        transformation: data => data.user,
        typeData
      }
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const { isValid, init } = useApiManagementRef(propsGet)
          init()
          await nextTick()

          expect(isValid.value).toBe(true)
          expect(typeData).toHaveBeenCalledExactlyOnceWith({ id: 1 })
        })
      } finally {
        scope.stop()
      }
    })
  })

  describe('utility properties', () => {
    it('should expose starting, reading and loading from useApiRef', async () => {
      vi.mocked(mockApiInstance.request).mockImplementation(() => new Promise((resolve) => {
        setTimeout(() => resolve({ data: 'ok' }), 50)
      }))

      const { starting, reading, loading, list } = useApiManagementRef({ path: 'test/path' })

      expect(starting.value).toBe(true)
      expect(reading.value).toBe(false)
      expect(loading.value).toBe(false)

      // trigger fetch
      expect(list.value).toBeUndefined()
      await nextTick()

      expect(loading.value).toBe(true)
      expect(reading.value).toBe(true)

      await new Promise(r => setTimeout(r, 60))

      expect(starting.value).toBe(false)
      expect(loading.value).toBe(false)
      expect(reading.value).toBe(true)
    })

    it('should return correct length and lengthData', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValue([{ id: 1 }, { id: 2 }])

      const { length, lengthData, list } = useApiManagementRef(
        { path: 'test/path' },
        undefined,
        {
          columns: ['id'] as any,
          value: ref('1'),
          options: { limit: 1 }
        }
      )

      // trigger fetch
      expect(list.value).toBeUndefined()
      await nextTick()
      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      expect(lengthData.value).toBe(2)
      expect(length.value).toBe(1) // searched list
    })

    it('should expose mutation loading states', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValue([{ id: 1 }])

      const { loadingPost, loadingPut, loadingDelete, sendPost, list } = useApiManagementRef(
        { path: 'test/path' },
        undefined,
        undefined,
        { path: 'test/post' },
        { path: 'test/put' },
        { path: 'test/delete' }
      )

      // trigger GET
      expect(list.value).toBeUndefined()
      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      expect(loadingPost!.value).toBe(false)
      expect(loadingPut!.value).toBe(false)
      expect(loadingDelete!.value).toBe(false)

      // trigger POST
      vi.mocked(mockApiInstance.request).mockImplementation(() => new Promise((resolve) => {
        setTimeout(() => resolve({ success: true }), 50)
      }))

      sendPost()
      await new Promise(r => setTimeout(r, 10))
      expect(loadingPost!.value).toBe(true)

      await new Promise(r => setTimeout(r, 50))
      expect(loadingPost!.value).toBe(false)
    })

    it('should apply formatters to the list', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValue([{ id: 1, price: 100 }])

      const { list } = useApiManagementRef(
        { path: 'test/path' },
        { price: { transformation: (v: number) => `${v} USD` } }
      )

      // trigger fetch
      expect(list.value).toBeUndefined()
      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      expect(list.value).toEqual([{ id: 1, price: 100, priceFormat: '100 USD' }])
    })

    it('should search through formatted list', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValue([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' }
      ])

      const searchRef = ref('')
      const { list } = useApiManagementRef(
        { path: 'test/path' } as ApiManagementGet<{ id: number, name: string }>,
        { name: { transformation: (v: string) => `Fruit: ${v}` } },
        {
          columns: ['nameFormat'] as any,
          value: searchRef
        }
      )

      // trigger fetch
      expect(list.value).toBeUndefined()
      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      expect(list.value).toHaveLength(2)

      searchRef.value = 'Apple'
      await nextTick()
      expect(list.value).toHaveLength(1)
      expect(list.value![0].name).toBe('Apple')
      expect(list.value![0].nameFormat).toBe('Fruit: Apple')
    })
  })

  describe('Locale formatting', () => {
    beforeEach(() => {
      ServerStorage.reset()
      GeoRef.set('en-US')
    })

    afterEach(() => {
      ServerStorage.reset()
    })

    it.each([
      ['useApiManagementRef', useApiManagementRef],
      ['useApiManagementAsyncRef', useApiManagementAsyncRef]
    ] as const)('should update the formatted list without fetching again in %s', async (_, createManagement) => {
      const response = [{ id: 1, price: 1234.5, currency: 'USD' }]
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
      const scope = effectScope()

      try {
        await scope.run(async () => {
          const management = createManagement(
            { path: 'test/path' } as ApiManagementGet<typeof response>,
            { price: { type: FormattersType.currency } }
          )
          const list = management.list
          expect(list.value).toBeUndefined()
          await nextTick()

          expect(list.value?.[0]?.priceFormat).toBe('$1,234.50')

          GeoRef.set('de-DE')

          expect(management.list).toBe(list)
          expect(list.value?.[0]?.priceFormat).toBe(new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'USD'
          }).format(1234.5))
          expect(mockApiInstance.request).toHaveBeenCalledTimes(1)
          expect(response).toEqual([{ id: 1, price: 1234.5, currency: 'USD' }])
        })
      } finally {
        scope.stop()
      }
    })
  })

  describe('Success-based reset', () => {
    it('should trigger reset if mutation succeeds via apiInstance', async () => {
      vi.mocked(mockApiInstance.request)
        .mockResolvedValueOnce([{ id: 1 }]) // GET
        .mockResolvedValueOnce({ success: true }) // POST success
        .mockResolvedValueOnce([{ id: 1 }, { id: 2 }]) // GET after reset

      const { sendPost, list } = useApiManagementRef(
        { path: 'test/get' },
        undefined,
        undefined,
        { path: 'test/post' }
      )

      // trigger
      expect(list.value).toBeUndefined()
      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      vi.mocked(mockApiInstance.request).mockClear()

      await sendPost({ data: { name: 'New Item' } })

      expect(mockApiInstance.request).toHaveBeenCalledTimes(2) // 1 POST + 1 GET (reset)
    })

    it('should trigger action and reset on successful mutation', async () => {
      const action = vi.fn()
      vi.mocked(mockApiInstance.request)
        .mockResolvedValueOnce([{ id: 1 }]) // initial GET
        .mockResolvedValueOnce({ status: 'success' }) // POST success
        .mockResolvedValueOnce([{ id: 1 }, { id: 2 }]) // GET after reset

      const { sendPost, list } = useApiManagementRef(
        { path: 'test/get' },
        undefined,
        undefined,
        { path: 'test/post' },
        undefined,
        undefined,
        action
      )

      // init
      expect(list.value).toBeUndefined()
      await nextTick()
      await new Promise(r => setTimeout(r, 0))

      await sendPost()

      expect(action).toHaveBeenCalled()
      expect(mockApiInstance.request).toHaveBeenCalledTimes(3) // GET, POST, GET(reset)
    })
  })
})
