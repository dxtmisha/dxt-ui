// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'

import type { ModelInclude } from '../../../classes/ModelInclude'
import type { TabsNavigationProps } from '../props'
import { TabsNavigationSelected } from '../TabsNavigationSelected'

describe('TabsNavigationSelected', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createModelMock = () => {
    const emit = vi.fn()
    const model = { emit } as unknown as ModelInclude<ListSelectedList | undefined>

    return {
      emit,
      getModel: vi.fn(() => model)
    }
  }

  describe('Initialization and initial selection resolution', () => {
    it('should initialize item and actualItem from props.selected', () => {
      const props = reactive<TabsNavigationProps>({
        selected: 'tab-2',
        list: [
          { value: 'tab-1', label: 'Tab 1' },
          { value: 'tab-2', label: 'Tab 2' }
        ]
      })
      const { getModel } = createModelMock()
      const selected = new TabsNavigationSelected(props, getModel)

      expect(selected.item.value).toBe('tab-2')
      expect(selected.actualItem.value).toBe('tab-2')
      expect(selected.isSelected('tab-2')).toBe(true)
      expect(selected.isSelected('tab-1')).toBe(false)
      expect(getModel).not.toHaveBeenCalled()
    })

    it('should prioritize props.modelSelected over props.selected and first list item', () => {
      const props = reactive<TabsNavigationProps>({
        modelSelected: 'tab-3',
        selected: 'tab-2',
        list: [
          { value: 'tab-1', label: 'Tab 1' },
          { value: 'tab-2', label: 'Tab 2' },
          { value: 'tab-3', label: 'Tab 3' }
        ]
      })
      const { getModel } = createModelMock()
      const selected = new TabsNavigationSelected(props, getModel)

      expect(selected.item.value).toBe('tab-3')
      expect(selected.actualItem.value).toBe('tab-3')
    })

    it('should fallback to first list item value respecting custom keyValue', () => {
      const props = reactive<TabsNavigationProps>({
        keyValue: 'code',
        list: [
          { code: 'first', label: 'First' },
          { code: 'second', label: 'Second' }
        ] as unknown as TabsNavigationProps['list']
      })
      const { getModel } = createModelMock()
      const selected = new TabsNavigationSelected(props, getModel)

      expect(selected.item.value).toBe('first')
      expect(selected.actualItem.value).toBe('first')
    })

    it('should handle empty or undefined list gracefully', () => {
      const props = reactive<TabsNavigationProps>({})
      const { getModel } = createModelMock()
      const selected = new TabsNavigationSelected(props, getModel)

      expect(selected.item.value).toBeUndefined()
      expect(selected.actualItem.value).toBeUndefined()
      expect(selected.isSelected('tab-1')).toBe(false)
    })
  })

  describe('Falsy boundary values (0 and false)', () => {
    it('should preserve numeric 0 as valid selected and first-item value', () => {
      const propsExplicit = reactive<TabsNavigationProps>({
        selected: 0,
        list: [
          { value: 0, label: 'Zero' },
          { value: 1, label: 'One' }
        ]
      })
      const { getModel } = createModelMock()
      const selectedExplicit = new TabsNavigationSelected(propsExplicit, getModel)

      expect(selectedExplicit.item.value).toBe(0)
      expect(selectedExplicit.actualItem.value).toBe(0)
      expect(selectedExplicit.isSelected(0)).toBe(true)
      expect(selectedExplicit.isSelected(1)).toBe(false)

      const propsFallback = reactive<TabsNavigationProps>({
        list: [
          { value: 0, label: 'Zero' },
          { value: 1, label: 'One' }
        ]
      })
      const selectedFallback = new TabsNavigationSelected(propsFallback, getModel)

      expect(selectedFallback.item.value).toBe(0)
      expect(selectedFallback.actualItem.value).toBe(0)
    })

    it('should preserve boolean false as valid modelSelected value', () => {
      const props = reactive<TabsNavigationProps>({
        modelSelected: false,
        list: [{ value: 'tab-1', label: 'Tab 1' }]
      })
      const { getModel } = createModelMock()
      const selected = new TabsNavigationSelected(props, getModel)

      expect(selected.item.value).toBe(false)
      expect(selected.isSelected(false)).toBe(true)
    })
  })

  describe('State mutations, model emission, and lifecycle watchers', () => {
    it('should update item, emit model once per change, and return this', () => {
      const props = reactive<TabsNavigationProps>({ selected: 'tab-1' })
      const { emit, getModel } = createModelMock()
      const selected = new TabsNavigationSelected(props, getModel)

      expect(selected.set('tab-2')).toBe(selected)
      expect(selected.item.value).toBe('tab-2')
      expect(getModel).toHaveBeenCalledTimes(1)
      expect(emit).toHaveBeenCalledTimes(1)
      expect(emit).toHaveBeenCalledWith('tab-2')

      // Repeated set with identical value should not emit again
      selected.set('tab-2')
      expect(emit).toHaveBeenCalledTimes(1)

      expect(selected.setActual('tab-2')).toBe(selected)
      expect(selected.actualItem.value).toBe('tab-2')
      expect(selected.isSelected('tab-2')).toBe(true)
    })

    it('should register prop watcher only onMounted and stop it onUnmounted without feedback emits', async () => {
      const props = reactive<TabsNavigationProps>({
        selected: 'tab-1'
      })
      const { emit, getModel } = createModelMock()
      const selected = new TabsNavigationSelected(props, getModel)

      // Before onMounted, prop mutation does not trigger watcher
      props.selected = 'tab-2'
      await nextTick()
      expect(selected.item.value).toBe('tab-1')

      // After onMounted, watcher synchronizes props.selected and props.modelSelected
      selected.onMounted()

      props.selected = 'tab-3'
      await nextTick()
      expect(selected.item.value).toBe('tab-3')
      expect(emit).not.toHaveBeenCalled()

      props.modelSelected = 'tab-4'
      await nextTick()
      expect(selected.item.value).toBe('tab-4')
      expect(emit).not.toHaveBeenCalled()

      // After onUnmounted, watcher is disposed
      selected.onUnmounted()

      props.modelSelected = 'tab-5'
      await nextTick()
      expect(selected.item.value).toBe('tab-4')
    })
  })
})
