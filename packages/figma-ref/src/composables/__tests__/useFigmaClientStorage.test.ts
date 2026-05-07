import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFigmaClientStorage } from '../useFigmaClientStorage'
import { fetchClientStorage, sendClientStorage } from '@dxtmisha/figma'
import { nextTick } from 'vue'

vi.mock('@dxtmisha/figma', () => ({
  fetchClientStorage: vi.fn(),
  sendClientStorage: vi.fn()
}))

describe('useFigmaClientStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call fetchClientStorage and update item on callback', async () => {
    let callback: (val: any) => void = () => {}
    vi.mocked(fetchClientStorage).mockImplementation((_, cb) => {
      callback = cb
    })

    const { item, loading } = useFigmaClientStorage('test', 'default')

    expect(fetchClientStorage).toHaveBeenCalled()
    expect(loading.value).toBe(true)

    callback('new-value')
    expect(item.value).toBe('new-value')
    expect(loading.value).toBe(false)
  })

  it('should call sendClientStorage when item changes', async () => {
    const { item } = useFigmaClientStorage('test')
    item.value = 'updated'
    await nextTick()
    expect(sendClientStorage).toHaveBeenCalledWith('test', 'updated')
  })
})
