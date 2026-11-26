// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'

import type { SelectableAreaClassesData } from '../SelectableAreaClassesData'
import { SelectableAreaSquare } from '../SelectableAreaSquare'

describe('SelectableAreaSquare', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createMockClasses = (items: HTMLElement[] = []) => {
    const classes = {
      list: { show: 'd1-selectableArea__square--show' },
      findItems: vi.fn().mockReturnValue(items)
    } as unknown as SelectableAreaClassesData

    return classes
  }

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize lazily without invoking classes factory in constructor', () => {
      const classesFactory = vi.fn(() => createMockClasses())
      const square = new SelectableAreaSquare(new DesignName('d1.selectableArea'), classesFactory)

      expect(classesFactory).not.toHaveBeenCalled()
      expect(square.getSquare()).toBe(square.squareElement)
      expect(square.getSelectedCurrent()).toEqual([])
    })

    it('should update square CSS custom properties in all drag directions', () => {
      const mockClasses = createMockClasses()
      const square = new SelectableAreaSquare(new DesignName('my.selectable'), () => mockClasses)
      const element = document.createElement('div')
      square.squareElement.value = element

      square.start({ x: 100, y: 150 }, [])

      expect(element.classList.contains('d1-selectableArea__square--show')).toBe(true)
      expect(element.style.getPropertyValue('--my-selectable-sys-square-x')).toBe('100px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-y')).toBe('150px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-width')).toBe('0px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-height')).toBe('0px')

      // Drag down-right (positive delta)
      square.move({ x: 150, y: 220 })
      expect(element.style.getPropertyValue('--my-selectable-sys-square-x')).toBe('100px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-y')).toBe('150px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-width')).toBe('50px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-height')).toBe('70px')

      // Drag up-left (negative delta)
      square.move({ x: 80, y: 120 })
      expect(element.style.getPropertyValue('--my-selectable-sys-square-x')).toBe('80px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-y')).toBe('120px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-width')).toBe('20px')
      expect(element.style.getPropertyValue('--my-selectable-sys-square-height')).toBe('30px')
    })

    it('should toggle intersecting items relative to selectedStart without mutating caller array', () => {
      const item1 = document.createElement('div')
      item1.dataset.value = '1'
      item1.getBoundingClientRect = () => ({ left: 120, top: 120, right: 150, bottom: 150 } as DOMRect)

      const item2 = document.createElement('div')
      item2.dataset.value = '2'
      item2.getBoundingClientRect = () => ({ left: 300, top: 300, right: 350, bottom: 350 } as DOMRect)

      const item3 = document.createElement('div')
      item3.dataset.value = '0'
      item3.getBoundingClientRect = () => ({ left: 110, top: 110, right: 130, bottom: 130 } as DOMRect)

      const itemWithoutValue = document.createElement('div')
      itemWithoutValue.getBoundingClientRect = () => ({ left: 120, top: 120, right: 150, bottom: 150 } as DOMRect)

      const mockClasses = createMockClasses([item1, item2, item3, itemWithoutValue])
      const square = new SelectableAreaSquare(new DesignName('d1.selectableArea'), () => mockClasses)

      const squareElement = document.createElement('div')
      squareElement.getBoundingClientRect = () => ({ left: 100, top: 100, right: 200, bottom: 200 } as DOMRect)
      square.squareElement.value = squareElement

      const initialSelected = ['0', 'keep'] as const
      square.start({ x: 100, y: 100 }, initialSelected)
      square.selectionBySquare()

      // '0' was initially selected and intersects -> toggled off
      // 'keep' does not intersect -> preserved
      // '1' intersects and was unselected -> added
      // '2' does not intersect -> omitted
      expect(square.getSelectedCurrent()).toEqual(['keep', '1'])
      expect(initialSelected).toEqual(['0', 'keep'])
    })

    it('should preserve selectedCurrent after end() and clear everything on reset()', () => {
      const mockClasses = createMockClasses()
      const square = new SelectableAreaSquare(new DesignName('d1.selectableArea'), () => mockClasses)
      const element = document.createElement('div')
      square.squareElement.value = element

      square.start({ x: 10, y: 20 }, ['a', 'b'])
      expect(element.classList.contains('d1-selectableArea__square--show')).toBe(true)

      square.end()
      expect(element.classList.contains('d1-selectableArea__square--show')).toBe(false)
      expect(square.getSelectedCurrent()).toEqual(['a', 'b'])

      square.reset()
      expect(square.getSelectedCurrent()).toEqual([])
      expect(element.style.getPropertyValue('--d1-selectableArea-sys-square-x')).toBe('')
      expect(element.style.getPropertyValue('--d1-selectableArea-sys-square-y')).toBe('')
      expect(element.style.getPropertyValue('--d1-selectableArea-sys-square-width')).toBe('')
      expect(element.style.getPropertyValue('--d1-selectableArea-sys-square-height')).toBe('')
    })
  })

  describe('Boundary values and missing element safety', () => {
    it('should handle empty string data-value and missing squareElement gracefully', () => {
      const itemEmpty = document.createElement('div')
      itemEmpty.dataset.value = ''
      itemEmpty.getBoundingClientRect = () => ({ left: 10, top: 10, right: 50, bottom: 50 } as DOMRect)

      const mockClasses = createMockClasses([itemEmpty])
      const square = new SelectableAreaSquare(new DesignName('d1.selectableArea'), () => mockClasses)

      // When squareElement is undefined, methods should be safe no-ops
      expect(() => square.start({ x: 0, y: 0 }, ['x'])).not.toThrow()
      expect(() => square.move({ x: 50, y: 50 })).not.toThrow()
      expect(() => square.selectionBySquare()).not.toThrow()
      expect(() => square.end()).not.toThrow()
      expect(() => square.reset()).not.toThrow()

      // When squareElement is attached, empty-string value is treated as valid defined value
      const squareElement = document.createElement('div')
      squareElement.getBoundingClientRect = () => ({ left: 0, top: 0, right: 100, bottom: 100 } as DOMRect)
      square.squareElement.value = squareElement

      square.start({ x: 0, y: 0 }, [])
      square.selectionBySquare()
      expect(square.getSelectedCurrent()).toEqual([''])
    })
  })
})
