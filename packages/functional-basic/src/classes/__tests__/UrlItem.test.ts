import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UrlItem } from '../UrlItem'
import { ServerStorage } from '../ServerStorage'
import { ErrorCenter } from '../ErrorCenter'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('UrlItem', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
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

    it('should fall back safely without throwing when an invalid URL string or null is provided', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const nullUrl = new UrlItem(null)
      expect(nullUrl.href).toBe('http://localhost/')

      const invalidProtocolUrl = new UrlItem('http://')
      expect(invalidProtocolUrl.href).toBe('http://localhost/')

      const invalidBracketUrl = new UrlItem('http://[invalid]')
      expect(invalidBracketUrl.href).toBe('http://localhost/')
      expect(ErrorCenter.on).toHaveBeenCalledTimes(2)
      expect(ErrorCenter.on).toHaveBeenCalledWith({
        group: 'transformation',
        code: 'error',
        details: { operation: 'UrlItem.set', stage: 'input', errorName: 'TypeError' }
      })
    })

    it('reports URL errors without including credentials from the input', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const input = 'http://user:example-password@[invalid]'

      expect(new UrlItem(input).href).toBe('http://localhost/')
      const diagnostics = JSON.stringify(vi.mocked(ErrorCenter.on).mock.calls)
      expect(diagnostics).toContain('TypeError')
      expect(diagnostics).not.toContain(input)
      expect(diagnostics).not.toContain('example-password')
    })

    it('reports both a rejected input and an invalid browser fallback before using localhost', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
      const originalWindow = globalThis.window
      globalThis.window = {
        location: { href: 'http://', origin: 'http://' }
      } as unknown as Window & typeof globalThis

      try {
        expect(new UrlItem('http://[invalid]').href).toBe('http://localhost/')
        expect(ErrorCenter.on).toHaveBeenCalledTimes(2)
        expect(ErrorCenter.on).toHaveBeenNthCalledWith(1, {
          group: 'transformation',
          code: 'error',
          details: { operation: 'UrlItem.set', stage: 'input', errorName: 'TypeError' }
        })
        expect(ErrorCenter.on).toHaveBeenNthCalledWith(2, {
          group: 'transformation',
          code: 'error',
          details: { operation: 'UrlItem.set', stage: 'fallback', errorName: 'TypeError' }
        })
      } finally {
        globalThis.window = originalWindow
      }
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

      expect(url.setParam('count', 42).setParam('enabled', true)).toBe(url)
      expect(url.getParams()).toEqual({ alpha: 1, beta: 'two', count: 42, enabled: true })
    })

    it('should ignore prototype keys (__proto__, constructor, prototype) in getParams()', () => {
      const url = new UrlItem('https://example.com/path?__proto__={"polluted":true}&constructor=bad&prototype=bad&safe=1')
      const params = url.getParams()

      expect(params).toEqual({ safe: 1 })
      expect(Object.prototype.hasOwnProperty.call(params, '__proto__')).toBe(false)
      expect(Object.prototype.hasOwnProperty.call(params, 'constructor')).toBe(false)
      expect(Object.prototype.hasOwnProperty.call(params, 'prototype')).toBe(false)
      expect((params as Record<string, unknown>).polluted).toBeUndefined()
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
