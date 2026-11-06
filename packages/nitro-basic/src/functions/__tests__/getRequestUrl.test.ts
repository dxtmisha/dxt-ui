import { describe, expect, it } from 'vitest'
import { getRequestUrl } from '../getRequestUrl'

describe('getRequestUrl', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should extract pathname excluding protocol, domain, query, and hash', () => {
      const request = new Request('https://dxtmisha.com/docs/api?query=1&filter=all#header')
      expect(getRequestUrl(request)).toBe('/docs/api')
    })

    it('should preserve leading and trailing slashes in pathname', () => {
      const request = new Request('http://localhost:3000/users/profile/')
      expect(getRequestUrl(request)).toBe('/users/profile/')
    })
  })

  describe('Boundary values and path normalization', () => {
    it('should return "/" for root origin URLs with or without trailing slash', () => {
      const withoutSlash = new Request('https://example.com')
      const withSlash = new Request('https://example.com/')
      const withQuery = new Request('https://example.com?search=test')

      expect(getRequestUrl(withoutSlash)).toBe('/')
      expect(getRequestUrl(withSlash)).toBe('/')
      expect(getRequestUrl(withQuery)).toBe('/')
    })

    it('should normalize relative dot segments in pathname', () => {
      const request = new Request('https://example.com/a/b/../c/./item.json')
      expect(getRequestUrl(request)).toBe('/a/c/item.json')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should return percent-encoded pathname for Cyrillic, Vietnamese, CJK, and emoji paths', () => {
      const request = new Request('https://example.com/привет/tiếng-việt/你好/🚀?a=1')
      const pathname = getRequestUrl(request)

      expect(pathname).toBe('/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82/ti%E1%BA%BFng-vi%E1%BB%87t/%E4%BD%A0%E5%A5%BD/%F0%9F%9A%80')
      expect(decodeURIComponent(pathname)).toBe('/привет/tiếng-việt/你好/🚀')
    })
  })

  describe('Error boundaries and determinism', () => {
    it('should throw TypeError when request.url is invalid', () => {
      const invalidRequest = { url: 'http://' } as Request
      expect(() => getRequestUrl(invalidRequest)).toThrow(TypeError)
    })

    it('should be pure and deterministic across calls', () => {
      const request = new Request('https://example.com/v2/catalog')
      expect(getRequestUrl(request)).toBe('/v2/catalog')
      expect(getRequestUrl(request)).toBe('/v2/catalog')
    })
  })
})

