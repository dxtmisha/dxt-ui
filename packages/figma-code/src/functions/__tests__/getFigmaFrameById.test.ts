import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getFigmaFrameById } from '../getFigmaFrameById'
import { FigmaFrame } from '../../classes/FigmaFrame'

describe('getFigmaFrameById', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      getNodeByIdAsync: vi.fn()
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should return FigmaFrame if node exists', async () => {
    const mockNode = { id: 'frame-1', type: 'FRAME' }
    vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)

    const result = await getFigmaFrameById('frame-1')
    expect(result).toBeInstanceOf(FigmaFrame)
    expect(result?.getItemsFrame()).toBeDefined()
  })

  it('should return undefined if node does not exist', async () => {
    vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(null)
    const result = await getFigmaFrameById('none')
    expect(result).toBeUndefined()
  })
})
