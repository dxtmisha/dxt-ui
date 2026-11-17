// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref, type App } from 'vue'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { List, type ListConstructors } from '../List'
import type { ListProps } from '../props'

const applications: App[] = []

describe('List (Unit)', () => {
  const naming = new DesignName('d1.list')

  afterEach(() => {
    applications.splice(0).forEach(application => application.unmount())
    document.body.replaceChildren()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  function createListInScope(
    props: ListProps = {},
    constructors?: Partial<ListConstructors>
  ): {
    list: List
    unmount: () => void
  } {
    let instance!: List
    const Host = defineComponent({
      setup() {
        const element = ref<HTMLElement>()
        instance = new List(props, element, naming, undefined, undefined, vi.fn(), constructors)
        return () => h('div', { ref: element })
      }
    })
    const application = createApp(Host)
    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(application)
    application.mount(host)

    return {
      list: instance,
      unmount: () => application.unmount()
    }
  }

  describe('Lazy instantiation and Dependency Injection', () => {
    it('keeps subordinate classes uninstantiated until accessed when control is false', () => {
      ServerStorage.init(() => ({}))
      const { list, unmount } = createListInScope({
        list: [{ value: 'a', label: 'A' }]
      })

      expect(list.hasInstance('data')).toBe(false)
      expect(list.hasInstance('focus')).toBe(false)
      expect(list.hasInstance('search')).toBe(false)
      expect(list.hasInstance('go')).toBe(false)
      expect(list.hasInstance('control')).toBe(false)
      expect(list.hasInstance('text')).toBe(false)
      expect(list.hasInstance('windowClasses')).toBe(false)

      expect(list.classes).toEqual({
        'd1-list--highlightActive': false,
        'd1-list--searchActive': false
      })
      expect(list.hasInstance('search')).toBe(false)

      expect(list.list).toHaveLength(1)
      expect(list.hasInstance('data')).toBe(true)
      expect(list.hasInstance('focus')).toBe(true)
      expect(list.hasInstance('search')).toBe(true)
      expect(list.hasInstance('go')).toBe(false)
      expect(list.hasInstance('control')).toBe(false)

      unmount()
    })

    it('supports dependency injection overrides for subordinate helpers', () => {
      ServerStorage.init(() => ({}))
      const customGet = vi.fn(() => ({ static: 'custom-static' }))
      class CustomWindowClasses {
        get = customGet
      }

      const { list, unmount } = createListInScope(
        {
          list: [{ index: 'g1', label: 'Group', type: 'group', value: [{ value: 's1', label: 'Sub' }] }]
        },
        {
          windowClasses: CustomWindowClasses as unknown as ListConstructors['windowClasses']
        }
      )

      const firstItem = list.list[0]!
      const binds = list.getItemManagementFormMenu(firstItem, true)

      expect(customGet).toHaveBeenCalled()
      expect(binds.class).toContain('custom-static')
      expect(binds['data-status']).toBe('open')
      unmount()
    })
  })

  describe('Data projection, classes, and item binding builders', () => {
    it('computes full and lite list data and filterMode status classes', () => {
      ServerStorage.init(() => ({}))
      const props = reactive<ListProps>({
        list: [
          { value: '1', label: 'Alpha' },
          { value: '2', label: 'Beta' }
        ],
        lite: false,
        filterMode: true,
        highlight: 'alp'
      })
      const { list, unmount } = createListInScope(props)

      expect(list.list).toHaveLength(2)
      expect(list.classes).toEqual({
        'd1-list--highlightActive': true,
        'd1-list--searchActive': true
      })

      props.lite = true
      props.liteThreshold = 1
      expect(list.list).toHaveLength(2)
      expect(list.list[0]).not.toHaveProperty('highlight')
      unmount()
    })

    it('builds item, group, menu, and management bindings without overwriting item roles or handlers', () => {
      ServerStorage.init(() => ({}))
      const itemClick = vi.fn()
      const props: ListProps = {
        tag: 'button',
        divider: true,
        selectionStyle: 'checkbox',
        lazy: true,
        lazyMargin: '128px 0px',
        lazyCacheHeight: false,
        iconArrowDown: 'arrow_down',
        iconArrowRight: 'arrow_right',
        itemAttrs: { 'data-common': '1' },
        itemGroupAttrs: { 'data-group-attr': 'g' },
        itemMenuAttrs: { 'data-menu-attr': 'm' },
        itemManagementAttrs: { 'data-mgmt-attr': 'x' },
        list: [
          {
            index: 'grp',
            label: 'Group',
            type: 'group',
            value: [{ value: 'child1', label: 'Child 1' }]
          }
        ],
        selected: 'child1'
      }

      const { list, unmount } = createListInScope(props)
      const [groupItem] = list.list

      expect(list.isOpenGroup(groupItem!)).toBe(true)
      expect(list.getList(groupItem!)).toHaveLength(1)

      const standardItem = list.getItem({
        index: 'c1',
        type: 'item',
        value: 'c1',
        label: 'C1',
        role: 'menuitem',
        onClick: itemClick
      })
      expect(standardItem.role).toBe('menuitem')
      expect(standardItem['data-item']).toBe(true)
      expect(standardItem['data-common']).toBe('1')
      expect(standardItem.lazy).toBe(true)
      expect(standardItem.lazyMargin).toBe('128px 0px')
      expect(standardItem.lazyCacheHeight).toBe(false)
      expect(Array.isArray(standardItem.onClick)).toBe(true)

      const groupBinds = list.getItemGroup({ index: 'g', type: 'group', value: 'g', label: 'G' })
      expect(groupBinds['data-group-attr']).toBe('g')
      expect(groupBinds.class).toContain('d1-list__group')

      const menuBinds = list.getItemMenu({ index: 'm', type: 'menu', value: 'm', label: 'M' })
      expect(menuBinds['data-menu-attr']).toBe('m')
      expect(menuBinds.class).toContain('d1-list__menu')

      const mgmtGroup = list.getItemManagementFormGroup(groupItem!, {
        isOpen: true,
        isShow: true,
        classes: {
          show: 'show',
          open: 'open',
          window: 'window',
          click: 'click',
          none: 'none',
          noneGlobal: 'none-global',
          close: 'close'
        },
        idControl: 'ctrl-1',
        idBody: 'body-1',
        binds: { ariaHaspopup: 'listbox' },
        open: true
      })
      expect(mgmtGroup.iconTrailing).toBe('arrow_down')
      expect(mgmtGroup.selectedChild).toBe(true)
      expect(mgmtGroup['aria-haspopup']).toBe('listbox')
      expect(mgmtGroup.selectionStyle).toBe('none')

      unmount()
    })
  })

  describe('Control lifecycle and SSR isolation', () => {
    it('activates control on mount when control=true and cleans up watchers on unmount', async () => {
      ServerStorage.init(() => ({}))
      vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })
      vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

      const { list, unmount } = createListInScope({
        control: true,
        list: [{ value: 'one', label: 'One' }],
        selected: 'one'
      })

      await nextTick()
      expect(list.hasInstance('control')).toBe(true)
      expect(list.hasInstance('go')).toBe(true)

      unmount()
    })

    it('isolates list IDs per ServerStorage context', () => {
      const storageA: Record<string, unknown> = {}
      const storageB: Record<string, unknown> = {}

      ServerStorage.init(() => storageA)
      const listA = createListInScope({ list: [{ value: '1', label: 'One' }] })
      const idA = listA.list.getItem(listA.list.list[0]!).listId

      ServerStorage.reset()
      ServerStorage.init(() => storageB)
      const listB = createListInScope({ list: [{ value: '1', label: 'One' }] })
      const idB = listB.list.getItem(listB.list.list[0]!).listId

      expect(idA).toBe(2)
      expect(idB).toBe(2)

      listA.unmount()
      listB.unmount()
    })
  })
})
