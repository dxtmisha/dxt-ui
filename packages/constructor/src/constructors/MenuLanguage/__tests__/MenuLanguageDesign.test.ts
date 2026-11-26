// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'

import { MenuLanguage } from '../MenuLanguage'
import { MenuLanguageDesign } from '../MenuLanguageDesign'
import type { MenuControlItem } from '../../Menu'
import type { MenuLanguageProps } from '../props'
import type { MenuLanguageClasses, MenuLanguageComponents, MenuLanguageExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockMenu = defineComponent({
  name: 'MockMenu',
  inheritAttrs: false,
  props: {
    list: Array,
    selected: [String, Number, Boolean, Array],
    isSelectedByValue: Boolean,
    disabled: Boolean
  },
  setup(props, { attrs, slots, expose }) {
    const controlRef = ref<HTMLElement>()
    const openState = ref(false)

    expose({
      getId: () => 'ml-id',
      getOpen: () => openState.value,
      getControl: () => controlRef.value,
      setOpen: (value: boolean) => {
        openState.value = value
      },
      toOpen: () => {
        openState.value = true
      },
      toClose: () => {
        openState.value = false
      },
      toggle: () => {
        openState.value = !openState.value
      },
      isSelected: () => Boolean(props.selected),
      getSelectedList: () => [],
      getSelectedNames: () => ['English'],
      getSelectedValues: () => ['en'],
      loading: () => false,
      previous: () => 'en',
      next: () => 'vi'
    })

    const controlProps = computed<MenuControlItem>(() => ({
      class: 'd1-window__control',
      open: openState,
      classesWindow: {} as MenuControlItem['classesWindow'],
      loading: ref(false),
      isSelected: computed(() => Boolean(props.selected)),
      selectedList: computed(() => []),
      selectedNames: computed(() => ['English']),
      selectedValues: computed(() => ['en']),
      previous: () => 'en',
      next: () => 'vi',
      onClick: async () => {},
      onKeydown: async () => {},
      onContextmenu: async () => {},
      binds: {
        class: 'd1-window__control',
        onClick: async () => {},
        onKeydown: async () => {},
        onContextmenu: async () => {}
      }
    }))

    return () => h(
      'div',
      {
        ...attrs,
        'data-count': String(props.list?.length ?? 0),
        'data-selected': String(props.selected ?? ''),
        'data-disabled': String(Boolean(props.disabled))
      },
      [
        h('div', { ref: controlRef, class: 'mock-menu-control' }, slots.control?.(controlProps.value)),
        h('div', { class: 'mock-menu-title' }, slots.title?.(controlProps.value)),
        h('div', { class: 'mock-menu-top' }, slots.contextTop?.(controlProps.value)),
        h('div', { class: 'mock-menu-bottom' }, slots.contextBottom?.(controlProps.value)),
        h('div', { class: 'mock-menu-footer' }, slots.footer?.(controlProps.value))
      ]
    )
  }
})

describe('MenuLanguageDesign', () => {
  it('should render Menu, forward all slots, merge external attrs/classes/styles, and expose menu API', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let exposedApi!: MenuLanguageExpose

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<MenuLanguageProps>({
          list: ['en', 'vi'],
          selected: 'en',
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
            classes: computed(() => ({
              main: { 'd1-menuLanguage': true }
            })),
            styles: computed(() => ({
              '--custom-language-var': '16px'
            })),
            components: {
              menu: MockMenu
            }
          }
        )

        exposedApi = design.expose()
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(
        TestComponent,
        {
          'class': 'external-language-class',
          'data-testid': 'menu-language-design'
        },
        {
          control: (slotProps: MenuControlItem) => h('button', { class: 'slot-control' }, slotProps.selectedNames.value[0]),
          title: () => h('div', { class: 'slot-title' }, 'Title'),
          contextTop: () => h('div', { class: 'slot-top' }, 'Top'),
          contextBottom: () => h('div', { class: 'slot-bottom' }, 'Bottom'),
          footer: () => h('div', { class: 'slot-footer' }, 'Footer')
        }
      )
    })

    app.mount(host)
    cleanups.push(() => app.unmount())
    await nextTick()

    const root = host.querySelector('[data-testid="menu-language-design"]') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-menuLanguage')).toBe(true)
    expect(root.classList.contains('d1-menuLanguage__menu')).toBe(true)
    expect(root.classList.contains('external-language-class')).toBe(true)
    expect(root.style.getPropertyValue('--custom-language-var')).toBe('16px')
    expect(root.getAttribute('data-count')).toBe('2')
    expect(root.getAttribute('data-selected')).toBe('en')

    expect(root.querySelector('.slot-control')?.textContent).toBe('English')
    expect(root.querySelector('.slot-title')?.textContent).toBe('Title')
    expect(root.querySelector('.slot-top')?.textContent).toBe('Top')
    expect(root.querySelector('.slot-bottom')?.textContent).toBe('Bottom')
    expect(root.querySelector('.slot-footer')?.textContent).toBe('Footer')

    expect(exposedApi.getId()).toBe('ml-id')
    expect(exposedApi.getOpen()).toBe(false)
    exposedApi.toOpen()
    expect(exposedApi.getOpen()).toBe(true)
    exposedApi.toClose()
    expect(exposedApi.getOpen()).toBe(false)
    exposedApi.toggle()
    expect(exposedApi.getOpen()).toBe(true)
    exposedApi.setOpen(false)
    expect(exposedApi.getOpen()).toBe(false)
    expect(exposedApi.isSelected()).toBe(true)
    expect(exposedApi.getSelectedNames()).toEqual(['English'])
    expect(exposedApi.getSelectedValues()).toEqual(['en'])
    expect(exposedApi.loading()).toBe(false)
    expect(exposedApi.previous()).toBe('en')
    expect(exposedApi.next()).toBe('vi')
  })

  it('should accept custom ItemConstructor via DI', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomMenuLanguage extends MenuLanguage {}
    const customSpy = vi.fn()

    class TrackedMenuLanguage extends CustomMenuLanguage {
      override get binds() {
        customSpy()
        return super.binds
      }
    }

    let exposedApi!: MenuLanguageExpose

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const design = new MenuLanguageDesign<
          MenuLanguageComponents,
          MenuLanguageExpose,
          MenuLanguageClasses,
          MenuLanguageProps
        >(
          'd1.menuLanguage',
          reactive<MenuLanguageProps>({ list: ['en'] }),
          {
            components: { menu: MockMenu }
          },
          TrackedMenuLanguage
        )

        exposedApi = design.expose()
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent)
    })

    app.mount(host)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(customSpy).toHaveBeenCalled()
    expect(exposedApi.getId()).toBe('ml-id')
  })
})
