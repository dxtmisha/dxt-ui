// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, ref, type App } from 'vue'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { NavigationRail, type NavigationRailConstructors } from '../NavigationRail'
import type { NavigationRailProps } from '../props'

const applications: App[] = []

describe('NavigationRail (Unit)', () => {
  const naming = new DesignName('d1.navigationRail')

  afterEach(() => {
    applications.splice(0).forEach(application => application.unmount())
    document.body.replaceChildren()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  function createNavigationRailInScope(
    props: NavigationRailProps = {},
    constructors?: Partial<NavigationRailConstructors>
  ): {
    rail: NavigationRail
    unmount: () => void
  } {
    let instance!: NavigationRail
    const Host = defineComponent({
      setup() {
        const element = ref<HTMLElement>()
        instance = new NavigationRail(props, element, naming, undefined, undefined, vi.fn(), constructors)
        return () => h('div', { ref: element })
      }
    })
    const application = createApp(Host)
    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(application)
    application.mount(host)

    return {
      rail: instance,
      unmount: () => application.unmount()
    }
  }

  describe('Lazy instantiation and Dependency Injection', () => {
    it('keeps control and go uninstantiated until accessed when control is false', () => {
      ServerStorage.init(() => ({}))
      const { rail, unmount } = createNavigationRailInScope({
        list: [{ value: 'home', label: 'Home' }]
      })

      expect(rail.hasInstance('data')).toBe(false)
      expect(rail.hasInstance('focus')).toBe(false)
      expect(rail.hasInstance('go')).toBe(false)
      expect(rail.hasInstance('control')).toBe(false)

      expect(rail.list).toHaveLength(1)
      expect(rail.hasInstance('data')).toBe(true)
      expect(rail.hasInstance('focus')).toBe(true)
      expect(rail.hasInstance('go')).toBe(false)
      expect(rail.hasInstance('control')).toBe(false)

      unmount()
    })

    it('supports dependency injection overrides', () => {
      ServerStorage.init(() => ({}))
      const customOnClick = vi.fn()
      class CustomEventClick {
        onClick = customOnClick
      }

      const { rail, unmount } = createNavigationRailInScope(
        {
          list: [{ value: 'home', label: 'Home' }]
        },
        {
          event: CustomEventClick as unknown as NavigationRailConstructors['event']
        }
      )

      const binds = rail.getItem(rail.list[0]!)
      expect(binds.onClick).toBe(customOnClick)
      unmount()
    })
  })

  describe('Item, menu, management bindings and SSR isolation', () => {
    it('builds item, menu, and management bindings without overwriting item roles', () => {
      ServerStorage.init(() => ({}))
      const itemClick = vi.fn()
      const { rail, unmount } = createNavigationRailInScope({
        tag: 'a',
        divider: true,
        itemAttrs: { 'data-rail': '1' },
        itemMenuAttrs: { 'data-menu-attr': 'm' },
        itemManagementAttrs: { 'data-mgmt-attr': 'x' },
        selected: 'sub1',
        list: [
          {
            index: 'mnu',
            type: 'menu',
            label: 'More',
            value: [{ value: 'sub1', label: 'Sub 1' }]
          }
        ]
      })

      const [menuItem] = rail.list
      expect(rail.isOpenGroup(menuItem!)).toBe(true)
      expect(rail.getList(menuItem!)).toHaveLength(1)

      const itemBinds = rail.getItem({
        index: 'home',
        type: 'item',
        value: 'home',
        label: 'Home',
        role: 'menuitem',
        onClick: itemClick
      })
      expect(itemBinds.role).toBe('menuitem')
      expect(itemBinds['data-item']).toBe(true)
      expect(itemBinds['data-rail']).toBe('1')
      expect(Array.isArray(itemBinds.onClick)).toBe(true)

      const menuBinds = rail.getItemMenu({ index: 'm', type: 'menu', value: 'm', label: 'M' })
      expect(menuBinds['data-menu-attr']).toBe('m')
      expect(menuBinds.class).toContain('d1-navigationRail__menu')

      const mgmtBinds = rail.getItemManagementFormMenu(menuItem!, true)
      expect(mgmtBinds['data-mgmt-attr']).toBe('x')
      expect(mgmtBinds['data-status']).toBe('open')
      expect(mgmtBinds.selectedChild).toBe(true)
      expect(mgmtBinds.selectionStyle).toBe('none')

      unmount()
    })

    it('activates control on mount when control=true and isolates IDs per ServerStorage context', async () => {
      vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })
      vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

      const storageA: Record<string, unknown> = {}
      const storageB: Record<string, unknown> = {}

      ServerStorage.init(() => storageA)
      const railA = createNavigationRailInScope({
        control: true,
        selected: 'one',
        list: [{ value: 'one', label: 'One' }]
      })
      await nextTick()
      expect(railA.rail.hasInstance('control')).toBe(true)
      expect(railA.rail.hasInstance('go')).toBe(true)
      const idA = railA.rail.getItem(railA.rail.list[0]!).listId

      ServerStorage.reset()
      ServerStorage.init(() => storageB)
      const railB = createNavigationRailInScope({
        list: [{ value: 'one', label: 'One' }]
      })
      const idB = railB.rail.getItem(railB.rail.list[0]!).listId

      expect(idA).toBe(2)
      expect(idB).toBe(2)

      railA.unmount()
      railB.unmount()
    })
  })
})
