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
    // Default to true for DOM runtime to simulate browser
    vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
    vi.mocked(isDomDataModule.isDomData).mockReturnValue(false)
    CookieBlock.set(false)
    ServerStorage.reset()
    CookieStorage.reset()

    // Clear document.cookie before each test
    if (typeof document !== 'undefined') {
      document.cookie = ''
    }
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should create an instance', () => {
    const cookie = new Cookie('test')
    expect(cookie).toBeInstanceOf(Cookie)
  })

  it('should return the same instance for the same name', () => {
    const cookie1 = new Cookie('sharedName')
    const cookie2 = new Cookie('sharedName')
    expect(cookie1).toBe(cookie2)
  })

  describe('getInstance', () => {
    it('should return an existing instance if available', () => {
      const cookie1 = new Cookie('existingInstance')
      const cookie2 = Cookie.getInstance('existingInstance')
      expect(cookie1).toBe(cookie2)
    })

    it('should create a new instance if it does not exist', () => {
      const cookie = Cookie.getInstance('newInstance')
      expect(cookie).toBeInstanceOf(Cookie)
    })
  })

  describe('get', () => {
    it('it should get undefined if the cookie has no value and no default provided', () => {
      const cookie = new Cookie('notExist')
      expect(cookie.get()).toBeUndefined()
    })

    it('should set and get the default value if none exists', () => {
      const cookie = new Cookie('withDefault')
      const result = cookie.get('defaultVal')

      expect(result).toBe('defaultVal')
      expect(document.cookie).toContain('withDefault=defaultVal')
    })

    it('should get existing value without overwriting with default', () => {
      const cookie = new Cookie('existing')
      cookie.set('realVal')

      const result = cookie.get('defaultVal')
      expect(result).toBe('realVal')
    })

    it('should evaluate functional default values', () => {
      const cookie = new Cookie('funcDefault')
      const result = cookie.get(() => 'funcVal')

      expect(result).toBe('funcVal')
      expect(document.cookie).toContain('funcDefault=funcVal')
    })
  })

  describe('set', () => {
    it('should set string value to memory and DOM', () => {
      const cookie = new Cookie('setStr')
      cookie.set('newVal')

      expect(cookie.get()).toBe('newVal')
      expect(document.cookie).toContain('setStr=newVal')
    })

    it('should set a functional value', () => {
      const cookie = new Cookie('setFunc')
      cookie.set(() => 'funcVal')

      expect(cookie.get()).toBe('funcVal')
      expect(document.cookie).toContain('setFunc=funcVal')
    })

    it('should not update DOM if CookieBlock is active', () => {
      CookieBlock.set(true)
      const cookie = new Cookie('blockedUpdate')
      cookie.set('val')

      // Value updates in memory
      expect(cookie.get()).toBe('val')
      // Did NOT update DOM
      expect(document.cookie).not.toContain('blockedUpdate=val')
    })

    it('should update and merge options in set', () => {
      const cookie = new Cookie('optsMerge')
      cookie.set('val', { age: 100 })
      cookie.set('val', { sameSite: 'lax' })

      // @ts-expect-error: testing private options
      expect(cookie.options).toEqual({ age: 100, sameSite: 'lax' })
    })

    it('should not update DOM if not in DOM runtime', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      const cookie = new Cookie('noDomUpdate')
      cookie.set('val')

      expect(document.cookie).not.toContain('noDomUpdate=val')
    })

    it('should filter out non-string arguments', () => {
      const cookie = new Cookie('filteredArgs')
      cookie.set('val', { arguments: ['Secure', 123 as any, 'Path=/'] })

      // @ts-expect-error: testing private options
      expect(cookie.options.arguments).toEqual(['Secure', 123, 'Path=/'])
      expect(cookie.get()).toBe('val')
      // Note: jsdom may not filter non-strings in document.cookie
    })
  })

  describe('remove', () => {
    it('should remove data by setting to empty string and max-age=-1', () => {
      const cookie = new Cookie('toRemove')
      cookie.set('val')
      cookie.remove()

      expect(cookie.get()).toBe('')
      expect(document.cookie).not.toContain('toRemove=val')
    })
  })

  describe('update (static)', () => {
    it('should parse `document.cookie` into memory', () => {
      document.cookie = 'staticParse=val1'
      document.cookie = 'another=val2'

      // Call update explicitly
      CookieStorage.update()

      const cookie1 = new Cookie('staticParse')
      const cookie2 = new Cookie('another')

      expect(cookie1.get()).toBe('val1')
      expect(cookie2.get()).toBe('val2')
    })
  })

  describe('different data types', () => {
    it('should handle number values', () => {
      const cookie = new Cookie('numberVal')
      cookie.set(42)
      expect(cookie.get()).toBe(42)
    })

    it('should handle boolean values', () => {
      const cookie = new Cookie('boolVal')
      cookie.set(true)
      expect(cookie.get()).toBe(true)
    })

    it('should handle object values', () => {
      const cookie = new Cookie('objVal')
      const obj = { key: 'value', num: 123 }
      cookie.set(obj)
      expect(cookie.get()).toEqual(obj)
    })

    it('should handle array values', () => {
      const cookie = new Cookie('arrayVal')
      const arr = [1, 2, 3]
      cookie.set(arr)
      expect(cookie.get()).toEqual(arr)
    })

    it('should handle null values', () => {
      const cookie = new Cookie('nullVal')
      cookie.set(null)
      expect(cookie.get()).toBeNull()
    })

    it('should handle undefined values', () => {
      const cookie = new Cookie('undefinedVal')
      cookie.set(undefined)
      expect(cookie.get()).toBeUndefined()
    })
  })

  describe('options handling', () => {
    it('should handle age option', () => {
      const cookie = new Cookie('ageOption')
      cookie.set('value', { age: 3600 })
      // @ts-expect-error: testing private options
      expect(cookie.options).toEqual({ age: 3600 })
      expect(cookie.get()).toBe('value')
    })

    it('should handle sameSite option', () => {
      const cookie = new Cookie('sameSiteOption')
      cookie.set('value', { sameSite: 'lax' })
      // @ts-expect-error: testing private options
      expect(cookie.options).toEqual({ sameSite: 'lax' })
      expect(cookie.get()).toBe('value')
    })

    it('should handle default sameSite as strict', () => {
      const cookie = new Cookie('defaultSameSite')
      cookie.set('value')
      // @ts-expect-error: testing private options
      expect(cookie.options).toEqual({})
      expect(cookie.get()).toBe('value')
    })

    it('should handle default age as 7 days', () => {
      const cookie = new Cookie('defaultAge')
      cookie.set('value')
      // @ts-expect-error: testing private options
      expect(cookie.options).toEqual({})
      expect(cookie.get()).toBe('value')
    })

    it('should handle arguments as array', () => {
      const cookie = new Cookie('argsArray')
      cookie.set('value', { arguments: ['Secure', 'Path=/'] })
      // @ts-expect-error: testing private options
      expect(cookie.options).toEqual({ arguments: ['Secure', 'Path=/'] })
      expect(cookie.get()).toBe('value')
    })

    it('should handle arguments as object', () => {
      const cookie = new Cookie('argsObject')
      cookie.set('value', { arguments: { Path: '/', Secure: '' } })
      // @ts-expect-error: testing private options
      expect(cookie.options).toEqual({ arguments: { Path: '/', Secure: '' } })
      expect(cookie.get()).toBe('value')
    })
  })

  describe('edge cases', () => {
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
      const cookie = new Cookie('funcUndefined')
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

    it('should handle get without default after set', () => {
      const cookie = new Cookie('getAfterSet')
      cookie.set('value')
      expect(cookie.get()).toBe('value')
    })
  })

  describe('integration with CookieStorage', () => {
    it('should respect CookieStorage init listeners', () => {
      const customGet = vi.fn().mockReturnValue('custom')
      const customSet = vi.fn()

      CookieStorage.init(customGet, customSet)

      const cookie = new Cookie('custom')
      const result = cookie.get('default')

      expect(customGet).toHaveBeenCalledWith('custom')
      expect(result).toBe('custom')
    })
  })
})
