// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, type App } from 'vue'
import { ServerStorage } from '@dxtmisha/functional'

import { NavigationRailDesign } from '../NavigationRailDesign'
import { defaultsNavigationRail, type NavigationRailPropsBasic } from '../props'
import type { NavigationRailClasses, NavigationRailComponents, NavigationRailExpose } from '../types'

const applications: App[] = []

describe('NavigationRailDesign', () => {
  afterEach(() => {
    applications.splice(0).forEach(application => application.unmount())
    document.body.replaceChildren()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  const MockRailItem = defineComponent({
    name: 'MockRailItem',
    props: ['label', 'value', 'role', 'iconTrailing'],
    setup(props, { attrs }) {
      return () => h('div', {
        ...attrs,
        'class': ['mock-rail-item', attrs.class],
        'data-value': props.value,
        'data-role': props.role,
        'data-trailing': props.iconTrailing
      }, String(props.label ?? props.value ?? ''))
    }
  })

  const MockNavItem = defineComponent({
    name: 'MockNavItem',
    props: ['label', 'value', 'iconTrailing'],
    setup(props, { attrs }) {
      return () => h('div', {
        ...attrs,
        'class': ['mock-nav-item', attrs.class],
        'data-value': props.value,
        'data-trailing': props.iconTrailing
      }, String(props.label ?? props.value ?? ''))
    }
  })

  const MockListMenu = defineComponent({
    name: 'MockListMenu',
    props: ['divider', 'disabled'],
    setup(_, { slots }) {
      return () => h('div', { class: 'mock-list-menu' }, [
        slots.head?.({ open: { value: false }, binds: { class: 'menu-head', onClick: vi.fn() } }),
        slots.list?.()
      ])
    }
  })

  it('renders space, line, html, slot, menu, navigationRailItem, and nested navigationItem', () => {
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
            role: 'navigation',
            roleItem: 'menuitem',
            iconArrowRight: 'chevron_right',
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
        return design.render()
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    const application = createApp({
      render: () => h(Host, null, {
        brandSlot: () => h('span', { class: 'slot-brand' }, 'Brand')
      })
    })
    applications.push(application)
    application.mount(host)

    const root = host.firstElementChild as HTMLElement
    expect(root.getAttribute('role')).toBe('navigation')
    expect(root.getAttribute('tabindex')).toBe('0')

    expect(host.querySelector('.d1-navigationRail__space')?.getAttribute('role')).toBe('separator')
    expect(host.querySelector('.d1-navigationRail__line')?.getAttribute('role')).toBe('separator')
    expect(host.querySelector('.d1-navigationRail__html .slot-brand')?.textContent).toBe('Brand')
    expect(host.querySelector('.d1-navigationRail__html em.raw')).not.toBeNull()
    expect(host.querySelector('.mock-rail-item[data-value="home"]')?.getAttribute('data-role')).toBe('menuitem')
    expect(host.querySelector('.mock-nav-item[data-value="subItem"]')).not.toBeNull()
    expect(host.querySelector('.mock-nav-item[data-trailing="chevron_right"]')).not.toBeNull()
  })
})
