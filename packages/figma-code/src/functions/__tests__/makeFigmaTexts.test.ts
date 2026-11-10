import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FIGMA_MESSAGE_TEXTS } from '../../config'
import { FigmaFrame } from '../../classes/FigmaFrame'

const mockPost = vi.fn()
vi.mock('../../classes/FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost
    }))
  }
}))

import { makeFigmaTexts } from '../makeFigmaTexts'

describe('makeFigmaTexts', () => {
  let selectionCallback: (() => void) | undefined

  beforeEach(() => {
    selectionCallback = undefined
    vi.stubGlobal('figma', {
      on: vi.fn((event: string, callback: () => void) => {
        if (event === 'selectionchange') {
          selectionCallback = callback
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
    it('should register selectionchange listener on figma', () => {
      makeFigmaTexts()

      expect(figma.on).toHaveBeenCalledWith('selectionchange', expect.any(Function))
      expect(selectionCallback).toBeTypeOf('function')
    })

    it('should post texts and screenshots when selectionchange fires with populated selection', async () => {
      const mockTextNode = {
        id: 'text-node-1',
        name: 'Label',
        type: 'TEXT',
        characters: 'Привет мир',
        exportAsync: vi.fn().mockResolvedValue(new Uint8Array([10, 20]))
      }
      const mockFrame = {
        id: 'frame-1',
        name: 'Frame',
        type: 'FRAME',
        children: [mockTextNode],
        exportAsync: vi.fn().mockResolvedValue(new Uint8Array([1, 2]))
      }
      figma.currentPage.selection = [mockFrame as any]

      makeFigmaTexts()
      selectionCallback!()

      await new Promise(resolve => setTimeout(resolve, 15))

      expect(mockPost).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(
        FIGMA_MESSAGE_TEXTS,
        expect.objectContaining({
          frame: expect.any(FigmaFrame),
          texts: expect.arrayContaining([
            expect.objectContaining({ text: 'Привет мир', id: ['text-node-1'] })
          ]),
          screenshot: expect.any(Array)
        })
      )
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should post empty texts and screenshot arrays when selection is empty', async () => {
      figma.currentPage.selection = []

      makeFigmaTexts()
      selectionCallback!()

      await new Promise(resolve => setTimeout(resolve, 15))

      expect(mockPost).toHaveBeenCalledWith(
        FIGMA_MESSAGE_TEXTS,
        expect.objectContaining({
          texts: [],
          screenshot: []
        })
      )
    })
  })
})
