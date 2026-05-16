// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ApiErrorStorage } from '../ApiErrorStorage'
import { ApiMethodItem } from '../../types/apiTypes'

describe('ApiErrorStorage', () => {
  it('should add error items to storage', () => {
    const storage = new ApiErrorStorage()
    const item = {
      url: '/api/test',
      method: ApiMethodItem.get,
      status: 400
    }

    storage.add(item)
    // Accessing protected property for testing purposes
    expect((storage as any).storage).toContainEqual(item)

    const list = [
      { url: '/api/test2', method: ApiMethodItem.post, status: 500 },
      { url: '/api/test3', method: ApiMethodItem.put, status: 404 }
    ]
    storage.add(list)
    expect((storage as any).storage).toHaveLength(3)
  })

  it('should find error by status', async () => {
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
    } as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Custom Error')
    expect(result.status).toBe(400)
  })

  it('should find error by code in body', async () => {
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
    } as Response

    const result = await storage.find(ApiMethodItem.post, response)
    expect(result.message).toBe('Code Error')
    expect(result.code).toBe('ERR_001')
  })

  it('should find error by validation function', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/validate',
      method: ApiMethodItem.get,
      validation: (res: Response) => res.headers.get('X-Error') === 'true',
      message: 'Validation Error'
    })

    const response = {
      url: '/api/validate',
      status: 200,
      headers: new Headers({ 'X-Error': 'true' }),
      clone: () => ({
        json: async () => ({})
      })
    } as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Validation Error')
  })

  it('should find error by RegExp URL', async () => {
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
    } as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Item Not Found')
  })

  it('should return default error item if no match found', async () => {
    const storage = new ApiErrorStorage()
    const response = {
      url: '/api/unknown',
      status: 500,
      statusText: 'Internal Server Error',
      clone: () => ({
        json: async () => ({ code: 'UNKNOWN_CODE', message: 'Unknown Message' })
      })
    } as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.url).toBe('/api/unknown')
    expect(result.status).toBe(500)
    expect(result.code).toBe('UNKNOWN_CODE')
    expect(result.message).toBe('Unknown Message')
  })

  it('should handle nested error object in body', async () => {
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
    } as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.code).toBe('NESTED_CODE')
    expect(result.message).toBe('Nested Message')
  })

  it('should prefer item message over response statusText', async () => {
    const storage = new ApiErrorStorage()
    storage.add({
      url: '/api/msg',
      method: ApiMethodItem.get,
      status: 400,
      message: 'Stored Message'
    })

    const response = {
      url: '/api/msg',
      status: 400,
      statusText: 'Response Status Text',
      clone: () => ({
        json: async () => ({ message: 'Body Message' })
      })
    } as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Stored Message')
  })

  it('should prefer body message over response statusText when no item matches', async () => {
    const storage = new ApiErrorStorage()
    const response = {
      url: '/api/none',
      status: 400,
      statusText: 'Response Status Text',
      clone: () => ({
        json: async () => ({ message: 'Body Message' })
      })
    } as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Body Message')
  })

  it('should use statusText if no other message available', async () => {
    const storage = new ApiErrorStorage()
    const response = {
      url: '/api/none',
      status: 400,
      statusText: 'Only This Text',
      clone: () => ({
        json: async () => ({})
      })
    } as Response

    const result = await storage.find(ApiMethodItem.get, response)
    expect(result.message).toBe('Only This Text')
  })
})
