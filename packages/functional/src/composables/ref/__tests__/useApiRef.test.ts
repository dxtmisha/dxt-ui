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

      const { data } = useApiRef('test/path', {}, true, undefined, undefined, true, customInstance)

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

      const { data } = useApiRef(pathRef)
      expect(data.value).toBeUndefined() // trigger init

      await nextTick()
      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'initial/path' }))

      // Change path
      pathRef.value = 'new/path'
      await nextTick()

      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'new/path' }))
    })
  })

  describe('conditions', () => {
    it('should not fetch if conditions are false after init', async () => {
      const conditions = ref(false)
      const { data, reset } = useApiRef('test/path', undefined, true, conditions)

      expect(data.value).toBeUndefined() // Trigger init
      await reset()

      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })

    it('should fetch when conditions become true after init', async () => {
      const conditions = ref(false)
      const { data } = useApiRef('test/path', undefined, true, conditions)

      expect(data.value).toBeUndefined() // init
      await nextTick()
      expect(mockApiInstance.request).not.toHaveBeenCalled()

      conditions.value = true
      await nextTick()

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
