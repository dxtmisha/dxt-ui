import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UrlItem } from '../UrlItem'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('UrlItem', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(ServerStorage, 'get').mockImplementation((_, defaultValue) => {
      return typeof defaultValue === 'function' ? defaultValue() : undefined
    })
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
      const standardUrl = new URL('https://example.com/path')
      const url = new UrlItem(standardUrl)
      expect(url.href).toBe('https://example.com/path')
    })

    it('should fallback to window.location.href in browser runtime when url is omitted or relative', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      const originalWindow = globalThis.window

      globalThis.window = {
        location: {
          href: 'https://browser.com/current-page',
          origin: 'https://browser.com'
        },
        document: {}
      } as unknown as Window & typeof globalThis

      try {
        const defaultUrl = new UrlItem()
        expect(defaultUrl.href).toBe('https://browser.com/current-page')

        const relativeUrl = new UrlItem('relative-path')
        expect(relativeUrl.href).toBe('https://browser.com/relative-path')
      } finally {
        globalThis.window = originalWindow
      }
    })

    it('should fallback to http://localhost in SSR runtime when url is omitted or relative', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const emptyUrl = new UrlItem()
      expect(emptyUrl.href).toBe('http://localhost/')

      const relativeUrl = new UrlItem('relative-path')
      expect(relativeUrl.href).toBe('http://localhost/relative-path')
    })

    it('should update the URL when calling set()', () => {
      const url = new UrlItem('https://example.com/first')
      expect(url.pathname).toBe('/first')

      const returnValue = url.set('https://another.org/second?query=2')
      expect(returnValue).toBe(url)
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

      vi.spyOn(ServerStorage, 'get').mockReturnValue(firstInstance)

      const secondInstance = UrlItem.getInstance()
      secondInstance.set('https://example.com/second')
      expect(secondInstance).toBe(firstInstance)
      expect(secondInstance.pathname).toBe('/second')
    })
  })

  describe('Parameter Methods', () => {
    it('should correctly check, get, set, and delete query parameters', () => {
      const url = new UrlItem('https://example.com/path?initial=1')

      expect(url.hasParam('initial')).toBe(true)
      expect(url.hasParam('not-found')).toBe(false)

      expect(url.getParam('initial')).toBe('1')
      expect(url.getParam('not-found')).toBeUndefined()

      expect(url.setParam('new', 'value')).toBe(url)
      expect(url.getParam('new')).toBe('value')
      expect(url.href).toBe('https://example.com/path?initial=1&new=value')

      expect(url.deleteParam('initial')).toBe(url)
      expect(url.hasParam('initial')).toBe(false)
      expect(url.href).toBe('https://example.com/path?new=value')

      const params = url.getParams()
      expect(params).toEqual({ new: 'value' })

      expect(url.setParams({ alpha: 1, beta: 'two', gamma: '', delta: null, epsilon: undefined })).toBe(url)
      expect(url.getParams()).toEqual({ alpha: 1, beta: 'two' })
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
