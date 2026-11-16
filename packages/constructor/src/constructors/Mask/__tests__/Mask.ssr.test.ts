// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { MaskDesign } from '../MaskDesign'
import { defaultsMask, type MaskProps } from '../props'
import type {
  MaskClasses,
  MaskComponents,
  MaskExpose
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
 * Renders MaskDesign in a server-side Node environment without browser globals.
 *
 * Рендерит MaskDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderMaskSsr(properties: MaskProps = {}): Promise<string> {
  const props = reactive<MaskProps>({
    ...(defaultsMask as MaskProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-mask': true,
          'd1-mask--visible': props.visible,
          'd1-mask--visiblePartly': props.visiblePartly,
          [`d1-mask--align--${props.align}`]: Boolean(props.align),
          [`d1-mask--dir--${props.dir}`]: Boolean(props.dir)
        }
      }))

      const design = new MaskDesign<
        MaskComponents,
        MaskExpose,
        MaskClasses,
        MaskProps
      >(
        'd1.mask',
        props,
        {
          classes: classesToken
        }
      )

      const render = design.render()
      return () => h(render)
    }
  })

  const app = createSSRApp(Component)
  return renderToString(app)
}

describe('Mask (SSR)', () => {
  it('should render masked input markup in Node without browser globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderMaskSsr({
      mask: '+1 ***-***',
      value: '234',
      name: 'phone'
    })

    expect(html).toContain('<span')
    expect(html).toContain('d1-mask--value')
    expect(html).toContain('d1-mask--visible')
    expect(html).toContain('type="hidden"')
    expect(html).toContain('name="phone"')
    expect(html).toContain('value="+1 234-"')
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('d1-mask__character__item--placeholder')
  })

  it('should render falsy numeric zero (0) cleanly during SSR', async () => {
    const html = await renderMaskSsr({
      type: 'number',
      value: 0,
      name: 'amount'
    })

    expect(html).toContain('d1-mask--value')
    expect(html).toContain('value="0"')
  })

  it('should render currency and date masks on server without errors', async () => {
    const currencyHtml = await renderMaskSsr({
      type: 'currency',
      currency: 'USD',
      language: 'en-US',
      value: '42.50'
    })
    expect(currencyHtml).toContain('d1-mask--end')
    expect(currencyHtml).toContain('42.50')

    const dateHtml = await renderMaskSsr({
      type: 'date',
      language: 'en-US',
      value: '2026-09-23'
    })
    expect(dateHtml).toContain('d1-mask--value')
  })

  it('should produce deterministic output across isolated SSR requests', async () => {
    const firstHtml = await renderMaskSsr({
      mask: '****',
      value: '12'
    })

    ServerStorage.reset()
    const secondRequest: Record<string, unknown> = {}
    ServerStorage.init(() => secondRequest)

    const secondHtml = await renderMaskSsr({
      mask: '****',
      value: '12'
    })

    expect(firstHtml).toBe(secondHtml)
  })
})
