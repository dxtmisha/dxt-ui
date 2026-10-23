/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { CookieBlock } from '../CookieBlock'
import { CookieBlockInstance } from '../CookieBlockInstance'
import { DataStorage } from '../DataStorage'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('CookieBlock', () => {
  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    DataStorage.setPrefix('ui-storage')
    ServerStorage.reset()
    CookieBlock.set(false)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('get and set', () => {
    it('should return false by default when storage is empty', () => {
      localStorage.clear()
      ServerStorage.reset()

      expect(CookieBlock.get()).toBe(false)
    })

    it('should set block status to true and return true', () => {
      CookieBlock.set(true)
      expect(CookieBlock.get()).toBe(true)
    })

    it('should update the block status from true back to false', () => {
      CookieBlock.set(true)
      expect(CookieBlock.get()).toBe(true)

      CookieBlock.set(false)
      expect(CookieBlock.get()).toBe(false)
    })
  })

  describe('getItem and ServerStorage isolation', () => {
    it('should return a CookieBlockInstance stored in ServerStorage', () => {
      const serverStorageSpy = vi.spyOn(ServerStorage, 'get')
      const instance = CookieBlock.getItem()

      expect(instance).toBeInstanceOf(CookieBlockInstance)
      expect(serverStorageSpy).toHaveBeenCalledWith('__ui:cookie-block__', expect.any(Function))
    })

    it('should return the same CookieBlockInstance within the same ServerStorage context', () => {
      const instanceFirst = CookieBlock.getItem()
      const instanceSecond = CookieBlock.getItem()

      expect(instanceFirst).toBe(instanceSecond)
    })

    it('should isolate CookieBlockInstance across different SSR request contexts', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      ServerStorage.reset()

      const contextFirst: Record<string, unknown> = {}
      const contextSecond: Record<string, unknown> = {}
      let activeContext = contextFirst

      ServerStorage.init(() => activeContext)

      CookieBlock.set(true)
      expect(CookieBlock.get()).toBe(true)

      activeContext = contextSecond
      expect(CookieBlock.get()).toBe(false)

      CookieBlock.set(false)
      activeContext = contextFirst
      expect(CookieBlock.get()).toBe(true)
    })
  })

  describe('DataStorage persistence', () => {
    it('should persist block status to localStorage via DataStorage', () => {
      CookieBlock.set(true)

      const rawStored = localStorage.getItem('ui-storage____ui:cookie-block__')
      expect(rawStored).toBeTruthy()
      const parsedStored = JSON.parse(rawStored!) as { value: boolean, age: number }
      expect(parsedStored.value).toBe(true)
    })

    it('should restore persisted block status from localStorage after ServerStorage reset', () => {
      CookieBlock.set(true)
      ServerStorage.reset()

      expect(CookieBlock.get()).toBe(true)
    })
  })
})
