// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { CollageElement } from '../CollageElement'

describe('CollageElement', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Availability and container reference', () => {
    it('should return false for is() when element is undefined and true when mounted', () => {
      const element = ref<HTMLElement | undefined>(undefined)
      const collageElement = new CollageElement(element)

      expect(collageElement.is()).toBe(false)
      expect(collageElement.getElement()).toBe(element)
      expect(collageElement.getItems()).toEqual([])

      const container = document.createElement('div')
      element.value = container

      expect(collageElement.is()).toBe(true)
      expect(collageElement.getElement()).toBe(element)
      expect(collageElement.getElement().value).toBe(container)
    })

    it('should reflect reactive unmounting when element resets to undefined', () => {
      const container = document.createElement('div')
      const element = ref<HTMLElement | undefined>(container)
      const collageElement = new CollageElement(element)

      expect(collageElement.is()).toBe(true)

      element.value = undefined
      expect(collageElement.is()).toBe(false)
      expect(collageElement.getItems()).toEqual([])
    })
  })

  describe('Item querying (getItems)', () => {
    it('should query child elements with [data-collage-item] attribute in DOM order', () => {
      const container = document.createElement('div')
      const firstItem = document.createElement('div')
      firstItem.setAttribute('data-collage-item', 'true')
      firstItem.setAttribute('data-value', 'item-1')

      const secondItem = document.createElement('div')
      secondItem.setAttribute('data-collage-item', 'true')
      secondItem.setAttribute('data-value', 'item-2')

      const nonItem = document.createElement('div')

      container.appendChild(firstItem)
      container.appendChild(nonItem)
      container.appendChild(secondItem)

      const element = ref<HTMLElement | undefined>(container)
      const collageElement = new CollageElement(element)

      const items = collageElement.getItems()
      expect(items).toEqual([firstItem, secondItem])
    })

    it('should filter items with an additional CSS selector while preserving [data-collage-item]', () => {
      const container = document.createElement('div')
      const compactItem = document.createElement('div')
      compactItem.setAttribute('data-collage-item', 'true')
      compactItem.className = 'd-collageItem--compact'

      const normalItem = document.createElement('div')
      normalItem.setAttribute('data-collage-item', 'true')
      normalItem.className = 'd-collageItem'

      const nonCollageCompact = document.createElement('div')
      nonCollageCompact.className = 'd-collageItem--compact'

      container.appendChild(compactItem)
      container.appendChild(normalItem)
      container.appendChild(nonCollageCompact)

      const element = ref<HTMLElement | undefined>(container)
      const collageElement = new CollageElement(element)

      expect(collageElement.getItems('.d-collageItem--compact')).toEqual([compactItem])
      expect(collageElement.getItems('')).toEqual([compactItem, normalItem])
    })

    it('should return an empty array when container has no matching items', () => {
      const container = document.createElement('div')
      container.appendChild(document.createElement('span'))

      const element = ref<HTMLElement | undefined>(container)
      const collageElement = new CollageElement(element)

      expect(collageElement.getItems()).toEqual([])
      expect(collageElement.getItems('.missing')).toEqual([])
    })
  })

  describe('Width change detection (isResize)', () => {
    it('should detect container width changes and ignore unchanged measurements', () => {
      const container = document.createElement('div')
      Object.defineProperty(container, 'offsetWidth', { value: 500, configurable: true, writable: true })

      const element = ref<HTMLElement | undefined>(container)
      const collageElement = new CollageElement(element)

      expect(collageElement.isResize()).toBe(true)
      expect(collageElement.isResize()).toBe(false)

      Object.defineProperty(container, 'offsetWidth', { value: 640, configurable: true, writable: true })
      expect(collageElement.isResize()).toBe(true)
      expect(collageElement.isResize()).toBe(false)

      Object.defineProperty(container, 'offsetWidth', { value: 0, configurable: true, writable: true })
      expect(collageElement.isResize()).toBe(true)
      expect(collageElement.isResize()).toBe(false)
    })

    it('should return false when element is undefined and previous width is 0', () => {
      const element = ref<HTMLElement | undefined>(undefined)
      const collageElement = new CollageElement(element)

      expect(collageElement.isResize()).toBe(false)
    })
  })
})
