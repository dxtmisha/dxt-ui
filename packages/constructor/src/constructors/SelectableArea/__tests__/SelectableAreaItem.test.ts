// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'

import type { SelectableAreaClassesData } from '../SelectableAreaClassesData'
import { SelectableAreaItem } from '../SelectableAreaItem'
import type { SelectableAreaProps } from '../props'

describe('SelectableAreaItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createMockClasses = (items: HTMLElement[] = []) => {
    return {
      findByValue: vi.fn((value: string | number) => items.find(item => item.dataset.value === String(value))),
      findItems: vi.fn(() => items),
      list: { selected: 'selected-class' }
    } as unknown as SelectableAreaClassesData
  }

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize item selection from props.selected without invoking classes factory eagerly', () => {
      const input = ['1', '2']
      const props = reactive<SelectableAreaProps>({ selected: input })
      const classesFactory = vi.fn(() => createMockClasses())

      const manager = new SelectableAreaItem(props, classesFactory)

      expect(classesFactory).not.toHaveBeenCalled()
      expect(manager.get()).toEqual(['1', '2'])
      expect(manager.getNewArray()).toEqual(['1', '2'])
      expect(manager.getNewArray()).not.toBe(manager.get())
      expect(manager.get()).not.toBe(input)
    })

    it('should initialize and react to props.modelSelected fallback', async () => {
      const element1 = document.createElement('div')
      element1.dataset.value = '1'
      const element2 = document.createElement('div')
      element2.dataset.value = '2'

      const props = reactive<SelectableAreaProps>({ modelSelected: '1' })
      const mockClasses = createMockClasses([element1, element2])
      const manager = new SelectableAreaItem(props, () => mockClasses)

      expect(manager.get()).toEqual(['1'])

      manager.onMounted()
      expect(element1.classList.contains('selected-class')).toBe(true)
      expect(element2.classList.contains('selected-class')).toBe(false)

      props.modelSelected = ['2']
      await nextTick()
      expect(manager.get()).toEqual(['2'])
      expect(element1.classList.contains('selected-class')).toBe(false)
      expect(element2.classList.contains('selected-class')).toBe(true)

      manager.onUnmounted()
    })

    it('should set and reset values without mutating caller arrays or firing no-op updates', async () => {
      const props = reactive<SelectableAreaProps>({})
      const mockClasses = createMockClasses()
      const manager = new SelectableAreaItem(props, () => mockClasses)

      expect(manager.get()).toEqual([])

      manager.set('3')
      expect(manager.get()).toEqual(['3'])

      const readonlyValues = ['4', '5'] as const
      manager.set(readonlyValues)
      const currentReference = manager.get()
      expect(currentReference).toEqual(['4', '5'])
      expect(currentReference).not.toBe(readonlyValues)

      // No-op set with identical values preserves array reference
      manager.set(['4', '5'])
      expect(manager.get()).toBe(currentReference)

      // Different order DOES update selection
      manager.set(['5', '4'])
      expect(manager.get()).toEqual(['5', '4'])

      manager.reset()
      expect(manager.get()).toEqual([])
    })

    it('should handle selectionByClick and update DOM classes after onMounted', async () => {
      const props = reactive<SelectableAreaProps>({})
      const element1 = document.createElement('div')
      element1.dataset.value = '1'
      const element2 = document.createElement('div')
      element2.dataset.value = '2'

      const mockClasses = createMockClasses([element1, element2])
      const manager = new SelectableAreaItem(props, () => mockClasses)
      manager.onMounted()

      manager.selectionByClick('1')
      await nextTick()

      expect(manager.get()).toEqual(['1'])
      expect(mockClasses.findByValue).toHaveBeenCalledWith('1')
      expect(element1.classList.contains('selected-class')).toBe(true)
      expect(element2.classList.contains('selected-class')).toBe(false)

      manager.onUnmounted()
    })

    it('should handle selectionByMeta toggling values', () => {
      const props = reactive<SelectableAreaProps>({ selected: ['1'] })
      const mockClasses = createMockClasses()
      const manager = new SelectableAreaItem(props, () => mockClasses)

      manager.selectionByMeta('1')
      expect(manager.get()).toEqual([])

      manager.selectionByMeta('2')
      expect(manager.get()).toEqual(['2'])

      manager.selectionByMeta('3')
      expect(manager.get()).toEqual(['2', '3'])
    })

    it('should handle selectionByShift forward and reverse ranges', () => {
      const props = reactive<SelectableAreaProps>({})
      const item1 = document.createElement('div')
      item1.dataset.value = '10'
      const item2 = document.createElement('div')
      item2.dataset.value = '20'
      const item3 = document.createElement('div')
      item3.dataset.value = '30'

      const mockClasses = createMockClasses([item1, item2, item3])
      const manager = new SelectableAreaItem(props, () => mockClasses)

      // Forward range: 10 -> 30
      manager.selectionByClick('10')
      manager.selectionByShift('30')
      expect(manager.get()).toEqual(['10', '20', '30'])

      // Reverse range: 30 -> 10
      manager.selectionByClick('30')
      manager.selectionByShift('10')
      expect(manager.get()).toEqual(['10', '20', '30'])

      // Same value falls back to single click
      manager.selectionByShift('30')
      expect(manager.get()).toEqual(['30'])
    })
  })

  describe('Boundary cases, detached DOM protection, and lifecycle cleanup', () => {
    it('should fall back to single click in selectionByShift if lastSelection was removed from DOM', () => {
      const props = reactive<SelectableAreaProps>({})
      const item1 = document.createElement('div')
      item1.dataset.value = '10'
      const item2 = document.createElement('div')
      item2.dataset.value = '20'
      const item3 = document.createElement('div')
      item3.dataset.value = '30'

      const activeItems = [item1, item2, item3]
      const mockClasses = {
        findByValue: vi.fn((value: string | number) => activeItems.find(item => item.dataset.value === String(value))),
        findItems: vi.fn(() => activeItems),
        list: { selected: 'selected-class' }
      } as unknown as SelectableAreaClassesData

      const manager = new SelectableAreaItem(props, () => mockClasses)

      manager.selectionByClick('10')
      // Simulate item1 being removed during a list re-render
      activeItems.shift()

      // Shift click on item2 should NOT select item3; it must fall back to clicking item2
      manager.selectionByShift('20')
      expect(manager.get()).toEqual(['20'])
    })

    it('should stop watchers and release lastSelection on onUnmounted', async () => {
      const props = reactive<SelectableAreaProps>({ selected: ['1'] })
      const element1 = document.createElement('div')
      element1.dataset.value = '1'
      const element2 = document.createElement('div')
      element2.dataset.value = '2'

      const mockClasses = createMockClasses([element1, element2])
      const manager = new SelectableAreaItem(props, () => mockClasses)

      manager.onMounted()
      manager.selectionByClick('1')
      await nextTick()
      expect(element1.classList.contains('selected-class')).toBe(true)

      manager.onUnmounted()

      // Reactive prop updates after unmount must no longer trigger DOM updates
      props.selected = ['2']
      await nextTick()
      expect(element2.classList.contains('selected-class')).toBe(false)
    })
  })
})
