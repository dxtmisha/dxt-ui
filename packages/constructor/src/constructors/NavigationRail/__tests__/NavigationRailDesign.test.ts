// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, type App } from 'vue'
import { ServerStorage } from '@dxtmisha/functional'

import { NavigationRail } from '../NavigationRail'
import { NavigationRailDesign } from '../NavigationRailDesign'
import { defaultsNavigationRail, type NavigationRailPropsBasic } from '../props'
import type { NavigationRailClasses, NavigationRailComponents, NavigationRailExpose } from '../types'

const applications: App[] = []

class InspectableNavigationRailDesign extends NavigationRailDesign<
  NavigationRailComponents,
  NavigationRailExpose,
  NavigationRailClasses,
  NavigationRailPropsBasic
> {
  /** Exposes logic orchestrator instance / Возвращает экземпляр логического оркестратора */
  get logicInstance() {
    return this.item
  }

  /** Exposes root DOM element ref / Возвращает ссылку на корневой DOM-элемент */
  get rootElement() {
    return this.element
  }
}

class CustomNavigationRail extends NavigationRail {}

describe('NavigationRailDesign', () => {
  afterEach(() => {
    applications.splice(0).forEach(application => application.unmount())
    document.body.replaceChildren()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  const MockRailItem = defineComponent({
    name: 'MockRailItem',
    props: ['label', 'value', 'role', 'iconTrailing', 'disabled'],
    setup(props, { attrs }) {
      return () => h('div', {
        ...attrs,
        'class': ['mock-rail-item', attrs.class],
        'data-value': props.value,
        'data-role': props.role,
        'data-trailing': props.iconTrailing,
        'data-disabled': String(Boolean(props.disabled))
      }, String(props.label ?? props.value ?? ''))
    }
  })

  const MockNavItem = defineComponent({
    name: 'MockNavItem',
    props: ['label', 'value', 'iconTrailing', 'disabled'],
    setup(props, { attrs }) {
      return () => h('div', {
        ...attrs,
        'class': ['mock-nav-item', attrs.class],
        'data-value': props.value,
        'data-trailing': props.iconTrailing,
        'data-disabled': String(Boolean(props.disabled))
      }, String(props.label ?? props.value ?? ''))
    }
  })

  const MockListMenu = defineComponent({
    name: 'MockListMenu',
    props: ['divider', 'disabled'],
    setup(props, { slots }) {
      return () => h('div', {
        'class': 'mock-list-menu',
        'data-menu-disabled': String(Boolean(props.disabled)),
        'data-menu-divider': String(Boolean(props.divider))
      }, [
        slots.head?.({ open: { value: false }, binds: { class: 'menu-head', onClick: vi.fn() } }),
        slots.list?.()
      ])
    }
  })

  it('renders space, line, html, slot, menu, navigationRailItem, and nested navigationItem with ARIA roles', () => {
    ServerStorage.init(() => ({}))
    const onExternalFocus = vi.fn()
    let design!: InspectableNavigationRailDesign
    let exposed!: NavigationRailExpose

    const Host = defineComponent({
      setup() {
        design = new InspectableNavigationRailDesign(
          'd1.navigationRail',
          {
            ...defaultsNavigationRail,
            role: 'navigation',
            ariaMultiselectable: true,
            roleItem: 'menuitem',
            iconArrowRight: 'chevron_right',
            selected: ['home'],
            list: [
              { type: 'space', value: 'sp1' },
              { type: 'line', value: 'ln1' },
              { type: 'html', value: 'brandSlot', label: '<b>Ignored</b>' },
              { type: 'html', value: 'rawHtml', label: '<em class="raw">Raw</em>' },
              {
                type: 'menu',
                index: 'mnu1',
                label: 'Menu 1',
                value: [
                  { value: 'subItem', label: 'Sub Item' },
                  { type: 'menu', index: 'nestedMnu', label: 'Nested', value: [{ value: 'leaf', label: 'Leaf' }] }
                ]
              },
              { value: 'home', label: 'Home' }
            ]
          },
          {
            components: {
              navigationRailItem: MockRailItem,
              navigationItem: MockNavItem,
              listMenu: MockListMenu
            }
          }
        )
        exposed = design.expose()
        return design.render()
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    const application = createApp({
      render: () => h(
        Host,
        {
          'class': 'external-rail-class',
          'data-custom': 'rail-1',
          'onFocus': onExternalFocus
        },
        {
          brandSlot: () => h('span', { class: 'slot-brand' }, 'Brand')
        }
      )
    })
    applications.push(application)
    application.mount(host)

    const root = host.firstElementChild as HTMLElement
    expect(design.rootElement.value).toBe(root)
    expect(root.getAttribute('role')).toBe('navigation')
    expect(root.getAttribute('aria-multiselectable')).toBe('true')
    expect(root.getAttribute('tabindex')).toBe('0')
    expect(root.classList.contains('external-rail-class')).toBe(true)
    expect(root.getAttribute('data-custom')).toBe('rail-1')

    root.dispatchEvent(new FocusEvent('focus'))
    expect(onExternalFocus).toHaveBeenCalledTimes(1)

    expect(host.querySelector('.d1-navigationRail__space')?.getAttribute('role')).toBe('separator')
    expect(host.querySelector('.d1-navigationRail__line')?.getAttribute('role')).toBe('separator')
    expect(host.querySelector('.d1-navigationRail__html .slot-brand')?.textContent).toBe('Brand')
    expect(host.querySelector('.d1-navigationRail__html em.raw')).not.toBeNull()
    expect(host.querySelector('.mock-rail-item[data-value="home"]')?.getAttribute('data-role')).toBe('menuitem')
    expect(host.querySelector('.mock-nav-item[data-value="subItem"]')).not.toBeNull()
    expect(host.querySelector('.mock-nav-item[data-trailing="chevron_right"]')).not.toBeNull()
    expect(host.querySelector('.mock-rail-item[data-trailing="chevron_right"]')).toBeNull()

    expect(exposed.isSelected()).toBe(true)
    expect(exposed.getSelectedNames()).toEqual(['Home'])
    expect(exposed.getSelectedValues()).toEqual(['home'])
  })

  it('propagates disabled prop to root aria-disabled, listMenu, and rendered items', () => {
    ServerStorage.init(() => ({}))

    const Host = defineComponent({
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
            disabled: true,
            divider: true,
            list: [
              { value: 'home', label: 'Home' },
              {
                type: 'menu',
                index: 'mnu',
                label: 'Menu',
                value: [{ value: 'sub', label: 'Sub' }]
              }
            ]
          },
          {
            components: {
              navigationRailItem: MockRailItem,
              navigationItem: MockNavItem,
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

    const root = host.firstElementChild as HTMLElement
    expect(root.getAttribute('aria-disabled')).toBe('true')
    expect(root.getAttribute('tabindex')).toBeNull()
    expect(host.querySelector('.mock-list-menu')?.getAttribute('data-menu-disabled')).toBe('true')
    expect(host.querySelector('.mock-list-menu')?.getAttribute('data-menu-divider')).toBe('true')
    expect(host.querySelector('.mock-rail-item[data-value="home"]')?.getAttribute('data-disabled')).toBe('true')
    expect(host.querySelector('.mock-nav-item[data-value="sub"]')?.getAttribute('data-disabled')).toBe('true')
  })

  it('supports overriding ItemConstructor via constructor injection', () => {
    ServerStorage.init(() => ({}))
    let design!: InspectableNavigationRailDesign

    const Host = defineComponent({
      setup() {
        design = new (class extends InspectableNavigationRailDesign {
          constructor() {
            super(
              'd1.navigationRail',
              { ...defaultsNavigationRail, list: [] },
              undefined,
              CustomNavigationRail
            )
          }
        })()
        return design.render()
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    const application = createApp(Host)
    applications.push(application)
    application.mount(host)

    expect(design.logicInstance).toBeInstanceOf(CustomNavigationRail)
    expect(design.logicInstance).toBeInstanceOf(NavigationRail)
  })
})
