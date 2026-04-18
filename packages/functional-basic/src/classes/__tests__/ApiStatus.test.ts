import { describe, it, expect, beforeEach } from 'vitest'
import { ApiStatus } from '../ApiStatus'

describe('ApiStatus', () => {
  let apiStatus: ApiStatus

  beforeEach(() => {
    apiStatus = new ApiStatus()
  })

  describe('get', () => {
    it('should return undefined when no status data is set', () => {
      expect(apiStatus.get()).toBeUndefined()
    })

    it('should return the status data', () => {
      const statusData = {
        status: 200,
        statusText: 'OK',
        error: undefined,
        lastResponse: { data: 'test' },
        lastMessage: 'Success'
      }
      apiStatus.set(statusData)
      expect(apiStatus.get()).toEqual(statusData)
    })
  })

  describe('getStatus', () => {
    it('should return undefined when no status code is set', () => {
      expect(apiStatus.getStatus()).toBeUndefined()
    })

    it('should return the status code', () => {
      apiStatus.setStatus(200)
      expect(apiStatus.getStatus()).toBe(200)
    })

    it('should return updated status code', () => {
      apiStatus.setStatus(200)
      apiStatus.setStatus(404)
      expect(apiStatus.getStatus()).toBe(404)
    })
  })

  describe('getStatusText', () => {
    it('should return undefined when no status text is set', () => {
      expect(apiStatus.getStatusText()).toBeUndefined()
    })

    it('should return the status text', () => {
      apiStatus.setStatus(200, 'OK')
      expect(apiStatus.getStatusText()).toBe('OK')
    })
  })

  describe('getStatusType', () => {
    it('should return undefined when no status type is set', () => {
      expect(apiStatus.getStatusType()).toBeUndefined()
    })

    it('should return status type', () => {
      apiStatus.setLastStatus('success')
      expect(apiStatus.getStatusType()).toBe('success')
    })

    it('should return updated status type', () => {
      apiStatus.setLastStatus('success')
      apiStatus.setLastStatus('error')
      expect(apiStatus.getStatusType()).toBe('error')
    })
  })

  describe('getError', () => {
    it('should return undefined when no error is set', () => {
      expect(apiStatus.getError()).toBeUndefined()
    })

    it('should return the error message', () => {
      apiStatus.setError('Something went wrong')
      expect(apiStatus.getError()).toBe('Something went wrong')
    })

    it('should clear error when set to undefined', () => {
      apiStatus.setError('Error')
      apiStatus.setError(undefined)
      expect(apiStatus.getError()).toBeUndefined()
    })
  })

  describe('getResponse', () => {
    it('should return undefined when no response is set', () => {
      expect(apiStatus.getResponse()).toBeUndefined()
    })

    it('should return the last response data', () => {
      const responseData = { id: 1, name: 'Test' }
      apiStatus.setLastResponse(responseData)
      expect(apiStatus.getResponse()).toEqual(responseData)
    })

    it('should work with generic type', () => {
      interface UserResponse {
        userId: number
        username: string
      }

      const response: UserResponse = { userId: 123, username: 'test_user' }
      apiStatus.setLastResponse(response)

      const result = apiStatus.getResponse<UserResponse>()
      expect(result).toEqual(response)
      expect(result?.userId).toBe(123)
    })
  })

  describe('getMessage', () => {
    it('should return empty string when no message is set', () => {
      expect(apiStatus.getMessage()).toBe('')
    })

    it('should return the last message', () => {
      apiStatus.setLastMessage('Operation successful')
      expect(apiStatus.getMessage()).toBe('Operation successful')
    })

    it('should extract message from response with message field', () => {
      const response = {
        message: 'Auto-extracted message',
        data: 'some data'
      }
      apiStatus.setLastResponse(response)
      expect(apiStatus.getMessage()).toBe('Auto-extracted message')
    })
  })

  describe('set', () => {
    it('should set all status fields', () => {
      const statusData = {
        status: 201,
        statusText: 'Created',
        error: 'No error',
        lastResponse: { created: true },
        lastMessage: 'Resource created'
      }

      apiStatus.set(statusData)

      expect(apiStatus.getStatus()).toBe(201)
      expect(apiStatus.getStatusText()).toBe('Created')
      expect(apiStatus.getError()).toBe('No error')
      expect(apiStatus.getResponse()).toEqual({ created: true })
      expect(apiStatus.getMessage()).toBe('Resource created')
    })

    it('should return this for chaining', () => {
      const result = apiStatus.set({ status: 200 })
      expect(result).toBe(apiStatus)
    })
  })

  describe('setStatus', () => {
    it('should set status code and text', () => {
      apiStatus.setStatus(404, 'Not Found')
      expect(apiStatus.getStatus()).toBe(404)
      expect(apiStatus.getStatusText()).toBe('Not Found')
    })

    it('should return this for chaining', () => {
      const result = apiStatus.setStatus(200, 'OK')
      expect(result).toBe(apiStatus)
    })
  })

  describe('setError', () => {
    it('should set error message', () => {
      apiStatus.setError('Network error')
      expect(apiStatus.getError()).toBe('Network error')
    })

    it('should return this for chaining', () => {
      const result = apiStatus.setError('Error')
      expect(result).toBe(apiStatus)
    })
  })

  describe('setLastResponse', () => {
    it('should set last response data', () => {
      const data = { id: 1, name: 'Test' }
      apiStatus.setLastResponse(data)
      expect(apiStatus.getResponse()).toEqual(data)
    })

    it('should auto-extract message from response', () => {
      apiStatus.setLastResponse({
        message: 'Extracted message',
        data: 'test'
      })
      expect(apiStatus.getMessage()).toBe('Extracted message')
    })

    it('should return this for chaining', () => {
      const result = apiStatus.setLastResponse({ data: 'test' })
      expect(result).toBe(apiStatus)
    })
  })

  describe('setLastMessage', () => {
    it('should set last message', () => {
      apiStatus.setLastMessage('Custom message')
      expect(apiStatus.getMessage()).toBe('Custom message')
    })

    it('should return this for chaining', () => {
      const result = apiStatus.setLastMessage('Message')
      expect(result).toBe(apiStatus)
    })
  })

  describe('integration scenarios', () => {
    it('should handle complete workflow', () => {
      // Successful request
      apiStatus
        .setStatus(200, 'OK')
        .setLastResponse({
          message: 'Data fetched successfully',
          data: { items: [1, 2, 3] }
        })

      expect(apiStatus.getStatus()).toBe(200)
      expect(apiStatus.getStatusText()).toBe('OK')
      expect(apiStatus.getMessage()).toBe('Data fetched successfully')
      expect(apiStatus.getResponse()).toEqual({
        message: 'Data fetched successfully',
        data: { items: [1, 2, 3] }
      })
      expect(apiStatus.getError()).toBeUndefined()

      // Request with error
      apiStatus
        .setStatus(500, 'Internal Server Error')
        .setError('Database connection failed')
        .setLastResponse(null)

      expect(apiStatus.getStatus()).toBe(500)
      expect(apiStatus.getError()).toBe('Database connection failed')
      expect(apiStatus.getResponse()).toBeNull()
    })
  })
})
