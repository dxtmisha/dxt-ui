// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, mergeProps, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { defaultsSegmentControlItem, type SegmentControlItemPropsBasic } from '../props'
import { SegmentControlItem } from '../SegmentControlItem'
import { SegmentControlItemDesign } from '../SegmentControlItemDesign'

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

describe('SegmentControlItem (SSR)', () => {
  const naming = new DesignName('d1.segmentControlItem')

  it('should evaluate SegmentControlItem orchestrator bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<SegmentControlItemPropsBasic>({
      ...defaultsSegmentControlItem,
      label: 'SSR Segment',
      labelId: 'ssr-segment-label',
      index: 'segment-ssr',
      selected: true
    })

    scope.run(() => {
      const segmentControlItem = new SegmentControlItem(props, element, naming)

      expect(segmentControlItem.tag).toBe('button')
      expect(segmentControlItem.binds.type).toBe('button')
      expect(segmentControlItem.binds.role).toBe('tab')
      expect(segmentControlItem.binds.tabindex).toBe(-1)
      expect(segmentControlItem.binds['data-value']).toBe('segment-ssr')
      expect(segmentControlItem.binds['aria-labelledby']).toBe('ssr-segment-label')
      expect(segmentControlItem.binds['aria-selected']).toBe('true')
    })

    scope.stop()
  })

  it('should render full SegmentControlItemDesign component with subcomponents to deterministic HTML string in SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const renderOnce = async () => {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const props: SegmentControlItemPropsBasic = {
            ...defaultsSegmentControlItem,
            label: 'Monthly',
            labelId: 'monthly-label',
            icon: 'calendar_month',
            badge: 4,
            index: 'monthly',
            selected: true
          }

          const design = new SegmentControlItemDesign('d1.segmentControlItem', props, {
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
    expect(htmlFirst).toContain('data-value="monthly"')
    expect(htmlFirst).toContain('aria-labelledby="monthly-label"')
    expect(htmlFirst).toContain('aria-selected="true"')
    expect(htmlFirst).toContain('calendar_month')
    expect(htmlFirst).toContain('Monthly')
    expect(htmlFirst).toContain('data-overlap="static"')
    expect(htmlFirst).toContain('4')
    expect(htmlFirst).toContain('mock-ripple')
  })

  it('should render cleanly in SSR without ripple component (D1SegmentControlItem parity)', async () => {
    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const TestComponent = defineComponent({
      setup() {
        const design = new SegmentControlItemDesign('d1.segmentControlItem', {
          ...defaultsSegmentControlItem,
          label: 'Annual',
          icon: 'event',
          badge: 2
        }, {
          components: {
            icon: MockIcon,
            badge: MockBadge
          }
        })

        const render = design.render()
        return () => h(render)
      }
    })

    const html = await renderToString(createSSRApp(TestComponent))
    expect(html).toContain('role="tab"')
    expect(html).toContain('Annual')
    expect(html).toContain('event')
    expect(html).not.toContain('mock-ripple')
  })

  it('should render all SegmentControlItem variants cleanly across isolated SSR requests', async () => {
    const variants: Array<{ props: SegmentControlItemPropsBasic, expectedFragment: string }> = [
      { props: { label: 'Link Segment', href: 'https://example.com' }, expectedFragment: '<a ' },
      { props: { label: 'Router Segment', to: '/overview' }, expectedFragment: '<a ' },
      { props: { label: 'Div Segment', tag: 'div' }, expectedFragment: '<div ' },
      { props: { label: 0, badge: 0, index: 0 }, expectedFragment: 'data-value="0"' },
      { props: { label: 'Dot Badge', badgeDot: true }, expectedFragment: 'mock-badge' },
      { props: { label: 'Disabled', disabled: true }, expectedFragment: 'aria-disabled="true"' },
      { props: { label: 'Readonly', readonly: true }, expectedFragment: 'Readonly' },
      { props: { label: 'Skeleton', isSkeleton: true }, expectedFragment: 'd1-skeleton__textVariant' },
      { props: { label: 'Сегмент · Phân đoạn tiếng Việt · セグメント 🚀' }, expectedFragment: 'Phân đoạn tiếng Việt' }
    ]

    for (const variant of variants) {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const design = new SegmentControlItemDesign('d1.segmentControlItem', {
            ...defaultsSegmentControlItem,
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
