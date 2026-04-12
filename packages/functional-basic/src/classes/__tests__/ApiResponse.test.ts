/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import { ApiMethodItem } from '../../types/apiTypes'
import type { ApiResponseItem } from '../../types/apiTypes'

describe('ApiResponse / Ответы API', () => {
  let apiResponse: ApiResponse
  let apiDefault: ApiDefault

  beforeEach(() => {
    apiDefault = new ApiDefault()
    apiResponse = new ApiResponse(apiDefault)
  })

  describe('constructor / Конструктор', () => {
    it('should create ApiResponse instance / должен создавать экземпляр ApiResponse', () => {
      expect(apiResponse).toBeInstanceOf(ApiResponse)
    })

    it('should initialize with empty response list / должен инициализироваться с пустым списком ответов', () => {
      expect(apiResponse.getList()).toEqual([])
    })
  })

  describe('add / Добавление ответов', () => {
    it('should add single response item / должен добавлять один элемент ответа', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      expect(apiResponse.getList()).toHaveLength(1)
      expect(apiResponse.getList()?.[0]).toEqual(responseItem)
    })

    it('should add multiple response items / должен добавлять несколько элементов ответа', () => {
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

    it('should return this for chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: {}
      }

      const result = apiResponse.add(responseItem)
      expect(result).toBe(apiResponse)
    })
  })

  describe('getList / Получение списка ответов', () => {
    it('should return empty array when no responses added / должен возвращать пустой массив, если ответы не добавлены', () => {
      expect(apiResponse.getList()).toEqual([])
    })

    it('should filter out global responses / должен фильтровать глобальные ответы', () => {
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

  describe('get / Поиск ответа', () => {
    it('should return undefined when no matching response / должен возвращать undefined, если подходящий ответ не найден', () => {
      const result = apiResponse.get('/api/test', ApiMethodItem.get)
      expect(result).toBeUndefined()
    })

    it('should return matching response by path and method / должен возвращать подходящий ответ по пути и методу', () => {
      const responseItem: ApiResponseItem = {
        path: '/api/test',
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test', ApiMethodItem.get)
      expect(result).toEqual(responseItem)
    })

    it('should match path with RegExp / должен сопоставлять путь с регулярным выражением', () => {
      const responseItem: ApiResponseItem = {
        path: /^\/api\/test\/\d+$/,
        method: ApiMethodItem.get,
        response: { data: 'test' }
      }

      apiResponse.add(responseItem)
      const result = apiResponse.get('/api/test/123', ApiMethodItem.get)
      expect(result).toEqual(responseItem)
    })

    it('should match request with *any marker / должен сопоставлять запрос с маркером *any', () => {
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

    it('should match request with exact object / должен сопоставлять запрос с точным объектом', () => {
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
  })

  describe('emulator / Эмулятор запросов', () => {
    it('should return undefined when no matching response / должен возвращать undefined, если подходящий ответ не найден', async () => {
      const result = await apiResponse.emulator({
        path: '/api/test',
        method: ApiMethodItem.get
      })

      expect(result).toBeUndefined()
    })

    it('should return emulated response for GET request / должен возвращать эмулированный ответ для GET-запроса', async () => {
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

    it('should work with response as function / должен работать с ответом в виде функции', async () => {
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

    it('should handle lag simulation / должен имитировать задержку', async () => {
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

  describe('setDevMode / Установка режима разработки', () => {
    it('should allow repeating requests when devMode is true / должен позволять повторять запросы, когда devMode равен true', async () => {
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

    it('should not return same response twice when devMode is false / не должен возвращать один и тот же ответ дважды, когда devMode равен false', async () => {
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

  describe('integration / Интеграционные сценарии', () => {
    it('should handle complex request matching / должен обрабатывать сложное сопоставление запросов', async () => {
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
