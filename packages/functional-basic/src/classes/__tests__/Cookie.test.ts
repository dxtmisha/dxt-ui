/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { Cookie } from '../Cookie'
import { CookieStorage } from '../CookieStorage'
import { CookieBlock } from '../CookieBlock'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as isDomDataModule from '../../functions/isDomData'

vi.mock('../../functions/isDomRuntime')
vi.mock('../../functions/isDomData')

describe('Cookie', () => {
  beforeEach(() => {
    vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
    vi.mocked(isDomDataModule.isDomData).mockReturnValue(false)
    ServerStorage.reset()
    ServerStorage.setErrorStatus(true)
    CookieStorage.reset()
    CookieBlock.set(false)

    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';')
      for (const cookieItem of cookies) {
        const equalsPosition = cookieItem.indexOf('=')
        const cookieName = equalsPosition > -1 ? cookieItem.substring(0, equalsPosition).trim() : cookieItem.trim()
        if (cookieName) {
          document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
        }
      }
    }
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('singleton and ServerStorage isolation', () => {
    it('should create an instance', () => {
      const cookie = new Cookie('test')
      expect(cookie).toBeInstanceOf(Cookie)
    })

    it('should return the same instance for the same name within the same context', () => {
      const cookieFirst = new Cookie('sharedName')
      const cookieSecond = new Cookie('sharedName')
      expect(cookieFirst).toBe(cookieSecond)
    })

    it('should isolate instances across ServerStorage resets', () => {
      const cookieFirst = new Cookie('isolatedCookie')
      cookieFirst.set('firstValue')

      ServerStorage.reset()
      CookieStorage.reset()

      const cookieSecond = new Cookie('isolatedCookie')
      expect(cookieSecond).not.toBe(cookieFirst)
    })

    it('should initialize value from CookieStorage upon instantiation', () => {
      CookieStorage.set('preExisting', 'storedValue')
      const cookie = new Cookie<string>('preExisting')

      expect(cookie.get()).toBe('storedValue')
    })
  })

  describe('getInstance', () => {
    it('should return an existing instance if available', () => {
      const cookieFirst = new Cookie('existingInstance')
      const cookieSecond = Cookie.getInstance('existingInstance')
      expect(cookieFirst).toBe(cookieSecond)
    })

    it('should create a new instance if it does not exist', () => {
      const cookie = Cookie.getInstance('newInstance')
      expect(cookie).toBeInstanceOf(Cookie)
      expect(Cookie.getInstance('newInstance')).toBe(cookie)
    })
  })

  describe('get', () => {
    it('should return undefined if the cookie has no value and no defaultValue is provided', () => {
      const cookie = new Cookie('notExist')
      expect(cookie.get()).toBeUndefined()
    })

    it('should set and return the default value if none exists', () => {
      const cookie = new Cookie('withDefault')
      const result = cookie.get('defaultValue')

      expect(result).toBe('defaultValue')
      expect(document.cookie).toContain('withDefault=defaultValue')
    })

    it('should pass options when setting the default value in get()', () => {
      const cookie = new Cookie('defaultWithOptions')
      const result = cookie.get('defaultValue', { age: 1200, sameSite: 'lax' })

      expect(result).toBe('defaultValue')
      // @ts-expect-error: intentionally verifying private options state
      expect(cookie.options).toEqual({ age: 1200, sameSite: 'lax' })
    })

    it('should get existing value without overwriting with default', () => {
      const cookie = new Cookie('existing')
      cookie.set('realValue')

      const result = cookie.get('defaultValue')
      expect(result).toBe('realValue')
    })

    it('should evaluate functional default values', () => {
      const cookie = new Cookie('functionDefault')
      const result = cookie.get(() => 'computedValue')

      expect(result).toBe('computedValue')
      expect(document.cookie).toContain('functionDefault=computedValue')
    })

    it('should accept falsy default values such as empty string, 0, and false', () => {
      const emptyStringCookie = new Cookie<string>('emptyDefault')
      expect(emptyStringCookie.get('')).toBe('')

      const zeroCookie = new Cookie<number>('zeroDefault')
      expect(zeroCookie.get(0)).toBe(0)

      const falseCookie = new Cookie<boolean>('falseDefault')
      expect(falseCookie.get(false)).toBe(false)
    })
  })

  describe('set', () => {
    it('should set string value to memory and DOM', () => {
      const cookie = new Cookie('setString')
      cookie.set('newValue')

      expect(cookie.get()).toBe('newValue')
      expect(document.cookie).toContain('setString=newValue')
    })

    it('should set a functional value', () => {
      const cookie = new Cookie('setFunction')
      cookie.set(() => 'functionValue')

      expect(cookie.get()).toBe('functionValue')
      expect(document.cookie).toContain('setFunction=functionValue')
    })

    it('should update in-memory Cookie value but not update DOM if CookieBlock is active', () => {
      CookieBlock.set(true)
      const cookie = new Cookie('blockedUpdate')
      cookie.set('blockedValue')

      expect(cookie.get()).toBe('blockedValue')
      expect(document.cookie).not.toContain('blockedUpdate=blockedValue')
    })

    it('should update and merge options across multiple set calls', () => {
      const cookie = new Cookie('optionsMerge')
      cookie.set('value1', { age: 100, path: '/app' })
      cookie.set('value2', { sameSite: 'lax', secure: true })

      // @ts-expect-error: intentionally testing private options merging
      expect(cookie.options).toEqual({
        age: 100,
        path: '/app',
        sameSite: 'lax',
        secure: true
      })
    })

    it('should not update DOM if not in DOM runtime', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      const cookie = new Cookie('noDomUpdate')
      cookie.set('ssrValue')

      expect(cookie.get()).toBe('ssrValue')
      expect(document.cookie).not.toContain('noDomUpdate=ssrValue')
    })
  })

  describe('remove', () => {
    it('should remove data by setting value to undefined via set(undefined) and expiring cookie in DOM', () => {
      const cookie = new Cookie('toRemove')
      const setSpy = vi.spyOn(cookie, 'set')

      cookie.set('activeValue')
      cookie.remove()

      expect(setSpy).toHaveBeenLastCalledWith(undefined)
      expect(cookie.get()).toBeUndefined()
      expect(document.cookie).not.toContain('toRemove=activeValue')
    })

    it('should return defaultValue on get after remove', () => {
      const cookie = new Cookie('removeAndDefault')
      cookie.set('original')
      cookie.remove()

      expect(cookie.get('newDefault')).toBe('newDefault')
    })

    it('should allow subsequent set after remove', () => {
      const cookie = new Cookie('removeAndSet')
      cookie.set('initial')
      cookie.remove()

      cookie.set('recreated')
      expect(cookie.get()).toBe('recreated')
      expect(document.cookie).toContain('removeAndSet=recreated')
    })
  })

  describe('update integration with CookieStorage', () => {
    it('should parse document.cookie into memory when CookieStorage.update() is called', () => {
      document.cookie = 'staticParse=value1'
      document.cookie = 'anotherCookie=value2'

      CookieStorage.update()

      const cookieFirst = new Cookie('staticParse')
      const cookieSecond = new Cookie('anotherCookie')

      expect(cookieFirst.get()).toBe('value1')
      expect(cookieSecond.get()).toBe('value2')
    })
  })

  describe('different data types', () => {
    it('should handle number values', () => {
      const cookie = new Cookie<number>('numberValue')
      cookie.set(42)
      expect(cookie.get()).toBe(42)
    })

    it('should handle boolean values', () => {
      const cookie = new Cookie<boolean>('booleanValue')
      cookie.set(true)
      expect(cookie.get()).toBe(true)
    })

    it('should handle object values', () => {
      const cookie = new Cookie<{ key: string, count: number }>('objectValue')
      const dataObject = { key: 'value', count: 123 }
      cookie.set(dataObject)
      expect(cookie.get()).toEqual(dataObject)
    })

    it('should handle array values', () => {
      const cookie = new Cookie<number[]>('arrayValue')
      const dataArray = [1, 2, 3]
      cookie.set(dataArray)
      expect(cookie.get()).toEqual(dataArray)
    })

    it('should handle null values', () => {
      const cookie = new Cookie<null>('nullValue')
      cookie.set(null)
      expect(cookie.get()).toBeNull()
    })

    it('should handle undefined values', () => {
      const cookie = new Cookie<undefined>('undefinedValue')
      cookie.set(undefined)
      expect(cookie.get()).toBeUndefined()
    })
  })

  describe('options handling', () => {
    it('should handle age option', () => {
      const cookie = new Cookie('ageOption')
      cookie.set('value', { age: 3600 })
      // @ts-expect-error: intentionally testing private options
      expect(cookie.options).toEqual({ age: 3600 })
      expect(cookie.get()).toBe('value')
    })

    it('should handle sameSite option', () => {
      const cookie = new Cookie('sameSiteOption')
      cookie.set('value', { sameSite: 'lax' })
      // @ts-expect-error: intentionally testing private options
      expect(cookie.options).toEqual({ sameSite: 'lax' })
      expect(cookie.get()).toBe('value')
    })

    it('should keep options empty when none are passed', () => {
      const cookie = new Cookie('defaultOptions')
      cookie.set('value')
      // @ts-expect-error: intentionally testing private options
      expect(cookie.options).toEqual({})
      expect(cookie.get()).toBe('value')
    })

    it('should handle arguments as string array', () => {
      const cookie = new Cookie('argumentsArray')
      cookie.set('value', { arguments: ['Secure', 'Path=/'] })
      // @ts-expect-error: intentionally testing private options
      expect(cookie.options).toEqual({ arguments: ['Secure', 'Path=/'] })
      expect(cookie.get()).toBe('value')
    })

    it('should handle arguments as record object', () => {
      const cookie = new Cookie('argumentsObject')
      cookie.set('value', { arguments: { Path: '/', Secure: true } })
      // @ts-expect-error: intentionally testing private options
      expect(cookie.options).toEqual({ arguments: { Path: '/', Secure: true } })
      expect(cookie.get()).toBe('value')
    })
  })

  describe('edge cases and custom listeners', () => {
    it('should handle empty string value', () => {
      const cookie = new Cookie('emptyString')
      cookie.set('')
      expect(cookie.get()).toBe('')
    })

    it('should handle cookie name with special characters', () => {
      const cookie = new Cookie('cookie-name_123')
      cookie.set('value')
      expect(cookie.get()).toBe('value')
    })

    it('should handle functional value that returns undefined', () => {
      const cookie = new Cookie<string | undefined>('functionUndefined')
      cookie.set(() => undefined)
      expect(cookie.get()).toBeUndefined()
    })

    it('should handle consecutive set calls', () => {
      const cookie = new Cookie('consecutive')
      cookie.set('first')
      cookie.set('second')
      cookie.set('third')
      expect(cookie.get()).toBe('third')
    })

    it('should respect CookieStorage init listeners', () => {
      const customGet = vi.fn().mockReturnValue('custom')
      const customSet = vi.fn()

      CookieStorage.init(customGet, undefined, customSet)

      const cookie = new Cookie('custom')
      const result = cookie.get('default')

      expect(customGet).toHaveBeenCalledWith('custom')
      expect(result).toBe('custom')
    })

    it('should infer return type from defaultValue when T is omitted', () => {
      const cookie = new Cookie('inferredString')
      const value = cookie.get('defaultVal')
      expect(value).toBe('defaultVal')
    })

    it('should infer return type from functional defaultValue', () => {
      const cookie = new Cookie('inferredNumber')
      const value = cookie.get(() => 42)
      expect(value).toBe(42)
    })
  })
})
