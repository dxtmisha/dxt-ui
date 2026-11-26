// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, effectScope, h, nextTick, reactive, ref } from 'vue'
import { type ConstrClasses, DesignName, type GeoFlagNational, type ListList, type ListSelectedList } from '@dxtmisha/functional'

import { MenuLanguage } from '../MenuLanguage'
import { MenuLanguageDesign } from '../MenuLanguageDesign'
import type { MenuControlItem } from '../../Menu'
import type { WindowEmitOptions } from '../../Window'
import type { MenuLanguageProps } from '../props'
import type {
  MenuLanguageClasses,
  MenuLanguageComponents,
  MenuLanguageExpose
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

    const items = computed(() => (props.list as Array<GeoFlagNational> | undefined) ?? [])
    const selectedItem = computed(() => items.value.find(item => item.value === props.selected))

    const emitWindow = (open: boolean) => {
      openState.value = open
      props.onWindow?.({
        id: 'menu-language-win',
        element: document.createElement('div'),
        control: controlRef.value as HTMLElement,
        open
      } satisfies WindowEmitOptions)
    }

    expose({
      getId: () => 'menu-language-win',
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
          { class: 'mock-language-list' },
          items.value.map(item => h(
            'li',
            {
              'key': item.value,
              'class': 'mock-language-item',
              'data-value': item.value,
              'data-language': item.language ?? '',
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

describe('MenuLanguage (Integrated Component)', () => {
  it('should render language list, support list filtering and language changes, and emit selection events', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    mountedCleanups.push(() => host.remove())

    const selectedState = ref<ListSelectedList>('en')
    const listState = ref<string[] | undefined>(['en', 'vi', 'ru'])
    const languageState = ref('en')
    const disabledState = ref(false)

    const emitted = {
      click: vi.fn(),
      window: vi.fn(),
      updateValue: vi.fn(),
      updateSelected: vi.fn(),
      updateModelSelected: vi.fn()
    }

    let exposedApi!: MenuLanguageExpose

    const Wrapper = defineComponent({
      setup() {
        const props = reactive<MenuLanguageProps>({
          selected: selectedState.value,
          list: listState.value,
          language: languageState.value,
          disabled: disabledState.value,
          isSelectedByValue: true
        })

        const design = new MenuLanguageDesign<
          MenuLanguageComponents,
          MenuLanguageExpose,
          MenuLanguageClasses,
          MenuLanguageProps
        >(
          'd1.menuLanguage',
          props,
          {
            classes: computed<ConstrClasses>(() => ({
              main: { 'd1-menuLanguage': true }
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
          MenuLanguage
        )

        exposedApi = design.expose()
        const render = design.render()

        return () => {
          props.list = listState.value
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

    const items = Array.from(host.querySelectorAll('.mock-language-item'))
    const values = items.map(item => item.getAttribute('data-value'))
    expect(values).toEqual(expect.arrayContaining(['en', 'vi', 'ru']))

    const trigger = host.querySelector('[data-testid="trigger"]') as HTMLButtonElement
    expect(trigger.textContent).toBeTruthy()
    expect(trigger.textContent).not.toBe('Select')

    // Click trigger to open window
    trigger.click()
    await nextTick()
    expect(emitted.window).toHaveBeenCalledWith(expect.objectContaining({ open: true }))
    expect(exposedApi.getOpen()).toBe(true)

    // Select vi item
    const viItem = host.querySelector('.mock-language-item[data-value="vi"]') as HTMLElement
    viItem.click()
    await nextTick()
    expect(emitted.click).toHaveBeenCalledWith(expect.any(MouseEvent), { type: 'item', value: 'vi' })
    expect(emitted.updateSelected).toHaveBeenCalledWith('vi')
    expect(emitted.updateModelSelected).toHaveBeenCalledWith('vi')
    expect(emitted.updateValue).toHaveBeenCalledWith('vi')
    expect(exposedApi.getSelectedValues()).toEqual(['vi'])

    // Filter list to a single language and switch representation language
    listState.value = ['vi']
    languageState.value = 'vi'
    await nextTick()

    const filtered = Array.from(host.querySelectorAll('.mock-language-item'))
    expect(filtered).toHaveLength(1)
    expect(filtered[0]?.getAttribute('data-value')).toBe('vi')

    // Disable component
    disabledState.value = true
    await nextTick()
    const windowCallsBefore = emitted.window.mock.calls.length
    trigger.click()
    await nextTick()
    expect(emitted.window.mock.calls.length).toBe(windowCallsBefore)
  })

  it('should populate searchable language metadata on list items', () => {
    const scope = effectScope()
    const props = reactive<MenuLanguageProps>({
      list: ['en', 'vi', 'ru'],
      language: 'en'
    })

    scope.run(() => {
      const menuLanguage = new MenuLanguage(
        props,
        ref<HTMLDivElement>(),
        new DesignName('d1.menuLanguage')
      )

      const list = menuLanguage.binds.list as Array<Record<string, unknown>>
      const viItem = list.find(item => item.value === 'vi')
      expect(viItem).toBeDefined()
      expect(String(viItem?.search ?? '')).toContain('vi')
      expect(String(viItem?.search ?? '')).toContain('Tiếng Việt')

      const enItem = list.find(item => item.value === 'en')
      expect(enItem).toBeDefined()
      expect(String(enItem?.search ?? '')).toContain('en')
      expect(String(enItem?.search ?? '')).toContain('English')
    })

    scope.stop()
  })
})
