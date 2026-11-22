// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  ref
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ListMenu, type ListMenuConstructors } from '../ListMenu'
import { ListMenuDesign } from '../ListMenuDesign'
import type { ListMenuProps } from '../props'
import type {
  ListMenuClasses,
  ListMenuComponents,
  ListMenuExpose,
  ListMenuSlots
} from '../types'
import type { WindowControlItem, WindowEmitOptions } from '../../Window'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableListMenu extends ListMenu {
  get instantiatedItems(): Partial<Record<keyof ListMenuConstructors, unknown>> {
    return this.instances
  }
}

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
    disableFocusReturn: Boolean,
    preparation: Function,
    opening: Function,
    closing: Function,
    onWindow: [Function, Array]
  },
  emits: ['window'],
  setup(props, { attrs, slots, expose }) {
    const controlRef = ref<HTMLElement>()
    const bodyRef = ref<HTMLDivElement>()
    const internalOpen = ref(props.open)

    const emitWindow = (open: boolean) => {
      internalOpen.value = open
      const payload: WindowEmitOptions = {
        id: 'list-menu-window',
        element: bodyRef.value as HTMLDivElement,
        control: controlRef.value as HTMLElement,
        open
      }

      if (Array.isArray(props.onWindow)) {
        (props.onWindow as Array<(options: WindowEmitOptions) => void>).forEach(handler => handler(payload))
      } else {
        props.onWindow?.(payload)
      }
    }

    const controlData = computed<WindowControlItem>(() => ({
      class: 'd1-window__control',
      open: internalOpen,
      classesWindow: {} as WindowControlItem['classesWindow'],
      onClick: async () => {
        if (!props.disabled) {
          emitWindow(!internalOpen.value)
        }
      },
      onKeydown: async () => {},
      onContextmenu: async () => {},
      binds: {
        class: 'd1-window__control',
        onClick: async () => {
          if (!props.disabled) {
            emitWindow(!internalOpen.value)
          }
        },
        onKeydown: async () => {},
        onContextmenu: async () => {}
      }
    }))

    expose({
      getId: () => 'list-menu-window',
      getOpen: () => internalOpen.value || props.open,
      getControl: () => controlRef.value,
      setOpen: (value: boolean) => emitWindow(value),
      toOpen: () => emitWindow(true),
      toClose: () => emitWindow(false),
      toggle: () => emitWindow(!(internalOpen.value || props.open))
    })

    return () => h(
      'div',
      {
        ...attrs,
        'ref': bodyRef,
        'data-open': String(props.open),
        'data-axis': props.axis,
        'data-disabled': String(props.disabled),
        'data-auto-close': String(props.autoClose),
        'data-disable-focus-return': String(props.disableFocusReturn)
      },
      [
        h(
          'div',
          {
            ref: controlRef,
            class: 'mock-window-control',
            onClick: () => {
              if (!props.disabled) {
                emitWindow(!internalOpen.value)
              }
            }
          },
          slots.control?.(controlData.value)
        ),
        h('div', { class: 'mock-window-list' }, slots.default?.())
      ]
    )
  }
})

async function mountListMenu(
  initialProps: ListMenuProps = {},
  customSlots: ListMenuSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<ListMenuProps>(initialProps)
  const emittedEvents: Array<[string, unknown]> = []
  let logicInstance!: InspectableListMenu
  let exposedApi!: ListMenuExpose

  class TestListMenuDesign extends ListMenuDesign<
    ListMenuComponents,
    ListMenuExpose,
    ListMenuClasses,
    ListMenuProps
  > {
    get logic(): InspectableListMenu {
      return this.item as InspectableListMenu
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-listMenu': true,
          'd1-listMenu--open': props.open,
          [`d1-listMenu--axis--${props.axis}`]: Boolean(props.axis),
          'd1-listMenu--divider': props.divider
        }
      }))

      const design = new TestListMenuDesign(
        'd1.listMenu',
        props,
        {
          emits: (name: string, payload: unknown) => emittedEvents.push([name, payload]),
          classes,
          slots,
          components: {
            window: MockWindow
          }
        } as unknown as ConstructorParameters<typeof ListMenuDesign>[2],
        InspectableListMenu as unknown as typeof ListMenu
      )

      logicInstance = design.logic
      exposedApi = design.expose()
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const app = createApp({
    render: () => h(Host, extraAttrs, customSlots as Record<string, () => unknown>)
  })
  app.mount(host)
  mountedCleanups.push(() => app.unmount())

  await nextTick()

  return {
    host,
    props,
    emittedEvents,
    logic: logicInstance,
    expose: exposedApi
  }
}

describe('ListMenu (Integration)', () => {
  it('should render root DOM structure, classes, window attributes, and slots', async () => {
    const { host, logic, expose } = await mountListMenu(
      { axis: 'x', divider: true, autoClose: false, disableFocusReturn: true },
      {
        head: slotProps => h('span', { class: 'head-label' }, `Menu (${slotProps.open.value})`),
        list: () => h('ul', { class: 'submenu-items' }, [h('li', 'Option A')])
      },
      { class: 'extra-menu-class' }
    )

    const root = host.querySelector('.d1-listMenu') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('extra-menu-class')).toBe(true)
    expect(root.classList.contains('d1-listMenu--axis--x')).toBe(true)
    expect(root.classList.contains('d1-listMenu--divider')).toBe(true)
    expect(root.classList.contains('d1-listMenu__window')).toBe(true)
    expect(root.getAttribute('data-open')).toBe('false')
    expect(root.getAttribute('data-axis')).toBe('x')
    expect(root.getAttribute('data-auto-close')).toBe('false')
    expect(root.getAttribute('data-disable-focus-return')).toBe('true')

    expect(host.querySelector('.head-label')?.textContent).toBe('Menu (false)')
    expect(host.querySelector('.submenu-items li')?.textContent).toBe('Option A')
    expect(expose.getOpen()).toBe(false)
    expect(logic.hasInstance('open')).toBe(true)
    expect(logic.hasInstance('window')).toBe(true)
  })

  it('should synchronize state across DOM, exposes, and emits on interaction and prop updates', async () => {
    const { host, props, emittedEvents, logic, expose } = await mountListMenu(
      { open: false, axis: 'x' },
      {
        head: slotProps => h('span', { class: 'head-state' }, String(slotProps.open.value)),
        list: () => h('div', 'Submenu')
      }
    )

    const root = host.querySelector('.d1-listMenu') as HTMLElement
    const control = host.querySelector('.mock-window-control') as HTMLElement

    expect(root.getAttribute('data-open')).toBe('false')
    expect(logic.isOpen()).toBe(false)

    control.click()
    await nextTick()

    expect(logic.isOpen()).toBe(true)
    expect(root.getAttribute('data-open')).toBe('true')
    expect(host.querySelector('.head-state')?.textContent).toBe('true')
    expect(expose.getOpen()).toBe(true)
    expect(emittedEvents).toHaveLength(1)
    expect(emittedEvents[0][0]).toBe('window')
    expect(emittedEvents[0][1]).toMatchObject({ id: 'list-menu-window', open: true })

    control.click()
    await nextTick()

    expect(logic.isOpen()).toBe(false)
    expect(root.getAttribute('data-open')).toBe('false')
    expect(host.querySelector('.head-state')?.textContent).toBe('false')
    expect(expose.getOpen()).toBe(false)
    expect(emittedEvents[1][1]).toMatchObject({ id: 'list-menu-window', open: false })

    props.open = true
    props.axis = 'y'
    props.disabled = true
    await nextTick()

    expect(logic.isOpen()).toBe(true)
    expect(root.getAttribute('data-open')).toBe('true')
    expect(root.getAttribute('data-axis')).toBe('y')
    expect(root.getAttribute('data-disabled')).toBe('true')
    expect(expose.getOpen()).toBe(true)

    control.click()
    await nextTick()
    expect(emittedEvents).toHaveLength(2)
  })

  it('should forward windowAttrs and support expose controls', async () => {
    const { host, expose, logic } = await mountListMenu(
      {
        windowAttrs: {
          'data-window-attr': 'yes'
        } as ListMenuProps['windowAttrs']
      },
      {
        head: () => h('span', 'Head'),
        list: () => h('span', 'List')
      }
    )

    const root = host.querySelector('.d1-listMenu') as HTMLElement
    expect(root.getAttribute('data-window-attr')).toBe('yes')

    expose.toOpen()
    await nextTick()
    expect(logic.isOpen()).toBe(true)
    expect(root.getAttribute('data-open')).toBe('true')

    expose.toClose()
    await nextTick()
    expect(logic.isOpen()).toBe(false)
    expect(root.getAttribute('data-open')).toBe('false')
  })
})
