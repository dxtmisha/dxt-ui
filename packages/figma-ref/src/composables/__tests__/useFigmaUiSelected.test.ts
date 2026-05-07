import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFigmaUiSelected } from '../useFigmaUiSelected'
import { fetchFramesSelected, sendFramesSelected } from '@dxtmisha/figma'

vi.mock('@dxtmisha/figma', () => ({
  fetchFramesSelected: vi.fn(),
  sendFramesSelected: vi.fn()
}))

describe('useFigmaUiSelected', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should manage selected frame IDs', () => {
    let callback: (val: any) => void = () => {}
    vi.mocked(fetchFramesSelected).mockImplementation((cb) => {
      callback = cb
    })

    const { selected, loading, isSelected, toggleSelected } = useFigmaUiSelected()

    expect(fetchFramesSelected).toHaveBeenCalled()
    expect(loading.value).toBe(true)

    callback(['id-1', 'id-2'])
    expect(selected.value).toEqual(['id-1', 'id-2'])
    expect(loading.value).toBe(false)

    expect(isSelected('id-1').value).toBe(true)
    expect(isSelected('id-3').value).toBe(false)

    toggleSelected('id-3', true)
    expect(sendFramesSelected).toHaveBeenCalledWith('id-3', true)
  })
})
