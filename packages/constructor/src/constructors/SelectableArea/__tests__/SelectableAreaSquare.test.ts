// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { SelectableAreaSquare } from '../SelectableAreaSquare'

describe('SelectableAreaSquare', () => {
  it('should initialize properties correctly', () => {
    const mockClasses = {
      getName: () => 'my-selectable',
      list: { show: 'show-class' }
    } as any

    const square = new SelectableAreaSquare(mockClasses)

    expect(square.getSquare()).toBeDefined()
    expect(square.getSelectedCurrent()).toEqual([])
  })

  it('should update square styles on updateSquare', () => {
    const mockClasses = {
      getName: () => 'my-selectable',
      list: { show: 'show-class' },
      findItems: vi.fn().mockReturnValue([])
    } as any

    const square = new SelectableAreaSquare(mockClasses)
    const element = document.createElement('div')
    square.squareElement.value = element

    // Mock start coordinates
    square.start({ x: 100, y: 150 }, [])

    expect(element.classList.contains('show-class')).toBe(true)
    expect(element.style.getPropertyValue('--my-selectable-sys-square-x')).toBe('100px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-y')).toBe('150px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-width')).toBe('0px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-height')).toBe('0px')

    // Move to positive values
    square.move({ x: 150, y: 220 })
    expect(element.style.getPropertyValue('--my-selectable-sys-square-x')).toBe('100px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-y')).toBe('150px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-width')).toBe('50px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-height')).toBe('70px')

    // Move to negative values (drag left and top)
    square.move({ x: 80, y: 120 })
    expect(element.style.getPropertyValue('--my-selectable-sys-square-x')).toBe('80px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-y')).toBe('120px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-width')).toBe('20px')
    expect(element.style.getPropertyValue('--my-selectable-sys-square-height')).toBe('30px')
  })

  it('should select items intersecting with square', () => {
    const mockClasses = {
      getName: () => 'my-selectable',
      list: { show: 'show-class' },
      findItems: vi.fn()
    } as any

    const square = new SelectableAreaSquare(mockClasses)
    const squareEl = document.createElement('div')
    squareEl.getBoundingClientRect = () => ({
      left: 100,
      top: 100,
      right: 200,
      bottom: 200
    } as any)
    square.squareElement.value = squareEl

    const item1 = document.createElement('div')
    item1.dataset.value = '1'
    item1.getBoundingClientRect = () => ({
      left: 120,
      top: 120,
      right: 150,
      bottom: 150
    } as any)

    const item2 = document.createElement('div')
    item2.dataset.value = '2'
    item2.getBoundingClientRect = () => ({
      left: 300,
      top: 300,
      right: 350,
      bottom: 350
    } as any)

    mockClasses.findItems.mockReturnValue([item1, item2])

    square.start({ x: 100, y: 100 }, ['0']) // '0' is initially selected
    square.selectionBySquare()

    // item1 is inside square (100-200), item2 is not.
    // selectedCurrent should contain initial '0' and item1 ('1')
    expect(square.getSelectedCurrent()).toEqual(['0', '1'])
  })

  it('should remove show class on end()', () => {
    const mockClasses = {
      getName: () => 'my-selectable',
      list: { show: 'show-class' }
    } as any

    const square = new SelectableAreaSquare(mockClasses)
    const element = document.createElement('div')
    element.classList.add('show-class')
    square.squareElement.value = element

    square.end()
    expect(element.classList.contains('show-class')).toBe(false)
  })
})
