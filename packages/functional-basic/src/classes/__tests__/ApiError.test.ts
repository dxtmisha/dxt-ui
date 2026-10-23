// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { ApiError } from '../ApiError'
import { ApiErrorStorage } from '../ApiErrorStorage'
import { ApiErrorItem } from '../ApiErrorItem'
import { ApiMethodItem } from '../../types/apiTypes'
import { ServerStorage } from '../ServerStorage'

describe('ApiError', () => {
  beforeEach(() => {
    ServerStorage.reset()
  })

  it('should return a singleton ApiErrorStorage instance from getStorage()', () => {
    const firstStorage = ApiError.getStorage()
    const secondStorage = ApiError.getStorage()

    expect(firstStorage).toBeInstanceOf(ApiErrorStorage)
    expect(firstStorage).toBe(secondStorage)
  })

  it('should create an ApiErrorItem via getItem()', async () => {
    const mockResponse = {
      url: '/test',
      status: 404,
      statusText: 'Not Found',
      clone: () => ({
        json: async () => ({})
      })
    } as unknown as Response

    const item = await ApiError.getItem(ApiMethodItem.get, mockResponse)

    expect(item).toBeInstanceOf(ApiErrorItem)
    expect(item.getStatus()).toBe(404)
    expect(item.getMethod()).toBe(ApiMethodItem.get)
    expect(item.getResponse()).toBe(mockResponse)
  })

  it('should register error rules via ApiError.add() and match them in ApiError.getItem()', async () => {
    ApiError.add({
      url: '/stored-error',
      method: ApiMethodItem.post,
      status: 400,
      code: 'VALIDATION_FAILED',
      message: 'Stored Error Message'
    })

    const mockResponse = {
      url: '/stored-error',
      status: 400,
      statusText: 'Bad Request',
      clone: () => ({
        json: async () => ({ code: 'VALIDATION_FAILED' })
      })
    } as unknown as Response

    const item = await ApiError.getItem(ApiMethodItem.post, mockResponse)

    expect(item.getCode()).toBe('VALIDATION_FAILED')
    expect(item.getMessage()).toBe('Stored Error Message')
  })

  it('should support adding a list of error rules with shared url and method via ApiError.add()', async () => {
    ApiError.add(
      [
        { code: 'ERR_ONE', message: 'First error' },
        { code: 'ERR_TWO', message: 'Second error' }
      ],
      '/batch-endpoint',
      ApiMethodItem.put
    )

    const mockResponse = {
      url: '/batch-endpoint',
      status: 422,
      statusText: 'Unprocessable Entity',
      clone: () => ({
        json: async () => ({ code: 'ERR_TWO' })
      })
    } as unknown as Response

    const item = await ApiError.getItem(ApiMethodItem.put, mockResponse)

    expect(item.getCode()).toBe('ERR_TWO')
    expect(item.getMessage()).toBe('Second error')
  })
})
