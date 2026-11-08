import { describe, expect, it } from 'vitest'
import { getRequestOrigin } from '../getRequestOrigin'

describe('getRequestOrigin', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should extract protocol and domain while stripping path, query, and hash', () => {
      const request = new Request('https://dxtmisha.com/docs/api?query=1#top')
      expect(getRequestOrigin(request)).toBe('https://dxtmisha.com')
    })

    it('should include non-standard port numbers in origin', () => {
      const request = new Request('http://localhost:3000/api/v1/users')
      expect(getRequestOrigin(request)).toBe('http://localhost:3000')
    })

    it('should handle subdomains, IPv4, and IPv6 origins', () => {
      const subRequest = new Request('https://api.staging.example.co.uk/status')
      const ipv4Request = new Request('http://192.168.1.10:9000/admin')
      const ipv6Request = new Request('http://[::1]:5173/index.html')

      expect(getRequestOrigin(subRequest)).toBe('https://api.staging.example.co.uk')
      expect(getRequestOrigin(ipv4Request)).toBe('http://192.168.1.10:9000')
      expect(getRequestOrigin(ipv6Request)).toBe('http://[::1]:5173')
    })
  })

  describe('Boundary values and default ports', () => {
    it('should handle root URL without path', () => {
      const request = new Request('https://example.com')
      expect(getRequestOrigin(request)).toBe('https://example.com')
    })

    it('should strip default ports 80 for http and 443 for https', () => {
      const httpRequest = new Request('http://example.com:80/path')
      const httpsRequest = new Request('https://example.com:443/path')

      expect(getRequestOrigin(httpRequest)).toBe('http://example.com')
      expect(getRequestOrigin(httpsRequest)).toBe('https://example.com')
    })

    it('should preserve port 80 on https and port 443 on http', () => {
      const httpsPort80 = new Request('https://example.com:80/path')
      const httpPort443 = new Request('http://example.com:443/path')

      expect(getRequestOrigin(httpsPort80)).toBe('https://example.com:80')
      expect(getRequestOrigin(httpPort443)).toBe('http://example.com:443')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should normalize IDN (internationalized domain names) to Punycode origin', () => {
      const request = new Request('https://пример.рф/страница?тест=1')
      expect(getRequestOrigin(request)).toBe('https://xn--e1afmkfd.xn--p1ai')
    })
  })

  describe('Error boundaries and determinism', () => {
    it('should throw TypeError when request.url is malformed', () => {
      const invalidRequest = { url: 'not_a_valid_url' } as Request
      expect(() => getRequestOrigin(invalidRequest)).toThrow(TypeError)
    })

    it('should return consistent results across multiple invocations', () => {
      const request = new Request('https://example.com:8443/test')
      expect(getRequestOrigin(request)).toBe('https://example.com:8443')
      expect(getRequestOrigin(request)).toBe('https://example.com:8443')
    })
  })
})
