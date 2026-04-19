import { describe, it, expect } from 'vitest'
import { ApiStatus } from '../ApiStatus'

describe('ApiStatus', () => {
  it('should initialize empty', () => {
    const status = new ApiStatus()
    expect(status.get()).toBeUndefined()
    expect(status.getStatus()).toBeUndefined()
    expect(status.getStatusText()).toBeUndefined()
    expect(status.getError()).toBeUndefined()
    expect(status.getResponse()).toBeUndefined()
    expect(status.getMessage()).toBe('')
    expect(status.getStatusType()).toBeUndefined()
  })

  it('should set and get basic fields with chaining', () => {
    const status = new ApiStatus()
    const chain = status.set({
      status: 200,
      statusText: 'OK',
      error: 'none',
      lastResponse: { data: 'test' },
      lastMessage: 'success',
      lastStatus: 'success'
    })

    expect(chain).toBe(status) // Chain works
    expect(status.getStatus()).toBe(200)
    expect(status.getStatusText()).toBe('OK')
    expect(status.getError()).toBe('none')
    expect(status.getResponse()).toEqual({ data: 'test' })
    expect(status.getMessage()).toBe('success')
    expect(status.getStatusType()).toBe('success')
  })

  it('should partially set fields and not override others', () => {
    const status = new ApiStatus()
    status.setStatus(404, 'Not Found')
    expect(status.getStatus()).toBe(404)
    expect(status.getStatusText()).toBe('Not Found')

    status.setError('Network err')
    expect(status.getError()).toBe('Network err')

    // Previous fields remain
    expect(status.getStatus()).toBe(404)
  })

  it('should correctly auto-parse lastResponse status and message', () => {
    const status = new ApiStatus()

    status.setLastResponse({
      message: 'unparsed msg',
      status: 'error',
      other: 123
    })

    expect(status.getMessage()).toBe('unparsed msg')
    expect(status.getStatusType()).toBe('error')
    expect(status.getResponse()).toEqual({
      message: 'unparsed msg',
      status: 'error',
      other: 123
    })
  })

  it('should not parse string responses', () => {
    const status = new ApiStatus()

    status.setLastResponse('Just a string')

    // Status/Message should be unaffected by string response
    expect(status.getMessage()).toBe('')
    expect(status.getStatusType()).toBeUndefined()
    expect(status.getResponse()).toBe('Just a string')
  })

  it('should allow explicitly setting lastStatus and lastMessage', () => {
    const status = new ApiStatus()
    status.setLastStatus('warning')
    status.setLastMessage('explicit msg')

    expect(status.getStatusType()).toBe('warning')
    expect(status.getMessage()).toBe('explicit msg')
  })
})
