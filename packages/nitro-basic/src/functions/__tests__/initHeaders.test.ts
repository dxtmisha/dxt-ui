import { describe, expect, it, vi } from 'vitest'
import { createSSRApp, inject } from 'vue'
import { NITRO_API_HEADERS } from '../../types/nitroAppTypes'
import { initHeaders } from '../initHeaders'

describe('initHeaders', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should create Headers with default Content-Type and provide it via NITRO_API_HEADERS', () => {
      const app = createSSRApp({ render: () => null })
      const provideSpy = vi.spyOn(app, 'provide')

      const result = initHeaders(app)

      expect(result.headers).toBeInstanceOf(Headers)
      expect(result.headers.get('Content-Type')).toBe('text/html;charset=UTF-8')
      expect(provideSpy).toHaveBeenCalledTimes(1)
      expect(provideSpy).toHaveBeenCalledWith(NITRO_API_HEADERS, result.headers)

      app.runWithContext(() => {
        const injected = inject<Headers>(NITRO_API_HEADERS)
        expect(injected).toBe(result.headers)
        expect(injected?.get('content-type')).toBe('text/html;charset=UTF-8')
      })
    })
  })

  describe('Reference sharing and header mutations', () => {
    it('should reflect mutations made to returned headers in the injected instance', () => {
      const app = createSSRApp({ render: () => null })
      const { headers } = initHeaders(app)

      headers.set('Cache-Control', 'no-store')
      headers.set('Set-Cookie', 'session=123; Path=/; HttpOnly')

      app.runWithContext(() => {
        const injected = inject<Headers>(NITRO_API_HEADERS)
        expect(injected?.get('Cache-Control')).toBe('no-store')
        expect(injected?.get('Set-Cookie')).toBe('session=123; Path=/; HttpOnly')
      })
    })

    it('should allow overriding default Content-Type header', () => {
      const app = createSSRApp({ render: () => null })
      const { headers } = initHeaders(app)

      headers.set('Content-Type', 'application/json;charset=UTF-8')
      expect(headers.get('Content-Type')).toBe('application/json;charset=UTF-8')
    })
  })

  describe('SSR request isolation', () => {
    it('should create independent Headers instances for different app instances', () => {
      const app1 = createSSRApp({ render: () => null })
      const app2 = createSSRApp({ render: () => null })

      const res1 = initHeaders(app1)
      const res2 = initHeaders(app2)

      res1.headers.set('X-Request-Id', 'req-1')
      res2.headers.set('X-Request-Id', 'req-2')

      expect(res1.headers).not.toBe(res2.headers)
      expect(res1.headers.get('X-Request-Id')).toBe('req-1')
      expect(res2.headers.get('X-Request-Id')).toBe('req-2')
    })
  })
})
