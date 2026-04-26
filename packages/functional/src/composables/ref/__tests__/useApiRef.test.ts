/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { useApiRef } from '../useApiRef'
import { Api, ApiMethodItem, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiRef', () => {
  let mockApiInstance: ApiInstance

  beforeEach(() => {
    vi.clearAllMocks()
    mockApiInstance = {
      request: vi.fn()
    } as unknown as ApiInstance

    // Mock the default Api.getItem()
    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
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
      const customInstance = { request: vi.fn() } as unknown as ApiInstance
      vi.mocked(customInstance.request).mockResolvedValueOnce({ data: 'custom' })

      const { data } = useApiRef(
        'test/path',
        {},
        true,
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
    it('should react to path changes after initialization', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValue({ data: 'response' })
      const pathRef = ref('initial/path')

      const apiRef = useApiRef(pathRef)
      await apiRef.init(true) // Explicitly init with awaitFetch

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

      await apiRef.init(true)
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })

    it('should fetch when conditions become true after init', async () => {
      const conditions = ref(false)
      const apiRef = useApiRef('test/path', undefined, true, conditions)

      await apiRef.init(true)
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
