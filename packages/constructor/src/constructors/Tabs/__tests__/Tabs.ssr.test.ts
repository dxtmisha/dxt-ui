// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createSSRApp,
  defineComponent,
  effectScope,
  h,
  reactive,
  ref,
  type VNode
} from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, DesignName, ServerStorage } from '@dxtmisha/functional'

import { HorizontalScrollDesign, type HorizontalScrollProps } from '../../HorizontalScroll'
import { defaultsMotionAxis, MotionAxisDesign, type MotionAxisProps } from '../../MotionAxis'
import { defaultsTabItem, TabItemDesign, type TabItemPropsBasic } from '../../TabItem'
import {
  defaultsTabsNavigation,
  TabsNavigationDesign,
  type TabsNavigationProps
} from '../../TabsNavigation'
import { defaultsTabs, type TabsProps } from '../props'
import { Tabs } from '../Tabs'
import { TabsDesign } from '../TabsDesign'

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

const RealTabsNavigation = defineComponent({
  name: 'RealTabsNavigation',
  inheritAttrs: false,
  props: {
    selected: { type: [String, Number, Boolean, Array], default: undefined },
    modelSelected: { type: [String, Number, Boolean, Array], default: undefined },
    list: { type: [Array, Object], default: undefined },
    tag: { type: String, default: undefined },
    keyLabel: { type: String, default: undefined },
    keyValue: { type: String, default: undefined },
    itemAttrs: { type: Object, default: undefined },
    divider: { type: Boolean, default: false },
    horizontalScrollBleed: { type: Boolean, default: defaultsTabsNavigation.horizontalScrollBleed },
    horizontalScrollAlign: { type: String, default: defaultsTabsNavigation.horizontalScrollAlign }
  },
  setup(componentProps, { expose }) {
    const design = new TabsNavigationDesign(
      'd1.tabsNavigation',
      componentProps as Readonly<TabsNavigationProps>,
      {
        classes: computed<ConstrClasses>(() => ({
          main: {
            'd1-tabsNavigation': true,
            'd1-tabsNavigation--divider': Boolean(componentProps.divider)
          }
        })),
        components: {
          horizontalScroll: RealHorizontalScroll,
          tabItem: RealTabItem
        }
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const RealMotionAxis = defineComponent({
  name: 'RealMotionAxis',
  inheritAttrs: false,
  props: {
    selected: { type: String, default: undefined },
    modelSelected: { type: String, default: undefined },
    axis: { type: String, default: defaultsMotionAxis.axis },
    direction: { type: String, default: defaultsMotionAxis.direction },
    animationHeight: { type: Boolean, default: false },
    inDom: { type: Boolean, default: false },
    inDomSlide: { type: Array, default: undefined }
  },
  setup(componentProps, { expose }) {
    const design = new MotionAxisDesign(
      'd1.motionAxis',
      componentProps as Readonly<MotionAxisProps>,
      {
        classes: computed<ConstrClasses>(() => ({
          main: { 'd1-motionAxis': true }
        }))
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('Tabs (SSR)', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
  })

  afterEach(() => {
    expect(warnSpy).not.toHaveBeenCalled()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  it('should evaluate Tabs orchestrator in Node without DOM globals or eager helper allocation', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const naming = new DesignName('d1.tabs')
    const props = reactive<TabsProps>({
      ...defaultsTabs,
      selected: 'overview',
      tabs: [
        { value: 'overview', label: 'Overview' },
        { value: 'metrics', label: 'Metrics' }
      ]
    })

    scope.run(() => {
      const tabs = new Tabs(props, element, naming)

      expect(tabs.hasInstance('event')).toBe(false)
      expect(tabs.hasInstance('model')).toBe(false)
      expect(tabs.hasInstance('motionAxis')).toBe(false)
      expect(tabs.hasInstance('selected')).toBe(false)
      expect(tabs.hasInstance('tabsNavigation')).toBe(false)

      expect(tabs.i('selected').getString()).toBe('overview')
      expect(tabs.hasInstance('event')).toBe(false)
      expect(tabs.hasInstance('model')).toBe(false)
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
          const props: TabsProps = {
            ...defaultsTabs,
            selected: 'analytics',
            tabs: [
              { value: 'overview', label: 'Overview' },
              { value: 'analytics', label: 'Analytics' }
            ],
            tabsNavigationAttrs: { divider: true }
          }

          const design = new TabsDesign(
            'd1.tabs',
            props,
            {
              classes: computed<ConstrClasses>(() => ({
                main: { 'd1-tabs': true }
              })),
              components: {
                tabsNavigation: RealTabsNavigation,
                motionAxis: RealMotionAxis
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
          {},
          {
            overview: () => [h('p', 'Overview SSR Content')],
            analytics: () => [h('p', 'Analytics SSR Content')]
          }
        )
      })

      return await renderToString(app)
    }

    const htmlFirst = await renderOnce()
    const htmlSecond = await renderOnce()

    expect(htmlFirst).toBe(htmlSecond)
    expect(htmlFirst).toContain('role="tablist"')
    expect(htmlFirst).toContain('role="tab"')
    expect(htmlFirst).toContain('role="tabpanel"')
    expect(htmlFirst).toContain('d1-tabs__slide')
    expect(htmlFirst).toContain('d1-tabsNavigation--divider')
    expect(htmlFirst).toContain('aria-selected="true"')
    expect(htmlFirst).toContain('Analytics SSR Content')
    expect(htmlFirst).not.toContain('Overview SSR Content')
    expect(htmlFirst).not.toContain('aria-labelledby="undefined"')
  })

  it('should render all Tabs edge variants cleanly in SSR', async () => {
    const variants: Array<{
      props: TabsProps
      slots: Record<string, () => VNode[]>
      expectedFragments: string[]
      forbiddenFragments?: string[]
    }> = [
      {
        props: {
          tabs: [
            { value: 0, label: 'Zero' },
            { value: 1, label: 'One' }
          ]
        },
        slots: {
          0: () => [h('span', 'Zero Slide')],
          1: () => [h('span', 'One Slide')]
        },
        expectedFragments: ['data-value="0"', 'Zero Slide', 'role="tabpanel"']
      },
      {
        props: {
          modelSelected: 'vn',
          tabs: [{ value: 'vn', label: 'Tiếng Việt · Вкладка 🚀' }]
        },
        slots: {
          vn: () => [h('span', 'Nội dung Tiếng Việt 🚀')]
        },
        expectedFragments: ['Tiếng Việt · Вкладка 🚀', 'Nội dung Tiếng Việt 🚀']
      },
      {
        props: {
          tabs: {
            keyValue: 'code',
            list: [
              { code: 'a', label: 'Alpha' },
              { code: 'b', label: 'Beta' }
            ] as unknown as NonNullable<TabsProps['tabsNavigationAttrs']>['list']
          },
          motionAxisAttrs: { inDom: true }
        },
        slots: {
          a: () => [h('span', 'Alpha Content')],
          b: () => [h('span', 'Beta Content')]
        },
        expectedFragments: ['Alpha Content', 'Beta Content', 'd1-tabs__slide']
      },
      {
        props: {
          selected: 'only'
        },
        slots: {
          only: () => [h('span', 'Slide Without Navigation')]
        },
        expectedFragments: ['Slide Without Navigation', 'role="tabpanel"'],
        forbiddenFragments: ['role="tablist"']
      },
      {
        props: {
          tabs: []
        },
        slots: {
          undefined: () => [h('span', 'Must Not Match Stringified Undefined')]
        },
        expectedFragments: ['role="tablist"'],
        forbiddenFragments: ['Must Not Match Stringified Undefined']
      }
    ]

    for (const variant of variants) {
      const storage: Record<string, unknown> = {}
      ServerStorage.reset()
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const design = new TabsDesign(
            'd1.tabs',
            {
              ...defaultsTabs,
              ...variant.props
            },
            {
              classes: computed<ConstrClasses>(() => ({
                main: { 'd1-tabs': true }
              })),
              components: {
                tabsNavigation: RealTabsNavigation,
                motionAxis: RealMotionAxis
              }
            }
          )

          const render = design.render()
          return () => h(render)
        }
      })

      const html = await renderToString(createSSRApp({
        render: () => h(TestComponent, {}, variant.slots)
      }))

      expect(typeof html).toBe('string')
      for (const fragment of variant.expectedFragments) {
        expect(html).toContain(fragment)
      }
      for (const forbidden of variant.forbiddenFragments ?? []) {
        expect(html).not.toContain(forbidden)
      }
    }
  })
})
