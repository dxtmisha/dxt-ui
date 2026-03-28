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
    vi.spyOn(instance, 'getList').mockResolvedValue({ key: 'Mocked List' } as any)
    vi.spyOn(instance, 'getListSync').mockReturnValue({ key: 'Mocked List Sync' } as any)
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

  it('getItem should return the internal TranslateInstance', () => {
    expect(Translate.getItem()).toBeInstanceOf(TranslateInstance)
  })

  it('get should delegate to item.get', async () => {
    const res = await Translate.get('test', ['val'])
    expect(instance.get).toHaveBeenCalledWith('test', ['val'])
    expect(res).toBe('Mocked Get')
  })

  it('getSync should delegate to item.getSync', () => {
    const res = Translate.getSync('test', true, { a: 1 })
    expect(instance.getSync).toHaveBeenCalledWith('test', true, { a: 1 })
    expect(res).toBe('Mocked Sync')
  })

  it('getList should delegate to item.getList', async () => {
    const res = await Translate.getList(['a', 'b'])
    expect(instance.getList).toHaveBeenCalledWith(['a', 'b'])
    expect(res).toEqual({ key: 'Mocked List' })
  })

  it('getListSync should delegate to item.getListSync', () => {
    const res = Translate.getListSync(['a', 'b'], true)
    expect(instance.getListSync).toHaveBeenCalledWith(['a', 'b'], true)
    expect(res).toEqual({ key: 'Mocked List Sync' })
  })

  it('add should delegate to item.add', async () => {
    await Translate.add(['a'])
    expect(instance.add).toHaveBeenCalledWith(['a'])
  })

  it('addSync should delegate to item.addSync', () => {
    Translate.addSync({ a: 'b' })
    expect(instance.addSync).toHaveBeenCalledWith({ a: 'b' })
  })

  it('addNormalOrSync should delegate to item.addNormalOrSync', async () => {
    await Translate.addNormalOrSync({ a: 'b' })
    expect(instance.addNormalOrSync).toHaveBeenCalledWith({ a: 'b' })
  })

  it('addSyncByLocation should delegate to item.addSyncByLocation', () => {
    Translate.addSyncByLocation({ en: { a: 'b' } })
    expect(instance.addSyncByLocation).toHaveBeenCalledWith({ en: { a: 'b' } })
  })

  it('addSyncByFile should delegate to item.addSyncByFile', () => {
    const file = { en: () => Promise.resolve({}) }
    Translate.addSyncByFile(file)
    expect(instance.addSyncByFile).toHaveBeenCalledWith(file)
  })

  it('setUrl should delegate to item.setUrl and return Translate', () => {
    const res = Translate.setUrl('/api')
    expect(instance.setUrl).toHaveBeenCalledWith('/api')
    expect(res).toBe(Translate)
  })

  it('setPropsName should delegate to item.setPropsName and return Translate', () => {
    const res = Translate.setPropsName('list')
    expect(instance.setPropsName).toHaveBeenCalledWith('list')
    expect(res).toBe(Translate)
  })

  it('setReadApi should delegate to item.setReadApi and return Translate', () => {
    const res = Translate.setReadApi(true)
    expect(instance.setReadApi).toHaveBeenCalledWith(true)
    expect(res).toBe(Translate)
  })

  it('setConfig should delegate to individual setters and return Translate', () => {
    const config = {
      url: '/new-url',
      propsName: 'new-props',
      readApi: false
    }

    const res = Translate.setConfig(config)

    expect(instance.setUrl).toHaveBeenCalledWith('/new-url')
    expect(instance.setPropsName).toHaveBeenCalledWith('new-props')
    expect(instance.setReadApi).toHaveBeenCalledWith(false)
    expect(res).toBe(Translate)
  })
})
