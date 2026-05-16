// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ApiErrorItem } from '../ApiErrorItem'
import { ApiMethodItem } from '../../types/apiTypes'

describe('ApiErrorItem', () => {
  const mockResponse = {
    status: 404,
    statusText: 'Not Found',
    url: 'https://api.example.com/test'
  } as Response

  const mockErrorItem = {
    url: '/test',
    method: ApiMethodItem.get,
    code: 'ERR_NOT_FOUND',
    message: 'Custom Error Message'
  }

  it('should return correct method', () => {
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorItem)
    expect(item.getMethod()).toBe(ApiMethodItem.get)
  })

  it('should return correct response', () => {
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorItem)
    expect(item.getResponse()).toBe(mockResponse)
  })

  it('should return correct error object', () => {
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorItem)
    expect(item.getError()).toBe(mockErrorItem)
  })

  it('should return correct status', () => {
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorItem)
    expect(item.getStatus()).toBe(404)
  })

  it('should return correct code from error object', () => {
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorItem)
    expect(item.getCode()).toBe('ERR_NOT_FOUND')
  })

  it('should return undefined code if error object has no code', () => {
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, { ...mockErrorItem, code: undefined })
    expect(item.getCode()).toBeUndefined()
  })

  it('should return correct message from error object (string)', () => {
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorItem)
    expect(item.getMessage()).toBe('Custom Error Message')
  })

  it('should return correct message from error object (function)', () => {
    const mockErrorItemWithFn = {
      ...mockErrorItem,
      message: (res?: Response) => `Error at ${res?.url}`
    }
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, mockErrorItemWithFn)
    expect(item.getMessage()).toBe('Error at https://api.example.com/test')
  })

  it('should handle undefined error object in getCode and getMessage', () => {
    // @ts-ignore
    const item = new ApiErrorItem(ApiMethodItem.get, mockResponse, undefined)
    expect(item.getCode()).toBeUndefined()
    expect(item.getMessage()).toBeUndefined()
  })
})
