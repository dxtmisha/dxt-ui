// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { CropAreaElement } from '../CropAreaElement'

describe('CropAreaElement', () => {
  it('should return bounding client rect of element', () => {
    const element = document.createElement('div')
    const rectMock = { top: 0, left: 0, width: 400, height: 300, bottom: 300, right: 400 } as DOMRect
    element.getBoundingClientRect = vi.fn().mockReturnValue(rectMock)

    const elementRef = ref(element)
    const data = new CropAreaElement(elementRef, 'd1-crop-area')

    expect(data.rect).toBe(rectMock)
  })

  it('should toggle body selection lock class', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const data = new CropAreaElement(elementRef, 'd1-crop-area')

    expect(document.body.classList.contains('d1-crop-area__blockSelection')).toBe(false)
    data.setBlockSelection(true)
    expect(document.body.classList.contains('d1-crop-area__blockSelection')).toBe(true)
    data.setBlockSelection(false)
    expect(document.body.classList.contains('d1-crop-area__blockSelection')).toBe(false)
  })
})
