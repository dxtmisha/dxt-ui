/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useApiManagementAsyncRef } from '../useApiManagementAsyncRef'
import { Api, type ApiInstance, isDomRuntime } from '@dxtmisha/functional-basic'

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal<any>()
  return {
    ...actual,
    isDomRuntime: vi.fn(() => true)
  }
})

describe('useApiManagementAsyncRef', () => {
  let mockApiInstance: ApiInstance
  let mockGetResponse: any

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(isDomRuntime).mockReturnValue(true)
    mockGetResponse = {
      emulatorAsync: vi.fn()
    }
    mockApiInstance = {
      request: vi.fn().mockResolvedValue({ data: 'default-response' }),
      getResponse: vi.fn().mockReturnValue(mockGetResponse)
    } as unknown as ApiInstance

    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
  })

  it('should initialize and return management object', async () => {
    const management = useApiManagementAsyncRef({ path: 'test/path' })

    expect(management).toBeDefined()
    expect(management.list).toBeDefined()
    expect(management.init).toBeDefined()
    expect(management.initSsr).toBeDefined()
  })

  it('should trigger initialization on data access', async () => {
    const management = useApiManagementAsyncRef({ path: 'test/path' })
    
    // Accessing list should trigger initialization of useApiRef inside
    expect(management.list.value).toBeUndefined()
    await nextTick()

    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
  })

  it('should handle mutation methods', async () => {
    const management = useApiManagementAsyncRef(
      { path: 'test/path' },
      undefined,
      undefined,
      { path: 'post/path' }
    )

    expect(management.sendPost).toBeDefined()
    
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ status: true })
    await management.sendPost({ name: 'test' })
    
    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ 
      path: 'post/path',
      method: 'POST'
    }))
  })
})
