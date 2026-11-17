// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { Menu, type MenuConstructors } from '../Menu'
import { MenuDesign } from '../MenuDesign'
import type { MenuProps } from '../props'
import type { MenuClasses, MenuComponents, MenuExpose, MenuSlots } from '../types'
import type { WindowControlItem } from '../../Window'
import type { MenuControlItem } from '../basicTypes'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableMenu extends Menu {
  get instantiatedItems(): Partial<Record<keyof MenuConstructors, unknown>> {
    return this.instances
  }
}

const MockWindow = defineComponent({
  name: 'MockWindow',
  inheritAttrs: false,
  props: {
    embedded: Boolean,
    disabled: Boolean,
    preparation: Function,
    opening: Function,
    closing: Function
  },
  setup(props, { attrs, slots, expose }) {
    const controlRef = ref<HTMLElement>()
    const openState = ref(Boolean(props.embedded))

    const openWindow = async () => {
      if (!props.disabled) {
        await props.preparation?.()
        await props.opening?.()
        openState.value = true
      }
    }

    const closeWindow = async () => {
      await props.closing?.()
      openState.value = false
    }

    expose({
      getId: () => 'menu-window',
      getOpen: () => openState.value,
      getControl: () => controlRef.value,
      setOpen: (value: boolean) => (value ? openWindow() : closeWindow()),
      toOpen: openWindow,
      toClose: closeWindow,
      toggle: () => (openState.value ? closeWindow() : openWindow())
    })

    const controlItem = computed<WindowControlItem>(() => ({
      class: 'd1-window__control',
      open: openState,
      classesWindow: {} as WindowControlItem['classesWindow'],
      onClick: openWindow,
      onKeydown: async () => {},
      onContextmenu: async () => {},
      binds: {
        class: 'd1-window__control',
        onClick: openWindow,
        onKeydown: async () => {},
        onContextmenu: async () => {}
      }
    }))

    return () => h(
      'div',
      { ...attrs, class: ['mock-window', attrs.class] },
      [
        h('div', { ref: controlRef, class: 'mock-window-control' }, slots.control?.(controlItem.value)),
        openState.value
          ? h('div', { class: 'mock-window-content' }, [
              slots.title?.(controlItem.value),
              slots.default?.(controlItem.value),
              slots.footer?.(controlItem.value)
            ])
          : null
      ]
    )
  }
})

const MockList = defineComponent({
  name: 'MockList',
  inheritAttrs: false,
  props: {
    list: Array,
    selected: [String, Number, Boolean, Array],
    lite: Boolean,
    onClick: [Function, Array]
  },
  setup(props, { attrs }) {
    const triggerClick = (event: MouseEvent, value: unknown) => {
      const payload = { type: 'item', value, detail: undefined }
      if (Array.isArray(props.onClick)) {
        (props.onClick as Array<(event: MouseEvent, payload: unknown) => void>).forEach(handler => handler(event, payload))
      } else {
        props.onClick?.(event, payload)
      }
    }

    return () => h(
      'ul',
      {
        ...attrs,
        'class': ['mock-list', attrs.class],
        'data-lite': String(Boolean(props.lite))
      },
      (props.list as Array<{ label?: string, value: unknown }> | undefined)?.map(item =>
        h(
          'li',
          {
            'key': String(item.value),
            'class': 'mock-list-item',
            'data-selected': String(props.selected === item.value),
            'data-value': String(item.value),
            'onClick': (event: MouseEvent) => triggerClick(event, item.value)
          },
          item.label ?? String(item.value)
        ))
    )
  }
})

const MockBars = defineComponent({
  name: 'MockBars',
  inheritAttrs: false,
  props: {
    label: String
  },
  setup(props, { attrs }) {
    return () => h('div', { ...attrs, class: ['mock-bars', attrs.class] }, props.label)
  }
})

async function mountMenu(
  initialProps: MenuProps = {},
  customSlots: MenuSlots = {}
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<MenuProps>(initialProps)
  const emittedEvents: Array<[string, unknown[]]> = []
  let logicInstance!: InspectableMenu
  let exposedApi!: MenuExpose

  class TestMenuDesign extends MenuDesign<MenuComponents, MenuExpose, MenuClasses, MenuProps> {
    get logic(): InspectableMenu {
      return this.item as InspectableMenu
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-menu': true,
          'd1-menu--hideList': Boolean(props.hideList)
        }
      }))

      const design = new TestMenuDesign(
        'd1.menu',
        props,
        {
          emits: (name: string, ...args: unknown[]) => emittedEvents.push([name, args]),
          classes,
          slots,
          components: {
            window: MockWindow,
            list: MockList,
            bars: MockBars
          }
        } as unknown as ConstructorParameters<typeof MenuDesign>[2],
        InspectableMenu as unknown as typeof Menu
      )

      logicInstance = design.logic
      exposedApi = design.expose()
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const app = createApp({
    render: () => h(Host, null, customSlots as Record<string, () => unknown>)
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

describe('Menu (Integration)', () => {
  it('should preserve lazy sub-instances while closed and load ajax list upon opening', async () => {
    const ajax = vi.fn().mockResolvedValue([
      { label: 'First', value: 'first' },
      { label: 'Second', value: 'second' }
    ])

    const { host, logic, expose } = await mountMenu(
      {
        ajax,
        liteThreshold: 2,
        isSelectedByValue: true,
        barsHide: true,
        barsBackHide: true
      },
      {
        control: (slotProps: MenuControlItem) => h('button', {
          class: 'open-btn',
          onClick: slotProps.onClick
        }, 'Toggle')
      }
    )

    expect(logic.hasInstance('window')).toBe(true)
    expect(logic.hasInstance('bars')).toBe(false)
    expect(ajax).not.toHaveBeenCalled()

    await expose.toOpen()
    await nextTick()

    expect(ajax).toHaveBeenCalledTimes(1)
    expect(host.querySelectorAll('.mock-list-item')).toHaveLength(2)
    expect(host.querySelector('.mock-list')?.getAttribute('data-lite')).toBe('false')
  })

  it('should handle item selection, slot clicks, navigation (next/previous), and reactive props', async () => {
    const { host, props, emittedEvents, expose } = await mountMenu(
      {
        embedded: true,
        isSelectedByValue: true,
        selected: 'a',
        list: [
          { label: 'Alpha', value: 'a' },
          { label: 'Beta', value: 'b' },
          { label: 'Gamma', value: 'c' }
        ]
      },
      {
        contextBottom: () => h('button', { 'class': 'slot-action', 'data-value': 'extra' }, 'Extra Action')
      }
    )

    const items = host.querySelectorAll<HTMLElement>('.mock-list-item')
    expect(items[0]?.getAttribute('data-selected')).toBe('true')

    items[1]?.click()
    await nextTick()

    expect(expose.getSelectedValues()).toEqual(['b'])
    expect(emittedEvents.some(([name, args]) => name === 'update:selected' && args[0] === 'b')).toBe(true)
    expect(emittedEvents.some(([name, args]) => name === 'clickLite' && (args[0] as { value: unknown }).value === 'b')).toBe(true)

    expect(expose.next()).toBe('c')
    await nextTick()
    expect(expose.getSelectedValues()).toEqual(['c'])

    expect(expose.previous()).toBe('b')
    await nextTick()
    expect(expose.getSelectedValues()).toEqual(['b'])

    const slotBtn = host.querySelector('.slot-action') as HTMLElement
    slotBtn.click()
    expect(emittedEvents.some(([name, args]) => name === 'clickSlot' && args[0] === 'extra')).toBe(true)

    props.selected = 'c'
    await nextTick()
    expect(expose.getSelectedValues()).toEqual(['c'])
  })
})
