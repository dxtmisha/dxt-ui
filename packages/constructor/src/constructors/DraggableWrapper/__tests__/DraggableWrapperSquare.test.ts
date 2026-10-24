// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { DraggableWrapperSquare } from '../DraggableWrapperSquare'

describe('DraggableWrapperSquare', () => {
  const naming = new DesignName('my.draggable')

  const createMockClasses = (options: {
    wrapper?: HTMLElement
    items?: HTMLElement[]
  } = {}) => ({
    getName: () => 'my-draggable',
    getId: () => 'draggable-wrapper--test-id',
    getElement: () => options.wrapper,
    findItems: () => options.items,
    setBlockSelection: vi.fn(),
    getList: () => ({
      squareShow: 'my-draggable__square--show'
    })
  } as any)

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize states and getters correctly', () => {
      const square = new DraggableWrapperSquare({}, naming, () => createMockClasses())
      expect(square.getElement()).toBeUndefined()
      expect(square.isShow()).toBe(false)
      expect(square.isBefore()).toBe(false)
    })

    it('should prepare square element, copy dimensions, insert into DOM, and show', () => {
      const parent = document.createElement('div')
      const targetItem = document.createElement('div')
      targetItem.className = 'custom-card-class my-draggable-sys'
      parent.appendChild(targetItem)

      const squareEl = document.createElement('div')
      const mockClasses = createMockClasses({ items: [targetItem, squareEl] })
      const square = new DraggableWrapperSquare({}, naming, () => mockClasses)
      square.squareElement.value = squareEl

      // Mock getComputedStyle
      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        width: '120px',
        height: '60px',
        marginTop: '10px',
        marginRight: '15px',
        marginBottom: '20px',
        marginLeft: '25px'
      } as any)

      square.prepare(targetItem)

      expect(square.isShow()).toBe(true)
      expect(square.isBefore()).toBe(true)
      expect(mockClasses.setBlockSelection).toHaveBeenCalledWith(true)
      expect(squareEl.classList.contains('my-draggable__square--show')).toBe(true)
      expect(squareEl.classList.contains('custom-card-class')).toBe(true)
      // Internal class should be filtered out
      expect(squareEl.classList.contains('my-draggable-sys')).toBe(false)

      expect(squareEl.style.getPropertyValue('--my-draggable-sys-square-width')).toBe('120px')
      expect(squareEl.style.getPropertyValue('--my-draggable-sys-square-height')).toBe('60px')
      expect(squareEl.style.getPropertyValue('--my-draggable-sys-square-margin-top')).toBe('10px')
      expect(squareEl.style.getPropertyValue('--my-draggable-sys-square-margin-left')).toBe('25px')

      // Positioned before targetItem in parent
      expect(parent.firstChild).toBe(squareEl)

      vi.restoreAllMocks()
    })

    it('should hide, remove custom styles and reset position on reset()', () => {
      const wrapperEl = document.createElement('div')
      const squareEl = document.createElement('div')
      const mockClasses = createMockClasses({ wrapper: wrapperEl })

      const square = new DraggableWrapperSquare({}, naming, () => mockClasses)
      square.squareElement.value = squareEl

      squareEl.classList.add('my-draggable__square--show', 'extra-class')
      squareEl.style.setProperty('--my-draggable-sys-square-width', '100px')

      square.reset()

      expect(mockClasses.setBlockSelection).toHaveBeenCalledWith(false)
      expect(square.isShow()).toBe(false)
      expect(squareEl.style.getPropertyValue('--my-draggable-sys-square-width')).toBe('')
      expect(wrapperEl.contains(squareEl)).toBe(true)
    })
  })

  describe('classesSquare customization', () => {
    it('should apply classesSquare when provided as an array', () => {
      const parent = document.createElement('div')
      const targetItem = document.createElement('div')
      parent.appendChild(targetItem)
      const squareEl = document.createElement('div')

      const square = new DraggableWrapperSquare(
        { classesSquare: ['custom-sq-1', 'custom-sq-2'] },
        naming,
        () => createMockClasses()
      )
      square.squareElement.value = squareEl

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({} as any)
      square.prepare(targetItem)

      expect(squareEl.classList.contains('custom-sq-1')).toBe(true)
      expect(squareEl.classList.contains('custom-sq-2')).toBe(true)

      vi.restoreAllMocks()
    })

    it('should apply classesSquare when provided as a space-separated string', () => {
      const parent = document.createElement('div')
      const targetItem = document.createElement('div')
      parent.appendChild(targetItem)
      const squareEl = document.createElement('div')

      const square = new DraggableWrapperSquare(
        { classesSquare: 'custom-a custom-b' },
        naming,
        () => createMockClasses()
      )
      square.squareElement.value = squareEl

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({} as any)
      square.prepare(targetItem)

      expect(squareEl.classList.contains('custom-a')).toBe(true)
      expect(squareEl.classList.contains('custom-b')).toBe(true)

      vi.restoreAllMocks()
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should safely do nothing when squareElement is not yet assigned in prepare()', () => {
      const square = new DraggableWrapperSquare({}, naming, () => createMockClasses())
      expect(() => square.prepare(document.createElement('div'))).not.toThrow()
    })

    it('should call reset() if prepare is invoked without an item', () => {
      const square = new DraggableWrapperSquare({}, naming, () => createMockClasses())
      const squareEl = document.createElement('div')
      square.squareElement.value = squareEl

      const resetSpy = vi.spyOn(square, 'reset')
      square.prepare(undefined)
      expect(resetSpy).toHaveBeenCalledTimes(1)
    })

    it('should safely handle reset when squareElement is undefined', () => {
      const square = new DraggableWrapperSquare({}, naming, () => createMockClasses())
      expect(() => square.reset()).not.toThrow()
    })

    it('should compute isBefore as false when target is located after square element', () => {
      const squareEl = document.createElement('div')
      const targetItem = document.createElement('div')

      // Square appears first in DOM item list
      const mockClasses = createMockClasses({ items: [squareEl, targetItem] })
      const square = new DraggableWrapperSquare({}, naming, () => mockClasses)
      square.squareElement.value = squareEl

      const parent = document.createElement('div')
      parent.append(squareEl, targetItem)

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({} as any)
      square.prepare(targetItem)

      expect(square.isBefore()).toBe(false)
      vi.restoreAllMocks()
    })
  })
})
