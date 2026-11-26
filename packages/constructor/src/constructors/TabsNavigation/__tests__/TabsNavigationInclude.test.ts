// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import type { TabsNavigationPropsInclude } from '../basicTypes'
import type { TabsNavigationExpose } from '../types'
import { TabsNavigationInclude } from '../TabsNavigationInclude'

describe('TabsNavigationInclude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should evaluate static is predicate based on tabs and tabsNavigationAttrs', () => {
    expect(TabsNavigationInclude.is()).toBe(false)
    expect(TabsNavigationInclude.is({})).toBe(false)
    expect(TabsNavigationInclude.is({ tabs: [{ value: 'a', label: 'A' }] })).toBe(true)
    expect(TabsNavigationInclude.is({ tabsNavigationAttrs: { divider: true } })).toBe(true)
  })

  it('should map ids getter to element.ids() and fallback to empty object when unmounted', () => {
    const mockExpose: TabsNavigationExpose = {
      ids: vi.fn().mockReturnValue({ 'tab-1': 'generated-id-1' })
    }

    const include = new TabsNavigationInclude({}, new DesignName('d1.tabs'))
    expect(include.ids).toEqual({})

    // @ts-expect-error assigning protected ref in unit test
    include.element.value = mockExpose
    expect(include.ids).toEqual({ 'tab-1': 'generated-id-1' })
    expect(mockExpose.ids).toHaveBeenCalledTimes(1)
  })

  it('should resolve tabs via getExtra and preserve inherited itemAttrs when tabItemAttrs is undefined', () => {
    const propsWithAttrs: TabsNavigationPropsInclude = {
      tabs: [{ value: 'overview', label: 'Overview' }],
      tabItemAttrs: { style: { color: 'red' } }
    }

    const includeWithAttrs = new TabsNavigationInclude(propsWithAttrs, new DesignName('d1.tabs'))
    expect(includeWithAttrs.binds.value.list).toEqual([{ value: 'overview', label: 'Overview' }])
    expect(includeWithAttrs.binds.value.itemAttrs).toEqual({ style: { color: 'red' } })

    // Non-destructive merging: undefined tabItemAttrs must not overwrite tabsNavigationAttrs.itemAttrs
    const propsInherited: TabsNavigationPropsInclude = {
      tabs: [{ value: 'details', label: 'Details' }],
      tabsNavigationAttrs: {
        itemAttrs: { tag: 'a' }
      }
    }

    const includeInherited = new TabsNavigationInclude(propsInherited, new DesignName('d1.tabs'))
    expect(includeInherited.binds.value.itemAttrs).toEqual({ tag: 'a' })
  })

  it('should render connected tabsNavigation component via DesignComponents', () => {
    const MockTabsNavigation = defineComponent({
      name: 'MockTabsNavigation',
      setup() {
        return () => h('div', { class: 'mock-tabs-navigation' })
      }
    })
    const components = new DesignComponents({
      tabsNavigation: MockTabsNavigation
    })
    const include = new TabsNavigationInclude(
      { tabs: [{ value: 'a', label: 'A' }] },
      new DesignName('d1.tabs'),
      components
    )

    const rendered = include.render()
    expect(rendered).toHaveLength(1)
    expect(rendered[0]?.type).toBe(MockTabsNavigation)
  })
})
