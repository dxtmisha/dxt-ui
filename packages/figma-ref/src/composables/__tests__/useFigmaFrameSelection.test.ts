import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFigmaFrameSelection } from '../useFigmaFrameSelection'
import { fetchFrameSelection, sendFrameSelection } from '@dxtmisha/figma'

vi.mock('@dxtmisha/figma', () => ({
  fetchFrameSelection: vi.fn(),
  sendFrameSelection: vi.fn()
}))

describe('useFigmaFrameSelection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset internal state if possible (start is module-level)
  })

  it('should fetch selection and return reactive properties', () => {
    let callback: (val: any) => void = () => {}
    vi.mocked(fetchFrameSelection).mockImplementation((cb) => {
      callback = cb
    })

    const { selection, loading, setSelection } = useFigmaFrameSelection()

    expect(fetchFrameSelection).toHaveBeenCalled()
    expect(loading.value).toBe(true)

    const mockFrames = [{ id: '1', name: 'Frame 1' }]
    callback(mockFrames)

    expect(selection.value).toEqual(mockFrames)
    expect(loading.value).toBe(false)

    setSelection('2')
    expect(sendFrameSelection).toHaveBeenCalledWith('2')
  })
})
