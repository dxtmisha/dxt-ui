// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { CropAreaStyle } from '../CropAreaStyle'

describe('CropAreaStyle', () => {
  it('should set CSS custom properties on the element', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const style = new CropAreaStyle(elementRef, 'd1-crop-area')

    style.set([10, 20, 30, 40])

    expect(element.style.getPropertyValue('--d1-crop-area-sys-crop-top')).toBe('10%')
    expect(element.style.getPropertyValue('--d1-crop-area-sys-crop-right')).toBe('20%')
    expect(element.style.getPropertyValue('--d1-crop-area-sys-crop-bottom')).toBe('30%')
    expect(element.style.getPropertyValue('--d1-crop-area-sys-crop-left')).toBe('40%')
  })

  it('should do nothing if element is not mounted', () => {
    const elementRef = ref<HTMLElement | undefined>(undefined)
    const style = new CropAreaStyle(elementRef, 'd1-crop-area')

    expect(() => style.set([10, 20, 30, 40])).not.toThrow()
  })
})
