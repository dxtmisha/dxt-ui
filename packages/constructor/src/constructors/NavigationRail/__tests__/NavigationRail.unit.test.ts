// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref, type App } from 'vue'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ListControl, ListFocus, ListGo } from '../../List'
import { NavigationRail, type NavigationRailConstructors } from '../NavigationRail'
import { defaultsNavigationRail, type NavigationRailProps } from '../props'

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
    constructors?: Partial<NavigationRailConstructors>,
    emits: (...args: unknown[]) => void = vi.fn()
  ): {
    rail: NavigationRail
    emits: ReturnType<typeof vi.fn>
    unmount: () => void
  } {
    let instance!: NavigationRail
    const Host = defineComponent({
      setup() {
        const element = ref<HTMLElement>()
        instance = new NavigationRail(
          props,
          element,
          naming,
          undefined,
          undefined,
          emits as never,
          constructors
        )
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
      emits: emits as ReturnType<typeof vi.fn>,
      unmount: () => application.unmount()
    }
  }

  describe('Defaults, Lazy instantiation and Dependency Injection', () => {
    it('exposes expected defaultsNavigationRail values', () => {
      expect(defaultsNavigationRail).toEqual({
        keyLabel: 'label',
        keyValue: 'value',
        tag: 'div',
        role: 'listbox',
        tabindex: 0
      })
    })

    it('keeps subordinate helpers uninstantiated before access and blocks control creation when disabled or inactive', () => {
      ServerStorage.init(() => ({}))
      const { rail, unmount } = createNavigationRailInScope({
        ...defaultsNavigationRail,
        list: [{ value: 'home', label: 'Home' }]
      })

      expect(rail.hasInstance('data')).toBe(false)
      expect(rail.hasInstance('focus')).toBe(false)
      expect(rail.hasInstance('go')).toBe(false)
      expect(rail.hasInstance('control')).toBe(false)
      expect(rail.hasInstance('enabled')).toBe(false)
      expect(rail.hasInstance('event')).toBe(false)

      const binds = rail.binds
      expect(binds.tabindex).toBe(0)
      ;(binds.onFocus as () => void)()
      ;(binds.onBlur as () => void)()
      expect(rail.hasInstance('control')).toBe(false)

      expect(rail.list).toHaveLength(1)
      expect(rail.hasInstance('data')).toBe(true)
      expect(rail.hasInstance('focus')).toBe(true)
      expect(rail.hasInstance('go')).toBe(false)
      expect(rail.hasInstance('control')).toBe(false)

      unmount()
    })

    it('supports dependency injection overrides for all NavigationRailConstructors', () => {
      ServerStorage.init(() => ({}))
      const customOnClick = vi.fn()
      const customOnFocus = vi.fn()

      class CustomControl extends ListControl {
        override readonly onFocus = customOnFocus
      }
      class CustomEnabled extends EnabledInclude {}
      class CustomFocus extends ListFocus {}
      class CustomGo extends ListGo {}
      class CustomEventClick {
        onClick = customOnClick
      }

      const { rail, unmount } = createNavigationRailInScope(
        {
          control: true,
          list: [{ value: 'home', label: 'Home' }]
        },
        {
          control: CustomControl,
          enabled: CustomEnabled,
          event: CustomEventClick as unknown as NavigationRailConstructors['event'],
          focus: CustomFocus,
          go: CustomGo
        }
      )

      const binds = rail.getItem(rail.list[0]!)
      expect(binds.onClick).toBe(customOnClick)
      expect(rail.i('focus')).toBeInstanceOf(CustomFocus)
      expect(rail.i('go')).toBeInstanceOf(CustomGo)
      expect(rail.i('enabled')).toBeInstanceOf(CustomEnabled)
      expect(rail.i('control')).toBeInstanceOf(CustomControl)

      ;(rail.binds.onFocus as () => void)()
      expect(customOnFocus).toHaveBeenCalledTimes(1)

      unmount()
    })
  })

  describe('ARIA attributes and root bindings', () => {
    it('computes role, aria-multiselectable, aria-disabled, and tabindex dynamically', () => {
      ServerStorage.init(() => ({}))
      const props = reactive<NavigationRailProps>({
        ...defaultsNavigationRail,
        list: [{ value: 'home', label: 'Home' }]
      })
      const { rail, unmount } = createNavigationRailInScope(props)

      expect(rail.aria).toEqual({ role: 'listbox' })
      expect(rail.binds.tabindex).toBe(0)

      props.role = 'navigation'
      props.ariaMultiselectable = true
      expect(rail.aria).toEqual({
        'role': 'navigation',
        'aria-multiselectable': 'true'
      })

      props.ariaMultiselectable = false
      expect(rail.aria).toEqual({
        'role': 'navigation',
        'aria-multiselectable': 'false'
      })

      props.control = true
      expect(rail.binds.tabindex).toBeUndefined()

      props.control = false
      props.disabled = true
      expect(rail.aria['aria-disabled']).toBe('true')
      expect(rail.binds.tabindex).toBeUndefined()

      unmount()
    })

    it('prevents control activation when disabled=true even if control=true', async () => {
      ServerStorage.init(() => ({}))
      const { rail, unmount } = createNavigationRailInScope({
        ...defaultsNavigationRail,
        control: true,
        disabled: true,
        selected: 'one',
        list: [{ value: 'one', label: 'One' }]
      })

      await nextTick()

      expect(rail.hasInstance('control')).toBe(false)
      expect(rail.hasInstance('go')).toBe(false)

      ;(rail.binds.onFocus as () => void)()
      ;(rail.binds.onBlur as () => void)()
      expect(rail.hasInstance('control')).toBe(false)

      unmount()
    })
  })

  describe('Item, menu, management bindings, disabled propagation and SSR isolation', () => {
    it('builds item, menu, and management bindings cleanly and propagates inMenu iconArrowRight', () => {
      ServerStorage.init(() => ({}))
      const itemClick = vi.fn()
      const { rail, unmount } = createNavigationRailInScope({
        tag: 'a',
        divider: true,
        iconArrowRight: 'chevron_right',
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

      const mgmtTopBinds = rail.getItemManagementFormMenu(menuItem!, false, false)
      expect(mgmtTopBinds['data-mgmt-attr']).toBe('x')
      expect(mgmtTopBinds['data-status']).toBe('close')
      expect(mgmtTopBinds.selectedChild).toBe(true)
      expect(mgmtTopBinds.selectionStyle).toBe('none')
      expect(mgmtTopBinds.iconTrailing).toBeUndefined()
      expect('filterMode' in rail.getItemManagementFormMenu({ index: 'm', type: 'menu', value: 'm', label: 'M' }, false, false)).toBe(false)

      const mgmtNestedBinds = rail.getItemManagementFormMenu(menuItem!, true, true)
      expect(mgmtNestedBinds['data-status']).toBe('open')
      expect(mgmtNestedBinds.iconTrailing).toBe('chevron_right')

      unmount()
    })

    it('propagates rail-level disabled state to all item helpers and blocks event emissions', () => {
      ServerStorage.init(() => ({}))
      const emits = vi.fn()
      const { rail, unmount } = createNavigationRailInScope(
        {
          disabled: true,
          list: [
            { value: 'home', label: 'Home' },
            {
              index: 'mnu',
              type: 'menu',
              label: 'More',
              value: [{ value: 'sub', label: 'Sub' }]
            }
          ]
        },
        undefined,
        emits
      )

      const itemBinds = rail.getItem(rail.list[0]!)
      expect(itemBinds.disabled).toBe(true)
      expect(rail.getItemMenu({ index: 'sub', type: 'item', value: 'sub', label: 'Sub' }).disabled).toBe(true)
      expect(rail.getItemManagementFormMenu(rail.list[1]!, false, true).disabled).toBe(true)

      const clickHandler = itemBinds.onClick as (event: MouseEvent, options?: Record<string, unknown>) => void
      clickHandler(new MouseEvent('click'), { value: 'home', type: 'click' })
      expect(emits).not.toHaveBeenCalled()

      unmount()
    })

    it('preserves numeric 0 values across label, value, index, selected, and tabindex', () => {
      ServerStorage.init(() => ({}))
      const { rail, unmount } = createNavigationRailInScope({
        ...defaultsNavigationRail,
        tabindex: 0,
        selected: 0,
        list: [{ index: 0, value: 0, label: '0' }]
      })

      expect(rail.binds.tabindex).toBe(0)
      expect(rail.i('data').isSelected.value).toBe(true)
      expect(rail.i('data').selectedValues.value).toEqual([0])

      const itemBinds = rail.getItem(rail.list[0]!)
      expect(itemBinds.value).toBe(0)
      expect(itemBinds.label).toBe('0')

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
