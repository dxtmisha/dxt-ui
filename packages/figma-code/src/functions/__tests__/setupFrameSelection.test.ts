import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { UI_FIGMA_FRAME_SET_SELECTION } from '@dxtmisha/figma'

const mockAdd = vi.fn()
vi.mock('../../classes/FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      add: mockAdd,
      post: vi.fn()
    }))
  }
}))

const mockToFrameSelection = vi.fn().mockResolvedValue(undefined)
vi.mock('../toFrameSelection', () => ({
  toFrameSelection: (id?: string) => mockToFrameSelection(id)
}))

import { setupFrameSelection } from '../setupFrameSelection'

describe('setupFrameSelection', () => {
  let callback: ((data: { id?: string }) => Promise<void>) | undefined

  beforeEach(() => {
    callback = undefined
    vi.stubGlobal('figma', {
      on: vi.fn(),
      currentPage: { id: 'page-1', selection: [] }
    })
    mockAdd.mockClear()
    mockToFrameSelection.mockClear()

    mockAdd.mockImplementation((type: string, cb: (data: { id?: string }) => Promise<void>) => {
      if (type === UI_FIGMA_FRAME_SET_SELECTION) {
        callback = cb
      }
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize automatic selection tracking and register messenger listener', () => {
      setupFrameSelection()

      expect(figma.on).toHaveBeenCalledWith('selectionchange', expect.any(Function))
      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_FRAME_SET_SELECTION, expect.any(Function))
    })

    it('should delegate selection request with ID to toFrameSelection', async () => {
      setupFrameSelection()

      await callback!({ id: 'frame-999' })

      expect(mockToFrameSelection).toHaveBeenCalledWith('frame-999')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should pass undefined or empty id to toFrameSelection safely', async () => {
      setupFrameSelection()

      await callback!({ id: undefined })
      expect(mockToFrameSelection).toHaveBeenCalledWith(undefined)

      await callback!({ id: '' })
      expect(mockToFrameSelection).toHaveBeenCalledWith('')
    })
  })
})
