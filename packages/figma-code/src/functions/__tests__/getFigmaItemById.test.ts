import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getFigmaItemById } from '../getFigmaItemById'
import { FigmaItem } from '../../classes/FigmaItem'

describe('getFigmaItemById', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      getNodeByIdAsync: vi.fn()
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should return FigmaItem if node exists', async () => {
    const mockNode = { id: 'item-1', type: 'RECTANGLE' }
    vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)

    const result = await getFigmaItemById('item-1')
    expect(result).toBeInstanceOf(FigmaItem)
    expect(result?.getId()).toBe('item-1')
  })

  it('should return undefined if node does not exist', async () => {
    vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(null)
    const result = await getFigmaItemById('none')
    expect(result).toBeUndefined()
  })
})
