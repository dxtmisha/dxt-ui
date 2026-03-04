/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { useApiRef, setApiRefGlobalConditions } from '../useApiRef'
import { Api, ApiMethodItem } from '@dxtmisha/functional-basic'

// Mock Api.request globally
vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@dxtmisha/functional-basic')>()
  return {
    ...actual,
    Api: {
      ...actual.Api,
      request: vi.fn()
    }
  }
})

describe('useApiRef', () => {
  const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => { })
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { })

  beforeEach(() => {
    vi.resetAllMocks()
    setApiRefGlobalConditions(undefined as any) // Reset global conditions
  })

  describe('initialization', () => {
    it('should initialize with default states', async () => {
      const { data, isStarting, loading, reading } = useApiRef('test/path', { method: ApiMethodItem.get })

      expect(data.value).toBeUndefined()
      expect(isStarting.value).toBe(true)
      expect(loading.value).toBe(true)
      expect(reading.value).toBe(true)
    })

    it('should trigger a request on first data access', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ data: 'mocked-data' })

      const { data } = useApiRef('test/path')

      // Access data to trigger reset()
      expect(data.value).toBeUndefined()

      await nextTick()

      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
    })
  })

  describe('reactivity', () => {
    it('should react to path changes', async () => {
      vi.mocked(Api.request).mockResolvedValue({ data: 'response' })
      const pathRef = ref('initial/path')

      const { data } = useApiRef(pathRef)
      expect(data.value).toBeUndefined() // trigger First fetch

      await nextTick()
      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'initial/path' }))

      // Change path
      pathRef.value = 'new/path'
      await nextTick()

      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'new/path' }))
    })

    it('should react to request options changes', async () => {
      vi.mocked(Api.request).mockResolvedValue({ data: 'response' })
      const requestOptions = ref({ method: ApiMethodItem.get, request: { id: 1 } })

      const { data } = useApiRef('test/path', requestOptions)
      expect(data.value).toBeUndefined() // trigger First fetch
      await nextTick()

      // Change request body
      requestOptions.value = { method: ApiMethodItem.get, request: { id: 2 } }
      await nextTick()

      expect(Api.request).toHaveBeenLastCalledWith(expect.objectContaining({ request: { id: 2 } }))
    })
  })

  describe('conditions', () => {
    it('should not fetch if conditions are false', async () => {
      const conditions = ref(false)
      const { data, reset } = useApiRef('test/path', undefined, true, conditions)

      expect(data.value).toBeUndefined() // Trigger init
      await reset()

      expect(Api.request).not.toHaveBeenCalled()
    })

    it('should fetch when conditions become true', async () => {
      const conditions = ref(false)
      const { data } = useApiRef('test/path', undefined, true, conditions)

      expect(data.value).toBeUndefined()
      await nextTick()
      expect(Api.request).not.toHaveBeenCalled()

      conditions.value = true
      await nextTick()

      expect(Api.request).toHaveBeenCalled()
    })
  })

  describe('transformations', () => {
    it('should apply transformation to response data', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ rawInfo: '  text  ' })

      const transformation = (data: any) => ({ cleanInfo: data.rawInfo.trim() })
      const { data } = useApiRef('test/path', undefined, true, undefined, transformation)

      // Access to init, then wait for reset
      expect(data.value).toBeUndefined()
      await new Promise(r => setTimeout(r, 0))

      expect(data.value).toEqual({ cleanInfo: 'text' })
    })
  })

  describe('abort and stop', () => {
    it('should provide an abort method which calls controller abort', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ data: 'ok' })
      const abortSpy = vi.spyOn(AbortController.prototype, 'abort')

      const { data, abort } = useApiRef('test/path')
      expect(data.value).toBeUndefined() // init

      abort()

      expect(abortSpy).toHaveBeenCalled()
    })

    it('should stop watcher correctly', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ data: 'ok' })
      const pathRef = ref('path1')
      const { data, stop } = useApiRef(pathRef)

      expect(data.value).toBeUndefined()
      await nextTick()
      expect(Api.request).toHaveBeenCalledTimes(1)

      stop()
      expect(consoleWarnSpy).toHaveBeenCalledWith('useApiRef: stop', 'path1')

      // Changing ref should no longer trigger the watch
      pathRef.value = 'path2'
      await nextTick()

      expect(Api.request).toHaveBeenCalledTimes(1) // Still 1
    })
  })

  describe('error handling', () => {
    it('should handle API errors and clear data', async () => {
      vi.mocked(Api.request).mockRejectedValueOnce(new Error('Network error'))

      const { data, loading } = useApiRef('test/path')

      expect(data.value).toBeUndefined()
      await new Promise(r => setTimeout(r, 0))

      expect(consoleErrorSpy).toHaveBeenCalled()
      expect(data.value).toBeUndefined()
      expect(loading.value).toBe(false)
    })
  })
})
