/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Translate } from '../Translate'
import { TranslateInstance } from '../TranslateInstance'

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

  it('getItem should return the internal TranslateInstance singleton', () => {
    const firstItem = Translate.getItem()
    const secondItem = Translate.getItem()
    expect(firstItem).toBeInstanceOf(TranslateInstance)
    expect(firstItem).toBe(secondItem)
  })

  it('get should delegate to item.get', async () => {
    const result = await Translate.get('test', ['value'])
    expect(instance.get).toHaveBeenCalledWith('test', ['value'])
    expect(result).toBe('Mocked Get')
  })

  it('getSync should delegate to item.getSync', () => {
    const result = Translate.getSync('test', true, { count: 1 })
    expect(instance.getSync).toHaveBeenCalledWith('test', true, { count: 1 })
    expect(result).toBe('Mocked Sync')
  })

  it('getList should delegate to item.getList', async () => {
    const result = await Translate.getList(['firstKey', 'secondKey'])
    expect(instance.getList).toHaveBeenCalledWith(['firstKey', 'secondKey'])
    expect(result).toEqual({ firstKey: 'Mocked List', secondKey: 'Mocked List' })
  })

  it('getListSync should delegate to item.getListSync', () => {
    const result = Translate.getListSync(['firstKey', 'secondKey'], true)
    expect(instance.getListSync).toHaveBeenCalledWith(['firstKey', 'secondKey'], true)
    expect(result).toEqual({ firstKey: 'Mocked List Sync', secondKey: 'Mocked List Sync' })
  })

  it('add should delegate to item.add', async () => {
    await Translate.add(['firstKey'])
    expect(instance.add).toHaveBeenCalledWith(['firstKey'])
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

  it('setConfig should delegate to individual setters', () => {
    const config = {
      url: '/new-url',
      propsName: 'new-props',
      readApi: false
    }

    Translate.setConfig(config)

    expect(instance.setUrl).toHaveBeenCalledWith('/new-url')
    expect(instance.setPropsName).toHaveBeenCalledWith('new-props')
    expect(instance.setReadApi).toHaveBeenCalledWith(false)
  })
})
