import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FIGMA_FRAME_STYLES_MESSENGER_NAME } from '@dxtmisha/figma'

const mockAdd = vi.fn()
const mockPost = vi.fn()
vi.mock('../../classes/FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      add: mockAdd,
      post: mockPost
    }))
  }
}))

vi.mock('../getFigmaFrameById', () => ({
  getFigmaFrameById: vi.fn().mockImplementation((id: string) => {
    if (id === 'frame-1') {
      return Promise.resolve({
        getItemsStyles: vi.fn().mockResolvedValue([{ id: 'frame-1', styles: { color: 'red' } }]),
        getMainItemsStyles: vi.fn().mockResolvedValue([{ id: 'frame-1', styles: { color: 'blue' } }])
      })
    }
    return Promise.resolve(undefined)
  })
}))

import { setupFrameStyles } from '../setupFrameStyles'

describe('setupFrameStyles', () => {
  let callback: ((data: any) => Promise<void>) | undefined

  beforeEach(() => {
    mockAdd.mockClear()
    mockPost.mockClear()
    callback = undefined

    mockAdd.mockImplementation((name: string, cb: (data: any) => Promise<void>) => {
      if (name === FIGMA_FRAME_STYLES_MESSENGER_NAME) {
        callback = cb
      }
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should register listener for FIGMA_FRAME_STYLES_MESSENGER_NAME', () => {
      setupFrameStyles()

      expect(mockAdd).toHaveBeenCalledTimes(1)
      expect(mockAdd).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, expect.any(Function))
    })

    it('should fetch styles for multiple frame IDs and post response', async () => {
      setupFrameStyles()

      await callback!({ ids: ['frame-1', 'missing-frame'], children: true })

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, [
        { id: 'frame-1', data: [{ id: 'frame-1', styles: { color: 'red' } }] },
        { id: 'missing-frame', data: [] }
      ])
    })

    it('should query main items styles when children is explicitly false', async () => {
      setupFrameStyles()

      await callback!({ ids: ['frame-1'], children: false })

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, [
        { id: 'frame-1', data: [{ id: 'frame-1', styles: { color: 'blue' } }] }
      ])
    })

    it('should default children to true when children parameter is omitted', async () => {
      setupFrameStyles()

      await callback!({ ids: ['frame-1'] })

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, [
        { id: 'frame-1', data: [{ id: 'frame-1', styles: { color: 'red' } }] }
      ])
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle single string ID (non-array ids)', async () => {
      setupFrameStyles()

      await callback!({ ids: 'frame-1' as any })

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, [
        { id: 'frame-1', data: [{ id: 'frame-1', styles: { color: 'red' } }] }
      ])
    })

    it('should handle empty ids array with empty response payload', async () => {
      setupFrameStyles()

      await callback!({ ids: [] })

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, [])
    })
  })
})
