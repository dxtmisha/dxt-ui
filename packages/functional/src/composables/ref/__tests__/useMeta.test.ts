/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useMeta } from '../useMeta'
import { MetaRobots } from '@dxtmisha/functional-basic'

describe('useMeta', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
    document.title = ''
  })

  afterEach(() => {
    document.head.innerHTML = ''
    document.title = ''
  })

  describe('initialization', () => {
    it('should return all reactive refs', () => {
      const { title, keyword, description, image, canonical, robots, author, siteName, meta, getHtmlMeta } = useMeta()

      expect(title).toBeDefined()
      expect(keyword).toBeDefined()
      expect(description).toBeDefined()
      expect(image).toBeDefined()
      expect(canonical).toBeDefined()
      expect(robots).toBeDefined()
      expect(author).toBeDefined()
      expect(siteName).toBeDefined()
      expect(meta).toBeDefined()
      expect(getHtmlMeta).toBeDefined()
    })
  })

  describe('singleton pattern', () => {
    it('should return the same instance on multiple calls', () => {
      const instance1 = useMeta()
      const instance2 = useMeta()

      expect(instance1).toBe(instance2)
    })
  })

  describe('reactive title', () => {
    it('should update document title', async () => {
      const { title, meta } = useMeta()

      meta.setSuffix(undefined)
      title.value = 'New Page Title'
      await nextTick()

      expect(document.title).toBe('New Page Title')
    })

    it('should work with suffix', async () => {
      const { title, meta } = useMeta()

      meta.setSuffix('My Site')
      title.value = 'Home'
      await nextTick()

      expect(document.title).toBe('Home - My Site')
      expect(meta.getTitle()).toBe('Home')
    })

    it('should set only suffix when title is empty', async () => {
      const { title, meta } = useMeta()

      meta.setSuffix('My Site')
      title.value = ''
      await nextTick()

      expect(document.title).toBe('My Site')
    })
  })

  describe('reactive keyword', () => {
    it('should update keywords meta tag', async () => {
      const { keyword } = useMeta()

      keyword.value = 'vue, javascript, web'
      await nextTick()

      const metaTag = document.querySelector('meta[name="keywords"]')
      expect(metaTag?.getAttribute('content')).toBe('vue, javascript, web')
    })
  })

  describe('reactive description', () => {
    it('should update description meta tag', async () => {
      const { description } = useMeta()

      description.value = 'Test description'
      await nextTick()

      const metaTag = document.querySelector('meta[name="description"]')
      expect(metaTag?.getAttribute('content')).toBe('Test description')
    })
  })

  describe('reactive image', () => {
    it('should update OG and Twitter image', async () => {
      const { image, meta } = useMeta()

      image.value = 'https://example.com/image.jpg'
      await nextTick()

      expect(meta.getOg().getImage()).toBe('https://example.com/image.jpg')
      expect(meta.getTwitter().getImage()).toBe('https://example.com/image.jpg')
    })
  })

  describe('reactive canonical', () => {
    it('should sync with OG and Twitter URLs', async () => {
      const { canonical, meta } = useMeta()

      canonical.value = 'https://example.com/article'
      await nextTick()

      expect(meta.getOg().getUrl()).toBe('https://example.com/article')
      expect(meta.getTwitter().getUrl()).toBe('https://example.com/article')
    })
  })

  describe('reactive robots', () => {
    it('should update robots meta tag', async () => {
      const { robots } = useMeta()

      robots.value = MetaRobots.noIndexNoFollow
      await nextTick()

      const metaTag = document.querySelector('meta[name="robots"]')
      expect(metaTag?.getAttribute('content')).toBe('noindex, nofollow')
    })
  })

  describe('reactive author', () => {
    it('should update author meta tag', async () => {
      const { author } = useMeta()

      author.value = 'John Doe'
      await nextTick()

      const metaTag = document.querySelector('meta[name="author"]')
      expect(metaTag?.getAttribute('content')).toBe('John Doe')
    })
  })

  describe('reactive siteName', () => {
    it('should update OG and Twitter site', async () => {
      const { siteName, meta } = useMeta()

      siteName.value = 'My Website'
      await nextTick()

      expect(meta.getOg().getSiteName()).toBe('My Website')
      expect(meta.getTwitter().getSite()).toBe('My Website')
    })
  })

  describe('getHtmlMeta', () => {
    it('should generate HTML for all meta tags', async () => {
      const { title, description, keyword, getHtmlMeta, meta } = useMeta()

      meta.setSuffix(undefined)
      title.value = 'Test Page'
      description.value = 'Test description'
      keyword.value = 'test, html'
      await nextTick()

      const html = getHtmlMeta()

      expect(html).toContain('name="description"')
      expect(html).toContain('content="Test description"')
    })
  })

  describe('direct meta instance access', () => {
    it('should allow direct access to Meta methods', () => {
      const { meta } = useMeta()

      meta.setSuffix('Direct Access')
      meta.setTitle('Test')

      expect(document.title).toBe('Test - Direct Access')
    })

    it('should allow access to MetaOg methods', () => {
      const { meta } = useMeta()

      meta.getOg().setLocale('ru_RU')

      expect(meta.getOg().getLocale()).toBe('ru_RU')
    })

    it('should allow access to MetaTwitter methods', () => {
      const { meta } = useMeta()

      meta.getTwitter().setCreator('@author')

      expect(meta.getTwitter().getCreator()).toBe('@author')
    })
  })

  describe('edge cases', () => {
    it('should handle empty title with suffix', async () => {
      const { title, meta } = useMeta()

      meta.setSuffix('Site Name')
      title.value = ''
      await nextTick()

      expect(document.title).toBe('Site Name')
    })

    it('should handle unicode characters', async () => {
      const { title, description, meta } = useMeta()

      meta.setSuffix(undefined)
      title.value = 'Заголовок 🎉'
      description.value = '描述 日本語'
      await nextTick()

      expect(document.title).toBe('Заголовок 🎉')

      const metaTag = document.querySelector('meta[name="description"]')
      expect(metaTag?.getAttribute('content')).toBe('描述 日本語')
    })
  })

  describe('watchers', () => {
    it('should trigger watchers on ref value changes', async () => {
      const { title, meta } = useMeta()

      const spy = vi.spyOn(meta, 'setTitle')

      title.value = 'Watched Title'
      await nextTick()

      expect(spy).toHaveBeenCalledWith('Watched Title')
    })
  })

  describe('SSR compatibility', () => {
    it('should generate valid HTML for SSR', async () => {
      const { title, description, keyword, image, canonical, getHtmlMeta, meta } = useMeta()

      meta.setSuffix(undefined)
      title.value = 'SSR Page'
      description.value = 'SSR Description'
      keyword.value = 'ssr, test'
      image.value = 'https://example.com/ssr.jpg'
      canonical.value = 'https://example.com/ssr'
      await nextTick()

      const html = getHtmlMeta()

      expect(html).toContain('name="description"')
      expect(html).toContain('property="og:image"')
      expect(html).toContain('name="twitter:image"')
    })
  })
})
