import { afterEach, describe, expect, it } from 'vitest'
import { createSSRApp } from 'vue'

import { appContext } from '../../functions/initContext'
import { initHeaders } from '../../functions/initHeaders'
import { NITRO_API_HEADERS } from '../../types/nitroAppTypes'
import { useHeaders } from '../useHeaders'

describe('useHeaders', () => {
  afterEach(() => {
    appContext.unset()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return entire Headers instance when called without arguments inside appContext', () => {
      const headers = new Headers({
        'Content-Type': 'text/html;charset=UTF-8',
        'X-Custom': 'nitro-value'
      })

      appContext.call({ headers }, () => {
        const result = useHeaders()
        expect(result).toBe(headers)
        expect(result?.get('Content-Type')).toBe('text/html;charset=UTF-8')
        expect(result?.get('X-Custom')).toBe('nitro-value')
      })
    })

    it('should return specific header value by name (case-insensitive)', () => {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token-123'
      })

      appContext.call({ headers }, () => {
        expect(useHeaders('Content-Type')).toBe('application/json')
        expect(useHeaders('content-type')).toBe('application/json')
        expect(useHeaders('CONTENT-TYPE')).toBe('application/json')
        expect(useHeaders('Authorization')).toBe('Bearer token-123')
      })
    })

    it('should return undefined when requested header name does not exist', () => {
      const headers = new Headers({ 'Content-Type': 'text/html' })

      appContext.call({ headers }, () => {
        expect(useHeaders('X-Non-Existent')).toBeUndefined()
      })
    })
  })

  describe('Vue dependency injection (NITRO_API_HEADERS) & fallback precedence', () => {
    it('should retrieve headers provided to Vue app via runWithContext()', () => {
      const app = createSSRApp({ template: '<div />' })
      const { headers } = initHeaders(app)
      headers.set('X-App-Header', 'from-vue-provide')

      app.runWithContext(() => {
        expect(useHeaders()).toBe(headers)
        expect(useHeaders('Content-Type')).toBe('text/html;charset=UTF-8')
        expect(useHeaders('X-App-Header')).toBe('from-vue-provide')
      })
    })

    it('should prioritize Vue inject (NITRO_API_HEADERS) over appContext fallback when both exist', () => {
      const app = createSSRApp({ template: '<div />' })
      const injectedHeaders = new Headers({ 'X-Source': 'vue-inject' })
      const contextHeaders = new Headers({ 'X-Source': 'unctx-context' })

      app.provide(NITRO_API_HEADERS, injectedHeaders)

      appContext.call({ headers: contextHeaders }, () => {
        app.runWithContext(() => {
          expect(useHeaders()).toBe(injectedHeaders)
          expect(useHeaders('X-Source')).toBe('vue-inject')
        })

        // Outside app.runWithContext, falls back to appContext
        expect(useHeaders()).toBe(contextHeaders)
        expect(useHeaders('X-Source')).toBe('unctx-context')
      })
    })
  })

  describe('Empty, undefined, and inactive context boundaries', () => {
    it('should return undefined when neither Vue inject nor appContext is active', () => {
      expect(useHeaders()).toBeUndefined()
      expect(useHeaders('Content-Type')).toBeUndefined()
    })

    it('should return entire Headers object when undefined is explicitly passed', () => {
      const headers = new Headers({ 'X-Test': '1' })

      appContext.call({ headers }, () => {
        expect(useHeaders(undefined)).toBe(headers)
      })
    })

    it('should return undefined (and not Headers object or throw TypeError) when empty string is passed', () => {
      const headers = new Headers({ 'Content-Type': 'text/html' })

      appContext.call({ headers }, () => {
        const value = useHeaders('')
        expect(value).toBeUndefined()
        expect(value).not.toBeInstanceOf(Headers)
      })
    })

    it('should handle typed union string | undefined parameter seamlessly', () => {
      const headers = new Headers({ 'Accept-Language': 'ru,en;q=0.9,vi;q=0.8' })

      appContext.call({ headers }, () => {
        const dynamicName: string | undefined = 'Accept-Language'
        const missingName: string | undefined = undefined

        expect(useHeaders(dynamicName)).toBe('ru,en;q=0.9,vi;q=0.8')
        expect(useHeaders(missingName)).toBe(headers)
      })
    })
  })

  describe('Header mutations and concurrent SSR request isolation', () => {
    it('should reflect in-place header mutations (such as Set-Cookie updates)', () => {
      const headers = new Headers()

      appContext.call({ headers }, () => {
        const currentHeaders = useHeaders()
        currentHeaders?.set('Set-Cookie', 'locale=vi; Path=/')

        expect(useHeaders('Set-Cookie')).toBe('locale=vi; Path=/')
      })
    })

    it('should isolate headers across concurrent async SSR requests', async () => {
      const simulateSsrRequest = async (tenant: string, delay: number) => {
        const headers = new Headers({ 'X-Tenant': tenant })

        return await appContext.call({ headers }, async () => {
          await new Promise(resolve => setTimeout(resolve, delay))
          useHeaders()?.set('X-Processed-By', `worker-${tenant}`)

          return {
            tenant: useHeaders('X-Tenant'),
            processedBy: useHeaders('X-Processed-By')
          }
        })
      }

      const [reqA, reqB] = await Promise.all([
        simulateSsrRequest('tenant-a', 20),
        simulateSsrRequest('tenant-b', 5)
      ])

      expect(reqA).toEqual({
        tenant: 'tenant-a',
        processedBy: 'worker-tenant-a'
      })
      expect(reqB).toEqual({
        tenant: 'tenant-b',
        processedBy: 'worker-tenant-b'
      })
      expect(useHeaders()).toBeUndefined()
    })
  })
})

