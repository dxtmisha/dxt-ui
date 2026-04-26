// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Api } from '../Api'
import { ApiInstance } from '../ApiInstance'

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

  it('should proxy config methods to instance', () => {
    const item = Api.getItem()
    const setTimeoutSpy = vi.spyOn(item, 'setTimeout')
    const setUrlSpy = vi.spyOn(item, 'setUrl')
    const setHeadersSpy = vi.spyOn(item, 'setHeaders')
    const setOriginSpy = vi.spyOn(item, 'setOrigin')
    const setRequestDefaultSpy = vi.spyOn(item, 'setRequestDefault')

    Api.setConfig({
      timeout: 100,
      urlRoot: '/api/v2/',
      headers: { Authorization: 'Bearer test' },
      origin: 'https://example.com',
      requestDefault: { def: 1 }
    })

    expect(setTimeoutSpy).toHaveBeenCalledWith(100)
    expect(setUrlSpy).toHaveBeenCalledWith('/api/v2/')
    expect(setHeadersSpy).toHaveBeenCalledWith({ Authorization: 'Bearer test' })
    expect(setOriginSpy).toHaveBeenCalledWith('https://example.com')
    expect(setRequestDefaultSpy).toHaveBeenCalledWith({ def: 1 })
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
