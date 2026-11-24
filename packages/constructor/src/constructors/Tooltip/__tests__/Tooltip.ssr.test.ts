// @vitest-environment node
import { afterEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString, type SSRContext } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { TooltipDesign } from '../TooltipDesign'
import { defaultsTooltip, type TooltipProps } from '../props'
import type { TooltipControl } from '../basicTypes'

/**
 * Renders the full TooltipDesign component on the server to an HTML string.
 *
 * Рендерит полный компонент TooltipDesign на сервере в HTML-строку.
 * @param props component properties / свойства компонента
 * @returns rendered HTML and SSR context / отрендеренный HTML и SSR-контекст
 */
async function renderTooltip(props: TooltipProps): Promise<{ html: string, context: SSRContext }> {
  const storage: Record<string, unknown> = {}

  ServerStorage.reset()
  ServerStorage.init(() => storage)

  const context: SSRContext = {}
  const TooltipComponent = defineComponent({
    setup() {
      const design = new TooltipDesign('d1.tooltip', {
        ...defaultsTooltip,
        ...props
      } as TooltipProps)

      return design.render()
    }
  })
  const Root = defineComponent({
    setup() {
      return () => h(TooltipComponent, null, {
        control: (control: TooltipControl) => h('button', { ...control.binds, type: 'button' }, 'Info')
      })
    }
  })

  const html = await renderToString(createSSRApp(Root), context)

  return { html, context }
}

describe('Tooltip (SSR integration)', () => {
  afterEach(() => {
    ServerStorage.reset()
  })

  it('should execute without browser globals in Node environment', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
    expect(typeof requestAnimationFrame).toBe('undefined')
  })

  it('should render control with closed ARIA state and omit tooltip body by default', async () => {
    const { html, context } = await renderTooltip({
      label: 'SSR tooltip',
      interactive: true
    })

    expect(html).toContain('<button')
    expect(html).toContain('aria-expanded="false"')
    expect(html).toContain('aria-controls="tooltip--')
    expect(html).not.toContain('SSR tooltip')
    expect(context.teleports).toBeUndefined()
  })

  it('should render non-interactive control with aria-describedby', async () => {
    const { html } = await renderTooltip({
      label: 'Hint',
      interactive: false
    })

    expect(html).toContain('aria-describedby="tooltip--')
    expect(html).not.toContain('aria-expanded')
  })

  it('should render tooltip inline when inDom and embedded are true', async () => {
    const { html, context } = await renderTooltip({
      label: 'Inline SSR',
      description: 'Details',
      inDom: true,
      embedded: true
    })

    expect(html).toContain('Inline SSR')
    expect(html).toContain('Details')
    expect(html).toContain('role="region"')
    expect(context.teleports).toBeUndefined()
  })

  it('should render tooltip into SSR teleport buffer when inDom is true and embedded is false', async () => {
    const { html, context } = await renderTooltip({
      label: 'Teleported SSR',
      inDom: true,
      embedded: false,
      interactive: false
    })

    expect(html).toContain('teleport')
    expect(context.teleports?.body).toContain('Teleported SSR')
    expect(context.teleports?.body).toContain('role="tooltip"')
  })

  it('should produce deterministic markup across isolated server requests', async () => {
    const first = await renderTooltip({
      label: 'Deterministic',
      inDom: true,
      embedded: true
    })
    const second = await renderTooltip({
      label: 'Deterministic',
      inDom: true,
      embedded: true
    })

    expect(second.html).toBe(first.html)
  })
})
