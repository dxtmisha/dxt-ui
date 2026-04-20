/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useApiManagementRef } from '../useApiManagementRef'
import { Api, ApiMethodItem, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiManagementRef', () => {
  let mockApiInstance: ApiInstance

  beforeEach(() => {
    vi.clearAllMocks()
    mockApiInstance = {
      request: vi.fn()
    } as unknown as ApiInstance

    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
  })

  describe('GET Initialization and skeleton', () => {
    it('should return skeleton data while starting', async () => {
      const { list, starting } = useApiManagementRef({
        path: 'test/path',
        skeleton: () => 'SKELETON' as any
      })

      expect(starting.value).toBe(true)
      expect(list.value).toBe('SKELETON')
    })

    it('should return API data after fetching via apiInstance', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ data: 'MOCK_DATA' })

      const { data, starting, list } = useApiManagementRef({
        path: 'test/path'
      })

      expect(data.value).toBeUndefined()
      expect(list.value).toBeUndefined()

      await new Promise(r => setTimeout(r, 0))

      expect(starting.value).toBe(false)
      expect(data.value).toEqual({ data: 'MOCK_DATA' })
      expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
    })

    it('should use custom apiInstance for GET requests', async () => {
      const customInstance = { request: vi.fn() } as unknown as ApiInstance
      vi.mocked(customInstance.request).mockResolvedValueOnce({ data: 'custom' })

      const { data } = useApiManagementRef({ path: 'test/get' }, undefined, undefined, undefined, undefined, undefined, undefined, customInstance)

      expect(data.value).toBeUndefined()
      await new Promise(r => setTimeout(r, 0))

      expect(customInstance.request).toHaveBeenCalled()
      expect(mockApiInstance.request).not.toHaveBeenCalled()
    })
  })

  describe('Mutations (POST, PUT, DELETE) propagation', () => {
    it('should propagate custom apiInstance to mutation hooks', async () => {
      const customInstance = { request: vi.fn() } as unknown as ApiInstance
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
        customInstance
      )

      // Trigger init
      expect(list.value).toBeUndefined()
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

  describe('Validation and isValid', () => {
    it('should return isValid true if typeData is not provided', () => {
      const { isValid } = useApiManagementRef({
        path: 'test/path'
      })
      expect(isValid.value).toBe(true)
    })

    it('should return isValid based on typeData check', async () => {
      vi.mocked(mockApiInstance.request).mockResolvedValueOnce('NOT_A_NUMBER')

      const { isValid, list } = useApiManagementRef({
        path: 'test/path',
        typeData: (data: any) => typeof data === 'number'
      })

      // trigger fetch
      expect(list.value).toBeUndefined()
      await new Promise(r => setTimeout(r, 0))

      expect(isValid.value).toBe(false)
      expect(list.value).toBe('NOT_A_NUMBER')
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
      await new Promise(r => setTimeout(r, 0))

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
          options: { limit: 1 } // Set limit to 1 so '1' triggers search
        }
      )

      // trigger fetch
      expect(list.value).toBeUndefined()
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
      await new Promise(r => setTimeout(r, 0))

      await sendPost()

      expect(action).toHaveBeenCalled()
      expect(mockApiInstance.request).toHaveBeenCalledTimes(3) // GET, POST, GET(reset)
    })
  })
})
import { ref } from 'vue'
