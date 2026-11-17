// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'

import { ListMenuDesign } from '../ListMenuDesign'
import type { ListMenuProps } from '../props'
import type { ListMenuClasses, ListMenuComponents, ListMenuExpose } from '../types'
import type { WindowControlItem } from '../../Window'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockWindow = defineComponent({
  name: 'MockWindow',
  inheritAttrs: false,
  props: {
    open: Boolean,
    adaptive: String,
    axis: String,
    role: String,
    ariaHaspopup: String,
    inert: Boolean,
    autoTabIndex: Boolean,
    closeOnEsc: Boolean,
    disabled: Boolean,
    autoClose: Boolean,
    onWindow: [Function, Array]
  },
  setup(props, { attrs, slots, expose }) {
    const controlRef = ref<HTMLElement>()
    const openState = ref(props.open)

    expose({
      getId: () => 'win-id',
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
      }
    })

    const controlProps = computed<WindowControlItem>(() => ({
      class: 'd1-window__control',
      open: openState,
      classesWindow: {} as WindowControlItem['classesWindow'],
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
        'data-open': String(props.open),
        'data-adaptive': props.adaptive,
        'data-axis': props.axis,
        'data-role': props.role,
        'data-aria-haspopup': props.ariaHaspopup,
        'data-inert': String(props.inert),
        'data-auto-tab-index': String(props.autoTabIndex),
        'data-close-on-esc': String(props.closeOnEsc)
      },
      [
        h('div', { ref: controlRef, class: 'mock-window-control' }, slots.control?.(controlProps.value)),
        h('div', { class: 'mock-window-body' }, slots.default?.())
      ]
    )
  }
})

describe('ListMenuDesign', () => {
  it('should render Window, merge external attrs/classes/styles, and expose window API', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const externalClick = vi.fn()
    let exposedApi!: ListMenuExpose

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup(_, { slots }) {
        const props = reactive<ListMenuProps>({
          axis: 'y',
          divider: true
        })

        const design = new ListMenuDesign<ListMenuComponents, ListMenuExpose, ListMenuClasses, ListMenuProps>(
          'd1.listMenu',
          props,
          {
            slots,
            classes: computed(() => ({
              main: { 'd1-listMenu': true, 'd1-listMenu--divider': props.divider }
            })),
            styles: computed(() => ({
              '--custom-var': '10px'
            })),
            components: {
              window: MockWindow
            }
          } as unknown as ConstructorParameters<typeof ListMenuDesign>[2]
        )

        exposedApi = design.expose()
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {
        'class': 'custom-list-menu',
        'style': { marginTop: '12px' },
        'data-testid': 'menu-root',
        'onClick': externalClick
      }, {
        head: (controlProps: WindowControlItem) => h('button', { class: ['head-btn', controlProps.class] }, 'Head'),
        list: () => h('div', { class: 'menu-list' }, 'Items')
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.classList.contains('d1-listMenu')).toBe(true)
    expect(rootElement.classList.contains('d1-listMenu--divider')).toBe(true)
    expect(rootElement.classList.contains('d1-listMenu__window')).toBe(true)
    expect(rootElement.classList.contains('custom-list-menu')).toBe(true)
    expect(rootElement.style.marginTop).toBe('12px')
    expect(rootElement.style.getPropertyValue('--custom-var')).toBe('10px')
    expect(rootElement.dataset.testid).toBe('menu-root')
    expect(rootElement.getAttribute('data-open')).toBe('false')
    expect(rootElement.getAttribute('data-adaptive')).toBe('menu')
    expect(rootElement.getAttribute('data-axis')).toBe('y')
    expect(rootElement.getAttribute('data-role')).toBe('menu')
    expect(rootElement.getAttribute('data-aria-haspopup')).toBe('menu')
    expect(rootElement.getAttribute('data-inert')).toBe('false')
    expect(rootElement.getAttribute('data-auto-tab-index')).toBe('false')
    expect(rootElement.getAttribute('data-close-on-esc')).toBe('false')

    expect(host.querySelector('.head-btn')?.textContent).toBe('Head')
    expect(host.querySelector('.menu-list')?.textContent).toBe('Items')

    expect(exposedApi.getId()).toBe('win-id')
    expect(exposedApi.getOpen()).toBe(false)
    exposedApi.toOpen()
    expect(exposedApi.getOpen()).toBe(true)
    exposedApi.toClose()
    expect(exposedApi.getOpen()).toBe(false)
    exposedApi.toggle()
    expect(exposedApi.getOpen()).toBe(true)
    expect(exposedApi.getControl()).toBe(host.querySelector('.mock-window-control'))
    expect(exposedApi.getWindowElement()).toBeDefined()

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should render safely when window component is omitted', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let exposedApi!: ListMenuExpose

    const TestComponent = defineComponent({
      setup() {
        const design = new ListMenuDesign<ListMenuComponents, ListMenuExpose, ListMenuClasses, ListMenuProps>(
          'd1.listMenu',
          reactive({})
        )
        exposedApi = design.expose()
        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(host.innerHTML).toBe('')
    expect(exposedApi.getOpen()).toBe(false)
    expect(exposedApi.getWindowElement()).toBeUndefined()
  })
})
