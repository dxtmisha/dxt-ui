// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, shallowReactive, shallowReadonly, type App } from 'vue'
import { ServerStorage } from '@dxtmisha/functional'

import { NavigationRailDesign } from '../NavigationRailDesign'
import { defaultsNavigationRail, type NavigationRailPropsBasic } from '../props'
import type { NavigationRailClasses, NavigationRailComponents, NavigationRailExpose } from '../types'

const applications: App[] = []

afterEach(() => {
  applications.splice(0).forEach(application => application.unmount())
  document.body.replaceChildren()
  ServerStorage.reset()
  vi.restoreAllMocks()
})

const MockInteractiveRailItem = defineComponent({
  name: 'MockInteractiveRailItem',
  props: ['label', 'value', 'listId', 'focus', 'disabled'],
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      'button',
      {
        ...attrs,
        'type': 'button',
        'disabled': Boolean(props.disabled),
        'data-list-id': props.listId,
        'data-value': props.value,
        'data-focus': String(Boolean(props.focus)),
        'onClick': (event: MouseEvent) => emit('click', event, { value: props.value, type: 'click' })
      },
      String(props.label ?? '')
    )
  }
})

describe('NavigationRail (Integration)', () => {
  it('tracks reactive selection, Record datasets, key mapping, and ARIA state through exposed API', async () => {
    ServerStorage.init(() => ({}))
    let exposed!: NavigationRailExpose

    const props = shallowReactive<NavigationRailPropsBasic>({
      ...defaultsNavigationRail,
      ariaMultiselectable: true,
      list: [
        { value: 'home', label: 'Home', index: 'h1', description: 'Main' },
        { value: 'settings', label: 'Settings', index: 's1', description: 'Prefs' }
      ],
      selected: 'h1'
    })

    const application = createApp(defineComponent({
      setup() {
        const design = new NavigationRailDesign<
          NavigationRailComponents,
          NavigationRailExpose,
          NavigationRailClasses,
          NavigationRailPropsBasic
        >('d1.navigationRail', shallowReadonly(props))
        exposed = design.expose()
        return design.render()
      }
    }))
    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(application)
    application.mount(host)

    const root = host.firstElementChild as HTMLElement
    expect(root.getAttribute('aria-multiselectable')).toBe('true')
    expect(exposed.isSelected()).toBe(true)
    expect(exposed.getSelectedNames()).toEqual(['Home'])
    expect(exposed.getSelectedValues()).toEqual(['home'])

    props.keyValue = 'value'
    props.keyLabel = 'description'
    props.selected = 's1'
    await nextTick()

    expect(exposed.getSelectedNames()).toEqual(['Prefs'])
    expect(exposed.getSelectedValues()).toEqual(['settings'])

    props.list = {
      feed: { label: 'Feed', value: 'feed' },
      inbox: { label: 'Inbox', value: 'inbox' }
    }
    props.keyLabel = 'label'
    props.selected = 'inbox'
    await nextTick()

    expect(exposed.getSelectedNames()).toEqual(['Inbox'])
    expect(exposed.getSelectedValues()).toEqual(['inbox'])
  })

  it('integrates keyboard navigation, IME composition guard, click/close events, and cleanup on unmount', async () => {
    ServerStorage.init(() => ({}))
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0)
      return 1
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const onClick = vi.fn()
    const onClickLite = vi.fn()
    const onClose = vi.fn()

    const application = createApp(defineComponent({
      setup() {
        const design = new NavigationRailDesign<
          NavigationRailComponents,
          NavigationRailExpose,
          NavigationRailClasses,
          NavigationRailPropsBasic
        >(
          'd1.navigationRail',
          {
            ...defaultsNavigationRail,
            control: true,
            list: [
              { value: 'first', label: 'First' },
              { value: 'second', label: 'Second' },
              { value: 'third', label: 'Third' }
            ]
          },
          {
            emits: (eventName: string, ...args: unknown[]) => {
              if (eventName === 'click') {
                onClick(...args)
              } else if (eventName === 'clickLite') {
                onClickLite(...args)
              } else if (eventName === 'close') {
                onClose(...args)
              }
            },
            components: {
              navigationRailItem: MockInteractiveRailItem
            }
          }
        )
        return design.render()
      }
    }))

    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(application)
    application.mount(host)
    await nextTick()

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', isComposing: true, bubbles: true }))
    await nextTick()
    expect(host.querySelector('button[data-value="first"]')?.getAttribute('data-focus')).toBe('false')

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    await nextTick()
    expect(host.querySelector('button[data-value="first"]')?.getAttribute('data-focus')).toBe('true')

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }))
    await nextTick()
    expect(host.querySelector('button[data-value="third"]')?.getAttribute('data-focus')).toBe('true')

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClickLite).toHaveBeenCalledWith({ value: 'third', type: 'click' })

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(onClose).toHaveBeenCalledTimes(1)

    application.unmount()
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('blocks keyboard navigation and click emissions when disabled=true', async () => {
    ServerStorage.init(() => ({}))
    const onClick = vi.fn()
    const onClose = vi.fn()

    const application = createApp(defineComponent({
      setup() {
        const design = new NavigationRailDesign<
          NavigationRailComponents,
          NavigationRailExpose,
          NavigationRailClasses,
          NavigationRailPropsBasic
        >(
          'd1.navigationRail',
          {
            ...defaultsNavigationRail,
            control: true,
            disabled: true,
            list: [
              { value: 'first', label: 'First' },
              { value: 'second', label: 'Second' }
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
              navigationRailItem: MockInteractiveRailItem
            }
          }
        )
        return design.render()
      }
    }))

    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(application)
    application.mount(host)
    await nextTick()

    const root = host.firstElementChild as HTMLElement
    expect(root.getAttribute('aria-disabled')).toBe('true')
    expect(root.getAttribute('tabindex')).toBeNull()

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await nextTick()

    expect(host.querySelector('button[data-value="first"]')?.getAttribute('data-focus')).toBe('false')
    expect(onClick).not.toHaveBeenCalled()
    expect(onClose).not.toHaveBeenCalled()
  })
})
