import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { toFrameSelection } from '../toFrameSelection'
import { FigmaItem } from '../../classes/FigmaItem'

describe('toFrameSelection', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      getNodeByIdAsync: vi.fn()
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should call toPageAndSelection if item exists', async () => {
    const mockToPageAndSelection = vi.fn()
    const mockNode = { id: 'frame-1' }

    vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)
    vi.spyOn(FigmaItem.prototype, 'toPageAndSelection').mockImplementation(mockToPageAndSelection)

    await toFrameSelection('frame-1')
    expect(mockToPageAndSelection).toHaveBeenCalled()
  })

  it('should do nothing if id is missing', async () => {
    await toFrameSelection()
    expect(figma.getNodeByIdAsync).not.toHaveBeenCalled()
  })
})
