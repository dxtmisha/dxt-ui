// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { Api, type ListRecord } from '@dxtmisha/functional'

import { MenuRequest } from '../MenuRequest'
import type { MenuProps } from '../props'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('MenuRequest', () => {
  describe('Static list and request detection', () => {
    it('should return empty array when no list or ajax is provided', () => {
      const request = new MenuRequest({})

      expect(request.item.value).toEqual([])
      expect(request.progress.value).toBe(false)
      expect(request.is()).toBe(false)
    })

    it('should return reactive props.list when provided', () => {
      const props = reactive<MenuProps>({
        list: [{ label: 'One', value: 1 }]
      })
      const request = new MenuRequest(props)

      expect(request.item.value).toEqual([{ label: 'One', value: 1 }])
      expect(request.is()).toBe(false)

      props.list = [{ label: 'Two', value: 2 }]
      expect(request.item.value).toEqual([{ label: 'Two', value: 2 }])
    })

    it('should detect request requirement when ajax or request is provided', () => {
      expect(new MenuRequest({ ajax: '/api/menu' }).is()).toBe(true)
      expect(new MenuRequest({ ajax: () => [] }).is()).toBe(true)
      expect(new MenuRequest({ request: { path: '/api/menu' } }).is()).toBe(true)
    })
  })

  describe('Async fetching, caching, and error recovery', () => {
    it('should fetch via ajax function, manage progress state, and resolve preparation', async () => {
      const fetched: ListRecord = [{ label: 'Remote', value: 'r1' }]
      let resolveFetch!: (value: ListRecord) => void
      const ajax = vi.fn(
        () => new Promise<ListRecord>((resolve) => {
          resolveFetch = resolve
        })
      )

      const request = new MenuRequest({
        ajax,
        list: [{ label: 'Fallback', value: 'f1' }]
      })

      const preparationPromise = request.preparation()
      expect(request.progress.value).toBe(true)

      resolveFetch(fetched)
      const result = await preparationPromise

      expect(result).toBe(true)
      expect(request.progress.value).toBe(false)
      expect(request.item.value).toEqual(fetched)
      expect(ajax).toHaveBeenCalledTimes(1)
    })

    it('should fetch via Api.request when ajax is string or request config is set', async () => {
      const apiSpy = vi.spyOn(Api, 'request').mockResolvedValue([{ label: 'API', value: 'api' }])
      const request = new MenuRequest({
        ajax: '/menu/items',
        request: { global: true }
      })

      await request.update()

      expect(apiSpy).toHaveBeenCalledWith({
        path: '/menu/items',
        global: true
      })
      expect(request.item.value).toEqual([{ label: 'API', value: 'api' }])
      expect(request.progress.value).toBe(false)
    })

    it('should reuse cached buffer when cache is enabled and refetch when disabled', async () => {
      const ajax = vi.fn()
        .mockResolvedValueOnce([{ value: 'first' }])
        .mockResolvedValueOnce([{ value: 'second' }])

      const cachedRequest = new MenuRequest({ ajax, cache: true })
      await cachedRequest.update()
      await cachedRequest.update()

      expect(ajax).toHaveBeenCalledTimes(1)
      expect(cachedRequest.item.value).toEqual([{ value: 'first' }])

      const uncachedRequest = new MenuRequest({ ajax, cache: false })
      await uncachedRequest.update()
      expect(ajax).toHaveBeenCalledTimes(2)
      expect(uncachedRequest.item.value).toEqual([{ value: 'second' }])
    })

    it('should reset progress flag to false when ajax request rejects', async () => {
      const ajax = vi.fn().mockRejectedValue(new Error('Network failure'))
      const request = new MenuRequest({ ajax })

      await expect(request.update()).rejects.toThrow('Network failure')
      expect(request.progress.value).toBe(false)
    })
  })
})
