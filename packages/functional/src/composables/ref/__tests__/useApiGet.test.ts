/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ref } from 'vue'
import { useApiGet } from '../useApiGet'
import { Api, ApiMethodItem, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiGet', () => {
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
    const { loading, send } = useApiGet({ path: 'test/path' })

    expect(loading.value).toBe(false)
    expect(typeof send).toBe('function')
  })

  it('should send a GET request with query parameters', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ success: true })

    const { send } = useApiGet({ path: 'test/path' })
    const result = await send({ page: 2 })

    expect(result).toEqual({ success: true })
    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'test/path',
      method: ApiMethodItem.get,
      request: { page: 2 }
    }))
  })

  it('should support reactive path and custom apiInstance', async () => {
    const customInstance = { request: vi.fn().mockResolvedValueOnce([{ id: 1 }]) } as unknown as ApiInstance
    const path = ref('users/active')

    const { send } = useApiGet({
      path,
      options: { headers: { 'X-Get': '1' } },
      apiInstance: customInstance
    })

    path.value = 'users/archived'
    const result = await send()

    expect(result).toEqual([{ id: 1 }])
    expect(customInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'users/archived',
      method: ApiMethodItem.get,
      headers: { 'X-Get': '1' }
    }))
    expect(mockApiInstance.request).not.toHaveBeenCalled()
  })

  it('should apply transformation and invoke callbacks', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ name: '  Alice  ', success: true })
    const action = vi.fn()
    const actionSuccess = vi.fn()

    const { send } = useApiGet({
      path: 'test/path',
      transformation: (data: { name: string, success: boolean }) => ({ ...data, name: data.name.trim() }),
      action,
      actionSuccess
    })

    const result = await send()

    expect(result).toEqual({ name: 'Alice', success: true })
    expect(action).toHaveBeenCalledWith({ name: 'Alice', success: true })
    expect(actionSuccess).toHaveBeenCalledWith({ name: 'Alice', success: true })
  })
})
