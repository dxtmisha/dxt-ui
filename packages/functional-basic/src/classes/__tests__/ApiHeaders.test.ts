import { describe, it, expect, beforeEach } from 'vitest'
import { ApiHeaders } from '../ApiHeaders'

describe('ApiHeaders / Заголовки API', () => {
  let apiHeaders: ApiHeaders

  beforeEach(() => {
    apiHeaders = new ApiHeaders()
  })

  describe('get / Получение заголовков', () => {
    it('should return undefined when value is null / должен возвращать undefined, когда значение равно null', () => {
      const result = apiHeaders.get(null)

      expect(result).toBeUndefined()
    })

    it('should return object with Content-Type when value is undefined / должен возвращать объект с Content-Type, когда значение не определено', () => {
      const result = apiHeaders.get()

      expect(result).toEqual({
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should return object with custom Content-Type when value is undefined / должен возвращать объект с кастомным Content-Type, когда значение не определено', () => {
      const result = apiHeaders.get(undefined, 'text/plain')

      expect(result).toEqual({
        'Content-Type': 'text/plain'
      })
    })

    it('should merge custom headers with default Content-Type / должен объединять кастомные заголовки с Content-Type по умолчанию', () => {
      const customHeaders = {
        'Authorization': 'Bearer token123',
        'X-Custom-Header': 'custom-value'
      }

      const result = apiHeaders.get(customHeaders)

      expect(result).toEqual({
        'Authorization': 'Bearer token123',
        'X-Custom-Header': 'custom-value',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should merge custom headers with custom Content-Type / должен объединять кастомные заголовки с кастомным Content-Type', () => {
      const customHeaders = {
        Authorization: 'Bearer token123'
      }

      const result = apiHeaders.get(customHeaders, 'application/xml')

      expect(result).toEqual({
        'Authorization': 'Bearer token123',
        'Content-Type': 'application/xml'
      })
    })

    it('should merge default headers with custom headers, custom headers override / должен объединять заголовки по умолчанию с кастомными, кастомные имеют приоритет', () => {
      apiHeaders.set({
        'X-Default-Header': 'default-value',
        'Authorization': 'Bearer default-token'
      })

      const customHeaders = {
        Authorization: 'Bearer custom-token'
      }

      const result = apiHeaders.get(customHeaders)

      expect(result).toEqual({
        'X-Default-Header': 'default-value',
        'Authorization': 'Bearer custom-token',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should not add Content-Type when type is empty string / не должен добавлять Content-Type, когда тип — пустая строка', () => {
      const result = apiHeaders.get({}, '')

      expect(result).toEqual({})
    })

    it('should not add Content-Type when type is null / не должен добавлять Content-Type, когда тип равен null', () => {
      const result = apiHeaders.get({}, null as any)

      expect(result).toEqual({})
    })

    it('should merge default headers set via set() method / должен объединять заголовки по умолчанию, установленные через метод set()', () => {
      apiHeaders.set({
        'X-Api-Key': 'api-key-123',
        'X-App-Version': '1.0.0'
      })

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Api-Key': 'api-key-123',
        'X-App-Version': '1.0.0',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })
  })

  describe('set / Установка заголовков', () => {
    it('should set default headers when passed valid object / должен устанавливать заголовки по умолчанию при передаче валидного объекта', () => {
      const headers = {
        'Authorization': 'Bearer token123',
        'X-Custom-Header': 'custom-value'
      }

      const returnedInstance = apiHeaders.set(headers)

      expect(returnedInstance).toBe(apiHeaders)
      const result = apiHeaders.get()
      expect(result).toEqual({
        'Authorization': 'Bearer token123',
        'X-Custom-Header': 'custom-value',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should return this for method chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const headers = { 'X-Test': 'test' }

      const result = apiHeaders.set(headers)

      expect(result).toBe(apiHeaders)
    })

    it('should replace existing default headers completely / должен полностью заменять существующие заголовки по умолчанию', () => {
      apiHeaders.set({
        'X-First-Header': 'first'
      })

      apiHeaders.set({
        'X-Second-Header': 'second'
      })

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Second-Header': 'second',
        'Content-Type': 'application/json;charset=UTF-8'
      })
      expect(result).not.toHaveProperty('X-First-Header')
    })

    it('should ignore non-object headers / должен игнорировать заголовки, не являющиеся объектами', () => {
      apiHeaders.set({
        'X-Original': 'original'
      })

      apiHeaders.set(null as any)
      apiHeaders.set('string' as any)
      apiHeaders.set([] as any)

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Original': 'original',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })
  })

  describe('getByRequest / Получение заголовков по запросу', () => {
    it('should return custom headers when request is FormData / должен возвращать кастомные заголовки, когда запрос — FormData', () => {
      const formData = new FormData()
      const customHeaders = { 'X-Custom': 'value' }
      
      const result = apiHeaders.getByRequest(formData, customHeaders)
      
      expect(result).toEqual(customHeaders)
      expect(result).not.toHaveProperty('Content-Type')
    })

    it('should include Content-Type when request is not FormData / должен включать Content-Type, когда запрос — не FormData', () => {
      const request = { key: 'value' }
      const customHeaders = { 'X-Custom': 'value' }
      
      const result = apiHeaders.getByRequest(request, customHeaders, 'application/json')
      
      expect(result).toEqual({
        'X-Custom': 'value',
        'Content-Type': 'application/json'
      })
    })

    it('should handle undefined request / должен корректно обрабатывать неопределенный запрос', () => {
      const result = apiHeaders.getByRequest(undefined)
      
      expect(result).toEqual({
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })
  })

  describe('integration scenarios / Интеграционные сценарии', () => {
    it('should properly merge default and custom headers with custom type / должен правильно объединять заголовки по умолчанию и кастомные с кастомным типом', () => {
      apiHeaders.set({
        'X-Api-Key': 'api-key-123',
        'X-App-Version': '1.0.0'
      })

      const result = apiHeaders.get({
        'Authorization': 'Bearer token123',
        'X-Request-Id': 'req-456'
      }, 'application/xml')

      expect(result).toEqual({
        'X-Api-Key': 'api-key-123',
        'X-App-Version': '1.0.0',
        'Authorization': 'Bearer token123',
        'X-Request-Id': 'req-456',
        'Content-Type': 'application/xml'
      })
    })

    it('should handle real-world authentication scenario / должен обрабатывать сценарий аутентификации из реальной практики', () => {
      apiHeaders.set({
        'X-Api-Key': 'production-key-123',
        'X-App-Version': '2.1.0',
        'X-Platform': 'web'
      })

      const result = apiHeaders.get({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        'X-Request-Id': 'uuid-1234-5678'
      })

      expect(result).toEqual({
        'X-Api-Key': 'production-key-123',
        'X-App-Version': '2.1.0',
        'X-Platform': 'web',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        'X-Request-Id': 'uuid-1234-5678',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should handle scenario with custom headers overriding default headers / должен обрабатывать сценарий, когда кастомные заголовки перезаписывают заголовки по умолчанию', () => {
      apiHeaders.set({
        'X-Api-Key': 'default-key',
        'X-Version': '1.0'
      })

      const result = apiHeaders.get({
        'X-Api-Key': 'custom-key'
      })

      expect(result).toEqual({
        'X-Api-Key': 'custom-key',
        'X-Version': '1.0',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })
  })
})
