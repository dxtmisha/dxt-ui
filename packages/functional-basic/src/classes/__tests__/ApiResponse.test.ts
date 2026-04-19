/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import { ApiMethodItem } from '../../types/apiTypes'
import type { ApiResponseItem } from '../../types/apiTypes'

describe('ApiResponse', () => {
  let apiResponse: ApiResponse
  let apiDefault: ApiDefault

  beforeEach(() => {
    apiDefault = new ApiDefault()
    apiResponse = new ApiResponse(apiDefault)
  })

  describe('constructor', () => {
    it('should create ApiResponse instance', () => {
      expect(apiResponse).toBeInstanceOf(ApiResponse)
    })

    it('should initialize with empty response list', () => {
      expect(apiResponse.getList()).toEqual([])
    })
  })

  describe('add', () => {
    it('should add single response item', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      expect(apiResponse.getList()).toHaveLength(1)
      expect(apiResponse.getList()?.[0]).toEqual(responseItem)
    })

    it('should add multiple response items', () => {
      const items: ApiResponseItem[] = [
        {
          path: '/api/test1',
          method: ApiMethodItem.get,
          response: { data: 'test1' }
        },
        {
          path: '/api/test2',
          method: ApiMethodItem.post,
          response: { data: 'test2' }
        }
      ]

      apiResponse.add(items)
      expect(apiResponse.getList()).toHaveLength(2)
    })

    it('should return this for chaining', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: {}
      }

      const result = apiResponse.add(responseItem)
      expect(result).toBe(apiResponse)
    })
  })

  describe('getList', () => {
    it('should return empty array when no responses added', () => {
      expect(apiResponse.getList()).toEqual([])
    })

    it('should filter out global responses', () => {
      const items: ApiResponseItem[] = [
        {
          path: '/api/test1',
          method: ApiMethodItem.get,
          response: {}
        },
        {
          path: '/api/global',
          method: ApiMethodItem.get,
          response: {},
          isForGlobal: true
        }
      ]

      apiResponse.add(items)
      expect(apiResponse.getList()).toHaveLength(1)
      expect(apiResponse.getList()?.[0]?.path).toBe('/api/test1')
    })
  })

  describe('get', () => {
    it('should return undefined when no matching response', () => {
      const result = apiResponse.get('/api/test', ApiMethodItem.get)
      expect(result).toBeUndefined()
    })

    it('should return matching response by path and method', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.get)
      expect(result).toEqual(responseItem)
    })

    it('should match path with RegExp', () => {
      const responseItem: ApiResponseItem = {
        path: /^\/api\/test\/\d+$/,
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test/123', ApiMethodItem.get)
      expect(result).toEqual(responseItem)
    })

    it('should match request with *any marker', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.post,
        request: '*any',
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.post, { foo: 'bar' })
      expect(result).toEqual(responseItem)
    })

    it('should match request with exact object', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.post,
        request: { key: 'value' },
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.post, { key: 'value' })
      expect(result).toEqual(responseItem)
    })

    it('should return undefined if response is disabled', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' },
        disable: true
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.get)
      expect(result).toBeUndefined()
    })

    it('should return undefined if response is disabled via function', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' },
        disable: () => true
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.get)
      expect(result).toBeUndefined()
    })
  })

  describe('emulator', () => {
    it('should return undefined when no matching response', async () => {
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.get
      })

      expect(result).toBeUndefined()
    })

    it('should return emulated response for GET request', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.get
      })

      expect(result).toEqual({ data: 'test' })
    })

    it('should work with response as function', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        request: '*any',
        response: (request: any) => ({ echo: request })
      }

      apiResponse.add(responseItem)
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.get,
        request: { input: 'value' }
      })

      expect(result).toEqual({ echo: { input: 'value' } })
    })

    it('should handle lag simulation', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' },
        lag: true
      }

      apiResponse.add(responseItem)

      const startTime = Date.now()
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.get
      })
      const endTime = Date.now()

      expect(result).toEqual({ data: 'test' })
      expect(endTime - startTime).toBeGreaterThanOrEqual(0)
    })
  })

  describe('setDevMode', () => {
    it('should allow repeating requests when devMode is true', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      apiResponse.setDevMode(true)

      const firstResult = await apiResponse.emulator({ path: '/api/test', method: ApiMethodItem.get })
      const secondResult = await apiResponse.emulator({ path: '/api/test', method: ApiMethodItem.get })

      expect(firstResult).toEqual({ data: 'test' })
      expect(secondResult).toEqual({ data: 'test' })
    })

    it('should not return same response twice when devMode is false', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      apiResponse.setDevMode(false)

      const firstResult = await apiResponse.emulator({ path: '/api/test', method: ApiMethodItem.get })
      const secondResult = await apiResponse.emulator({ path: '/api/test', method: ApiMethodItem.get })

      expect(firstResult).toEqual({ data: 'test' })
      expect(secondResult).toBeUndefined()
    })
  })

  describe('integration scenarios', () => {
    it('should handle complex request matching', async () => {
      apiResponse.add([
        {
          path: '/api/users',
          method: ApiMethodItem.post,
          request: { name: 'Admin' },
          response: { role: 'admin' }
        },
        {
          path: '/api/users',
          method: ApiMethodItem.post,
          request: { name: '*any' },
          response: { role: 'user' }
        }
      ])

      const adminResult = await apiResponse.emulator({
        path: '/api/users',
        method: ApiMethodItem.post,
        request: { name: 'Admin' },
        global: true
      })
      expect(adminResult).toEqual({ role: 'admin' })

      const userResult = await apiResponse.emulator({
        path: '/api/users',
        method: ApiMethodItem.post,
        request: { name: 'John' },
        global: true
      })
      expect(userResult).toEqual({ role: 'user' })
    })
  })
})
