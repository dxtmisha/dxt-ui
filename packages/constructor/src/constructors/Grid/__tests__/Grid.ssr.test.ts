// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { GridDesign } from '../GridDesign'
import type { GridProps } from '../props'
import type { GridClasses, GridComponents, GridExpose } from '../types'

const TestGridSsr = defineComponent({
  name: 'TestGridSsr',
  props: {
    align: {
      type: String as () => GridProps['align'],
      default: undefined
    },
    columns: {
      type: String,
      default: '12'
    }
  },
  setup(props) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-grid': true,
        [`d1-grid--align--${props.align}`]: Boolean(props.align)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-grid-columns': props.columns
    }))

    const design = new GridDesign<
      GridComponents,
      GridExpose,
      GridClasses,
      GridProps
    >(
      'd1.grid',
      props,
      {
        classes: classesToken,
        styles: stylesToken
      }
    )

    return design.render()
  }
})

describe('Grid (SSR)', () => {
  it('should render valid HTML with classes, styles, attrs, and slot content in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestGridSsr,
          {
            'id': 'ssr-grid',
            'align': 'center',
            'columns': '8',
            'class': 'extra-ssr',
            'role': 'region',
            'aria-label': 'SSR Grid'
          },
          {
            default: () => [
              h('div', 'SSR Column 1'),
              h('div', 'SSR Column 2')
            ]
          }
        )
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('id="ssr-grid"')
    expect(html).toContain('d1-grid')
    expect(html).toContain('d1-grid--align--center')
    expect(html).toContain('extra-ssr')
    expect(html).toContain('role="region"')
    expect(html).toContain('aria-label="SSR Grid"')
    expect(html).toContain('--d1-grid-columns:8')
    expect(html).toContain('<div>SSR Column 1</div>')
    expect(html).toContain('<div>SSR Column 2</div>')
  })

  it('should render empty grid cleanly in Node SSR when no slot is provided', async () => {
    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(TestGridSsr)
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('class="d1-grid"')
    expect(html).toContain('--d1-grid-columns:12')
  })

  it('should isolate rendered output across concurrent SSR requests', async () => {
    const createAppForGrid = (align: GridProps['align'], label: string) => createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestGridSsr,
          { align },
          {
            default: () => h('span', label)
          }
        )
      }
    }))

    const [htmlAlpha, htmlBeta] = await Promise.all([
      renderToString(createAppForGrid('start', 'grid-alpha')),
      renderToString(createAppForGrid('end', 'grid-beta'))
    ])

    expect(htmlAlpha).toContain('d1-grid--align--start')
    expect(htmlAlpha).toContain('<span>grid-alpha</span>')
    expect(htmlAlpha).not.toContain('d1-grid--align--end')
    expect(htmlAlpha).not.toContain('grid-beta')

    expect(htmlBeta).toContain('d1-grid--align--end')
    expect(htmlBeta).toContain('<span>grid-beta</span>')
    expect(htmlBeta).not.toContain('d1-grid--align--start')
    expect(htmlBeta).not.toContain('grid-alpha')
  })
})
