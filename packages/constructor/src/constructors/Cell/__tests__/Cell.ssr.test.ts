// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { CellDesign } from '../CellDesign'
import type { CellPropsBasic } from '../props'

describe('CellDesign in Node SSR', () => {
  it('renders CellDesign without error in SSR (node environment)', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const props: CellPropsBasic = {
      label: 'SSR Cell',
      caption: 'SSR Caption',
      description: 'SSR Description'
    }

    const TestComp = defineComponent({
      setup() {
        const design = new CellDesign('d1.cell', props)
        const render = design.render()
        return () => h(render)
      }
    })

    const app = createSSRApp(TestComp)
    const html = await renderToString(app)
    expect(typeof html).toBe('string')
    expect(html).toContain('SSR Cell')
  })

  it('handles multiple SSR renders with various props without leaking or crashing', async () => {
    for (const dynamic of [false, true]) {
      const props: CellPropsBasic = {
        dynamic,
        divider: true,
        label: 'Dynamic Cell'
      }

      const TestComp = defineComponent({
        setup() {
          const design = new CellDesign('d1.cell', props)
          const render = design.render()
          return () => h(render)
        }
      })

      const app = createSSRApp(TestComp)
      const html = await renderToString(app)
      expect(typeof html).toBe('string')
    }
  })
})
