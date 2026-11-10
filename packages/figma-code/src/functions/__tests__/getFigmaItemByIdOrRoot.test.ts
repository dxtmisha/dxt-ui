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

  describe('Standard functional requirements (Happy path)', () => {
    it('should return node by ID when it exists', async () => {
      const mockNode = { id: 'item-1', name: 'Element', type: 'RECTANGLE' }
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)

      const result = await getFigmaItemByIdOrRoot('item-1')

      expect(result).toBe(mockNode)
      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('item-1')
    })

    it('should return figma.root when ID is omitted or undefined', async () => {
      expect(await getFigmaItemByIdOrRoot()).toBe(mockRoot)
      expect(await getFigmaItemByIdOrRoot(undefined)).toBe(mockRoot)
      expect(figma.getNodeByIdAsync).not.toHaveBeenCalled()
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return figma.root when ID is an empty string without querying figma', async () => {
      const result = await getFigmaItemByIdOrRoot('')

      expect(result).toBe(mockRoot)
      expect(figma.getNodeByIdAsync).not.toHaveBeenCalled()
    })

    it('should fallback to figma.root when node with given ID is not found (returns null)', async () => {
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(null)

      const result = await getFigmaItemByIdOrRoot('missing-id')

      expect(result).toBe(mockRoot)
      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('missing-id')
    })
  })

  describe('Figma ID format (colon notation)', () => {
    it('should query node using colon notation such as "123:456"', async () => {
      const colonNode = { id: '123:456', type: 'FRAME' }
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(colonNode as any)

      const result = await getFigmaItemByIdOrRoot('123:456')

      expect(result).toBe(colonNode)
    })
  })
})
