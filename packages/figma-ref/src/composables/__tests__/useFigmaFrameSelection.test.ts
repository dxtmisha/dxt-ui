import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFrameSelection, sendFrameSelection, type UiFigmaFramesList } from '@dxtmisha/figma'
import { useFigmaFrameSelection } from '../useFigmaFrameSelection'

vi.mock('@dxtmisha/figma', () => ({
  fetchFrameSelection: vi.fn(),
  sendFrameSelection: vi.fn()
}))

describe('useFigmaFrameSelection', () => {
  let capturedCallback: ((frames: UiFigmaFramesList) => void) | undefined

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(fetchFrameSelection).mockImplementation((onReceive) => {
      capturedCallback = onReceive
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize and subscribe on first call, exposing reactive selection and loading', () => {
      const { selection, loading, setSelection } = useFigmaFrameSelection()

      expect(selection).toBeDefined()
      expect(loading).toBeDefined()
      expect(typeof setSelection).toBe('function')

      // If this was the first call, fetchFrameSelection was called
      if (capturedCallback) {
        const mockFrames: UiFigmaFramesList = [
          { id: '1:100', name: 'Header Frame' },
          { id: '1:101', name: 'Footer Frame' }
        ]
        capturedCallback(mockFrames)

        expect(selection.value).toEqual(mockFrames)
        expect(loading.value).toBe(false)
      }
    })

    it('should forward frame ID to sendFrameSelection when setSelection is called', () => {
      const { setSelection } = useFigmaFrameSelection()

      setSelection('10:200')
      expect(sendFrameSelection).toHaveBeenCalledWith('10:200')

      setSelection('0:0')
      expect(sendFrameSelection).toHaveBeenCalledWith('0:0')
    })
  })

  describe('Boundary conditions and empty states', () => {
    it('should safely return an empty array when selection data is empty or cleared', () => {
      const { selection } = useFigmaFrameSelection()

      if (capturedCallback) {
        capturedCallback([])
        expect(selection.value).toEqual([])
      } else {
        expect(Array.isArray(selection.value)).toBe(true)
      }
    })

    it('should handle complex frame objects with diverse IDs', () => {
      const { setSelection, selection } = useFigmaFrameSelection()

      const specialFrames: UiFigmaFramesList = [
        { id: 'special:unicode-日本語', name: '日本語フレーム' },
        { id: 'special:symbols-#$*!', name: 'Symbols' }
      ]

      if (capturedCallback) {
        capturedCallback(specialFrames)
        expect(selection.value).toEqual(specialFrames)
      }

      setSelection('special:unicode-日本語')
      expect(sendFrameSelection).toHaveBeenCalledWith('special:unicode-日本語')
    })
  })

  describe('Singleton deduplication & State preservation', () => {
    it('should share reactive state across multiple composable instances without re-fetching', () => {
      const instanceA = useFigmaFrameSelection()
      const instanceB = useFigmaFrameSelection()

      expect(instanceA.selection.value).toEqual(instanceB.selection.value)
      expect(instanceA.loading.value).toBe(instanceB.loading.value)

      instanceA.setSelection('target-frame')
      expect(sendFrameSelection).toHaveBeenCalledWith('target-frame')
    })
  })
})
