// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, shallowReactive, shallowReadonly } from 'vue'
import type { App } from 'vue'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { ListDesign } from '../ListDesign'
import type { ListPropsBasic } from '../props'
import type { ListClasses, ListComponents, ListExpose } from '../types'
import {
  ListItemDesign,
  type ListItemClasses,
  type ListItemComponents,
  type ListItemExpose,
  type ListItemPropsBasic
} from '../../ListItem'

const applications: App[] = []

afterEach(() => {
  applications.splice(0).forEach(application => application.unmount())
  document.body.replaceChildren()
  ServerStorage.reset()
  vi.restoreAllMocks()
})

/**
 * Mounts the complete List renderer and returns its public API.
 *
 * Монтирует полный рендерер List и возвращает его публичный API.
 * @param props reactive list properties / реактивные свойства списка
 * @returns public list methods / публичные методы списка
 */
function mountList(props: ListPropsBasic): ListExpose {
  let exposed: ListExpose | undefined
  const application = createApp(defineComponent({
    setup() {
      const design = new ListDesign<ListComponents, ListExpose, ListClasses, ListPropsBasic>(
        'test.list',
        shallowReadonly(props)
      )
      exposed = design.expose()
      return design.render()
    }
  }))
  const host = document.createElement('div')
  document.body.appendChild(host)
  applications.push(application)
  application.mount(host)

  if (!exposed) {
    throw new Error('List did not expose its public API')
  }

  return exposed
}

describe('List (Integration)', () => {
  it('tracks selection and list replacements through its public API', async () => {
    ServerStorage.init(() => ({}))
    const props = shallowReactive<ListPropsBasic>({
      list: [{ value: 'first', label: 'First' }]
    })
    const exposed = mountList(props)
    expect(exposed.isSelected()).toBe(false)

    props.selected = 'first'
    await nextTick()
    expect(exposed.getSelectedNames()).toEqual(['First'])
    expect(exposed.getSelectedValues()).toEqual(['first'])

    props.list = [{ value: 'second', label: 'Second' }]
    await nextTick()
    expect(exposed.isSelected()).toBe(false)
    expect(exposed.getSelectedValues()).toEqual([])

    props.selected = 'second'
    await nextTick()
    expect(exposed.getSelectedNames()).toEqual(['Second'])

    props.list = undefined
    await nextTick()
    expect(exposed.isSelected()).toBe(false)
    expect(exposed.getSelectedValues()).toEqual([])
  })

  it('tracks keyValue and keyLabel added after initialization', async () => {
    ServerStorage.init(() => ({}))
    const list = [{ value: 'first', label: 'First', code: 'second', title: 'Second' }]
    const props = shallowReactive<ListPropsBasic>({
      list,
      selected: 'first'
    })
    const exposed = mountList(props)
    expect(exposed.getSelectedNames()).toEqual(['First'])

    props.keyValue = 'code'
    props.keyLabel = 'title'
    props.selected = 'second'
    await nextTick()
    expect(exposed.getSelectedNames()).toEqual(['Second'])
    expect(exposed.getSelectedValues()).toEqual(['second'])

    props.keyValue = undefined
    props.keyLabel = undefined
    props.selected = 'first'
    await nextTick()
    expect(exposed.getSelectedNames()).toEqual(['First'])
    expect(exposed.getSelectedValues()).toEqual(['first'])
  })

  it('integrates keyboard navigation, search filtering, and click/close events', async () => {
    ServerStorage.init(() => ({}))
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0)
      return 1
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const onClick = vi.fn()
    const onClose = vi.fn()

    const MockListItem = defineComponent({
      name: 'MockListItem',
      props: ['label', 'value', 'listId', 'focus', 'highlight'],
      emits: ['click'],
      setup(props, { attrs, emit }) {
        return () => h(
          'button',
          {
            ...attrs,
            'type': 'button',
            'data-list-id': props.listId,
            'data-value': props.value,
            'data-focus': String(Boolean(props.focus)),
            'data-highlight': props.highlight && String(props.label).toLowerCase().includes(String(props.highlight).toLowerCase())
              ? props.highlight
              : undefined,
            'onClick': (event: MouseEvent) => emit('click', event, { value: props.value })
          },
          String(props.label)
        )
      }
    })

    const MockInput = defineComponent({
      name: 'MockInput',
      props: ['inputAttrs'],
      emits: ['inputLite'],
      setup(props, { emit }) {
        return () => h('input', {
          ...(props.inputAttrs as Record<string, unknown>),
          onInput: (event: Event) => emit('inputLite', { value: (event.target as HTMLInputElement).value })
        })
      }
    })

    const Host = defineComponent({
      setup() {
        const design = new ListDesign<ListComponents, ListExpose, ListClasses, ListPropsBasic>(
          'd1.list',
          {
            control: true,
            showSearch: true,
            filterMode: true,
            list: [
              { value: 'alpha', label: 'Alpha' },
              { value: 'beta', label: 'Beta' }
            ]
          },
          {
            emits: (eventName: string, ...args: unknown[]) => {
              if (eventName === 'click') {
                onClick(...args)
              } else if (eventName === 'close') {
                onClose(...args)
              }
            },
            components: {
              listItem: MockListItem,
              input: MockInput
            }
          }
        )
        return design.render()
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    const application = createApp(Host)
    applications.push(application)
    application.mount(host)
    await nextTick()

    const root = host.firstElementChild as HTMLElement
    const searchInput = host.querySelector('input[data-menu-control="1"]') as HTMLInputElement
    searchInput.value = 'be'
    searchInput.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    expect(root.classList.contains('d1-list--searchActive')).toBe(true)

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    await nextTick()
    expect(host.querySelector('button[data-value="alpha"]')?.getAttribute('data-focus')).toBe('true')

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(onClick).toHaveBeenCalled()

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('re-scrolls to selected item when lite transitions from true to false', async () => {
    ServerStorage.init(() => ({}))
    const rafCallbacks: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      rafCallbacks.push(callback)
      return rafCallbacks.length
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const listProps = shallowReactive<ListPropsBasic>({
      control: true,
      lite: true,
      liteThreshold: 1,
      selected: 'second',
      list: [
        { value: 'first', label: 'First' },
        { value: 'second', label: 'Second' }
      ]
    })

    const MockListItem = defineComponent({
      name: 'MockListItem',
      props: ['label', 'value', 'index', 'listId'],
      setup(props) {
        return () => h('div', { 'data-list-id': props.listId, 'data-value': props.index }, String(props.label))
      }
    })

    const Host = defineComponent({
      setup() {
        const design = new ListDesign<ListComponents, ListExpose, ListClasses, ListPropsBasic>(
          'd1.list',
          shallowReadonly(listProps),
          {
            components: {
              listItem: MockListItem
            }
          }
        )
        const renderList = design.render()
        return () => h('div', { 'data-window-body': '' }, renderList())
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    const application = createApp(Host)
    applications.push(application)
    application.mount(host)

    await nextTick()
    const initialCalls = rafCallbacks.length
    expect(initialCalls).toBeGreaterThanOrEqual(1)

    listProps.lite = false
    await nextTick()
    await nextTick()

    expect(rafCallbacks.length).toBeGreaterThan(initialCalls)
  })

  it('forwards highlightLengthStart to ListItem and focuses highlighted item after DOM update when filterMode is false', async () => {
    ServerStorage.init(() => ({}))
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0)
      return 1
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const RealListItem = defineComponent({
      name: 'RealListItem',
      inheritAttrs: false,
      props: [
        'label',
        'value',
        'index',
        'caption',
        'search',
        'focus',
        'selected',
        'disabled',
        'highlight',
        'highlightLengthStart',
        'filterMode',
        'listId',
        'type',
        'parent',
        'tag',
        'role',
        'tabindex',
        'selectionStyle',
        'lazy',
        'lazyMargin',
        'lazyCacheHeight'
      ],
      emits: ['click'],
      setup(props, { emit }) {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-listItem': true,
            'd1-listItem--focus': Boolean(props.focus)
          }
        }))

        const design = new ListItemDesign<
          ListItemComponents,
          ListItemExpose,
          ListItemClasses,
          ListItemPropsBasic
        >(
          'd1.listItem',
          props as Readonly<ListItemPropsBasic>,
          {
            classes: classesToken,
            emits: emit as (...args: unknown[]) => void
          }
        )
        return design.render()
      }
    })

    const MockInput = defineComponent({
      name: 'MockInput',
      props: ['inputAttrs'],
      emits: ['inputLite'],
      setup(props, { emit }) {
        return () => h('input', {
          ...(props.inputAttrs as Record<string, unknown>),
          onInput: (event: Event) => emit('inputLite', { value: (event.target as HTMLInputElement).value })
        })
      }
    })

    const Host = defineComponent({
      setup() {
        const design = new ListDesign<ListComponents, ListExpose, ListClasses, ListPropsBasic>(
          'd1.list',
          {
            control: true,
            showSearch: true,
            filterMode: false,
            highlightLengthStart: 1,
            list: [
              { value: 'AZ', label: 'Azerbaijan', caption: '+994', search: 'Azerbaijan AZ +994' },
              { value: 'GR', label: 'Greece', caption: '+30', search: 'Greece GR +30' },
              { value: 'LT', label: 'Lithuania', caption: '+370', search: 'Lithuania LT +370' },
              { value: 'BY', label: 'Belarus', caption: '+375', search: 'Belarus BY +375' },
              { value: 'RU', label: 'Russia', caption: '+7', search: 'Russia Россия RU +7' },
              { value: 'VN', label: 'Vietnam', caption: '+84', search: 'Vietnam VN +84' }
            ]
          },
          {
            components: {
              listItem: RealListItem,
              input: MockInput
            }
          }
        )
        return design.render()
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    const application = createApp(Host)
    applications.push(application)
    application.mount(host)
    await nextTick()

    const searchInput = host.querySelector('input[data-menu-control="1"]') as HTMLInputElement

    // 1-character search highlights and focuses Vietnam instead of the first item
    searchInput.value = 'v'
    searchInput.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    await nextTick()

    expect(host.querySelector('[data-value="AZ"]')?.getAttribute('data-highlight')).toBeNull()
    expect(host.querySelector('[data-value="VN"]')?.getAttribute('data-highlight')).toBe('v')
    expect(host.querySelector('[data-value="VN"]')?.className).toContain('d1-listItem--focus')
    expect(host.querySelector('[data-value="VN"] .d1-listItem__highlight')?.textContent).toBe('V')

    // Multi-character dial code updates focus on the latest keystroke without lagging behind
    searchInput.value = '3'
    searchInput.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    await nextTick()
    expect(host.querySelector('[data-value="GR"]')?.className).toContain('d1-listItem--focus')

    searchInput.value = '37'
    searchInput.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    await nextTick()
    expect(host.querySelector('[data-value="LT"]')?.className).toContain('d1-listItem--focus')

    searchInput.value = '375'
    searchInput.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    await nextTick()
    expect(host.querySelector('[data-value="BY"]')?.className).toContain('d1-listItem--focus')

    // +7 dial code matches and focuses Russia
    searchInput.value = '+7'
    searchInput.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    await nextTick()
    expect(host.querySelector('[data-value="RU"]')?.className).toContain('d1-listItem--focus')
  })
})
