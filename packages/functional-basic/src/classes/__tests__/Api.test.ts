/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Api } from '../Api'
import { ApiInstance } from '../ApiInstance'
import { ApiMethodItem } from '../../types/apiTypes'

// Mock fetch globally
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

// Mock console.error to avoid cluttering test output
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

describe('Api / Глобальный мост API', () => {
  beforeEach(() => {
    mockFetch.mockClear()
    consoleErrorSpy.mockClear()

    // Setup default successful response
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      json: async () => ({ data: 'test', success: true })
    })
  })

  afterEach(() => {
    // Reset API state after each test to ensure isolation
    Api.setUrl('/api/')
    Api.setHeaders({})
    Api.setRequestDefault({})
  })

  // ─────────────────────────────────────────────
  // Instance Management
  // ─────────────────────────────────────────────

  describe('getItem / Получение инстанса', () => {
    it('should return an ApiInstance / должен возвращать экземпляр ApiInstance', () => {
      const item = Api.getItem()
      expect(item).toBeInstanceOf(ApiInstance)
    })

    it('should return the same instance on repeated calls / должен возвращать один и тот же экземпляр при повторных вызовах', () => {
      const item1 = Api.getItem()
      const item2 = Api.getItem()
      expect(item1).toBe(item2)
    })
  })

  // ─────────────────────────────────────────────
  // Static Delegation
  // ─────────────────────────────────────────────

  describe('static method delegation / Делегация статических методов', () => {
    describe('setUrl / Установка URL', () => {
      it('should correctly update and affect requests / должен корректно обновлять URL и влиять на запросы', async () => {
        Api.setUrl('/custom-api/')
        await Api.get({ path: 'test' })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/custom-api/test'),
          expect.any(Object)
        )
      })

      it('should return the Api class for chaining / должен возвращать класс Api для цепочки вызовов', () => {
        const result = Api.setUrl('/test/')
        expect(result).toBe(Api)
      })
    })

    describe('setHeaders / Установка заголовков', () => {
      it('should correctly include headers in requests / должен корректно включать заголовки в запросы', async () => {
        Api.setHeaders({ 'X-Test': 'value' })
        await Api.get({ path: 'test' })

        const headers = mockFetch.mock.calls[0][1].headers
        expect(headers).toMatchObject({ 'X-Test': 'value' })
      })

      it('should return the Api class for chaining / должен возвращать класс Api для цепочки вызовов', () => {
        const result = Api.setHeaders({ 'X-Custom': 'val' })
        expect(result).toBe(Api)
      })
    })

    describe('setRequestDefault / Установка параметров по умолчанию', () => {
      it('should merge data into request body / должен объединять параметры по умолчанию в тело запроса', async () => {
        Api.setRequestDefault({ defaultKey: 'defaultValue' })
        await Api.post({ path: 'test', request: { customKey: 'customValue' } })

        const body = JSON.parse(mockFetch.mock.calls[0][1].body)
        expect(body).toMatchObject({
          defaultKey: 'defaultValue',
          customKey: 'customValue'
        })
      })

      it('should return the Api class for chaining / должен возвращать класс Api для цепочки вызовов', () => {
        const result = Api.setRequestDefault({ key: 'val' })
        expect(result).toBe(Api)
      })
    })

    describe('request / Общий метод запроса', () => {
      it('should correctly delegate and return data / должен корректно делегировать запрос и возвращать данные', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: true,
          status: 200,
          statusText: 'OK',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          json: async () => ({ data: { id: 1 }, success: true })
        })

        const result = await Api.request<{ id: number }>('test-path')
        expect(result).toMatchObject({ id: 1, success: true })
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/test-path'),
          expect.any(Object)
        )
      })
    })

    describe('HTTP methods / HTTP-методы', () => {
      it('get, post, put, delete should use correct HTTP methods / get, post, put, delete должны использовать правильные HTTP-методы', async () => {
        await Api.get({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.get }))

        await Api.post({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.post }))

        await Api.put({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.put }))

        await Api.delete({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.delete }))

        await Api.patch({ path: 'test' })
        expect(mockFetch).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.patch }))
      })
    })

    describe('utilities / Утилиты', () => {
      it('isLocalhost should return boolean / isLocalhost должен возвращать логическое значение', () => {
        expect(typeof Api.isLocalhost()).toBe('boolean')
      })

      it('getStatus should return an ApiStatus instance / getStatus должен возвращать экземпляр ApiStatus', () => {
        const status = Api.getStatus()
        expect(status).toBeDefined()
        expect(typeof status.getStatus).toBe('function')
      })

      it('getResponse should return an ApiResponse instance / getResponse должен возвращать экземпляр ApiResponse', () => {
        const response = Api.getResponse()
        expect(response).toBeDefined()
        expect(typeof response.emulator).toBe('function')
      })

      it('getHydrationScript should return string / getHydrationScript должен возвращать строку', () => {
        const script = Api.getHydrationScript()
        expect(typeof script).toBe('string')
        expect(script).toContain('<script')
      })

      it('setTimeout should correctly delegate and return Api / setTimeout должен корректно делегировать и возвращать Api', () => {
        const result = Api.setTimeout(5000)
        expect(result).toBe(Api)
      })
    })
  })

  // ─────────────────────────────────────────────
  // URL Generation
  // ─────────────────────────────────────────────

  describe('getUrl / Получение URL', () => {
    it('should return a path with API prefix by default / должен возвращать путь с префиксом API по умолчанию', () => {
      Api.setUrl('/api/')
      const url = Api.getUrl('users')
      expect(url).toBe('/api/users')
    })

    it('should return path without API prefix when api is false / должен возвращать путь без префикса API, когда api равно false', () => {
      const url = Api.getUrl('/custom/path', false)
      expect(url).toBe('/custom/path')
    })

    it('should replace {locale} placeholder / должен заменять плейсхолдер {locale}', () => {
      const url = Api.getUrl('data/{locale}/info')
      expect(url).toMatch(/data\/\w{2}-\w{2}\/info/)
    })

    it('should replace {country} placeholder / должен заменять плейсхолдер {country}', () => {
      const url = Api.getUrl('data/{country}/info')
      expect(url).toMatch(/data\/\w{2}\/info/)
    })

    it('should replace {language} placeholder / должен заменять плейсхолдер {language}', () => {
      const url = Api.getUrl('data/{language}/info')
      expect(url).toMatch(/data\/\w{2}\/info/)
    })
  })

  // ─────────────────────────────────────────────
  // Body Processing
  // ─────────────────────────────────────────────

  describe('getBody / Получение тела запроса', () => {
    it('should return undefined for GET method / должен возвращать undefined для метода GET', () => {
      const body = Api.getBody({ key: 'value' }, ApiMethodItem.get)
      expect(body).toBeUndefined()
    })

    it('should return JSON string for POST method with an object / должен возвращать JSON-строку для метода POST с объектом', () => {
      const body = Api.getBody({ key: 'value' }, ApiMethodItem.post)
      expect(body).toBe('{"key":"value"}')
    })

    it('should return FormData as is / должен возвращать FormData как есть', () => {
      const formData = new FormData()
      formData.append('key', 'value')

      const body = Api.getBody(formData, ApiMethodItem.post)
      expect(body).toBe(formData)
    })

    it('should return string as is for POST method / должен возвращать строку как есть для метода POST', () => {
      const body = Api.getBody('custom-string', ApiMethodItem.post)
      expect(body).toBe('custom-string')
    })

    it('should return undefined for empty request / должен возвращать undefined для пустого запроса', () => {
      const body = Api.getBody({}, ApiMethodItem.post)
      expect(body).toBeUndefined()
    })

    it('should return undefined when called with no arguments / должен возвращать undefined при вызове без аргументов', () => {
      const body = Api.getBody()
      expect(body).toBeUndefined()
    })
  })

  describe('getBodyForGet / Получение тела для GET-запроса', () => {
    it('should return the query string for GET method / должен возвращать строку запроса для метода GET', () => {
      const body = Api.getBodyForGet({ key: 'value', id: 123 }, '/path', ApiMethodItem.get)

      expect(body).toContain('?')
      expect(body).toContain('key=value')
      expect(body).toContain('id=123')
    })

    it('should use & when path already has a query string / должен использовать &, когда путь уже содержит строку запроса', () => {
      const body = Api.getBodyForGet({ key: 'value' }, '/path?existing=param', ApiMethodItem.get)
      expect(body).toMatch(/^&/)
    })

    it('should return empty string for non-GET methods / должен возвращать пустую строку для не-GET методов', () => {
      const body = Api.getBodyForGet({ key: 'value' }, '/path', ApiMethodItem.post)
      expect(body).toBe('')
    })

    it('should return empty string for empty request / должен возвращать пустую строку для пустого запроса', () => {
      const body = Api.getBodyForGet({}, '/path', ApiMethodItem.get)
      expect(body).toBe('')
    })
  })

  // ─────────────────────────────────────────────
  // Configuration
  // ─────────────────────────────────────────────

  describe('setConfig / Настройка конфигурации', () => {
    it('should apply urlRoot from config / должен применять urlRoot из конфигурации', async () => {
      Api.setConfig({ urlRoot: '/v2/', end: vi.fn().mockResolvedValue({}) })
      await Api.get({ path: 'test' })

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/v2/test'),
        expect.any(Object)
      )
    })

    it('should apply headers from config / должен применять заголовки из конфигурации', async () => {
      Api.setConfig({ headers: { 'X-Config': 'header-value' }, end: vi.fn().mockResolvedValue({}) })
      await Api.get({ path: 'test' })

      const headers = mockFetch.mock.calls[0][1].headers
      expect(headers).toMatchObject({ 'X-Config': 'header-value' })
    })

    it('should apply requestDefault from config / должен применять параметры запроса по умолчанию из конфигурации', async () => {
      Api.setConfig({ requestDefault: { configKey: 'configVal' }, end: vi.fn().mockResolvedValue({}) })
      await Api.post({ path: 'test', request: { extra: 'data' } })

      const body = JSON.parse(mockFetch.mock.calls[0][1].body)
      expect(body).toMatchObject({
        configKey: 'configVal',
        extra: 'data'
      })
    })

    it('should apply preparation from config / должен применять подготовку из конфигурации', async () => {
      const prep = vi.fn().mockResolvedValue(undefined)
      Api.setConfig({ preparation: prep, end: vi.fn().mockResolvedValue({}) })
      await Api.get({ path: 'test' })

      expect(prep).toHaveBeenCalled()
    })

    it('should apply end from config / должен применять завершение из конфигурации', async () => {
      const end = vi.fn().mockResolvedValue({})
      Api.setConfig({ end })
      await Api.get({ path: 'test' })

      expect(end).toHaveBeenCalled()
    })

    it('should apply timeout from config / должен применять таймаут из конфигурации', () => {
      const getItemSpy = vi.spyOn(Api, 'getItem')
      const setTimeoutSpy = vi.fn()
      getItemSpy.mockReturnValue({ setTimeout: setTimeoutSpy } as any)

      Api.setConfig({ timeout: 5000 })
      expect(setTimeoutSpy).toHaveBeenCalledWith(5000)

      getItemSpy.mockRestore()
    })

    it('should apply all config fields together / должен применять все поля конфигурации вместе', async () => {
      const prep = vi.fn().mockResolvedValue(undefined)
      const end = vi.fn().mockResolvedValue({})

      Api.setConfig({
        urlRoot: '/combined/',
        headers: { 'X-Combined': 'yes' },
        requestDefault: { combined: true },
        preparation: prep,
        end
      })

      await Api.post({ path: 'test', request: { data: 'value' } })

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/combined/test'),
        expect.any(Object)
      )

      const headers = mockFetch.mock.calls[0][1].headers
      expect(headers).toMatchObject({ 'X-Combined': 'yes' })

      const body = JSON.parse(mockFetch.mock.calls[0][1].body)
      expect(body).toMatchObject({ combined: true, data: 'value' })

      expect(prep).toHaveBeenCalled()
      expect(end).toHaveBeenCalled()
    })

    it('should return Api class for chaining / должен возвращать класс Api для цепочки вызовов', () => {
      const result = Api.setConfig({ end: vi.fn().mockResolvedValue({}) })
      expect(result).toBe(Api)
    })

    it('should handle undefined config gracefully / должен корректно обрабатывать неопределенную конфигурацию', () => {
      expect(() => Api.setConfig(undefined)).not.toThrow()
    })

    it('should ignore non-object config values / должен игнорировать некорректные значения конфигурации', () => {
      // @ts-expect-error: Testing invalid input
      expect(() => Api.setConfig('invalid')).not.toThrow()
      // @ts-expect-error: Testing invalid input
      expect(() => Api.setConfig(123)).not.toThrow()
    })
  })

  // ─────────────────────────────────────────────
  // Lifecycle Delegation
  // ─────────────────────────────────────────────

  describe('lifecycle delegation / Делегация жизненного цикла', () => {
    it('setPreparation should call the internal callback / setPreparation должен вызывать внутренний колбэк', async () => {
      const prep = vi.fn().mockResolvedValue(undefined)
      Api.setPreparation(prep)
      await Api.get({ path: 'test' })
      expect(prep).toHaveBeenCalled()
    })

    it('setPreparation should return the Api class for chaining / setPreparation должен возвращать класс Api для цепочки вызовов', () => {
      const result = Api.setPreparation(vi.fn().mockResolvedValue(undefined))
      expect(result).toBe(Api)
    })

    it('setEnd should call the internal callback / setEnd должен вызывать внутренний колбэк', async () => {
      const end = vi.fn().mockResolvedValue({})
      Api.setEnd(end)
      await Api.get({ path: 'test' })
      expect(end).toHaveBeenCalled()
    })

    it('setEnd should return the Api class for chaining / setEnd должен возвращать класс Api для цепочки вызовов', () => {
      const result = Api.setEnd(vi.fn().mockResolvedValue({}))
      expect(result).toBe(Api)
    })
  })
})
