/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiInstance } from '../ApiInstance'
import { ApiMethodItem } from '../../types/apiTypes'
import { LoadingInstance } from '../LoadingInstance'
import { Loading } from '../Loading'
import { ErrorCenter } from '../ErrorCenter'
import { ApiHeaders } from '../ApiHeaders'
import { ApiDefault } from '../ApiDefault'
import { ApiStatus } from '../ApiStatus'
import { ApiResponse } from '../ApiResponse'
import { ApiPreparation } from '../ApiPreparation'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import { errorCauseList } from '../../media/errorCauseList'
import { random } from '../../functions/random'
import { sleep } from '../../functions/sleep'

// Mock dependencies
vi.mock('../../functions/random', () => ({
  random: vi.fn((min, _max) => min)
}))

vi.mock('../../functions/sleep', () => ({
  sleep: vi.fn(() => Promise.resolve())
}))

// Mock fetch globally
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

// Spy on ErrorCenterInstance.on to verify error handling
let errorCenterSpy: ReturnType<typeof vi.spyOn>

/**
 * Creates a mock Response object for fetch.
 *
 * Создаёт мок-объект Response для fetch.
 */
function createMockResponse(options: {
  status?: number
  statusText?: string
  contentType?: string
  json?: any
  text?: string
} = {}) {
  const {
    status = 200,
    statusText = 'OK',
    contentType = 'application/json',
    json = { data: 'test', success: true },
    text = ''
  } = options

  return {
    ok: status >= 200 && status < 300,
    status,
    statusText,
    headers: new Headers({ 'Content-Type': contentType }),
    json: vi.fn().mockResolvedValue(json),
    text: vi.fn().mockResolvedValue(text)
  }
}

describe('ApiInstance / Экземпляр API', () => {
  let api: ApiInstance

  beforeEach(() => {
    vi.restoreAllMocks()
    mockFetch.mockReset()
    mockFetch.mockResolvedValue(createMockResponse())

    // Clear global mocks
    // @ts-expect-error: sleep is mocked
    sleep.mockClear()
    // @ts-expect-error: random is mocked
    random.mockClear()

    // Spy on the default ErrorCenter instance's on method
    errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on')

    api = new ApiInstance('/api/')

    // Reset default loading instance state
    // @ts-expect-error: Accessing protected member for testing purposes
    Loading.getItem().value = 0
  })

  // ─────────────────────────────────────────────
  // Constructor and DI
  // ─────────────────────────────────────────────

  describe('constructor / Конструктор', () => {
    it('should use the default url "/api/" when no argument is provided / должен использовать URL по умолчанию "/api/", если аргумент не передан', () => {
      const defaultApi = new ApiInstance()
      expect(defaultApi.getUrl('test')).toContain('/api/test')
    })

    it('should use custom url when provided / должен использовать кастомный URL, если он передан', () => {
      const customApi = new ApiInstance('/v2/')
      expect(customApi.getUrl('users')).toBe('/v2/users')
    })

    it('should accept custom headersClass in options / должен принимать кастомный headersClass в опциях', () => {
      class CustomHeaders extends ApiHeaders {
        get() {
          return { 'X-Custom': 'yes' } as Record<string, string>
        }
      }
      const customApi = new ApiInstance('/api/', { headersClass: CustomHeaders })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.headers).toBeInstanceOf(CustomHeaders)
    })

    it('should accept custom requestDefaultClass in options / должен принимать кастомный requestDefaultClass в опциях', () => {
      class CustomDefault extends ApiDefault {}
      const customApi = new ApiInstance('/api/', { requestDefaultClass: CustomDefault })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.requestDefault).toBeInstanceOf(CustomDefault)
    })

    it('should accept custom statusClass in options / должен принимать кастомный statusClass в опциях', () => {
      class CustomStatus extends ApiStatus {}
      const customApi = new ApiInstance('/api/', { statusClass: CustomStatus })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.status).toBeInstanceOf(CustomStatus)
    })

    it('should accept custom responseClass in options / должен принимать кастомный responseClass в опциях', () => {
      class CustomResponse extends ApiResponse {}
      const customApi = new ApiInstance('/api/', { responseClass: CustomResponse })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.response).toBeInstanceOf(CustomResponse)
    })

    it('should accept custom preparationClass in options / должен принимать кастомный preparationClass в опциях', () => {
      class CustomPreparation extends ApiPreparation {}
      const customApi = new ApiInstance('/api/', { preparationClass: CustomPreparation })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.preparation).toBeInstanceOf(CustomPreparation)
    })

    it('should accept custom loadingClass in options / должен принимать кастомный loadingClass в опциях', () => {
      const customLoading = new LoadingInstance('custom-event')
      const customApi = new ApiInstance('/api/', { loadingClass: customLoading })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.loading).toBe(customLoading)
    })

    it('should accept custom errorCenterClass in options / должен принимать кастомный errorCenterClass в опциях', () => {
      const customErrorCenter = new ErrorCenterInstance(errorCauseList)
      const customApi = new ApiInstance('/api/', { errorCenterClass: customErrorCenter })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.errorCenter).toBe(customErrorCenter)
    })

    it('should use Loading.getItem() by default for loading / должен использовать Loading.getItem() по умолчанию для загрузки', () => {
      const defaultApi = new ApiInstance()
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(defaultApi.loading).toBe(Loading.getItem())
    })

    it('should use ErrorCenter.getItem() by default for errorCenter / должен использовать ErrorCenter.getItem() по умолчанию для ErrorCenter', () => {
      const defaultApi = new ApiInstance()
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(defaultApi.errorCenter).toBe(ErrorCenter.getItem())
    })
  })

  // ─────────────────────────────────────────────
  // Loading lifecycle
  // ─────────────────────────────────────────────

  describe('loading lifecycle / Жизненный цикл загрузки', () => {
    it('should call loading.show() and loading.hide() on successful request / должен вызывать loading.show() и loading.hide() при успешном запросе', async () => {
      const loading = Loading.getItem()
      const showSpy = vi.spyOn(loading, 'show')
      const hideSpy = vi.spyOn(loading, 'hide')
      await api.get({ path: 'test' })
      expect(showSpy).toHaveBeenCalledTimes(1)
      expect(hideSpy).toHaveBeenCalledTimes(1)
      expect(loading.get()).toBe(0)
    })

    it('should call loading.show() and loading.hide() on failed request / должен вызывать loading.show() и loading.hide() при неудачном запросе', async () => {
      const loading = Loading.getItem()
      const showSpy = vi.spyOn(loading, 'show')
      const hideSpy = vi.spyOn(loading, 'hide')
      mockFetch.mockRejectedValueOnce(new Error('Network failure'))
      await expect(api.get({ path: 'test' })).rejects.toThrow()
      expect(showSpy).toHaveBeenCalledTimes(1)
      expect(hideSpy).toHaveBeenCalledTimes(1)
      expect(loading.get()).toBe(0)
    })

    it('should not call loading operations when hideLoading is true / не должен выполнять операции загрузки, когда hideLoading равно true', async () => {
      const loading = Loading.getItem()
      const showSpy = vi.spyOn(loading, 'show')
      const hideSpy = vi.spyOn(loading, 'hide')
      await api.get({ path: 'test', hideLoading: true })
      expect(showSpy).not.toHaveBeenCalled()
      expect(hideSpy).not.toHaveBeenCalled()
    })

    it('should use custom LoadingInstance if provided / должен использовать кастомный LoadingInstance, если он передан', async () => {
      const customLoading = new LoadingInstance('custom-event')
      const showSpy = vi.spyOn(customLoading, 'show')
      const hideSpy = vi.spyOn(customLoading, 'hide')
      const customApi = new ApiInstance('/api/', { loadingClass: customLoading })
      await customApi.get({ path: 'test' })
      expect(showSpy).toHaveBeenCalledTimes(1)
      expect(hideSpy).toHaveBeenCalledTimes(1)
      expect(customLoading.get()).toBe(0)
      expect(Loading.is()).toBe(false)
    })

    it('should hide loading before retrying when `end.reset` is true / должен скрывать загрузку перед повтором запроса, если `end.reset` равно true', async () => {
      const loading = Loading.getItem()
      let callCount = 0
      api.setEnd(async () => {
        callCount++
        return callCount === 1 ? { reset: true } : {}
      })
      const showSpy = vi.spyOn(loading, 'show')
      const hideSpy = vi.spyOn(loading, 'hide')
      await api.get({ path: 'test' })
      expect(showSpy).toHaveBeenCalledTimes(2)
      expect(hideSpy).toHaveBeenCalledTimes(2)
      expect(loading.get()).toBe(0)
    })

    it('should not hide loading on error when hideLoading is true / не должен скрывать загрузку при ошибке, если hideLoading равно true', async () => {
      const loading = Loading.getItem()
      const hideSpy = vi.spyOn(loading, 'hide')
      mockFetch.mockRejectedValueOnce(new Error('fail'))
      await expect(api.get({ path: 'test', hideLoading: true })).rejects.toThrow()
      expect(hideSpy).not.toHaveBeenCalled()
    })
  })

  // ─────────────────────────────────────────────
  // Configuration methods
  // ─────────────────────────────────────────────

  describe('configuration methods / Методы конфигурации', () => {
    describe('setUrl / Установка URL', () => {
      it('should set base URL and return instance for chaining / должен устанавливать базовый URL и возвращать экземпляр для цепочки', () => {
        const result = api.setUrl('/custom-api/')
        expect(result).toBe(api)
      })

      it('should use custom URL in requests / должен использовать кастомный URL в запросах', async () => {
        api.setUrl('/custom/')
        await api.get({ path: 'test' })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/custom/test'), expect.any(Object))
      })
    })

    describe('setHeaders / Установка заголовков', () => {
      it('should set default headers and return the instance for chaining / должен устанавливать заголовки по умолчанию и возвращать экземпляр для цепочки', () => {
        const result = api.setHeaders({ 'X-Custom-Header': 'test-value' })
        expect(result).toBe(api)
      })

      it('should include default headers in requests / должен включать заголовки по умолчанию в запросы', async () => {
        api.setHeaders({ 'X-Api-Key': 'test-key-123' })
        await api.get({ path: 'test' })
        const fetchCall = mockFetch.mock.calls[0]
        expect(fetchCall?.[1].headers).toMatchObject({ 'X-Api-Key': 'test-key-123' })
      })
    })

    describe('setRequestDefault / Установка параметров по умолчанию', () => {
      it('should set default request data and return an instance for chaining / должен устанавливать данные запроса по умолчанию и возвращать экземпляр для цепочки', () => {
        const result = api.setRequestDefault({ userId: '123', token: 'abc' })
        expect(result).toBe(api)
      })

      it('should merge default request data with a custom request / должен объединять параметры по умолчанию с кастомными в запросе', async () => {
        api.setRequestDefault({ apiKey: 'default-key' })
        mockFetch.mockResolvedValueOnce(createMockResponse())
        await api.post({ path: 'test', request: { customData: 'value' } })
        const body = mockFetch.mock.calls?.[0]?.[1].body
        expect(JSON.parse(body)).toMatchObject({ apiKey: 'default-key', customData: 'value' })
      })
    })

    describe('setPreparation / Установка подготовки', () => {
      it('should set a preparation callback and return the instance / должен устанавливать колбэк подготовки и возвращать экземпляр', () => {
        const callback = vi.fn().mockResolvedValue(undefined)
        const result = api.setPreparation(callback)
        expect(result).toBe(api)
      })

      it('should call preparation callback before request / должен вызывать колбэк подготовки перед запросом', async () => {
        const preparationCallback = vi.fn().mockResolvedValue(undefined)
        api.setPreparation(preparationCallback)
        await api.get({ path: 'test' })
        expect(preparationCallback).toHaveBeenCalled()
      })
    })

    describe('setEnd / Установка завершения', () => {
      it('should set an end callback and return the instance / должен устанавливать завершающий колбэк и возвращать экземпляр', () => {
        const callback = vi.fn().mockResolvedValue({})
        const result = api.setEnd(callback)
        expect(result).toBe(api)
      })

      it('should call end callback after request / должен вызывать завершающий колбэк после запроса', async () => {
        const endCallback = vi.fn().mockResolvedValue({})
        api.setEnd(endCallback)
        await api.get({ path: 'test' })
        expect(endCallback).toHaveBeenCalled()
      })

      it('should retry the request when the end callback returns a reset flag / должен повторять запрос, когда завершающий колбэк возвращает флаг reset', async () => {
        let callCount = 0
        const endCallback = vi.fn().mockImplementation(async () => {
          callCount++
          return callCount === 1 ? { reset: true } : {}
        })
        api.setEnd(endCallback)
        await api.get({ path: 'test' })
        expect(endCallback).toHaveBeenCalledTimes(2)
        expect(mockFetch).toHaveBeenCalledTimes(2)
      })
    })

    describe('retry logic / Логика повторов', () => {
      it('should return a jittered delay from getRetryDelay / должен возвращать задержку с джиттером через getRetryDelay', () => {
        const retryDelay = 100
        const retryCount = 2
        // @ts-expect-error: accessing protected member
        const delay = api.getRetryDelay(retryCount, retryDelay)
        expect(random).toHaveBeenCalledWith(retryDelay, retryDelay + (retryCount * retryDelay))
        expect(delay).toBe(retryDelay)
      })

      it('should retry the request when the `retry` property is set / должен повторять запрос, когда установлено свойство `retry`', async () => {
        mockFetch
          .mockResolvedValueOnce(createMockResponse({ status: 500, json: { error: 'Fail 1' } }))
          .mockResolvedValueOnce(createMockResponse({ status: 500, json: { error: 'Fail 2' } }))
          .mockResolvedValueOnce(createMockResponse({ json: { data: 'success' } }))
        const result = await api.get({ path: 'test', retry: 2, retryDelay: 100 })
        expect(mockFetch).toHaveBeenCalledTimes(3)
        expect(sleep).toHaveBeenCalledTimes(2)
        expect(result).toBe('success')
      })

      it('should return last failed attempt after exceeding retries / должен возвращать последнюю неудачную попытку после превышения числа повторов', async () => {
        mockFetch.mockResolvedValue(createMockResponse({ status: 500, json: { error: 'Persistent fail' } }))
        const result = await api.get({ path: 'test', retry: 2 })
        expect(mockFetch).toHaveBeenCalledTimes(3)
        expect(result).toEqual(expect.objectContaining({ error: 'Persistent fail' }))
      })

      it('should calculate delay using getRetryDelay on each retry / должен вычислять задержку через getRetryDelay при каждом повторе', async () => {
        mockFetch
          .mockResolvedValueOnce(createMockResponse({ status: 500 }))
          .mockResolvedValueOnce(createMockResponse({ status: 500 }))
          .mockResolvedValueOnce(createMockResponse())
        const getRetryDelaySpy = vi.spyOn(api as any, 'getRetryDelay')
        await api.get({ path: 'test', retry: 2, retryDelay: 50 })
        expect(getRetryDelaySpy).toHaveBeenCalledWith(0, 50)
        expect(getRetryDelaySpy).toHaveBeenCalledWith(1, 50)
      })
    })
  })

  // ─────────────────────────────────────────────
  // Utility methods
  // ─────────────────────────────────────────────

  describe('utility methods / Утилитарные методы', () => {
    describe('isLocalhost / Проверка на localhost', () => {
      it('should return true when the hostname is localhost / должен возвращать true, если хост — localhost', () => {
        Object.defineProperty(window, 'location', { value: { hostname: 'localhost' }, writable: true, configurable: true })
        expect(api.isLocalhost()).toBe(true)
      })

      it('should return false when the hostname is not localhost / должен возвращать false, если хост — не localhost', () => {
        Object.defineProperty(window, 'location', { value: { hostname: 'example.com' }, writable: true, configurable: true })
        expect(api.isLocalhost()).toBe(false)
      })
    })

    describe('getUrl / Получение URL', () => {
      it('should return a path with an API prefix by default / должен возвращать путь с префиксом API по умолчанию', () => {
        api.setUrl('/api/')
        expect(api.getUrl('users')).toBe('/api/users')
      })

      it('should return the path without API prefix when api is false / должен возвращать путь без префикса API, если api равно false', () => {
        expect(api.getUrl('/custom/path', false)).toBe('/custom/path')
      })

      it('should replace {locale} placeholder / должен заменять плейсхолдер {locale}', () => {
        expect(api.getUrl('data/{locale}/info')).toMatch(/data\/\w{2}-\w{2}\/info/)
      })

      it('should replace {country} placeholder / должен заменять плейсхолдер {country}', () => {
        expect(api.getUrl('data/{country}/info')).toMatch(/data\/\w{2}\/info/)
      })

      it('should replace {language} placeholder / должен заменять плейсхолдер {language}', () => {
        expect(api.getUrl('data/{language}/info')).toMatch(/data\/\w{2}\/info/)
      })
    })

    describe('getBody / Получение тела запроса', () => {
      it('should return undefined for GET method / должен возвращать undefined для метода GET', () => {
        expect(api.getBody({ key: 'value' }, ApiMethodItem.get)).toBeUndefined()
      })

      it('should return JSON string for a POST method with an object / должен возвращать JSON-строку для метода POST с объектом', () => {
        expect(api.getBody({ key: 'value' }, ApiMethodItem.post)).toBe('{"key":"value"}')
      })

      it('should return FormData as is / должен возвращать FormData как есть', () => {
        const formData = new FormData()
        formData.append('key', 'value')
        expect(api.getBody(formData, ApiMethodItem.post)).toBe(formData)
      })

      it('should return string as is for the POST method / должен возвращать строку как есть для метода POST', () => {
        expect(api.getBody('custom-string', ApiMethodItem.post)).toBe('custom-string')
      })

      it('should return undefined for empty request / должен возвращать undefined для пустого запроса', () => {
        expect(api.getBody({}, ApiMethodItem.post)).toBeUndefined()
      })

      it('should return undefined when called with no arguments / должен возвращать undefined при вызове без аргументов', () => {
        expect(api.getBody()).toBeUndefined()
      })

      it('should return JSON string for PUT method / должен возвращать JSON-строку для метода PUT', () => {
        expect(api.getBody({ key: 'value' }, ApiMethodItem.put)).toBe('{"key":"value"}')
      })

      it('should return JSON string for DELETE method with data / должен возвращать JSON-строку для метода DELETE с данными', () => {
        expect(api.getBody({ id: 1 }, ApiMethodItem.delete)).toBe('{"id":1}')
      })
    })

    describe('getBodyForGet / Подготовка тела для GET', () => {
      it('should return the query string for GET method / должен возвращать строку запроса для метода GET', () => {
        const body = api.getBodyForGet({ key: 'value', id: 123 }, '/path', ApiMethodItem.get)
        expect(body).toContain('?')
        expect(body).toContain('key=value')
        expect(body).toContain('id=123')
      })

      it('should use & when a path already has a query string / должен использовать & если путь уже содержит строку запроса', () => {
        const body = api.getBodyForGet({ key: 'value' }, '/path?existing=param', ApiMethodItem.get)
        expect(body).toMatch(/^&/)
      })

      it('should return empty string for non-GET methods / должен возвращать пустую строку для методов, отличных от GET', () => {
        expect(api.getBodyForGet({ key: 'value' }, '/path', ApiMethodItem.post)).toBe('')
      })

      it('should return an empty string for an empty request / должен возвращать пустую строку для пустого запроса', () => {
        expect(api.getBodyForGet({}, '/path', ApiMethodItem.get)).toBe('')
      })

      it('should handle string request for GET method / должен обрабатывать строковый запрос для метода GET', () => {
        expect(api.getBodyForGet('key=value', '/path', ApiMethodItem.get)).toContain('key=value')
      })
    })
  })

  // ─────────────────────────────────────────────
  // HTTP method shortcuts
  // ─────────────────────────────────────────────

  describe('HTTP method shortcuts / Сокращения HTTP-методов', () => {
    describe('get', () => {
      it('should make a GET request / должен выполнять GET-запрос', async () => {
        await api.get({ path: 'test' })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.get }))
      })

      it('should append a query string to URL for GET request / должен добавлять строку запроса к URL для GET-запроса', async () => {
        await api.get({ path: 'test', request: { id: '123', name: 'test' } })
        const url = mockFetch.mock.calls?.[0]?.[0]
        expect(url).toContain('?')
        expect(url).toContain('id=123')
        expect(url).toContain('name=test')
      })
    })

    describe('post', () => {
      it('should make a POST request / должен выполнять POST-запрос', async () => {
        await api.post({ path: 'test', request: { data: 'value' } })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.post, body: expect.any(String) }))
      })

      it('should send request data in the body / должен отправлять данные запроса в теле', async () => {
        await api.post({ path: 'test', request: { key: 'value' } })
        const body = mockFetch.mock.calls?.[0]?.[1].body
        expect(JSON.parse(body)).toEqual({ key: 'value' })
      })
    })

    describe('put', () => {
      it('should make a PUT request / должен выполнять PUT-запрос', async () => {
        await api.put({ path: 'test', request: { data: 'value' } })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.put }))
      })
    })

    describe('delete', () => {
      it('should make a DELETE request / должен выполнять DELETE-запрос', async () => {
        await api.delete({ path: 'test' })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.delete }))
      })
    })

    describe('patch', () => {
      it('should make a PATCH request / должен выполнять PATCH-запрос', async () => {
        await api.patch({ path: 'test', request: { data: 'value' } })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.patch }))
      })
    })
  })

  // ─────────────────────────────────────────────
  // request
  // ─────────────────────────────────────────────

  describe('request / Запрос', () => {
    it('should accept string as a path / должен принимать строку в качестве пути', async () => {
      await api.request('test/path')
      expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test/path'), expect.any(Object))
    })

    it('should accept ApiFetch object / должен принимать объект ApiFetch', async () => {
      await api.request({ path: 'test', method: ApiMethodItem.post, request: { data: 'value' } })
      expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.post }))
    })

    it('should return parsed JSON data by default (toData = true) / должен возвращать распарсенные JSON-данные по умолчанию', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: { id: 1, name: 'test' }, success: true } }))
      const result = await api.request<{ id: number, name: string }>({ path: 'test' })
      expect(result).toEqual(expect.objectContaining({ id: 1, name: 'test', success: true }))
    })

    it('should return a full response when toData is false / должен возвращать полный ответ, когда toData равно false', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: 'test', success: true, meta: { count: 10 } } }))
      const result = await api.request({ path: 'test', toData: false })
      expect(result).toEqual(expect.objectContaining({ data: 'test', success: true, meta: { count: 10 } }))
    })

    it('should use custom headers / должен использовать кастомные заголовки', async () => {
      await api.request({ path: 'test', headers: { Authorization: 'Bearer custom-token' } })
      const headers = mockFetch.mock.calls?.[0]?.[1].headers
      expect(headers.Authorization).toBe('Bearer custom-token')
    })

    it('should use a custom content type / должен использовать кастомный content type', async () => {
      await api.request({ path: 'test', type: 'application/xml' })
      const headers = mockFetch.mock.calls?.[0]?.[1].headers
      expect(headers['Content-Type']).toBe('application/xml')
    })

    it('should use pathFull when provided / должен использовать путь pathFull, если он передан', async () => {
      await api.request({ pathFull: 'https://external-api.com/data' })
      expect(mockFetch).toHaveBeenCalledWith('https://external-api.com/data', expect.any(Object))
    })

    it('should pass custom init options to fetch / должен передавать кастомные опции инициализации в fetch', async () => {
      await api.request({ path: 'test', init: { credentials: 'include', mode: 'cors' } })
      expect(mockFetch).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ credentials: 'include', mode: 'cors' }))
    })

    it('should skip api prefix when api is false / должен пропускать префикс API, если api равно false', async () => {
      await api.request({ path: '/absolute/path', api: false })
      const url = mockFetch.mock.calls[0][0]
      expect(url).not.toContain('/api/')
    })
  })

  // ─────────────────────────────────────────────
  // Error handling
  // ─────────────────────────────────────────────

  describe('error handling / Обработка ошибок', () => {
    it('should report network error to ErrorCenter / должен сообщать о сетевой ошибке в ErrorCenter', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))
      await expect(api.request({ path: 'test' })).rejects.toThrow('Network error')
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'unknown' }))
    })

    it('should not report an error when hideError is true / не должен сообщать об ошибке, когда hideError равно true', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))
      await expect(api.request({ path: 'test', hideError: true })).rejects.toThrow('Network error')
      expect(errorCenterSpy).not.toHaveBeenCalled()
    })

    it('should set error status on failure / должен устанавливать статус ошибки при неудаче', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Request failed'))
      await expect(api.request({ path: 'test' })).rejects.toThrow('Request failed')
      expect(api.getStatus().getError()).toContain('Request failed')
    })

    it('should report 404 to ErrorCenter with notFound code / должен сообщать о 404 в ErrorCenter с кодом notFound', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 404, statusText: 'Not Found', json: { error: 'Not found' } }))
      await api.request({ path: 'test' })
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'notFound' }))
    })

    it('should report 500 to ErrorCenter with server code / должен сообщать о 500 в ErrorCenter с кодом server', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 500, statusText: 'Internal Server Error', json: { error: 'Server error' } }))
      await api.request({ path: 'test' })
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'server' }))
    })

    it('should report other 4xx/5xx statuses to ErrorCenter with api-server group / должен сообщать о других статусах 4xx/5xx в ErrorCenter с группой api-server', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 403, statusText: 'Forbidden', json: { error: 'Forbidden' } }))
      await api.request({ path: 'test' })
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api-server', code: '403' }))
    })

    it('should not report a query error when hideError is true / не должен сообщать об ошибке запроса, когда hideError равно true', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 500, statusText: 'Server Error', json: {} }))
      await api.request({ path: 'test', hideError: true })
      expect(errorCenterSpy).not.toHaveBeenCalled()
    })

    it('should handle TimeoutError via ErrorCenter with timeout code / должен обрабатывать TimeoutError в ErrorCenter с кодом timeout', async () => {
      const timeoutError = new DOMException('Timeout', 'TimeoutError')
      mockFetch.mockRejectedValueOnce(timeoutError)
      await expect(api.request({ path: 'test' })).rejects.toThrow()
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'timeout' }))
    })

    it('should use custom errorCenterInstance from options for reporting errors / должен использовать кастомный ErrorCenterInstance из опций', async () => {
      const customErrorCenter = new ErrorCenterInstance(errorCauseList)
      const customSpy = vi.spyOn(customErrorCenter, 'on')
      const customApi = new ApiInstance('/api/', { errorCenterClass: customErrorCenter })
      mockFetch.mockRejectedValueOnce(new Error('isolated error'))
      await expect(customApi.request({ path: 'test' })).rejects.toThrow()
      expect(customSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'unknown' }))
      expect(errorCenterSpy).not.toHaveBeenCalled()
    })

    it('should not report AbortError to ErrorCenter / не должен сообщать об AbortError в ErrorCenter', async () => {
      mockFetch.mockRejectedValueOnce(new DOMException('Aborted', 'AbortError'))
      await expect(api.request({ path: 'test' })).rejects.toThrow()
      expect(errorCenterSpy).not.toHaveBeenCalled()
    })
  })

  // ─────────────────────────────────────────────
  // Status tracking
  // ─────────────────────────────────────────────

  describe('status tracking / Отслеживание статуса', () => {
    it('should update the status on a successful request / должен обновлять статус при успешном запросе', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 200, statusText: 'OK', json: { data: 'test' } }))
      await api.request({ path: 'test' })
      const status = api.getStatus()
      expect(status.getStatus()).toBe(200)
      expect(status.getStatusText()).toBe('OK')
    })

    it('should update the status on 404 response / должен обновлять статус при 404', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 404, statusText: 'Not Found', json: { error: 'Not found' } }))
      await api.request({ path: 'test' })
      const status = api.getStatus()
      expect(status.getStatus()).toBe(404)
      expect(status.getStatusText()).toBe('Not Found')
    })

    it('should store last response / должен сохранять последний ответ', async () => {
      const responseData = { data: { id: 1, name: 'test' }, success: true }
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: responseData }))
      await api.request({ path: 'test' })
      expect(api.getStatus().getResponse()).toMatchObject(responseData)
    })

    it('should update the error status on exception / должен обновлять статус ошибки при исключении', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Connection refused'))
      await expect(api.request({ path: 'test' })).rejects.toThrow()
      expect(api.getStatus().getError()).toContain('Connection refused')
    })
  })

  // ─────────────────────────────────────────────
  // Custom response processing
  // ─────────────────────────────────────────────

  describe('custom response processing / Кастомная обработка ответа', () => {
    it('should use queryReturn callback when provided / должен использовать колбэк queryReturn, если он передан', async () => {
      const customCallback = vi.fn().mockResolvedValue({ customData: 'processed' })
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: 'original' } }))
      const result = await api.request({ path: 'test', queryReturn: customCallback })
      expect(customCallback).toHaveBeenCalled()
      expect(result).toEqual(expect.objectContaining({ customData: 'processed' }))
    })

    it('should handle text responses / должен обрабатывать текстовые ответы', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ contentType: 'text/plain', text: 'plain text response' }))
      expect(await api.request({ path: 'test' })).toBe('plain text response')
    })

    it('should use data from end callback when provided / должен использовать данные из колбэка end, если они переданы', async () => {
      api.setEnd(vi.fn().mockResolvedValue({ data: { customData: 'from-end-callback' } }))
      const result = await api.request({ path: 'test' })
      expect(result).toEqual(expect.objectContaining({ customData: 'from-end-callback' }))
    })
  })

  // ─────────────────────────────────────────────
  // Preparation lifecycle
  // ─────────────────────────────────────────────

  describe('preparation lifecycle / Жизненный цикл подготовки', () => {
    it('should not call global preparation when globalPreparation is false / не должен вызывать глобальную подготовку, когда globalPreparation равно false', async () => {
      const preparationCallback = vi.fn().mockResolvedValue(undefined)
      api.setPreparation(preparationCallback)
      await api.request({ path: 'test', globalPreparation: false })
      expect(preparationCallback).not.toHaveBeenCalled()
    })

    it('should not call the global end when globalEnd is false / не должен вызывать глобальный колбэк завершения, когда globalEnd равно false', async () => {
      const endCallback = vi.fn().mockResolvedValue({})
      api.setEnd(endCallback)
      await api.request({ path: 'test', globalEnd: false })
      expect(endCallback).not.toHaveBeenCalled()
    })

    it('should call preparation with the apiFetch object / должен вызывать подготовку с объектом apiFetch', async () => {
      const preparationCallback = vi.fn().mockResolvedValue(undefined)
      api.setPreparation(preparationCallback)
      await api.request({ path: 'test', method: ApiMethodItem.post as any })
      expect(preparationCallback).toHaveBeenCalledWith(expect.objectContaining({ path: 'test' }))
    })

    it('should call end with the response and apiFetch objects / должен вызывать колбэк завершения с объектами ответа и apiFetch', async () => {
      const endCallback = vi.fn().mockResolvedValue({})
      api.setEnd(endCallback)
      await api.request({ path: 'test' })
      const [query, apiFetch] = endCallback.mock.calls[0]
      expect(query.status).toBe(200)
      expect(apiFetch.path).toBe('test')
    })
  })

  // ─────────────────────────────────────────────
  // makeData transformation
  // ─────────────────────────────────────────────

  describe('makeData transformation / Трансформация данных (через toData)', () => {
    it('should extract a data field and merge success/status/message / должен извлекать поле data и объединять success/status/message', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: { id: 1 }, success: true, status: 'success', message: 'Created successfully' } }))
      const result = await api.request<{ id: number }>({ path: 'test' })
      expect(result).toEqual(expect.objectContaining({ id: 1, success: true, status: 'success', message: 'Created successfully' }))
    })

    it('should return raw data when the data field is not an object / должен возвращать сырые данные, если поле data не является объектом', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: 42, success: true } }))
      expect(await api.request({ path: 'test' })).toBe(42)
    })

    it('should return array data as-is / должен возвращать данные-массив как есть', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: [1, 2, 3], success: true } }))
      expect(await api.request<number[]>({ path: 'test' })).toEqual([1, 2, 3])
    })

    it('should not overwrite the success field if already present in data / не должен перезаписывать поле success, если оно уже есть в данных', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: { id: 1, success: false }, success: true } }))
      const result = await api.request<{ id: number, success: boolean }>({ path: 'test' })
      expect(result.success).toBe(false)
    })

    it('should return a full response when toData is false / должен возвращать полный ответ, когда toData равно false', async () => {
      const responseData = { data: { id: 1 }, success: true, extra: 'field' }
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: responseData }))
      const result = await api.request({ path: 'test', toData: false })
      expect(result).toEqual(expect.objectContaining({ data: { id: 1 }, success: true, extra: 'field' }))
    })

    it('should handle null `data.data` gracefully / должен корректно обрабатывать null в `data.data`', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: null, success: true } }))
      const result = await api.request({ path: 'test' })
      expect(result).toEqual(expect.objectContaining({ success: true, statusObject: expect.objectContaining({ status: 200 }) }))
    })
  })

  // ─────────────────────────────────────────────
  // makeStatus — statusObject injection
  // ─────────────────────────────────────────────

  describe('makeStatus / Добавление statusObject', () => {
    it('should append statusObject to object responses / должен добавлять statusObject к ответам-объектам', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: { id: 1 }, success: true } }))
      const result = await api.request<{ id: number }>({ path: 'test' })
      expect(result).toHaveProperty('statusObject')
      expect((result as any).statusObject).toEqual(expect.objectContaining({ status: 200, statusText: 'OK' }))
    })

    it('should not append statusObject to non-object responses / не должен добавлять statusObject к ответам, не являющимся объектами', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: 42, success: true } }))
      expect(await api.request({ path: 'test' })).toBe(42)
    })
  })

  // ─────────────────────────────────────────────
  // initController — timeout and abort
  // ─────────────────────────────────────────────

  describe('initController / Инициализация контроллера (таймаут и отмена)', () => {
    it('should set signal when timeout only is provided / должен устанавливать сигнал при наличии только таймаута', async () => {
      await api.request({ path: 'test', timeout: 5000 })
      expect(mockFetch.mock.calls[0][1].signal).toBeDefined()
    })

    it('should set signal when controller only is provided / должен устанавливать сигнал при наличии только контроллера', async () => {
      const controller = new AbortController()
      await api.request({ path: 'test', controller })
      expect(mockFetch.mock.calls[0][1].signal).toBe(controller.signal)
    })

    it('should use controller signal when both timeout and controller are provided / должен использовать сигнал контроллера, если переданы и таймаут, и контроллер', async () => {
      const controller = new AbortController()
      await api.request({ path: 'test', timeout: 5000, controller })
      expect(mockFetch.mock.calls[0][1].signal).toBe(controller.signal)
    })

    it('should not set signal when neither timeout nor controller are provided and timeout is 0 / не должен устанавливать сигнал, если не переданы ни таймаут, ни контроллер, а таймаут равен 0', async () => {
      await api.request({ path: 'test', timeout: 0 })
      expect(mockFetch.mock.calls[0][1].signal).toBeUndefined()
    })
  })

  // ─────────────────────────────────────────────
  // Emulator (via ApiResponse)
  // ─────────────────────────────────────────────

  describe('emulator integration / Интеграция эмулятора', () => {
    it('should return an emulated response if available / должен возвращать эмулированный ответ, если он доступен', async () => {
      api.getResponse().add({ path: 'emulated', method: ApiMethodItem.get as any, response: { data: 'emulated-data', success: true } })
      expect(await api.get({ path: 'emulated' })).toEqual(expect.objectContaining({ data: 'emulated-data' }))
      expect(mockFetch).not.toHaveBeenCalled()
    })
  })

  // ─────────────────────────────────────────────
  // getStatus and getResponse accessors
  // ─────────────────────────────────────────────

  describe('getStatus and getResponse / Геттеры статуса и ответов', () => {
    it('should return a status instance / должен возвращать экземпляр статуса', () => {
      const status = api.getStatus()
      expect(status).toBeDefined()
      expect(typeof status.getStatus).toBe('function')
    })

    it('should return a response instance / должен возвращать экземпляр ответов', () => {
      const response = api.getResponse()
      expect(response).toBeDefined()
      expect(typeof response.emulator).toBe('function')
    })
  })

  // ─────────────────────────────────────────────
  // Headers with null
  // ─────────────────────────────────────────────

  describe('header null handling / Обработка null в заголовках', () => {
    it('should not include headers when the header option is null / не должен включать заголовки, если опция headers равна null', async () => {
      await api.request({ path: 'test', headers: null })
      expect(mockFetch.mock.calls[0][1].headers).toBeUndefined()
    })
  })

  // ─────────────────────────────────────────────
  // FormData request integration
  // ─────────────────────────────────────────────

  describe('FormData request / Запрос с FormData', () => {
    it('should send FormData as a body for POST request / должен отправлять FormData в теле POST-запроса', async () => {
      const formData = new FormData()
      formData.append('file', 'content')
      await api.post({ path: 'upload', request: formData })
      expect(mockFetch.mock.calls[0][1].body).toBe(formData)
    })
  })
})
