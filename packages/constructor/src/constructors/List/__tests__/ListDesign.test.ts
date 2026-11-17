// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, type App } from 'vue'
import { ServerStorage } from '@dxtmisha/functional'

import { ListDesign } from '../ListDesign'
import { defaultsList, type ListPropsBasic } from '../props'
import type { ListClasses, ListComponents, ListExpose } from '../types'

const applications: App[] = []

describe('ListDesign', () => {
  afterEach(() => {
    applications.splice(0).forEach(application => application.unmount())
    document.body.replaceChildren()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  const MockListItem = defineComponent({
    name: 'MockListItem',
    props: ['label', 'value', 'role', 'iconTrailing', 'open'],
    setup(props, { attrs }) {
      return () => h('div', {
        ...attrs,
        'class': ['mock-list-item', attrs.class],
        'data-value': props.value,
        'data-role': props.role
      }, String(props.label ?? props.value ?? ''))
    }
  })

  const MockListGroup = defineComponent({
    name: 'MockListGroup',
    props: ['open', 'divider', 'disabled'],
    setup(props, { slots }) {
      return () => h('div', { 'class': 'mock-list-group', 'data-open': String(props.open) }, [
        slots.head?.({ open: Boolean(props.open), class: 'group-head', onClick: vi.fn() }),
        slots.list?.()
      ])
    }
  })

  const MockListMenu = defineComponent({
    name: 'MockListMenu',
    props: ['axis', 'divider', 'disabled'],
    setup(props, { slots }) {
      return () => h('div', { 'class': 'mock-list-menu', 'data-axis': props.axis }, [
        slots.head?.({ open: { value: false }, binds: { class: 'menu-head', onClick: vi.fn() } }),
        slots.list?.()
      ])
    }
  })

  const MockInput = defineComponent({
    name: 'MockInput',
    props: ['icon', 'inputAttrs'],
    emits: ['inputLite'],
    setup(props, { emit }) {
      return () => h('input', {
        ...(props.inputAttrs as Record<string, unknown>),
        class: 'mock-search-input',
        onInput: (event: Event) => emit('inputLite', { value: (event.target as HTMLInputElement).value })
      })
    }
  })

  it('renders structural items (space, line, subtitle, html, slot, group, menu, filterInput, none)', () => {
    ServerStorage.init(() => ({}))
    const Host = defineComponent({
      setup() {
        const design = new ListDesign<ListComponents, ListExpose, ListClasses, ListPropsBasic>(
          'd1.list',
          {
            ...defaultsList,
            showSearch: true,
            filterMode: true,
            axis: 'x',
            role: 'menu',
            roleItem: 'menuitem',
            ariaMultiselectable: true,
            textNotFound: 'Nothing here',
            inputSearchAttrs: {
              inputAttrs: { placeholder: 'Filter...' }
            },
            list: [
              { type: 'space', value: 'sp1' },
              { type: 'line', value: 'ln1' },
              { type: 'subtitle', value: 'sub1', label: 'Section' },
              { type: 'html', value: 'customSlot', label: '<b>Ignored</b>' },
              { type: 'html', value: 'rawHtml', label: '<em class="raw">Raw</em>' },
              { type: 'group', index: 'grp1', label: 'Group 1', value: [{ value: 'gItem', label: 'Group Item' }] },
              { type: 'menu', index: 'mnu1', label: 'Menu 1', value: [{ value: 'mItem', label: 'Menu Item' }] },
              { value: 'item1', label: 'Item 1' }
            ]
          },
          {
            components: {
              listItem: MockListItem,
              listGroup: MockListGroup,
              listMenu: MockListMenu,
              input: MockInput
            }
          }
        )
        return design.render()
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    const application = createApp({
      render: () => h(Host, null, {
        customSlot: () => h('span', { class: 'slot-content' }, 'Slotted HTML')
      })
    })
    applications.push(application)
    application.mount(host)

    const root = host.firstElementChild as HTMLElement
    expect(root.getAttribute('role')).toBe('menu')
    expect(root.getAttribute('aria-multiselectable')).toBe('true')
    expect(root.getAttribute('tabindex')).toBe('0')

    const inputElement = host.querySelector('.d1-list__filterInput input.mock-search-input') as HTMLInputElement
    expect(inputElement.getAttribute('data-menu-control')).toBe('1')
    expect(inputElement.getAttribute('placeholder')).toBe('Filter...')

    expect(host.querySelector('.d1-list__space')?.getAttribute('role')).toBe('separator')
    expect(host.querySelector('.d1-list__line')?.getAttribute('role')).toBe('separator')
    expect(host.querySelector('.d1-list__subtitle')?.textContent).toBe('Section')
    expect(host.querySelector('.d1-list__html .slot-content')?.textContent).toBe('Slotted HTML')
    expect(host.querySelectorAll('.d1-list__html em.raw')).toHaveLength(1)
    expect(host.querySelector('.mock-list-group')).not.toBeNull()
    expect(host.querySelector('.mock-list-menu')?.getAttribute('data-axis')).toBe('y')
    expect(host.querySelector('.d1-list__none')?.textContent).toBe('Nothing here')
    expect(host.querySelector('.d1-list__none')?.getAttribute('aria-live')).toBe('polite')
    expect(host.querySelector('.mock-list-item[data-value="item1"]')?.getAttribute('data-role')).toBe('menuitem')
  })

  it('hides non-matching groups and menus when filterMode is active with highlight', () => {
    ServerStorage.init(() => ({}))
    const Host = defineComponent({
      setup() {
        const design = new ListDesign<ListComponents, ListExpose, ListClasses, ListPropsBasic>(
          'd1.list',
          {
            filterMode: true,
            highlight: 'Alpha',
            list: [
              { type: 'group', index: 'g1', label: 'G1', value: [{ value: 'a', label: 'Alpha' }] },
              { type: 'group', index: 'g2', label: 'G2', value: [{ value: 'b', label: 'Beta' }] },
              { type: 'menu', index: 'm1', label: 'M1', value: [{ value: 'c', label: 'Gamma' }] }
            ]
          },
          {
            components: {
              listItem: MockListItem,
              listGroup: MockListGroup,
              listMenu: MockListMenu
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

    expect(host.querySelectorAll('.mock-list-group')).toHaveLength(1)
    expect(host.querySelectorAll('.mock-list-menu')).toHaveLength(0)
  })
})
