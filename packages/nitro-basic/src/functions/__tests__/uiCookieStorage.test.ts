import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp } from 'vue'
import { CookieStorage, ServerStorage } from '@dxtmisha/functional-basic'
import { appContext } from '../initContext'
import { NITRO_API_HEADERS, NITRO_APP_COOKIE } from '../../types/nitroAppTypes'
import { setResponseCookie, uiCookieStorage } from '../uiCookieStorage'

describe('uiCookieStorage', () => {
  let storageRecord: Record<string, unknown>

  beforeEach(() => {
    storageRecord = {}
    ServerStorage.init(() => storageRecord)
    CookieStorage.reset()
  })

  afterEach(() => {
    appContext.unset()
    CookieStorage.reset()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize CookieStorage with getListenerRaw and setListener callbacks', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')

      uiCookieStorage()

      expect(initSpy).toHaveBeenCalledTimes(1)
      expect(initSpy).toHaveBeenCalledWith(
        undefined,
        expect.any(Function),
        expect.any(Function)
      )
    })

    it('should retrieve cookie string from Vue inject (NITRO_APP_COOKIE) when inside component context', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, getListenerRaw] = initSpy.mock.calls[0]!

      const app = createSSRApp({ render: () => null })
      app.provide(NITRO_APP_COOKIE, 'injected_cookie=1; lang=ru')

      app.runWithContext(() => {
        expect(getListenerRaw!()).toBe('injected_cookie=1; lang=ru')
      })
    })

    it('should fallback to appContext ("cookie") when outside Vue inject context', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, getListenerRaw] = initSpy.mock.calls[0]!

      appContext.call({ cookie: 'context_cookie=2; theme=light' }, () => {
        expect(getListenerRaw!()).toBe('context_cookie=2; theme=light')
      })
    })

    it('should prioritize Vue inject over appContext when both are present', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, getListenerRaw] = initSpy.mock.calls[0]!

      const app = createSSRApp({ render: () => null })
      app.provide(NITRO_APP_COOKIE, 'from_inject=true')

      appContext.call({ cookie: 'from_context=true' }, () => {
        app.runWithContext(() => {
          expect(getListenerRaw!()).toBe('from_inject=true')
        })
      })
    })

    it('should return empty string when neither Vue inject nor appContext has cookies', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, getListenerRaw] = initSpy.mock.calls[0]!

      expect(getListenerRaw!()).toBe('')
    })
  })

  describe('Response Set-Cookie header writing (Single cookie)', () => {
    it('should set "Set-Cookie" header when headers are available in appContext', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      const headers = new Headers()

      appContext.call({ headers }, () => {
        setListener!('token', 'abc', 'token=abc; Path=/; Max-Age=3600; SameSite=Lax')
      })

      expect(headers.get('Set-Cookie')).toBe('token=abc; Path=/; Max-Age=3600; SameSite=Lax')
      expect(headers.getSetCookie()).toEqual(['token=abc; Path=/; Max-Age=3600; SameSite=Lax'])
    })

    it('should set "Set-Cookie" header when headers are provided via Vue inject (NITRO_API_HEADERS)', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      const headers = new Headers()
      const app = createSSRApp({ render: () => null })
      app.provide(NITRO_API_HEADERS, headers)

      app.runWithContext(() => {
        setListener!('theme', 'dark', 'theme=dark; Path=/')
      })

      expect(headers.get('Set-Cookie')).toBe('theme=dark; Path=/')
      expect(headers.getSetCookie()).toEqual(['theme=dark; Path=/'])
    })

    it('should safely no-op without throwing when no headers context is active', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      expect(() => setListener!('theme', 'dark', 'theme=dark')).not.toThrow()
    })
  })

  describe('Multiple cookies support', () => {
    it('should append multiple cookies to headers instead of overwriting previous ones', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      const headers = new Headers()

      appContext.call({ headers }, () => {
        setListener!('cookie1', 'value1', 'cookie1=value1; Path=/')
        setListener!('cookie2', 'value2', 'cookie2=value2; Path=/')
        setListener!('cookie3', 'value3', 'cookie3=value3; Path=/')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(3)
      expect(setCookies).toEqual([
        'cookie1=value1; Path=/',
        'cookie2=value2; Path=/',
        'cookie3=value3; Path=/'
      ])
    })

    it('should support writing multiple cookies via CookieStorage.set() end-to-end', () => {
      uiCookieStorage()

      const headers = new Headers()

      appContext.call({ headers }, () => {
        CookieStorage.set('sessionId', 'sess_12345')
        CookieStorage.set('locale', 'ru')
        CookieStorage.set('isDark', true)
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(3)
      expect(setCookies[0]).toContain('sessionId=sess_12345')
      expect(setCookies[1]).toContain('locale=ru')
      expect(setCookies[2]).toContain('isDark=true')
    })

    it('should preserve preexisting non-cookie headers when setting multiple cookies', () => {
      uiCookieStorage()

      const headers = new Headers()
      headers.set('Content-Type', 'text/html; charset=UTF-8')
      headers.set('X-Custom-Trace', 'trace-987')

      appContext.call({ headers }, () => {
        CookieStorage.set('a', 'alpha')
        CookieStorage.set('b', 'beta')
      })

      expect(headers.get('Content-Type')).toBe('text/html; charset=UTF-8')
      expect(headers.get('X-Custom-Trace')).toBe('trace-987')
      expect(headers.getSetCookie()).toHaveLength(2)
    })

    it('should preserve preexisting Set-Cookie headers set by upstream handlers', () => {
      uiCookieStorage()

      const headers = new Headers()
      headers.append('Set-Cookie', 'upstream_session=abc; Path=/; HttpOnly')

      appContext.call({ headers }, () => {
        CookieStorage.set('ui_theme', 'dark')
        CookieStorage.set('ui_sidebar', 'collapsed')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toEqual([
        'upstream_session=abc; Path=/; HttpOnly',
        expect.stringContaining('ui_theme=dark'),
        expect.stringContaining('ui_sidebar=collapsed')
      ])
    })
  })

  describe('Updating and replacing cookies with the same name', () => {
    it('should update an existing cookie in headers with the new value rather than duplicating it', () => {
      uiCookieStorage()

      const headers = new Headers()

      appContext.call({ headers }, () => {
        CookieStorage.set('theme', 'light')
        expect(headers.getSetCookie()).toEqual([expect.stringContaining('theme=light')])

        CookieStorage.set('theme', 'dark')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(1)
      expect(setCookies[0]).toContain('theme=dark')
      expect(setCookies[0]).not.toContain('theme=light')
    })

    it('should preserve other cookies and their order when updating one specific cookie', () => {
      uiCookieStorage()

      const headers = new Headers()

      appContext.call({ headers }, () => {
        CookieStorage.set('first', '1')
        CookieStorage.set('second', '2')
        CookieStorage.set('third', '3')

        // Update 'second'
        CookieStorage.set('second', '2_updated')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(3)
      expect(setCookies[0]).toContain('first=1')
      expect(setCookies[1]).toContain('second=2_updated')
      expect(setCookies[2]).toContain('third=3')
    })

    it('should deduplicate when multiple occurrences of the same key were present in headers', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      const headers = new Headers()
      headers.append('Set-Cookie', 'token=stale_1; Path=/')
      headers.append('Set-Cookie', 'other=foo; Path=/')
      headers.append('Set-Cookie', 'token=stale_2; Path=/')

      appContext.call({ headers }, () => {
        setListener!('token', 'fresh', 'token=fresh; Path=/')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toEqual([
        'token=fresh; Path=/',
        'other=foo; Path=/'
      ])
    })
  })

  describe('Cookie removal and deletion', () => {
    it('should replace an existing cookie with a deletion cookie (Max-Age=-1) when CookieStorage.remove is called', () => {
      uiCookieStorage()

      const headers = new Headers()

      appContext.call({ headers }, () => {
        CookieStorage.set('auth', 'token123')
        CookieStorage.set('theme', 'dark')

        CookieStorage.remove('auth')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(2)
      expect(setCookies[0]).toContain('auth=;')
      expect(setCookies[0]).toContain('Max-Age=-1')
      expect(setCookies[1]).toContain('theme=dark')
    })

    it('should append a deletion cookie if removing a cookie that was not yet in headers', () => {
      uiCookieStorage()

      const headers = new Headers()

      appContext.call({ headers }, () => {
        CookieStorage.remove('clientCookie')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(1)
      expect(setCookies[0]).toContain('clientCookie=;')
      expect(setCookies[0]).toContain('Max-Age=-1')
    })
  })

  describe('Boundary values, prefix isolation, and special characters', () => {
    it('should distinguish between keys where one is a prefix of another', () => {
      uiCookieStorage()

      const headers = new Headers()

      appContext.call({ headers }, () => {
        CookieStorage.set('user', 'alex')
        CookieStorage.set('user_id', '42')
        CookieStorage.set('user_name', 'Alexander')

        // Updating 'user' should not alter 'user_id' or 'user_name'
        CookieStorage.set('user', 'bob')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(3)
      expect(setCookies[0]).toContain('user=bob')
      expect(setCookies[1]).toContain('user_id=42')
      expect(setCookies[2]).toContain('user_name=Alexander')
    })

    it('should handle URL-encoded and special characters in cookie key and value', () => {
      uiCookieStorage()

      const headers = new Headers()

      appContext.call({ headers }, () => {
        CookieStorage.set('special/key', 'val=ue with spaces & symbols')
        CookieStorage.set('another@key', 'special#chars')

        // Update 'special/key'
        CookieStorage.set('special/key', 'updated_value')
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(2)
      expect(setCookies[0]).toContain('special%2Fkey=updated_value')
      expect(setCookies[1]).toContain('another%40key=')
    })

    it('should handle numeric zero, boolean false, and empty string correctly', () => {
      uiCookieStorage()

      const headers = new Headers()

      appContext.call({ headers }, () => {
        CookieStorage.set('zero_count', 0)
        CookieStorage.set('is_disabled', false)
      })

      const setCookies = headers.getSetCookie()
      expect(setCookies).toHaveLength(2)
      expect(setCookies[0]).toContain('zero_count=0')
      expect(setCookies[1]).toContain('is_disabled=false')
    })

    it('should fallback to headers.append when headers.getSetCookie is not a function', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      const fakeHeaders = {
        append: vi.fn(),
        set: vi.fn()
      } as unknown as Headers

      appContext.call({ headers: fakeHeaders }, () => {
        setListener!('cookieA', '1', 'cookieA=1; Path=/')
        setListener!('cookieB', '2', 'cookieB=2; Path=/')
      })

      expect(fakeHeaders.append).toHaveBeenCalledTimes(2)
      expect(fakeHeaders.append).toHaveBeenNthCalledWith(1, 'Set-Cookie', 'cookieA=1; Path=/')
      expect(fakeHeaders.append).toHaveBeenNthCalledWith(2, 'Set-Cookie', 'cookieB=2; Path=/')
      expect(fakeHeaders.set).not.toHaveBeenCalled()
    })

    it('should fallback to headers.set when neither getSetCookie nor append is available', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      const fakeHeaders = {
        set: vi.fn()
      } as unknown as Headers

      appContext.call({ headers: fakeHeaders }, () => {
        setListener!('cookieA', '1', 'cookieA=1; Path=/')
      })

      expect(fakeHeaders.set).toHaveBeenCalledTimes(1)
      expect(fakeHeaders.set).toHaveBeenCalledWith('Set-Cookie', 'cookieA=1; Path=/')
    })
  })

  describe('setResponseCookie standalone method', () => {
    it('should directly append multiple cookies into standard Headers instance', () => {
      const headers = new Headers()

      setResponseCookie(headers, 'lang', 'lang=en; Path=/')
      setResponseCookie(headers, 'theme', 'theme=dark; Path=/')

      expect(headers.getSetCookie()).toEqual([
        'lang=en; Path=/',
        'theme=dark; Path=/'
      ])
    })

    it('should replace an existing cookie on the exact position without affecting others', () => {
      const headers = new Headers()

      setResponseCookie(headers, 'a', 'a=1; Path=/')
      setResponseCookie(headers, 'b', 'b=2; Path=/')
      setResponseCookie(headers, 'c', 'c=3; Path=/')

      setResponseCookie(headers, 'b', 'b=2_updated; Path=/')

      expect(headers.getSetCookie()).toEqual([
        'a=1; Path=/',
        'b=2_updated; Path=/',
        'c=3; Path=/'
      ])
    })
  })
})
