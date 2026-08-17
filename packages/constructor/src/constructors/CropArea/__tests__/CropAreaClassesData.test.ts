// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { CropAreaClassesData } from '../CropAreaClassesData'

describe('CropAreaClassesData', () => {
  it('should initialize classes and unique ID correctly', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const data = new CropAreaClassesData(elementRef, 'd1', 'd1-crop-area')

    expect(data.id).toContain('crop-area--')
    expect(data.name).toBe('d1-crop-area')
    expect(data.elementItem).toBe(element)

    expect(data.list).toEqual({
      blockSelection: 'd1-cropArea__blockSelection',
      active: 'd1-cropArea__active',
      move: 'd1-cropArea__move'
    })
  })

  it('should return bounding client rect of element', () => {
    const element = document.createElement('div')
    const rectMock = { top: 0, left: 0, width: 400, height: 300, bottom: 300, right: 400 } as DOMRect
    element.getBoundingClientRect = vi.fn().mockReturnValue(rectMock)

    const elementRef = ref(element)
    const data = new CropAreaClassesData(elementRef, 'd1', 'd1-crop-area')

    expect(data.rect).toBe(rectMock)
  })

  it('should toggle body selection lock class', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const data = new CropAreaClassesData(elementRef, 'd1', 'd1-crop-area')

    expect(document.body.classList.contains(data.list.blockSelection)).toBe(false)
    data.setBlockSelection(true)
    expect(document.body.classList.contains(data.list.blockSelection)).toBe(true)
    data.setBlockSelection(false)
    expect(document.body.classList.contains(data.list.blockSelection)).toBe(false)
  })
})
