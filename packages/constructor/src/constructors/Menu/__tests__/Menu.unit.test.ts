// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName, ListDataRef, type ListSelectedList } from '@dxtmisha/functional'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { BarsInclude, type BarsProps, type BarsPropsInclude } from '../../Bars'
import { WindowInclude, type WindowProps, type WindowPropsInclude } from '../../Window'
import { Menu, type MenuConstructors } from '../Menu'
import { MenuGo } from '../MenuGo'
import { MenuRequest } from '../MenuRequest'
import { MenuValue } from '../MenuValue'
import { MenuWindow } from '../MenuWindow'
import type { MenuProps } from '../props'

afterEach(() => {
  vi.restoreAllMocks()
})

class InspectableMenu extends Menu {
  get instantiatedItems(): Partial<Record<keyof MenuConstructors, unknown>> {
    return this.instances
  }
}

describe('Menu (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.menu')

  describe('Lazy instantiation, canCreate, and Dependency Injection', () => {
    it('should not instantiate any subordinate helpers until accessed', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuProps>({
        barsHide: true,
        barsBackHide: true
      })

      scope.run(() => {
        const menu = new InspectableMenu(props, element, naming)

        expect(menu.hasInstance('bars')).toBe(false)
        expect(menu.hasInstance('data')).toBe(false)
        expect(menu.hasInstance('event')).toBe(false)
        expect(menu.hasInstance('go')).toBe(false)
        expect(menu.hasInstance('menuWindow')).toBe(false)
        expect(menu.hasInstance('model')).toBe(false)
        expect(menu.hasInstance('request')).toBe(false)
        expect(menu.hasInstance('value')).toBe(false)
        expect(menu.hasInstance('window')).toBe(false)

        expect(menu.callInstance('bars', item => item)).toBeUndefined()
        expect(menu.hasInstance('bars')).toBe(false)
      })

      scope.stop()
    })

    it('should instantiate bars via callInstance when BarsInclude.is(props) is true', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuProps>({
        barsHide: false,
        barsLabel: 'Title'
      })

      scope.run(() => {
        const menu = new InspectableMenu(props, element, naming)
        const bars = menu.callInstance('bars', item => item)

        expect(bars).toBeInstanceOf(BarsInclude)
        expect(menu.hasInstance('bars')).toBe(true)
      })

      scope.stop()
    })

    it('should support overriding all constructors via DI', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuProps>({})

      class CustomBars<
        Props extends BarsPropsInclude = BarsPropsInclude,
        PropsExtra extends BarsProps = BarsProps
      > extends BarsInclude<Props, PropsExtra> {}
      class CustomData extends ListDataRef {}
      class CustomEvent extends EventClickInclude {}
      class CustomGo extends MenuGo {}
      class CustomMenuWindow extends MenuWindow {}
      class CustomModel extends ModelInclude<ListSelectedList | undefined> {}
      class CustomRequest extends MenuRequest {}
      class CustomValue extends MenuValue {}
      class CustomWindow<
        Props extends WindowPropsInclude = WindowPropsInclude,
        PropsExtra extends WindowProps = WindowProps
      > extends WindowInclude<Props, PropsExtra> {}

      scope.run(() => {
        const menu = new Menu(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            bars: CustomBars,
            data: CustomData,
            event: CustomEvent,
            go: CustomGo,
            menuWindow: CustomMenuWindow,
            model: CustomModel,
            request: CustomRequest,
            value: CustomValue,
            window: CustomWindow
          }
        )

        expect(menu.i('bars')).toBeInstanceOf(CustomBars)
        expect(menu.i('request')).toBeInstanceOf(CustomRequest)
        expect(menu.i('model')).toBeInstanceOf(CustomModel)
        expect(menu.i('value')).toBeInstanceOf(CustomValue)
        expect(menu.i('data')).toBeInstanceOf(CustomData)
        expect(menu.i('go')).toBeInstanceOf(CustomGo)
        expect(menu.i('menuWindow')).toBeInstanceOf(CustomMenuWindow)
        expect(menu.i('event')).toBeInstanceOf(CustomEvent)
        expect(menu.i('window')).toBeInstanceOf(CustomWindow)
      })

      scope.stop()
    })
  })

  describe('Bindings, slotData, and event handlers', () => {
    it('should build binds for List and compute reactive slotData', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuProps>({
        list: [
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' }
        ],
        selected: 'one',
        highlightLengthStart: 2,
        showSearch: true,
        filterMode: true,
        liteThreshold: 20,
        keyLabel: 'label',
        keyValue: 'value',
        max: 3,
        tag: 'button',
        selectionStyle: 'checkmark',
        lazy: true,
        lazyMargin: '128px 0px',
        lazyCacheHeight: false,
        embedded: false,
        step: 1,
        isSelectedByValue: true
      })

      scope.run(() => {
        const menu = new Menu(props, element, naming)

        expect(menu.binds).toMatchObject({
          highlightLengthStart: 2,
          showSearch: true,
          filterMode: true,
          liteThreshold: 20,
          keyLabel: 'label',
          keyValue: 'value',
          max: 3,
          tag: 'button',
          selectionStyle: 'checkmark',
          lazy: true,
          lazyMargin: '128px 0px',
          lazyCacheHeight: false,
          control: true
        })
        expect(typeof menu.binds.onClick).toBe('function')
        expect(typeof menu.binds.onClose).toBe('function')

        const slotData = menu.slotData
        expect(slotData.loading.value).toBe(false)
        expect(slotData.isSelected.value).toBe(true)
        expect(slotData.selectedValues.value).toEqual(['one'])

        expect(slotData.next()).toBe('two')
        expect(slotData.selectedValues.value).toEqual(['two'])

        expect(slotData.previous()).toBe('one')
        expect(slotData.selectedValues.value).toEqual(['one'])

        props.embedded = true
        expect(menu.binds.control).toBe(false)
      })

      scope.stop()
    })

    it('should update value and emit click on onClick, and handle onClickSlot safely', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const emits = vi.fn()
      const props = reactive<MenuProps>({
        isSelectedByValue: true
      })

      scope.run(() => {
        const menu = new Menu(props, element, naming, undefined, undefined, emits)
        const mouseEvent = new MouseEvent('click')

        menu.onClick(mouseEvent, { type: 'item', value: 'chosen', detail: { id: 1 } })
        expect(menu.i('value').selected.value).toBe('chosen')
        expect(emits).toHaveBeenCalledWith('update:selected', 'chosen')
        expect(emits).toHaveBeenCalledWith('click', mouseEvent, { type: 'item', value: 'chosen', detail: { id: 1 } })
        expect(emits).toHaveBeenCalledWith('clickLite', { type: 'item', value: 'chosen', detail: { id: 1 } })

        emits.mockClear()
        const wrapper = document.createElement('div')
        const slotItem = document.createElement('button')
        slotItem.dataset.value = 'slot-action'
        wrapper.appendChild(slotItem)

        const listContainer = document.createElement('div')
        listContainer.className = naming.getSubClass('list')
        const listChild = document.createElement('span')
        listChild.dataset.value = 'list-item'
        listContainer.appendChild(listChild)
        wrapper.appendChild(listContainer)

        menu.onClickSlot({ target: slotItem } as unknown as Event)
        expect(emits).toHaveBeenCalledWith('clickSlot', 'slot-action')

        emits.mockClear()
        menu.onClickSlot({ target: listChild } as unknown as Event)
        expect(emits).not.toHaveBeenCalled()

        const textNode = document.createTextNode('plain text')
        menu.onClickSlot({ target: textNode } as unknown as Event)
        expect(emits).not.toHaveBeenCalled()
      })

      scope.stop()
    })
  })
})
