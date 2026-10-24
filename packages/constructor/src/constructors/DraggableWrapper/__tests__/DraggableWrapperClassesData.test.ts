// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import * as functionalBasic from '@dxtmisha/functional-basic'
import { DraggableWrapperClassesData } from '../DraggableWrapperClassesData'

describe('DraggableWrapperClassesData', () => {
  const naming = new DesignName('dxt.draggableWrapper')

  describe('Standard functional requirements (Happy path)', () => {
    it('should generate classes list correctly using static getClassesList', () => {
      const list = DraggableWrapperClassesData.getClassesList('design')
      expect(list.blockSelection).toBe('design-draggableWrapper__blockSelection')
      expect(list.squareShow).toBe('design-draggableWrapper__square--show')
      expect(list.active).toBe('design-draggableWrapper__item--active')
      expect(list.return).toBe('design-draggableWrapper__item--return')
      expect(list.selected).toBe('design-draggableWrapper__item--selected')
      expect(list.selection).toBe('design-draggableWrapper__item--selection')
      expect(list.selectionMore).toBe('design-draggableWrapper__item--selection-more')
      expect(list.click).toBe('design-draggableWrapper__click')
      expect(list.drop).toBe('design-draggableWrapper__drop')
      expect(list.dropActive).toBe('design-draggableWrapper__drop--active')
      expect(list.position).toBe('design-draggableWrapper__position')
    })

    it('should initialize and provide getters for metadata and elements', () => {
      const wrapperEl = document.createElement('div')
      const classes = new DraggableWrapperClassesData(ref(wrapperEl), naming)

      expect(classes.getId()).toMatch(/^draggable-wrapper--/)
      expect(classes.getName()).toBe('dxt-draggableWrapper')
      expect(classes.getElement()).toBe(wrapperEl)
      expect(classes.getList()).toEqual(DraggableWrapperClassesData.getClassesList('dxt'))

      const rectMock = { left: 10, top: 20 } as DOMRect
      wrapperEl.getBoundingClientRect = () => rectMock
      expect(classes.getRect()).toBe(rectMock)
    })

    it('should construct control classes using getControl()', () => {
      const wrapperEl = document.createElement('div')
      const classes = new DraggableWrapperClassesData(ref(wrapperEl), naming)

      const control = classes.getControl()
      expect(control.className).toBe(`dxt-draggableWrapper__item ${classes.getId()}`)
      expect(control.classClick).toBe('dxt-draggableWrapper__click')
      expect(control.classDrop).toBe('dxt-draggableWrapper__drop')
      expect(control.classPosition).toBe('dxt-draggableWrapper__position')

      const customControl = classes.getControl('custom-item-class')
      expect(customControl.className).toBe(`custom-item-class ${classes.getId()}`)
    })

    it('should evaluate boolean class checkers correctly', () => {
      const classes = new DraggableWrapperClassesData(ref(document.createElement('div')), naming)
      const item = document.createElement('div')

      expect(classes.isPosition(item)).toBe(false)
      item.classList.add(classes.getList().position)
      expect(classes.isPosition(item)).toBe(true)

      expect(classes.isDrop(item)).toBe(false)
      item.classList.add(classes.getList().drop)
      expect(classes.isDrop(item)).toBe(true)

      expect(classes.isDropActive(item)).toBe(false)
      item.classList.add(classes.getList().dropActive)
      expect(classes.isDropActive(item)).toBe(true)

      expect(classes.isReturn(item)).toBe(false)
      item.classList.add(classes.getList().return)
      expect(classes.isReturn(item)).toBe(true)

      expect(classes.isSelected(item)).toBe(false)
      item.classList.add(classes.getList().selected)
      expect(classes.isSelected(item)).toBe(true)
    })

    it('should toggle body block selection class via setBlockSelection()', () => {
      const classes = new DraggableWrapperClassesData(ref(document.createElement('div')), naming)

      classes.setBlockSelection(true)
      expect(document.body.classList.contains(classes.getList().blockSelection)).toBe(true)

      classes.setBlockSelection(false)
      expect(document.body.classList.contains(classes.getList().blockSelection)).toBe(false)
    })
  })

  describe('DOM element finding queries', () => {
    it('should locate trigger element via findClick()', () => {
      const wrapperEl = document.createElement('div')
      const classes = new DraggableWrapperClassesData(ref(wrapperEl), naming)

      const trigger = document.createElement('button')
      trigger.className = `${classes.getId()} ${classes.getList().click}`
      const icon = document.createElement('span')
      trigger.appendChild(icon)
      wrapperEl.appendChild(trigger)

      expect(classes.findClick(icon)).toBe(trigger)
      expect(classes.findClick(trigger)).toBe(trigger)

      const outsideEl = document.createElement('div')
      expect(classes.findClick(outsideEl)).toBeUndefined()
    })

    it('should find all child items and selections inside the wrapper', () => {
      const wrapperEl = document.createElement('div')
      const classes = new DraggableWrapperClassesData(ref(wrapperEl), naming)

      const item1 = document.createElement('div')
      item1.className = classes.getId()
      const item2 = document.createElement('div')
      item2.className = `${classes.getId()} ${classes.getList().selected}`
      const item3 = document.createElement('div')
      item3.className = `${classes.getId()} ${classes.getList().active}`

      wrapperEl.append(item1, item2, item3)

      const foundItems = classes.findItems()
      expect(foundItems?.length).toBe(3)

      const foundSelection = classes.findSelection()
      expect(foundSelection?.length).toBe(2)
      expect(Array.from(foundSelection || [])).toEqual([item2, item3])
    })

    it('should locate item by coordinates ignoring active item in findItemByPoints()', () => {
      const wrapperEl = document.createElement('div')
      const classes = new DraggableWrapperClassesData(ref(wrapperEl), naming)

      const activeEl = document.createElement('div')
      activeEl.className = `${classes.getId()} ${classes.getList().active}`

      const targetEl = document.createElement('div')
      targetEl.className = classes.getId()

      const foreignEl = document.createElement('div')

      const spy = vi.spyOn(functionalBasic, 'domElementsFromPoint')
        .mockReturnValue([activeEl, targetEl, foreignEl])

      const found = classes.findItemByPoints({ x: 50, y: 50 })
      expect(found).toBe(targetEl)

      spy.mockRestore()
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should return undefined from element queries when wrapper ref is empty', () => {
      const classes = new DraggableWrapperClassesData(ref(undefined), naming)
      expect(classes.getElement()).toBeUndefined()
      expect(classes.getRect()).toBeUndefined()
      expect(classes.findItems()).toBeUndefined()
      expect(classes.findSelection()).toBeUndefined()
    })

    it('should return undefined in findItemByPoints when no matching element is found', () => {
      const classes = new DraggableWrapperClassesData(ref(document.createElement('div')), naming)

      const spy = vi.spyOn(functionalBasic, 'domElementsFromPoint').mockReturnValue([])
      expect(classes.findItemByPoints({ x: 10, y: 10 })).toBeUndefined()
      spy.mockRestore()
    })
  })
})
