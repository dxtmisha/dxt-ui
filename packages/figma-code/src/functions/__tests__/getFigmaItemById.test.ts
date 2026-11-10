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

  describe('Standard functional requirements (Happy path)', () => {
    it('should return FigmaItem wrapping retrieved node when node exists', async () => {
      const mockNode = { id: 'frame-123:456', name: 'Header', type: 'FRAME' }
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)

      const result = await getFigmaItemById('frame-123:456')

      expect(result).toBeInstanceOf(FigmaItem)
      expect(result?.getId()).toBe('frame-123:456')
      expect(result?.getName()).toBe('Header')
      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('frame-123:456')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return undefined without invoking figma API when id is empty or undefined', async () => {
      expect(await getFigmaItemById(undefined)).toBeUndefined()
      expect(await getFigmaItemById('')).toBeUndefined()
      expect(figma.getNodeByIdAsync).not.toHaveBeenCalled()
    })

    it('should return undefined when figma API returns null or undefined', async () => {
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(null)
      expect(await getFigmaItemById('non-existent')).toBeUndefined()

      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(undefined as any)
      expect(await getFigmaItemById('non-existent-2')).toBeUndefined()
    })
  })

  describe('Special characters and IDs format', () => {
    it('should query figma correctly with standard Figma ID format (colon notation: "0:1", "123:456")', async () => {
      const mockNode = { id: '0:1', type: 'PAGE' }
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)

      const result = await getFigmaItemById('0:1')

      expect(result?.getId()).toBe('0:1')
      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('0:1')
    })
  })
})
