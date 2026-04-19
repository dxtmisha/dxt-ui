// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ApiStatus } from '../ApiStatus'

describe('ApiStatus', () => {
  it('should initialize with undefined values', () => {
    const status = new ApiStatus()
    expect(status.get()).toBeUndefined()
    expect(status.getStatus()).toBeUndefined()
    expect(status.getStatusText()).toBeUndefined()
    expect(status.getStatusType()).toBeUndefined()
    expect(status.getError()).toBeUndefined()
    expect(status.getResponse()).toBeUndefined()
    expect(status.getMessage()).toBe('')
  })

  it('should set and get status item data', () => {
    const status = new ApiStatus()
    const data = {
      status: 200,
      statusText: 'OK',
      error: 'none',
      lastResponse: { data: 'test' },
      lastMessage: 'Success',
      lastStatus: 'success' as any
    }
    status.set(data)

    expect(status.get()).toEqual(data)
    expect(status.getStatus()).toBe(200)
    expect(status.getStatusText()).toBe('OK')
    expect(status.getError()).toBe('none')
    expect(status.getResponse()).toEqual({ data: 'test' })
    expect(status.getMessage()).toBe('Success')
    expect(status.getStatusType()).toBe('success')
  })

  it('should set individual status properties', () => {
    const status = new ApiStatus()
    status.setStatus(404, 'Not Found')
    expect(status.getStatus()).toBe(404)
    expect(status.getStatusText()).toBe('Not Found')

    status.setError('Timeout')
    expect(status.getError()).toBe('Timeout')

    status.setLastMessage('Custom Message')
    expect(status.getMessage()).toBe('Custom Message')

    status.setLastStatus('error' as any)
    expect(status.getStatusType()).toBe('error')
  })

  it('should extract status and message from response object in setLastResponse', () => {
    const status = new ApiStatus()
    const response = {
      status: 'error',
      message: 'Failed to fetch',
      data: [1, 2, 3]
    }
    status.setLastResponse(response)

    expect(status.getResponse()).toEqual(response)
    expect(status.getStatusType()).toBe('error')
    expect(status.getMessage()).toBe('Failed to fetch')
  })

  it('should not extract status/message if response is not an object', () => {
    const status = new ApiStatus()
    status.setLastResponse('simple string')
    expect(status.getResponse()).toBe('simple string')
    expect(status.getStatusType()).toBeUndefined()
    expect(status.getMessage()).toBe('')
  })

  it('should support chaining', () => {
    const status = new ApiStatus()
    const result = status
      .setStatus(201)
      .setError('some error')
      .setLastMessage('msg')

    expect(result).toBe(status)
    expect(status.getStatus()).toBe(201)
    expect(status.getError()).toBe('some error')
    expect(status.getMessage()).toBe('msg')
  })
})
