import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getFigmaItemByIdOrRoot } from '../getFigmaItemByIdOrRoot'

describe('getFigmaItemByIdOrRoot', () => {
  const mockRoot = { id: 'root', type: 'DOCUMENT' }

  beforeEach(() => {
    vi.stubGlobal('figma', {
      root: mockRoot,
      getNodeByIdAsync: vi.fn()
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should return node by ID if it exists', async () => {
    const mockNode = { id: 'item-1', type: 'RECTANGLE' }
    vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)

    const result = await getFigmaItemByIdOrRoot('item-1')
    expect(result).toBe(mockNode)
  })

  it('should return figma.root if ID is not provided', async () => {
    const result = await getFigmaItemByIdOrRoot()
    expect(result).toBe(mockRoot)
  })

  it('should return figma.root if node by ID is not found', async () => {
    vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(null)
    const result = await getFigmaItemByIdOrRoot('none')
    expect(result).toBe(mockRoot)
  })
})
