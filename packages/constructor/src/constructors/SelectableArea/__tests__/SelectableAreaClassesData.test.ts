// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { SelectableAreaClassesData } from '../SelectableAreaClassesData'

describe('SelectableAreaClassesData', () => {
  it('should initialize lists and unique ID correctly', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const data = new SelectableAreaClassesData(elementRef, 'd1', 'd1-selectable-area')

    expect(data.getId()).toContain('selectable-area--')
    expect(data.getName()).toBe('d1-selectable-area')
    expect(data.getElement()).toBe(element)

    expect(data.list).toEqual({
      body: 'd1-selectableArea__blockSelection',
      show: 'd1-selectableArea__square--show',
      selected: 'd1-selectableArea__item--selected',
      click: 'd1-selectableArea__click'
    })
  })

  it('should return bounding client rect', () => {
    const element = document.createElement('div')
    const rectMock = { top: 10, left: 20, right: 30, bottom: 40 } as any
    element.getBoundingClientRect = vi.fn().mockReturnValue(rectMock)

    const elementRef = ref(element)
    const data = new SelectableAreaClassesData(elementRef, 'd1', 'd1-selectable-area')

    expect(data.getRect()).toBe(rectMock)
  })

  it('should check isMain target element correctly', () => {
    const element = document.createElement('div')
    element.className = 'd1-selectable-area'
    const elementRef = ref(element)
    const data = new SelectableAreaClassesData(elementRef, 'd1', 'd1-selectable-area')

    // Since element does not have child elements with id classes, target is not an item.
    // target closest 'd1-selectable-area' is element itself.
    expect(data.isMain(element)).toBe(true)

    // Let's create an item child
    const item = document.createElement('div')
    item.className = data.getId()
    element.appendChild(item)

    expect(data.isMain(item)).toBe(false)
  })

  it('should find click triggers, items and selections', () => {
    const element = document.createElement('div')
    element.className = 'd1-selectable-area'
    const elementRef = ref(element)
    const data = new SelectableAreaClassesData(elementRef, 'd1', 'd1-selectable-area')

    const id = data.getId()

    const item1 = document.createElement('div')
    item1.className = id
    item1.dataset.value = '1'

    const item2 = document.createElement('div')
    item2.className = `${id} ${data.list.selected}`
    item2.dataset.value = '2'

    const clickTrigger = document.createElement('button')
    clickTrigger.className = data.list.click
    item1.appendChild(clickTrigger)

    element.appendChild(item1)
    element.appendChild(item2)

    expect(data.findItem(clickTrigger)).toBe(item1)
    expect(data.findClick(clickTrigger)).toBe(clickTrigger)
    expect(data.findByValue('1')).toBe(item1)
    expect(data.findByValue('2')).toBe(item2)
    expect(data.findItems()).toEqual([item1, item2])
    expect(data.findSelection()).toEqual([item2])
  })

  it('should toggle body classes using setBlockSelection', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const data = new SelectableAreaClassesData(elementRef, 'd1', 'd1-selectable-area')

    expect(document.body.classList.contains(data.list.body)).toBe(false)
    data.setBlockSelection(true)
    expect(document.body.classList.contains(data.list.body)).toBe(true)
    data.setBlockSelection(false)
    expect(document.body.classList.contains(data.list.body)).toBe(false)
  })
})
