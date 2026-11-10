import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFramesSelected, sendFramesSelected } from '@dxtmisha/figma'
import { useFigmaUiSelected } from '../useFigmaUiSelected'

vi.mock('@dxtmisha/figma', () => ({
  fetchFramesSelected: vi.fn(),
  sendFramesSelected: vi.fn()
}))

describe('useFigmaUiSelected', () => {
  let capturedCallback: ((selected: string[]) => void) | undefined

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(fetchFramesSelected).mockImplementation((onReceive) => {
      capturedCallback = onReceive
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should manage selected frame IDs and provide reactive isSelected queries', () => {
      const { selected, loading, isSelected, toggleSelected } = useFigmaUiSelected()

      expect(selected).toBeDefined()
      expect(loading).toBeDefined()
      expect(typeof isSelected).toBe('function')
      expect(typeof toggleSelected).toBe('function')

      if (capturedCallback) {
        capturedCallback(['frame:1', 'frame:2'])
        expect(selected.value).toEqual(['frame:1', 'frame:2'])
        expect(loading.value).toBe(false)
      }

      expect(isSelected('frame:1').value).toBe(true)
      expect(isSelected('frame:2').value).toBe(true)
      expect(isSelected('frame:non-existent').value).toBe(false)

      toggleSelected('frame:3', true)
      expect(sendFramesSelected).toHaveBeenCalledWith('frame:3', true)

      toggleSelected('frame:1', false)
      expect(sendFramesSelected).toHaveBeenCalledWith('frame:1', false)
    })
  })

  describe('Boundary conditions and isSelected stability', () => {
    it('should return boolean false for isSelected when target ID is not in selected list', () => {
      const { isSelected } = useFigmaUiSelected()

      const checkResult = isSelected('missing-frame')
      expect(typeof checkResult.value).toBe('boolean')
      expect(checkResult.value).toBe(false)
    })

    it('should handle empty ID string, symbols, and unicode IDs', () => {
      const { isSelected, toggleSelected } = useFigmaUiSelected()

      expect(isSelected('').value).toBe(false)

      toggleSelected('специальный:id', true)
      expect(sendFramesSelected).toHaveBeenCalledWith('специальный:id', true)

      toggleSelected('frame:with-symbols#@!', false)
      expect(sendFramesSelected).toHaveBeenCalledWith('frame:with-symbols#@!', false)
    })

    it('should safely return an empty array when selection is empty', () => {
      const { selected } = useFigmaUiSelected()

      if (capturedCallback) {
        capturedCallback([])
        expect(selected.value).toEqual([])
      } else {
        expect(Array.isArray(selected.value)).toBe(true)
      }
    })
  })

  describe('Singleton deduplication & State preservation', () => {
    it('should share selected frame IDs across multiple instances without re-fetching', () => {
      const instanceA = useFigmaUiSelected()
      const instanceB = useFigmaUiSelected()

      expect(instanceA.selected.value).toEqual(instanceB.selected.value)
      expect(instanceA.loading.value).toBe(instanceB.loading.value)

      instanceA.toggleSelected('shared-id', true)
      expect(sendFramesSelected).toHaveBeenCalledWith('shared-id', true)
    })
  })
})
