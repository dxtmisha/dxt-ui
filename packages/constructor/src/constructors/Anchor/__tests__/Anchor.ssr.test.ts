// @vitest-environment node
import { afterEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { AnchorDesign } from '../AnchorDesign'
import { defaultsAnchor, type AnchorProps } from '../props'

/**
 * Renders AnchorDesign on the server to an HTML string.
 *
 * Рендерит AnchorDesign на сервере в HTML-строку.
 * @param props component properties / свойства компонента
 * @returns rendered HTML string / отрендеренная HTML-строка
 */
async function renderAnchor(props: AnchorProps): Promise<string> {
  const storage: Record<string, unknown> = {}

  ServerStorage.reset()
  ServerStorage.init(() => storage)

  const AnchorComponent = defineComponent({
    setup() {
      const design = new AnchorDesign('d1.anchor', {
        ...defaultsAnchor,
        ...props
      })

      return design.render()
    }
  })

  return renderToString(createSSRApp(AnchorComponent))
}

describe('Anchor (SSR integration)', () => {
  afterEach(() => {
    ServerStorage.reset()
  })

  it('should run in Node without browser globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
    expect(typeof location).toBe('undefined')
  })

  it('should render navigation anchor with href, name, tabindex, and aria-current', async () => {
    const html = await renderAnchor({
      name: 'ssr-section',
      label: 'SSR Section'
    })

    expect(html).toContain('<a')
    expect(html).toContain('href="#ssr-section"')
    expect(html).toContain('name="ssr-section"')
    expect(html).toContain('aria-current="page"')
    expect(html).toContain('SSR Section')
  })

  it('should render copy-mode anchor with role="button" and without href', async () => {
    const html = await renderAnchor({
      name: 'ssr-copy',
      label: 'Copy Link',
      isCopy: true
    })

    expect(html).toContain('role="button"')
    expect(html).toContain('Copy Link')
    expect(html).not.toContain('href="#ssr-copy"')
  })

  it('should render hidden anchor with aria-hidden="true"', async () => {
    const html = await renderAnchor({
      name: 'ssr-hidden',
      hide: true
    })

    expect(html).toContain('name="ssr-hidden"')
    expect(html).toContain('aria-hidden="true"')
  })

  it('should render empty comment when name is omitted', async () => {
    const html = await renderAnchor({
      label: 'No name'
    })

    expect(html).not.toContain('<a')
  })

  it('should produce deterministic HTML across isolated server requests', async () => {
    const first = await renderAnchor({ name: 'det', label: 'Deterministic' })
    const second = await renderAnchor({ name: 'det', label: 'Deterministic' })

    expect(second).toBe(first)
  })
})
