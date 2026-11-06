import { describe, expect, it } from 'vitest'
import { getRequestHref } from '../getRequestHref'

describe('getRequestHref', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return full href including protocol, domain, path, query, and hash', () => {
      const request = new Request('https://dxtmisha.com/docs/api?page=2&sort=asc#section-1')
      expect(getRequestHref(request)).toBe('https://dxtmisha.com/docs/api?page=2&sort=asc#section-1')
    })

    it('should preserve custom port numbers in href', () => {
      const request = new Request('http://localhost:3000/v1/users?active=true')
      expect(getRequestHref(request)).toBe('http://localhost:3000/v1/users?active=true')
    })

    it('should handle IPv4 and IPv6 host addresses', () => {
      const ipv4Request = new Request('http://127.0.0.1:8080/health')
      const ipv6Request = new Request('http://[::1]:8080/health')

      expect(getRequestHref(ipv4Request)).toBe('http://127.0.0.1:8080/health')
      expect(getRequestHref(ipv6Request)).toBe('http://[::1]:8080/health')
    })
  })

  describe('Boundary values and URL normalization', () => {
    it('should normalize origin-only URLs with a trailing slash', () => {
      const request = new Request('https://example.com')
      expect(getRequestHref(request)).toBe('https://example.com/')
    })

    it('should resolve relative dot segments in the URL path', () => {
      const request = new Request('https://example.com/a/b/../c/./d?key=val')
      expect(getRequestHref(request)).toBe('https://example.com/a/c/d?key=val')
    })

    it('should omit default protocol ports (80 for http, 443 for https)', () => {
      const httpRequest = new Request('http://example.com:80/test')
      const httpsRequest = new Request('https://example.com:443/test')

      expect(getRequestHref(httpRequest)).toBe('http://example.com/test')
      expect(getRequestHref(httpsRequest)).toBe('https://example.com/test')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should percent-encode Cyrillic, Vietnamese, CJK, and emoji characters in path and query', () => {
      const request = new Request('https://example.com/каталог/tiếng-việt?q=你好&icon=🚀')
      const href = getRequestHref(request)

      expect(href).toBe(
        'https://example.com/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3/ti%E1%BA%BFng-vi%E1%BB%87t?q=%E4%BD%A0%E5%A5%BD&icon=%F0%9F%9A%80'
      )
      expect(decodeURIComponent(href)).toBe('https://example.com/каталог/tiếng-việt?q=你好&icon=🚀')
    })
  })

  describe('Error boundaries and determinism', () => {
    it('should throw TypeError when request contains an invalid URL', () => {
      const invalidRequest = { url: ':::invalid-url' } as Request
      expect(() => getRequestHref(invalidRequest)).toThrow(TypeError)
    })

    it('should be pure and deterministic across repeated calls', () => {
      const request = new Request('https://example.com/api/items?id=0')
      expect(getRequestHref(request)).toBe('https://example.com/api/items?id=0')
      expect(getRequestHref(request)).toBe('https://example.com/api/items?id=0')
    })
  })
})

