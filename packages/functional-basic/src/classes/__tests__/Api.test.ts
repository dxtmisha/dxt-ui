// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Api } from '../Api'
import { ApiInstance } from '../ApiInstance'
import { ApiMethodItem } from '../../types/apiTypes'

describe('Api', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.clearAllMocks()
  })

  it('should return singleton instance', () => {
    const instance1 = Api.getItem()
    const instance2 = Api.getItem()
    expect(instance1).toBe(instance2)
    expect(instance1).toBeInstanceOf(ApiInstance)
  })

  it('should return correct instances for status, response, and hydration', () => {
    const item = Api.getItem()
    expect(Api.getStatus()).toBe(item.getStatus())
    expect(Api.getResponse()).toBe(item.getResponse())
    expect(Api.getHydration()).toBe(item.getHydration())
  })

  it('should proxy localhost check', () => {
    const item = Api.getItem()
    const spy = vi.spyOn(item, 'isLocalhost').mockReturnValue(true)
    expect(Api.isLocalhost()).toBe(true)
    expect(spy).toHaveBeenCalled()
  })

  it('should proxy hydration script', () => {
    const item = Api.getItem()
    const spy = vi.spyOn(item, 'getHydrationScript').mockReturnValue('<script></script>')
    expect(Api.getHydrationScript()).toBe('<script></script>')
    expect(spy).toHaveBeenCalled()
  })

  it('should proxy origin methods', () => {
    const item = Api.getItem()
    const getSpy = vi.spyOn(item, 'getOrigin').mockReturnValue('https://api.test')
    const setSpy = vi.spyOn(item, 'setOrigin')

    expect(Api.getOrigin()).toBe('https://api.test')
    Api.setOrigin('https://api.new')

    expect(getSpy).toHaveBeenCalled()
    expect(setSpy).toHaveBeenCalledWith('https://api.new')
  })

  it('should proxy helper methods', () => {
    const item = Api.getItem()
    const getUrlSpy = vi.spyOn(item, 'getUrl').mockReturnValue('/full/path')
    const getBodySpy = vi.spyOn(item, 'getBody').mockReturnValue('body')
    const getBodyForGetSpy = vi.spyOn(item, 'getBodyForGet').mockReturnValue('?query')

    expect(Api.getUrl('path', false)).toBe('/full/path')
    expect(Api.getBody({ a: 1 })).toBe('body')
    expect(Api.getBodyForGet({ b: 2 })).toBe('?query')

    expect(getUrlSpy).toHaveBeenCalledWith('path', false)
    expect(getBodySpy).toHaveBeenCalledWith({ a: 1 }, ApiMethodItem.get)
    expect(getBodyForGetSpy).toHaveBeenCalledWith({ b: 2 }, '', ApiMethodItem.get)
  })

  it('should proxy config methods to instance', () => {
    const item = Api.getItem()
    const setTimeoutSpy = vi.spyOn(item, 'setTimeout')
    const setUrlSpy = vi.spyOn(item, 'setUrl')
    const setHeadersSpy = vi.spyOn(item, 'setHeaders')
    const setOriginSpy = vi.spyOn(item, 'setOrigin')
    const setRequestDefaultSpy = vi.spyOn(item, 'setRequestDefault')
    const setDevModeSpy = vi.spyOn(Api.getResponse(), 'setDevMode')
    const setWrapperSpy = vi.spyOn(item, 'setWrapper')

    const wrapper = async (callback: any) => callback()

    Api.setConfig({
      timeout: 100,
      urlRoot: '/api/v2/',
      headers: { Authorization: 'Bearer test' },
      origin: 'https://example.com',
      requestDefault: { def: 1 },
      devMode: true,
      wrapper
    })

    expect(setTimeoutSpy).toHaveBeenCalledWith(100)
    expect(setUrlSpy).toHaveBeenCalledWith('/api/v2/')
    expect(setHeadersSpy).toHaveBeenCalledWith({ Authorization: 'Bearer test' })
    expect(setOriginSpy).toHaveBeenCalledWith('https://example.com')
    expect(setRequestDefaultSpy).toHaveBeenCalledWith({ def: 1 })
    expect(setDevModeSpy).toHaveBeenCalledWith(true)
    expect(setWrapperSpy).toHaveBeenCalledWith(wrapper)
  })

  it('should proxy setWrapper method to instance', () => {
    const item = Api.getItem()
    const setWrapperSpy = vi.spyOn(item, 'setWrapper')
    const wrapper = async (callback: any) => callback()

    Api.setWrapper(wrapper)
    expect(setWrapperSpy).toHaveBeenCalledWith(wrapper)
  })

  it('should have proxy HTTP methods', async () => {
    const item = Api.getItem()
    const requestSpy = vi.spyOn(item, 'request').mockResolvedValue('req')
    const getSpy = vi.spyOn(item, 'get').mockResolvedValue('get')
    const postSpy = vi.spyOn(item, 'post').mockResolvedValue('post')
    const putSpy = vi.spyOn(item, 'put').mockResolvedValue('put')
    const patchSpy = vi.spyOn(item, 'patch').mockResolvedValue('patch')
    const deleteSpy = vi.spyOn(item, 'delete').mockResolvedValue('delete')

    await expect(Api.request('test')).resolves.toBe('req')
    await expect(Api.get({ path: 'test' })).resolves.toBe('get')
    await expect(Api.post({ path: 'test' })).resolves.toBe('post')
    await expect(Api.put({ path: 'test' })).resolves.toBe('put')
    await expect(Api.patch({ path: 'test' })).resolves.toBe('patch')
    await expect(Api.delete({ path: 'test' })).resolves.toBe('delete')

    expect(requestSpy).toHaveBeenCalled()
    expect(getSpy).toHaveBeenCalled()
    expect(postSpy).toHaveBeenCalled()
    expect(putSpy).toHaveBeenCalled()
    expect(patchSpy).toHaveBeenCalled()
    expect(deleteSpy).toHaveBeenCalled()
  })
})
