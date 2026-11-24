// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, type ConstrStyles, ServerStorage } from '@dxtmisha/functional'

import { DividerDesign } from '../DividerDesign'
import type { DividerPropsBasic } from '../props'
import type { DividerClasses, DividerComponents, DividerExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const TestDividerSsr = defineComponent({
  name: 'TestDividerSsr',
  props: {
    size: {
      type: String,
      default: 'sm'
    },
    margin: {
      type: String,
      default: 'none'
    }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-divider': true,
        [`d1-divider--size--${props.size}`]: Boolean(props.size),
        [`d1-divider--margin--${props.margin}`]: Boolean(props.margin)
      }
    }))
    const styles = computed<ConstrStyles>(() => ({
      '--d1-divider-borderWidth': '1px'
    }))
    const design = new DividerDesign<DividerComponents, DividerExpose, DividerClasses, DividerPropsBasic>(
      'd1.divider',
      props,
      { classes, styles }
    )

    return design.render()
  }
})

describe('Divider (SSR)', () => {
  it('should render valid deterministic SSR HTML with role="separator" and no browser API leaks', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(TestDividerSsr, {
          size: 'md',
          margin: 'lg',
          class: 'ssr-divider',
          style: { opacity: '0.8' }
        })
      }
    }))

    const html = await renderToString(app)
    expect(html).toContain('<div ')
    expect(html).toContain('role="separator"')
    expect(html).toContain('d1-divider')
    expect(html).toContain('d1-divider--size--md')
    expect(html).toContain('d1-divider--margin--lg')
    expect(html).toContain('ssr-divider')
    expect(html).toContain('--d1-divider-borderWidth:1px')
    expect(html).toContain('opacity:0.8')
  })

  it('should support ARIA attribute overrides and isolate state across SSR requests', async () => {
    const firstApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestDividerSsr, {
          'role': 'presentation',
          'aria-hidden': 'true'
        })
      }
    }))

    const secondApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestDividerSsr, {
          'aria-orientation': 'vertical'
        })
      }
    }))

    const firstHtml = await renderToString(firstApp)
    const secondHtml = await renderToString(secondApp)

    expect(firstHtml).toContain('role="presentation"')
    expect(firstHtml).toContain('aria-hidden="true"')
    expect(firstHtml).not.toContain('role="separator"')

    expect(secondHtml).toContain('role="separator"')
    expect(secondHtml).toContain('aria-orientation="vertical"')
    expect(secondHtml).not.toContain('aria-hidden="true"')
  })
})
