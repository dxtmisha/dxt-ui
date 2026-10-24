// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { DraggableWrapperSelection } from '../DraggableWrapperSelection'

describe('DraggableWrapperSelection', () => {
  const naming = new DesignName('my.draggable')

  const createMockClasses = (options: {
    selection?: HTMLElement[]
    isSelected?: boolean
  } = {}) => ({
    getName: () => 'my-draggable',
    findSelection: vi.fn(() => options.selection),
    isSelected: vi.fn(() => options.isSelected ?? true),
    getList: () => ({
      active: 'active-item',
      selection: 'selection-item',
      selectionMore: 'selection-more-item'
    })
  } as any)

  const createMockItem = () => {
    let activeEl: HTMLElement | undefined
    let selectionList: HTMLElement[] | undefined
    const setSelectionSpy = vi.fn((list?: HTMLElement[]) => {
      selectionList = list
    })

    return {
      getActive: () => ({
        get: () => activeEl,
        set: (el?: HTMLElement) => { activeEl = el }
      }),
      getSelection: () => ({
        get: () => selectionList,
        set: setSelectionSpy
      })
    } as any
  }

  describe('Standard functional requirements (Happy path)', () => {
    it('should prepare multiselection items styles, rotation offsets and classes on prepare()', () => {
      const activeEl = document.createElement('div')
      const otherEl = document.createElement('div')
      otherEl.getBoundingClientRect = () => ({ width: 100, height: 50 } as DOMRect)

      const mockClasses = createMockClasses({ selection: [activeEl, otherEl], isSelected: true })
      const mockItem = createMockItem()
      mockItem.getActive().set(activeEl)

      const selectionHelper = new DraggableWrapperSelection(naming, () => mockClasses, () => mockItem)
      selectionHelper.prepare()

      expect(mockItem.getSelection().set).toHaveBeenCalledWith([activeEl, otherEl])
      expect(otherEl.style.getPropertyValue('--my-draggable-sys-item-width')).toBe('100px')
      expect(otherEl.style.getPropertyValue('--my-draggable-sys-item-height')).toBe('50px')
      expect(otherEl.style.getPropertyValue('--my-draggable-sys-item-rotate')).toMatch(/^-?\d+deg$/)
      expect(otherEl.classList.contains('active-item')).toBe(true)
      expect(otherEl.classList.contains('selection-item')).toBe(true)
    })

    it('should clean up all applied custom properties and classes on stop()', () => {
      const activeEl = document.createElement('div')
      const itemEl = document.createElement('div')

      itemEl.style.setProperty('--my-draggable-sys-item-width', '100px')
      itemEl.style.setProperty('--my-draggable-sys-item-rotate', '-12deg')
      itemEl.classList.add('active-item', 'selection-item', 'selection-more-item')

      const mockClasses = createMockClasses()
      const mockItem = createMockItem()
      mockItem.getSelection().set([activeEl, itemEl])

      const selectionHelper = new DraggableWrapperSelection(naming, () => mockClasses, () => mockItem)
      selectionHelper.stop()

      expect(itemEl.style.getPropertyValue('--my-draggable-sys-item-width')).toBe('')
      expect(itemEl.style.getPropertyValue('--my-draggable-sys-item-rotate')).toBe('')
      expect(itemEl.classList.contains('active-item')).toBe(false)
      expect(itemEl.classList.contains('selection-item')).toBe(false)
      expect(itemEl.classList.contains('selection-more-item')).toBe(false)
    })
  })

  describe('Selection overflow (selectionMore)', () => {
    it('should assign selectionMore class when selected items exceed max threshold', () => {
      const activeEl = document.createElement('div')
      const items = Array.from({ length: 6 }, () => {
        const el = document.createElement('div')
        el.getBoundingClientRect = () => ({ width: 80, height: 40 } as DOMRect)
        return el
      })

      const allElements = [activeEl, ...items]
      const mockClasses = createMockClasses({ selection: allElements, isSelected: true })
      const mockItem = createMockItem()
      mockItem.getActive().set(activeEl)

      const selectionHelper = new DraggableWrapperSelection(naming, () => mockClasses, () => mockItem)
      selectionHelper.prepare()

      // The last element (index > 4) must receive selectionMore
      const lastEl = items[items.length - 1]
      expect(lastEl.classList.contains('selection-more-item')).toBe(true)
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should early exit in prepare() when selection is undefined or empty', () => {
      const activeEl = document.createElement('div')
      const mockClasses = createMockClasses({ selection: undefined })
      const mockItem = createMockItem()
      mockItem.getActive().set(activeEl)

      const selectionHelper = new DraggableWrapperSelection(naming, () => mockClasses, () => mockItem)
      selectionHelper.prepare()

      expect(mockItem.getSelection().set).not.toHaveBeenCalled()
    })

    it('should early exit in prepare() when active element is undefined', () => {
      const mockClasses = createMockClasses({ selection: [document.createElement('div')] })
      const mockItem = createMockItem()

      const selectionHelper = new DraggableWrapperSelection(naming, () => mockClasses, () => mockItem)
      selectionHelper.prepare()

      expect(mockItem.getSelection().set).not.toHaveBeenCalled()
    })

    it('should early exit in prepare() when active element is not selected', () => {
      const activeEl = document.createElement('div')
      const mockClasses = createMockClasses({
        selection: [activeEl, document.createElement('div')],
        isSelected: false
      })
      const mockItem = createMockItem()
      mockItem.getActive().set(activeEl)

      const selectionHelper = new DraggableWrapperSelection(naming, () => mockClasses, () => mockItem)
      selectionHelper.prepare()

      expect(mockItem.getSelection().set).not.toHaveBeenCalled()
    })

    it('should safely do nothing in stop() when no selection is stored', () => {
      const mockClasses = createMockClasses()
      const mockItem = createMockItem()

      const selectionHelper = new DraggableWrapperSelection(naming, () => mockClasses, () => mockItem)
      expect(() => selectionHelper.stop()).not.toThrow()
    })
  })
})
