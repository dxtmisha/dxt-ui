// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperSquare } from '../DraggableWrapperSquare'

describe('DraggableWrapperSquare', () => {
  const mockClasses = {
    getName: () => 'draggable',
    setBlockSelection: vi.fn(),
    list: {
      show: 'show-class'
    }
  } as any

  it('should initialize states and getters', () => {
    const props = {}
    const square = new DraggableWrapperSquare(props, mockClasses)
    expect(square.getElement()).toBeUndefined()
    expect(square.isShow()).toBe(false)
    expect(square.isBefore()).toBe(false)
  })
})
