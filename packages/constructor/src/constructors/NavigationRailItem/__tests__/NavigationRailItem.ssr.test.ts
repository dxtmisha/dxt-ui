// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { NavigationRailItem } from '../NavigationRailItem'
import { NavigationRailItemDesign } from '../NavigationRailItemDesign'
import type { NavigationRailItemProps } from '../props'

describe('NavigationRailItem (SSR)', () => {
  const naming = new DesignName('d1.navigationRailItem')

  it('should initialize and evaluate bindings in a server-side Node environment without DOM globals', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<NavigationRailItemProps>({
      label: 'Dashboard',
      value: 'dash-1',
      selected: true,
      role: 'option',
      tabindex: '-1'
    })

    scope.run(() => {
      const item = new NavigationRailItem(props, element, naming)

      expect(item.tag).toBe('div')
      expect(item.binds['data-value']).toBe('dash-1')
      expect(item.binds.role).toBe('option')
      expect(item.binds.tabindex).toBe('-1')
      expect(item.binds['aria-selected']).toBe('true')
      expect(item.classes[naming.getStatusClass('selected')]).toBe(true)
    })

    scope.stop()
  })

  it('should render full NavigationRailItemDesign component to HTML string in SSR without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const props: NavigationRailItemProps = {
      label: 'SSR Item',
      value: 'ssr-val',
      role: 'option',
      tabindex: '0'
    }

    const TestComponent = defineComponent({
      setup() {
        const design = new NavigationRailItemDesign('d1.navigationRailItem', props)
        const render = design.render()
        return () => h(render)
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp(TestComponent)
    const html = await renderToString(app)

    expect(html).toContain('<div')
    expect(html).toContain('SSR Item')
    expect(html).toContain('data-value="ssr-val"')
    expect(html).toContain('role="option"')
    expect(html).toContain('tabindex="0"')
    expect(html).toContain('aria-selected="false"')
  })

  it('should render link, badge, zero, disabled, and loading variants cleanly across multiple SSR renders', async () => {
    const MockIcon = defineComponent({
      name: 'MockIcon',
      props: { icon: [String, Object] },
      setup(componentProps, { attrs }) {
        return () => h('span', { ...attrs, class: ['mock-icon', attrs.class] }, String(componentProps.icon ?? ''))
      }
    })

    const MockBadge = defineComponent({
      name: 'MockBadge',
      props: { label: [String, Number] },
      setup(componentProps, { attrs }) {
        return () => h('span', { ...attrs, class: ['mock-badge', attrs.class] }, String(componentProps.label ?? ''))
      }
    })

    const variants: NavigationRailItemProps[] = [
      { label: 'Link', href: 'https://example.com' },
      { label: 'Router', to: '/profile' },
      { label: 0, value: 0 },
      { label: 'WithIconBadge', icon: 'mail', badge: 2 },
      { label: 'LineBadge', badge: 5 },
      { label: 'Disabled', disabled: true },
      { label: 'Loading', loading: true }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new NavigationRailItemDesign('d1.navigationRailItem', props, {
            components: {
              icon: MockIcon,
              badge: MockBadge
            }
          })
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)
      expect(typeof html).toBe('string')
      expect(html).toContain(String(props.label))
    }
  })
})
