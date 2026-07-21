// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MotionAxisStatus } from '../MotionAxisStatus'

describe('MotionAxisStatus', () => {
  it('should test active status triggers', () => {
    const mockElement = {
      toStart: vi.fn(),
      toEnd: vi.fn(),
      toMove: vi.fn(),
      blockScroll: vi.fn(),
      returnScroll: vi.fn(),
      initEvent: vi.fn()
    } as any
    const mockSelected = {
      item: ref('slide-2'),
      is: () => false,
      set: vi.fn()
    } as any
    const mockPrevious = {
      set: vi.fn()
    } as any
    const mockStyles = {} as any

    const status = new MotionAxisStatus(
      { selected: 'slide-1' },
      mockElement,
      mockSelected,
      mockPrevious,
      mockStyles,
      vi.fn()
    )

    expect(status.isActive('slide-1')).toBe(true)
    status.set('slide-2')
    expect(mockSelected.set).toHaveBeenCalledWith('slide-2')
  })
})
