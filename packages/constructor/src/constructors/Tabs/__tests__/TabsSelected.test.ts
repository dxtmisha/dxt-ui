// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'

import type { ModelInclude } from '../../../classes/ModelInclude'
import type { TabsProps } from '../props'
import { TabsSelected } from '../TabsSelected'

describe('TabsSelected', () => {
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
    it('should initialize selected item from props.selected without calling model getter', () => {
      const props = reactive<TabsProps>({
        selected: 'tab-2',
        tabs: [
          { value: 'tab-1', label: 'Tab 1' },
          { value: 'tab-2', label: 'Tab 2' }
        ]
      })
      const { getModel } = createModelMock()
      const tabsSelected = new TabsSelected(props, getModel)

      expect(tabsSelected.item.value).toBe('tab-2')
      expect(tabsSelected.is('tab-2')).toBe(true)
      expect(tabsSelected.is('tab-1')).toBe(false)
      expect(tabsSelected.getString()).toBe('tab-2')
      expect(getModel).not.toHaveBeenCalled()
    })

    it('should prioritize props.modelSelected over props.selected and first tab', () => {
      const props = reactive<TabsProps>({
        modelSelected: 'tab-3',
        selected: 'tab-2',
        tabs: [
          { value: 'tab-1', label: 'Tab 1' },
          { value: 'tab-2', label: 'Tab 2' },
          { value: 'tab-3', label: 'Tab 3' }
        ]
      })
      const { getModel } = createModelMock()
      const tabsSelected = new TabsSelected(props, getModel)

      expect(tabsSelected.item.value).toBe('tab-3')
      expect(tabsSelected.is('tab-3')).toBe(true)
      expect(tabsSelected.getString()).toBe('tab-3')
    })

    it('should fallback to first tab item from array, record, config object, or tabsNavigationAttrs.list', () => {
      const { getModel } = createModelMock()

      const fromArray = new TabsSelected(
        reactive<TabsProps>({
          tabs: [
            { value: 'tab-1', label: 'Tab 1' },
            { value: 'tab-2', label: 'Tab 2' }
          ]
        }),
        getModel
      )
      expect(fromArray.item.value).toBe('tab-1')

      const fromRecord = new TabsSelected(
        reactive<TabsProps>({
          tabs: {
            first: { value: 'rec-1', label: 'Record 1' },
            second: { value: 'rec-2', label: 'Record 2' }
          }
        }),
        getModel
      )
      expect(fromRecord.item.value).toBe('rec-1')

      const fromConfigObject = new TabsSelected(
        reactive<TabsProps>({
          tabs: {
            divider: true,
            keyValue: 'code',
            list: [
              { code: 'cfg-1', label: 'Config 1' },
              { code: 'cfg-2', label: 'Config 2' }
            ] as unknown as NonNullable<TabsProps['tabsNavigationAttrs']>['list']
          }
        }),
        getModel
      )
      expect(fromConfigObject.item.value).toBe('cfg-1')

      const fromNavigationAttrs = new TabsSelected(
        reactive<TabsProps>({
          tabsNavigationAttrs: {
            keyValue: 'slug',
            list: [
              { slug: 'nav-1', label: 'Nav 1' }
            ] as unknown as NonNullable<TabsProps['tabsNavigationAttrs']>['list']
          }
        }),
        getModel
      )
      expect(fromNavigationAttrs.item.value).toBe('nav-1')
    })

    it('should handle empty or undefined tabs gracefully and return undefined from getString()', () => {
      const { getModel } = createModelMock()

      const emptyProps = new TabsSelected(reactive<TabsProps>({}), getModel)
      expect(emptyProps.item.value).toBeUndefined()
      expect(emptyProps.getString()).toBeUndefined()
      expect(emptyProps.is('tab-1')).toBe(false)
      expect(emptyProps.is(undefined)).toBe(false)

      const emptyList = new TabsSelected(reactive<TabsProps>({ tabs: [] }), getModel)
      expect(emptyList.item.value).toBeUndefined()
      expect(emptyList.getString()).toBeUndefined()
    })
  })

  describe('Falsy boundary values and stringification', () => {
    it('should preserve numeric 0, boolean false, and empty string without falling back', () => {
      const { getModel } = createModelMock()

      const zeroModel = new TabsSelected(
        reactive<TabsProps>({
          modelSelected: 0,
          tabs: [
            { value: 0, label: 'Zero' },
            { value: 1, label: 'One' }
          ]
        }),
        getModel
      )
      expect(zeroModel.item.value).toBe(0)
      expect(zeroModel.is(0)).toBe(true)
      expect(zeroModel.is('0')).toBe(true)
      expect(zeroModel.is(1)).toBe(false)
      expect(zeroModel.getString()).toBe('0')

      const zeroFirst = new TabsSelected(
        reactive<TabsProps>({
          tabs: [
            { value: 0, label: 'Zero' },
            { value: 1, label: 'One' }
          ]
        }),
        getModel
      )
      expect(zeroFirst.item.value).toBe(0)
      expect(zeroFirst.getString()).toBe('0')

      const falseModel = new TabsSelected(
        reactive<TabsProps>({
          modelSelected: false,
          tabs: [{ value: 'tab-1', label: 'Tab 1' }]
        }),
        getModel
      )
      expect(falseModel.item.value).toBe(false)
      expect(falseModel.is(false)).toBe(true)
      expect(falseModel.getString()).toBe('false')

      const emptyStringSelected = new TabsSelected(
        reactive<TabsProps>({
          selected: '',
          tabs: [{ value: 'tab-1', label: 'Tab 1' }]
        }),
        getModel
      )
      expect(emptyStringSelected.item.value).toBe('')
      expect(emptyStringSelected.getString()).toBe('')
    })

    it('should support Unicode, Cyrillic, Vietnamese, and Emoji tab values', () => {
      const { getModel } = createModelMock()
      const unicodeValue = 'tiếng-Việt-Вкладка-🚀'
      const tabsSelected = new TabsSelected(
        reactive<TabsProps>({
          selected: unicodeValue
        }),
        getModel
      )

      expect(tabsSelected.item.value).toBe(unicodeValue)
      expect(tabsSelected.is(unicodeValue)).toBe(true)
      expect(tabsSelected.getString()).toBe(unicodeValue)
    })
  })

  describe('State mutations, lazy model emission, and lifecycle watchers', () => {
    it('should update item, lazily emit model only on value changes, and return this', () => {
      const props = reactive<TabsProps>({ selected: 'tab-1' })
      const { emit, getModel } = createModelMock()
      const tabsSelected = new TabsSelected(props, getModel)

      expect(tabsSelected.set('tab-2')).toBe(tabsSelected)
      expect(tabsSelected.item.value).toBe('tab-2')
      expect(getModel).toHaveBeenCalledTimes(1)
      expect(emit).toHaveBeenCalledTimes(1)
      expect(emit).toHaveBeenCalledWith('tab-2')

      // Repeated set with identical value should not emit again
      tabsSelected.set('tab-2')
      expect(emit).toHaveBeenCalledTimes(1)

      // Setting undefined clears selection and emits undefined
      tabsSelected.set(undefined)
      expect(tabsSelected.item.value).toBeUndefined()
      expect(tabsSelected.getString()).toBeUndefined()
      expect(emit).toHaveBeenCalledTimes(2)
      expect(emit).toHaveBeenLastCalledWith(undefined)
    })

    it('should register prop watcher strictly onMounted and dispose it onUnmounted without feedback emits', async () => {
      const props = reactive<TabsProps>({
        selected: 'tab-1',
        tabs: [
          { value: 'tab-1', label: 'Tab 1' },
          { value: 'tab-2', label: 'Tab 2' }
        ]
      })
      const { emit, getModel } = createModelMock()
      const tabsSelected = new TabsSelected(props, getModel)

      // Before onMounted, prop mutations must not trigger watcher
      props.selected = 'tab-2'
      await nextTick()
      expect(tabsSelected.item.value).toBe('tab-1')

      // Register watcher on mount (and verify idempotency on repeated onMounted)
      tabsSelected.onMounted()
      tabsSelected.onMounted()

      props.selected = 'tab-3'
      await nextTick()
      expect(tabsSelected.item.value).toBe('tab-3')
      expect(emit).not.toHaveBeenCalled()
      expect(getModel).not.toHaveBeenCalled()

      props.modelSelected = 'tab-4'
      await nextTick()
      expect(tabsSelected.item.value).toBe('tab-4')
      expect(emit).not.toHaveBeenCalled()

      props.modelSelected = 0
      await nextTick()
      expect(tabsSelected.item.value).toBe(0)
      expect(tabsSelected.getString()).toBe('0')

      // Dispose watcher on unmount
      tabsSelected.onUnmounted()

      props.modelSelected = 'tab-5'
      await nextTick()
      expect(tabsSelected.item.value).toBe(0)
    })

    it('should maintain independent state across separate instances', () => {
      const { getModel: getModelA } = createModelMock()
      const { getModel: getModelB } = createModelMock()

      const first = new TabsSelected(reactive<TabsProps>({ selected: 'a' }), getModelA)
      const second = new TabsSelected(reactive<TabsProps>({ selected: 'b' }), getModelB)

      first.set('a-updated')

      expect(first.item.value).toBe('a-updated')
      expect(second.item.value).toBe('b')
    })
  })
})
