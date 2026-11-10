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

  describe('Standard functional requirements (Happy path)', () => {
    it('should return FigmaFrame wrapping retrieved node when node exists', async () => {
      const mockNode = { id: 'frame-42', name: 'Dashboard', type: 'FRAME', children: [] }
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)

      const result = await getFigmaFrameById('frame-42')

      expect(result).toBeInstanceOf(FigmaFrame)
      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('frame-42')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return undefined without querying figma API when id is omitted or empty', async () => {
      expect(await getFigmaFrameById()).toBeUndefined()
      expect(await getFigmaFrameById(undefined)).toBeUndefined()
      expect(await getFigmaFrameById('')).toBeUndefined()
      expect(figma.getNodeByIdAsync).not.toHaveBeenCalled()
    })

    it('should return undefined when node is not found in figma', async () => {
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(null)

      const result = await getFigmaFrameById('missing-node')

      expect(result).toBeUndefined()
      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('missing-node')
    })

    it('should propagate rejection when figma API throws', async () => {
      vi.mocked(figma.getNodeByIdAsync).mockRejectedValue(new Error('Network error'))

      await expect(getFigmaFrameById('error-id')).rejects.toThrow('Network error')
    })
  })

  describe('Special characters and IDs format', () => {
    it('should query node using colon notation such as "12:34"', async () => {
      const mockNode = { id: '12:34', type: 'FRAME', children: [] }
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)

      const result = await getFigmaFrameById('12:34')

      expect(result).toBeInstanceOf(FigmaFrame)
      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('12:34')
    })
  })
})
