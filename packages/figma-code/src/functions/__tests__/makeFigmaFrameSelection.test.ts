import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { UI_FIGMA_FRAME_GET_SELECTION } from '@dxtmisha/figma'

const mockPost = vi.fn()
vi.mock('../../classes/FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost
    }))
  }
}))

import { makeFigmaFrameSelection } from '../makeFigmaFrameSelection'

describe('makeFigmaFrameSelection', () => {
  let selectionChangeCallback: (() => void) | undefined

  beforeEach(() => {
    selectionChangeCallback = undefined
    vi.stubGlobal('figma', {
      on: vi.fn((event: string, callback: () => void) => {
        if (event === 'selectionchange') {
          selectionChangeCallback = callback
        }
      }),
      currentPage: { id: 'page-1', selection: [] }
    })
    mockPost.mockClear()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should register selectionchange listener on figma and dispatch initial selection', async () => {
      makeFigmaFrameSelection()

      expect(figma.on).toHaveBeenCalledWith('selectionchange', expect.any(Function))

      // Wait for asynchronous sendMessenger resolution
      await new Promise(resolve => setTimeout(resolve, 10))

      expect(mockPost).toHaveBeenCalledWith(
        UI_FIGMA_FRAME_GET_SELECTION,
        expect.any(Array)
      )
      expect(mockPost).toHaveBeenCalledTimes(1)
    })

    it('should dispatch updated selection whenever selectionchange event fires', async () => {
      makeFigmaFrameSelection()
      await new Promise(resolve => setTimeout(resolve, 10))
      expect(mockPost).toHaveBeenCalledTimes(1)

      expect(selectionChangeCallback).toBeTypeOf('function')

      // Simulate user selecting an item in Figma
      const mockNode = {
        id: 'selected-1',
        name: 'Selected Frame',
        type: 'FRAME',
        exportAsync: vi.fn().mockResolvedValue(new Uint8Array([1, 2]))
      }
      figma.currentPage.selection = [mockNode as any]

      selectionChangeCallback!()
      await new Promise(resolve => setTimeout(resolve, 10))

      expect(mockPost).toHaveBeenCalledTimes(2)
      expect(mockPost).toHaveBeenLastCalledWith(
        UI_FIGMA_FRAME_GET_SELECTION,
        expect.arrayContaining([
          expect.objectContaining({ id: 'selected-1', name: 'Selected Frame' })
        ])
      )
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should post empty array when current selection is empty', async () => {
      figma.currentPage.selection = []

      makeFigmaFrameSelection()
      await new Promise(resolve => setTimeout(resolve, 10))

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAME_GET_SELECTION, [])
    })
  })
})
