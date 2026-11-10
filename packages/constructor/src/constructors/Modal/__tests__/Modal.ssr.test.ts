// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { ModalDesign } from '../ModalDesign'
import type { ModalPropsBasic } from '../props'

describe('ModalDesign in Node SSR', () => {
  it('renders ModalDesign without error in SSR (node environment)', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const props: ModalPropsBasic = {
      open: false
    }

    const TestComp = defineComponent({
      setup() {
        const design = new ModalDesign('d1.modal', props)
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
      const props: ModalPropsBasic = {
        open
      }

      const TestComp = defineComponent({
        setup() {
          const design = new ModalDesign('d1.modal', props)
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
