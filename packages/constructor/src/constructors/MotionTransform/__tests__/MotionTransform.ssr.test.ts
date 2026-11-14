// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, reactive, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { MotionTransform } from '../MotionTransform'
import { MotionTransformDesign } from '../MotionTransformDesign'
import { defaultsMotionTransform, type MotionTransformProps, type MotionTransformPropsBasic } from '../props'
import type {
  MotionTransformClasses,
  MotionTransformComponents,
  MotionTransformExpose,
  MotionTransformSlots
} from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders the MotionTransformDesign component in a server-side Node environment without browser globals.
 *
 * Рендерит компонент MotionTransformDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderMotionTransformSsr(
  properties: MotionTransformPropsBasic = {},
  slots?: MotionTransformSlots
): Promise<string> {
  const props = reactive<MotionTransformPropsBasic>({
    ...(defaultsMotionTransform as MotionTransformProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const design = new MotionTransformDesign<
        MotionTransformComponents,
        MotionTransformExpose,
        MotionTransformClasses,
        MotionTransformPropsBasic
      >('d1.motionTransform', props)

      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(Component, null, slots ? (slots as Record<string, unknown>) : undefined)
    }
  })

  return renderToString(createSSRApp(Root))
}

describe('MotionTransform (SSR)', () => {
  describe('MotionTransformDesign in Node SSR', () => {
    it('renders MotionTransformDesign without error in SSR (node environment)', async () => {
      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')

      const html = await renderMotionTransformSsr({
        open: false,
        inDom: false
      })

      expect(typeof html).toBe('string')
      expect(html).toContain('d1-motionTransform__context')
      expect(html).toContain('d1-motionTransform__head')
      // Body should not be present when inDom is false and open is false
      expect(html).not.toContain('d1-motionTransform__body')
    })

    it('renders body element in SSR when inDom is true', async () => {
      const html = await renderMotionTransformSsr({
        open: false,
        inDom: true
      })

      expect(html).toContain('d1-motionTransform__context')
      expect(html).toContain('d1-motionTransform__head')
      expect(html).toContain('d1-motionTransform__body')
      expect(html).toContain('role="region"')
    })

    it('renders custom body tag in SSR when tagBody is configured', async () => {
      const html = await renderMotionTransformSsr({
        open: false,
        inDom: true,
        tagBody: 'article'
      })

      expect(html).toContain('<article')
      expect(html).toContain('d1-motionTransform__body')
    })

    it('renders head without aria-expanded and aria-controls in SSR when clickOpen is false', async () => {
      const html = await renderMotionTransformSsr({
        clickOpen: false
      })

      expect(html).toContain('d1-motionTransform__head')
      expect(html).not.toContain('aria-expanded')
      expect(html).not.toContain('aria-controls')
    })

    it('renders head and body slots in SSR', async () => {
      const html = await renderMotionTransformSsr(
        {
          open: false,
          inDom: true
        },
        {
          head: () => h('span', { class: 'custom-ssr-head' }, 'Header Content'),
          body: () => h('p', { class: 'custom-ssr-body' }, 'Body Content')
        }
      )

      expect(html).toContain('custom-ssr-head')
      expect(html).toContain('Header Content')
      expect(html).toContain('custom-ssr-body')
      expect(html).toContain('Body Content')
    })

    it('handles multiple sequential SSR renders without leaking or crashing', async () => {
      for (const inDom of [false, true]) {
        for (const clickOpen of [false, true]) {
          const html = await renderMotionTransformSsr({
            inDom,
            clickOpen
          })

          expect(typeof html).toBe('string')
          expect(html).toContain('d1-motionTransform__context')
          if (inDom) {
            expect(html).toContain('d1-motionTransform__body')
          } else {
            expect(html).not.toContain('d1-motionTransform__body')
          }
        }
      }
    })
  })

  describe('MotionTransform Logic Orchestrator in Node SSR', () => {
    it('initializes MotionTransform orchestrator in SSR without DOM globals', async () => {
      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')

      let transform!: MotionTransform
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.motionTransform')

      const Component = defineComponent({
        setup() {
          transform = new MotionTransform(
            {
              ...(defaultsMotionTransform as MotionTransformProps),
              open: false,
              inDom: false
            },
            element,
            naming
          )

          return () => null
        }
      })

      await renderToString(createSSRApp(Component))

      expect(transform.bindsHead).toBeDefined()
      expect(transform.bindsHead.key).toBe('head')
      expect(transform.bindsHead['aria-expanded']).toBe('false')

      expect(transform.bindsBody).toBeDefined()
      expect(transform.bindsBody.key).toBe('body')
      expect(transform.bindsBody.role).toBe('region')

      const slotData = transform.slotData
      expect(slotData).toBeDefined()
      expect(slotData.isOpen).toBe(false)
      expect(slotData.isShow).toBe(false)
    })
  })
})
