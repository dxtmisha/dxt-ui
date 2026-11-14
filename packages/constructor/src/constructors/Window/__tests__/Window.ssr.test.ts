// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'
import { WindowDesign } from '../WindowDesign'
import type { WindowPropsBasic } from '../props'

describe('WindowDesign in Node SSR', () => {
  it('renders WindowDesign without error in SSR (node environment)', async () => {
    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
    expect(typeof requestAnimationFrame).toBe('undefined')

    const props: WindowPropsBasic = { open: false }
    const TestComp = defineComponent({
      setup() {
        const design = new WindowDesign('d1.window', props)
        const render = design.render()
        return () => h(render)
      }
    })

    const app = createSSRApp(TestComp)
    const html = await renderToString(app)
    expect(typeof html).toBe('string')
  })

  it('handles multiple SSR renders with various props without leaking or crashing', async () => {
    for (const open of [false, true]) {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const props: WindowPropsBasic = {
        open,
        embedded: true,
        staticMode: false,
        inert: false
      }
      const TestComp = defineComponent({
        setup() {
          const design = new WindowDesign('d1.window', props)
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
