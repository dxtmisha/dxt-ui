// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, GeoFlagNational, ListList, ListSelectedList } from '@dxtmisha/functional'

import { MenuCountry } from '../MenuCountry'
import { MenuCountryDesign } from '../MenuCountryDesign'
import type { MenuControlItem } from '../../Menu'
import type { WindowEmitOptions } from '../../Window'
import type { MenuCountryProps } from '../props'
import type {
  MenuCountryClasses,
  MenuCountryComponents,
  MenuCountryExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockMenu = defineComponent({
  name: 'MockMenu',
  inheritAttrs: false,
  props: {
    'list': Array,
    'selected': [String, Number, Boolean, Array],
    'isSelectedByValue': Boolean,
    'disabled': Boolean,
    'onClick': Function,
    'onWindow': Function,
    'onUpdateValue': Function,
    'onUpdate:selected': Function
  },
  setup(props, { attrs, slots, expose }) {
    const controlRef = ref<HTMLElement>()
    const openState = ref(false)

    const items = computed(() => (props.list as Array<GeoFlagNational & { caption?: string }> | undefined) ?? [])
    const selectedItem = computed(() => items.value.find(item => item.value === props.selected))

    const emitWindow = (open: boolean) => {
      openState.value = open
      props.onWindow?.({
        id: 'menu-country-win',
        element: document.createElement('div'),
        control: controlRef.value as HTMLElement,
        open
      } satisfies WindowEmitOptions)
    }

    expose({
      getId: () => 'menu-country-win',
      getOpen: () => openState.value,
      getControl: () => controlRef.value,
      setOpen: (value: boolean) => emitWindow(value),
      toOpen: () => emitWindow(true),
      toClose: () => emitWindow(false),
      toggle: () => emitWindow(!openState.value),
      isSelected: () => Boolean(selectedItem.value),
      getSelectedList: () => selectedItem.value ? [selectedItem.value] : [],
      getSelectedNames: () => selectedItem.value ? [selectedItem.value.label] : [],
      getSelectedValues: () => selectedItem.value ? [selectedItem.value.value] : [],
      loading: () => false,
      previous: () => items.value[0]?.value,
      next: () => items.value[items.value.length - 1]?.value
    })

    const controlProps = computed<MenuControlItem>(() => ({
      class: 'd1-window__control',
      open: openState,
      classesWindow: {} as MenuControlItem['classesWindow'],
      loading: ref(false),
      isSelected: computed(() => Boolean(selectedItem.value)),
      selectedList: computed<ListList>(() => (
        selectedItem.value
          ? [{ ...selectedItem.value, type: 'item' as const, index: selectedItem.value.value }]
          : []
      )),
      selectedNames: computed(() => selectedItem.value ? [selectedItem.value.label] : []),
      selectedValues: computed(() => selectedItem.value ? [selectedItem.value.value] : []),
      previous: () => items.value[0]?.value,
      next: () => items.value[items.value.length - 1]?.value,
      onClick: async () => {
        if (!props.disabled) {
          emitWindow(!openState.value)
        }
      },
      onKeydown: async () => {},
      onContextmenu: async () => {},
      binds: {
        class: 'd1-window__control',
        onClick: async () => {
          if (!props.disabled) {
            emitWindow(!openState.value)
          }
        },
        onKeydown: async () => {},
        onContextmenu: async () => {}
      }
    }))

    return () => h(
      'div',
      {
        ...attrs,
        'data-disabled': String(Boolean(props.disabled)),
        'data-selected': String(props.selected ?? ''),
        'data-is-selected-by-value': String(Boolean(props.isSelectedByValue))
      },
      [
        h('div', { ref: controlRef, class: 'mock-control-wrapper' }, slots.control?.(controlProps.value)),
        slots.title?.(controlProps.value),
        slots.contextTop?.(controlProps.value),
        h(
          'ul',
          { class: 'mock-country-list' },
          items.value.map(item => h(
            'li',
            {
              'key': item.value,
              'class': 'mock-country-item',
              'data-value': item.value,
              'data-caption': item.caption ?? '',
              'onClick': (event: MouseEvent) => {
                props.onClick?.(event, { type: 'item', value: item.value })
                props['onUpdate:selected']?.(item.value)
                props.onUpdateValue?.(item.value)
              }
            },
            item.label
          ))
        ),
        slots.contextBottom?.(controlProps.value),
        slots.footer?.(controlProps.value)
      ]
    )
  }
})

describe('MenuCountry (Integrated Component)', () => {
  it('should render country list, support showPhoneCode and list filtering, and emit selection events', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    mountedCleanups.push(() => host.remove())

    const selectedState = ref<ListSelectedList>('US')
    const listState = ref<string[] | undefined>(['US', 'VN', 'GB'])
    const showPhoneCodeState = ref(false)
    const languageState = ref('en')
    const disabledState = ref(false)

    const emitted = {
      click: vi.fn(),
      window: vi.fn(),
      updateValue: vi.fn(),
      updateSelected: vi.fn(),
      updateModelSelected: vi.fn()
    }

    let exposedApi!: MenuCountryExpose

    const Wrapper = defineComponent({
      setup() {
        const props = reactive<MenuCountryProps>({
          selected: selectedState.value,
          list: listState.value,
          showPhoneCode: showPhoneCodeState.value,
          language: languageState.value,
          disabled: disabledState.value,
          isSelectedByValue: true
        })

        // Sync reactive refs into props for testing prop updates
        const design = new MenuCountryDesign<
          MenuCountryComponents,
          MenuCountryExpose,
          MenuCountryClasses,
          MenuCountryProps
        >(
          'd1.menuCountry',
          props,
          {
            classes: computed<ConstrClasses>(() => ({
              main: { 'd1-menuCountry': true }
            })),
            components: { menu: MockMenu },
            emits: ((event: string, ...args: unknown[]) => {
              if (event === 'click') emitted.click(...args)
              if (event === 'window') emitted.window(...args)
              if (event === 'updateValue') emitted.updateValue(...args)
              if (event === 'update:selected') {
                selectedState.value = args[0] as ListSelectedList
                props.selected = args[0] as ListSelectedList
                emitted.updateSelected(...args)
              }
              if (event === 'update:modelSelected') emitted.updateModelSelected(...args)
            }) as never
          },
          MenuCountry
        )

        exposedApi = design.expose()
        const render = design.render()

        return () => {
          props.list = listState.value
          props.showPhoneCode = showPhoneCodeState.value
          props.language = languageState.value
          props.disabled = disabledState.value
          return render()
        }
      }
    })

    const app = createApp({
      render: () => h(Wrapper, {}, {
        control: (slotProps: MenuControlItem) => h(
          'button',
          {
            ...slotProps.binds,
            'data-testid': 'trigger'
          },
          slotProps.selectedNames.value[0] ?? 'Select'
        )
      })
    })

    app.mount(host)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    const items = Array.from(host.querySelectorAll('.mock-country-item'))
    expect(items.map(item => item.getAttribute('data-value'))).toEqual(
      expect.arrayContaining(['US', 'VN', 'GB'])
    )
    expect(items.every(item => item.getAttribute('data-caption') === '')).toBe(true)

    const trigger = host.querySelector('[data-testid="trigger"]') as HTMLButtonElement
    expect(trigger.textContent).toContain('United States')

    // Click trigger to open window
    trigger.click()
    await nextTick()
    expect(emitted.window).toHaveBeenCalledWith(expect.objectContaining({ open: true }))
    expect(exposedApi.getOpen()).toBe(true)

    // Select VN item
    const vnItem = host.querySelector('.mock-country-item[data-value="VN"]') as HTMLElement
    vnItem.click()
    await nextTick()
    expect(emitted.click).toHaveBeenCalledWith(expect.any(MouseEvent), { type: 'item', value: 'VN' })
    expect(emitted.updateSelected).toHaveBeenCalledWith('VN')
    expect(emitted.updateModelSelected).toHaveBeenCalledWith('VN')
    expect(emitted.updateValue).toHaveBeenCalledWith('VN')
    expect(exposedApi.getSelectedValues()).toEqual(['VN'])

    // Enable showPhoneCode and filter list
    showPhoneCodeState.value = true
    listState.value = ['VN']
    await nextTick()

    const filtered = Array.from(host.querySelectorAll('.mock-country-item'))
    expect(filtered).toHaveLength(1)
    expect(filtered[0]?.getAttribute('data-value')).toBe('VN')
    expect(filtered[0]?.getAttribute('data-caption')).toBe('+84')

    // Disable component
    disabledState.value = true
    await nextTick()
    const windowCallsBefore = emitted.window.mock.calls.length
    trigger.click()
    await nextTick()
    expect(emitted.window.mock.calls.length).toBe(windowCallsBefore)
  })
})
