import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { UI_FIGMA_FRAMES_POST_NAME } from '@dxtmisha/figma'

const mockAdd = vi.fn()
const mockPost = vi.fn()
vi.mock('../FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      add: mockAdd,
      post: mockPost
    }))
  }
}))

import { FigmaTopLevelFrames } from '../FigmaTopLevelFrames'

describe('FigmaTopLevelFrames', () => {
  beforeEach(() => {
    FigmaTopLevelFrames.reset()
    vi.stubGlobal('figma', {
      currentPage: {
        id: 'page-1',
        type: 'PAGE',
        children: [
          {
            id: 'frame-1',
            type: 'FRAME',
            name: 'Frame 1',
            children: [],
            exportAsync: vi.fn().mockResolvedValue(new Uint8Array([1, 2, 3]))
          }
        ]
      }
    })
    mockAdd.mockClear()
    mockPost.mockClear()
  })

  afterEach(() => {
    FigmaTopLevelFrames.reset()
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('get() should extract frames and cache the result', async () => {
      const frames = await FigmaTopLevelFrames.get()
      expect(frames).toHaveLength(1)
      expect(frames[0]).toEqual({
        name: 'Frame 1',
        id: 'frame-1',
        image: new Uint8Array([1, 2, 3])
      })

      // Cached call must return the identical array instance
      const cachedFrames = await FigmaTopLevelFrames.get()
      expect(cachedFrames).toBe(frames)
    })

    it('send() should setup messenger listener and post frames on request', async () => {
      let messageCallback: (() => Promise<void>) | undefined
      mockAdd.mockImplementation((name: string, callback: () => Promise<void>) => {
        if (name === UI_FIGMA_FRAMES_POST_NAME) {
          messageCallback = callback
        }
      })

      FigmaTopLevelFrames.send()
      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_FRAMES_POST_NAME, expect.any(Function))

      await messageCallback!()
      expect(mockPost).toHaveBeenCalledWith(
        UI_FIGMA_FRAMES_POST_NAME,
        expect.arrayContaining([
          expect.objectContaining({ id: 'frame-1', name: 'Frame 1' })
        ])
      )
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('get() should return empty list when page has no frames', async () => {
      ;(figma.currentPage as any).children = []

      const frames = await FigmaTopLevelFrames.get()
      expect(frames).toEqual([])
    })

    it('get() should ignore non-frame and non-section nodes at root', async () => {
      ;(figma.currentPage as any).children = [
        { id: 'rect-1', type: 'RECTANGLE', name: 'Rect' } as any,
        { id: 'text-1', type: 'TEXT', name: 'Text' } as any
      ]

      const frames = await FigmaTopLevelFrames.get()
      expect(frames).toEqual([])
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('get() should preserve Unicode names (Cyrillic, Vietnamese, Emojis)', async () => {
      ;(figma.currentPage as any).children = [
        {
          id: 'frame-ru',
          type: 'FRAME',
          name: 'Главный экран 🚀',
          children: [],
          exportAsync: vi.fn().mockResolvedValue(new Uint8Array([10]))
        } as any,
        {
          id: 'frame-vi',
          type: 'SECTION',
          name: 'Màn hình chính 🇻🇳',
          children: [],
          exportAsync: vi.fn().mockResolvedValue(new Uint8Array([20]))
        } as any
      ]

      const frames = await FigmaTopLevelFrames.get()
      expect(frames).toHaveLength(2)
      expect(frames[0].name).toBe('Главный экран 🚀')
      expect(frames[1].name).toBe('Màn hình chính 🇻🇳')
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('reset() should invalidate cache allowing fresh frame extraction', async () => {
      const frames1 = await FigmaTopLevelFrames.get()
      FigmaTopLevelFrames.reset()
      const frames2 = await FigmaTopLevelFrames.get()

      expect(frames1).not.toBe(frames2)
      expect(frames1).toEqual(frames2)
    })
  })
})
