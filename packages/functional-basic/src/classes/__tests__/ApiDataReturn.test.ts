import { describe, it, expect, vi } from 'vitest'
import { ApiDataReturn } from '../ApiDataReturn'
import { ApiStatus } from '../ApiStatus'

describe('ApiDataReturn', () => {
  const createResponse = (data: any, contentType = 'application/json') => {
    return {
      headers: {
        get: (name: string) => (name === 'Content-Type' ? contentType : null)
      },
      json: async () => data,
      text: async () => (typeof data === 'string' ? data : JSON.stringify(data))
    } as unknown as Response
  }

  const apiFetchDefault: any = {
    toData: true
  }

  const endEmpty: any = {}

  it('should initialize and return JSON data', async () => {
    const mockData = { id: 1, name: 'Test' }
    const response = createResponse(mockData)
    const apiDataReturn = new ApiDataReturn(apiFetchDefault, response, endEmpty)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toEqual(mockData)
  })

  it('should return text data if content-type is not JSON', async () => {
    const mockData = 'plain text'
    const response = createResponse(mockData, 'text/plain')
    const apiDataReturn = new ApiDataReturn(apiFetchDefault, response, endEmpty)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toBe(mockData)
  })

  it('should use queryReturn if provided in apiFetch', async () => {
    const mockData = { id: 1 }
    const response = createResponse(mockData)
    const queryReturn = vi.fn().mockResolvedValue({ custom: 'data' })
    const apiFetch = { ...apiFetchDefault, queryReturn }

    const apiDataReturn = new ApiDataReturn(apiFetch, response, endEmpty)
    await apiDataReturn.init()

    expect(queryReturn).toHaveBeenCalledWith(response)
    expect(apiDataReturn.get()).toEqual({ custom: 'data' })
  })

  it('should use data from preparation end if available', async () => {
    const response = createResponse({})
    const end = { data: { fromEnd: true } }
    const apiDataReturn = new ApiDataReturn(apiFetchDefault, response, end as any)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toEqual({ fromEnd: true })
  })

  it('should unwrap "data" property and merge metadata if toData is true', async () => {
    const mockResponse = {
      data: { id: 1, title: 'Item' },
      success: true,
      message: 'OK',
      status: 200
    }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn(apiFetchDefault, response, endEmpty)

    await apiDataReturn.init()
    const result = apiDataReturn.get()

    expect(result).toEqual({
      id: 1,
      title: 'Item',
      success: true,
      message: 'OK',
      status: 200
    })
  })

  it('should NOT unwrap "data" if toData is false', async () => {
    const mockResponse = { data: { id: 1 } }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn({ toData: false }, response, endEmpty)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toEqual(mockResponse)
  })

  it('should return raw property data if data.data is not an object/array', async () => {
    const mockResponse = { data: 'simple string', success: true }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn(apiFetchDefault, response, endEmpty)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toBe('simple string')
  })

  it('should return array if data.data is an array', async () => {
    const mockResponse = { data: [1, 2, 3], success: true }
    const response = createResponse(mockResponse)
    const apiDataReturn = new ApiDataReturn(apiFetchDefault, response, endEmpty)

    await apiDataReturn.init()
    expect(apiDataReturn.get()).toEqual([1, 2, 3])
  })

  it('should merge statusObject in getAndStatus', async () => {
    const mockData = { id: 1 }
    const response = createResponse(mockData)
    const status = new ApiStatus()
    vi.spyOn(status, 'get').mockReturnValue({ status: 200, lastMessage: 'Success' } as any)

    const apiDataReturn = new ApiDataReturn(apiFetchDefault, response, endEmpty)
    await apiDataReturn.init()

    const result = apiDataReturn.getAndStatus(status)
    expect(result).toEqual({
      id: 1,
      statusObject: { status: 200, lastMessage: 'Success' }
    })
  })

  it('should return raw data via getData()', async () => {
    const mockData = { id: 1 }
    const response = createResponse(mockData)
    const apiDataReturn = new ApiDataReturn(apiFetchDefault, response, endEmpty)

    await apiDataReturn.init()
    expect(apiDataReturn.getData()).toEqual(mockData)
  })
})
