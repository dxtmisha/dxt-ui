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

  it('should return ApiErrorStorage instance from getStorage', () => {
    const storage = ApiError.getStorage()
    expect(storage).toBeInstanceOf(ApiErrorStorage)
  })

  it('should return the same storage instance (singleton)', () => {
    const storage1 = ApiError.getStorage()
    const storage2 = ApiError.getStorage()
    expect(storage1).toBe(storage2)
  })

  it('should create ApiErrorItem via getItem', async () => {
    const mockResponse = {
      url: '/test',
      status: 404,
      statusText: 'Not Found',
      clone: () => ({
        json: async () => ({})
      })
    } as Response

    const item = await ApiError.getItem(ApiMethodItem.get, mockResponse)
    expect(item).toBeInstanceOf(ApiErrorItem)
    expect(item.getStatus()).toBe(404)
    expect(item.getMethod()).toBe(ApiMethodItem.get)
  })

  it('should use stored error criteria when creating item', async () => {
    const storage = ApiError.getStorage()
    storage.add({
      url: '/stored-error',
      method: ApiMethodItem.post,
      status: 400,
      message: 'Stored Error Message'
    })

    const mockResponse = {
      url: '/stored-error',
      status: 400,
      statusText: 'Bad Request',
      clone: () => ({
        json: async () => ({})
      })
    } as Response

    const item = await ApiError.getItem(ApiMethodItem.post, mockResponse)
    expect(item.getMessage()).toBe('Stored Error Message')
  })
})
