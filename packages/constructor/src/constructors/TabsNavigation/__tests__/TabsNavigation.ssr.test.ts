// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createSSRApp,
  defineComponent,
  effectScope,
  h,
  reactive,
  ref
} from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, DesignName, ServerStorage } from '@dxtmisha/functional'

import { HorizontalScrollDesign, type HorizontalScrollProps } from '../../HorizontalScroll'
import { TabItemDesign, type TabItemPropsBasic, defaultsTabItem } from '../../TabItem'
import { defaultsTabsNavigation, type TabsNavigationProps } from '../props'
import { TabsNavigation } from '../TabsNavigation'
import { TabsNavigationDesign } from '../TabsNavigationDesign'

const RealHorizontalScroll = defineComponent({
  name: 'RealHorizontalScroll',
  inheritAttrs: false,
  props: {
    bleed: { type: Boolean, default: undefined },
    align: { type: String, default: undefined },
    tag: { type: String, default: undefined }
  },
  setup(componentProps, { expose }) {
    const design = new HorizontalScrollDesign(
      'd1.horizontalScroll',
      componentProps as Readonly<HorizontalScrollProps>,
      {
        classes: computed<ConstrClasses>(() => ({
          main: { 'd1-horizontalScroll': true }
        }))
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const RealTabItem = defineComponent({
  name: 'RealTabItem',
  inheritAttrs: false,
  props: {
    label: { type: [String, Number], default: undefined },
    value: { type: [String, Number, Boolean], default: undefined },
    index: { type: [String, Number, Boolean], default: undefined },
    tag: { type: String, default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    focus: { type: Boolean, default: false },
    role: { type: String, default: defaultsTabItem.role }
  },
  setup(componentProps, { expose }) {
    const design = new TabItemDesign(
      'd1.tabItem',
      componentProps as Readonly<TabItemPropsBasic>,
      {
        classes: computed<ConstrClasses>(() => ({
          main: {
            'd1-tabItem': true,
            'd1-tabItem--selected': Boolean(componentProps.selected)
          }
        }))
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('TabsNavigation (SSR)', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
  })

  afterEach(() => {
    expect(warnSpy).not.toHaveBeenCalled()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  it('should evaluate TabsNavigation orchestrator in Node without DOM globals or lifecycle leaks', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const naming = new DesignName('d1.tabsNavigation')
    const props = reactive<TabsNavigationProps>({
      ...defaultsTabsNavigation,
      divider: true,
      selected: 'overview',
      list: [
        { value: 'overview', label: 'Overview' },
        { value: 'metrics', label: 'Metrics' }
      ]
    })

    scope.run(() => {
      const navigation = new TabsNavigation(props, element, naming)

      expect(navigation.aria).toEqual({
        'role': 'tablist',
        'aria-orientation': 'horizontal'
      })
      expect(navigation.binds.tabindex).toBe(0)
      expect(navigation.binds.role).toBe('tablist')

      const ids = navigation.expose.ids()
      expect(Object.keys(ids)).toEqual(['overview', 'metrics'])

      // DOM/lifecycle-only helpers must stay uninstantiated in SSR
      expect(navigation.hasInstance('control')).toBe(false)
      expect(navigation.hasInstance('event')).toBe(false)
      expect(navigation.hasInstance('indicator')).toBe(false)
      expect(navigation.hasInstance('model')).toBe(false)
      expect(navigation.hasInstance('size')).toBe(false)
    })

    scope.stop()
  })

  it('should render deterministic HTML across isolated SSR requests without browser API leaks', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const renderOnce = async () => {
      const storage: Record<string, unknown> = {}
      ServerStorage.reset()
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const props: TabsNavigationProps = {
            ...defaultsTabsNavigation,
            divider: true,
            selected: 'analytics',
            list: [
              { value: 'overview', label: 'Overview' },
              { value: 'analytics', label: 'Analytics' }
            ]
          }

          const design = new TabsNavigationDesign(
            'd1.tabsNavigation',
            props,
            {
              classes: computed<ConstrClasses>(() => ({
                main: {
                  'd1-tabsNavigation': true,
                  'd1-tabsNavigation--divider': true
                }
              })),
              components: {
                horizontalScroll: RealHorizontalScroll,
                tabItem: RealTabItem
              }
            }
          )

          const render = design.render()
          return () => h(render)
        }
      })

      const app = createSSRApp({
        render: () => h(
          TestComponent,
          { 'aria-label': 'Dashboard sections' },
          {
            leading: () => [h('span', { class: 'ssr-leading' }, 'Leading')],
            trailing: () => [h('span', { class: 'ssr-trailing' }, 'Trailing')]
          }
        )
      })

      return await renderToString(app)
    }

    const htmlFirst = await renderOnce()
    const htmlSecond = await renderOnce()

    expect(htmlFirst).toBe(htmlSecond)
    expect(htmlFirst).toContain('role="tablist"')
    expect(htmlFirst).toContain('aria-orientation="horizontal"')
    expect(htmlFirst).toContain('aria-label="Dashboard sections"')
    expect(htmlFirst).toContain('tabindex="0"')
    expect(htmlFirst).toContain('d1-tabsNavigation--divider')
    expect(htmlFirst).toContain('ssr-leading')
    expect(htmlFirst).toContain('ssr-trailing')
    expect(htmlFirst).toContain('role="tab"')
    expect(htmlFirst).toContain('data-value="analytics"')
    expect(htmlFirst).toContain('aria-selected="true"')
    expect(htmlFirst).toContain('Overview')
    expect(htmlFirst).toContain('Analytics')
  })

  it('should render all TabsNavigation edge variants cleanly in SSR', async () => {
    const variants: Array<{ props: TabsNavigationProps, expectedFragment: string }> = [
      {
        props: {
          selected: 0,
          list: [
            { value: 0, label: 'Zero' },
            { value: 1, label: 'One' }
          ]
        },
        expectedFragment: 'data-value="0"'
      },
      {
        props: {
          modelSelected: 'vn',
          list: [{ value: 'vn', label: 'Tiếng Việt · Настройки 🚀' }]
        },
        expectedFragment: 'Tiếng Việt · Настройки 🚀'
      },
      {
        props: {
          keyValue: 'code',
          keyLabel: 'title',
          list: [{ code: 'custom', title: 'Custom Key Tab' }] as unknown as TabsNavigationProps['list']
        },
        expectedFragment: 'Custom Key Tab'
      },
      {
        props: {
          list: []
        },
        expectedFragment: 'role="tablist"'
      }
    ]

    for (const variant of variants) {
      const storage: Record<string, unknown> = {}
      ServerStorage.reset()
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const design = new TabsNavigationDesign(
            'd1.tabsNavigation',
            {
              ...defaultsTabsNavigation,
              ...variant.props
            },
            {
              classes: computed<ConstrClasses>(() => ({
                main: { 'd1-tabsNavigation': true }
              })),
              components: {
                horizontalScroll: RealHorizontalScroll,
                tabItem: RealTabItem
              }
            }
          )

          const render = design.render()
          return () => h(render)
        }
      })

      const html = await renderToString(createSSRApp(TestComponent))
      expect(typeof html).toBe('string')
      expect(html).toContain(variant.expectedFragment)
    }
  })
})
