import { afterEach, describe, expect, it } from 'vitest'
import { appContext } from '../initContext'

describe('initContext (appContext)', () => {
  afterEach(() => {
    appContext.unset()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should expose standard unctx context methods', () => {
      expect(appContext).toBeDefined()
      expect(typeof appContext.use).toBe('function')
      expect(typeof appContext.tryUse).toBe('function')
      expect(typeof appContext.set).toBe('function')
      expect(typeof appContext.unset).toBe('function')
      expect(typeof appContext.call).toBe('function')
      expect(typeof appContext.callAsync).toBe('function')
    })

    it('should provide context synchronously inside call()', () => {
      const payload = { cookie: 'session=abc', id: { code: 10000 } }

      const result = appContext.call(payload, () => {
        expect(appContext.tryUse()).toBe(payload)
        expect(appContext.use()).toBe(payload)
        return appContext.use().cookie
      })

      expect(result).toBe('session=abc')
      expect(appContext.tryUse()).toBeNull()
    })

    it('should preserve context across async await boundaries via AsyncLocalStorage', async () => {
      const payload = { requestId: 'req-42' }

      const result = await appContext.call(payload, async () => {
        expect(appContext.tryUse()).toBe(payload)
        await new Promise(resolve => setTimeout(resolve, 10))
        expect(appContext.tryUse()).toBe(payload)
        return appContext.use().requestId
      })

      expect(result).toBe('req-42')
      expect(appContext.tryUse()).toBeNull()
    })

    it('should support callAsync() execution', async () => {
      const payload = { locale: 'vi-VN' }

      const result = await appContext.callAsync(payload, async () => {
        await Promise.resolve()
        return appContext.tryUse()?.locale
      })

      expect(result).toBe('vi-VN')
      expect(appContext.tryUse()).toBeNull()
    })
  })

  describe('Inactive context and error boundaries', () => {
    it('should return null from tryUse() when no context is active', () => {
      expect(appContext.tryUse()).toBeNull()
    })

    it('should throw an error from use() when no context is active', () => {
      expect(() => appContext.use()).toThrow('Context is not available')
    })

    it('should clean up context even when callback throws synchronously', () => {
      const payload = { test: true }

      expect(() =>
        appContext.call(payload, () => {
          expect(appContext.tryUse()).toBe(payload)
          throw new Error('Sync failure')
        })
      ).toThrow('Sync failure')

      expect(appContext.tryUse()).toBeNull()
    })

    it('should not leak context after rejected async callback', async () => {
      const payload = { test: 'async-error' }

      await expect(
        appContext.call(payload, async () => {
          await Promise.resolve()
          throw new Error('Async failure')
        })
      ).rejects.toThrow('Async failure')

      expect(appContext.tryUse()).toBeNull()
    })
  })

  describe('Singleton mode (set / unset) and conflict detection', () => {
    it('should allow setting and unsetting singleton context', () => {
      const singleton = { mode: 'singleton' }

      appContext.set(singleton)
      expect(appContext.tryUse()).toBe(singleton)

      appContext.unset()
      expect(appContext.tryUse()).toBeNull()
    })

    it('should throw Context conflict when setting different instance without replace flag', () => {
      appContext.set({ id: 1 })

      expect(() => appContext.set({ id: 2 })).toThrow('Context conflict')
    })

    it('should replace existing singleton when replace=true is passed', () => {
      const first = { id: 1 }
      const second = { id: 2 }

      appContext.set(first)
      appContext.set(second, true)

      expect(appContext.tryUse()).toBe(second)
    })
  })

  describe('Statefulness, SSR concurrency, and request isolation', () => {
    it('should strictly isolate concurrent async SSR requests in parallel', async () => {
      const runRequest = async (id: number, delayMs: number) => {
        const contextData = {
          id: { code: id * 1000 },
          cookie: `user=${id}`,
          headers: new Headers({ 'x-request-id': String(id) })
        }

        return await appContext.call(contextData, async () => {
          expect(appContext.tryUse()).toBe(contextData)
          await new Promise(resolve => setTimeout(resolve, delayMs))
          const current = appContext.tryUse()
          current.id.code += 1

          return {
            cookie: current.cookie,
            code: current.id.code,
            header: current.headers.get('x-request-id')
          }
        })
      }

      const [res1, res2, res3] = await Promise.all([
        runRequest(1, 25),
        runRequest(2, 5),
        runRequest(3, 15)
      ])

      expect(res1).toEqual({ cookie: 'user=1', code: 1001, header: '1' })
      expect(res2).toEqual({ cookie: 'user=2', code: 2001, header: '2' })
      expect(res3).toEqual({ cookie: 'user=3', code: 3001, header: '3' })
      expect(appContext.tryUse()).toBeNull()
    })
  })
})
