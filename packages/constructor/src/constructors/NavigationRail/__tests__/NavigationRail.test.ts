// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, shallowReactive, shallowReadonly, type App } from 'vue'
import { ServerStorage } from '@dxtmisha/functional'

import { NavigationRailDesign } from '../NavigationRailDesign'
import type { NavigationRailPropsBasic } from '../props'
import type { NavigationRailClasses, NavigationRailComponents, NavigationRailExpose } from '../types'

const applications: App[] = []

afterEach(() => {
  applications.splice(0).forEach(application => application.unmount())
  document.body.replaceChildren()
  ServerStorage.reset()
  vi.restoreAllMocks()
})

describe('NavigationRail (Integration)', () => {
  it('tracks reactive selection and key mapping through exposed API', async () => {
    ServerStorage.init(() => ({}))
    let exposed!: NavigationRailExpose

    const props = shallowReactive<NavigationRailPropsBasic>({
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

    expect(exposed.isSelected()).toBe(true)
    expect(exposed.getSelectedNames()).toEqual(['Home'])
    expect(exposed.getSelectedValues()).toEqual(['home'])

    props.keyValue = 'value'
    props.keyLabel = 'description'
    props.selected = 's1'
    await nextTick()

    expect(exposed.getSelectedNames()).toEqual(['Prefs'])
    expect(exposed.getSelectedValues()).toEqual(['settings'])
  })

  it('integrates keyboard navigation and click/close events when control=true', async () => {
    ServerStorage.init(() => ({}))
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0)
      return 1
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const onClick = vi.fn()
    const onClose = vi.fn()

    const MockRailItem = defineComponent({
      name: 'MockRailItem',
      props: ['label', 'value', 'listId', 'focus'],
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
            'onClick': (event: MouseEvent) => emit('click', event, { value: props.value })
          },
          String(props.label)
        )
      }
    })

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
            control: true,
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
              navigationRailItem: MockRailItem
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

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    await nextTick()
    expect(host.querySelector('button[data-value="first"]')?.getAttribute('data-focus')).toBe('true')

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(onClick).toHaveBeenCalled()

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
