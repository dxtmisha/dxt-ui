/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
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

  it('should send a GET request', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ success: true })

    const { send } = useApiGet({ path: 'test/path' })
    await send()

    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'test/path',
      method: ApiMethodItem.get
    }))
  })
})
