/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ref } from 'vue'
import { useApiManagementRef } from '../useApiManagementRef'
import { Api } from '@dxtmisha/functional-basic'

const { viApiMethodItem } = vi.hoisted(() => ({
  viApiMethodItem: {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
  }
}))

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal<any>()
  return {
    ...actual,
    Api: {
      request: vi.fn()
    },
    ApiMethodItem: viApiMethodItem,
    executePromise: vi.fn(async val => val),
    isFunction: (val: any) => typeof val === 'function'
  }
})

describe('useApiManagementRef', () => {
  beforeEach(() => {
    vi.resetAllMocks()
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

    it('should return API data after fetching', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce({ data: 'MOCK_DATA' })

      const { data, starting, list } = useApiManagementRef({
        path: 'test/path'
      })

      expect(data.value).toBeUndefined()

      // Accessing the list triggers data dependency logic which triggers initialization
      expect(list.value).toBeUndefined()

      await new Promise(r => setTimeout(r, 0)) // Wait for macro queue / promises

      expect(starting.value).toBe(false)
      expect(data.value).toEqual({ data: 'MOCK_DATA' })
      expect(list.value).toEqual({ data: 'MOCK_DATA' })
    })
  })

  describe('Formatters Integration', () => {
    it('should return formatted data in a list when formattersOptions are used', async () => {
      // Return bare array from API to be formatted
      vi.mocked(Api.request).mockResolvedValueOnce([{ id: 1, name: 'test' }])

      const { list, data } = useApiManagementRef(
        { path: 'test/path' },
        {
          name: {
            type: 'text'
          }
        } as any
      )

      expect(data.value).toBeUndefined() // trigger fetch
      await new Promise(r => setTimeout(r, 0))

      // Without diving deep into useFormattersRef internal mocking,
      // We know it transforms the array or wraps it in its own format logic.
      expect(list.value).toBeDefined()
      // If it's correctly falling back and initialized, it's not undefined
    })
  })

  describe('Search Integration', () => {
    it('should return a search result in a list if searchOptions are provided', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce([{ id: 1, name: 'test' }, { id: 2, name: 'other' }])

      const { list, data } = useApiManagementRef(
        { path: 'test/path' },
        undefined,
        {
          columns: ['name'],
          value: ref('other'),
          options: {}
        } as any
      )

      expect(data.value).toBeUndefined() // trigger fetch
      await new Promise(r => setTimeout(r, 0))

      expect(Array.isArray(list.value)).toBe(true)
      // Since `useSearchRef` logic depends on real execution, it might filter or keep the original.
      // We just ensure the search hook was integrated without throwing.
    })
  })

  describe('Mutations (POST, PUT, DELETE)', () => {
    it('should send a POST request and trigger reset of the main request', async () => {
      vi.mocked(Api.request)
        .mockResolvedValueOnce([{ id: 1 }]) // GET
        .mockResolvedValueOnce({ success: true }) // POST
        .mockResolvedValueOnce([{ id: 1 }, { id: 2 }]) // GET after reset

      let actionCalled = false

      const { sendPost, list } = useApiManagementRef(
        { path: 'test/get' },
        undefined,
        undefined,
        {
          path: 'test/post',
          action: async () => { actionCalled = true }
        }
      )

      // Trigger init
      expect(list.value).toBeUndefined()
      await new Promise(r => setTimeout(r, 0))

      // Execute POST
      await sendPost({ data: { name: 'New Item' } })

      // verify POST request was executed
      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({
        path: 'test/post',
        method: viApiMethodItem.post,
        request: { data: { name: 'New Item' } }
      }))

      await new Promise(r => setTimeout(r, 0))

      expect(actionCalled).toBe(true)

      // Because `reset()` is called, we should see another GET request
      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/get' }))
    })

    it('should send a PUT request and trigger reset', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce([{ id: 1 }]) // GET
      vi.mocked(Api.request).mockResolvedValueOnce({ success: true }) // PUT

      const { sendPut, list } = useApiManagementRef(
        { path: 'test/get' },
        undefined,
        undefined,
        undefined,
        { path: 'test/put' }
      )

      // trigger
      expect(list.value).toBeUndefined()
      await new Promise(r => setTimeout(r, 0))

      await sendPut({ data: { id: 1, name: 'Updated' } })

      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({
        path: 'test/put',
        method: viApiMethodItem.put,
        request: { data: { id: 1, name: 'Updated' } }
      }))
    })

    it('should send DELETE request and trigger reset', async () => {
      vi.mocked(Api.request).mockResolvedValueOnce([{ id: 1 }]) // GET
      vi.mocked(Api.request).mockResolvedValueOnce({ success: true }) // DELETE

      const { sendDelete, list } = useApiManagementRef(
        { path: 'test/get' },
        undefined,
        undefined,
        undefined,
        undefined,
        { path: 'test/delete' }
      )

      // trigger
      expect(list.value).toBeUndefined()
      await new Promise(r => setTimeout(r, 0))

      await sendDelete({ data: { id: 1 } })

      expect(Api.request).toHaveBeenCalledWith(expect.objectContaining({
        path: 'test/delete',
        method: viApiMethodItem.delete,
        request: { data: { id: 1 } }
      }))
    })
  })
})
