// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { DraggableWrapperClassesData } from '../DraggableWrapperClassesData'

describe('DraggableWrapperClassesData', () => {
  it('should construct classes list correctly using static generator', () => {
    const list = DraggableWrapperClassesData.getClassesList('design')
    expect(list.body).toBe('design-draggableWrapper__blockSelection')
    expect(list.active).toBe('design-draggableWrapper__item--active')
  })

  it('should initialize and provide identification states', () => {
    const mockWrapper = document.createElement('div')
    const classes = new DraggableWrapperClassesData(ref(mockWrapper), 'dxt', 'draggable')

    expect(classes.getId()).toContain('draggable-wrapper--')
    expect(classes.getName()).toBe('draggable')
    expect(classes.getElement()).toBe(mockWrapper)
  })

  it('should correctly check classes check methods', () => {
    const mockWrapper = document.createElement('div')
    const classes = new DraggableWrapperClassesData(ref(mockWrapper), 'dxt', 'draggable')

    const mockItem = document.createElement('div')
    
    expect(classes.isPosition(mockItem)).toBe(false)
    mockItem.classList.add(classes.list.position)
    expect(classes.isPosition(mockItem)).toBe(true)

    expect(classes.isDrop(mockItem)).toBe(false)
    mockItem.classList.add(classes.list.drop)
    expect(classes.isDrop(mockItem)).toBe(true)

    expect(classes.isReturn(mockItem)).toBe(false)
    mockItem.classList.add(classes.list.return)
    expect(classes.isReturn(mockItem)).toBe(true)

    expect(classes.isSelected(mockItem)).toBe(false)
    mockItem.classList.add(classes.list.selected)
    expect(classes.isSelected(mockItem)).toBe(true)
  })

  it('should set body selection block status', () => {
    const mockWrapper = document.createElement('div')
    const classes = new DraggableWrapperClassesData(ref(mockWrapper), 'dxt', 'draggable')

    classes.setBlockSelection(true)
    expect(document.body.classList.contains(classes.list.body)).toBe(true)

    classes.setBlockSelection(false)
    expect(document.body.classList.contains(classes.list.body)).toBe(false)
  })
})
