/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
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

  it('should send a DELETE request', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ success: true })

    const { send } = useApiDelete({ path: 'test/path' })
    await send()

    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({
      path: 'test/path',
      method: ApiMethodItem.delete
    }))
  })
})
