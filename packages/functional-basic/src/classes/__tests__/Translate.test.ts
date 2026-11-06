/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Translate } from '../Translate'
import { TranslateInstance } from '../TranslateInstance'
import { ServerStorage } from '../ServerStorage'

describe('Translate (Static Wrapper)', () => {
  let instance: TranslateInstance

  beforeEach(() => {
    instance = Translate.getItem()
    vi.spyOn(instance, 'get').mockResolvedValue('Mocked Get')
    vi.spyOn(instance, 'getSync').mockReturnValue('Mocked Sync')
    vi.spyOn(instance, 'getList').mockResolvedValue({ firstKey: 'Mocked List', secondKey: 'Mocked List' })
    vi.spyOn(instance, 'getListSync').mockReturnValue({ firstKey: 'Mocked List Sync', secondKey: 'Mocked List Sync' })
    vi.spyOn(instance, 'add').mockResolvedValue()
    vi.spyOn(instance, 'addSync').mockReturnValue()
    vi.spyOn(instance, 'addNormalOrSync').mockResolvedValue()
    vi.spyOn(instance, 'addSyncByLocation').mockReturnValue()
    vi.spyOn(instance, 'addSyncByFile').mockReturnValue()
    vi.spyOn(instance, 'setUrl').mockReturnThis()
    vi.spyOn(instance, 'setPropsName').mockReturnThis()
    vi.spyOn(instance, 'setReadApi').mockReturnThis()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Singleton management (getItem)', () => {
    it('keeps the shared instance when the SSR storage context changes', () => {
      const firstContext: Record<string, unknown> = {}
      const secondContext: Record<string, unknown> = {}
      let currentContext = firstContext

      vi.stubGlobal('window', undefined)
      vi.stubGlobal('document', undefined)
      ServerStorage.reset()
      ServerStorage.init(() => currentContext)

      try {
        const first = Translate.getItem()
        currentContext = secondContext
        expect(Translate.getItem()).toBe(first)
        currentContext = firstContext
        expect(Translate.getItem()).toBe(first)
      } finally {
        ServerStorage.reset()
        vi.unstubAllGlobals()
      }
    })

    it('should return the internal TranslateInstance singleton', () => {
      const firstItem = Translate.getItem()
      const secondItem = Translate.getItem()

      expect(firstItem).toBeInstanceOf(TranslateInstance)
      expect(firstItem).toBe(secondItem)
    })

    it('should lazily re-create TranslateInstance if internal item is reset', () => {
      const originalItem = Translate.getItem()
      ;(Translate as unknown as { item?: TranslateInstance }).item = undefined

      const newItem = Translate.getItem()
      expect(newItem).toBeInstanceOf(TranslateInstance)
      expect(newItem).not.toBe(originalItem)

      ;(Translate as unknown as { item?: TranslateInstance }).item = originalItem
    })
  })

  describe('Translation retrieval (get, getSync, getList, getListSync)', () => {
    it('get should delegate to item.get with replacement', async () => {
      const result = await Translate.get('test', ['value'])
      expect(instance.get).toHaveBeenCalledWith('test', ['value'])
      expect(result).toBe('Mocked Get')
    })

    it('get should delegate to item.get without replacement', async () => {
      const result = await Translate.get('simple.key')
      expect(instance.get).toHaveBeenCalledWith('simple.key', undefined)
      expect(result).toBe('Mocked Get')
    })

    it('getSync should delegate to item.getSync with explicit arguments', () => {
      const result = Translate.getSync('test', true, { count: 1 })
      expect(instance.getSync).toHaveBeenCalledWith('test', true, { count: 1 })
      expect(result).toBe('Mocked Sync')
    })

    it('getSync should use default first=false when omitted', () => {
      const result = Translate.getSync('test')
      expect(instance.getSync).toHaveBeenCalledWith('test', false, undefined)
      expect(result).toBe('Mocked Sync')
    })

    it('getList should delegate to item.getList', async () => {
      const result = await Translate.getList(['firstKey', 'secondKey'])
      expect(instance.getList).toHaveBeenCalledWith(['firstKey', 'secondKey'])
      expect(result).toEqual({ firstKey: 'Mocked List', secondKey: 'Mocked List' })
    })

    it('getListSync should delegate to item.getListSync with explicit first flag', () => {
      const result = Translate.getListSync(['firstKey', 'secondKey'], true)
      expect(instance.getListSync).toHaveBeenCalledWith(['firstKey', 'secondKey'], true)
      expect(result).toEqual({ firstKey: 'Mocked List Sync', secondKey: 'Mocked List Sync' })
    })

    it('getListSync should default first to false when omitted', () => {
      const result = Translate.getListSync(['firstKey', 'secondKey'])
      expect(instance.getListSync).toHaveBeenCalledWith(['firstKey', 'secondKey'], false)
      expect(result).toEqual({ firstKey: 'Mocked List Sync', secondKey: 'Mocked List Sync' })
    })
  })

  describe('Adding translations (add, addSync, addNormalOrSync, addSyncByLocation, addSyncByFile)', () => {
    it('add should delegate to item.add with array or string', async () => {
      await Translate.add(['firstKey'])
      expect(instance.add).toHaveBeenCalledWith(['firstKey'])

      await Translate.add('singleKey')
      expect(instance.add).toHaveBeenCalledWith('singleKey')
    })

    it('addSync should delegate to item.addSync', () => {
      Translate.addSync({ firstKey: 'value' })
      expect(instance.addSync).toHaveBeenCalledWith({ firstKey: 'value' })
    })

    it('addNormalOrSync should delegate to item.addNormalOrSync', async () => {
      await Translate.addNormalOrSync({ firstKey: 'value' })
      expect(instance.addNormalOrSync).toHaveBeenCalledWith({ firstKey: 'value' })
    })

    it('addSyncByLocation should delegate to item.addSyncByLocation', () => {
      Translate.addSyncByLocation({ en: { firstKey: 'value' } })
      expect(instance.addSyncByLocation).toHaveBeenCalledWith({ en: { firstKey: 'value' } })
    })

    it('addSyncByFile should delegate to item.addSyncByFile', () => {
      const file = { en: () => Promise.resolve({}) }
      Translate.addSyncByFile(file)
      expect(instance.addSyncByFile).toHaveBeenCalledWith(file)
    })
  })

  describe('Configuration (setUrl, setPropsName, setReadApi, setConfig)', () => {
    it('ignores empty URL and property names while preserving an explicit false readApi', () => {
      Translate.setConfig({ url: '', propsName: '', readApi: false })

      expect(instance.setUrl).not.toHaveBeenCalled()
      expect(instance.setPropsName).not.toHaveBeenCalled()
      expect(instance.setReadApi).toHaveBeenCalledWith(false)
    })

    it('setUrl should delegate to item.setUrl', () => {
      Translate.setUrl('/api')
      expect(instance.setUrl).toHaveBeenCalledWith('/api')
    })

    it('setPropsName should delegate to item.setPropsName', () => {
      Translate.setPropsName('list')
      expect(instance.setPropsName).toHaveBeenCalledWith('list')
    })

    it('setReadApi should delegate to item.setReadApi', () => {
      Translate.setReadApi(true)
      expect(instance.setReadApi).toHaveBeenCalledWith(true)
    })

    it('setConfig should delegate all provided options to individual setters', () => {
      Translate.setConfig({
        url: '/new-url',
        propsName: 'new-props',
        readApi: false
      })

      expect(instance.setUrl).toHaveBeenCalledWith('/new-url')
      expect(instance.setPropsName).toHaveBeenCalledWith('new-props')
      expect(instance.setReadApi).toHaveBeenCalledWith(false)
    })

    it('setConfig should only invoke setters for defined and non-empty properties', () => {
      Translate.setConfig({
        readApi: true
      })

      expect(instance.setUrl).not.toHaveBeenCalled()
      expect(instance.setPropsName).not.toHaveBeenCalled()
      expect(instance.setReadApi).toHaveBeenCalledWith(true)
    })

    it('setConfig should not invoke setters when empty object is passed', () => {
      Translate.setConfig({})

      expect(instance.setUrl).not.toHaveBeenCalled()
      expect(instance.setPropsName).not.toHaveBeenCalled()
      expect(instance.setReadApi).not.toHaveBeenCalled()
    })

    it('setConfig should safely handle undefined or invalid non-object input', () => {
      Translate.setConfig()
      Translate.setConfig(undefined)

      expect(instance.setUrl).not.toHaveBeenCalled()
      expect(instance.setPropsName).not.toHaveBeenCalled()
      expect(instance.setReadApi).not.toHaveBeenCalled()
    })
  })
})
