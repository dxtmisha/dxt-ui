import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchTopLevelFrames, type UiFigmaFramesList } from '@dxtmisha/figma'
import { useFigmaUiFrames } from '../useFigmaUiFrames'

vi.mock('@dxtmisha/figma', () => ({
  fetchTopLevelFrames: vi.fn()
}))

describe('useFigmaUiFrames', () => {
  let capturedCallback: ((frames: UiFigmaFramesList) => void) | undefined

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(fetchTopLevelFrames).mockImplementation((onReceive) => {
      capturedCallback = onReceive
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should expose reactive frames and loading states', () => {
      const { frames, loading } = useFigmaUiFrames()

      expect(frames).toBeDefined()
      expect(loading).toBeDefined()

      if (capturedCallback) {
        const mockFrames: UiFigmaFramesList = [
          { id: 'frame:root', name: 'Root Page' },
          { id: 'frame:modal', name: 'Modal Dialog' }
        ]
        capturedCallback(mockFrames)

        expect(frames.value).toEqual(mockFrames)
        expect(loading.value).toBe(false)
      }
    })
  })

  describe('Boundary conditions and empty states', () => {
    it('should safely return an empty array when frames are empty', () => {
      const { frames } = useFigmaUiFrames()

      if (capturedCallback) {
        capturedCallback([])
        expect(frames.value).toEqual([])
      } else {
        expect(Array.isArray(frames.value)).toBe(true)
      }
    })

    it('should handle frames with special characters, unicode, and symbols in names', () => {
      const { frames } = useFigmaUiFrames()

      const specialFrames: UiFigmaFramesList = [
        { id: 'frame:1', name: 'Экран настройки / Settings Screen' },
        { id: 'frame:2', name: 'Trang chủ (Tiếng Việt)' },
        { id: 'frame:3', name: '🚀 Dashboard #1' }
      ]

      if (capturedCallback) {
        capturedCallback(specialFrames)
        expect(frames.value).toEqual(specialFrames)
      }
    })
  })

  describe('Singleton deduplication & State preservation', () => {
    it('should share identical frames and loading state across all caller instances', () => {
      const instanceA = useFigmaUiFrames()
      const instanceB = useFigmaUiFrames()

      expect(instanceA.frames.value).toEqual(instanceB.frames.value)
      expect(instanceA.loading.value).toBe(instanceB.loading.value)
    })
  })
})
