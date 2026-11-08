import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp } from 'vue'
import { CookieStorage } from '@dxtmisha/functional-basic'
import { appContext } from '../initContext'
import { NITRO_API_HEADERS, NITRO_APP_COOKIE } from '../../types/nitroAppTypes'
import { uiCookieStorage } from '../uiCookieStorage'

describe('uiCookieStorage', () => {
  afterEach(() => {
    appContext.unset()
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

  describe('Response Set-Cookie header writing (setListener)', () => {
    it('should set "Set-Cookie" header when headers are available in appContext', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      const headers = new Headers()

      appContext.call({ headers }, () => {
        setListener!('token', 'abc', 'token=abc; Path=/; Max-Age=3600; SameSite=Lax')
      })

      expect(headers.get('Set-Cookie')).toBe('token=abc; Path=/; Max-Age=3600; SameSite=Lax')
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
    })

    it('should safely no-op without throwing when no headers context is active', () => {
      const initSpy = vi.spyOn(CookieStorage, 'init')
      uiCookieStorage()
      const [, , setListener] = initSpy.mock.calls[0]!

      expect(() => setListener!('theme', 'dark', 'theme=dark')).not.toThrow()
    })
  })
})
