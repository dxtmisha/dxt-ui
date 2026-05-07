import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFigmaFrameStyles } from '../useFigmaFrameStyles'
import { fetchFrameStyles, sendFrameStyles } from '@dxtmisha/figma'

vi.mock('@dxtmisha/figma', () => ({
  fetchFrameStyles: vi.fn(),
  sendFrameStyles: vi.fn()
}))

describe('useFigmaFrameStyles', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch styles and provide send method', () => {
    let callback: (val: any) => void = () => {}
    vi.mocked(fetchFrameStyles).mockImplementation((cb) => {
      callback = cb
    })

    const { styles, send } = useFigmaFrameStyles()

    expect(fetchFrameStyles).toHaveBeenCalled()

    const mockData = [{ id: '1', data: [] }]
    callback(mockData)
    expect(styles.value).toEqual(mockData)

    send({ ids: ['2'], children: true })
    expect(sendFrameStyles).toHaveBeenCalledWith({ ids: ['2'], children: true })
  })
})
