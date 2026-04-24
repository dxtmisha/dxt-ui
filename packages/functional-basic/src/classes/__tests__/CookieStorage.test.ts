/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { CookieStorage } from '../CookieStorage'
import { CookieBlock } from '../CookieBlock'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as isDomDataModule from '../../functions/isDomData'

vi.mock('../../functions/isDomRuntime')
vi.mock('../../functions/isDomData')

describe('CookieStorage', () => {
  let cookieSpy: any

  beforeEach(() => {
    vi.clearAllMocks()
    CookieStorage.reset()
    ServerStorage.reset()
    CookieBlock.set(false)
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

      CookieStorage.init(get, undefined, set)

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

      CookieStorage.init(get, undefined, set)

      const result = CookieStorage.get('any-key')

      expect(get).toHaveBeenCalledWith('any-key')
      expect(result).toBe('from-listener')

      CookieStorage.set('new-key', 'new-value', { age: 3600 })
      expect(set).toHaveBeenCalledWith('new-key', 'new-value', expect.any(String), { age: 3600 })
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

    it('should filter out non-string arguments', () => {
      CookieStorage.set('key', 'val', {
        arguments: ['Secure', 123, 'Path=/', null as any, undefined as any]
      })
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Secure'))
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Path=/'))
      // Non-string arguments should be filtered out
    })

    it('should handle defaultValue with side effect', () => {
      const result = CookieStorage.get('newKey', 'defaultValue')
      expect(result).toBe('defaultValue')
      expect(CookieStorage.get('newKey')).toBe('defaultValue')
    })

    it('should transform values in get', () => {
      CookieStorage.set('boolKey', 'true')
      expect(CookieStorage.get('boolKey')).toBe(true)

      CookieStorage.set('numKey', '123')
      expect(CookieStorage.get('numKey')).toBe(123)
    })

    it('should return value but not persist if CookieBlock is active', () => {
      // Clear previous cookies to avoid interference
      cookieSpy.mockClear()
      CookieBlock.set(true)

      const result = CookieStorage.set('blockedKey', 'blockedValue')

      expect(result).toBe('blockedValue')
      expect(CookieStorage.get('blockedKey')).toBeUndefined()

      // Check that no new cookie was set (only cleanup calls from previous tests)
      const blockedCalls = cookieSpy.mock.calls.filter((call: any) =>
        call[0].includes('blockedKey')
      )
      expect(blockedCalls.length).toBe(0)
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
      CookieStorage.init(get, undefined, vi.fn())
      CookieStorage.set('key', 'val')

      CookieStorage.reset()

      expect((CookieStorage as any).getListener).toBeUndefined()
      expect((CookieStorage as any).setListener).toBeUndefined()
      expect(CookieStorage.get('key')).toBeUndefined()
    })
  })

  describe('init functionality', () => {
    it('should use custom get listener for all get operations', () => {
      const customGet = vi.fn()
        .mockReturnValueOnce('first')
        .mockReturnValueOnce('second')
      const customSet = vi.fn()

      CookieStorage.init(customGet, undefined, customSet)

      const result1 = CookieStorage.get('key1')
      const result2 = CookieStorage.get('key2')

      expect(customGet).toHaveBeenCalledTimes(2)
      expect(customGet).toHaveBeenCalledWith('key1')
      expect(customGet).toHaveBeenCalledWith('key2')
      expect(result1).toBe('first')
      expect(result2).toBe('second')
    })

    it('should use custom set listener for all set operations', () => {
      const customGet = vi.fn()
      const customSet = vi.fn()

      CookieStorage.init(customGet, undefined, customSet)

      CookieStorage.set('key1', 'value1', { age: 100 })
      CookieStorage.set('key2', 'value2', { sameSite: 'lax' })

      expect(customSet).toHaveBeenCalledTimes(2)
      expect(customSet).toHaveBeenCalledWith('key1', 'value1', expect.any(String), { age: 100 })
      expect(customSet).toHaveBeenCalledWith('key2', 'value2', expect.any(String), { sameSite: 'lax' })
    })

    it('should override previous listeners when init is called again', () => {
      const firstGet = vi.fn().mockReturnValue('first')
      const firstSet = vi.fn()
      const secondGet = vi.fn().mockReturnValue('second')
      const secondSet = vi.fn()

      CookieStorage.init(firstGet, undefined, firstSet)
      expect(CookieStorage.get('key')).toBe('first')

      CookieStorage.init(secondGet, undefined, secondSet)
      expect(CookieStorage.get('key')).toBe('second')

      expect(firstGet).toHaveBeenCalledTimes(1)
      expect(secondGet).toHaveBeenCalledTimes(1)
    })
  })

  describe('arguments as objects', () => {
    it('should handle object arguments correctly', () => {
      CookieStorage.set('key', 'val', {
        arguments: {
          Path: '/',
          Secure: '',
          Domain: '.example.com'
        }
      })

      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Path=/'))
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Secure'))
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Domain=.example.com'))
    })

    it('should convert object values to strings', () => {
      CookieStorage.set('key', 'val', {
        arguments: {
          'Max-Age': 3600,
          'Priority': 'High'
        }
      })

      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Max-Age=3600'))
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Priority=High'))
    })
  })

  describe('different data types', () => {
    it('should handle numbers', () => {
      CookieStorage.set('numKey', 123)
      expect(CookieStorage.get('numKey')).toBe(123)
    })

    it('should handle booleans', () => {
      CookieStorage.set('boolKey', true)
      expect(CookieStorage.get('boolKey')).toBe(true)

      CookieStorage.set('boolKey2', false)
      expect(CookieStorage.get('boolKey2')).toBe(false)
    })

    it('should handle objects', () => {
      const obj = { name: 'test', value: 42 }
      CookieStorage.set('objKey', obj)
      expect(CookieStorage.get('objKey')).toEqual(obj)
    })

    it('should handle arrays', () => {
      const arr = [1, 2, 3]
      CookieStorage.set('arrKey', arr)
      expect(CookieStorage.get('arrKey')).toEqual(arr)
    })
  })

  describe('functional values', () => {
    it('should execute function for set value', () => {
      const fn = vi.fn().mockReturnValue('computed')
      CookieStorage.set('funcKey', fn)

      expect(fn).toHaveBeenCalled()
      expect(CookieStorage.get('funcKey')).toBe('computed')
    })

    it('should execute function for default value in get', () => {
      const fn = vi.fn().mockReturnValue('default')
      const result = CookieStorage.get('newFuncKey', fn)

      expect(fn).toHaveBeenCalled()
      expect(result).toBe('default')
    })

    it('should not execute function if value exists', () => {
      CookieStorage.set('existingKey', 'existing')
      const fn = vi.fn().mockReturnValue('should not run')

      const result = CookieStorage.get('existingKey', fn)

      expect(fn).not.toHaveBeenCalled()
      expect(result).toBe('existing')
    })
  })

  describe('update method', () => {
    it('should clear server storage and reinitialize', () => {
      CookieStorage.set('key1', 'val1')
      expect(CookieStorage.get('key1')).toBe('val1')

      // Mock document.cookie with new value
      cookieSpy.mockRestore()
      document.cookie = 'key2=val2'

      CookieStorage.update()

      // After update, should be able to read new cookie
      expect(CookieStorage.get('key2')).toBe('val2')
    })

    it('should not update if not in DOM runtime', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)

      CookieStorage.set('ssrKey', 'ssrVal')
      const beforeUpdate = CookieStorage.get('ssrKey')

      CookieStorage.update()

      const afterUpdate = CookieStorage.get('ssrKey')
      expect(beforeUpdate).toBe(afterUpdate)
    })
  })

  describe('getListenerRaw', () => {
    it('should use getListenerRaw to initialize items when in non-DOM environment', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      const raw = 'rawKey=rawValue; otherKey=otherValue'
      const getRaw = vi.fn().mockReturnValue(raw)

      CookieStorage.init(undefined, getRaw)

      expect(CookieStorage.get('rawKey')).toBe('rawValue')
      expect(CookieStorage.get('otherKey')).toBe('otherValue')
      expect(getRaw).toHaveBeenCalled()
    })

    it('should ignore getListenerRaw if hasDom is true', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      vi.mocked(isDomDataModule.isDomData).mockReturnValue(false)
      document.cookie = 'domKey=domValue'
      const getRaw = vi.fn().mockReturnValue('rawKey=rawValue')

      CookieStorage.init(undefined, getRaw)

      expect(CookieStorage.get('domKey')).toBe('domValue')
      expect(CookieStorage.get('rawKey')).toBeUndefined()
    })
  })
})
