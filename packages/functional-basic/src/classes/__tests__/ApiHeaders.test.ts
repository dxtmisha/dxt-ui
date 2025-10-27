import { describe, it, expect, beforeEach } from 'vitest'
import { ApiHeaders } from '../ApiHeaders'

describe('ApiHeaders', () => {
  let apiHeaders: ApiHeaders

  beforeEach(() => {
    apiHeaders = new ApiHeaders()
  })

  describe('get', () => {
    it('should return undefined when value is null', () => {
      const result = apiHeaders.get(null)

      expect(result).toBeUndefined()
    })

    it('should return object with Content-Type when value is undefined', () => {
      const result = apiHeaders.get()

      expect(result).toEqual({
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should return object with custom Content-Type when value is undefined', () => {
      const result = apiHeaders.get(undefined, 'text/plain')

      expect(result).toEqual({
        'Content-Type': 'text/plain'
      })
    })

    it('should merge custom headers with default Content-Type', () => {
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

    it('should merge custom headers with custom Content-Type', () => {
      const customHeaders = {
        Authorization: 'Bearer token123'
      }

      const result = apiHeaders.get(customHeaders, 'application/xml')

      expect(result).toEqual({
        'Authorization': 'Bearer token123',
        'Content-Type': 'application/xml'
      })
    })

    it('should merge default headers with custom headers, custom headers override', () => {
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

    it('should not add Content-Type when type is empty string (isFilled check)', () => {
      const result = apiHeaders.get({}, '')

      expect(result).toEqual({})
    })

    it('should not add Content-Type when type is null', () => {
      const result = apiHeaders.get({}, null as any)

      expect(result).toEqual({})
    })

    it('should not add Content-Type when type is "0" (isFilled returns false)', () => {
      const result = apiHeaders.get({}, '0')

      expect(result).toEqual({})
    })

    it('should not add Content-Type when type is "undefined" string (isFilled returns false)', () => {
      const result = apiHeaders.get({}, 'undefined')

      expect(result).toEqual({})
    })

    it('should not add Content-Type when type is "null" string (isFilled returns false)', () => {
      const result = apiHeaders.get({}, 'null')

      expect(result).toEqual({})
    })

    it('should not add Content-Type when type is "false" string (isFilled returns false)', () => {
      const result = apiHeaders.get({}, 'false')

      expect(result).toEqual({})
    })

    it('should not add Content-Type when type is "[]" string (isFilled returns false)', () => {
      const result = apiHeaders.get({}, '[]')

      expect(result).toEqual({})
    })

    it('should merge default headers set via set() method', () => {
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

    it('should return empty object when value is empty object and type is empty string', () => {
      const result = apiHeaders.get({}, '')

      expect(result).toEqual({})
    })

    it('should merge multiple custom headers with Content-Type', () => {
      const customHeaders = {
        'Accept': 'application/json',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }

      const result = apiHeaders.get(customHeaders)

      expect(result).toEqual({
        ...customHeaders,
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should return object with custom headers when default headers are empty', () => {
      const customHeaders = {
        'X-Custom': 'value'
      }

      const result = apiHeaders.get(customHeaders)

      expect(result).toEqual({
        'X-Custom': 'value',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should override Content-Type from custom headers with type parameter', () => {
      const customHeaders = {
        'Content-Type': 'text/html'
      }

      const result = apiHeaders.get(customHeaders, 'application/xml')

      expect(result).toEqual({
        'Content-Type': 'application/xml'
      })
    })
  })

  describe('set', () => {
    it('should set default headers when passed valid object', () => {
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

    it('should return this for method chaining', () => {
      const headers = { 'X-Test': 'test' }

      const result = apiHeaders.set(headers)

      expect(result).toBe(apiHeaders)
    })

    it('should replace existing default headers completely', () => {
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

    it('should not modify headers when passed null (isObjectNotArray check)', () => {
      apiHeaders.set({
        'X-Original': 'original'
      })

      apiHeaders.set(null as any)

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Original': 'original',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should not modify headers when passed undefined (isObjectNotArray check)', () => {
      apiHeaders.set({
        'X-Original': 'original'
      })

      apiHeaders.set(undefined as any)

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Original': 'original',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should not modify headers when passed string (isObjectNotArray check)', () => {
      apiHeaders.set({
        'X-Original': 'original'
      })

      apiHeaders.set('string' as any)

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Original': 'original',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should not modify headers when passed number (isObjectNotArray check)', () => {
      apiHeaders.set({
        'X-Original': 'original'
      })

      apiHeaders.set(123 as any)

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Original': 'original',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should not modify headers when passed array (isObjectNotArray check)', () => {
      apiHeaders.set({
        'X-Original': 'original'
      })

      apiHeaders.set(['array'] as any)

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Original': 'original',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should set empty object as default headers', () => {
      apiHeaders.set({
        'X-Original': 'original'
      })

      apiHeaders.set({})

      const result = apiHeaders.get()

      expect(result).toEqual({
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should allow method chaining with multiple sets', () => {
      const result = apiHeaders
        .set({ 'X-First': 'first' })
        .set({ 'X-Second': 'second' })
        .get()

      expect(result).toEqual({
        'X-Second': 'second',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })
  })

  describe('integration scenarios', () => {
    it('should properly merge default and custom headers with custom type', () => {
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

    it('should allow updating default headers multiple times', () => {
      apiHeaders.set({
        'X-Api-Key': 'old-key'
      })

      apiHeaders.set({
        'X-Api-Key': 'new-key',
        'X-New-Header': 'new-value'
      })

      const result = apiHeaders.get({
        Authorization: 'Bearer token'
      })

      expect(result).toEqual({
        'X-Api-Key': 'new-key',
        'X-New-Header': 'new-value',
        'Authorization': 'Bearer token',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should handle real-world authentication scenario', () => {
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

    it('should handle form data content type scenario', () => {
      const result = apiHeaders.get(
        { Authorization: 'Bearer token' },
        'multipart/form-data'
      )

      expect(result).toEqual({
        'Authorization': 'Bearer token',
        'Content-Type': 'multipart/form-data'
      })
    })

    it('should handle scenario with no default headers and no custom headers', () => {
      const result = apiHeaders.get()

      expect(result).toEqual({
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should handle scenario with default headers only', () => {
      apiHeaders.set({
        'X-Api-Key': 'key-123'
      })

      const result = apiHeaders.get()

      expect(result).toEqual({
        'X-Api-Key': 'key-123',
        'Content-Type': 'application/json;charset=UTF-8'
      })
    })

    it('should handle scenario with custom headers overriding default headers', () => {
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
