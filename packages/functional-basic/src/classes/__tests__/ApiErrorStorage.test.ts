// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ApiErrorStorage } from '../ApiErrorStorage'
import { type ApiErrorStorageList, ApiMethodItem } from '../../types/apiTypes'

class ExposedApiErrorStorage extends ApiErrorStorage {
  getStorageItems(): ApiErrorStorageList {
    return this.storage
  }
}

describe('ApiErrorStorage', () => {
  it('should add single and multiple error items to storage and support method chaining', () => {
    const storage = new ExposedApiErrorStorage()
    const item = {
      url: '/api/test',
      method: ApiMethodItem.get,
      status: 400
    }

    const returnedInstance = storage.add(item)
    expect(returnedInstance).toBe(storage)
    expect(storage.getStorageItems()).toContainEqual(item)

    const list = [
      { url: '/api/test2', method: ApiMethodItem.post, status: 500 },
      { url: '/api/test3', method: ApiMethodItem.put, status: 404 }
    ]
    storage.add(list)
    expect(storage.getStorageItems()).toHaveLength(3)
  })

  it('should apply fallback url and method arguments in add() and ignore incomplete items', () => {
    const storage = new ExposedApiErrorStorage()

    storage.add(
      [
        { status: 400, message: 'Uses fallback url and method' },
        { url: '/custom', status: 401, message: 'Uses custom url and fallback method' }
      ],
      '/fallback-url',
      ApiMethodItem.delete
    )

    // Missing both url and method -> should not be added
    storage.add({ status: 500 })

    expect(storage.getStorageItems()).toHaveLength(2)
    expect(storage.getStorageItems()[0]).toEqual({
      url: '/fallback-url',
      method: ApiMethodItem.delete,
      status: 400,
      message: 'Uses fallback url and method'
    })
    expect(storage.getStorageItems()[1]).toEqual({
      url: '/custom',
      method: ApiMethodItem.delete,
      status: 401,
      message: 'Uses custom url and fallback method'
    })
  })

  it('should find error by status when method and URL match', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/error',
      method: ApiMethodItem.get,
      status: 400,
      message: 'Custom Error'
    })

    const response = {
      url: '/api/error',
      status: 400,
      statusText: 'Bad Request',
      clone: () => ({
        json: async () => ({})
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Custom Error')
    expect(result.status).toBe(400)
  })

  it('should find error by code in JSON body', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/code',
      method: ApiMethodItem.post,
      code: 'ERR_001',
      message: 'Code Error'
    })

    const response = {
      url: '/api/code',
      status: 200,
      clone: () => ({
        json: async () => ({ code: 'ERR_001' })
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.post, response)
    expect(result.message).toBe('Code Error')
    expect(result.code).toBe('ERR_001')
  })

  it('should find error by custom validation function', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/validate',
      method: ApiMethodItem.get,
      validation: (response: Response) => response.headers.get('X-Error') === 'true',
      message: 'Validation Error'
    })

    const response = {
      url: '/api/validate',
      status: 200,
      headers: new Headers({ 'X-Error': 'true' }),
      clone: () => ({
        json: async () => ({})
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Validation Error')
  })

  it('should find error by RegExp URL pattern', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: /\/api\/item\/\d+/,
      method: ApiMethodItem.get,
      status: 404,
      message: 'Item Not Found'
    })

    const response = {
      url: '/api/item/123',
      status: 404,
      clone: () => ({
        json: async () => ({})
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Item Not Found')
  })

  it('should return default error item when no stored item matches', async () => {
    const storage = new ApiErrorStorage()
    const response = {
      url: '/api/unknown',
      status: 500,
      statusText: 'Internal Server Error',
      clone: () => ({
        json: async () => ({ code: 'UNKNOWN_CODE', message: 'Unknown Message' })
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result).toEqual({
      url: '/api/unknown',
      method: ApiMethodItem.get,
      status: 500,
      code: 'UNKNOWN_CODE',
      message: 'Unknown Message'
    })
  })

  it('should handle non-JSON or array JSON bodies gracefully', async () => {
    const storage = new ApiErrorStorage()

    const malformedJsonResponse = {
      url: '/api/broken',
      status: 502,
      statusText: 'Bad Gateway',
      clone: () => ({
        json: async () => {
          throw new SyntaxError('Invalid JSON')
        }
      })
    } as unknown as Response

    const malformedResult = await storage.find(ApiMethodItem.get, malformedJsonResponse)
    expect(malformedResult.code).toBeUndefined()
    expect(malformedResult.message).toBe('Bad Gateway')

    const arrayJsonResponse = {
      url: '/api/array',
      status: 400,
      statusText: 'Bad Request',
      clone: () => ({
        json: async () => ['not', 'an', 'object']
      })
    } as unknown as Response

    const arrayResult = await storage.find(ApiMethodItem.get, arrayJsonResponse)
    expect(arrayResult.code).toBeUndefined()
    expect(arrayResult.message).toBe('Bad Request')
  })

  it('should extract code and message from nested error object in JSON body', async () => {
    const storage = new ApiErrorStorage()
    const response = {
      url: '/api/nested',
      status: 400,
      clone: () => ({
        json: async () => ({
          error: {
            code: 'NESTED_CODE',
            message: 'Nested Message'
          }
        })
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.code).toBe('NESTED_CODE')
    expect(result.message).toBe('Nested Message')
  })

  it('should prioritize stored item message over body message and statusText', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/message-priority',
      method: ApiMethodItem.get,
      status: 400,
      message: 'Stored Message'
    })

    const response = {
      url: '/api/message-priority',
      status: 400,
      statusText: 'Response Status Text',
      clone: () => ({
        json: async () => ({ message: 'Body Message' })
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Stored Message')
  })

  it('should prioritize body message over statusText when no stored item matches or stored item has no message', async () => {
    const storage = new ApiErrorStorage()
    const response = {
      url: '/api/none',
      status: 400,
      statusText: 'Response Status Text',
      clone: () => ({
        json: async () => ({ message: 'Body Message' })
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Body Message')
  })

  it('should fall back to statusText when neither stored item nor body provides a message', async () => {
    const storage = new ApiErrorStorage()
    const response = {
      url: '/api/none',
      status: 400,
      statusText: 'Only This Text',
      clone: () => ({
        json: async () => ({})
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Only This Text')
  })

  it('should NOT match an error item by status if the item specifies a code and the response has a different code', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/user',
      method: ApiMethodItem.post,
      status: 400,
      code: 'USER_EXISTS',
      message: 'User already exists'
    })
    storage.add({
      url: '/api/user',
      method: ApiMethodItem.post,
      status: 400,
      message: 'General Bad Request'
    })

    const response = {
      url: '/api/user',
      status: 400,
      statusText: 'Bad Request',
      clone: () => ({
        json: async () => ({ code: 'OTHER_CODE', message: 'Other issue' })
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.post, response)
    expect(result.message).toBe('General Bad Request')
    expect(result.code).toBe('OTHER_CODE')
  })

  it('should support numeric error code directly and nested in error object', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/items',
      method: ApiMethodItem.get,
      code: 4001,
      message: 'Item limit reached'
    })

    const responseDirect = {
      url: '/api/items',
      status: 422,
      statusText: 'Unprocessable Entity',
      clone: () => ({
        json: async () => ({ code: 4001 })
      })
    } as unknown as Response

    const resultDirect = await storage.find(ApiMethodItem.get, responseDirect)
    expect(resultDirect.code).toBe(4001)
    expect(resultDirect.message).toBe('Item limit reached')

    const responseNested = {
      url: '/api/items',
      status: 422,
      statusText: 'Unprocessable Entity',
      clone: () => ({
        json: async () => ({
          error: {
            code: 4001,
            message: 'Nested message'
          }
        })
      })
    } as unknown as Response

    const resultNested = await storage.find(ApiMethodItem.get, responseNested)
    expect(resultNested.code).toBe(4001)
    expect(resultNested.message).toBe('Item limit reached')
  })

  it('should match numeric code with string code in response and vice-versa', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/auth',
      method: ApiMethodItem.post,
      code: 1002,
      message: 'Token Expired'
    })

    const responseStringCode = {
      url: '/api/auth',
      status: 401,
      statusText: 'Unauthorized',
      clone: () => ({
        json: async () => ({ code: '1002' })
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.post, responseStringCode)
    expect(result.message).toBe('Token Expired')
  })

  it('should handle numeric code 0 without treating it as falsy', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/zero',
      method: ApiMethodItem.get,
      code: 0,
      message: 'Zero Code Handled'
    })

    const response = {
      url: '/api/zero',
      status: 200,
      statusText: 'OK',
      clone: () => ({
        json: async () => ({ code: 0 })
      })
    } as unknown as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.code).toBe(0)
    expect(result.message).toBe('Zero Code Handled')
  })
})
