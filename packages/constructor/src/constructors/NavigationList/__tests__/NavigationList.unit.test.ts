// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref, type App } from 'vue'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { WindowClassesInclude } from '../../Window'
import {
  List,
  ListControl,
  ListFocus,
  ListGo,
  ListSearch,
  type ListConstructors
} from '../../List'
import { NavigationList } from '../NavigationList'
import { defaultsNavigationList, type NavigationListProps } from '../props'

class InspectableNavigationList extends NavigationList {
  /** Exposes protected list identifier / Возвращает защищенный идентификатор списка */
  get listIdValue() {
    return this.id
  }

  /** Exposes item bindings / Возвращает привязки элемента списка */
  get currentItemBinds() {
    return this.itemBinds.value
  }
}

class CustomListControl extends ListControl {}
class CustomListSearch extends ListSearch {
  readonly customMarker = true
}
class CustomEventClick extends EventClickInclude {}
class CustomListFocus extends ListFocus {}
class CustomListGo extends ListGo {}
class CustomTextInclude extends TextInclude {}
class CustomWindowClasses extends WindowClassesInclude {}

const applications: App[] = []

afterEach(() => {
  applications.splice(0).forEach(application => application.unmount())
  document.body.replaceChildren()
  ServerStorage.reset()
  vi.restoreAllMocks()
})

describe('NavigationList (Unit / Logic Orchestrator)', () => {
  const naming = new DesignName('d1.navigationList')

  it('inherits List, applies defaultsNavigationList, and computes ARIA and lazy control safety', () => {
    ServerStorage.init(() => ({}))
    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<NavigationListProps>({
      ...defaultsNavigationList,
      list: [
        { value: 'home', label: 'Home' },
        { value: 'docs', label: 'Docs' }
      ],
      selected: 'docs'
    })

    scope.run(() => {
      const item = new InspectableNavigationList(props, element, naming)

      expect(item).toBeInstanceOf(NavigationList)
      expect(item).toBeInstanceOf(List)
      expect(defaultsNavigationList.tag).toBe('a')
      expect(defaultsNavigationList.axis).toBe('y')
      expect(defaultsNavigationList.role).toBe('listbox')
      expect(defaultsNavigationList.lazyCacheHeight).toBe(true)

      expect(item.list).toHaveLength(2)
      expect(item.classes).toEqual({
        'd1-navigationList--highlightActive': false,
        'd1-navigationList--searchActive': false
      })
      expect(item.aria).toEqual({ role: 'listbox' })
      expect(item.binds.tabindex).toBe(0)

      ;(item.binds.onFocus as () => void)()
      ;(item.binds.onBlur as () => void)()
      expect(item.hasInstance('control')).toBe(false)
      expect(item.hasInstance('go')).toBe(false)

      expect(item.currentItemBinds.tag).toBe('a')
      expect(item.currentItemBinds.listId).toBe(item.listIdValue)
    })

    scope.stop()
  })

  it('computes dynamic ARIA multiselectable, disabled states, and propagates disabled to all item bindings', () => {
    ServerStorage.init(() => ({}))
    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<NavigationListProps>({
      ...defaultsNavigationList,
      role: 'menu',
      roleItem: 'menuitem',
      ariaMultiselectable: true,
      disabled: true,
      list: [
        { value: 'overview', label: 'Overview' },
        {
          type: 'group',
          index: 'grp-1',
          label: 'Workspace',
          value: [{ value: 'team', label: 'Team' }]
        },
        {
          type: 'menu',
          index: 'mnu-1',
          label: 'More',
          value: [{ value: 'api', label: 'API' }]
        }
      ]
    })

    scope.run(() => {
      const item = new InspectableNavigationList(props, element, naming)

      expect(item.aria).toEqual({
        'role': 'menu',
        'aria-multiselectable': 'true',
        'aria-disabled': 'true'
      })
      expect(item.binds.tabindex).toBeUndefined()

      ;(item.binds.onFocus as () => void)()
      expect(item.hasInstance('control')).toBe(false)

      const standardBinds = item.getItem(item.list[0]!)
      expect(standardBinds.role).toBe('menuitem')
      expect(standardBinds.disabled).toBe(true)

      const groupBinds = item.getItemGroup(item.list[1]!)
      expect(groupBinds.disabled).toBe(true)

      const menuBinds = item.getItemMenu(item.list[2]!)
      expect(menuBinds.disabled).toBe(true)

      props.disabled = false
      props.ariaMultiselectable = false
      expect(item.aria).toEqual({
        'role': 'menu',
        'aria-multiselectable': 'false'
      })
      expect(item.binds.tabindex).toBe(0)
      expect(item.getItem(item.list[0]!).disabled).toBe(false)
    })

    scope.stop()
  })

  it('supports Partial<ListConstructors> DI overrides and highlight/filter classes with diacritics', () => {
    ServerStorage.init(() => ({}))
    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<NavigationListProps>({
      ...defaultsNavigationList,
      control: true,
      list: [
        { value: 'overview', label: 'Overview' },
        { value: 'vn', label: 'Tiếng Việt' }
      ],
      filterMode: true,
      highlight: 'việt'
    })

    scope.run(() => {
      const overrides: Partial<ListConstructors> = {
        control: CustomListControl,
        event: CustomEventClick,
        focus: CustomListFocus,
        go: CustomListGo,
        search: CustomListSearch,
        text: CustomTextInclude,
        windowClasses: CustomWindowClasses
      }

      const item = new InspectableNavigationList(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        overrides
      )

      expect(item.i('control')).toBeInstanceOf(CustomListControl)
      expect(item.i('event')).toBeInstanceOf(CustomEventClick)
      expect(item.i('focus')).toBeInstanceOf(CustomListFocus)
      expect(item.i('go')).toBeInstanceOf(CustomListGo)
      const searchInstance = item.i('search') as CustomListSearch
      expect(searchInstance).toBeInstanceOf(CustomListSearch)
      expect(searchInstance.customMarker).toBe(true)
      expect(item.i('text')).toBeInstanceOf(CustomTextInclude)
      expect(item.i('windowClasses')).toBeInstanceOf(CustomWindowClasses)
      expect(item.classes).toEqual({
        'd1-navigationList--highlightActive': true,
        'd1-navigationList--searchActive': true
      })
    })

    scope.stop()
  })

  it('respects lite mode, liteThreshold, max, numeric 0 values, and lifecycle watcher cleanup on unmount', async () => {
    ServerStorage.init(() => ({}))
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0)
      return 1
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    let instance!: InspectableNavigationList
    const props = reactive<NavigationListProps>({
      ...defaultsNavigationList,
      control: true,
      lite: true,
      liteThreshold: 2,
      max: 2,
      selected: 0,
      list: [
        { index: 0, value: 0, label: '0' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' }
      ]
    })

    const app = createApp(defineComponent({
      setup() {
        const element = ref<HTMLElement>()
        instance = new InspectableNavigationList(props, element, naming)
        return () => h('div', { ref: element })
      }
    }))

    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(app)
    app.mount(host)
    await nextTick()

    expect(instance.list).toHaveLength(3)
    expect(instance.i('data').isSelected.value).toBe(true)
    expect(instance.i('data').selectedValues.value).toEqual([0])

    const preparationSpy = vi.spyOn(instance.i('go'), 'preparationBySelected')
    app.unmount()
    props.lite = false
    await nextTick()
    expect(preparationSpy).not.toHaveBeenCalled()
  })
})
