// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DraggableWrapperItemActive } from '../DraggableWrapperItemActive'

describe('DraggableWrapperItemActive', () => {
  const mockClasses = {
    getName: () => 'my-component',
    list: {
      active: 'active-class',
      go: 'go-class'
    }
  } as any

  it('should initialize and manage state', () => {
    const active = new DraggableWrapperItemActive(mockClasses)
    expect(active.is()).toBe(false)
    expect(active.get()).toBeUndefined()

    const element = document.createElement('div')
    active.set(element)
    expect(active.is()).toBe(true)
    expect(active.get()).toBe(element)

    active.reset()
    expect(active.is()).toBe(false)
    expect(active.get()).toBeUndefined()
  })

  it('should prepare elements styles and classes for dragging', () => {
    const active = new DraggableWrapperItemActive(mockClasses)
    const element = document.createElement('div')

    element.getBoundingClientRect = () => ({
      left: 10,
      top: 20,
      width: 100,
      height: 200
    } as DOMRect)

    active.prepare(element, { x: 15, y: 35 })

    expect(active.get()).toBe(element)
    expect(element.style.getPropertyValue('--my-component-sys-item-width')).toBe('100px')
    expect(element.style.getPropertyValue('--my-component-sys-item-height')).toBe('200px')
    expect(element.style.getPropertyValue('--my-component-sys-item-shift-x')).toBe('5px')
    expect(element.style.getPropertyValue('--my-component-sys-item-shift-y')).toBe('15px')
    expect(element.classList.contains('active-class')).toBe(true)
    expect(element.classList.contains('go-class')).toBe(true)
  })

  it('should reset custom CSS styles on resetItemStyles', () => {
    const active = new DraggableWrapperItemActive(mockClasses)
    const element = document.createElement('div')
    element.style.setProperty('--my-component-sys-item-width', '10px')

    active.set(element)
    active.resetItemStyles()
    expect(element.style.getPropertyValue('--my-component-sys-item-width')).toBe('')
  })
})
