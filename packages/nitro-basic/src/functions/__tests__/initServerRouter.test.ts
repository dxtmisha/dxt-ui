import { describe, expect, it, vi } from 'vitest'
import type { Router } from 'vue-router'
import { initServerRouter } from '../initServerRouter'

describe('initServerRouter', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should push request pathname to router and await router.isReady() in sequential order', async () => {
      const callOrder: string[] = []
      const router = {
        push: vi.fn(async (path: string) => {
          await new Promise(resolve => setTimeout(resolve, 5))
          callOrder.push(`push:${path}`)
        }),
        isReady: vi.fn(async () => {
          await new Promise(resolve => setTimeout(resolve, 5))
          callOrder.push('isReady')
        })
      } as unknown as Router

      const request = new Request('https://dxtmisha.com/catalog/items?page=2#top')
      await initServerRouter(request, router)

      expect(router.push).toHaveBeenCalledTimes(1)
      expect(router.push).toHaveBeenCalledWith('/catalog/items')
      expect(router.isReady).toHaveBeenCalledTimes(1)
      expect(callOrder).toEqual(['push:/catalog/items', 'isReady'])
    })
  })

  describe('Nullish and optional router boundaries', () => {
    it('should resolve without errors when router is undefined', async () => {
      const request = new Request('https://dxtmisha.com/about')
      await expect(initServerRouter(request, undefined)).resolves.toBeUndefined()
    })

    it('should resolve without errors when router argument is omitted', async () => {
      const request = new Request('https://dxtmisha.com/about')
      await expect(initServerRouter(request)).resolves.toBeUndefined()
    })
  })

  describe('Root, nested, and Unicode URL paths', () => {
    it('should push "/" for root domain requests', async () => {
      const router = {
        push: vi.fn().mockResolvedValue(undefined),
        isReady: vi.fn().mockResolvedValue(undefined)
      } as unknown as Router

      await initServerRouter(new Request('https://example.com'), router)
      expect(router.push).toHaveBeenCalledWith('/')
    })

    it('should handle percent-encoded Unicode paths', async () => {
      const router = {
        push: vi.fn().mockResolvedValue(undefined),
        isReady: vi.fn().mockResolvedValue(undefined)
      } as unknown as Router

      await initServerRouter(new Request('https://example.com/новости/tiếng-việt'), router)
      expect(router.push).toHaveBeenCalledWith('/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/ti%E1%BA%BFng-vi%E1%BB%87t')
    })
  })

  describe('Error boundaries', () => {
    it('should propagate error if router.push rejects', async () => {
      const router = {
        push: vi.fn().mockRejectedValue(new Error('Navigation aborted')),
        isReady: vi.fn()
      } as unknown as Router

      const request = new Request('https://example.com/restricted')
      await expect(initServerRouter(request, router)).rejects.toThrow('Navigation aborted')
      expect(router.isReady).not.toHaveBeenCalled()
    })
  })
})

