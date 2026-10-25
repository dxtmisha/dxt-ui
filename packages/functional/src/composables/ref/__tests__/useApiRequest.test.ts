/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useApiRequest } from '../useApiRequest'
import { useApiGet } from '../useApiGet'
import { useApiPost } from '../useApiPost'
import { useApiPut } from '../useApiPut'
import { useApiDelete } from '../useApiDelete'
import { Api, ApiMethodItem, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiRequest', () => {
  let mockApiInstance: ApiInstance

  beforeEach(() => {
    vi.clearAllMocks()
    mockApiInstance = {
      request: vi.fn(),
      getStatus: vi.fn().mockReturnValue({
        getStatus: () => 200
      })
    } as unknown as ApiInstance

    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
  })

  describe('initialization', () => {
    it('should initialize with default states', () => {
      const { loading, send } = useApiRequest({ path: 'test/path' })

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

      const { loading, send } = useApiRequest({ path: 'test/path' })

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

      const { send } = useApiRequest({ path: 'test/path', method: ApiMethodItem.get })

      const result = await send()

      expect(result).toEqual({ id: 1, name: 'Test' })
      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path', method: ApiMethodItem.get }))
    })

    it('should use custom apiInstance if provided', async () => {
      const customInstance = { request: vi.fn() } as unknown as ApiInstance
      vi.mocked(customInstance.request).mockResolvedValueOnce({ id: 123 })

      const { send } = useApiRequest({
        path: 'test/path',
        method: ApiMethodItem.post,
        toData: true,
        options: {},
        apiInstance: customInstance
      })

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

      const { send } = useApiRequest({ path: 'test/path', method: ApiMethodItem.get, action: actionSpy })

      await send()

      expect(actionSpy).toHaveBeenCalledWith({ id: 1 })
    })

    it('should apply transformation callback and return transformed data', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ rawInfo: '  text  ' })
      const transformation = (data: any) => ({ cleanInfo: data.rawInfo.trim() })

      const { send } = useApiRequest({ path: 'test/path', method: ApiMethodItem.get, transformation })

      const result = await send()

      expect(result).toEqual({ cleanInfo: 'text' })
    })
  })

  describe('response callbacks', () => {
    it.each([
      ['success', { success: true }, true],
      ['failure', { success: false }, false],
      ['error status', { status: 'error' }, false],
      ['warning status', { status: 'warning' }, false],
      ['successful HTTP status', { statusObject: { status: 201 } }, true],
      ['failed HTTP status', { statusObject: { status: 500 } }, false],
      ['array', [{ id: 1 }], true]
    ] as const)('should call action and only the matching callback for %s', async (_, response, success) => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
      const action = vi.fn()
      const actionSuccess = vi.fn()
      const actionError = vi.fn()
      const { send } = useApiRequest({ path: 'test/path', action, actionSuccess, actionError })

      expect(await send()).toEqual(response)

      expect(action).toHaveBeenCalledExactlyOnceWith(response)
      expect(actionSuccess).toHaveBeenCalledTimes(success ? 1 : 0)
      expect(actionError).toHaveBeenCalledTimes(success ? 0 : 1)
      expect(success ? actionSuccess : actionError).toHaveBeenCalledExactlyOnceWith(response)
    })

    it('should pass the transformed response to both callbacks', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ id: 1, success: true })
      const action = vi.fn()
      const actionSuccess = vi.fn()
      const actionError = vi.fn()
      const { send } = useApiRequest({
        path: 'test/path',
        transformation: (data: { id: number }): { id: number, name: string } => ({
          ...data,
          name: `User ${data.id}`
        }),
        action,
        actionSuccess,
        actionError
      })
      const response = { id: 1, success: true, name: 'User 1' }

      expect(await send()).toEqual(response)

      expect(action).toHaveBeenCalledExactlyOnceWith(response)
      expect(actionSuccess).toHaveBeenCalledExactlyOnceWith(response)
      expect(actionError).not.toHaveBeenCalled()
    })

    it('should report a failed response contract through action and actionError', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ id: 1, success: true })
      const validationResult = { id: 0, status: 'error' as const }
      const transformation = vi.fn((data: { id: number }) => data)
      const action = vi.fn()
      const actionSuccess = vi.fn()
      const actionError = vi.fn()
      const { send } = useApiRequest({
        path: 'test/path',
        validateResponseContract: () => validationResult,
        transformation,
        action,
        actionSuccess,
        actionError
      })

      expect(await send()).toEqual(validationResult)

      expect(action).toHaveBeenCalledExactlyOnceWith(validationResult)
      expect(actionError).toHaveBeenCalledExactlyOnceWith(validationResult)
      expect(actionSuccess).not.toHaveBeenCalled()
      expect(transformation).not.toHaveBeenCalled()
    })

    it('should report a failed request contract without invoking response callbacks or sending', async () => {
      const validationResult = { status: 'error' as const }
      const action = vi.fn()
      const actionSuccess = vi.fn()
      const actionError = vi.fn()
      const { send, loading } = useApiRequest({
        path: 'test/path',
        validateRequestContract: () => validationResult,
        action,
        actionSuccess,
        actionError
      })

      expect(await send({ name: '' })).toEqual(validationResult)

      expect(actionError).toHaveBeenCalledExactlyOnceWith(validationResult)
      expect(action).not.toHaveBeenCalled()
      expect(actionSuccess).not.toHaveBeenCalled()
      expect(mockApiInstance.request).not.toHaveBeenCalled()
      expect(loading.value).toBe(false)
    })

    it('should pass a transport exception to actionError without invoking response callbacks', async () => {
      const error = new Error('Network error')
      vi.mocked(mockApiInstance.request).mockRejectedValueOnce(error)
      const action = vi.fn()
      const actionSuccess = vi.fn()
      const actionError = vi.fn()
      const { send, loading } = useApiRequest({ path: 'test/path', action, actionSuccess, actionError })

      expect(await send()).toBeUndefined()

      expect(actionError).toHaveBeenCalledExactlyOnceWith(undefined, error)
      expect(action).not.toHaveBeenCalled()
      expect(actionSuccess).not.toHaveBeenCalled()
      expect(loading.value).toBe(false)
    })

    it('should preserve the absence of response callbacks when no response data is returned', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce(undefined)
      const action = vi.fn()
      const actionSuccess = vi.fn()
      const actionError = vi.fn()
      const { send } = useApiRequest({ path: 'test/path', action, actionSuccess, actionError })

      expect(await send()).toBeUndefined()

      expect(action).not.toHaveBeenCalled()
      expect(actionSuccess).not.toHaveBeenCalled()
      expect(actionError).not.toHaveBeenCalled()
    })

    it.each([true, false])('should await action before the matching asynchronous callback (success: %s)', async (success) => {
      const response = { success }
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce(response)
      let resolveAction!: () => void
      let resolveOutcome!: () => void
      const actionPromise = new Promise<void>((resolve) => {
        resolveAction = resolve
      })
      const outcomePromise = new Promise<void>((resolve) => {
        resolveOutcome = resolve
      })
      const action = vi.fn(() => actionPromise)
      const outcome = vi.fn(() => outcomePromise)
      const unexpected = vi.fn()
      const { send, loading } = useApiRequest({
        path: 'test/path',
        action,
        actionSuccess: success ? outcome : unexpected,
        actionError: success ? unexpected : outcome
      })
      let completed = false
      const pending = send().then((data) => {
        completed = true
        return data
      })
      await nextTick()

      expect(action).toHaveBeenCalledExactlyOnceWith(response)
      expect(outcome).not.toHaveBeenCalled()
      expect(loading.value).toBe(true)

      resolveAction()
      await nextTick()

      expect(outcome).toHaveBeenCalledExactlyOnceWith(response)
      expect(completed).toBe(false)
      expect(loading.value).toBe(true)

      resolveOutcome()
      expect(await pending).toEqual(response)
      expect(completed).toBe(true)
      expect(loading.value).toBe(false)
      expect(unexpected).not.toHaveBeenCalled()
    })

    it.each(['action', 'actionSuccess', 'actionError', 'transport actionError'] as const)(
      'should not dispatch another error callback when %s rejects', async (callback) => {
        const success = callback !== 'actionError'
        if (callback === 'transport actionError') {
          vi.mocked(mockApiInstance.request).mockRejectedValueOnce(new Error('Network error'))
        } else {
          vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ success })
        }
        const action = vi.fn()
        const actionSuccess = vi.fn()
        const actionError = vi.fn()
        const failingAction = callback === 'action'
          ? action
          : callback === 'actionSuccess' ? actionSuccess : actionError
        failingAction.mockRejectedValueOnce(new Error('Callback failed'))
        const { send, loading } = useApiRequest({ path: 'test/path', action, actionSuccess, actionError })

        expect(await send()).toBeUndefined()

        expect(failingAction).toHaveBeenCalledTimes(1)
        expect(actionError).toHaveBeenCalledTimes(callback.endsWith('actionError') ? 1 : 0)
        expect(loading.value).toBe(false)
      }
    )

    it.each([
      ['GET', useApiGet],
      ['POST', useApiPost],
      ['PUT', useApiPut],
      ['DELETE', useApiDelete]
    ] as const)('should forward all response callbacks through the %s wrapper', async (_, createRequest) => {
      const success = { success: true }
      const error = { success: false }
      vi.mocked(mockApiInstance.request)
        .mockResolvedValueOnce(success)
        .mockResolvedValueOnce(error)
      const action = vi.fn()
      const actionSuccess = vi.fn()
      const actionError = vi.fn()
      const { send } = createRequest({ path: 'test/path', action, actionSuccess, actionError })

      expect(await send()).toEqual(success)
      expect(await send()).toEqual(error)

      expect(action).toHaveBeenCalledTimes(2)
      expect(actionSuccess).toHaveBeenCalledExactlyOnceWith(success)
      expect(actionError).toHaveBeenCalledExactlyOnceWith(error)
    })
  })

  describe('error handling', () => {
    it('should handle API errors, log them, and reset the loading state', async () => {
      const error = new Error('Network error')
      vi.mocked(mockApiInstance.request).mockRejectedValueOnce(error)

      const { loading, send } = useApiRequest({ path: 'test/path' })

      const result = await send()

      expect(loading.value).toBe(false)
      expect(result).toBeUndefined()
    })
  })
})
