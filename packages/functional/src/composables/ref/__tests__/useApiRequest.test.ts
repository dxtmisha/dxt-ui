/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useApiRequest } from '../useApiRequest'
import { Api, ApiMethodItem, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiRequest', () => {
  let mockApiInstance: ApiInstance

  beforeEach(() => {
    vi.clearAllMocks()
    mockApiInstance = {
      request: vi.fn()
    } as unknown as ApiInstance

    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
  })

  describe('initialization', () => {
    it('should initialize with default states', () => {
      const { loading, send } = useApiRequest('test/path')

      expect(loading.value).toBe(false)
      expect(typeof send).toBe('function')
    })
  })

  describe('send method', () => {
    it('should set the loading state correctly during request', async () => {
      let resolveRequest: (value: any) => void
      vi.mocked(mockApiInstance.request).mockImplementationOnce(() => new Promise((resolve) => {
        resolveRequest = resolve
      }))

      const { loading, send } = useApiRequest('test/path')

      expect(loading.value).toBe(false)

      const sendPromise = send()

      expect(loading.value).toBe(true)

      resolveRequest!({ id: 1 })
      await sendPromise

      expect(loading.value).toBe(false)
      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
    })

    it('should return data from `apiInstance.request`', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ id: 1, name: 'Test' })

      const { send } = useApiRequest('test/path', ApiMethodItem.get)

      const result = await send()

      expect(result).toEqual({ id: 1, name: 'Test' })
      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path', method: ApiMethodItem.get }))
    })

    it('should use custom apiInstance if provided', async () => {
      const customInstance = { request: vi.fn() } as unknown as ApiInstance
      vi.mocked(customInstance.request).mockResolvedValueOnce({ id: 123 })

      const { send } = useApiRequest('test/path', ApiMethodItem.post, undefined, undefined, true, {}, customInstance)

      const result = await send()

      expect(result).toEqual({ id: 123 })
      expect(customInstance.request).toHaveBeenCalled()
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })
  })

  describe('callbacks', () => {
    it('should call action callback with raw data', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ id: 1 })
      const actionSpy = vi.fn()

      const { send } = useApiRequest('test/path', ApiMethodItem.get, actionSpy)

      await send()

      expect(actionSpy).toHaveBeenCalledWith({ id: 1 })
    })

    it('should apply transformation callback and return transformed data', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ rawInfo: '  text  ' })
      const transformation = (data: any) => ({ cleanInfo: data.rawInfo.trim() })

      const { send } = useApiRequest('test/path', ApiMethodItem.get, undefined, transformation)

      const result = await send()

      expect(result).toEqual({ cleanInfo: 'text' })
    })
  })

  describe('error handling', () => {
    it('should handle API errors, log them, and reset the loading state', async () => {
      const error = new Error('Network error')
      vi.mocked(mockApiInstance.request).mockRejectedValueOnce(error)

      const { loading, send } = useApiRequest('test/path')

      const result = await send()

      expect(loading.value).toBe(false)
      expect(result).toBeUndefined()
    })
  })
})
