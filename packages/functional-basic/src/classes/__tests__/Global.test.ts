// @vitest-environment jsdom
import { describe, it, expect, expectTypeOf, beforeEach, vi, afterEach } from 'vitest'
import { Global } from '../Global'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('Global', () => {
  beforeEach(() => {
    ServerStorage.reset()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should keep the storage private at runtime', () => {
    expect(Reflect.get(Global, 'getItem')).toBeUndefined()
  })

  describe('add and get', () => {
    it('should store and retrieve values of various types including falsy and nested values', () => {
      Global.add({
        myKey: 'hello',
        count: 42,
        zero: 0,
        flag: false,
        empty: '',
        nullValue: null,
        nested: { theme: 'dark', items: [1, 2, 3] }
      })

      expect(Global.get<string>('myKey')).toBe('hello')
      expect(Global.get<number>('count')).toBe(42)
      expect(Global.get<number>('zero')).toBe(0)
      expect(Global.get<boolean>('flag')).toBe(false)
      expect(Global.get<string>('empty')).toBe('')
      expect(Global.get<null>('nullValue')).toBeNull()
      expect(Global.get<{ theme: string, items: number[] }>('nested')).toEqual({
        theme: 'dark',
        items: [1, 2, 3]
      })
    })

    it('should only allow adding once when non-empty (first-write-wins)', () => {
      Global.add({ myKey: 'first', count: 10 })
      Global.add({ myKey: 'second', extraKey: 'ignored' })

      expect(Global.get('myKey')).toBe('first')
      expect(Global.get('count')).toBe(10)
      expect(Global.get('extraKey')).toBeUndefined()
    })

    it('should allow adding data if a previous add call passed an empty object', () => {
      Global.add({})
      Global.add({ initializedAfterEmpty: 'success' })

      expect(Global.get('initializedAfterEmpty')).toBe('success')
    })

    it('should return undefined for an unknown key or Object.prototype keys', () => {
      Global.add({ known: 'value' })
      const missing = Global.get<string>('nonExistentKey')

      expectTypeOf(missing).toEqualTypeOf<string | undefined>()
      expect(missing).toBeUndefined()
      expect(Global.get('toString')).toBeUndefined()
      expect(Global.get('constructor')).toBeUndefined()
    })

    it('should skip reserved prototype keys in server JSON data', () => {
      Global.add(JSON.parse('{"__proto__":{"featureEnabled":true},"constructor":1,"prototype":2,"site":"example"}'))

      expect(Global.get('site')).toBe('example')
      expect(Global.get('featureEnabled')).toBeUndefined()
      expect(Global.get('__proto__')).toBeUndefined()
      expect(Global.get('constructor')).toBeUndefined()
      expect(Global.get('prototype')).toBeUndefined()
    })

    it('should allow initialization after data containing only reserved keys', () => {
      Global.add(JSON.parse('{"__proto__":{},"constructor":1,"prototype":2}'))
      Global.add({ site: 'example' })

      expect(Global.get('site')).toBe('example')
    })

    it('should allow a retry when reading the initial data throws', () => {
      const data = {
        site: 'partial',
        get unavailable(): string {
          throw new Error('Unavailable')
        }
      }

      expect(() => Global.add(data)).toThrow('Unavailable')
      expect(Global.get('site')).toBeUndefined()

      Global.add({ site: 'complete' })

      expect(Global.get('site')).toBe('complete')
    })

    it('should preserve the first committed data during reentrant initialization', () => {
      Global.add({
        get site(): string {
          Global.add({ site: 'first' })
          return 'second'
        }
      })

      expect(Global.get('site')).toBe('first')
    })
  })

  describe('SSR isolation via ServerStorage', () => {
    it('should isolate global data across different SSR request contexts', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      ServerStorage.reset()

      const contextFirst: Record<string, unknown> = {}
      const contextSecond: Record<string, unknown> = {}
      let activeContext = contextFirst

      ServerStorage.init(() => activeContext)

      Global.add({ tenant: 'tenant-a' })
      expect(Global.get('tenant')).toBe('tenant-a')

      activeContext = contextSecond
      expect(Global.get('tenant')).toBeUndefined()

      Global.add({ tenant: 'tenant-b' })
      expect(Global.get('tenant')).toBe('tenant-b')

      activeContext = contextFirst
      expect(Global.get('tenant')).toBe('tenant-a')
    })
  })
})
