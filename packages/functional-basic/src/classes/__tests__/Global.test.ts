// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
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

  describe('getItem', () => {
    it('should return an empty object initially from ServerStorage', () => {
      const storage = Global.getItem()
      expect(storage).toEqual({})
    })

    it('should return the same storage reference on subsequent calls within the same context', () => {
      const storageFirst = Global.getItem()
      const storageSecond = Global.getItem()
      expect(storageFirst).toBe(storageSecond)
    })
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

    it('should return undefined for an unknown key', () => {
      Global.add({ known: 'value' })
      expect(Global.get('nonExistentKey')).toBeUndefined()
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
