// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { CollageElement } from '../CollageElement'
import { CollageStyle } from '../CollageStyle'

describe('CollageStyle', () => {
  it('should initialize property with class name', () => {
    const style = new CollageStyle('d-collage')

    expect(style.property.grow).toBe('--d-collage-sys-item-grow')
  })

  it('should set and reset grow property on item elements', () => {
    const container = document.createElement('div')
    const item = document.createElement('div')
    item.setAttribute('data-value', 'item-1')
    container.appendChild(item)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const style = new CollageStyle('d-collage', collageElement)

    style.setGrow(item, 5)
    expect(item.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('5')

    style.resetGrowItem(item)
    expect(item.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('')

    style.setGrow(item, '3')
    expect(item.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('3')

    style.resetGrow()
    expect(item.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('')
  })
})
