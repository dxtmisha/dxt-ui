// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ApiErrorItem } from '../ApiErrorItem'
import { type ApiErrorStorageItem, ApiMethodItem } from '../../types/apiTypes'

describe('ApiErrorItem', () => {
  const mockResponse = {
    status: 404,
    statusText: 'Not Found',
    url: 'https://api.example.com/test'
  } as unknown as Response

  const mockErrorStorageItem: ApiErrorStorageItem = {
    url: '/test',
    method: ApiMethodItem.get,
    code: 'ERR_NOT_FOUND',
    message: 'Custom Error Message'
  }

  describe('Context accessors (getMethod, getResponse, getError, getStatus)', () => {
    it('should return the HTTP method used for the request', () => {
      const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorStorageItem)
      expect(item.getMethod()).toBe(ApiMethodItem.get)
    })

    it('should return the raw Fetch response object', () => {
      const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorStorageItem)
      expect(item.getResponse()).toBe(mockResponse)
    })

    it('should return the matched error storage item', () => {
      const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorStorageItem)
      expect(item.getError()).toBe(mockErrorStorageItem)
    })

    it('should return the HTTP status code from the response', () => {
      const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorStorageItem)
      expect(item.getStatus()).toBe(404)
    })
  })

  describe('Error code & message extraction (getCode, getMessage)', () => {
    it('should return string or numeric error code (including 0) from the error object', () => {
      const stringCodeItem = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorStorageItem)
      expect(stringCodeItem.getCode()).toBe('ERR_NOT_FOUND')

      const numericCodeItem = new ApiErrorItem(ApiMethodItem.get, mockResponse, {
        ...mockErrorStorageItem,
        code: 0
      })
      expect(numericCodeItem.getCode()).toBe(0)
    })

    it('should return undefined if error object has no code', () => {
      const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, {
        ...mockErrorStorageItem,
        code: undefined
      })
      expect(item.getCode()).toBeUndefined()
    })

    it('should return message when error message is a string', () => {
      const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorStorageItem)
      expect(item.getMessage()).toBe('Custom Error Message')
    })

    it('should execute message callback with response when error message is a function', () => {
      const errorItemWithCallback: ApiErrorStorageItem = {
        ...mockErrorStorageItem,
        message: (response?: Response) => `Error ${response?.status} at ${response?.url}`
      }
      const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, errorItemWithCallback)

      expect(item.getMessage()).toBe('Error 404 at https://api.example.com/test')
    })

    it('should handle omitted or undefined error object gracefully', () => {
      const item = new ApiErrorItem(ApiMethodItem.get, mockResponse)

      expect(item.getError()).toBeUndefined()
      expect(item.getCode()).toBeUndefined()
      expect(item.getMessage()).toBeUndefined()
    })
  })
})
