// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DraggableWrapperItemSelection } from '../DraggableWrapperItemSelection'

describe('DraggableWrapperItemSelection', () => {
  it('should get, set and reset items list', () => {
    const selection = new DraggableWrapperItemSelection()
    expect(selection.get()).toBeUndefined()

    const mockElement1 = document.createElement('div')
    const mockElement2 = document.createElement('span')
    selection.set([mockElement1, mockElement2])
    expect(selection.get()).toEqual([mockElement1, mockElement2])

    selection.reset()
    expect(selection.get()).toBeUndefined()
  })
})
