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

    it('should return updated status text', () => {
      apiStatus.setStatus(200, 'OK')
      apiStatus.setStatus(404, 'Not Found')
      expect(apiStatus.getStatusText()).toBe('Not Found')
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

    it('should return updated error message', () => {
      apiStatus.setError('First error')
      apiStatus.setError('Second error')
      expect(apiStatus.getError()).toBe('Second error')
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
      expect(result?.username).toBe('test_user')
    })

    it('should handle array responses', () => {
      const arrayResponse = [1, 2, 3, 4, 5]
      apiStatus.setLastResponse(arrayResponse)
      expect(apiStatus.getResponse()).toEqual(arrayResponse)
    })

    it('should handle string responses', () => {
      apiStatus.setLastResponse('text response')
      expect(apiStatus.getResponse()).toBe('text response')
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

    it('should not extract message from non-object response', () => {
      apiStatus.setLastResponse('string response')
      expect(apiStatus.getMessage()).toBe('')
    })

    it('should not extract message from array response', () => {
      apiStatus.setLastResponse([{ message: 'test' }])
      expect(apiStatus.getMessage()).toBe('')
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

    it('should set partial status fields', () => {
      apiStatus.set({ status: 200 })
      expect(apiStatus.getStatus()).toBe(200)
      expect(apiStatus.getStatusText()).toBeUndefined()
    })

    it('should return this for chaining', () => {
      const result = apiStatus.set({ status: 200 })
      expect(result).toBe(apiStatus)
    })

    it('should update only specified fields', () => {
      apiStatus.set({
        status: 200,
        statusText: 'OK',
        lastMessage: 'First'
      })

      apiStatus.set({
        status: 404,
        lastMessage: 'Second'
      })

      expect(apiStatus.getStatus()).toBe(404)
      expect(apiStatus.getStatusText()).toBe('OK') // сохранился
      expect(apiStatus.getMessage()).toBe('Second')
    })
  })

  describe('setStatus', () => {
    it('should set status code only', () => {
      apiStatus.setStatus(200)
      expect(apiStatus.getStatus()).toBe(200)
      expect(apiStatus.getStatusText()).toBeUndefined()
    })

    it('should set status code and text', () => {
      apiStatus.setStatus(404, 'Not Found')
      expect(apiStatus.getStatus()).toBe(404)
      expect(apiStatus.getStatusText()).toBe('Not Found')
    })

    it('should return this for chaining', () => {
      const result = apiStatus.setStatus(200, 'OK')
      expect(result).toBe(apiStatus)
    })

    it('should allow chaining with other methods', () => {
      apiStatus
        .setStatus(200, 'OK')
        .setError('No error')
        .setLastMessage('Success')

      expect(apiStatus.getStatus()).toBe(200)
      expect(apiStatus.getStatusText()).toBe('OK')
      expect(apiStatus.getError()).toBe('No error')
      expect(apiStatus.getMessage()).toBe('Success')
    })
  })

  describe('setError', () => {
    it('should set error message', () => {
      apiStatus.setError('Network error')
      expect(apiStatus.getError()).toBe('Network error')
    })

    it('should clear error when undefined', () => {
      apiStatus.setError('Error')
      apiStatus.setError(undefined)
      expect(apiStatus.getError()).toBeUndefined()
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
      expect(apiStatus.getResponse()).toEqual({
        message: 'Extracted message',
        data: 'test'
      })
    })

    it('should not extract message from non-object', () => {
      apiStatus.setLastResponse('text')
      expect(apiStatus.getMessage()).toBe('')
    })

    it('should not extract message from array', () => {
      apiStatus.setLastResponse([{ message: 'test' }])
      expect(apiStatus.getMessage()).toBe('')
    })

    it('should convert non-string message to string', () => {
      apiStatus.setLastResponse({ message: 123 })
      expect(apiStatus.getMessage()).toBe('123')
    })

    it('should return this for chaining', () => {
      const result = apiStatus.setLastResponse({ data: 'test' })
      expect(result).toBe(apiStatus)
    })

    it('should handle undefined response', () => {
      apiStatus.setLastResponse({ data: 'test' })
      apiStatus.setLastResponse(undefined)
      expect(apiStatus.getResponse()).toBeUndefined()
    })
  })

  describe('setLastMessage', () => {
    it('should set last message', () => {
      apiStatus.setLastMessage('Custom message')
      expect(apiStatus.getMessage()).toBe('Custom message')
    })

    it('should clear message when undefined', () => {
      apiStatus.setLastMessage('Message')
      apiStatus.setLastMessage(undefined)
      expect(apiStatus.getMessage()).toBe('')
    })

    it('should return this for chaining', () => {
      const result = apiStatus.setLastMessage('Message')
      expect(result).toBe(apiStatus)
    })

    it('should override message extracted from response', () => {
      apiStatus.setLastResponse({ message: 'Auto message' })
      apiStatus.setLastMessage('Manual message')
      expect(apiStatus.getMessage()).toBe('Manual message')
    })
  })

  describe('integration tests', () => {
    it('should handle complete workflow', () => {
      // Успешный запрос
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
    })

    it('should handle error workflow', () => {
      // Запрос с ошибкой
      apiStatus
        .setStatus(500, 'Internal Server Error')
        .setError('Database connection failed')
        .setLastResponse(null)

      expect(apiStatus.getStatus()).toBe(500)
      expect(apiStatus.getStatusText()).toBe('Internal Server Error')
      expect(apiStatus.getError()).toBe('Database connection failed')
      expect(apiStatus.getResponse()).toBeNull()
    })

    it('should handle multiple updates', () => {
      // Первый запрос
      apiStatus
        .setStatus(200, 'OK')
        .setLastResponse({ id: 1 })
        .setLastMessage('First request')

      expect(apiStatus.getStatus()).toBe(200)
      expect(apiStatus.getMessage()).toBe('First request')

      // Второй запрос
      apiStatus
        .setStatus(201, 'Created')
        .setLastResponse({ id: 2 })
        .setLastMessage('Second request')

      expect(apiStatus.getStatus()).toBe(201)
      expect(apiStatus.getStatusText()).toBe('Created')
      expect(apiStatus.getResponse()).toEqual({ id: 2 })
      expect(apiStatus.getMessage()).toBe('Second request')
    })

    it('should work with typed generic', () => {
      const typedStatus = new ApiStatus()
      typedStatus.set({
        status: 200,
        statusText: 'OK'
      })

      expect(typedStatus.getStatus()).toBe(200)
    })

    it('should handle all setter methods in chain', () => {
      const result = apiStatus
        .setStatus(201, 'Created')
        .setError(undefined)
        .setLastResponse({ id: 123 })
        .setLastMessage('Resource created successfully')

      expect(result).toBe(apiStatus)
      expect(apiStatus.get()).toEqual({
        status: 201,
        statusText: 'Created',
        error: undefined,
        lastResponse: { id: 123 },
        lastMessage: 'Resource created successfully'
      })
    })
  })
})
