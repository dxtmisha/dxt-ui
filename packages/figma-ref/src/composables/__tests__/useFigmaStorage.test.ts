import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFigmaStorage } from '../useFigmaStorage'
import { fetchStorage, sendStorage } from '@dxtmisha/figma'
import { nextTick } from 'vue'

vi.mock('@dxtmisha/figma', () => ({
  fetchStorage: vi.fn(),
  sendStorage: vi.fn()
}))

describe('useFigmaStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call fetchStorage and update item on callback', () => {
    let callback: (val: any) => void = () => {}
    vi.mocked(fetchStorage).mockImplementation((_, cb) => {
      callback = cb
    })

    const { item, loading } = useFigmaStorage('test', 'default', 'id-1')

    expect(fetchStorage).toHaveBeenCalled()
    expect(loading.value).toBe(true)

    callback('new-value')
    expect(item.value).toBe('new-value')
    expect(loading.value).toBe(false)
  })

  it('should call sendStorage when item changes', async () => {
    const { item } = useFigmaStorage<string>('test', undefined, 'id-1')
    item.value = 'updated'
    await nextTick()
    expect(sendStorage).toHaveBeenCalledWith('test', 'updated', 'id-1')
  })
})
