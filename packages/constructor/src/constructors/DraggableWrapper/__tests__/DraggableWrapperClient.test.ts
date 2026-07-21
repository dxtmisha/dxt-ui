// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DraggableWrapperClient } from '../DraggableWrapperClient'

describe('DraggableWrapperClient', () => {
  const mockElement = document.createElement('div')
  const mockClasses = {
    getName: () => 'my-draggable',
    getElement: () => mockElement,
    getRect: () => ({ left: 10, top: 20 } as DOMRect)
  } as any

  it('should initialize and hold drop state', () => {
    const client = new DraggableWrapperClient(mockClasses)
    expect(client.hasDrop()).toBe(false)
    client.setDrop(true)
    expect(client.hasDrop()).toBe(true)
  })

  it('should set coordinates and offsets', () => {
    const client = new DraggableWrapperClient(mockClasses)
    client.set(5, 10)
    client.setX(15)
    client.setY(20)
  })

  it('should prepare and update custom properties on move', () => {
    const client = new DraggableWrapperClient(mockClasses)
    const element = document.createElement('div')
    element.getBoundingClientRect = () => ({ left: 5, top: 10 } as DOMRect)

    client.prepare(element, { x: 15, y: 30 })
    expect(mockElement.style.getPropertyValue('--my-draggable-sys-client-x')).toBe('5px')
    expect(mockElement.style.getPropertyValue('--my-draggable-sys-client-y')).toBe('10px')
  })
})
