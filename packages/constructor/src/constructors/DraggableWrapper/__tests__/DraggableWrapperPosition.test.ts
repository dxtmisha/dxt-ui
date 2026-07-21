// @vitest-environment jsdom
import { describe, it, vi } from 'vitest'
import { DraggableWrapperPosition } from '../DraggableWrapperPosition'

describe('DraggableWrapperPosition', () => {
  it('should initialize and manage coordinates updates', () => {
    const mockClasses = {
      findElementsFromPoint: () => [],
      findItemByPoints: () => undefined,
      getElement: () => document.createElement('div'),
      isReturn: () => false
    } as any

    const mockActive = { get: vi.fn() }
    const mockGo = { get: vi.fn(), is: vi.fn(), reset: vi.fn() }
    const mockItem = {
      getActive: () => mockActive,
      getGo: () => mockGo,
      reset: vi.fn(),
      get: () => []
    } as any

    const mockClient = {
      hasDrop: () => false,
      reset: vi.fn()
    } as any

    const mockSquare = {
      prepare: vi.fn()
    } as any

    const mockEmit = {
      on: vi.fn()
    } as any

    const position = new DraggableWrapperPosition(mockClasses, mockItem, mockClient, mockSquare, mockEmit)

    position.update({ x: 0, y: 0 })
    position.reset(true)
  })
})
