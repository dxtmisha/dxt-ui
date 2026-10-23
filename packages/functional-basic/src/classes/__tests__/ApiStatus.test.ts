import { describe, it, expect } from 'vitest'
import { ApiStatus } from '../ApiStatus'

describe('ApiStatus', () => {
  it('should initialize with undefined status values and empty message string', () => {
    const status = new ApiStatus()

    expect(status.get()).toBeUndefined()
    expect(status.getStatus()).toBeUndefined()
    expect(status.getStatusText()).toBeUndefined()
    expect(status.getError()).toBeUndefined()
    expect(status.getResponse()).toBeUndefined()
    expect(status.getMessage()).toBe('')
    expect(status.getStatusType()).toBeUndefined()
    expect(status.getCode()).toBeUndefined()
  })

  it('should set and get all status fields with method chaining', () => {
    const status = new ApiStatus()
    const returnedInstance = status.set({
      status: 200,
      statusText: 'OK',
      error: 'none',
      lastResponse: { data: 'test' },
      lastMessage: 'Operation succeeded',
      lastStatus: 'success',
      lastCode: 'CODE_200'
    })

    expect(returnedInstance).toBe(status)
    expect(status.getStatus()).toBe(200)
    expect(status.getStatusText()).toBe('OK')
    expect(status.getError()).toBe('none')
    expect(status.getResponse<{ data: string }>()).toEqual({ data: 'test' })
    expect(status.getMessage()).toBe('Operation succeeded')
    expect(status.getStatusType()).toBe('success')
    expect(status.getCode()).toBe('CODE_200')
  })

  it('should partially update fields without overwriting unrelated fields', () => {
    const status = new ApiStatus()
    status.setStatus(404, 'Not Found')
    expect(status.getStatus()).toBe(404)
    expect(status.getStatusText()).toBe('Not Found')

    status.setError('Network error')
    expect(status.getError()).toBe('Network error')
    expect(status.getStatus()).toBe(404)
  })

  it('should extract message, status, and code when setLastResponse receives an object', () => {
    const status = new ApiStatus()
    const payload = {
      message: 'Validation failed',
      status: 'error',
      code: 422,
      other: 123
    }

    expect(status.setLastResponse(payload)).toBe(status)
    expect(status.getMessage()).toBe('Validation failed')
    expect(status.getStatusType()).toBe('error')
    expect(status.getCode()).toBe('422')
    expect(status.getResponse()).toEqual(payload)
  })

  it('should not extract metadata when setLastResponse receives a primitive or array', () => {
    const status = new ApiStatus()

    status.setLastResponse('Plain string response')
    expect(status.getMessage()).toBe('')
    expect(status.getStatusType()).toBeUndefined()
    expect(status.getCode()).toBeUndefined()
    expect(status.getResponse<string>()).toBe('Plain string response')
  })

  it('should allow explicitly setting lastStatus, lastMessage, and lastCode with chaining', () => {
    const status = new ApiStatus()

    expect(status.setLastStatus('warning')).toBe(status)
    expect(status.setLastMessage('Explicit warning message')).toBe(status)
    expect(status.setLastCode('WARN_01')).toBe(status)

    expect(status.getStatusType()).toBe('warning')
    expect(status.getMessage()).toBe('Explicit warning message')
    expect(status.getCode()).toBe('WARN_01')
  })

  it('should clear stale lastMessage, lastCode, and lastStatus when a subsequent response omits them', () => {
    const status = new ApiStatus()
    status.setLastResponse({
      message: 'Failed first time',
      code: 'ERR_1',
      status: 'error'
    })
    expect(status.getMessage()).toBe('Failed first time')
    expect(status.getCode()).toBe('ERR_1')
    expect(status.getStatusType()).toBe('error')

    status.setLastResponse({ data: [1, 2, 3] })
    expect(status.getMessage()).toBe('')
    expect(status.getCode()).toBeUndefined()
    expect(status.getStatusType()).toBeUndefined()
  })

  it('should clear previous error when setStatus() is called', () => {
    const status = new ApiStatus()
    status.setError('Connection failed')
    expect(status.getError()).toBe('Connection failed')

    status.setStatus(200, 'OK')
    expect(status.getError()).toBeUndefined()
    expect(status.getStatus()).toBe(200)
    expect(status.getStatusText()).toBe('OK')
  })

  it('should reset all status data when reset() is called', () => {
    const status = new ApiStatus()
    status.setStatus(500, 'Internal Error')
    status.setError('Error details')
    status.setLastResponse({ message: 'fail', code: 'E500', status: 'error' })

    expect(status.reset()).toBe(status)
    expect(status.get()).toBeUndefined()
    expect(status.getStatus()).toBeUndefined()
    expect(status.getError()).toBeUndefined()
    expect(status.getMessage()).toBe('')
    expect(status.getCode()).toBeUndefined()
    expect(status.getStatusType()).toBeUndefined()
  })
})
