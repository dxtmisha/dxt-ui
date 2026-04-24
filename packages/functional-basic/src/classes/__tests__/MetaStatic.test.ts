/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { MetaStatic } from '../MetaStatic'
import { Meta } from '../Meta'
import { MetaRobots } from '../../types/metaTypes'
import { ServerStorage } from '../ServerStorage'

describe('MetaStatic', () => {
  beforeEach(() => {
    // Clear DOM before each test
    document.head.innerHTML = ''
    document.title = ''
    // Reset storage so each test works with a clean instance
    ServerStorage.set('__ui:meta-instance__', () => new Meta())
  })

  afterEach(() => {
    // Clear after tests
    document.head.innerHTML = ''
    document.title = ''
  })

  describe('getItem', () => {
    it('should return Meta instance', () => {
      expect(MetaStatic.getItem()).toBeInstanceOf(Meta)
    })

    it('should return the same instance on multiple calls', () => {
      const instance1 = MetaStatic.getItem()
      const instance2 = MetaStatic.getItem()
      expect(instance1).toBe(instance2)
    })
  })

  describe('getOg', () => {
    it('should return MetaOg instance', () => {
      expect(MetaStatic.getOg()).toBeDefined()
    })
  })

  describe('getTwitter', () => {
    it('should return MetaTwitter instance', () => {
      expect(MetaStatic.getTwitter()).toBeDefined()
    })
  })

  describe('Sync and State', () => {
    it('should correctly set and get title', () => {
      MetaStatic.setSuffix('Test Site')
      MetaStatic.setTitle('Home')

      expect(MetaStatic.getTitle()).toBe('Home')
      expect(document.title).toBe('Home - Test Site')
    })

    it('should correctly handle keywords', () => {
      MetaStatic.setKeywords(['key1', 'key2'])
      expect(MetaStatic.getKeywords()).toBe('key1, key2')

      const metaTag = document.querySelector('meta[name="keywords"]')
      expect(metaTag?.getAttribute('content')).toBe('key1, key2')
    })

    it('should correctly handle description', () => {
      MetaStatic.setDescription('Meta description content')
      expect(MetaStatic.getDescription()).toBe('Meta description content')

      const metaTag = document.querySelector('meta[name="description"]')
      expect(metaTag?.getAttribute('content')).toBe('Meta description content')
    })

    it('should correctly handle image', () => {
      const imageUrl = 'https://example.com/image.jpg'
      MetaStatic.setImage(imageUrl)
      expect(MetaStatic.getImage()).toBe(imageUrl)
      expect(MetaStatic.getOg().getImage()).toBe(imageUrl)
      expect(MetaStatic.getTwitter().getImage()).toBe(imageUrl)
    })

    it('should correctly handle canonical', () => {
      const url = 'https://example.com/canonical'
      MetaStatic.setCanonical(url)
      expect(MetaStatic.getCanonical()).toBe(url)
      expect(MetaStatic.getOg().getUrl()).toBe(url)
    })

    it('should correctly handle robots', () => {
      MetaStatic.setRobots(MetaRobots.noIndexNoFollow)
      expect(MetaStatic.getRobots()).toBe(MetaRobots.noIndexNoFollow)
    })

    it('should correctly handle author', () => {
      MetaStatic.setAuthor('John Doe')
      expect(MetaStatic.getAuthor()).toBe('John Doe')
    })

    it('should correctly handle site name', () => {
      MetaStatic.setSiteName('Static Site')
      expect(MetaStatic.getSiteName()).toBe('Static Site')
    })

    it('should correctly handle locale', () => {
      MetaStatic.setLocale('ru_RU')
      expect(MetaStatic.getLocale()).toBe('ru_RU')
    })

    it('should generate complete HTML', () => {
      MetaStatic.setTitle('HTML Title')
      MetaStatic.setDescription('HTML Description')

      const html = MetaStatic.html()
      expect(html).toContain('HTML Description')
      expect(html).toContain('og:title')
      expect(html).toContain('twitter:title')
    })

    it('should generate HTML title string', () => {
      MetaStatic.setTitle('Static Title')
      expect(MetaStatic.htmlTitle()).toBe('Static Title')
    })
  })

  describe('Method chaining', () => {
    it('should support chaining', () => {
      const result = MetaStatic
        .setTitle('Page')
        .setDescription('Desc')
        .setSuffix('Suffix')
        .setAuthor('Author')

      expect(result).toBe(MetaStatic)
      expect(MetaStatic.getTitle()).toBe('Page')
      expect(MetaStatic.getDescription()).toBe('Desc')
      expect(MetaStatic.getAuthor()).toBe('Author')
    })
  })
})
