import { describe, it, expect, beforeEach } from 'vitest'
import { ApiStatus } from '../ApiStatus'

describe('ApiStatus / Статус API', () => {
  let apiStatus: ApiStatus

  beforeEach(() => {
    apiStatus = new ApiStatus()
  })

  describe('get / Получение всех данных статуса', () => {
    it('should return undefined when no status data is set / должен возвращать undefined, если данные статуса не установлены', () => {
      expect(apiStatus.get()).toBeUndefined()
    })

    it('should return the status data / должен возвращать данные статуса', () => {
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

  describe('getStatus / Получение кода статуса', () => {
    it('should return undefined when no status code is set / должен возвращать undefined, если код статуса не установлен', () => {
      expect(apiStatus.getStatus()).toBeUndefined()
    })

    it('should return the status code / должен возвращать код статуса', () => {
      apiStatus.setStatus(200)
      expect(apiStatus.getStatus()).toBe(200)
    })

    it('should return updated status code / должен возвращать обновленный код статуса', () => {
      apiStatus.setStatus(200)
      apiStatus.setStatus(404)
      expect(apiStatus.getStatus()).toBe(404)
    })
  })

  describe('getStatusText / Получение текста статуса', () => {
    it('should return undefined when no status text is set / должен возвращать undefined, если текст статуса не установлен', () => {
      expect(apiStatus.getStatusText()).toBeUndefined()
    })

    it('should return the status text / должен возвращать текст статуса', () => {
      apiStatus.setStatus(200, 'OK')
      expect(apiStatus.getStatusText()).toBe('OK')
    })
  })

  describe('getError / Получение ошибки', () => {
    it('should return undefined when no error is set / должен возвращать undefined, если ошибка не установлена', () => {
      expect(apiStatus.getError()).toBeUndefined()
    })

    it('should return the error message / должен возвращать сообщение об ошибке', () => {
      apiStatus.setError('Something went wrong')
      expect(apiStatus.getError()).toBe('Something went wrong')
    })

    it('should clear error when set to undefined / должен очищать ошибку при установке в undefined', () => {
      apiStatus.setError('Error')
      apiStatus.setError(undefined)
      expect(apiStatus.getError()).toBeUndefined()
    })
  })

  describe('getResponse / Получение последнего ответа', () => {
    it('should return undefined when no response is set / должен возвращать undefined, если ответ не установлен', () => {
      expect(apiStatus.getResponse()).toBeUndefined()
    })

    it('should return the last response data / должен возвращать данные последнего ответа', () => {
      const responseData = { id: 1, name: 'Test' }
      apiStatus.setLastResponse(responseData)
      expect(apiStatus.getResponse()).toEqual(responseData)
    })

    it('should work with generic type / должен работать с типизированным результатом', () => {
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

  describe('getMessage / Получение сообщения', () => {
    it('should return empty string when no message is set / должен возвращать пустую строку, если сообщение не установлено', () => {
      expect(apiStatus.getMessage()).toBe('')
    })

    it('should return the last message / должен возвращать последнее сообщение', () => {
      apiStatus.setLastMessage('Operation successful')
      expect(apiStatus.getMessage()).toBe('Operation successful')
    })

    it('should extract message from response with message field / должен извлекать сообщение из поля message в ответе', () => {
      const response = {
        message: 'Auto-extracted message',
        data: 'some data'
      }
      apiStatus.setLastResponse(response)
      expect(apiStatus.getMessage()).toBe('Auto-extracted message')
    })
  })

  describe('set / Установка нескольких полей статуса', () => {
    it('should set all status fields / должен устанавливать все поля статуса', () => {
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

    it('should return this for chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const result = apiStatus.set({ status: 200 })
      expect(result).toBe(apiStatus)
    })
  })

  describe('setStatus / Установка кода и текста статуса', () => {
    it('should set status code and text / должен устанавливать код и текст статуса', () => {
      apiStatus.setStatus(404, 'Not Found')
      expect(apiStatus.getStatus()).toBe(404)
      expect(apiStatus.getStatusText()).toBe('Not Found')
    })

    it('should return this for chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const result = apiStatus.setStatus(200, 'OK')
      expect(result).toBe(apiStatus)
    })
  })

  describe('setError / Установка ошибки', () => {
    it('should set error message / должен устанавливать сообщение об ошибке', () => {
      apiStatus.setError('Network error')
      expect(apiStatus.getError()).toBe('Network error')
    })

    it('should return this for chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const result = apiStatus.setError('Error')
      expect(result).toBe(apiStatus)
    })
  })

  describe('setLastResponse / Установка последнего ответа', () => {
    it('should set last response data / должен устанавливать данные последнего ответа', () => {
      const data = { id: 1, name: 'Test' }
      apiStatus.setLastResponse(data)
      expect(apiStatus.getResponse()).toEqual(data)
    })

    it('should auto-extract message from response / должен автоматически извлекать сообщение из ответа', () => {
      apiStatus.setLastResponse({
        message: 'Extracted message',
        data: 'test'
      })
      expect(apiStatus.getMessage()).toBe('Extracted message')
    })

    it('should return this for chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const result = apiStatus.setLastResponse({ data: 'test' })
      expect(result).toBe(apiStatus)
    })
  })

  describe('setLastMessage / Установка последнего сообщения', () => {
    it('should set last message / должен устанавливать последнее сообщение', () => {
      apiStatus.setLastMessage('Custom message')
      expect(apiStatus.getMessage()).toBe('Custom message')
    })

    it('should return this for chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const result = apiStatus.setLastMessage('Message')
      expect(result).toBe(apiStatus)
    })
  })

  describe('integration / Интеграционные сценарии', () => {
    it('should handle complete workflow / должен обрабатывать полный жизненный цикл данных', () => {
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

      // Запрос с ошибкой
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
