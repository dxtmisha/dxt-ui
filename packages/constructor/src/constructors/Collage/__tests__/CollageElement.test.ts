// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { CollageElement } from '../CollageElement'

describe('CollageElement', () => {
  it('should return false for is() when element is undefined and true when set', () => {
    const element = ref<HTMLElement | undefined>(undefined)
    const collageElement = new CollageElement(element)

    expect(collageElement.is()).toBe(false)
    expect(collageElement.getItems()).toEqual([])
    expect(collageElement.getLines()).toEqual([])

    element.value = document.createElement('div')
    expect(collageElement.is()).toBe(true)
    expect(collageElement.getElement()).toBe(element)
  })

  it('should return vertical center coordinate of item via getItemCenter()', () => {
    class TestCollageElement extends CollageElement {
      override getItemCenter(itemElement: HTMLElement): number {
        return super.getItemCenter(itemElement)
      }
    }

    const item = document.createElement('div')
    item.getBoundingClientRect = () => ({
      top: 20,
      height: 60,
      bottom: 80,
      left: 0,
      right: 100,
      width: 100,
      x: 0,
      y: 20,
      toJSON: () => ({})
    })

    const element = ref<HTMLElement | undefined>(undefined)
    const collageElement = new TestCollageElement(element)

    expect(collageElement.getItemCenter(item)).toBe(50)
  })

  it('should query items with [data-value] attribute', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'item-1')
    const item2 = document.createElement('div')
    item2.setAttribute('data-value', 'item-2')
    const nonItem = document.createElement('div')
    container.appendChild(item1)
    container.appendChild(nonItem)
    container.appendChild(item2)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)

    const items = collageElement.getItems()
    expect(items.length).toBe(2)
    expect(items[0]).toBe(item1)
    expect(items[1]).toBe(item2)
  })

  it('should group items into lines by vertical center position', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'item-1')
    const item2 = document.createElement('div')
    item2.setAttribute('data-value', 'item-2')
    const item3 = document.createElement('div')
    item3.setAttribute('data-value', 'item-3')

    item1.getBoundingClientRect = () => ({ top: 0, height: 100, bottom: 100, left: 0, right: 100, width: 100, x: 0, y: 0, toJSON: () => ({}) })
    item2.getBoundingClientRect = () => ({ top: 10, height: 80, bottom: 90, left: 110, right: 210, width: 100, x: 110, y: 10, toJSON: () => ({}) })
    item3.getBoundingClientRect = () => ({ top: 200, height: 100, bottom: 300, left: 0, right: 100, width: 100, x: 0, y: 200, toJSON: () => ({}) })

    container.appendChild(item1)
    container.appendChild(item2)
    container.appendChild(item3)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)

    const lines = collageElement.getLines()
    expect(lines.length).toBe(2)
    expect(lines[0]).toEqual([item1, item2])
    expect(lines[1]).toEqual([item3])
  })
})
