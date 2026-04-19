// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Api } from '../Api'
import { ServerStorage } from '../ServerStorage'
import { ApiMethodItem } from '../../types/apiTypes'

describe('Api', () => {
  beforeEach(() => {
    ServerStorage.reset()
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.clearAllMocks()
  })

  it('should return ApiInstance singleton via getItem()', () => {
    const instance1 = Api.getItem()
    const instance2 = Api.getItem()
    expect(instance1).toBe(instance2)
    expect(instance1.constructor.name).toBe('ApiInstance')
  })

  it('isLocalhost should proxy to instance', () => {
    const instance = Api.getItem()
    const spy = vi.spyOn(instance, 'isLocalhost').mockReturnValue(true)
    expect(Api.isLocalhost()).toBe(true)
    expect(spy).toHaveBeenCalled()
  })

  it('getStatus should return instance status', () => {
    const status = Api.getStatus()
    expect(status.constructor.name).toBe('ApiStatus')
  })

  it('getResponse should return instance response handler', () => {
    const response = Api.getResponse()
    expect(response.constructor.name).toBe('ApiResponse')
  })

  it('setUrl should update base URL', () => {
    Api.setUrl('/custom/')
    expect(Api.getUrl('ping')).toBe('/custom/ping')
  })

  it('setConfig should update multiple options', () => {
    Api.setConfig({
      urlRoot: '/v2/',
      headers: { 'X-V': '2' }
    })

    expect(Api.getUrl('data')).toBe('/v2/data')
    // Can check headers via instance
    const headers = Api.getItem()['headers'].get() // Accessing protected for test
    expect(headers).toHaveProperty('X-V', '2')
  })

  it('request should proxy to instance request', async () => {
    const instance = Api.getItem()
    const spy = vi.spyOn(instance, 'request').mockResolvedValue({ success: true })

    const result = await Api.request('path')
    expect(spy).toHaveBeenCalledWith('path')
    expect(result).toEqual({ success: true })
  })

  it('HTTP methods should proxy to instance', async () => {
    const instance = Api.getItem()
    const spy = vi.spyOn(instance, 'request').mockResolvedValue({ ok: true })

    await Api.get({ path: 'g' })
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ path: 'g', method: ApiMethodItem.get }))

    await Api.post({ path: 'p' })
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ path: 'p', method: ApiMethodItem.post }))

    await Api.put({ path: 'u' })
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ path: 'u', method: ApiMethodItem.put }))

    await Api.patch({ path: 'h' })
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ path: 'h', method: ApiMethodItem.patch }))

    await Api.delete({ path: 'd' })
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ path: 'd', method: ApiMethodItem.delete }))
  })

  it('getHydrationScript should return hydration string', () => {
    const script = Api.getHydrationScript()
    expect(typeof script).toBe('string')
  })
})
