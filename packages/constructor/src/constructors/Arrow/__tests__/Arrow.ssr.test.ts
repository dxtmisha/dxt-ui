// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ArrowDesign } from '../ArrowDesign'

describe('ArrowDesign in Node SSR', () => {
  it('renders ArrowDesign without error in SSR (node environment)', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
    expect(typeof requestAnimationFrame).toBe('undefined')

    const TestComp = defineComponent({
      setup() {
        const design = new ArrowDesign('d1.arrow', { position: 'auto' })
        const render = design.render()
        return () => h(render)
      }
    })

    const app = createSSRApp(TestComp)
    const html = await renderToString(app)
    expect(html).toBe('<!---->')
  })

  it('handles multiple SSR renders without leaking or crashing', async () => {
    for (const position of ['auto', 'top', 'bottom', 'left', 'right'] as const) {
      const TestComp = defineComponent({
        setup() {
          const design = new ArrowDesign('d1.arrow', { position })
          const render = design.render()
          return () => h(render)
        }
      })
      const app = createSSRApp(TestComp)
      const html = await renderToString(app)
      expect(html).toBe('<!---->')
    }
  })
})
