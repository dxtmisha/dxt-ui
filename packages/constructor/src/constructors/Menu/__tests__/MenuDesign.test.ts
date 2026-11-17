// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'

import { MenuDesign } from '../MenuDesign'
import type { MenuProps } from '../props'
import type { MenuClasses, MenuComponents, MenuExpose } from '../types'
import type { WindowControlItem } from '../../Window'
import type { MenuControlItem } from '../basicTypes'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockWindow = defineComponent({
  name: 'MockWindow',
  inheritAttrs: false,
  props: {
    closeOnEsc: Boolean,
    ariaHaspopup: String,
    embedded: Boolean,
    disabled: Boolean
  },
  setup(props, { attrs, slots, expose }) {
    const controlRef = ref<HTMLElement>()
    const openState = ref(false)

    expose({
      getId: () => 'menu-win-1',
      getOpen: () => openState.value,
      getControl: () => controlRef.value,
      setOpen: (value: boolean) => { openState.value = value },
      toOpen: () => { openState.value = true },
      toClose: () => { openState.value = false },
      toggle: () => { openState.value = !openState.value }
    })

    const controlItem = computed<WindowControlItem>(() => ({
      class: 'd1-window__control',
      open: openState,
      classesWindow: {} as WindowControlItem['classesWindow'],
      onClick: async () => { openState.value = !openState.value },
      onKeydown: async () => {},
      onContextmenu: async () => {},
      binds: {
        class: 'd1-window__control',
        onClick: async () => { openState.value = !openState.value },
        onKeydown: async () => {},
        onContextmenu: async () => {}
      }
    }))

    return () => h(
      'div',
      {
        ...attrs,
        'class': ['mock-window', attrs.class],
        'data-close-on-esc': String(props.closeOnEsc),
        'data-aria-haspopup': props.ariaHaspopup,
        'data-embedded': String(props.embedded)
      },
      [
        h('div', { ref: controlRef, class: 'mock-window-control' }, slots.control?.(controlItem.value)),
        h('div', { class: 'mock-window-title' }, slots.title?.(controlItem.value)),
        h('div', { class: 'mock-window-body' }, slots.default?.(controlItem.value)),
        h('div', { class: 'mock-window-footer' }, slots.footer?.(controlItem.value))
      ]
    )
  }
})

const MockBars = defineComponent({
  name: 'MockBars',
  inheritAttrs: false,
  props: {
    label: String,
    backHide: Boolean
  },
  setup(props, { attrs }) {
    return () => h('div', { ...attrs, class: ['mock-bars', attrs.class] }, props.label ?? 'Bars')
  }
})

const MockList = defineComponent({
  name: 'MockList',
  inheritAttrs: false,
  props: {
    list: Array,
    selected: [String, Number, Boolean, Array],
    highlight: String,
    lite: Boolean,
    role: String,
    roleItem: String,
    control: Boolean
  },
  setup(props, { attrs }) {
    return () => h('div', {
      ...attrs,
      'class': ['mock-list', attrs.class],
      'data-selected': String(props.selected ?? ''),
      'data-highlight': props.highlight ?? '',
      'data-role': props.role ?? '',
      'data-role-item': props.roleItem ?? '',
      'data-control': String(props.control),
      'data-count': String(props.list?.length ?? 0)
    })
  }
})

describe('MenuDesign', () => {
  it('should render Window, conditional Bars, List with merged listAttrs, slots, and exposed API', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const rootExternalClick = vi.fn()
    const listAttrsClick = vi.fn()
    const emits = vi.fn()
    let exposedApi!: MenuExpose
    const props = reactive<MenuProps>({
      list: [
        { label: 'Item A', value: 'a' },
        { label: 'Item B', value: 'b' }
      ],
      selected: 'a',
      isSelectedByValue: true,
      barsHide: false,
      barsLabel: 'Menu Header',
      highlight: 'Item',
      roleList: 'listbox',
      roleItem: 'option',
      listAttrs: {
        class: 'custom-list-class',
        onClick: listAttrsClick
      }
    })

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup(_, { slots }) {
        const design = new MenuDesign<MenuComponents, MenuExpose, MenuClasses, MenuProps>(
          'd1.menu',
          props,
          {
            emits,
            slots,
            classes: computed(() => ({
              main: { 'd1-menu': true, 'd1-menu--hideList': Boolean(props.hideList) }
            })),
            styles: computed(() => ({
              '--menu-gap': '4px'
            })),
            components: {
              window: MockWindow,
              bars: MockBars,
              list: MockList
            }
          } as unknown as ConstructorParameters<typeof MenuDesign>[2]
        )

        exposedApi = design.expose()
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {
        'class': 'custom-menu-root',
        'data-testid': 'menu-list-wrapper',
        'onClick': rootExternalClick
      }, {
        control: (slotProps: MenuControlItem) => h('button', { class: 'trigger-btn' }, `Open:${slotProps.selectedValues.value.join(',')}`),
        title: () => h('span', { class: 'custom-title' }, 'ExtraTitle'),
        contextTop: () => h('div', { class: 'top-slot' }, 'Top'),
        contextBottom: () => h('div', { class: 'bottom-slot' }, 'Bottom'),
        footer: () => h('div', { class: 'footer-slot' }, 'Footer')
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const windowEl = host.querySelector('.mock-window') as HTMLElement
    expect(windowEl.classList.contains('d1-menu')).toBe(true)
    expect(windowEl.classList.contains('d1-menu__window')).toBe(true)
    expect(windowEl.classList.contains('custom-menu-root')).toBe(true)
    expect(windowEl.style.getPropertyValue('--menu-gap')).toBe('4px')
    expect(windowEl.getAttribute('data-close-on-esc')).toBe('false')
    expect(windowEl.getAttribute('data-aria-haspopup')).toBe('listbox')

    expect(host.querySelector('.trigger-btn')?.textContent).toBe('Open:a')
    expect(host.querySelector('.mock-bars')?.textContent).toBe('Menu Header')
    expect(host.querySelector('.custom-title')?.textContent).toBe('ExtraTitle')
    expect(host.querySelector('.top-slot')?.textContent).toBe('Top')
    expect(host.querySelector('.bottom-slot')?.textContent).toBe('Bottom')
    expect(host.querySelector('.footer-slot')?.textContent).toBe('Footer')

    const wrapperEl = host.querySelector('[data-testid="menu-list-wrapper"]') as HTMLElement
    expect(wrapperEl).not.toBeNull()

    const listEl = host.querySelector('.mock-list') as HTMLElement
    expect(listEl.classList.contains('d1-menu__list')).toBe(true)
    expect(listEl.classList.contains('custom-list-class')).toBe(true)
    expect(listEl.getAttribute('data-selected')).toBe('a')
    expect(listEl.getAttribute('data-highlight')).toBe('Item')
    expect(listEl.getAttribute('data-role')).toBe('listbox')
    expect(listEl.getAttribute('data-role-item')).toBe('option')
    expect(listEl.getAttribute('data-count')).toBe('2')

    listEl.click()
    expect(listAttrsClick).toHaveBeenCalledTimes(1)
    expect(rootExternalClick).toHaveBeenCalledTimes(1)

    expect(exposedApi.getId()).toBe('menu-win-1')
    expect(exposedApi.isSelected()).toBe(true)
    expect(exposedApi.getSelectedValues()).toEqual(['a'])
    expect(exposedApi.getSelectedNames()).toEqual(['Item A'])
    expect(exposedApi.getSelectedList()).toHaveLength(1)
    expect(exposedApi.loading()).toBe(false)
    expect(exposedApi.next()).toBe('b')
    expect(exposedApi.previous()).toBe('a')

    props.hideList = true
    await nextTick()
    expect(host.querySelector('.mock-list')).toBeNull()
  })

  it('should omit Bars when barsHide is true and handle missing components safely', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new MenuDesign<MenuComponents, MenuExpose, MenuClasses, MenuProps>(
          'd1.menu',
          reactive({ barsHide: true, barsBackHide: true }),
          {
            components: {
              window: MockWindow,
              bars: MockBars,
              list: MockList
            }
          } as unknown as ConstructorParameters<typeof MenuDesign>[2]
        )

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(host.querySelector('.mock-bars')).toBeNull()
    expect(host.querySelector('.mock-list')).not.toBeNull()
  })
})
