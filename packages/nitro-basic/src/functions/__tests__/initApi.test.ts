import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Api, ServerStorage, UrlItem } from '@dxtmisha/functional-basic'
import { initApi } from '../initApi'

describe('initApi', () => {
  let storageRecord: Record<string, unknown>

  beforeEach(() => {
    storageRecord = {}
    ServerStorage.init(() => storageRecord)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should set Api origin to request origin and UrlItem to full request URL', () => {
      const setOriginSpy = vi.spyOn(Api, 'setOrigin')
      const urlInstance = UrlItem.getInstance()
      const setUrlSpy = vi.spyOn(urlInstance, 'set')

      const request = new Request('https://api.dxtmisha.com:8443/v1/orders?page=3&limit=10#summary')
      initApi(request)

      expect(setOriginSpy).toHaveBeenCalledTimes(1)
      expect(setOriginSpy).toHaveBeenCalledWith('https://api.dxtmisha.com:8443')
      expect(setUrlSpy).toHaveBeenCalledTimes(1)
      expect(setUrlSpy).toHaveBeenCalledWith('https://api.dxtmisha.com:8443/v1/orders?page=3&limit=10#summary')
    })

    it('should update UrlItem state with pathname, query parameters, and hash from request', () => {
      const request = new Request('http://localhost:3000/catalog/shoes?color=black&size=42#reviews')
      initApi(request)

      const urlInstance = UrlItem.getInstance()
      expect(urlInstance.origin).toBe('http://localhost:3000')
      expect(urlInstance.pathname).toBe('/catalog/shoes')
      expect(urlInstance.getParam('color')).toBe('black')
      expect(urlInstance.getParam('size')).toBe('42')
      expect(urlInstance.hash).toBe('#reviews')
    })
  })

  describe('Boundary values and sequential requests', () => {
    it('should handle root origin URLs without path or query', () => {
      const setOriginSpy = vi.spyOn(Api, 'setOrigin')
      const request = new Request('https://example.com')

      initApi(request)

      expect(setOriginSpy).toHaveBeenCalledWith('https://example.com')
      expect(UrlItem.getInstance().pathname).toBe('/')
      expect(UrlItem.getInstance().href).toBe('https://example.com/')
    })

    it('should overwrite previous request origin and URL on subsequent SSR requests', () => {
      const setOriginSpy = vi.spyOn(Api, 'setOrigin')

      initApi(new Request('https://first.example.com/page-1?lang=en'))
      expect(setOriginSpy).toHaveBeenLastCalledWith('https://first.example.com')
      expect(UrlItem.getInstance().getParam('lang')).toBe('en')

      initApi(new Request('https://second.example.com:4000/page-2?lang=ru'))
      expect(setOriginSpy).toHaveBeenLastCalledWith('https://second.example.com:4000')
      expect(UrlItem.getInstance().pathname).toBe('/page-2')
      expect(UrlItem.getInstance().getParam('lang')).toBe('ru')
    })
  })

  describe('Error boundaries', () => {
    it('should throw TypeError when request has an invalid URL', () => {
      const invalidRequest = { url: 'invalid-url' } as Request
      expect(() => initApi(invalidRequest)).toThrow(TypeError)
    })
  })
})
