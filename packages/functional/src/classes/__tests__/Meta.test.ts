/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { Meta } from '../Meta'
import { MetaRobots } from '../../types/metaTypes'

describe('Meta', () => {
  let meta: Meta

  beforeEach(() => {
    // Очистка DOM перед каждым тестом
    document.head.innerHTML = ''
    document.title = ''

    meta = new Meta()
  })

  afterEach(() => {
    // Очистка после тестов
    document.head.innerHTML = ''
    document.title = ''
  })

  describe('constructor', () => {
    it('should create Meta instance', () => {
      expect(meta).toBeInstanceOf(Meta)
    })

    it('should initialize MetaOg instance', () => {
      expect(meta.getOg()).toBeDefined()
    })

    it('should initialize MetaTwitter instance', () => {
      expect(meta.getTwitter()).toBeDefined()
    })
  })

  describe('getTitle', () => {
    it('should return empty string when title is not set', () => {
      expect(meta.getTitle()).toBe('')
    })

    it('should return title without suffix', () => {
      meta.setSuffix('My Site')
      meta.setTitle('Home Page')

      expect(meta.getTitle()).toBe('Home Page')
      expect(document.title).toBe('Home Page - My Site')
    })

    it('should return title when no suffix is set', () => {
      meta.setTitle('Simple Title')

      expect(meta.getTitle()).toBe('Simple Title')
      expect(document.title).toBe('Simple Title')
    })
  })

  describe('getKeyword', () => {
    it('should return empty string when keywords not set', () => {
      expect(meta.getKeyword()).toBe('')
    })

    it('should return keywords after setting', () => {
      meta.setKeywords('web, javascript, vue')
      expect(meta.getKeyword()).toBe('web, javascript, vue')
    })
  })

  describe('getDescription', () => {
    it('should return empty string when description not set', () => {
      expect(meta.getDescription()).toBe('')
    })

    it('should return description after setting', () => {
      meta.setDescription('Test description')
      expect(meta.getDescription()).toBe('Test description')
    })
  })

  describe('getImage', () => {
    it('should return empty string when image not set', () => {
      expect(meta.getImage()).toBe('')
    })

    it('should return image URL from Open Graph', () => {
      meta.setImage('https://example.com/image.jpg')
      expect(meta.getImage()).toBe('https://example.com/image.jpg')
    })
  })

  describe('getCanonical', () => {
    it('should return empty string when canonical not set', () => {
      expect(meta.getCanonical()).toBe('')
    })

    it('should return canonical URL after setting', () => {
      meta.setCanonical('https://example.com/page')
      expect(meta.getCanonical()).toBe('https://example.com/page')
    })
  })

  describe('getRobots', () => {
    it('should return empty string when robots not set', () => {
      expect(meta.getRobots()).toBe('')
    })

    it('should return robots directive after setting', () => {
      meta.setRobots(MetaRobots.indexFollow)
      expect(meta.getRobots()).toBe(MetaRobots.indexFollow)
    })
  })

  describe('getAuthor', () => {
    it('should return empty string when author not set', () => {
      expect(meta.getAuthor()).toBe('')
    })

    it('should return author after setting', () => {
      meta.setAuthor('John Doe')
      expect(meta.getAuthor()).toBe('John Doe')
    })
  })

  describe('getSiteName', () => {
    it('should return empty string when site name not set', () => {
      expect(meta.getSiteName()).toBe('')
    })

    it('should return site name from Open Graph', () => {
      meta.setSiteName('My Website')
      expect(meta.getSiteName()).toBe('My Website')
    })
  })

  describe('getLocale', () => {
    it('should return empty string when locale not set', () => {
      expect(meta.getLocale()).toBe('')
    })

    it('should return locale from Open Graph', () => {
      meta.setLocale('en_US')
      expect(meta.getLocale()).toBe('en_US')
    })
  })

  describe('setTitle', () => {
    it('should set document title', () => {
      meta.setTitle('Test Title')
      expect(document.title).toBe('Test Title')
    })

    it('should set title with suffix', () => {
      meta.setSuffix('Site Name')
      meta.setTitle('Page Title')

      expect(document.title).toBe('Page Title - Site Name')
    })

    it('should update Open Graph title', () => {
      meta.setTitle('OG Test')
      expect(meta.getOg().getTitle()).toBe('OG Test')
    })

    it('should update Twitter Card title', () => {
      meta.setTitle('Twitter Test')
      expect(meta.getTwitter().getTitle()).toBe('Twitter Test')
    })

    it('should return this for chaining', () => {
      const result = meta.setTitle('Test')
      expect(result).toBe(meta)
    })
  })

  describe('setKeywords', () => {
    it('should set keywords from string', () => {
      meta.setKeywords('web, dev, js')
      expect(meta.getKeyword()).toBe('web, dev, js')
    })

    it('should set keywords from array', () => {
      meta.setKeywords(['web', 'dev', 'js'])
      expect(meta.getKeyword()).toBe('web, dev, js')
    })

    it('should create meta tag in DOM', () => {
      meta.setKeywords('test, keywords')

      const metaTag = document.querySelector('meta[name="keywords"]')
      expect(metaTag).toBeTruthy()
      expect(metaTag?.getAttribute('content')).toBe('test, keywords')
    })

    it('should return this for chaining', () => {
      const result = meta.setKeywords('test')
      expect(result).toBe(meta)
    })
  })

  describe('setDescription', () => {
    it('should set description', () => {
      meta.setDescription('Test description')
      expect(meta.getDescription()).toBe('Test description')
    })

    it('should create meta tag in DOM', () => {
      meta.setDescription('DOM test')

      const metaTag = document.querySelector('meta[name="description"]')
      expect(metaTag).toBeTruthy()
      expect(metaTag?.getAttribute('content')).toBe('DOM test')
    })

    it('should return this for chaining', () => {
      const result = meta.setDescription('test')
      expect(result).toBe(meta)
    })
  })

  describe('setImage', () => {
    it('should set image for Open Graph', () => {
      meta.setImage('https://example.com/og.jpg')
      expect(meta.getOg().getImage()).toBe('https://example.com/og.jpg')
    })

    it('should set image for Twitter Card', () => {
      meta.setImage('https://example.com/twitter.jpg')
      expect(meta.getTwitter().getImage()).toBe('https://example.com/twitter.jpg')
    })

    it('should return this for chaining', () => {
      const result = meta.setImage('test.jpg')
      expect(result).toBe(meta)
    })
  })

  describe('setCanonical', () => {
    it('should set canonical URL', () => {
      meta.setCanonical('https://example.com/page')
      expect(meta.getCanonical()).toBe('https://example.com/page')
    })

    it('should update Open Graph URL', () => {
      meta.setCanonical('https://example.com/og-page')
      expect(meta.getOg().getUrl()).toBe('https://example.com/og-page')
    })

    it('should update Twitter Card URL', () => {
      meta.setCanonical('https://example.com/twitter-page')
      expect(meta.getTwitter().getUrl()).toBe('https://example.com/twitter-page')
    })

    it('should return this for chaining', () => {
      const result = meta.setCanonical('https://example.com')
      expect(result).toBe(meta)
    })
  })

  describe('setRobots', () => {
    it('should set robots directive', () => {
      meta.setRobots(MetaRobots.noIndexNoFollow)
      expect(meta.getRobots()).toBe(MetaRobots.noIndexNoFollow)
    })

    it('should create robots meta tag in DOM', () => {
      meta.setRobots(MetaRobots.indexFollow)

      const metaTag = document.querySelector('meta[name="robots"]')
      expect(metaTag).toBeTruthy()
      expect(metaTag?.getAttribute('content')).toBe('index, follow')
    })

    it('should return this for chaining', () => {
      const result = meta.setRobots(MetaRobots.indexFollow)
      expect(result).toBe(meta)
    })
  })

  describe('setAuthor', () => {
    it('should set author', () => {
      meta.setAuthor('Jane Doe')
      expect(meta.getAuthor()).toBe('Jane Doe')
    })

    it('should create author meta tag in DOM', () => {
      meta.setAuthor('John Smith')

      const metaTag = document.querySelector('meta[name="author"]')
      expect(metaTag).toBeTruthy()
      expect(metaTag?.getAttribute('content')).toBe('John Smith')
    })

    it('should return this for chaining', () => {
      const result = meta.setAuthor('Test')
      expect(result).toBe(meta)
    })
  })

  describe('setSiteName', () => {
    it('should set site name for Open Graph', () => {
      meta.setSiteName('My Site')
      expect(meta.getOg().getSiteName()).toBe('My Site')
    })

    it('should set site name for Twitter Card', () => {
      meta.setSiteName('Twitter Site')
      expect(meta.getTwitter().getSite()).toBe('Twitter Site')
    })

    it('should return this for chaining', () => {
      const result = meta.setSiteName('Test')
      expect(result).toBe(meta)
    })
  })

  describe('setLocale', () => {
    it('should set locale for Open Graph', () => {
      meta.setLocale('ru_RU')
      expect(meta.getOg().getLocale()).toBe('ru_RU')
    })

    it('should return this for chaining', () => {
      const result = meta.setLocale('en_US')
      expect(result).toBe(meta)
    })
  })

  describe('setSuffix', () => {
    it('should set suffix', () => {
      meta.setSuffix('My Site')
      meta.setTitle('Home')

      expect(document.title).toBe('Home - My Site')
    })

    it('should allow removing suffix', () => {
      meta.setSuffix('Site')
      meta.setTitle('Page')
      expect(document.title).toBe('Page - Site')

      meta.setSuffix()
      meta.setTitle('Another Page')
      expect(document.title).toBe('Another Page')
    })

    it('should not add separator when suffix is empty', () => {
      meta.setSuffix('')
      meta.setTitle('Test')

      expect(document.title).toBe('Test')
    })
  })

  describe('html', () => {
    it('should generate HTML for all meta tags', () => {
      meta
        .setTitle('Test Page')
        .setDescription('Test description')
        .setKeywords(['test', 'keywords'])
        .setAuthor('John Doe')

      const html = meta.html()

      expect(html).toContain('name="description"')
      expect(html).toContain('content="Test description"')
      expect(html).toContain('name="keywords"')
      expect(html).toContain('content="test, keywords"')
      expect(html).toContain('name="author"')
      expect(html).toContain('content="John Doe"')
    })

    it('should include Open Graph tags in HTML', () => {
      meta.setImage('https://example.com/og.jpg')
      meta.setSiteName('My Site')

      const html = meta.html()

      expect(html).toContain('property="og:image"')
      expect(html).toContain('property="og:site_name"')
    })

    it('should include Twitter Card tags in HTML', () => {
      meta.setImage('https://example.com/twitter.jpg')

      const html = meta.html()

      expect(html).toContain('name="twitter:image"')
    })

    it('should escape special characters', () => {
      meta.setDescription('Description with "quotes" & ampersands')

      const html = meta.html()

      expect(html).toContain('&quot;')
      expect(html).toContain('&amp;')
    })

    it('should return combined HTML from all meta managers', () => {
      meta
        .setDescription('Standard meta')
        .setImage('https://example.com/image.jpg')
        .setCanonical('https://example.com/page')

      const html = meta.html()

      // Должен содержать теги из Meta, MetaOg и MetaTwitter
      expect(html).toContain('name="description"')
      expect(html).toContain('property="og:image"')
      expect(html).toContain('name="twitter:image"')
      expect(html).toContain('property="og:url"')
      expect(html).toContain('name="twitter:url"')
    })
  })

  describe('method chaining', () => {
    it('should support chaining all setter methods', () => {
      const result = meta
        .setTitle('Chained Title')
        .setDescription('Chained description')
        .setKeywords(['chain', 'test'])
        .setImage('https://example.com/chain.jpg')
        .setCanonical('https://example.com/chain')
        .setAuthor('Chain Author')
        .setRobots(MetaRobots.indexFollow)
        .setSiteName('Chain Site')
        .setLocale('en_US')

      expect(result).toBe(meta)
      expect(meta.getTitle()).toBe('Chained Title')
      expect(meta.getDescription()).toBe('Chained description')
      expect(meta.getAuthor()).toBe('Chain Author')
    })
  })

  describe('integration with MetaOg', () => {
    it('should allow direct access to MetaOg methods', () => {
      const og = meta.getOg()

      og.setTitle('Direct OG Title')
      expect(og.getTitle()).toBe('Direct OG Title')
    })

    it('should sync image between Meta and MetaOg', () => {
      meta.setImage('https://example.com/sync.jpg')

      expect(meta.getImage()).toBe('https://example.com/sync.jpg')
      expect(meta.getOg().getImage()).toBe('https://example.com/sync.jpg')
    })
  })

  describe('integration with MetaTwitter', () => {
    it('should allow direct access to MetaTwitter methods', () => {
      const twitter = meta.getTwitter()

      twitter.setTitle('Direct Twitter Title')
      expect(twitter.getTitle()).toBe('Direct Twitter Title')
    })

    it('should sync image between Meta and MetaTwitter', () => {
      meta.setImage('https://example.com/twitter-sync.jpg')

      expect(meta.getImage()).toBe('https://example.com/twitter-sync.jpg')
      expect(meta.getTwitter().getImage()).toBe('https://example.com/twitter-sync.jpg')
    })
  })

  describe('edge cases', () => {
    it('should handle empty strings', () => {
      meta.setTitle('')
      meta.setDescription('')
      meta.setKeywords('')

      expect(meta.getTitle()).toBe('')
      expect(meta.getDescription()).toBe('')
      expect(meta.getKeyword()).toBe('')
    })

    it('should handle special characters in content', () => {
      meta.setDescription('Test <script>alert("XSS")</script>')

      const html = meta.html()
      expect(html).toContain('&lt;script&gt;')
    })

    it('should handle very long strings', () => {
      const longString = 'a'.repeat(1000)
      meta.setDescription(longString)

      expect(meta.getDescription()).toBe(longString)
    })

    it('should handle unicode characters', () => {
      meta.setTitle('Заголовок на русском 🎉')
      meta.setDescription('描述中文 日本語')

      expect(meta.getTitle()).toBe('Заголовок на русском 🎉')
      expect(meta.getDescription()).toBe('描述中文 日本語')
    })

    it('should handle keywords as empty array', () => {
      meta.setKeywords([])
      expect(meta.getKeyword()).toBe('')
    })
  })

  describe('DOM synchronization', () => {
    it('should update existing meta tags', () => {
      // Создаем начальный тег
      const initialMeta = document.createElement('meta')
      initialMeta.setAttribute('name', 'description')
      initialMeta.setAttribute('content', 'Initial content')
      document.head.appendChild(initialMeta)

      // Создаем новый экземпляр Meta
      const newMeta = new Meta()
      newMeta.setDescription('Updated content')

      // Должен обновить существующий тег, а не создать новый
      const metaTags = document.querySelectorAll('meta[name="description"]')
      expect(metaTags.length).toBe(1)
      expect(metaTags?.[0]?.getAttribute('content')).toBe('Updated content')
    })

    it('should read existing meta tags on initialization', () => {
      // Устанавливаем теги в DOM
      const descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      descMeta.setAttribute('content', 'Existing description')
      document.head.appendChild(descMeta)

      const keywordsMeta = document.createElement('meta')
      keywordsMeta.setAttribute('name', 'keywords')
      keywordsMeta.setAttribute('content', 'existing, keywords')
      document.head.appendChild(keywordsMeta)

      // Создаем новый экземпляр
      const newMeta = new Meta()

      // Должен прочитать существующие теги
      expect(newMeta.getDescription()).toBe('Existing description')
      expect(newMeta.getKeyword()).toBe('existing, keywords')
    })
  })

  describe('SSR compatibility', () => {
    it('should generate valid HTML for SSR', () => {
      meta
        .setTitle('SSR Page')
        .setDescription('SSR Description')
        .setKeywords(['ssr', 'test'])
        .setCanonical('https://example.com/ssr')
        .setImage('https://example.com/ssr.jpg')

      const html = meta.html()

      // HTML должен быть валидным
      expect(html).toMatch(/<meta [^>]+>/g)

      // Должен содержать все необходимые атрибуты
      expect(html).toContain('name="description"')
      expect(html).toContain('name="keywords"')
      expect(html).toContain('property="og:image"')
      expect(html).toContain('name="twitter:image"')
    })
  })
})
