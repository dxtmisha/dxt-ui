// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { Badge } from '../Badge'
import { BadgeDesign } from '../BadgeDesign'
import type { BadgeProps } from '../props'

describe('Badge (SSR)', () => {
  const naming = new DesignName('d1.badge')

  it('should initialize and evaluate bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<BadgeProps>({
      label: 5,
      ariaLabel: '5 items'
    })

    scope.run(() => {
      const badge = new Badge(props, element, naming)

      expect(badge.autoHide).toBe(false)
      expect(badge.aria).toEqual({ 'aria-hidden': 'true' })
      expect(badge.binds).toEqual({ 'aria-label': '5 items' })
      expect(badge.classes).toEqual({ 'd1-badge--hideAuto': false })
    })

    scope.stop()
  })

  it('should render full BadgeDesign component to HTML string across variants in SSR', async () => {
    const MockIcon = defineComponent({
      name: 'MockIcon',
      props: { icon: [String, Object] },
      setup(props) {
        return () => h('span', { 'class': 'ssr-icon', 'data-icon': String(props.icon ?? '') })
      }
    })

    const variants: BadgeProps[] = [
      {},
      { label: 0, labelMax: 99 },
      { label: 120, labelMax: 99, ariaLabel: '99 plus notifications' },
      { icon: 'mail' },
      { dot: true }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new BadgeDesign(
            'd1.badge',
            props,
            {
              components: {
                icon: MockIcon
              }
            }
          )
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)

      expect(html).toContain('<span')
      expect(html).toContain('</span>')

      if (props.dot) {
        expect(html).not.toContain('d1-badge__label')
        expect(html).not.toContain('ssr-icon')
        expect(html).not.toContain('d1-badge--hideAuto')
      } else if (props.label === undefined && !props.icon) {
        expect(html).toContain('d1-badge--hideAuto')
      } else {
        expect(html).not.toContain('d1-badge--hideAuto')
      }

      if (props.ariaLabel) {
        expect(html).toContain(`aria-label="${props.ariaLabel}"`)
        expect(html).toContain('aria-hidden="true"')
      }

      if (props.icon && !props.dot) {
        expect(html).toContain(`data-icon="${props.icon}"`)
      }
    }
  })
})
