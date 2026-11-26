// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, mergeProps, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { defaultsTabItem, type TabItemPropsBasic } from '../props'
import { TabItem } from '../TabItem'
import { TabItemDesign } from '../TabItemDesign'

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object]
  },
  setup(componentProps, { attrs }) {
    return () => h('span', mergeProps({ class: 'mock-icon' }, attrs), String(componentProps.icon ?? ''))
  }
})

const MockBadge = defineComponent({
  name: 'MockBadge',
  props: {
    label: [String, Number],
    dot: Boolean,
    overlap: String
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'span',
      mergeProps({
        'class': 'mock-badge',
        'data-overlap': String(componentProps.overlap ?? '')
      }, attrs),
      componentProps.label !== undefined ? String(componentProps.label) : ''
    )
  }
})

const MockRipple = defineComponent({
  name: 'MockRipple',
  setup(_, { attrs }) {
    return () => h('span', mergeProps({ class: 'mock-ripple' }, attrs))
  }
})

describe('TabItem (SSR)', () => {
  const naming = new DesignName('d1.tabItem')

  it('should evaluate TabItem orchestrator bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<TabItemPropsBasic>({
      ...defaultsTabItem,
      label: 'SSR Tab',
      labelId: 'ssr-tab-label',
      index: 'tab-ssr',
      selected: true
    })

    scope.run(() => {
      const tabItem = new TabItem(props, element, naming)

      expect(tabItem.tag).toBe('button')
      expect(tabItem.binds.type).toBe('button')
      expect(tabItem.binds.role).toBe('tab')
      expect(tabItem.binds.tabindex).toBe(-1)
      expect(tabItem.binds['data-value']).toBe('tab-ssr')
      expect(tabItem.binds['aria-labelledby']).toBe('ssr-tab-label')
      expect(tabItem.binds['aria-selected']).toBe('true')
    })

    scope.stop()
  })

  it('should render full TabItemDesign component with subcomponents to deterministic HTML string in SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const renderOnce = async () => {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const props: TabItemPropsBasic = {
            ...defaultsTabItem,
            label: 'Analytics',
            labelId: 'analytics-label',
            icon: 'bar_chart',
            badge: 12,
            index: 'analytics',
            selected: true
          }

          const design = new TabItemDesign('d1.tabItem', props, {
            components: {
              icon: MockIcon,
              badge: MockBadge,
              ripple: MockRipple
            }
          })

          const render = design.render()
          return () => h(render)
        }
      })

      const app = createSSRApp(TestComponent)
      return await renderToString(app)
    }

    const htmlFirst = await renderOnce()
    const htmlSecond = await renderOnce()

    expect(htmlFirst).toBe(htmlSecond)
    expect(htmlFirst).toContain('<button')
    expect(htmlFirst).toContain('type="button"')
    expect(htmlFirst).toContain('role="tab"')
    expect(htmlFirst).toContain('tabindex="-1"')
    expect(htmlFirst).toContain('data-value="analytics"')
    expect(htmlFirst).toContain('aria-labelledby="analytics-label"')
    expect(htmlFirst).toContain('aria-selected="true"')
    expect(htmlFirst).toContain('bar_chart')
    expect(htmlFirst).toContain('Analytics')
    expect(htmlFirst).toContain('data-overlap="static"')
    expect(htmlFirst).toContain('12')
    expect(htmlFirst).toContain('mock-ripple')
  })

  it('should render all TabItem variants cleanly across isolated SSR requests', async () => {
    const variants: Array<{ props: TabItemPropsBasic, expectedFragment: string }> = [
      { props: { label: 'Link Tab', href: 'https://example.com' }, expectedFragment: '<a ' },
      { props: { label: 'Router Tab', to: '/dashboard' }, expectedFragment: '<a ' },
      { props: { label: 'Div Tab', tag: 'div' }, expectedFragment: '<div ' },
      { props: { label: 0, badge: 0, index: 0 }, expectedFragment: 'data-value="0"' },
      { props: { label: 'Dot Badge', badgeDot: true }, expectedFragment: 'mock-badge' },
      { props: { label: 'Disabled', disabled: true }, expectedFragment: 'aria-disabled="true"' },
      { props: { label: 'Readonly', readonly: true }, expectedFragment: 'Readonly' },
      { props: { label: 'Skeleton', isSkeleton: true }, expectedFragment: 'd1-skeleton__textVariant' },
      { props: { label: 'Вкладка · Thẻ tiếng Việt · タブ 🚀' }, expectedFragment: 'Thẻ tiếng Việt' }
    ]

    for (const variant of variants) {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const design = new TabItemDesign('d1.tabItem', {
            ...defaultsTabItem,
            ...variant.props
          }, {
            components: {
              icon: MockIcon,
              badge: MockBadge,
              ripple: MockRipple
            }
          })

          const render = design.render()
          return () => h(render)
        }
      })

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)
      expect(typeof html).toBe('string')
      expect(html).toContain(variant.expectedFragment)
    }
  })
})
