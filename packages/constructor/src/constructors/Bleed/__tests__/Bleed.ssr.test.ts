// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { BleedDesign } from '../BleedDesign'
import type { BleedPropsBasic } from '../props'
import type { BleedClasses, BleedComponents, BleedExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const TestBleedSsr = defineComponent({
  name: 'TestBleedSsr',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: { 'd1-bleed': true }
    }))
    const design = new BleedDesign<BleedComponents, BleedExpose, BleedClasses, BleedPropsBasic>(
      'd1.bleed',
      props,
      { classes }
    )

    return design.render()
  }
})

describe('Bleed (SSR)', () => {
  it('should render valid SSR HTML without browser API leaks', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestBleedSsr,
          { tag: 'section', class: 'ssr-bleed' },
          { default: () => h('p', 'Full Bleed SSR') }
        )
      }
    }))

    const html = await renderToString(app)
    expect(html).toContain('<section ')
    expect(html).toContain('d1-bleed')
    expect(html).toContain('ssr-bleed')
    expect(html).toContain('<p>Full Bleed SSR</p>')
  })
})
