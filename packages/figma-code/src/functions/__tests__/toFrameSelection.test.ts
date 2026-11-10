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

  describe('Standard functional requirements (Happy path)', () => {
    it('should navigate to page and select node when item exists', async () => {
      const mockToPageAndSelection = vi.fn().mockResolvedValue(undefined)
      const mockNode = { id: 'frame-100', type: 'FRAME' }

      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)
      vi.spyOn(FigmaItem.prototype, 'toPageAndSelection').mockImplementation(mockToPageAndSelection)

      await toFrameSelection('frame-100')

      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('frame-100')
      expect(mockToPageAndSelection).toHaveBeenCalledTimes(1)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should be a safe no-op when id is omitted or undefined', async () => {
      await toFrameSelection()
      await toFrameSelection(undefined)

      expect(figma.getNodeByIdAsync).not.toHaveBeenCalled()
    })

    it('should be a safe no-op when id is an empty string', async () => {
      await toFrameSelection('')

      expect(figma.getNodeByIdAsync).not.toHaveBeenCalled()
    })

    it('should safely do nothing when node is not found', async () => {
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(null)
      const spy = vi.spyOn(FigmaItem.prototype, 'toPageAndSelection')

      await toFrameSelection('non-existent-id')

      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('non-existent-id')
      expect(spy).not.toHaveBeenCalled()
    })

    it('should propagate rejection when toPageAndSelection fails', async () => {
      const mockNode = { id: 'frame-err', type: 'FRAME' }
      vi.mocked(figma.getNodeByIdAsync).mockResolvedValue(mockNode as any)
      vi.spyOn(FigmaItem.prototype, 'toPageAndSelection').mockRejectedValue(new Error('Navigation failed'))

      await expect(toFrameSelection('frame-err')).rejects.toThrow('Navigation failed')
    })
  })
})
