// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, type App } from 'vue'
import { ServerStorage } from '@dxtmisha/functional'

import { ListDesign } from '../../List'
import { NavigationList } from '../NavigationList'
import { NavigationListDesign } from '../NavigationListDesign'
import { defaultsNavigationList, type NavigationListProps } from '../props'
import type {
  NavigationListClasses,
  NavigationListComponents,
  NavigationListExpose
} from '../types'

const applications: App[] = []

afterEach(() => {
  applications.splice(0).forEach(application => application.unmount())
  document.body.replaceChildren()
  ServerStorage.reset()
  vi.restoreAllMocks()
})

const MockNavigationItem = defineComponent({
  name: 'MockNavigationItem',
  props: ['label', 'value', 'tag', 'divider', 'listId', 'disabled', 'iconTrailing'],
  setup(props, { attrs }) {
    return () => h(
      String(props.tag ?? 'a'),
      {
        ...attrs,
        'class': ['mock-nav-item', attrs.class],
        'data-value': props.value,
        'data-list-id': props.listId,
        'data-disabled': String(Boolean(props.disabled)),
        'data-trailing': props.iconTrailing
      },
      String(props.label ?? '')
    )
  }
})

const MockListGroup = defineComponent({
  name: 'MockListGroup',
  props: ['open', 'divider', 'disabled'],
  setup(props, { slots }) {
    return () => h('div', {
      'class': 'mock-nav-group',
      'data-group-disabled': String(Boolean(props.disabled)),
      'data-group-open': String(Boolean(props.open))
    }, [
      slots.head?.({ open: Boolean(props.open) }),
      slots.list?.()
    ])
  }
})

const MockListMenu = defineComponent({
  name: 'MockListMenu',
  props: ['divider', 'axis', 'disabled'],
  setup(props, { slots }) {
    return () => h('div', {
      'class': 'mock-nav-menu',
      'data-menu-disabled': String(Boolean(props.disabled)),
      'data-menu-axis': props.axis
    }, [
      slots.head?.({ open: { value: false }, binds: { class: 'menu-head', onClick: vi.fn() } }),
      slots.list?.()
    ])
  }
})

const MockInput = defineComponent({
  name: 'MockInput',
  props: ['modelValue'],
  setup() {
    return () => h('input', { class: 'mock-nav-search', type: 'search' })
  }
})

class InspectableNavigationListDesign extends NavigationListDesign<
  NavigationListComponents,
  NavigationListExpose,
  NavigationListClasses,
  NavigationListProps
> {
  /** Exposes instantiated logic instance / Возвращает экземпляр логики */
  get logicInstance() {
    return this.item
  }
}

class CustomNavigationList extends NavigationList {}

describe('NavigationListDesign', () => {
  it('inherits ListDesign, renders structural items/slots/groups/menus, and merges root bindings cleanly', () => {
    ServerStorage.init(() => ({}))
    const host = document.createElement('div')
    document.body.appendChild(host)
    const onExternalFocus = vi.fn()

    let design!: InspectableNavigationListDesign
    let exposed!: NavigationListExpose

    const props = reactive<NavigationListProps>({
      ...defaultsNavigationList,
      axis: 'x',
      divider: true,
      showSearch: true,
      ariaMultiselectable: true,
      iconArrowDown: 'expand_more',
      iconArrowRight: 'chevron_right',
      list: [
        { type: 'subtitle', label: 'Section' },
        { value: 'dashboard', label: 'Dashboard' },
        { type: 'space', value: 'sp-1' },
        { type: 'line', value: 'sep-1' },
        { type: 'html', value: 'navCustomSlot', label: 'Ignored' },
        { type: 'html', value: 'navRawHtml', label: '<strong class="raw-html">Raw</strong>' },
        {
          type: 'group',
          index: 'grp-1',
          label: 'Settings',
          value: [{ value: 'profile', label: 'Profile' }]
        },
        {
          type: 'menu',
          index: 'mnu-1',
          label: 'Integrations',
          value: [{ value: 'webhooks', label: 'Webhooks' }]
        }
      ],
      selected: 'dashboard'
    })

    const Host = defineComponent({
      setup() {
        design = new InspectableNavigationListDesign(
          'd1.navigationList',
          props,
          {
            components: {
              listItem: MockNavigationItem,
              listGroup: MockListGroup,
              listMenu: MockListMenu,
              input: MockInput
            } as unknown as NavigationListComponents
          }
        )
        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(
        Host,
        {
          'class': 'external-nav-list',
          'data-test': 'nav-list',
          'onFocus': onExternalFocus
        },
        {
          navCustomSlot: () => h('span', { class: 'slot-content' }, 'Custom Navigation Slot')
        }
      )
    })
    applications.push(app)
    app.mount(host)

    const root = host.firstElementChild as HTMLElement
    expect(design).toBeInstanceOf(NavigationListDesign)
    expect(design).toBeInstanceOf(ListDesign)
    expect(design.logicInstance).toBeInstanceOf(NavigationList)

    expect(root.classList.contains('external-nav-list')).toBe(true)
    expect(root.getAttribute('aria-multiselectable')).toBe('true')
    expect(root.getAttribute('tabindex')).toBe('0')
    root.dispatchEvent(new FocusEvent('focus'))
    expect(onExternalFocus).toHaveBeenCalledTimes(1)

    expect(host.querySelector('.mock-nav-search')).not.toBeNull()
    expect(host.querySelectorAll('.mock-nav-item')).toHaveLength(5)
    expect(host.querySelector('.mock-nav-group')).not.toBeNull()
    expect(host.querySelector('.mock-nav-menu')?.getAttribute('data-menu-axis')).toBe('y')
    expect(host.querySelector('.d1-navigationList__space')?.getAttribute('role')).toBe('separator')
    expect(host.querySelector('.d1-navigationList__line')?.getAttribute('role')).toBe('separator')
    expect(host.querySelector('.d1-navigationList__subtitle')?.textContent).toBe('Section')
    expect(host.querySelector('.d1-navigationList__html .slot-content')?.textContent).toBe('Custom Navigation Slot')
    expect(host.querySelector('.d1-navigationList__html strong.raw-html')).not.toBeNull()

    expect(exposed.isSelected()).toBe(true)
    expect(exposed.getSelectedNames()).toEqual(['Dashboard'])
    expect(exposed.getSelectedValues()).toEqual(['dashboard'])
  })

  it('propagates disabled prop to root, groups, menus, and list items', async () => {
    ServerStorage.init(() => ({}))
    const host = document.createElement('div')
    document.body.appendChild(host)

    const props = reactive<NavigationListProps>({
      ...defaultsNavigationList,
      disabled: true,
      list: [
        { value: 'dashboard', label: 'Dashboard' },
        {
          type: 'group',
          index: 'grp-1',
          label: 'Team',
          value: [{ value: 'members', label: 'Members' }]
        },
        {
          type: 'menu',
          index: 'mnu-1',
          label: 'More',
          value: [{ value: 'api', label: 'API' }]
        }
      ]
    })

    const app = createApp(defineComponent({
      setup() {
        const design = new InspectableNavigationListDesign(
          'd1.navigationList',
          props,
          {
            components: {
              listItem: MockNavigationItem,
              listGroup: MockListGroup,
              listMenu: MockListMenu
            } as unknown as NavigationListComponents
          }
        )
        return design.render()
      }
    }))
    applications.push(app)
    app.mount(host)

    const root = host.firstElementChild as HTMLElement
    expect(root.getAttribute('aria-disabled')).toBe('true')
    expect(root.getAttribute('tabindex')).toBeNull()
    expect(host.querySelector('.mock-nav-group')?.getAttribute('data-group-disabled')).toBe('true')
    expect(host.querySelector('.mock-nav-menu')?.getAttribute('data-menu-disabled')).toBe('true')
    expect(host.querySelector('.mock-nav-item[data-value="dashboard"]')?.getAttribute('data-disabled')).toBe('true')

    props.disabled = false
    await nextTick()
    expect(root.getAttribute('aria-disabled')).toBeNull()
    expect(root.getAttribute('tabindex')).toBe('0')
    expect(host.querySelector('.mock-nav-group')?.getAttribute('data-group-disabled')).toBe('false')
  })

  it('allows overriding ItemConstructor via constructor injection', () => {
    ServerStorage.init(() => ({}))
    const host = document.createElement('div')
    document.body.appendChild(host)

    let design!: InspectableNavigationListDesign

    const app = createApp(defineComponent({
      setup() {
        design = new (class extends InspectableNavigationListDesign {
          constructor() {
            super(
              'd1.navigationList',
              reactive<NavigationListProps>({ ...defaultsNavigationList, list: [] }),
              undefined,
              CustomNavigationList
            )
          }
        })()
        return design.render()
      }
    }))

    applications.push(app)
    app.mount(host)

    expect(design.logicInstance).toBeInstanceOf(CustomNavigationList)
    expect(design.logicInstance).toBeInstanceOf(NavigationList)
  })
})
