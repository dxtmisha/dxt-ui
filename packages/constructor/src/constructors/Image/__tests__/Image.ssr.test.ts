// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'
import { ImageDesign } from '../ImageDesign'
import type { ImageProps } from '../props'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})
afterEach(() => ServerStorage.reset())

/**
 * Renders the full Image component in an environment without browser globals.
 *
 * Рендерит полный компонент Image в окружении без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @returns server HTML / серверный HTML
 */
async function renderImage(properties: ImageProps): Promise<string> {
  const props = reactive({ lazy: false, preloadOffset: '1024px', ...properties })
  return renderToString(createSSRApp({
    setup() {
      const design = new ImageDesign('test.image', props)
      return design.render()
    }
  }))
}

describe('Image (SSR)', () => {
  it.each([
    ['$home', 'home'], ['material-home', 'home'], ['f-vn', 'ui-sys-flags--VN']
  ])('renders %s without accessing browser image APIs', async (value, expected) => {
    expect(await renderImage({ value })).toContain(expected)
    expect(typeof document).toBe('undefined')
    expect(typeof Image).toBe('undefined')
  })

  it('strips the explicit source marker in native server HTML', async () => {
    const html = await renderImage({ value: 'image:photo.png', tagImg: true, alt: 'Photo' })
    expect(html).toContain('src="photo.png"')
    expect(html).toContain('alt="Photo"')
    expect(html).not.toContain('src="image:')
  })

  it('does not expose a deferred background source in server HTML', async () => {
    const html = await renderImage({ value: '/private-photo.png', lazy: true })
    expect(html).not.toContain('/private-photo.png')
    expect(html).not.toContain('background-image')
  })

  it('preserves the native lazy URL for the browser', async () => {
    const html = await renderImage({ value: '/photo.png', tagImg: true, lazy: true })
    expect(html).toContain('src="/photo.png"')
    expect(html).toContain('loading="lazy"')
  })
})
