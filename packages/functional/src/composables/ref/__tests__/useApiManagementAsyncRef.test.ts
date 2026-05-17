/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useApiManagementAsyncRef } from '../useApiManagementAsyncRef'
import { Api, type ApiInstance, isDomRuntime } from '@dxtmisha/functional-basic'
import type { ApiManagementGet } from '../../../types/apiTypes'

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

  it('should apply formatters and search', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValue([
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' }
    ])

    const management = useApiManagementAsyncRef(
      { path: 'test/path' } as ApiManagementGet<{ id: number, name: string }>,
      { name: { transformation: (v: string) => `Fruit: ${v}` } },
      { columns: ['nameFormat'] as any }
    )

    // Trigger initialization by accessing list (lazy in DOM)
    expect(management.list.value).toBeUndefined()
    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))

    await nextTick()
    await new Promise(r => setTimeout(r, 0))

    expect(management.list.value).toHaveLength(2)
    expect(management.list.value![0].nameFormat).toBe('Fruit: Apple')

    management.search.value = 'Banana'
    await nextTick()
    expect(management.list.value).toHaveLength(1)
    expect(management.list.value![0].name).toBe('Banana')
  })
})
