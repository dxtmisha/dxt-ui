import { describe, it, expect, vi } from 'vitest'
import { ApiDataReturn } from '../ApiDataReturn'
import { ApiErrorItem } from '../ApiErrorItem'
import { ApiStatus } from '../ApiStatus'
import {
  type ApiFetch,
  ApiMethodItem,
  type ApiPreparationEnd
} from '../../types/apiTypes'

describe('ApiDataReturn', () => {
  const createResponse = (data: unknown, contentType: string | null = 'application/json'): Response => {
    return {
      headers: {
        get: (name: string) => (name === 'Content-Type' ? contentType : null)
      },
      json: async () => data,
      text: async () => (typeof data === 'string' ? data : JSON.stringify(data))
    } as unknown as Response
  }

  const defaultApiFetch: ApiFetch = {
    toData: true
  }

  const emptyEnd: ApiPreparationEnd = {}

  it('should return undefined from getData() before init() and empty object from get()', () => {
    const response = createResponse({ id: 1 })
    const apiDataReturn = new ApiDataReturn(defaultApiFetch, response, emptyEnd)

    expect(apiDataReturn.getData()).toBeUndefined()
    expect(apiDataReturn.get()).toEqual({})
  })

  it('should initialize and return JSON data when no "data" wrapper key is present', async () => {
    const mockData = { id: 1, name: 'Test' }
    const response = createResponse(mockData)
    const apiDataReturn = new ApiDataReturn<typeof mockData>(defaultApiFetch, response, emptyEnd)

    const instance = await apiDataReturn.init()
    expect(instance).toBe(apiDataReturn)
    expect(apiDataReturn.getData()).toEqual(mockData)
    expect(apiDataReturn.get()).toEqual(mockData)
    // Calling get() a second time returns the cached dataMod
    expect(apiDataReturn.get()).toEqual(mockData)
  })

  it('should read text data and unwrap it when Content-Type is not application/json', async () => {
    const response = createResponse('plain text content', 'text/plain')
    const apiDataReturn = new ApiDataReturn<string>(defaultApiFetch, response, emptyEnd)

    await apiDataReturn.init()
    expect(apiDataReturn.getData()).toEqual({ data: 'plain text content' })
    expect(apiDataReturn.get()).toBe('plain text content')
  })

  it('should fall back to text parsing when Content-Type header is missing', async () => {
    const response = createResponse('fallback text', null)
    const apiDataReturn = new ApiDataReturn<string>({ toData: false }, response, emptyEnd)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toEqual({ data: 'fallback text' })
  })

  it('should use custom queryReturn processor if provided in apiFetch', async () => {
    const response = createResponse({ id: 1 })
    const queryReturn = vi.fn(async (_query: Response) => ({ customProcessed: true }))
    const apiFetch: ApiFetch = { ...defaultApiFetch, queryReturn }

    const apiDataReturn = new ApiDataReturn<{ customProcessed: boolean }>(apiFetch, response, emptyEnd)
    await apiDataReturn.init()

    expect(queryReturn).toHaveBeenCalledWith(response)
    expect(apiDataReturn.get()).toEqual({ customProcessed: true })
  })

  it('should use data from preparation end hook if "data" key is present in end', async () => {
    const response = createResponse({ ignored: true })
    const endWithData: ApiPreparationEnd = { data: { fromEnd: true } }
    const apiDataReturn = new ApiDataReturn<{ fromEnd: boolean }>(defaultApiFetch, response, endWithData)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toEqual({ fromEnd: true })
  })

  it('should unwrap "data" object and merge top-level metadata keys when toData is true', async () => {
    const mockResponse = {
      data: { id: 1, title: 'Item', message: 'Inner message preserved' },
      success: true,
      message: 'Top-level message ignored because inner exists',
      status: 'success',
      code: 'OK_200'
    }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn(defaultApiFetch, response, emptyEnd)

    await apiDataReturn.init()
    const result = apiDataReturn.get()

    expect(result).toEqual({
      id: 1,
      title: 'Item',
      message: 'Inner message preserved',
      success: true,
      status: 'success',
      code: 'OK_200'
    })
  })

  it('should NOT unwrap "data" property when toData is false', async () => {
    const mockResponse = { data: { id: 1 }, success: true }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn({ toData: false }, response, emptyEnd)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toEqual(mockResponse)
  })

  it('should return primitive data.data directly when data.data is not an object', async () => {
    const mockResponse = { data: 'simple string', success: true }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn<string>(defaultApiFetch, response, emptyEnd)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toBe('simple string')
  })

  it('should return array data.data directly when data.data is an array', async () => {
    const mockResponse = { data: [1, 2, 3], success: true }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn<number[]>(defaultApiFetch, response, emptyEnd)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toEqual([1, 2, 3])
  })

  it('should merge statusObject and errorObject in getAndStatus() when data is an object', async () => {
    const mockData = { id: 1 }
    const response = createResponse(mockData)
    const status = new ApiStatus()
    status.set({ status: 200, lastMessage: 'Success' })

    const errorItem = new ApiErrorItem(
      ApiMethodItem.get,
      response,
      { url: '/test', method: ApiMethodItem.get, code: 'ERR_CODE' }
    )

    const apiDataReturn = new ApiDataReturn<typeof mockData>(defaultApiFetch, response, emptyEnd, errorItem)
    await apiDataReturn.init()

    const result = apiDataReturn.getAndStatus(status)
    expect(result).toEqual({
      id: 1,
      statusObject: { status: 200, lastMessage: 'Success' },
      errorObject: errorItem
    })
  })

  it('should return array directly from getAndStatus() without attaching statusObject when data is an array', async () => {
    const mockResponse = { data: ['first', 'second'] }
    const response = createResponse(mockResponse)
    const status = new ApiStatus()
    status.setStatus(200, 'OK')

    const apiDataReturn = new ApiDataReturn<string[]>(defaultApiFetch, response, emptyEnd)
    await apiDataReturn.init()

    expect(apiDataReturn.getAndStatus(status)).toEqual(['first', 'second'])
  })

  it('should extract code and message from nested error object when present', async () => {
    const mockResponse = {
      data: { id: 1 },
      error: { code: 'INNER_CODE', message: 'Inner error message' }
    }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn(defaultApiFetch, response, emptyEnd)

    await apiDataReturn.init()
    const result = apiDataReturn.get()

    expect(result).toEqual({
      id: 1,
      error: { code: 'INNER_CODE', message: 'Inner error message' },
      code: 'INNER_CODE',
      message: 'Inner error message'
    })
  })

  it('should fall back to top-level code and message when nested error object omits them', async () => {
    const mockResponse = {
      data: { id: 1 },
      code: 'TOP_CODE',
      message: 'Top message',
      error: { details: 'some details' }
    }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn(defaultApiFetch, response, emptyEnd)

    await apiDataReturn.init()
    const result = apiDataReturn.get()

    expect(result).toEqual({
      id: 1,
      code: 'TOP_CODE',
      message: 'Top message',
      error: { details: 'some details' }
    })
  })

  it('should handle empty or malformed JSON response without throwing SyntaxError (e.g. 204 No Content)', async () => {
    const emptyResponse = {
      headers: {
        get: (name: string) => (name === 'Content-Type' ? 'application/json' : null)
      },
      json: async () => {
        throw new SyntaxError('Unexpected end of JSON input')
      },
      text: async () => ''
    } as unknown as Response

    const apiDataReturn = new ApiDataReturn(defaultApiFetch, emptyResponse, emptyEnd)
    await apiDataReturn.init()

    expect(apiDataReturn.get()).toEqual({})
  })
})
