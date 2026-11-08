import { describe, expect, it, vi } from 'vitest'
import { createSSRApp, inject } from 'vue'
import { NITRO_APP_COOKIE } from '../../types/nitroAppTypes'
import { initCookieStorage } from '../initCookieStorage'

describe('initCookieStorage', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should extract Cookie header, provide it via NITRO_APP_COOKIE, and return { cookie }', () => {
      const app = createSSRApp({ render: () => null })
      const provideSpy = vi.spyOn(app, 'provide')
      const request = new Request('https://example.com', {
        headers: {
          Cookie: 'session_id=abc123; theme=dark'
        }
      })

      const result = initCookieStorage(app, request)

      expect(result).toEqual({ cookie: 'session_id=abc123; theme=dark' })
      expect(provideSpy).toHaveBeenCalledTimes(1)
      expect(provideSpy).toHaveBeenCalledWith(NITRO_APP_COOKIE, 'session_id=abc123; theme=dark')

      app.runWithContext(() => {
        expect(inject(NITRO_APP_COOKIE)).toBe('session_id=abc123; theme=dark')
      })
    })

    it('should match lowercase "cookie" header case-insensitively', () => {
      const app = createSSRApp({ render: () => null })
      const request = new Request('https://example.com', {
        headers: {
          cookie: 'token=xyz987'
        }
      })

      const result = initCookieStorage(app, request)
      expect(result).toEqual({ cookie: 'token=xyz987' })
    })
  })

  describe('Empty and missing Cookie header boundaries', () => {
    it('should default to empty string when Cookie header is missing', () => {
      const app = createSSRApp({ render: () => null })
      const provideSpy = vi.spyOn(app, 'provide')
      const request = new Request('https://example.com')

      const result = initCookieStorage(app, request)

      expect(result).toEqual({ cookie: '' })
      expect(provideSpy).toHaveBeenCalledWith(NITRO_APP_COOKIE, '')

      app.runWithContext(() => {
        expect(inject(NITRO_APP_COOKIE)).toBe('')
      })
    })

    it('should return empty string when Cookie header is explicitly empty', () => {
      const app = createSSRApp({ render: () => null })
      const request = new Request('https://example.com', {
        headers: {
          Cookie: ''
        }
      })

      expect(initCookieStorage(app, request)).toEqual({ cookie: '' })
    })
  })

  describe('Multilingual and encoded cookie values', () => {
    it('should preserve URL-encoded Unicode and special characters in cookies', () => {
      const app = createSSRApp({ render: () => null })
      const encodedCookie = `city=${encodeURIComponent('Ханой / Hà Nội')}; flag=${encodeURIComponent('🇻🇳')}`
      const request = new Request('https://example.com', {
        headers: {
          Cookie: encodedCookie
        }
      })

      const result = initCookieStorage(app, request)
      expect(result.cookie).toBe(encodedCookie)
    })
  })
})
