// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Api } from '../Api'
import { ApiInstance } from '../ApiInstance'
import { ServerStorage } from '../ServerStorage'
import {
  type ApiFetch,
  ApiMethodItem,
  type ApiPreparationEnd
} from '../../types/apiTypes'

describe('Api', () => {
  beforeEach(() => {
    ServerStorage.reset()
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should return a singleton ApiInstance from getItem()', () => {
    const firstInstance = Api.getItem()
    const secondInstance = Api.getItem()

    expect(firstInstance).toBe(secondInstance)
    expect(firstInstance).toBeInstanceOf(ApiInstance)
  })

  it('should return status, response, and hydration instances from singleton', () => {
    const instance = Api.getItem()

    expect(Api.getStatus()).toBe(instance.getStatus())
    expect(Api.getResponse()).toBe(instance.getResponse())
    expect(Api.getHydration()).toBe(instance.getHydration())
  })

  it('should proxy isLocalhost() to the underlying instance', () => {
    const instance = Api.getItem()
    const isLocalhostSpy = vi.spyOn(instance, 'isLocalhost').mockReturnValue(true)

    expect(Api.isLocalhost()).toBe(true)
    expect(isLocalhostSpy).toHaveBeenCalledOnce()
  })

  it('should proxy getHydrationScript() to the underlying instance', () => {
    const instance = Api.getItem()
    const hydrationScriptSpy = vi
      .spyOn(instance, 'getHydrationScript')
      .mockReturnValue('<script id="__ui:api:hydration:id__">[]</script>')

    expect(Api.getHydrationScript()).toBe('<script id="__ui:api:hydration:id__">[]</script>')
    expect(hydrationScriptSpy).toHaveBeenCalledOnce()
  })

  it('should proxy getOrigin() and setOrigin() to the underlying instance', () => {
    const instance = Api.getItem()
    const getOriginSpy = vi.spyOn(instance, 'getOrigin').mockReturnValue('https://api.example.com/api/')
    const setOriginSpy = vi.spyOn(instance, 'setOrigin')

    expect(Api.getOrigin()).toBe('https://api.example.com/api/')
    Api.setOrigin('https://new.example.com')

    expect(getOriginSpy).toHaveBeenCalledOnce()
    expect(setOriginSpy).toHaveBeenCalledWith('https://new.example.com')
  })

  it('should proxy URL and body helper methods with both default and explicit arguments', () => {
    const instance = Api.getItem()
    const getUrlSpy = vi.spyOn(instance, 'getUrl').mockReturnValue('/api/users')
    const getBodySpy = vi.spyOn(instance, 'getBody').mockReturnValue('{"id":1}')
    const getBodyForGetSpy = vi.spyOn(instance, 'getBodyForGet').mockReturnValue('?page=2')

    expect(Api.getUrl('users')).toBe('/api/users')
    expect(getUrlSpy).toHaveBeenCalledWith('users', true)

    expect(Api.getUrl('users', false)).toBe('/api/users')
    expect(getUrlSpy).toHaveBeenCalledWith('users', false)

    expect(Api.getBody()).toBe('{"id":1}')
    expect(getBodySpy).toHaveBeenCalledWith({}, ApiMethodItem.get)

    expect(Api.getBody({ id: 1 }, ApiMethodItem.post)).toBe('{"id":1}')
    expect(getBodySpy).toHaveBeenCalledWith({ id: 1 }, ApiMethodItem.post)

    expect(Api.getBodyForGet({ page: 2 })).toBe('?page=2')
    expect(getBodyForGetSpy).toHaveBeenCalledWith({ page: 2 }, '', ApiMethodItem.get)

    expect(Api.getBodyForGet({ page: 2 }, '/users', ApiMethodItem.post)).toBe('?page=2')
    expect(getBodyForGetSpy).toHaveBeenCalledWith({ page: 2 }, '/users', ApiMethodItem.post)
  })

  it('should proxy individual setter methods to the underlying instance', () => {
    const instance = Api.getItem()
    const setHeadersSpy = vi.spyOn(instance, 'setHeaders')
    const setRequestDefaultSpy = vi.spyOn(instance, 'setRequestDefault')
    const setUrlSpy = vi.spyOn(instance, 'setUrl')
    const setPreparationSpy = vi.spyOn(instance, 'setPreparation')
    const setEndSpy = vi.spyOn(instance, 'setEnd')
    const setTimeoutSpy = vi.spyOn(instance, 'setTimeout')
    const setWrapperSpy = vi.spyOn(instance, 'setWrapper')

    const preparationCallback = async (_apiFetch: ApiFetch): Promise<void> => {}
    const endCallback = async (_query: Response, _apiFetch: ApiFetch): Promise<ApiPreparationEnd> => ({})
    const wrapperCallback = async <R>(callback: () => Promise<R>, _apiFetch: ApiFetch): Promise<R> => callback()

    Api.setHeaders({ 'X-Custom': 'value' })
    Api.setRequestDefault({ locale: 'en' })
    Api.setUrl('/v2/api/')
    Api.setPreparation(preparationCallback)
    Api.setEnd(endCallback)
    Api.setTimeout(5000)
    Api.setWrapper(wrapperCallback)

    expect(setHeadersSpy).toHaveBeenCalledWith({ 'X-Custom': 'value' })
    expect(setRequestDefaultSpy).toHaveBeenCalledWith({ locale: 'en' })
    expect(setUrlSpy).toHaveBeenCalledWith('/v2/api/')
    expect(setPreparationSpy).toHaveBeenCalledWith(preparationCallback)
    expect(setEndSpy).toHaveBeenCalledWith(endCallback)
    expect(setTimeoutSpy).toHaveBeenCalledWith(5000)
    expect(setWrapperSpy).toHaveBeenCalledWith(wrapperCallback)
  })

  it('should apply all configuration options in setConfig()', () => {
    const instance = Api.getItem()
    const setUrlSpy = vi.spyOn(instance, 'setUrl')
    const setHeadersSpy = vi.spyOn(instance, 'setHeaders')
    const setRequestDefaultSpy = vi.spyOn(instance, 'setRequestDefault')
    const setPreparationSpy = vi.spyOn(instance, 'setPreparation')
    const setEndSpy = vi.spyOn(instance, 'setEnd')
    const setTimeoutSpy = vi.spyOn(instance, 'setTimeout')
    const setDevModeSpy = vi.spyOn(Api.getResponse(), 'setDevMode')
    const setOriginSpy = vi.spyOn(instance, 'setOrigin')
    const setWrapperSpy = vi.spyOn(instance, 'setWrapper')

    const preparationCallback = async (_apiFetch: ApiFetch): Promise<void> => {}
    const endCallback = async (_query: Response, _apiFetch: ApiFetch): Promise<ApiPreparationEnd> => ({ reset: false })
    const wrapperCallback = async <R>(callback: () => Promise<R>, _apiFetch: ApiFetch): Promise<R> => callback()

    Api.setConfig({
      urlRoot: '/api/v3/',
      headers: { Authorization: 'Bearer token' },
      requestDefault: { defaultKey: 'defaultValue' },
      preparation: preparationCallback,
      end: endCallback,
      timeout: 3000,
      devMode: true,
      origin: 'https://example.org',
      wrapper: wrapperCallback
    })

    expect(setUrlSpy).toHaveBeenCalledWith('/api/v3/')
    expect(setHeadersSpy).toHaveBeenCalledWith({ Authorization: 'Bearer token' })
    expect(setRequestDefaultSpy).toHaveBeenCalledWith({ defaultKey: 'defaultValue' })
    expect(setPreparationSpy).toHaveBeenCalledWith(preparationCallback)
    expect(setEndSpy).toHaveBeenCalledWith(endCallback)
    expect(setTimeoutSpy).toHaveBeenCalledWith(3000)
    expect(setDevModeSpy).toHaveBeenCalledWith(true)
    expect(setOriginSpy).toHaveBeenCalledWith('https://example.org')
    expect(setWrapperSpy).toHaveBeenCalledWith(wrapperCallback)
  })

  it('should safely ignore empty or non-object values in setConfig()', () => {
    const instance = Api.getItem()
    const setUrlSpy = vi.spyOn(instance, 'setUrl')

    Api.setConfig()
    Api.setConfig({})

    expect(setUrlSpy).not.toHaveBeenCalled()
  })

  it('should proxy HTTP verb methods to the underlying instance', async () => {
    const instance = Api.getItem()
    const requestSpy = vi.spyOn(instance, 'request').mockResolvedValue('requestResult')
    const getSpy = vi.spyOn(instance, 'get').mockResolvedValue('getResult')
    const postSpy = vi.spyOn(instance, 'post').mockResolvedValue('postResult')
    const putSpy = vi.spyOn(instance, 'put').mockResolvedValue('putResult')
    const patchSpy = vi.spyOn(instance, 'patch').mockResolvedValue('patchResult')
    const deleteSpy = vi.spyOn(instance, 'delete').mockResolvedValue('deleteResult')

    await expect(Api.request<string>('endpoint')).resolves.toBe('requestResult')
    await expect(Api.get<string>({ path: 'endpoint' })).resolves.toBe('getResult')
    await expect(Api.post<string>({ path: 'endpoint' })).resolves.toBe('postResult')
    await expect(Api.put<string>({ path: 'endpoint' })).resolves.toBe('putResult')
    await expect(Api.patch<string>({ path: 'endpoint' })).resolves.toBe('patchResult')
    await expect(Api.delete<string>({ path: 'endpoint' })).resolves.toBe('deleteResult')

    expect(requestSpy).toHaveBeenCalledWith('endpoint')
    expect(getSpy).toHaveBeenCalledWith({ path: 'endpoint' })
    expect(postSpy).toHaveBeenCalledWith({ path: 'endpoint' })
    expect(putSpy).toHaveBeenCalledWith({ path: 'endpoint' })
    expect(patchSpy).toHaveBeenCalledWith({ path: 'endpoint' })
    expect(deleteSpy).toHaveBeenCalledWith({ path: 'endpoint' })
  })
})
