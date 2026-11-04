/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ref } from 'vue'
import { useApiPost } from '../useApiPost'
import { Api, ApiMethodItem, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiPost', () => {
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
    const { loading, send } = useApiPost({ path: 'test/path' })

    expect(loading.value).toBe(false)
    expect(typeof send).toBe('function')
  })

  it('should send a POST request', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ success: true })

    const { send } = useApiPost({ path: 'test/path' })
    const result = await send({ data: 'test' })

    expect(result).toEqual({ success: true })
    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'test/path',
      method: ApiMethodItem.post,
      request: { data: 'test' }
    }))
  })

  it('should support reactive path and custom apiInstance', async () => {
    const customInstance = { request: vi.fn().mockResolvedValueOnce({ id: 99 }) } as unknown as ApiInstance
    const path = ref('items/create')

    const { send } = useApiPost({
      path,
      options: { headers: { 'X-Post': '1' } },
      apiInstance: customInstance
    })

    path.value = 'items/batch'
    const result = await send({ name: 'Item' })

    expect(result).toEqual({ id: 99 })
    expect(customInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'items/batch',
      method: ApiMethodItem.post,
      headers: { 'X-Post': '1' }
    }))
    expect(mockApiInstance.request).not.toHaveBeenCalled()
  })

  it('should apply transformation and invoke callbacks', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ id: 1, success: true })
    const action = vi.fn()
    const actionSuccess = vi.fn()

    const { send } = useApiPost({
      path: 'test/path',
      transformation: (data: { id: number, success: boolean }) => ({ ...data, created: true }),
      action,
      actionSuccess
    })

    const result = await send({ title: 'New' })

    expect(result).toEqual({ id: 1, success: true, created: true })
    expect(action).toHaveBeenCalledWith({ id: 1, success: true, created: true })
    expect(actionSuccess).toHaveBeenCalledWith({ id: 1, success: true, created: true })
  })
})
