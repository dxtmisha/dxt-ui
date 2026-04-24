/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { MetaManager } from '../MetaManager'

describe('MetaManager', () => {
  let manager: MetaManager<readonly ['description', 'keywords', 'author']>
  const metaTags = ['description', 'keywords', 'author'] as const

  beforeEach(() => {
    // Clear DOM before each test
    document.head.innerHTML = ''

    manager = new MetaManager(metaTags)
  })

  afterEach(() => {
    // Clear after tests
    document.head.innerHTML = ''
  })

  describe('constructor', () => {
    it('should create MetaManager instance', () => {
      expect(manager).toBeInstanceOf(MetaManager)
    })

    it('should initialize with empty items', () => {
      const items = manager.getItems()
      expect(items.description).toBe('')
      expect(items.keywords).toBe('')
      expect(items.author).toBe('')
    })

    it('should read existing meta tags from DOM on initialization', () => {
      // Create meta tags in DOM before initialization
      const descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      descMeta.setAttribute('content', 'Existing description')
      document.head.appendChild(descMeta)

      const keywordsMeta = document.createElement('meta')
      keywordsMeta.setAttribute('name', 'keywords')
      keywordsMeta.setAttribute('content', 'existing, keywords')
      document.head.appendChild(keywordsMeta)

      // Create new instance
      const newManager = new MetaManager(metaTags)

      // Should read existing tags
      expect(newManager.get('description')).toBe('Existing description')
      expect(newManager.get('keywords')).toBe('existing, keywords')
    })

    it('should use "name" attribute by default', () => {
      manager.set('description', 'Test')

      const element = document.querySelector('meta[name="description"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('name')).toBe('description')
    })

    it('should use "property" attribute when isProperty is true', () => {
      const propertyManager = new MetaManager(['og:title', 'og:description'] as const, true)
      propertyManager.set('og:title', 'Test Title')

      const element = document.querySelector('meta[property="og:title"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('property')).toBe('og:title')
      expect(element?.getAttribute('name')).toBeNull()
    })
  })

  describe('getListMeta', () => {
    it('should return the list of meta tag names', () => {
      const list = manager.getListMeta()

      expect(list).toEqual(metaTags)
      expect(list.length).toBe(3)
      expect(list[0]).toBe('description')
      expect(list[1]).toBe('keywords')
      expect(list[2]).toBe('author')
    })

    it('should return readonly array', () => {
      const list = manager.getListMeta()
      expect(list).toBe(metaTags) // Should be the same reference
    })
  })

  describe('get', () => {
    it('should return empty string when meta tag not set', () => {
      expect(manager.get('description')).toBe('')
      expect(manager.get('keywords')).toBe('')
    })

    it('should return meta tag content after setting', () => {
      manager.set('description', 'Test description')
      expect(manager.get('description')).toBe('Test description')
    })

    it('should return different values for different tags', () => {
      manager.set('description', 'Description text')
      manager.set('keywords', 'key, words')
      manager.set('author', 'John Doe')

      expect(manager.get('description')).toBe('Description text')
      expect(manager.get('keywords')).toBe('key, words')
      expect(manager.get('author')).toBe('John Doe')
    })
  })

  describe('getItems', () => {
    it('should return empty object when no meta tags set', () => {
      const items = manager.getItems()

      expect(items.description).toBe('')
      expect(items.keywords).toBe('')
      expect(items.author).toBe('')
    })

    it('should return all meta tags as object', () => {
      manager.set('description', 'Desc')
      manager.set('keywords', 'key')
      manager.set('author', 'Author')

      const items = manager.getItems()

      expect(items).toEqual({
        description: 'Desc',
        keywords: 'key',
        author: 'Author'
      })
    })

    it('should return reference to internal items', () => {
      const items1 = manager.getItems()
      const items2 = manager.getItems()

      expect(items1).toBe(items2)
    })
  })

  describe('set', () => {
    it('should set meta tag content', () => {
      manager.set('description', 'New description')

      expect(manager.get('description')).toBe('New description')
    })

    it('should create meta tag in DOM', () => {
      manager.set('description', 'DOM test')

      const element = document.querySelector('meta[name="description"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('DOM test')
    })

    it('should update existing meta tag in DOM', () => {
      // First installation
      manager.set('description', 'First value')

      const firstElements = document.querySelectorAll('meta[name="description"]')
      expect(firstElements.length).toBe(1)

      // Update
      manager.set('description', 'Second value')

      const secondElements = document.querySelectorAll('meta[name="description"]')
      expect(secondElements.length).toBe(1) // Should not create duplicate
      expect(secondElements?.[0]?.getAttribute('content')).toBe('Second value')
    })

    it('should return this for chaining', () => {
      const result = manager.set('description', 'Test')
      expect(result).toBe(manager)
    })

    it('should support method chaining', () => {
      manager
        .set('description', 'Desc')
        .set('keywords', 'keys')
        .set('author', 'Author')

      expect(manager.get('description')).toBe('Desc')
      expect(manager.get('keywords')).toBe('keys')
      expect(manager.get('author')).toBe('Author')
    })

    it('should handle empty string', () => {
      manager.set('description', '')
      expect(manager.get('description')).toBe('')
    })

    it('should handle special characters', () => {
      manager.set('description', 'Text with "quotes" & <tags>')
      expect(manager.get('description')).toBe('Text with "quotes" & <tags>')
    })
  })

  describe('setByList', () => {
    it('should set multiple meta tags at once', () => {
      manager.setByList({
        description: 'Bulk description',
        keywords: 'bulk, keywords',
        author: 'Bulk Author'
      })

      expect(manager.get('description')).toBe('Bulk description')
      expect(manager.get('keywords')).toBe('bulk, keywords')
      expect(manager.get('author')).toBe('Bulk Author')
    })

    it('should create all meta tags in DOM', () => {
      manager.setByList({
        description: 'Desc',
        keywords: 'keys'
      })

      expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Desc')
      expect(document.querySelector('meta[name="keywords"]')?.getAttribute('content')).toBe('keys')
    })

    it('should handle partial updates', () => {
      manager.set('description', 'Initial')
      manager.set('keywords', 'Initial keys')

      manager.setByList({
        description: 'Updated'
      })

      expect(manager.get('description')).toBe('Updated')
      expect(manager.get('keywords')).toBe('Initial keys') // Should not change
    })

    it('should return this for chaining', () => {
      const result = manager.setByList({ description: 'Test' })
      expect(result).toBe(manager)
    })

    it('should handle empty object', () => {
      manager.set('description', 'Initial')
      manager.setByList({})

      expect(manager.get('description')).toBe('Initial')
    })

    it('should convert values to strings', () => {
      manager.setByList({
        description: 'String value'
      })

      expect(manager.get('description')).toBe('String value')
    })
  })

  describe('html', () => {
    it('should return empty string when no meta tags set', () => {
      const html = manager.html()
      expect(html).toBe('')
    })

    it('should return title as simple string when toHtmlTitle is called', () => {
      const result = (manager as any).toHtmlTitle('Test Title')
      expect(result).toBe('Test Title')
    })

    it('should escape special characters in toHtmlTitle', () => {
      const result = (manager as any).toHtmlTitle('Title with "quotes" & <tags>')
      expect(result).toBe('Title with "quotes" &amp; &lt;tags&gt;')
    })

    it('should generate HTML for single meta tag', () => {
      manager.set('description', 'Test description')

      const html = manager.html()
      expect(html).toContain('<meta name="description" content="Test description">')
    })

    it('should generate HTML for multiple meta tags', () => {
      manager.set('description', 'Desc')
      manager.set('keywords', 'keys')
      manager.set('author', 'Author')

      const html = manager.html()

      expect(html).toContain('name="description"')
      expect(html).toContain('content="Desc"')
      expect(html).toContain('name="keywords"')
      expect(html).toContain('content="keys"')
      expect(html).toContain('name="author"')
      expect(html).toContain('content="Author"')
    })

    it('should escape special characters', () => {
      manager.set('description', 'Text with "quotes" & <tags>')

      const html = manager.html()

      expect(html).toContain('&quot;')
      expect(html).toContain('&amp;')
      expect(html).toContain('&lt;')
      expect(html).toContain('&gt;')
    })

    it('should not include empty meta tags', () => {
      manager.set('description', 'Has content')
      manager.set('keywords', '')

      const html = manager.html()

      expect(html).toContain('name="description"')
      expect(html).not.toContain('name="keywords"')
    })

    it('should use property attribute when isProperty is true', () => {
      const propertyManager = new MetaManager(['og:title'] as const, true)
      propertyManager.set('og:title', 'Title')

      const html = propertyManager.html()

      expect(html).toContain('property="og:title"')
      expect(html).not.toContain('name="og:title"')
    })

    it('should generate valid HTML string', () => {
      manager.set('description', 'Test')

      const html = manager.html()

      expect(html).toMatch(/<meta [^>]+>/)
    })
  })

  describe('getAttributeName', () => {
    it('should return "name" by default', () => {
      expect(manager['getAttributeName']()).toBe('name')
    })

    it('should return "property" when isProperty is true', () => {
      const propertyManager = new MetaManager(['og:title'] as const, true)
      expect(propertyManager['getAttributeName']()).toBe('property')
    })
  })

  describe('findMetaElement', () => {
    it('should find existing meta element by name', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      meta.setAttribute('content', 'Test')
      document.head.appendChild(meta)

      const found = (manager as any).findMetaElement('description')

      expect(found).toBeTruthy()
      expect(found?.getAttribute('content')).toBe('Test')
    })

    it('should find meta element by property when isProperty is true', () => {
      const propertyManager = new MetaManager(['og:title'] as const, true)

      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:title')
      meta.setAttribute('content', 'Title')
      document.head.appendChild(meta)

      const found = (propertyManager as any).findMetaElement('og:title')

      expect(found).toBeTruthy()
      expect(found?.getAttribute('content')).toBe('Title')
    })

    it('should return undefined when element not found', () => {
      const found = (manager as any).findMetaElement('nonexistent')

      expect(found).toBeUndefined()
    })
  })

  describe('edge cases', () => {
    it('should handle very long content', () => {
      const longContent = 'a'.repeat(10000)
      manager.set('description', longContent)

      expect(manager.get('description')).toBe(longContent)
    })

    it('should handle unicode characters', () => {
      manager.set('description', 'Russian Description 🎉')
      manager.set('keywords', '中文, 日本語, 한국어')

      expect(manager.get('description')).toBe('Russian Description 🎉')
      expect(manager.get('keywords')).toBe('中文, 日本語, 한국어')
    })

    it('should handle HTML entities', () => {
      manager.set('description', '&lt;script&gt;alert("XSS")&lt;/script&gt;')

      expect(manager.get('description')).toBe('&lt;script&gt;alert("XSS")&lt;/script&gt;')
    })

    it('should handle newlines and tabs', () => {
      manager.set('description', 'Line 1\nLine 2\tTabbed')

      expect(manager.get('description')).toBe('Line 1\nLine 2\tTabbed')
    })

    it('should handle multiple consecutive updates', () => {
      for (let i = 0; i < 100; i++) {
        manager.set('description', `Value ${i}`)
      }

      expect(manager.get('description')).toBe('Value 99')

      // Should be only one element in DOM
      const elements = document.querySelectorAll('meta[name="description"]')
      expect(elements.length).toBe(1)
    })
  })

  describe('DOM synchronization', () => {
    it('should keep internal state and DOM in sync', () => {
      manager.set('description', 'Sync test')

      const domContent = document.querySelector('meta[name="description"]')?.getAttribute('content')
      const internalContent = manager.get('description')

      expect(domContent).toBe(internalContent)
    })

    it('should update DOM when updating existing meta tag', () => {
      manager.set('description', 'First')
      manager.set('description', 'Second')
      manager.set('description', 'Third')

      const elements = document.querySelectorAll('meta[name="description"]')
      expect(elements.length).toBe(1)
      expect(elements?.[0]?.getAttribute('content')).toBe('Third')
    })

    it('should not create duplicate tags', () => {
      // Create existing tag
      const existingMeta = document.createElement('meta')
      existingMeta.setAttribute('name', 'description')
      existingMeta.setAttribute('content', 'Existing')
      document.head.appendChild(existingMeta)

      // Create manager and update
      const newManager = new MetaManager(metaTags)
      newManager.set('description', 'Updated')

      const elements = document.querySelectorAll('meta[name="description"]')
      expect(elements.length).toBe(1)
      expect(elements?.[0]?.getAttribute('content')).toBe('Updated')
    })
  })

  describe('SSR compatibility', () => {
    it('should generate valid HTML for server-side rendering', () => {
      manager
        .set('description', 'SSR Description')
        .set('keywords', 'ssr, test')
        .set('author', 'SSR Author')

      const html = manager.html()

      // HTML should be valid
      expect(html).toMatch(/<meta [^>]+>/g)

      // Should contain all tags
      expect(html.split('<meta').length - 1).toBe(3)
    })

    it('should properly escape content for HTML', () => {
      manager.set('description', 'Test "quotes" & <html> entities')

      const html = manager.html()

      // HTML should be safe
      expect(html).toContain('content="Test &quot;quotes&quot; &amp; &lt;html&gt; entities"')
    })
  })

  describe('TypeScript types', () => {
    it('should only allow setting defined meta tags', () => {
      // These should work
      manager.set('description', 'test')
      manager.set('keywords', 'test')
      manager.set('author', 'test')

      expect(manager.get('description')).toBe('test')
    })

    it('should have correct return types', () => {
      const getString: string = manager.get('description')
      const getItems: { description?: string, keywords?: string, author?: string } = manager.getItems()
      const getList: readonly ['description', 'keywords', 'author'] = manager.getListMeta()
      const setReturn: MetaManager<readonly ['description', 'keywords', 'author']> = manager.set('description', 'test')
      const htmlReturn: string = manager.html()

      expect(typeof getString).toBe('string')
      expect(typeof getItems).toBe('object')
      expect(Array.isArray(getList)).toBe(true)
      expect(setReturn).toBeInstanceOf(MetaManager)
      expect(typeof htmlReturn).toBe('string')
    })
  })

  describe('integration scenarios', () => {
    it('should work with complex real-world scenario', () => {
      // Initialization with existing tags
      const initialDesc = document.createElement('meta')
      initialDesc.setAttribute('name', 'description')
      initialDesc.setAttribute('content', 'Initial page description')
      document.head.appendChild(initialDesc)

      // Manager creation
      const pageManager = new MetaManager(['description', 'keywords', 'author', 'robots'] as const)

      // Bulk update
      pageManager.setByList({
        description: 'Updated description',
        keywords: 'web, development, javascript',
        author: 'John Doe',
        robots: 'index, follow'
      })

      // Internal state check
      expect(pageManager.get('description')).toBe('Updated description')
      expect(pageManager.get('keywords')).toBe('web, development, javascript')

      // DOM check
      expect(document.querySelector('meta[name="description"]')?.getAttribute('content'))
        .toBe('Updated description')

      // HTML generation for SSR
      const html = pageManager.html()
      expect(html).toContain('name="description"')
      expect(html).toContain('name="keywords"')
      expect(html).toContain('name="author"')
      expect(html).toContain('name="robots"')

      // Tag count in DOM should match
      const metaTags = document.querySelectorAll('meta[name]')
      expect(metaTags.length).toBe(4)
    })
  })

  describe('SSR environment (without DOM)', () => {
    it('should work without DOM runtime', () => {
      // Save original global objects
      const originalDocument = globalThis.document
      const originalWindow = globalThis.window

      // Remove document and window to emulate SSR environment
      delete (globalThis as any).document
      delete (globalThis as any).window

      try {
        // Manager creation without DOM
        const ssrManager = new MetaManager(['description', 'keywords', 'author'] as const)

        // Setting values should work
        ssrManager.set('description', 'SSR Description')
        ssrManager.set('keywords', 'ssr, test, server')
        ssrManager.set('author', 'SSR Author')

        // Internal state should be updated
        expect(ssrManager.get('description')).toBe('SSR Description')
        expect(ssrManager.get('keywords')).toBe('ssr, test, server')
        expect(ssrManager.get('author')).toBe('SSR Author')

        // Bulk update should work
        ssrManager.setByList({
          description: 'Updated SSR Description',
          keywords: 'updated, ssr'
        })

        expect(ssrManager.get('description')).toBe('Updated SSR Description')
        expect(ssrManager.get('keywords')).toBe('updated, ssr')

        // HTML generation should work
        const html = ssrManager.html()
        expect(html).toBeTruthy()
        expect(html).toContain('name="description"')
        expect(html).toContain('content="Updated SSR Description"')
        expect(html).toContain('name="keywords"')
        expect(html).toContain('content="updated, ssr"')
        expect(html).toContain('name="author"')
        expect(html).toContain('content="SSR Author"')
      } finally {
        // Restore global objects
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
        if (originalWindow) {
          (globalThis as any).window = originalWindow
        }
      }
    })

    it('should generate valid HTML in SSR mode', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ssrManager = new MetaManager(['description', 'keywords', 'robots'] as const)

        ssrManager.setByList({
          description: 'Server-side rendered page',
          keywords: 'ssr, node, server',
          robots: 'index, follow'
        })

        const html = ssrManager.html()

        // Check HTML validity
        expect(html).toMatch(/<meta name="[^"]+" content="[^"]+">/)

        // Check tag count
        const metaTagsCount = (html.match(/<meta/g) || []).length
        expect(metaTagsCount).toBe(3)

        // Check each tag structure
        expect(html).toContain('<meta name="description" content="Server-side rendered page">')
        expect(html).toContain('<meta name="keywords" content="ssr, node, server">')
        expect(html).toContain('<meta name="robots" content="index, follow">')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })

    it('should handle special characters in SSR mode', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ssrManager = new MetaManager(['description'] as const)

        ssrManager.set('description', 'Test with "quotes" & <html> tags')

        const html = ssrManager.html()

        // Should escape special characters
        expect(html).toContain('&quot;')
        expect(html).toContain('&amp;')
        expect(html).toContain('&lt;')
        expect(html).toContain('&gt;')

        // Should not contain unescaped characters
        expect(html).not.toContain('"quotes"')
        expect(html).not.toContain('& <html>')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })

    it('should support property attribute in SSR mode', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ogManager = new MetaManager(['og:title', 'og:description'] as const, true)

        ogManager.set('og:title', 'Open Graph Title')
        ogManager.set('og:description', 'Open Graph Description')

        const html = ogManager.html()

        // Should use property instead of name
        expect(html).toContain('property="og:title"')
        expect(html).toContain('property="og:description"')
        expect(html).not.toContain('name="og:title"')

        // Check content
        expect(html).toContain('content="Open Graph Title"')
        expect(html).toContain('content="Open Graph Description"')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })

    it('should not break when trying to update DOM in SSR', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ssrManager = new MetaManager(['description'] as const)

        // Should not throw an error
        expect(() => {
          ssrManager.set('description', 'Test')
        }).not.toThrow()

        // Internal state should update
        expect(ssrManager.get('description')).toBe('Test')

        // HTML should be generated
        const html = ssrManager.html()
        expect(html).toContain('content="Test"')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })

    it('should work with getItems in SSR mode', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ssrManager = new MetaManager(['description', 'keywords'] as const)

        ssrManager.setByList({
          description: 'SSR Items Test',
          keywords: 'test, items'
        })

        const items = ssrManager.getItems()

        expect(items).toEqual({
          description: 'SSR Items Test',
          keywords: 'test, items'
        })
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })

    it('should initialize with empty values in SSR mode', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ssrManager = new MetaManager(['description', 'keywords', 'author'] as const)

        // All should be empty on initialization
        expect(ssrManager.get('description')).toBe('')
        expect(ssrManager.get('keywords')).toBe('')
        expect(ssrManager.get('author')).toBe('')

        const items = ssrManager.getItems()
        expect(items.description).toBe('')
        expect(items.keywords).toBe('')
        expect(items.author).toBe('')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })

    it('should support chaining in SSR mode', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        const ssrManager = new MetaManager(['description', 'keywords', 'author'] as const)

        const result = ssrManager
          .set('description', 'SSR Chain')
          .set('keywords', 'chain, test')
          .setByList({ author: 'Chain Author' })

        expect(result).toBe(ssrManager)
        expect(ssrManager.get('description')).toBe('SSR Chain')
        expect(ssrManager.get('keywords')).toBe('chain, test')
        expect(ssrManager.get('author')).toBe('Chain Author')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })

    it('should handle complete SSR workflow', () => {
      const originalDocument = globalThis.document
      delete (globalThis as any).document

      try {
        // Manager creation on server
        const ssrManager = new MetaManager(
          ['description', 'keywords', 'author', 'robots', 'viewport'] as const
        )

        // Meta tag configuration
        ssrManager.setByList({
          description: 'Complete SSR page description',
          keywords: 'ssr, server, node, express',
          author: 'Server Admin',
          robots: 'index, follow',
          viewport: 'width=device-width, initial-scale=1'
        })

        // HTML generation for template insertion
        const metaTags = ssrManager.html()

        // Check that HTML is ready for SSR
        expect(metaTags).toBeTruthy()
        expect(typeof metaTags).toBe('string')

        // Check for presence of all tags
        expect(metaTags).toContain('name="description"')
        expect(metaTags).toContain('name="keywords"')
        expect(metaTags).toContain('name="author"')
        expect(metaTags).toContain('name="robots"')
        expect(metaTags).toContain('name="viewport"')

        // Check if it can be inserted into HTML template
        const htmlTemplate = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              ${metaTags}
              <title>SSR Page</title>
            </head>
            <body>
              <h1>Server-side rendered content</h1>
            </body>
          </html>
        `

        expect(htmlTemplate).toContain('<meta name="description"')
        expect(htmlTemplate).toContain('Complete SSR page description')
      } finally {
        if (originalDocument) {
          (globalThis as any).document = originalDocument
        }
      }
    })
  })
})
