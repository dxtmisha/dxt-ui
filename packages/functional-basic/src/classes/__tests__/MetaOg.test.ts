/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { MetaOg } from '../MetaOg'
import { MetaOpenGraphType } from '../../types/metaTypes'

describe('MetaOg', () => {
  let metaOg: MetaOg

  beforeEach(() => {
    // Очистка DOM перед каждым тестом
    document.head.innerHTML = ''

    metaOg = new MetaOg()
  })

  afterEach(() => {
    // Очистка после тестов
    document.head.innerHTML = ''
  })

  describe('constructor', () => {
    it('should create MetaOg instance', () => {
      expect(metaOg).toBeInstanceOf(MetaOg)
    })

    it('should use property attribute instead of name', () => {
      metaOg.setTitle('Test Title')

      const element = document.querySelector('meta[property="og:title"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('property')).toBe('og:title')
      expect(element?.getAttribute('name')).toBeNull()
    })

    it('should initialize with all Open Graph tags', () => {
      const listMeta = metaOg.getListMeta()

      expect(listMeta).toContain('og:title')
      expect(listMeta).toContain('og:type')
      expect(listMeta).toContain('og:url')
      expect(listMeta).toContain('og:image')
      expect(listMeta).toContain('og:description')
      expect(listMeta).toContain('og:locale')
      expect(listMeta).toContain('og:site_name')
    })

    it('should read existing OG tags from DOM on initialization', () => {
      // Создаем OG теги в DOM
      const titleMeta = document.createElement('meta')
      titleMeta.setAttribute('property', 'og:title')
      titleMeta.setAttribute('content', 'Existing Title')
      document.head.appendChild(titleMeta)

      const descMeta = document.createElement('meta')
      descMeta.setAttribute('property', 'og:description')
      descMeta.setAttribute('content', 'Existing Description')
      document.head.appendChild(descMeta)

      // Создаем новый экземпляр
      const newMetaOg = new MetaOg()

      // Должен прочитать существующие теги
      expect(newMetaOg.getTitle()).toBe('Existing Title')
      expect(newMetaOg.getDescription()).toBe('Existing Description')
    })
  })

  describe('getTitle', () => {
    it('should return empty string when title not set', () => {
      expect(metaOg.getTitle()).toBe('')
    })

    it('should return title after setting', () => {
      metaOg.setTitle('Open Graph Title')
      expect(metaOg.getTitle()).toBe('Open Graph Title')
    })
  })

  describe('getType', () => {
    it('should return empty string when type not set', () => {
      expect(metaOg.getType()).toBe('')
    })

    it('should return type after setting', () => {
      metaOg.setType(MetaOpenGraphType.article)
      expect(metaOg.getType()).toBe(MetaOpenGraphType.article)
    })

    it('should return correct type for different content types', () => {
      metaOg.setType(MetaOpenGraphType.website)
      expect(metaOg.getType()).toBe('website')

      metaOg.setType(MetaOpenGraphType.videoMovie)
      expect(metaOg.getType()).toBe('video.movie')

      metaOg.setType(MetaOpenGraphType.musicSong)
      expect(metaOg.getType()).toBe('music.song')
    })
  })

  describe('getUrl', () => {
    it('should return empty string when URL not set', () => {
      expect(metaOg.getUrl()).toBe('')
    })

    it('should return URL after setting', () => {
      metaOg.setUrl('https://example.com/page')
      expect(metaOg.getUrl()).toBe('https://example.com/page')
    })
  })

  describe('getImage', () => {
    it('should return empty string when image not set', () => {
      expect(metaOg.getImage()).toBe('')
    })

    it('should return image URL after setting', () => {
      metaOg.setImage('https://example.com/image.jpg')
      expect(metaOg.getImage()).toBe('https://example.com/image.jpg')
    })
  })

  describe('getDescription', () => {
    it('should return empty string when description not set', () => {
      expect(metaOg.getDescription()).toBe('')
    })

    it('should return description after setting', () => {
      metaOg.setDescription('Open Graph Description')
      expect(metaOg.getDescription()).toBe('Open Graph Description')
    })
  })

  describe('getLocale', () => {
    it('should return empty string when locale not set', () => {
      expect(metaOg.getLocale()).toBe('')
    })

    it('should return locale after setting', () => {
      metaOg.setLocale('en_US')
      expect(metaOg.getLocale()).toBe('en_US')
    })
  })

  describe('getSiteName', () => {
    it('should return empty string when site name not set', () => {
      expect(metaOg.getSiteName()).toBe('')
    })

    it('should return site name after setting', () => {
      metaOg.setSiteName('My Website')
      expect(metaOg.getSiteName()).toBe('My Website')
    })
  })

  describe('setTitle', () => {
    it('should set OG title', () => {
      metaOg.setTitle('Test OG Title')
      expect(metaOg.getTitle()).toBe('Test OG Title')
    })

    it('should create meta tag with property attribute in DOM', () => {
      metaOg.setTitle('DOM Title Test')

      const element = document.querySelector('meta[property="og:title"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('DOM Title Test')
    })

    it('should update existing meta tag', () => {
      metaOg.setTitle('First Title')
      metaOg.setTitle('Second Title')

      const elements = document.querySelectorAll('meta[property="og:title"]')
      expect(elements.length).toBe(1)
      expect(elements?.[0]?.getAttribute('content')).toBe('Second Title')
    })

    it('should return this for chaining', () => {
      const result = metaOg.setTitle('Chain Test')
      expect(result).toBe(metaOg)
    })

    it('should handle empty string', () => {
      metaOg.setTitle('')
      expect(metaOg.getTitle()).toBe('')
    })

    it('should handle special characters', () => {
      metaOg.setTitle('Title with "quotes" & <tags>')
      expect(metaOg.getTitle()).toBe('Title with "quotes" & <tags>')
    })
  })

  describe('setType', () => {
    it('should set OG type', () => {
      metaOg.setType(MetaOpenGraphType.article)
      expect(metaOg.getType()).toBe(MetaOpenGraphType.article)
    })

    it('should create meta tag in DOM', () => {
      metaOg.setType(MetaOpenGraphType.website)

      const element = document.querySelector('meta[property="og:type"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('website')
    })

    it('should handle all Open Graph types', () => {
      const types = [
        MetaOpenGraphType.website,
        MetaOpenGraphType.article,
        MetaOpenGraphType.video,
        MetaOpenGraphType.videoMovie,
        MetaOpenGraphType.videoEpisode,
        MetaOpenGraphType.videoTvShow,
        MetaOpenGraphType.musicSong,
        MetaOpenGraphType.musicAlbum,
        MetaOpenGraphType.musicPlaylist,
        MetaOpenGraphType.product,
        MetaOpenGraphType.book,
        MetaOpenGraphType.profile
      ]

      types.forEach((type) => {
        metaOg.setType(type)
        expect(metaOg.getType()).toBe(type)
      })
    })

    it('should return this for chaining', () => {
      const result = metaOg.setType(MetaOpenGraphType.article)
      expect(result).toBe(metaOg)
    })
  })

  describe('setUrl', () => {
    it('should set OG URL', () => {
      metaOg.setUrl('https://example.com/article')
      expect(metaOg.getUrl()).toBe('https://example.com/article')
    })

    it('should create meta tag in DOM', () => {
      metaOg.setUrl('https://example.com/page')

      const element = document.querySelector('meta[property="og:url"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('https://example.com/page')
    })

    it('should handle URLs with query parameters', () => {
      const url = 'https://example.com/page?param=value&other=test'
      metaOg.setUrl(url)
      expect(metaOg.getUrl()).toBe(url)
    })

    it('should return this for chaining', () => {
      const result = metaOg.setUrl('https://example.com')
      expect(result).toBe(metaOg)
    })
  })

  describe('setImage', () => {
    it('should set OG image URL', () => {
      metaOg.setImage('https://example.com/image.jpg')
      expect(metaOg.getImage()).toBe('https://example.com/image.jpg')
    })

    it('should create meta tag in DOM', () => {
      metaOg.setImage('https://example.com/og-image.png')

      const element = document.querySelector('meta[property="og:image"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('https://example.com/og-image.png')
    })

    it('should handle different image formats', () => {
      const formats = [
        'https://example.com/image.jpg',
        'https://example.com/image.png',
        'https://example.com/image.webp',
        'https://example.com/image.gif'
      ]

      formats.forEach((format) => {
        metaOg.setImage(format)
        expect(metaOg.getImage()).toBe(format)
      })
    })

    it('should return this for chaining', () => {
      const result = metaOg.setImage('https://example.com/img.jpg')
      expect(result).toBe(metaOg)
    })
  })

  describe('setDescription', () => {
    it('should set OG description', () => {
      metaOg.setDescription('Open Graph description text')
      expect(metaOg.getDescription()).toBe('Open Graph description text')
    })

    it('should create meta tag in DOM', () => {
      metaOg.setDescription('Test description')

      const element = document.querySelector('meta[property="og:description"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('Test description')
    })

    it('should handle long descriptions', () => {
      const longDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10)
      metaOg.setDescription(longDesc)
      expect(metaOg.getDescription()).toBe(longDesc)
    })

    it('should return this for chaining', () => {
      const result = metaOg.setDescription('Chain description')
      expect(result).toBe(metaOg)
    })
  })

  describe('setLocale', () => {
    it('should set OG locale', () => {
      metaOg.setLocale('ru_RU')
      expect(metaOg.getLocale()).toBe('ru_RU')
    })

    it('should create meta tag in DOM', () => {
      metaOg.setLocale('en_US')

      const element = document.querySelector('meta[property="og:locale"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('en_US')
    })

    it('should handle different locale formats', () => {
      const locales = ['en_US', 'ru_RU', 'fr_FR', 'de_DE', 'ja_JP', 'zh_CN']

      locales.forEach((locale) => {
        metaOg.setLocale(locale)
        expect(metaOg.getLocale()).toBe(locale)
      })
    })

    it('should return this for chaining', () => {
      const result = metaOg.setLocale('en_GB')
      expect(result).toBe(metaOg)
    })
  })

  describe('setSiteName', () => {
    it('should set OG site name', () => {
      metaOg.setSiteName('My Awesome Site')
      expect(metaOg.getSiteName()).toBe('My Awesome Site')
    })

    it('should create meta tag in DOM', () => {
      metaOg.setSiteName('Test Site')

      const element = document.querySelector('meta[property="og:site_name"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('Test Site')
    })

    it('should return this for chaining', () => {
      const result = metaOg.setSiteName('Chain Site')
      expect(result).toBe(metaOg)
    })

    it('should handle site names with special characters', () => {
      metaOg.setSiteName('Site & Company™')
      expect(metaOg.getSiteName()).toBe('Site & Company™')
    })
  })

  describe('html', () => {
    it('should generate HTML with property attribute', () => {
      metaOg.setTitle('HTML Test')

      const html = metaOg.html()

      expect(html).toContain('property="og:title"')
      expect(html).not.toContain('name="og:title"')
    })

    it('should generate HTML for all set tags', () => {
      metaOg
        .setTitle('Test Title')
        .setType(MetaOpenGraphType.article)
        .setUrl('https://example.com')
        .setImage('https://example.com/img.jpg')
        .setDescription('Test Description')
        .setLocale('en_US')
        .setSiteName('Test Site')

      const html = metaOg.html()

      expect(html).toContain('property="og:title"')
      expect(html).toContain('content="Test Title"')
      expect(html).toContain('property="og:type"')
      expect(html).toContain('content="article"')
      expect(html).toContain('property="og:url"')
      expect(html).toContain('property="og:image"')
      expect(html).toContain('property="og:description"')
      expect(html).toContain('property="og:locale"')
      expect(html).toContain('property="og:site_name"')
    })

    it('should escape special characters in HTML', () => {
      metaOg.setTitle('Title with "quotes" & <html>')

      const html = metaOg.html()

      expect(html).toContain('&quot;')
      expect(html).toContain('&amp;')
      expect(html).toContain('&lt;')
      expect(html).toContain('&gt;')
    })

    it('should not include empty tags', () => {
      metaOg.setTitle('Only Title')

      const html = metaOg.html()

      expect(html).toContain('property="og:title"')
      expect(html).not.toContain('property="og:description"')
    })
  })

  describe('method chaining', () => {
    it('should support chaining all setter methods', () => {
      const result = metaOg
        .setTitle('Chained Title')
        .setType(MetaOpenGraphType.article)
        .setUrl('https://example.com/chain')
        .setImage('https://example.com/chain.jpg')
        .setDescription('Chained description')
        .setLocale('en_US')
        .setSiteName('Chained Site')

      expect(result).toBe(metaOg)
      expect(metaOg.getTitle()).toBe('Chained Title')
      expect(metaOg.getType()).toBe(MetaOpenGraphType.article)
      expect(metaOg.getUrl()).toBe('https://example.com/chain')
      expect(metaOg.getImage()).toBe('https://example.com/chain.jpg')
      expect(metaOg.getDescription()).toBe('Chained description')
      expect(metaOg.getLocale()).toBe('en_US')
      expect(metaOg.getSiteName()).toBe('Chained Site')
    })
  })

  describe('edge cases', () => {
    it('should handle unicode characters', () => {
      metaOg.setTitle('Заголовок на русском 🎉')
      metaOg.setDescription('描述中文 日本語')

      expect(metaOg.getTitle()).toBe('Заголовок на русском 🎉')
      expect(metaOg.getDescription()).toBe('描述中文 日本語')
    })

    it('should handle very long URLs', () => {
      const longUrl = 'https://example.com/' + 'a'.repeat(1000)
      metaOg.setUrl(longUrl)
      expect(metaOg.getUrl()).toBe(longUrl)
    })

    it('should handle newlines in content', () => {
      metaOg.setDescription('Line 1\nLine 2\nLine 3')
      expect(metaOg.getDescription()).toBe('Line 1\nLine 2\nLine 3')
    })

    it('should handle multiple consecutive updates', () => {
      for (let i = 0; i < 100; i++) {
        metaOg.setTitle(`Title ${i}`)
      }

      expect(metaOg.getTitle()).toBe('Title 99')

      const elements = document.querySelectorAll('meta[property="og:title"]')
      expect(elements.length).toBe(1)
    })
  })

  describe('DOM synchronization', () => {
    it('should keep internal state and DOM in sync', () => {
      metaOg.setTitle('Sync Test')

      const domContent = document.querySelector('meta[property="og:title"]')?.getAttribute('content')
      const internalContent = metaOg.getTitle()

      expect(domContent).toBe(internalContent)
    })

    it('should update DOM when changing values', () => {
      metaOg.setTitle('First')
      metaOg.setTitle('Second')
      metaOg.setTitle('Third')

      const elements = document.querySelectorAll('meta[property="og:title"]')
      expect(elements.length).toBe(1)
      expect(elements?.[0]?.getAttribute('content')).toBe('Third')
    })

    it('should not create duplicate tags', () => {
      const existingMeta = document.createElement('meta')
      existingMeta.setAttribute('property', 'og:title')
      existingMeta.setAttribute('content', 'Existing')
      document.head.appendChild(existingMeta)

      const newMetaOg = new MetaOg()
      newMetaOg.setTitle('Updated')

      const elements = document.querySelectorAll('meta[property="og:title"]')
      expect(elements.length).toBe(1)
      expect(elements?.[0]?.getAttribute('content')).toBe('Updated')
    })
  })

  describe('SSR compatibility', () => {
    it('should work without DOM runtime', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ssrMetaOg = new MetaOg()

        ssrMetaOg
          .setTitle('SSR Title')
          .setType(MetaOpenGraphType.article)
          .setUrl('https://example.com/ssr')
          .setImage('https://example.com/ssr.jpg')
          .setDescription('SSR Description')
          .setLocale('en_US')
          .setSiteName('SSR Site')

        expect(ssrMetaOg.getTitle()).toBe('SSR Title')
        expect(ssrMetaOg.getType()).toBe(MetaOpenGraphType.article)
        expect(ssrMetaOg.getUrl()).toBe('https://example.com/ssr')

        const html = ssrMetaOg.html()
        expect(html).toContain('property="og:title"')
        expect(html).toContain('property="og:type"')
        expect(html).toContain('property="og:url"')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })

    it('should generate valid HTML for SSR', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ssrMetaOg = new MetaOg()

        ssrMetaOg
          .setTitle('SSR Page Title')
          .setDescription('SSR Page Description')
          .setImage('https://example.com/ssr-image.jpg')

        const html = ssrMetaOg.html()

        expect(html).toMatch(/<meta property="[^"]+" content="[^"]+">/)
        expect(html).toContain('property="og:title" content="SSR Page Title"')
        expect(html).toContain('property="og:description" content="SSR Page Description"')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })
  })

  describe('real-world scenarios', () => {
    it('should handle article page setup', () => {
      metaOg
        .setType(MetaOpenGraphType.article)
        .setTitle('How to Build Web Applications')
        .setDescription('A comprehensive guide to modern web development')
        .setUrl('https://example.com/articles/web-apps')
        .setImage('https://example.com/images/web-apps-cover.jpg')
        .setLocale('en_US')
        .setSiteName('Developer Blog')

      expect(metaOg.getType()).toBe('article')

      const html = metaOg.html()
      expect(html).toContain('property="og:type" content="article"')
      expect(html).toContain('How to Build Web Applications')
    })

    it('should handle product page setup', () => {
      metaOg
        .setType(MetaOpenGraphType.product)
        .setTitle('Amazing Product Name')
        .setDescription('Best product ever with great features')
        .setUrl('https://store.com/products/amazing')
        .setImage('https://store.com/images/product.jpg')
        .setLocale('en_US')
        .setSiteName('My Store')

      expect(metaOg.getType()).toBe('product')

      const html = metaOg.html()
      expect(html).toContain('property="og:type" content="product"')
    })

    it('should handle video page setup', () => {
      metaOg
        .setType(MetaOpenGraphType.videoMovie)
        .setTitle('Awesome Movie Title')
        .setDescription('An epic movie about...')
        .setUrl('https://videos.com/movies/awesome')
        .setImage('https://videos.com/thumbnails/awesome.jpg')
        .setLocale('en_US')
        .setSiteName('Video Platform')

      expect(metaOg.getType()).toBe('video.movie')
    })

    it('should handle website homepage setup', () => {
      metaOg
        .setType(MetaOpenGraphType.website)
        .setTitle('Welcome to My Website')
        .setDescription('The best website for everything')
        .setUrl('https://example.com')
        .setImage('https://example.com/og-home.jpg')
        .setLocale('en_US')
        .setSiteName('My Website')

      const html = metaOg.html()

      expect(html).toContain('property="og:type" content="website"')
      expect(html).toContain('Welcome to My Website')
    })
  })

  describe('integration with other meta managers', () => {
    it('should work independently', () => {
      metaOg.setTitle('OG Title')

      expect(metaOg.getTitle()).toBe('OG Title')

      const ogElement = document.querySelector('meta[property="og:title"]')
      expect(ogElement).toBeTruthy()
    })

    it('should generate HTML that can be combined with other meta tags', () => {
      metaOg
        .setTitle('Combined Title')
        .setDescription('Combined Description')

      const html = metaOg.html()

      expect(html).toBeTruthy()
      expect(typeof html).toBe('string')

      const combinedHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            ${html}
          </head>
        </html>
      `

      expect(combinedHtml).toContain('<meta property="og:title"')
      expect(combinedHtml).toContain('<meta property="og:description"')
    })
  })
})
