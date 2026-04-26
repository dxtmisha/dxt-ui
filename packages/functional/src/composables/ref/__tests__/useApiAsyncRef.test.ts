/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { useApiAsyncRef } from '../useApiAsyncRef'
import { Api, type ApiInstance, isDomRuntime } from '@dxtmisha/functional-basic'

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal<any>()
  return {
    ...actual,
    isDomRuntime: vi.fn(() => true)
  }
})

describe('useApiAsyncRef', () => {
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

    // Mock the default Api.getItem()
    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
  })

  it('should recover data from cache synchronously before async initialization', async () => {
    const cachedData = { data: 'cached' }
    mockGetResponse.emulatorAsync.mockReturnValue(cachedData)

    const result = useApiAsyncRef('test/path')

    // Data should be recovered immediately via recovery() call triggered by data.value access
    expect(result.data.value).toEqual(cachedData)
    expect(mockGetResponse.emulatorAsync).toHaveBeenCalled()

    await nextTick()

    // Subsequent async init should find data already present and NOT call request
    expect(mockApiInstance.request).not.toHaveBeenCalled()
  })

  it('should initialize and execute request immediately (async)', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ data: 'async-data' })

    const { data } = useApiAsyncRef('test/path')

    // Access data to trigger init via computed
    expect(data.value).toBeUndefined()
    await nextTick()

    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
    expect(data.value).toEqual({ data: 'async-data' })
  })

  it('should pass correct parameters and execute request', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ data: 'await-fetch-data' })

    const item = useApiAsyncRef('test/path')
    await item.init()

    expect(mockApiInstance.request).toHaveBeenCalled()
    expect(item.data.value).toEqual({ data: 'await-fetch-data' })
  })

  it('should respect conditions', async () => {
    const conditions = ref(false)
    const { data } = useApiAsyncRef('test/path', {}, true, conditions)

    expect(data.value).toBeUndefined()
    await nextTick()

    expect(mockApiInstance.request).not.toHaveBeenCalled()
    expect(data.value).toBeUndefined()

    conditions.value = true
    await nextTick()
    expect(mockApiInstance.request).toHaveBeenCalled()
  })

  it('should use provided custom apiInstance', async () => {
    const customGetResponse = { emulatorAsync: vi.fn() }
    const customInstance = {
      request: vi.fn().mockResolvedValue({ data: 'custom' }),
      getResponse: vi.fn().mockReturnValue(customGetResponse),
      getItem: vi.fn() // Just in case it's used
    } as unknown as ApiInstance

    const item = useApiAsyncRef(
      'test/path',
      {},
      true,
      undefined,
      undefined,
      undefined,
      true,
      customInstance
    )

    await item.init()

    expect(customInstance.request).toHaveBeenCalled()
    expect(mockApiInstance.request).not.toHaveBeenCalled()
    expect(item.data.value).toEqual({ data: 'custom' })
  })

  it('should handle transformation', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ value: 10 })
    const transformation = (data: any) => ({ doubled: data.value * 2 })

    const item = useApiAsyncRef(
      'test/path',
      {},
      true,
      undefined,
      transformation
    )

    item.init()
    await nextTick()

    expect(item.data.value).toEqual({ doubled: 20 })
  })
})
