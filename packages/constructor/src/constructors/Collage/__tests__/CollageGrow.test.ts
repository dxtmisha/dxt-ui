// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { CollageElement } from '../CollageElement'
import { CollageGrow } from '../CollageGrow'

describe('CollageGrow', () => {
  it('should initialize propertyGrow with class name', () => {
    const grow = new CollageGrow('d-collage')

    expect(grow.propertyGrow).toBe('--d-collage-sys-item-grow')
  })

  it('should set and reset grow property on item elements', () => {
    const container = document.createElement('div')
    const item = document.createElement('div')
    item.setAttribute('data-value', 'item-1')
    container.appendChild(item)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const grow = new CollageGrow('d-collage', collageElement)

    grow.setGrow(item, 5)
    expect(item.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('5')

    grow.resetGrowItem(item)
    expect(item.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('')

    grow.setGrow(item, '3')
    expect(item.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('3')

    grow.resetGrow()
    expect(item.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('')
  })
})
