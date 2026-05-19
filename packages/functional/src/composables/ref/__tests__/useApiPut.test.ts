/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useApiPut } from '../useApiPut'
import { Api, ApiMethodItem, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiPut', () => {
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

  it('should initialize with default states', () => {
    const { loading, send } = useApiPut({ path: 'test/path' })

    expect(loading.value).toBe(false)
    expect(typeof send).toBe('function')
  })

  it('should send a PUT request', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ success: true })

    const { send } = useApiPut({ path: 'test/path' })
    await send({ id: 1 })

    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'test/path',
      method: ApiMethodItem.put,
      request: { id: 1 }
    }))
  })

  it('should handle custom options and apiInstance', async () => {
    const customInstance = { request: vi.fn() } as unknown as ApiInstance
    vi.mocked(customInstance.request).mockResolvedValueOnce({ success: true })

    const { send } = useApiPut({
      path: 'test/path',
      toData: true,
      options: { headers: { 'X-Test': 'true' } },
      apiInstance: customInstance
    })
    await send()

    expect(customInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'test/path',
      method: ApiMethodItem.put,
      headers: { 'X-Test': 'true' }
    }))
    expect(mockApiInstance.request).not.toHaveBeenCalled()
  })

  it('should apply transformation', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ raw: 'data' })
    const transformation = (data: any) => ({ transformed: data.raw })

    const { send } = useApiPut({ path: 'test/path', transformation })
    const result = await send()

    expect(result).toEqual({ transformed: 'data' })
  })

  it('should call action callback', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ id: 123 })
    const actionSpy = vi.fn()

    const { send } = useApiPut({ path: 'test/path', action: actionSpy })
    await send()

    expect(actionSpy).toHaveBeenCalledWith({ id: 123 })
  })
})
