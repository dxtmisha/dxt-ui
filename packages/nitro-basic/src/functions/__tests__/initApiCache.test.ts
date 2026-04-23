import { describe, it, expect, vi, beforeEach } from 'vitest'
import { initApiCache } from '../initApiCache'
import { ApiCache } from '@dxtmisha/functional-basic'
import * as nitropack from 'nitropack/runtime'

vi.mock('nitropack/runtime', () => ({
  useStorage: vi.fn()
}))

describe('initApiCache', () => {
  const mockStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn()
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(nitropack.useStorage).mockReturnValue(mockStorage as any)
  })

  it('should initialize ApiCache with storage listeners', () => {
    initApiCache()

    const internal = ApiCache as any
    expect(internal.getListener).toBeDefined()
    expect(internal.setListener).toBeDefined()
    expect(internal.removeListener).toBeDefined()
  })

  it('should use nitropack storage to get items', async () => {
    initApiCache('custom-key')
    const getListener = (ApiCache as any).getListener

    mockStorage.getItem.mockResolvedValue({ data: 'test' })

    const result = await getListener('my-key')

    expect(nitropack.useStorage).toHaveBeenCalledWith('custom-key')
    expect(mockStorage.getItem).toHaveBeenCalledWith('Ui_ApiCache_my-key')
    expect(result).toEqual({ data: 'test' })
  })

  it('should use nitropack storage to set items', async () => {
    initApiCache()
    const setListener = (ApiCache as any).setListener
    const cacheItem = { data: 'val', expire: 123 } as any

    mockStorage.setItem.mockResolvedValue(undefined)

    const status = await setListener('my-key', cacheItem)

    expect(mockStorage.setItem).toHaveBeenCalledWith('Ui_ApiCache_my-key', cacheItem)
    expect(status).toBe(true)
  })

  it('should use nitropack storage to remove items', async () => {
    initApiCache()
    const removeListener = (ApiCache as any).removeListener

    mockStorage.removeItem.mockResolvedValue(undefined)

    const status = await removeListener('my-key')

    expect(mockStorage.removeItem).toHaveBeenCalledWith('Ui_ApiCache_my-key')
    expect(status).toBe(true)
  })
})
