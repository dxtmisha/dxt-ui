import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { RouterItemRef } from '../RouterItemRef'
import type { Router } from 'vue-router'

describe('RouterItemRef', () => {
  let mockRouter: any

  beforeEach(() => {
    ServerStorage.setErrorStatus(true)
    ServerStorage.remove('__ui:router-item-ref__')

    mockRouter = {
      resolve: vi.fn(),
      push: vi.fn().mockResolvedValue(undefined)
    }
  })

  describe('set and get', () => {
    it('should set and get router instance', () => {
      RouterItemRef.set(mockRouter as unknown as Router)
      expect(RouterItemRef.get()).toBe(mockRouter)
    })

    it('should setOneTime only once', () => {
      const secondRouter = { id: 'second' } as any
      RouterItemRef.setOneTime(mockRouter as unknown as Router)
      RouterItemRef.setOneTime(secondRouter)
      expect(RouterItemRef.get()).toBe(mockRouter)
    })
  })

  describe('getLink', () => {
    it('should return href from resolve', () => {
      RouterItemRef.set(mockRouter as unknown as Router)
      mockRouter.resolve.mockReturnValue({ href: '/test-path' })

      const result = RouterItemRef.getLink('test-name', { id: 1 }, { q: '123' })
      expect(mockRouter.resolve).toHaveBeenCalledWith({
        name: 'test-name',
        params: { id: 1 },
        query: { q: '123' }
      })
      expect(result).toBe('/test-path')
    })

    it('should return undefined if router is not set', () => {
      const result = RouterItemRef.getLink('test-name')
      expect(result).toBeUndefined()
    })
  })

  describe('getHref', () => {
    it('should return ConstrHrefProps with href', () => {
      RouterItemRef.set(mockRouter as unknown as Router)
      mockRouter.resolve.mockReturnValue({ href: '/test-href' })

      const result = RouterItemRef.getHref('test-name')
      expect(result).toEqual({ href: '/test-href' })
    })

    it('should return empty object if name is missing', () => {
      const result = RouterItemRef.getHref()
      expect(result).toEqual({})
    })

    it('should return empty object if link cannot be resolved', () => {
      RouterItemRef.set(mockRouter as unknown as Router)
      mockRouter.resolve.mockReturnValue({}) // No href

      const result = RouterItemRef.getHref('invalid')
      expect(result).toEqual({})
    })
  })

  describe('push', () => {
    it('should call router.push', () => {
      RouterItemRef.set(mockRouter as unknown as Router)
      RouterItemRef.push('/go-to')
      expect(mockRouter.push).toHaveBeenCalledWith('/go-to')
    })

    it('should do nothing if router is not set', () => {
      RouterItemRef.push('/go-to')
      expect(mockRouter.push).not.toHaveBeenCalled()
    })
  })

  describe('rawToHref', () => {
    it('should convert object with name to href properties', () => {
      RouterItemRef.set(mockRouter as unknown as Router)
      mockRouter.resolve.mockReturnValue({ href: '/raw-href' })

      const result = RouterItemRef.rawToHref({ name: 'home' })
      expect(result).toEqual({ href: '/raw-href' })
    })

    it('should return empty object if to is string', () => {
      const result = RouterItemRef.rawToHref('/home')
      expect(result).toEqual({})
    })

    it('should return empty object if to is null or undefined', () => {
      expect(RouterItemRef.rawToHref()).toEqual({})
      expect(RouterItemRef.rawToHref(null as any)).toEqual({})
    })

    it('should return empty object if to object has no name', () => {
      expect(RouterItemRef.rawToHref({ path: '/home' } as any)).toEqual({})
    })
  })
})
