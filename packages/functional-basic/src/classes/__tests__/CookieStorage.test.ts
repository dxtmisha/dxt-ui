/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi, type MockInstance } from 'vitest'
import { CookieStorage, type CookieOptions } from '../CookieStorage'
import { CookieBlock } from '../CookieBlock'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as isDomDataModule from '../../functions/isDomData'

vi.mock('../../functions/isDomRuntime')
vi.mock('../../functions/isDomData')

describe('CookieStorage', () => {
  let cookieSpy: MockInstance<(value: string) => void>

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
    vi.mocked(isDomDataModule.isDomData).mockReturnValue(false)
    ServerStorage.setErrorStatus(true)
    ServerStorage.reset()
    CookieStorage.reset()
    CookieBlock.set(false)

    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';')
      for (let index = 0; index < cookies.length; index++) {
        const cookie = cookies[index]
        if (!cookie) {
          continue
        }
        const equalsPosition = cookie.indexOf('=')
        const name = equalsPosition > -1 ? cookie.substring(0, equalsPosition).trim() : cookie.trim()
        if (name) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
        }
      }
      cookieSpy = vi.spyOn(document, 'cookie', 'set')
    }
  })

  describe('init', () => {
    it('should initialize with custom listeners', () => {
      const getListener = vi.fn()
      const getListenerRaw = vi.fn().mockReturnValue('')
      const setListener = vi.fn()

      CookieStorage.init(getListener, getListenerRaw, setListener)

      // @ts-expect-error: intentionally testing protected static listener properties
      expect(CookieStorage.getListener).toBe(getListener)
      // @ts-expect-error: intentionally testing protected static listener properties
      expect(CookieStorage.getListenerRaw).toBe(getListenerRaw)
      // @ts-expect-error: intentionally testing protected static listener properties
      expect(CookieStorage.setListener).toBe(setListener)
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
      const getListener = vi.fn().mockReturnValue('from-listener')
      const setListener = vi.fn()

      CookieStorage.init(getListener, undefined, setListener)

      const result = CookieStorage.get('any-key')

      expect(getListener).toHaveBeenCalledWith('any-key')
      expect(result).toBe('from-listener')

      CookieStorage.set('new-key', 'new-value', { age: 3600 })
      expect(setListener).toHaveBeenCalledWith(
        'new-key',
        'new-value',
        'new-key=new-value; Max-Age=3600; SameSite=Strict; Path=/',
        { age: 3600 }
      )
    })

    it('should set default Max-Age (7 days = 604800s), SameSite=Strict, and Path=/ if not provided', () => {
      CookieStorage.set('key', 'value')
      expect(cookieSpy).toHaveBeenCalledWith('key=value; Max-Age=604800; SameSite=Strict; Path=/')
    })

    it('should use provided options including sameSite and arguments array', () => {
      CookieStorage.set('key', 'value', { sameSite: 'lax', arguments: ['Secure', 'CustomFlag'] })
      expect(cookieSpy).toHaveBeenCalledWith(
        'key=value; Max-Age=604800; SameSite=lax; Path=/; Secure; CustomFlag'
      )
    })

    it('should format all cookie options (path, domain, secure, httpOnly, partitioned) with literal Path=/ without %2F', () => {
      CookieStorage.set('key', 'value', {
        path: '/custom/subpath',
        domain: 'example.com',
        secure: true,
        httpOnly: true,
        partitioned: true
      })

      expect(cookieSpy).toHaveBeenCalledWith(
        'key=value; Max-Age=604800; SameSite=Strict; Path=/custom/subpath; Domain=example.com; Secure; HttpOnly; Partitioned'
      )
    })

    it('should handle empty string in set by setting in-memory value to undefined and Max-Age=-1', () => {
      CookieStorage.set('emptyKey', 'initial')
      expect(CookieStorage.get('emptyKey')).toBe('initial')

      const returnedValue = CookieStorage.set('emptyKey', '')
      expect(returnedValue).toBe('')
      expect(CookieStorage.get('emptyKey')).toBeUndefined()
      expect(cookieSpy).toHaveBeenLastCalledWith('emptyKey=; Max-Age=-1; SameSite=Strict; Path=/')
    })

    it('should handle defaultValue with side effect including falsy values (0, false, empty string) and factory functions', () => {
      expect(CookieStorage.get('newStringKey', 'defaultValue')).toBe('defaultValue')
      expect(CookieStorage.get('newStringKey')).toBe('defaultValue')

      expect(CookieStorage.get('zeroKey', 0)).toBe(0)
      expect(CookieStorage.get('zeroKey')).toBe(0)

      expect(CookieStorage.get('falseKey', false)).toBe(false)
      expect(CookieStorage.get('falseKey')).toBe(false)

      expect(CookieStorage.get('emptyDefaultKey', '')).toBe('')
      expect(CookieStorage.get('emptyDefaultKey')).toBeUndefined()

      expect(CookieStorage.get('factoryKey', () => 'fromFactory')).toBe('fromFactory')
      expect(CookieStorage.get('factoryKey')).toBe('fromFactory')
    })

    it('should transform string values in get via transformation()', () => {
      CookieStorage.set('booleanKey', 'true')
      expect(CookieStorage.get('booleanKey')).toBe(true)

      CookieStorage.set('numberKey', '123')
      expect(CookieStorage.get('numberKey')).toBe(123)
    })

    it('should return value but not persist to memory or DOM if CookieBlock is active', () => {
      cookieSpy.mockClear()
      CookieBlock.set(true)

      const result = CookieStorage.set('blockedKey', 'blockedValue')

      expect(result).toBe('blockedValue')
      expect(CookieStorage.get('blockedKey')).toBeUndefined()

      const blockedCalls = cookieSpy.mock.calls.filter(call =>
        call[0].includes('blockedKey')
      )
      expect(blockedCalls.length).toBe(0)
    })
  })

  describe('remove', () => {
    it('should remove item by setting empty value and negative max-age', () => {
      CookieStorage.set('key', 'value')
      expect(CookieStorage.get('key')).toBe('value')

      CookieStorage.remove('key')

      expect(CookieStorage.get('key')).toBeUndefined()
      expect(cookieSpy).toHaveBeenLastCalledWith('key=; Max-Age=-1; SameSite=Strict; Path=/')
    })
  })

  describe('format and parse', () => {
    it('should parse document.cookie into memory using strSplit and preserve "=" inside values', () => {
      cookieSpy.mockRestore()
      document.cookie = 'key1=value1'
      document.cookie = 'key2=value=with=equals'

      CookieStorage.update()

      expect(CookieStorage.get('key1')).toBe('value1')
      expect(CookieStorage.get('key2')).toBe('value=with=equals')
    })

    it('should URL-encode and decode special characters and JSON objects in keys and values', () => {
      cookieSpy.mockRestore()
      CookieStorage.set('user profile', { name: 'Иван', role: 'admin & user' })

      CookieStorage.update()

      expect(CookieStorage.get('user profile')).toEqual({ name: 'Иван', role: 'admin & user' })
    })

    it('should gracefully fallback to raw key and value when decodeURIComponent fails on malformed URI sequence', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      CookieStorage.init(undefined, () => 'malformedKey=%E0%A4%A; %E0%A4%A=rawValue')

      expect(CookieStorage.get('malformedKey')).toBe('%E0%A4%A')
      expect(CookieStorage.get('%E0%A4%A')).toBe('rawValue')
    })

    it('should ignore empty or value-less segments when parsing cookies', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      CookieStorage.init(undefined, () => 'valid=1; emptyVal=; noEquals; =missingKey;   ')

      expect(CookieStorage.get('valid')).toBe(1)
      expect(CookieStorage.get('emptyVal')).toBeUndefined()
      expect(CookieStorage.get('noEquals')).toBeUndefined()
    })
  })

  describe('SSR / Non-DOM environment', () => {
    it('should update in-memory items but not access document.cookie if hasDom is false', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)

      CookieStorage.set('ssrKey', 'ssrValue')
      expect(CookieStorage.get('ssrKey')).toBe('ssrValue')
      expect(cookieSpy).not.toHaveBeenCalled()
    })

    it('should not access document.cookie when isDomData() is true', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      vi.mocked(isDomDataModule.isDomData).mockReturnValue(true)

      CookieStorage.set('domDataKey', 'domDataValue')
      expect(CookieStorage.get('domDataKey')).toBe('domDataValue')
      expect(cookieSpy).not.toHaveBeenCalled()
    })
  })

  describe('reset', () => {
    it('should clear all listeners and ServerStorage items', () => {
      const getListener = vi.fn()
      const getListenerRaw = vi.fn()
      const setListener = vi.fn()

      CookieStorage.init(getListener, getListenerRaw, setListener)
      CookieStorage.set('key', 'value')

      CookieStorage.reset()

      // @ts-expect-error: intentionally testing protected static listener properties
      expect(CookieStorage.getListener).toBeUndefined()
      // @ts-expect-error: intentionally testing protected static listener properties
      expect(CookieStorage.getListenerRaw).toBeUndefined()
      // @ts-expect-error: intentionally testing protected static listener properties
      expect(CookieStorage.setListener).toBeUndefined()
      expect(CookieStorage.get('key')).toBeUndefined()
    })

    it('should clear ServerStorage entry on reset', () => {
      CookieStorage.set('test_reset_key', 'value')
      expect(ServerStorage.has('__ui:cookie-storage__')).toBe(true)

      CookieStorage.reset()
      expect(ServerStorage.has('__ui:cookie-storage__')).toBe(false)
    })
  })

  describe('init functionality', () => {
    it('should update in-memory initItems when setListener is active', () => {
      const customSet = vi.fn()
      CookieStorage.init(() => undefined, undefined, customSet)

      CookieStorage.set('ssr_key', 'ssr_value')
      expect(customSet).toHaveBeenCalled()
      expect(CookieStorage.get('ssr_key')).toBe('ssr_value')
    })

    it('should use custom get listener for all get operations', () => {
      const customGet = vi.fn()
        .mockReturnValueOnce('first')
        .mockReturnValueOnce('second')
      const customSet = vi.fn()

      CookieStorage.init(customGet, undefined, customSet)

      const resultFirst = CookieStorage.get('key1')
      const resultSecond = CookieStorage.get('key2')

      expect(customGet).toHaveBeenCalledTimes(2)
      expect(customGet).toHaveBeenCalledWith('key1')
      expect(customGet).toHaveBeenCalledWith('key2')
      expect(resultFirst).toBe('first')
      expect(resultSecond).toBe('second')
    })

    it('should use custom set listener for all set operations', () => {
      const customGet = vi.fn()
      const customSet = vi.fn<(key: string, value: string, cookie: string, options?: CookieOptions) => void>()

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
      CookieStorage.set('key', 'value', {
        arguments: {
          Custom: 'Value',
          Another: 123,
          Flag: true
        }
      })

      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Custom=Value'))
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Another=123'))
      expect(cookieSpy).toHaveBeenCalledWith(expect.stringContaining('Flag=1'))
    })

    it('should convert object values to strings', () => {
      CookieStorage.set('key', 'value', {
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
      CookieStorage.set('numberKey', 123)
      expect(CookieStorage.get('numberKey')).toBe(123)
    })

    it('should handle booleans', () => {
      CookieStorage.set('booleanKey', true)
      expect(CookieStorage.get('booleanKey')).toBe(true)

      CookieStorage.set('booleanKey2', false)
      expect(CookieStorage.get('booleanKey2')).toBe(false)
    })

    it('should handle objects', () => {
      const dataObject = { name: 'test', value: 42 }
      CookieStorage.set('objectKey', dataObject)
      expect(CookieStorage.get('objectKey')).toEqual(dataObject)
    })

    it('should handle arrays', () => {
      const dataArray = [1, 2, 3]
      CookieStorage.set('arrayKey', dataArray)
      expect(CookieStorage.get('arrayKey')).toEqual(dataArray)
    })
  })

  describe('functional values', () => {
    it('should execute function for set value', () => {
      const valueFactory = vi.fn().mockReturnValue('computed')
      CookieStorage.set('functionKey', valueFactory)

      expect(valueFactory).toHaveBeenCalled()
      expect(CookieStorage.get('functionKey')).toBe('computed')
    })

    it('should execute function for default value in get', () => {
      const defaultFactory = vi.fn().mockReturnValue('default')
      const result = CookieStorage.get('newFunctionKey', defaultFactory)

      expect(defaultFactory).toHaveBeenCalled()
      expect(result).toBe('default')
    })

    it('should not execute function if value exists', () => {
      CookieStorage.set('existingKey', 'existing')
      const defaultFactory = vi.fn().mockReturnValue('should not run')

      const result = CookieStorage.get('existingKey', defaultFactory)

      expect(defaultFactory).not.toHaveBeenCalled()
      expect(result).toBe('existing')
    })
  })

  describe('update method', () => {
    it('should clear server storage and reinitialize from document.cookie', () => {
      CookieStorage.set('key1', 'value1')
      expect(CookieStorage.get('key1')).toBe('value1')

      cookieSpy.mockRestore()
      document.cookie = 'key2=value2'

      CookieStorage.update()

      expect(CookieStorage.get('key2')).toBe('value2')
    })

    it('should not update if not in DOM runtime', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)

      CookieStorage.set('ssrKey', 'ssrValue')
      const beforeUpdate = CookieStorage.get('ssrKey')

      CookieStorage.update()

      const afterUpdate = CookieStorage.get('ssrKey')
      expect(beforeUpdate).toBe(afterUpdate)
    })
  })

  describe('getListenerRaw', () => {
    it('should use getListenerRaw to initialize items when in non-DOM environment', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      const rawCookieHeader = 'rawKey=rawValue; otherKey=otherValue'
      const getRaw = vi.fn().mockReturnValue(rawCookieHeader)

      CookieStorage.init(undefined, getRaw)

      expect(CookieStorage.get('rawKey')).toBe('rawValue')
      expect(CookieStorage.get('otherKey')).toBe('otherValue')
      expect(getRaw).toHaveBeenCalled()
    })

    it('should return empty storage when getListenerRaw returns empty string in non-DOM environment', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      const getRaw = vi.fn().mockReturnValue('')

      CookieStorage.init(undefined, getRaw)

      expect(CookieStorage.get('anyKey')).toBeUndefined()
      expect(getRaw).toHaveBeenCalled()
    })

    it('should ignore getListenerRaw if hasDom is true', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      vi.mocked(isDomDataModule.isDomData).mockReturnValue(false)
      cookieSpy.mockRestore()
      document.cookie = 'domKey=domValue'
      const getRaw = vi.fn().mockReturnValue('rawKey=rawValue')

      CookieStorage.init(undefined, getRaw)

      expect(CookieStorage.get('domKey')).toBe('domValue')
      expect(CookieStorage.get('rawKey')).toBeUndefined()
    })
  })
})
