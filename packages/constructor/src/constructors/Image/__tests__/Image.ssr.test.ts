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
  describe('Standard functional requirements (Happy path)', () => {
    it.each([
      ['$home', 'home'],
      ['material-home', 'home'],
      ['f-vn', 'ui-sys-flags--VN']
    ])('should render %s without accessing browser image APIs', async (value, expected) => {
      expect(await renderImage({ value })).toContain(expected)
      expect(typeof document).toBe('undefined')
      expect(typeof Image).toBe('undefined')
    })

    it('should strip the explicit source marker in native server HTML', async () => {
      const html = await renderImage({ value: 'image:photo.png', tagImg: true, alt: 'Photo' })
      expect(html).toContain('src="photo.png"')
      expect(html).toContain('alt="Photo"')
      expect(html).not.toContain('src="image:')
    })

    it('should preserve the native lazy URL for the browser in img mode', async () => {
      const html = await renderImage({ value: '/photo.png', tagImg: true, lazy: true })
      expect(html).toContain('src="/photo.png"')
      expect(html).toContain('loading="lazy"')
    })

    it('should render picture sources and color values in SSR without browser globals', async () => {
      const pictureHtml = await renderImage({
        value: '/photo.png',
        tagImg: true,
        picture: [{ srcset: '/mobile.webp', media: '(max-width: 600px)', type: 'image/webp' }]
      })
      expect(pictureHtml).toContain('<picture')
      expect(pictureHtml).toContain('srcset="/mobile.webp"')

      const colorHtml = await renderImage({ value: '#ff0000' })
      expect(colorHtml).toContain('background-color:#ff0000')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it.each([undefined, null, ''])('should render empty server markup for %j without throwing', async (value) => {
      const html = await renderImage({ value })
      expect(html).toContain('<span')
      expect(html).toContain('aria-hidden="true"')
    })
  })

  describe('Invalid arguments, structural mutations, and non-standard types', () => {
    it('should render Unicode alt text and icon names safely in SSR', async () => {
      const html = await renderImage({ value: '$дом_圖標', alt: 'Ảnh đại diện 🇻🇳' })
      expect(html).toContain('дом_圖標')
      expect(html).toContain('aria-label="Ảnh đại diện 🇻🇳"')
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('should not expose a deferred background source in server HTML when lazy is enabled', async () => {
      const html = await renderImage({ value: '/private-photo.png', lazy: true })
      expect(html).not.toContain('/private-photo.png')
      expect(html).not.toContain('background-image')
    })
  })
})
