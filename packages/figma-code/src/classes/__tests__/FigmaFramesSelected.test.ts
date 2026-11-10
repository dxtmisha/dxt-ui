import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UI_FIGMA_FRAMES_SELECTED_ADD_NAME, UI_FIGMA_FRAMES_SELECTED_POST_NAME } from '@dxtmisha/figma'

const mockMessenger = {
  add: vi.fn().mockReturnThis(),
  post: vi.fn().mockReturnThis()
}

vi.mock('../FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => mockMessenger)
  }
}))

let storedData: string[] = []

vi.mock('../FigmaStorage', () => {
  return {
    FigmaStorage: vi.fn().mockImplementation(function () {
      return {
        get: vi.fn().mockImplementation(() => [...storedData]),
        set: vi.fn().mockImplementation((val: string[]) => {
          storedData = [...val]
        })
      }
    })
  }
})

import { FigmaFramesSelected } from '../FigmaFramesSelected'

describe('FigmaFramesSelected', () => {
  beforeEach(() => {
    storedData = []
    FigmaFramesSelected.reset()
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('add(), has(), and get() should manage selected frame IDs list', () => {
      expect(FigmaFramesSelected.has('frame-1')).toBe(false)

      FigmaFramesSelected.add('frame-1')
      expect(FigmaFramesSelected.has('frame-1')).toBe(true)
      expect(FigmaFramesSelected.get()).toEqual(['frame-1'])
    })

    it('remove() should remove target ID from the selection list', () => {
      FigmaFramesSelected.add('frame-1')
      FigmaFramesSelected.add('frame-2')
      expect(FigmaFramesSelected.get()).toEqual(['frame-1', 'frame-2'])

      FigmaFramesSelected.remove('frame-1')
      expect(FigmaFramesSelected.has('frame-1')).toBe(false)
      expect(FigmaFramesSelected.get()).toEqual(['frame-2'])
    })

    it('toggle() should add when selected: true and remove when selected: false', () => {
      FigmaFramesSelected.toggle('frame-toggle', true)
      expect(FigmaFramesSelected.has('frame-toggle')).toBe(true)

      FigmaFramesSelected.toggle('frame-toggle', false)
      expect(FigmaFramesSelected.has('frame-toggle')).toBe(false)
    })

    it('send() should bind messenger handlers and respond to post / toggle messages', () => {
      const callbacks: Record<string, (data?: any) => void> = {}
      mockMessenger.add.mockImplementation((name: string, cb: (data?: any) => void) => {
        callbacks[name] = cb
      })

      FigmaFramesSelected.send()

      expect(mockMessenger.add).toHaveBeenCalledWith(
        UI_FIGMA_FRAMES_SELECTED_POST_NAME,
        expect.any(Function)
      )
      expect(mockMessenger.add).toHaveBeenCalledWith(
        UI_FIGMA_FRAMES_SELECTED_ADD_NAME,
        expect.any(Function)
      )

      // Post trigger
      callbacks[UI_FIGMA_FRAMES_SELECTED_POST_NAME]()
      expect(mockMessenger.post).toHaveBeenCalledWith(
        UI_FIGMA_FRAMES_SELECTED_POST_NAME,
        expect.any(Array)
      )

      // Add trigger
      callbacks[UI_FIGMA_FRAMES_SELECTED_ADD_NAME]({ id: 'frame-from-ui', selected: true })
      expect(FigmaFramesSelected.has('frame-from-ui')).toBe(true)

      // Remove trigger
      callbacks[UI_FIGMA_FRAMES_SELECTED_ADD_NAME]({ id: 'frame-from-ui', selected: false })
      expect(FigmaFramesSelected.has('frame-from-ui')).toBe(false)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('add() should be idempotent and prevent duplicate entries', () => {
      FigmaFramesSelected.add('dup-frame')
      FigmaFramesSelected.add('dup-frame')

      expect(FigmaFramesSelected.get()).toEqual(['dup-frame'])
    })

    it('remove() on a non-existent item should safely be a no-op', () => {
      FigmaFramesSelected.add('frame-keep')

      FigmaFramesSelected.remove('non-existent')

      expect(FigmaFramesSelected.get()).toEqual(['frame-keep'])
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should manage frame IDs with colon notation and unicode characters', () => {
      const unicodeId = '123:456_фрейм_khung_hình_🚀'
      FigmaFramesSelected.add(unicodeId)

      expect(FigmaFramesSelected.has(unicodeId)).toBe(true)
      expect(FigmaFramesSelected.get()).toContain(unicodeId)
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('reset() should invalidate cached selected array', () => {
      FigmaFramesSelected.add('frame-x')
      expect(FigmaFramesSelected.get()).toEqual(['frame-x'])

      // Modify backing storage data directly
      storedData = ['external-update']
      // Cache still returns previous state
      expect(FigmaFramesSelected.get()).toEqual(['frame-x'])

      // Invalidate cache
      FigmaFramesSelected.reset()
      // Now it re-reads from storage
      expect(FigmaFramesSelected.get()).toEqual(['external-update'])
    })
  })
})
