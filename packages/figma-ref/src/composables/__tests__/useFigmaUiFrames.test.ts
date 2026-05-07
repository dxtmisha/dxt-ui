import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFigmaUiFrames } from '../useFigmaUiFrames'
import { fetchTopLevelFrames } from '@dxtmisha/figma'

vi.mock('@dxtmisha/figma', () => ({
  fetchTopLevelFrames: vi.fn()
}))

describe('useFigmaUiFrames', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch top level frames', () => {
    let callback: (val: any) => void = () => {}
    vi.mocked(fetchTopLevelFrames).mockImplementation((cb) => {
      callback = cb
    })

    const { frames, loading } = useFigmaUiFrames()

    expect(fetchTopLevelFrames).toHaveBeenCalled()
    expect(loading.value).toBe(true)

    const mockFrames = [{ id: '1', name: 'Root' }]
    callback(mockFrames)
    expect(frames.value).toEqual(mockFrames)
    expect(loading.value).toBe(false)
  })
})
