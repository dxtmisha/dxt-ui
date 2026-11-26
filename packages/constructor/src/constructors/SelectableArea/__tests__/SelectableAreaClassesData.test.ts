// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import * as functionalBasic from '@dxtmisha/functional-basic'

import { SelectableAreaClassesData } from '../SelectableAreaClassesData'

describe('SelectableAreaClassesData', () => {
  afterEach(() => {
    document.body.className = ''
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize lists and unique ID correctly', () => {
      const element = document.createElement('div')
      const elementRef = ref<HTMLElement | undefined>(element)
      const data = new SelectableAreaClassesData(elementRef, new DesignName('d1.selectableArea'))

      expect(data.getId()).toContain('selectable-area--')
      expect(data.getName()).toBe('d1-selectableArea')
      expect(data.getElement()).toBe(element)

      expect(data.list).toEqual({
        body: 'd1-selectableArea__blockSelection',
        show: 'd1-selectableArea__square--show',
        selected: 'd1-selectableArea__item--selected',
        click: 'd1-selectableArea__click'
      })
    })

    it('should return bounding client rect of the wrapper element', () => {
      const element = document.createElement('div')
      const rectMock = { top: 10, left: 20, right: 30, bottom: 40, width: 10, height: 30, x: 20, y: 10, toJSON: () => ({}) } as DOMRect
      element.getBoundingClientRect = vi.fn().mockReturnValue(rectMock)

      const data = new SelectableAreaClassesData(ref<HTMLElement | undefined>(element), new DesignName('d1.selectableArea'))

      expect(data.getRect()).toBe(rectMock)
    })

    it('should check isMain target element correctly', () => {
      const element = document.createElement('div')
      element.className = 'd1-selectableArea'
      const data = new SelectableAreaClassesData(ref<HTMLElement | undefined>(element), new DesignName('d1.selectableArea'))

      expect(data.isMain(element)).toBe(true)

      const nestedNonItem = document.createElement('div')
      element.appendChild(nestedNonItem)
      expect(data.isMain(nestedNonItem)).toBe(true)

      const item = document.createElement('div')
      item.className = data.getId()
      element.appendChild(item)
      expect(data.isMain(item)).toBe(false)

      const outsideWrapper = document.createElement('div')
      outsideWrapper.className = 'd1-selectableArea'
      expect(data.isMain(outsideWrapper)).toBe(false)
    })

    it('should find click triggers, items, values, and selections', () => {
      const element = document.createElement('div')
      element.className = 'd1-selectableArea'
      const data = new SelectableAreaClassesData(ref<HTMLElement | undefined>(element), new DesignName('d1.selectableArea'))

      const id = data.getId()

      const item1 = document.createElement('div')
      item1.className = id
      item1.dataset.value = '1'

      const item2 = document.createElement('div')
      item2.className = `${id} ${data.list.selected} ${data.list.click}`
      item2.dataset.value = '2'

      const clickTrigger = document.createElement('button')
      clickTrigger.className = data.list.click
      item1.appendChild(clickTrigger)

      element.appendChild(item1)
      element.appendChild(item2)

      expect(data.findItem(clickTrigger)).toBe(item1)
      expect(data.findClick(clickTrigger)).toBe(clickTrigger)
      expect(data.findClick(item2)).toBe(item2)
      expect(data.findByValue('1')).toBe(item1)
      expect(data.findByValue(2)).toBe(item2)
      expect(data.findItems()).toEqual([item1, item2])
      expect(data.findSelection()).toEqual([item2])
    })

    it('should toggle body classes using setBlockSelection', () => {
      const element = document.createElement('div')
      const data = new SelectableAreaClassesData(ref<HTMLElement | undefined>(element), new DesignName('d1.selectableArea'))

      expect(document.body.classList.contains(data.list.body)).toBe(false)
      data.setBlockSelection(true)
      expect(document.body.classList.contains(data.list.body)).toBe(true)
      data.setBlockSelection(false)
      expect(document.body.classList.contains(data.list.body)).toBe(false)
      data.setBlockSelection()
      expect(document.body.classList.contains(data.list.body)).toBe(false)
    })
  })

  describe('Boundary values, special characters, and non-DOM safety', () => {
    it('should find items whose data-value contains quotes, backslashes, brackets, Unicode, or empty string without CSS selector errors', () => {
      const element = document.createElement('div')
      const data = new SelectableAreaClassesData(ref<HTMLElement | undefined>(element), new DesignName('d1.selectableArea'))
      const id = data.getId()

      const specialValues = [
        'item "quoted"',
        'path\\to\\file',
        'val[0]\nline2',
        'Nguyễn tiếng Việt 🚀',
        '0',
        ''
      ]

      const created = specialValues.map((value) => {
        const node = document.createElement('div')
        node.className = id
        node.dataset.value = value
        element.appendChild(node)
        return node
      })

      specialValues.forEach((value, index) => {
        expect(data.findByValue(value)).toBe(created[index])
      })
      expect(data.findByValue(0)).toBe(created[4])
      expect(data.findByValue('missing')).toBeUndefined()
    })

    it('should safely handle undefined element ref and non-Element targets', () => {
      const data = new SelectableAreaClassesData(ref<HTMLElement | undefined>(undefined), new DesignName('d1.selectableArea'))

      expect(data.getElement()).toBeUndefined()
      expect(data.getRect()).toBeUndefined()
      expect(data.findItems()).toEqual([])
      expect(data.findSelection()).toEqual([])
      expect(data.findByValue('1')).toBeUndefined()

      const textNode = document.createTextNode('text') as unknown as HTMLElement
      expect(data.isMain(textNode)).toBe(false)
      expect(data.findClick(textNode)).toBeUndefined()
      expect(data.findItem(textNode)).toBeUndefined()
      expect(data.isMain(null as unknown as HTMLElement)).toBe(false)
      expect(data.findClick(undefined as unknown as HTMLElement)).toBeUndefined()
    })

    it('should skip document.body mutation in setBlockSelection when isDomRuntime returns false', () => {
      vi.spyOn(functionalBasic, 'isDomRuntime').mockReturnValue(false)
      const data = new SelectableAreaClassesData(ref<HTMLElement | undefined>(), new DesignName('d1.selectableArea'))

      expect(() => data.setBlockSelection(true)).not.toThrow()
      expect(document.body.classList.contains(data.list.body)).toBe(false)
    })

    it('should generate unique IDs across distinct instances', () => {
      const first = new SelectableAreaClassesData(ref<HTMLElement | undefined>(), new DesignName('d1.selectableArea'))
      const second = new SelectableAreaClassesData(ref<HTMLElement | undefined>(), new DesignName('d1.selectableArea'))

      expect(first.getId()).not.toBe(second.getId())
    })
  })
})
