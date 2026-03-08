/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useApiRequest } from '../useApiRequest'
import { Api, ApiMethodItem } from '@dxtmisha/functional-basic'

// Mock `Api.request` globally
const { viApiMethodItem } = vi.hoisted(() => ({
  viApiMethodItem: {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
  }
}))

vi.mock('@dxtmisha/functional-basic', () => ({
  Api: {
    request: vi.fn()
  },
  ApiMethodItem: viApiMethodItem
}))

describe('useApiRequest', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { })

  beforeEach(() => {
    vi.clearAllMocks()
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
      vi.mocked(Api.request).mockImplementationOnce(() => new Promise((resolve) => {
        resolveRequest = resolve
      }))

      const { loading, send } = useApiRequest('test/path')

      expect(loading.value).toBe(false)

      const sendPromise = send()

      expect(loading.value).toBe(true)

      resolveRequest!({ data: 'mocked-data' })
      await sendPromise

      expect(loading.value).toBe(false)
      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
    })

    it('should return data from `Api.request`', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ id: 1, name: 'Test' })

      const { send } = useApiRequest('test/path', ApiMethodItem.get)

      const result = await send()

      expect(result).toEqual({ id: 1, name: 'Test' })
      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path', method: ApiMethodItem.get }))
    })

    it('should pass options to `Api.request`', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce(undefined)

      const { send } = useApiRequest('test/path', ApiMethodItem.post, undefined, undefined, false, { disableErrorToast: true } as any)

      await send({ reqData: 123 })

      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({
        path: 'test/path',
        method: ApiMethodItem.post,
        request: { reqData: 123 },
        toData: false,
        disableErrorToast: true
      }))
    })
  })

  describe('callbacks', () => {
    it('should call action callback with raw data', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ id: 1 })
      const actionSpy = vi.fn()

      const { send } = useApiRequest('test/path', ApiMethodItem.get, actionSpy)

      await send()

      expect(actionSpy).toHaveBeenCalledWith({ id: 1 })
    })

    it('should await Promise from action callback', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ id: 1 })
      let actionResolved = false
      const actionFn = async () => {
        await new Promise(r => setTimeout(r, 10))
        actionResolved = true
      }

      const { send } = useApiRequest('test/path', ApiMethodItem.get, actionFn)

      await send()

      expect(actionResolved).toBe(true)
    })

    it('should apply transformation callback and return transformed data', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ rawInfo: '  text  ' })
      const transformation = (data: any) => ({ cleanInfo: data.rawInfo.trim() })

      const { send } = useApiRequest('test/path', ApiMethodItem.get, undefined, transformation)

      const result = await send()

      expect(result).toEqual({ cleanInfo: 'text' })
    })

    it('should call action with transformed data if transformation is present', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ value: 10 })
      const actionSpy = vi.fn()
      const transformation = (data: any) => ({ value: data.value * 2 })

      const { send } = useApiRequest('test/path', ApiMethodItem.get, actionSpy, transformation)

      await send()

      expect(actionSpy).toHaveBeenCalledWith({ value: 20 })
    })
  })

  describe('error handling', () => {
    it('should handle API errors, log them, and reset the loading state', async () => {
      const error = new Error('Network error')
      vi.mocked(Api.request).mockRejectedValueOnce(error)

      const { loading, send } = useApiRequest('test/path')

      const result = await send()

      expect(consoleErrorSpy).toHaveBeenCalledWith('useApiRequest: error', 'test/path', error)
      expect(loading.value).toBe(false)
      expect(result).toBeUndefined()
    })

    it('should reset the loading state even if transformation throws an error', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ data: 'ok' })
      const transformation = () => {
        throw new Error('Transform error')
      }

      const { loading, send } = useApiRequest('test/path', ApiMethodItem.get, undefined, transformation)

      try {
        await send()
      } catch {
        // Expected to throw
      }

      expect(loading.value).toBe(false)
    })

    it('should reset the loading state even if the action throws an error', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ data: 'ok' })
      const action = () => {
        throw new Error('Action error')
      }

      const { loading, send } = useApiRequest('test/path', ApiMethodItem.get, action)

      try {
        await send()
      } catch {
        // Expected to throw
      }

      expect(loading.value).toBe(false)
    })
  })
})
