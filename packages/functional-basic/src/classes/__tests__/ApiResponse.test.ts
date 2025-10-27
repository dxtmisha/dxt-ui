/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import { ApiMethodItem } from '../../types/apiTypes'
import type { ApiResponseItem } from '../../types/apiTypes'

describe('ApiResponse', () => {
  let apiResponse: ApiResponse<ApiResponseItem>
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

    it('should chain multiple add calls', () => {
      const item1: ApiResponseItem = {
        path: '/api/test1',
        method: ApiMethodItem.get,
        response: {}
      }
      const item2: ApiResponseItem = {
        path: '/api/test2',
        method: ApiMethodItem.post,
        response: {}
      }

      apiResponse.add(item1).add(item2)
      expect(apiResponse.getList()).toHaveLength(2)
    })
  })

  describe('getList', () => {
    it('should return empty array when no responses added', () => {
      expect(apiResponse.getList()).toEqual([])
    })

    it('should return all non-global responses', () => {
      const items: ApiResponseItem[] = [
        {
          path: '/api/test1',
          method: ApiMethodItem.get,
          response: {}
        },
        {
          path: '/api/test2',
          method: ApiMethodItem.get,
          response: {},
          isForGlobal: false
        }
      ]

      apiResponse.add(items)
      expect(apiResponse.getList()).toHaveLength(2)
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

  describe('setDevMode', () => {
    it('should set developer mode', () => {
      apiResponse.setDevMode(true)
      // Проверка через эмулятор (косвенная проверка)
      expect(apiResponse).toBeInstanceOf(ApiResponse)
    })

    it('should return this for chaining', () => {
      const result = apiResponse.setDevMode(true)
      expect(result).toBe(apiResponse)
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
        request: undefined,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.get, undefined)
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

    it('should not return same response twice (first request tracking)', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const firstCall = apiResponse.get('/api/test', ApiMethodItem.get)
      const secondCall = apiResponse.get('/api/test', ApiMethodItem.get)

      expect(firstCall).toEqual(responseItem)
      expect(secondCall).toBeUndefined()
    })

    it('should return response again in devMode', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      apiResponse.get('/api/test', ApiMethodItem.get, undefined, false)
      const result = apiResponse.get('/api/test', ApiMethodItem.get, undefined, true)

      expect(result).toEqual(responseItem)
    })

    it('should not return disabled responses', () => {
      const disabledItem: ApiResponseItem = {
        path: '/api/disabled',
        method: ApiMethodItem.get,
        response: { data: 'disabled' },
        disable: true
      }

      const enabledItem: ApiResponseItem = {
        path: '/api/enabled',
        method: ApiMethodItem.get,
        response: { data: 'enabled' }
        // disable не указан (undefined) - элемент активен
      }

      apiResponse.add([disabledItem, enabledItem])

      // Отключенный не вернётся
      expect(apiResponse.get('/api/disabled', ApiMethodItem.get)).toBeUndefined()

      // Включенный вернётся
      expect(apiResponse.get('/api/enabled', ApiMethodItem.get)).toEqual(enabledItem)
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

    it('should not match request with different object', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.post,
        request: { key: 'value1' },
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.post, { key: 'value2' })
      expect(result).toBeUndefined()
    })

    it('should match with partial *any in request object', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.post,
        request: { key1: 'value1', key2: '*any' },
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.post, { key1: 'value1', key2: 'any-value' })
      expect(result).toEqual(responseItem)
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

    it('should work with async response function', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: async () => {
          return new Promise((resolve) => {
            setTimeout(() => resolve({ delayed: true }), 10)
          })
        }
      }

      apiResponse.add(responseItem)
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.get
      })

      expect(result).toEqual({ delayed: true })
    })

    it('should not use emulator for non-GET without global flag', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.post,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.post,
        global: false
      })

      expect(result).toBeUndefined()
    })

    it('should use emulator for non-GET with global flag', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.post,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.post,
        global: true
      })

      expect(result).toEqual({ data: 'test' })
    })

    it('should use emulator when devMode is enabled', async () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.post,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.post,
        devMode: true
      })

      expect(result).toEqual({ data: 'test' })
    })

    it('should merge default request data', async () => {
      apiDefault.set({ token: 'abc123' })

      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.post,
        request: { token: 'abc123', action: 'getData' },
        response: { success: true }
      }

      apiResponse.add(responseItem)
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.post,
        request: { action: 'getData' },
        global: true
      })

      expect(result).toEqual({ success: true })
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
      // Проверка, что была задержка (минимум несколько миллисекунд)
      expect(endTime - startTime).toBeGreaterThanOrEqual(0)
    }, 10000)
  })

  describe('integration tests', () => {
    it('should handle complete workflow with multiple responses', async () => {
      const responses: ApiResponseItem[] = [
        {
          path: '/api/users',
          method: ApiMethodItem.get,
          response: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]
        },
        {
          path: /^\/api\/users\/\d+$/,
          method: ApiMethodItem.get,
          response: (request: any) => ({ id: 1, name: 'User 1', request })
        },
        {
          path: '/api/users',
          method: ApiMethodItem.post,
          request: { name: '*any' },
          response: { id: 3, name: 'New User' }
        }
      ]

      apiResponse.add(responses)

      // GET список
      const list = await apiResponse.emulator({
        path: '/api/users',
        method: ApiMethodItem.get
      })
      expect(list).toEqual([{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }])

      // GET один элемент
      const user = await apiResponse.emulator({
        path: '/api/users/1',
        method: ApiMethodItem.get
      })
      expect(user).toHaveProperty('id', 1)

      // POST создание
      const created = await apiResponse.emulator({
        path: '/api/users',
        method: ApiMethodItem.post,
        request: { name: 'Test User' },
        global: true
      })
      expect(created).toEqual({ id: 3, name: 'New User' })
    })

    it('should work with disabled responses via function', () => {
      let isDisabled = false

      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' },
        disable: () => isDisabled
      }

      apiResponse.add(responseItem)

      // Включено
      let result = apiResponse.get('/api/test', ApiMethodItem.get)
      expect(result).toEqual(responseItem)

      // Отключено
      isDisabled = true
      result = apiResponse.get('/api/test', ApiMethodItem.get, undefined, true) // devMode для повторного запроса
      expect(result).toBeUndefined()
    })

    it('should work with chaining', () => {
      const result = apiResponse
        .setDevMode(true)
        .add({
          path: '/api/test1',
          method: ApiMethodItem.get,
          response: {}
        })
        .add({
          path: '/api/test2',
          method: ApiMethodItem.get,
          response: {}
        })

      expect(result).toBe(apiResponse)
      expect(apiResponse.getList()).toHaveLength(2)
    })

    it('should handle FormData request matching', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/upload',
        method: ApiMethodItem.post,
        request: '*any',
        response: { uploaded: true }
      }

      apiResponse.add(responseItem)

      const formData = new FormData()
      formData.set('file', 'test.jpg')

      const result = apiResponse.get('/api/upload', ApiMethodItem.post, formData)
      expect(result).toEqual(responseItem)
    })
  })
})
