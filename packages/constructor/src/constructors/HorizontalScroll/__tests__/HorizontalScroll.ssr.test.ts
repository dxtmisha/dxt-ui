/** @vitest-environment node */
import { describe, it, expect } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { HorizontalScrollDesign } from '../HorizontalScrollDesign'
import type { HorizontalScrollControlItem } from '../basicTypes'
import type { HorizontalScrollProps } from '../props'
import type { HorizontalScrollClasses, HorizontalScrollComponents, HorizontalScrollExpose } from '../types'

describe('HorizontalScroll (SSR)', () => {
  it('should render valid deterministic HTML in SSR mode without DOM globals', async () => {
    const SsrComponent = defineComponent({
      props: {
        tag: { type: String, default: 'nav' }
      },
      setup(props, { expose }) {
        const design = new HorizontalScrollDesign<
          HorizontalScrollComponents,
          HorizontalScrollExpose,
          HorizontalScrollClasses,
          HorizontalScrollProps
        >(
          'd1.horizontalScroll',
          props as Readonly<HorizontalScrollProps>,
          {
            classes: computed(() => ({ main: { 'd1-horizontalScroll': true } }))
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createSSRApp({
      render: () => h(
        SsrComponent,
        { tag: 'nav' },
        {
          default: (slotProps: HorizontalScrollControlItem) => [
            h('span', { class: slotProps.classItem }, 'One'),
            h('span', { class: [slotProps.classItem, slotProps.classItemSelected] }, 'Two')
          ]
        }
      )
    })

    const html = await renderToString(app)

    expect(html).toContain('<nav class="d1-horizontalScroll"')
    expect(html).toContain('class="d1-horizontalScroll__item"')
    expect(html).toContain('class="d1-horizontalScroll__item d1-horizontalScroll__item--selected"')
    expect(html).toContain('</nav>')
  })
})
