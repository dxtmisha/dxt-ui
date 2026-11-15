// @vitest-environment node
import { afterEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString, type SSRContext } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { WindowDesign } from '../WindowDesign'
import { defaultsWindow, type WindowPropsBasic } from '../props'
import type { WindowControlItem } from '../basicTypes'

/**
 * Renders the full WindowDesign component (design layer, orchestrator, and helpers) to an HTML string on the server.
 *
 * Рендерит полный компонент WindowDesign (слой дизайна, оркестратор и помощники) в HTML-строку на сервере.
 * @param props component properties / свойства компонента
 * @returns rendered HTML and SSR context / отрендеренный HTML и SSR-контекст
 */
async function renderWindow(props: WindowPropsBasic): Promise<{ html: string, context: SSRContext }> {
  const storage: Record<string, unknown> = {}

  ServerStorage.reset()
  ServerStorage.init(() => storage)

  const context: SSRContext = {}
  const WindowComponent = defineComponent({
    setup() {
      const design = new WindowDesign('d1.window', { ...defaultsWindow, ...props } as WindowPropsBasic)

      return design.render()
    }
  })
  const Root = defineComponent({
    setup() {
      return () => h(WindowComponent, null, {
        control: (control: WindowControlItem) => h('button', { ...control.binds, type: 'button' }, 'Open'),
        default: () => h('p', 'Content')
      })
    }
  })

  const html = await renderToString(createSSRApp(Root), context)

  return { html, context }
}

describe('Window (SSR integration)', () => {
  afterEach(() => {
    ServerStorage.reset()
  })

  it('should run without browser globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
    expect(typeof requestAnimationFrame).toBe('undefined')
  })

  it('should render only the control with closed ARIA state on the server', async () => {
    const { html, context } = await renderWindow({ open: false })

    expect(html).toContain('<button')
    expect(html).toContain('aria-haspopup="dialog"')
    expect(html).toContain('aria-expanded="false"')
    expect(html).not.toContain('aria-controls')
    expect(html).not.toContain('data-window=')
    expect(context.teleports).toBeUndefined()
  })

  it('should not open the window during server rendering even when open is requested', async () => {
    for (const embedded of [false, true]) {
      const { html } = await renderWindow({ open: true, embedded, inert: false })

      expect(html).toContain('aria-expanded="false"')
      expect(html).not.toContain('data-window=')
      expect(html).not.toContain('Content')
    }
  })

  it('should render static mode content through the teleport buffer without modal ARIA', async () => {
    const { html, context } = await renderWindow({ staticMode: true })
    const teleport = context.teleports?.body ?? ''

    expect(html).toContain('teleport')
    expect(teleport).toContain('data-window-teleport')
    expect(teleport).toContain('data-window=')
    expect(teleport).toContain('d1-window__body')
    expect(teleport).toContain('Content')
    expect(teleport).not.toContain('aria-modal')
    expect(teleport).not.toContain('role="dialog"')
  })

  it('should produce deterministic markup across isolated server requests', async () => {
    const first = await renderWindow({ staticMode: true })
    const second = await renderWindow({ staticMode: true })

    expect(second.html).toBe(first.html)
    expect(second.context.teleports?.body).toBe(first.context.teleports?.body)
  })
})
