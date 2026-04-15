/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { CookieStorage } from '../CookieStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as isDomDataModule from '../../functions/isDomData'

vi.mock('../../functions/isDomRuntime')
vi.mock('../../functions/isDomData')

describe('CookieStorage', () => {
  let cookieSpy: any

  beforeEach(() => {
    vi.clearAllMocks()
    CookieStorage.reset()
    vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
    vi.mocked(isDomDataModule.isDomData).mockReturnValue(false)

    // Clear cookies in jsdom
    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf('=')
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
      }
      cookieSpy = vi.spyOn(document, 'cookie', 'set')
    }
  })

  describe('init', () => {
    it('should initialize with 2 listeners', () => {
      const get = vi.fn()
      const set = vi.fn()

      CookieStorage.init(get, set)

      expect((CookieStorage as any).getListener).toBe(get)
      expect((CookieStorage as any).setListener).toBe(set)
    })
  })

  describe('get and set', () => {
    it('should store and retrieve data in memory when no listeners are provided', () => {
      CookieStorage.set('testKey', 'testValue')
      expect(CookieStorage.get('testKey')).toBe('testValue')
    })

    it('should return undefined for non-existent key', () => {
      expect(CookieStorage.get('missing')).toBeUndefined()
    })

    it('should use listeners when provided', () => {
      const get = vi.fn().mockReturnValue('from-listener')
      const set = vi.fn()

      CookieStorage.init(get, set)

      const result = CookieStorage.get('any-key')

      expect(get).toHaveBeenCalledWith('any-key')
      expect(result).toBe('from-listener')

      CookieStorage.set('new-key', 'new-value', { age: 3600 })
      expect(set).toHaveBeenCalledWith('new-key', 'new-value', { age: 3600 })
    })

    it('should set default max-age if not provided', () => {
      CookieStorage.set('key', 'val')
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('max-age=604800')) // 7 days in seconds
    })

    it('should use provided options', () => {
      CookieStorage.set('key', 'val', { sameSite: 'lax', arguments: ['secure'] })
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('SameSite=lax'))
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('secure'))
    })

    it('should handle defaultValue with side effect', () => {
      const result = CookieStorage.get('newKey', 'defaultValue')
      expect(result).toBe('defaultValue')
      expect(CookieStorage.get('newKey')).toBe('defaultValue')
    })
  })

  describe('remove', () => {
    it('should remove item by setting empty value and negative max-age', () => {
      CookieStorage.set('key', 'val')
      expect(CookieStorage.get('key')).toBe('val')

      CookieStorage.remove('key')

      // Memory check
      expect(CookieStorage.get('key')).toBeUndefined()
      // JS DOM check
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('max-age=-1'))
    })
  })

  describe('update', () => {
    it('should parse document.cookie into memory using strSplit', () => {
      // Manual cookie setting for test (jsdom style)
      cookieSpy.mockRestore() // restore to actually set cookies
      document.cookie = 'key1=val1'
      document.cookie = 'key2=val=with=equals'

      CookieStorage.update()

      expect(CookieStorage.get('key1')).toBe('val1')
      expect(CookieStorage.get('key2')).toBe('val=with=equals')
    })
  })

  describe('SSR / Non-DOM environment', () => {
    it('should not access document.cookie if hasDom is false', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)

      CookieStorage.set('ssrKey', 'ssrVal')
      expect(CookieStorage.get('ssrKey')).toBe('ssrVal')
      // In non-dom it shouldn't be in document.cookie
      expect(cookieSpy).not.toHaveBeenCalled()
    })
  })

  describe('reset', () => {
    it('should clear all items and listeners', () => {
      const get = vi.fn()
      CookieStorage.init(get, vi.fn())
      CookieStorage.set('key', 'val')

      CookieStorage.reset()

      expect((CookieStorage as any).getListener).toBeUndefined()
      expect((CookieStorage as any).setListener).toBeUndefined()
      expect(CookieStorage.get('key')).toBeUndefined()
    })
  })
})
