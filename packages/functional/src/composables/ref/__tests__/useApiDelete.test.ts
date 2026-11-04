/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ref } from 'vue'
import { useApiDelete } from '../useApiDelete'
import { Api, ApiMethodItem, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiDelete', () => {
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

  it('should initialize with loading false and send method', () => {
    const { loading, send } = useApiDelete({ path: 'test/path' })

    expect(loading.value).toBe(false)
    expect(typeof send).toBe('function')
  })

  it('should send a DELETE request with payload', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ success: true })

    const { send } = useApiDelete({ path: 'test/path' })
    const result = await send({ id: 10 })

    expect(result).toEqual({ success: true })
    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'test/path',
      method: ApiMethodItem.delete,
      request: { id: 10 }
    }))
  })

  it('should support reactive path and custom apiInstance', async () => {
    const customInstance = { request: vi.fn().mockResolvedValueOnce({ deleted: true }) } as unknown as ApiInstance
    const path = ref('items/1')

    const { send } = useApiDelete({
      path,
      options: { headers: { 'X-Delete': '1' } },
      apiInstance: customInstance
    })

    path.value = 'items/2'
    const result = await send()

    expect(result).toEqual({ deleted: true })
    expect(customInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'items/2',
      method: ApiMethodItem.delete,
      headers: { 'X-Delete': '1' }
    }))
    expect(mockApiInstance.request).not.toHaveBeenCalled()
  })

  it('should apply transformation and invoke callbacks', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ id: 5, success: true })
    const action = vi.fn()
    const actionSuccess = vi.fn()

    const { send } = useApiDelete({
      path: 'test/path',
      transformation: (data: { id: number, success: boolean }) => ({ ...data, removed: true }),
      action,
      actionSuccess
    })

    const result = await send()

    expect(result).toEqual({ id: 5, success: true, removed: true })
    expect(action).toHaveBeenCalledWith({ id: 5, success: true, removed: true })
    expect(actionSuccess).toHaveBeenCalledWith({ id: 5, success: true, removed: true })
  })
})
