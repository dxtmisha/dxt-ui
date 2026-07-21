// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperSelection } from '../DraggableWrapperSelection'

describe('DraggableWrapperSelection', () => {
  const mockClasses = {
    getName: () => 'my-draggable',
    findSelection: vi.fn(),
    isSelected: vi.fn(),
    list: {
      active: 'active-item',
      selection: 'selection-item',
      selectionMore: 'selection-more-item'
    }
  } as any

  const mockItem = {
    getActive: vi.fn(),
    getSelection: vi.fn()
  } as any

  it('should apply rotation and scale class offsets on prepare()', () => {
    const selectionHelper = new DraggableWrapperSelection('draggable-id', mockClasses, mockItem)

    const activeEl = document.createElement('div')
    const otherEl = document.createElement('div')
    otherEl.getBoundingClientRect = () => ({ width: 100, height: 50 } as DOMRect)

    mockItem.getActive.mockReturnValue({ get: () => activeEl })
    mockClasses.findSelection.mockReturnValue([activeEl, otherEl])
    mockClasses.isSelected.mockReturnValue(true)

    const mockSelectionSet = vi.fn()
    mockItem.getSelection.mockReturnValue({ set: mockSelectionSet })

    selectionHelper.prepare()

    expect(mockSelectionSet).toHaveBeenCalledWith([activeEl, otherEl])
    expect(otherEl.style.getPropertyValue('--my-draggable-sys-item-width')).toBe('100px')
    expect(otherEl.style.getPropertyValue('--my-draggable-sys-item-height')).toBe('50px')
    expect(otherEl.classList.contains('active-item')).toBe(true)
    expect(otherEl.classList.contains('selection-item')).toBe(true)
  })
})
