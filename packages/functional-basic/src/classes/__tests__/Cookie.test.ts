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

      // @ts-ignore: testing private options
      expect(cookie.options).toEqual({ age: 100, sameSite: 'lax' })
    })

    it('should not update DOM if not in DOM runtime', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      const cookie = new Cookie('noDomUpdate')
      cookie.set('val')

      expect(document.cookie).not.toContain('noDomUpdate=val')
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
})
