// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DraggableWrapperItemFocus } from '../DraggableWrapperItemFocus'

describe('DraggableWrapperItemFocus', () => {
  it('should get, set and reset item focus state', () => {
    const focus = new DraggableWrapperItemFocus()
    expect(focus.get()).toBeUndefined()

    const mockElement = document.createElement('div')
    focus.set(mockElement)
    expect(focus.get()).toBe(mockElement)

    focus.reset()
    expect(focus.get()).toBeUndefined()
  })
})
