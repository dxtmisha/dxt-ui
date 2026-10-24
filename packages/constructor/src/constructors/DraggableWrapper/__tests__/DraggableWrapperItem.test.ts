// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperItem } from '../DraggableWrapperItem'

describe('DraggableWrapperItem', () => {
  const createMockFocus = () => ({ get: vi.fn(), set: vi.fn(), reset: vi.fn() })
  const createMockActive = () => ({ get: vi.fn(), set: vi.fn(), reset: vi.fn() })
  const createMockSelection = () => ({ get: vi.fn(), set: vi.fn(), reset: vi.fn() })
  const createMockGo = () => ({ get: vi.fn(), set: vi.fn(), is: vi.fn(), reset: vi.fn() })

  describe('Standard functional requirements (Happy path)', () => {
    it('should provide access to sub-helper instances via getters', () => {
      const focus = createMockFocus() as any
      const active = createMockActive() as any
      const selection = createMockSelection() as any
      const go = createMockGo() as any

      const item = new DraggableWrapperItem(() => active, () => focus, () => go, () => selection)
      expect(item.getFocus()).toBe(focus)
      expect(item.getActive()).toBe(active)
      expect(item.getSelection()).toBe(selection)
      expect(item.getGo()).toBe(go)
    })

    it('should aggregate elements prioritizing selection over active item', () => {
      const focus = createMockFocus() as any
      const active = createMockActive()
      const selection = createMockSelection()
      const go = createMockGo() as any

      const item = new DraggableWrapperItem(() => active as any, () => focus, () => go, () => selection as any)

      // Both selection and active exist -> returns selection
      const elSel = document.createElement('div')
      const elAct = document.createElement('span')
      selection.get.mockReturnValue([elSel])
      active.get.mockReturnValue(elAct)
      expect(item.get()).toEqual([elSel])

      // Only active exists
      selection.get.mockReturnValue(undefined)
      expect(item.get()).toEqual([elAct])

      // Neither exists
      active.get.mockReturnValue(undefined)
      expect(item.get()).toEqual([])
    })

    it('should extract values from data-value attributes via getValues()', () => {
      const active = createMockActive()
      const selection = createMockSelection()

      const el1 = document.createElement('div')
      el1.dataset.value = 'first'
      const el2 = document.createElement('div')
      el2.dataset.value = 'second'

      selection.get.mockReturnValue([el1, el2])

      const item = new DraggableWrapperItem(
        () => active as any,
        () => createMockFocus() as any,
        () => createMockGo() as any,
        () => selection as any
      )

      expect(item.getValues()).toEqual(['first', 'second'])
    })

    it('should reset all 4 sub-helpers on reset() and support chaining', () => {
      const focus = createMockFocus()
      const active = createMockActive()
      const selection = createMockSelection()
      const go = createMockGo()

      const item = new DraggableWrapperItem(
        () => active as any,
        () => focus as any,
        () => go as any,
        () => selection as any
      )

      const result = item.reset()
      expect(result).toBe(item)
      expect(focus.reset).toHaveBeenCalledTimes(1)
      expect(active.reset).toHaveBeenCalledTimes(1)
      expect(selection.reset).toHaveBeenCalledTimes(1)
      expect(go.reset).toHaveBeenCalledTimes(1)
    })
  })

  describe('toNewPosition reordering logic', () => {
    const item = new DraggableWrapperItem(
      () => createMockActive() as any,
      () => createMockFocus() as any,
      () => createMockGo() as any,
      () => createMockSelection() as any
    )

    it('should reorder items inserting before target when before is true', () => {
      const items = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }]
      const result = item.toNewPosition(items, '1', ['2', '3'], true)
      expect(result.map(x => x.value)).toEqual(['2', '3', '1', '4'])
    })

    it('should reorder items inserting after target when before is false', () => {
      const items = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }]
      const result = item.toNewPosition(items, '1', ['2', '3'], false)
      expect(result.map(x => x.value)).toEqual(['1', '2', '3', '4'])
    })

    it('should unshift selected items to start when valueTo target is not found', () => {
      const items = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }]
      const result = item.toNewPosition(items, 'unknown-target', ['3'], false)
      expect(result.map(x => x.value)).toEqual(['3', '1', '2', '4'])
    })

    it('should unshift selected items to start when valueTo is undefined', () => {
      const items = [{ value: '1' }, { value: '2' }, { value: '3' }]
      const result = item.toNewPosition(items, undefined, ['2'], false)
      expect(result.map(x => x.value)).toEqual(['2', '1', '3'])
    })
  })

  describe('Boundary values and edge cases', () => {
    const item = new DraggableWrapperItem(
      () => createMockActive() as any,
      () => createMockFocus() as any,
      () => createMockGo() as any,
      () => createMockSelection() as any
    )

    it('should safely handle empty array in toNewPosition', () => {
      expect(item.toNewPosition([], '1', ['2'])).toEqual([])
    })

    it('should return unchanged list when selection values do not match any item', () => {
      const items = [{ value: 'a' }, { value: 'b' }]
      const result = item.toNewPosition(items, 'a', ['x', 'y'], true)
      expect(result.map(x => x.value)).toEqual(['a', 'b'])
    })

    it('should safely handle undefined valueSelection parameter', () => {
      const items = [{ value: 'a' }, { value: 'b' }]
      const result = item.toNewPosition(items, 'b', undefined, true)
      expect(result.map(x => x.value)).toEqual(['a', 'b'])
    })

    it('should preserve items with undefined values without dropping them', () => {
      const items = [{ value: undefined }, { value: '2' }, { value: '3' }]
      const result = item.toNewPosition(items, '3', ['2'], false)
      expect(result.map(x => x.value)).toEqual([undefined, '3', '2'])
    })
  })
})
