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

    element.value = document.createElement('div')
    expect(collageElement.is()).toBe(true)
    expect(collageElement.getElement()).toBe(element)
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

  it('should track container element width and detect resize via isResize()', () => {
    const container = document.createElement('div')
    Object.defineProperty(container, 'offsetWidth', { value: 500, configurable: true, writable: true })

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)

    // First call: previousWidth was 0, element width is 500 -> returns true and updates previousWidth
    expect(collageElement.isResize()).toBe(true)

    // Second call with same width (500) -> returns false
    expect(collageElement.isResize()).toBe(false)

    // Width changes to 600 -> returns true
    Object.defineProperty(container, 'offsetWidth', { value: 600, configurable: true, writable: true })
    expect(collageElement.isResize()).toBe(true)

    // Unchanged -> returns false
    expect(collageElement.isResize()).toBe(false)
  })

  it('should return false for isResize() when element is undefined', () => {
    const element = ref<HTMLElement | undefined>(undefined)
    const collageElement = new CollageElement(element)

    expect(collageElement.isResize()).toBe(false)
  })
})
