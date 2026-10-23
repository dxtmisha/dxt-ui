/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { CookieBlockInstance } from '../CookieBlockInstance'
import { DataStorage } from '../DataStorage'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('CookieBlockInstance', () => {
  let instance: CookieBlockInstance

  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    DataStorage.setPrefix('ui-storage')
    ServerStorage.reset()
    ServerStorage.setErrorStatus(true)
    instance = new CookieBlockInstance()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('get and set', () => {
    it('should return false by default when no value is stored', () => {
      expect(instance.get()).toBe(false)
    })

    it('should set block status to true and return true', () => {
      instance.set(true)
      expect(instance.get()).toBe(true)
    })

    it('should update block status back to false', () => {
      instance.set(true)
      expect(instance.get()).toBe(true)

      instance.set(false)
      expect(instance.get()).toBe(false)
    })
  })

  describe('DataStorage synchronization and SSR isolation', () => {
    it('should synchronize state with DataStorage under key "__ui:cookie-block__"', () => {
      const storage = new DataStorage<boolean>('__ui:cookie-block__')

      instance.set(true)
      expect(storage.get()).toBe(true)

      storage.set(false)
      expect(instance.get()).toBe(false)
    })

    it('should persist status to localStorage and read it in a newly created instance after ServerStorage reset', () => {
      instance.set(true)

      const rawValue = localStorage.getItem('ui-storage____ui:cookie-block__')
      expect(rawValue).toBeTruthy()
      const parsedValue = JSON.parse(rawValue!) as { value: boolean, age: number }
      expect(parsedValue.value).toBe(true)

      ServerStorage.reset()
      const freshInstance = new CookieBlockInstance()
      expect(freshInstance.get()).toBe(true)
    })

    it('should work in SSR environment without accessing localStorage', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      ServerStorage.reset()

      const ssrInstance = new CookieBlockInstance()
      expect(ssrInstance.get()).toBe(false)

      ssrInstance.set(true)
      expect(ssrInstance.get()).toBe(true)
      expect(localStorage.getItem('ui-storage____ui:cookie-block__')).toBeNull()
    })
  })
})
