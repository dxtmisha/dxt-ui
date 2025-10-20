/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { MetaTwitter } from '../MetaTwitter'
import { MetaTwitterCard } from '../../types/metaTypes'

describe('MetaTwitter', () => {
  let metaTwitter: MetaTwitter

  beforeEach(() => {
    // Очистка DOM перед каждым тестом
    document.head.innerHTML = ''

    metaTwitter = new MetaTwitter()
  })

  afterEach(() => {
    // Очистка после тестов
    document.head.innerHTML = ''
  })

  describe('constructor', () => {
    it('should create MetaTwitter instance', () => {
      expect(metaTwitter).toBeInstanceOf(MetaTwitter)
    })

    it('should initialize with all Twitter Card tags', () => {
      const listMeta = metaTwitter.getListMeta()

      expect(listMeta).toContain('twitter:card')
      expect(listMeta).toContain('twitter:site')
      expect(listMeta).toContain('twitter:creator')
      expect(listMeta).toContain('twitter:url')
      expect(listMeta).toContain('twitter:title')
      expect(listMeta).toContain('twitter:description')
      expect(listMeta).toContain('twitter:image')
    })

    it('should read existing Twitter tags from DOM on initialization', () => {
      // Создаем Twitter теги в DOM
      const titleMeta = document.createElement('meta')
      titleMeta.setAttribute('name', 'twitter:title')
      titleMeta.setAttribute('content', 'Existing Twitter Title')
      document.head.appendChild(titleMeta)

      const descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'twitter:description')
      descMeta.setAttribute('content', 'Existing Twitter Description')
      document.head.appendChild(descMeta)

      // Создаем новый экземпляр
      const newMetaTwitter = new MetaTwitter()

      // Должен прочитать существующие теги
      expect(newMetaTwitter.getTitle()).toBe('Existing Twitter Title')
      expect(newMetaTwitter.getDescription()).toBe('Existing Twitter Description')
    })
  })

  describe('getCard', () => {
    it('should return empty string when card not set', () => {
      expect(metaTwitter.getCard()).toBe('')
    })

    it('should return card type after setting', () => {
      metaTwitter.setCard(MetaTwitterCard.summaryLargeImage)
      expect(metaTwitter.getCard()).toBe(MetaTwitterCard.summaryLargeImage)
    })
  })

  describe('getSite', () => {
    it('should return empty string when site not set', () => {
      expect(metaTwitter.getSite()).toBe('')
    })

    it('should return site after setting', () => {
      metaTwitter.setSite('@mywebsite')
      expect(metaTwitter.getSite()).toBe('@mywebsite')
    })
  })

  describe('getCreator', () => {
    it('should return empty string when creator not set', () => {
      expect(metaTwitter.getCreator()).toBe('')
    })

    it('should return creator after setting', () => {
      metaTwitter.setCreator('@author')
      expect(metaTwitter.getCreator()).toBe('@author')
    })
  })

  describe('getUrl', () => {
    it('should return empty string when URL not set', () => {
      expect(metaTwitter.getUrl()).toBe('')
    })

    it('should return URL after setting', () => {
      metaTwitter.setUrl('https://example.com/page')
      expect(metaTwitter.getUrl()).toBe('https://example.com/page')
    })
  })

  describe('getTitle', () => {
    it('should return empty string when title not set', () => {
      expect(metaTwitter.getTitle()).toBe('')
    })

    it('should return title after setting', () => {
      metaTwitter.setTitle('Twitter Card Title')
      expect(metaTwitter.getTitle()).toBe('Twitter Card Title')
    })
  })

  describe('getDescription', () => {
    it('should return empty string when description not set', () => {
      expect(metaTwitter.getDescription()).toBe('')
    })

    it('should return description after setting', () => {
      metaTwitter.setDescription('Twitter Card Description')
      expect(metaTwitter.getDescription()).toBe('Twitter Card Description')
    })
  })

  describe('getImage', () => {
    it('should return empty string when image not set', () => {
      expect(metaTwitter.getImage()).toBe('')
    })

    it('should return image URL after setting', () => {
      metaTwitter.setImage('https://example.com/twitter-image.jpg')
      expect(metaTwitter.getImage()).toBe('https://example.com/twitter-image.jpg')
    })
  })

  describe('setCard', () => {
    it('should set Twitter card type', () => {
      metaTwitter.setCard(MetaTwitterCard.summary)
      expect(metaTwitter.getCard()).toBe(MetaTwitterCard.summary)
    })

    it('should create meta tag in DOM', () => {
      metaTwitter.setCard(MetaTwitterCard.summaryLargeImage)

      const element = document.querySelector('meta[name="twitter:card"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('summary_large_image')
    })

    it('should handle all Twitter Card types', () => {
      const types = [
        MetaTwitterCard.summary,
        MetaTwitterCard.summaryLargeImage,
        MetaTwitterCard.app,
        MetaTwitterCard.player
      ]

      types.forEach((type) => {
        metaTwitter.setCard(type)
        expect(metaTwitter.getCard()).toBe(type)
      })
    })

    it('should return this for chaining', () => {
      const result = metaTwitter.setCard(MetaTwitterCard.summary)
      expect(result).toBe(metaTwitter)
    })
  })

  describe('setSite', () => {
    it('should set Twitter site username', () => {
      metaTwitter.setSite('@mysite')
      expect(metaTwitter.getSite()).toBe('@mysite')
    })

    it('should create meta tag in DOM', () => {
      metaTwitter.setSite('@example')

      const element = document.querySelector('meta[name="twitter:site"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('@example')
    })

    it('should update existing meta tag', () => {
      metaTwitter.setSite('@first')
      metaTwitter.setSite('@second')

      const elements = document.querySelectorAll('meta[name="twitter:site"]')
      expect(elements.length).toBe(1)
      expect(elements?.[0]?.getAttribute('content')).toBe('@second')
    })

    it('should return this for chaining', () => {
      const result = metaTwitter.setSite('@test')
      expect(result).toBe(metaTwitter)
    })
  })

  describe('setCreator', () => {
    it('should set Twitter creator username', () => {
      metaTwitter.setCreator('@creator')
      expect(metaTwitter.getCreator()).toBe('@creator')
    })

    it('should create meta tag in DOM', () => {
      metaTwitter.setCreator('@author')

      const element = document.querySelector('meta[name="twitter:creator"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('@author')
    })

    it('should handle usernames with and without @', () => {
      metaTwitter.setCreator('username')
      expect(metaTwitter.getCreator()).toBe('username')

      metaTwitter.setCreator('@username')
      expect(metaTwitter.getCreator()).toBe('@username')
    })

    it('should return this for chaining', () => {
      const result = metaTwitter.setCreator('@test')
      expect(result).toBe(metaTwitter)
    })
  })

  describe('setUrl', () => {
    it('should set Twitter card URL', () => {
      metaTwitter.setUrl('https://example.com/article')
      expect(metaTwitter.getUrl()).toBe('https://example.com/article')
    })

    it('should create meta tag in DOM', () => {
      metaTwitter.setUrl('https://example.com/page')

      const element = document.querySelector('meta[name="twitter:url"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('https://example.com/page')
    })

    it('should handle URLs with query parameters', () => {
      const url = 'https://example.com/page?param=value&other=test'
      metaTwitter.setUrl(url)
      expect(metaTwitter.getUrl()).toBe(url)
    })

    it('should return this for chaining', () => {
      const result = metaTwitter.setUrl('https://example.com')
      expect(result).toBe(metaTwitter)
    })
  })

  describe('setTitle', () => {
    it('should set Twitter card title', () => {
      metaTwitter.setTitle('Test Twitter Title')
      expect(metaTwitter.getTitle()).toBe('Test Twitter Title')
    })

    it('should create meta tag in DOM', () => {
      metaTwitter.setTitle('DOM Title Test')

      const element = document.querySelector('meta[name="twitter:title"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('DOM Title Test')
    })

    it('should update existing meta tag', () => {
      metaTwitter.setTitle('First Title')
      metaTwitter.setTitle('Second Title')

      const elements = document.querySelectorAll('meta[name="twitter:title"]')
      expect(elements.length).toBe(1)
      expect(elements?.[0]?.getAttribute('content')).toBe('Second Title')
    })

    it('should handle empty string', () => {
      metaTwitter.setTitle('')
      expect(metaTwitter.getTitle()).toBe('')
    })

    it('should handle special characters', () => {
      metaTwitter.setTitle('Title with "quotes" & <tags>')
      expect(metaTwitter.getTitle()).toBe('Title with "quotes" & <tags>')
    })

    it('should return this for chaining', () => {
      const result = metaTwitter.setTitle('Chain Test')
      expect(result).toBe(metaTwitter)
    })
  })

  describe('setDescription', () => {
    it('should set Twitter card description', () => {
      metaTwitter.setDescription('Test Twitter Description')
      expect(metaTwitter.getDescription()).toBe('Test Twitter Description')
    })

    it('should create meta tag in DOM', () => {
      metaTwitter.setDescription('DOM Description Test')

      const element = document.querySelector('meta[name="twitter:description"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('DOM Description Test')
    })

    it('should update existing meta tag', () => {
      metaTwitter.setDescription('First Description')
      metaTwitter.setDescription('Second Description')

      const elements = document.querySelectorAll('meta[name="twitter:description"]')
      expect(elements.length).toBe(1)
      expect(elements?.[0]?.getAttribute('content')).toBe('Second Description')
    })

    it('should handle long descriptions', () => {
      const longDesc = 'A'.repeat(200)
      metaTwitter.setDescription(longDesc)
      expect(metaTwitter.getDescription()).toBe(longDesc)
    })

    it('should return this for chaining', () => {
      const result = metaTwitter.setDescription('Chain Test')
      expect(result).toBe(metaTwitter)
    })
  })

  describe('setImage', () => {
    it('should set Twitter card image URL', () => {
      metaTwitter.setImage('https://example.com/twitter-image.jpg')
      expect(metaTwitter.getImage()).toBe('https://example.com/twitter-image.jpg')
    })

    it('should create meta tag in DOM', () => {
      metaTwitter.setImage('https://example.com/twitter-card.png')

      const element = document.querySelector('meta[name="twitter:image"]')
      expect(element).toBeTruthy()
      expect(element?.getAttribute('content')).toBe('https://example.com/twitter-card.png')
    })

    it('should handle different image formats', () => {
      const formats = [
        'https://example.com/image.jpg',
        'https://example.com/image.png',
        'https://example.com/image.webp',
        'https://example.com/image.gif'
      ]

      formats.forEach((format) => {
        metaTwitter.setImage(format)
        expect(metaTwitter.getImage()).toBe(format)
      })
    })

    it('should return this for chaining', () => {
      const result = metaTwitter.setImage('https://example.com/img.jpg')
      expect(result).toBe(metaTwitter)
    })
  })

  describe('method chaining', () => {
    it('should allow chaining multiple setter methods', () => {
      const result = metaTwitter
        .setCard(MetaTwitterCard.summaryLargeImage)
        .setSite('@mysite')
        .setCreator('@author')
        .setUrl('https://example.com/article')
        .setTitle('Chained Title')
        .setDescription('Chained Description')
        .setImage('https://example.com/image.jpg')

      expect(result).toBe(metaTwitter)
      expect(metaTwitter.getCard()).toBe(MetaTwitterCard.summaryLargeImage)
      expect(metaTwitter.getSite()).toBe('@mysite')
      expect(metaTwitter.getCreator()).toBe('@author')
      expect(metaTwitter.getUrl()).toBe('https://example.com/article')
      expect(metaTwitter.getTitle()).toBe('Chained Title')
      expect(metaTwitter.getDescription()).toBe('Chained Description')
      expect(metaTwitter.getImage()).toBe('https://example.com/image.jpg')
    })

    it('should create all meta tags in DOM when chaining', () => {
      metaTwitter
        .setCard(MetaTwitterCard.summary)
        .setSite('@site')
        .setTitle('Title')
        .setDescription('Description')

      expect(document.querySelector('meta[name="twitter:card"]')).toBeTruthy()
      expect(document.querySelector('meta[name="twitter:site"]')).toBeTruthy()
      expect(document.querySelector('meta[name="twitter:title"]')).toBeTruthy()
      expect(document.querySelector('meta[name="twitter:description"]')).toBeTruthy()
    })
  })

  describe('integration with DOM', () => {
    it('should properly manage meta tags in document head', () => {
      metaTwitter.setTitle('Test Title')
      metaTwitter.setDescription('Test Description')
      metaTwitter.setImage('https://example.com/image.jpg')

      const titleElement = document.querySelector('meta[name="twitter:title"]')
      const descElement = document.querySelector('meta[name="twitter:description"]')
      const imageElement = document.querySelector('meta[name="twitter:image"]')

      expect(titleElement?.parentElement).toBe(document.head)
      expect(descElement?.parentElement).toBe(document.head)
      expect(imageElement?.parentElement).toBe(document.head)
    })

    it('should not duplicate meta tags on multiple updates', () => {
      metaTwitter.setTitle('First')
      metaTwitter.setTitle('Second')
      metaTwitter.setTitle('Third')

      const elements = document.querySelectorAll('meta[name="twitter:title"]')
      expect(elements.length).toBe(1)
    })
  })
})
