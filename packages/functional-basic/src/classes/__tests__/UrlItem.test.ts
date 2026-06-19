import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UrlItem } from '../UrlItem'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('UrlItem', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(ServerStorage, 'get').mockImplementation((_, cb) => cb ? cb() : undefined)
  })

  describe('Constructor and Set Method', () => {
    it('should parse absolute URL', () => {
      const url = new UrlItem('https://example.com/path?query=1#hash')
      expect(url.href).toBe('https://example.com/path?query=1#hash')
      expect(url.protocol).toBe('https:')
      expect(url.hostname).toBe('example.com')
      expect(url.pathname).toBe('/path')
      expect(url.search).toBe('?query=1')
      expect(url.hash).toBe('#hash')
    })

    it('should wrap a standard URL object', () => {
      const stdUrl = new URL('https://example.com/path')
      const url = new UrlItem(stdUrl)
      expect(url.href).toBe('https://example.com/path')
    })

    it('should fallback to window.location.href in browser runtime', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      const originalWindow = globalThis.window

      globalThis.window = {
        location: {
          href: 'https://browser.com/current-page',
          origin: 'https://browser.com'
        },
        document: {}
      } as any

      try {
        const url = new UrlItem('relative-path')
        expect(url.href).toBe('https://browser.com/relative-path')
      } finally {
        globalThis.window = originalWindow
      }
    })

    it('should fallback to http://localhost in SSR runtime', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const url = new UrlItem('relative-path')
      expect(url.href).toBe('http://localhost/relative-path')
    })

    it('should update the URL when calling set()', () => {
      const url = new UrlItem('https://example.com/first')
      expect(url.pathname).toBe('/first')

      url.set('https://another.org/second?query=2')
      expect(url.hostname).toBe('another.org')
      expect(url.pathname).toBe('/second')
      expect(url.search).toBe('?query=2')
    })
  })

  describe('Getters', () => {
    it('should return correct standard components', () => {
      const url = new UrlItem('https://user:pass@example.com:8080/path?query=1#hash')

      expect(url.username).toBe('user')
      expect(url.password).toBe('pass')
      expect(url.host).toBe('example.com:8080')
      expect(url.hostname).toBe('example.com')
      expect(url.port).toBe('8080')
      expect(url.origin).toBe('https://example.com:8080')
      expect(url.pathname).toBe('/path')
      expect(url.search).toBe('?query=1')
      expect(url.protocol).toBe('https:')
      expect(url.hash).toBe('#hash')
      expect(url.searchParams.get('query')).toBe('1')
    })
  })

  describe('getInstance', () => {
    it('should return a request-isolated UrlItem instance via ServerStorage', () => {
      const storageSpy = vi.spyOn(ServerStorage, 'get')
      const instance = UrlItem.getInstance()
      instance.set('https://example.com')
      expect(instance).toBeInstanceOf(UrlItem)
      expect(instance.href).toBe('https://example.com/')
      expect(storageSpy).toHaveBeenCalledWith('__ui:url-item__', expect.any(Function))
    })

    it('should update the URL if passed on subsequent calls', () => {
      const firstInstance = UrlItem.getInstance()
      firstInstance.set('https://example.com/first')
      expect(firstInstance.pathname).toBe('/first')

      // Mock ServerStorage to return the already created instance
      vi.spyOn(ServerStorage, 'get').mockReturnValue(firstInstance)

      const secondInstance = UrlItem.getInstance()
      secondInstance.set('https://example.com/second')
      expect(secondInstance).toBe(firstInstance)
      expect(secondInstance.pathname).toBe('/second')
    })
  })

  describe('Serialization', () => {
    it('should support toString and toJSON', () => {
      const urlString = 'https://example.com/path'
      const url = new UrlItem(urlString)
      expect(url.toString()).toBe(urlString)
      expect(url.toJSON()).toBe(urlString)
      expect(JSON.stringify(url)).toBe(`"${urlString}"`)
    })
  })
})
