import { describe, it, expect } from 'vitest'
import { ApiStatus } from '../ApiStatus'

describe('ApiStatus', () => {
  describe('Initialization & default state', () => {
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
  })

  describe('Setting & retrieving status fields', () => {
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

    it('should delete keys from status item when explicitly set to undefined', () => {
      const status = new ApiStatus()
      status.set({
        status: 200,
        statusText: 'OK',
        lastCode: 'INIT'
      })

      status.set({
        statusText: undefined,
        lastCode: undefined
      })

      const raw = status.get()
      expect(raw).toBeDefined()
      expect('statusText' in (raw ?? {})).toBe(false)
      expect('lastCode' in (raw ?? {})).toBe(false)
      expect(status.getStatus()).toBe(200)
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

    it('should clear previous error when setStatus() is called', () => {
      const status = new ApiStatus()
      status.setError('Connection failed')
      expect(status.getError()).toBe('Connection failed')

      status.setStatus(200, 'OK')
      expect(status.getError()).toBeUndefined()
      expect(status.getStatus()).toBe(200)
      expect(status.getStatusText()).toBe('OK')
    })
  })

  describe('Automatic metadata extraction in setLastResponse()', () => {
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

    it('should correctly extract numeric 0 and boolean false values in setLastResponse', () => {
      const status = new ApiStatus()
      status.setLastResponse({
        code: 0,
        message: '',
        status: 'info'
      })

      expect(status.getCode()).toBe('0')
      expect(status.getMessage()).toBe('')
      expect(status.getStatusType()).toBe('info')
    })

    it('should not extract metadata when setLastResponse receives a primitive, array, or null', () => {
      const status = new ApiStatus()

      status.setLastResponse('Plain string response')
      expect(status.getMessage()).toBe('')
      expect(status.getStatusType()).toBeUndefined()
      expect(status.getCode()).toBeUndefined()
      expect(status.getResponse<string>()).toBe('Plain string response')

      status.setLastResponse([1, 2, 3])
      expect(status.getResponse<number[]>()).toEqual([1, 2, 3])
      expect(status.getMessage()).toBe('')

      status.setLastResponse(null)
      expect(status.getResponse()).toBeNull()
    })

    it('should ignore inherited prototype properties on response object', () => {
      const status = new ApiStatus()
      const proto = { message: 'Proto message', code: 'PROTO', status: 'error' }
      const payload = Object.create(proto)
      payload.ownData = true

      status.setLastResponse(payload)
      expect(status.getMessage()).toBe('')
      expect(status.getCode()).toBeUndefined()
      expect(status.getStatusType()).toBeUndefined()
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
  })

  describe('Reset & instance isolation', () => {
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
})
