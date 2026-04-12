import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiPreparation } from '../ApiPreparation'
import type { ApiPreparationEnd } from '../../types/apiTypes'

describe('ApiPreparation / Подготовка API', () => {
  let apiPreparation: ApiPreparation

  beforeEach(() => {
    apiPreparation = new ApiPreparation()
  })

  describe('make / Выполнение подготовки', () => {
    it('should not call callback when active is false / не должен вызывать колбэк, если параметр active равен false', async () => {
      const callback = vi.fn().mockResolvedValue(undefined)
      apiPreparation.set(callback)

      await apiPreparation.make(false, {} as any)

      expect(callback).not.toHaveBeenCalled()
    })

    it('should not call callback when callback is not set / не должен вызывать колбэк, если колбэк не установлен', async () => {
      const result = await apiPreparation.make(true, {} as any)

      expect(result).toBeUndefined()
    })

    it('should call callback when active is true and callback is set / должен вызывать колбэк, если active равен true и колбэк установлен', async () => {
      const callback = vi.fn().mockResolvedValue(undefined)
      apiPreparation.set(callback)

      await apiPreparation.make(true, {} as any)

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should wait for callback to complete / должен ожидать завершения колбэка', async () => {
      let callbackCompleted = false
      const callback = vi.fn().mockImplementation(async () => {
        await new Promise(resolve => setTimeout(resolve, 50))
        callbackCompleted = true
      })
      apiPreparation.set(callback)

      await apiPreparation.make(true, {} as any)

      expect(callbackCompleted).toBe(true)
    })

    it('should handle multiple concurrent calls without overlapping / должен корректно обрабатывать несколько параллельных вызовов без наложения', async () => {
      let executionCount = 0
      const callback = vi.fn().mockImplementation(async () => {
        executionCount++
        await new Promise(resolve => setTimeout(resolve, 20))
        executionCount--
      })
      apiPreparation.set(callback)

      // Start multiple concurrent calls
      const promises = [
        apiPreparation.make(true, {} as any),
        apiPreparation.make(true, {} as any),
        apiPreparation.make(true, {} as any)
      ]

      await Promise.all(promises)

      // Callback should be called 3 times but never overlap
      expect(callback).toHaveBeenCalledTimes(3)
      expect(executionCount).toBe(0)
    })
  })

  describe('makeEnd / Выполнение завершающей обработки', () => {
    it('should return empty object when active is false / должен возвращать пустой объект, если параметр active равен false', async () => {
      const callback = vi.fn().mockResolvedValue({ reset: true })
      const mockResponse = new Response('{}', { status: 200 })
      apiPreparation.setEnd(callback)

      const result = await apiPreparation.makeEnd(false, mockResponse, {} as any)

      expect(result).toEqual({})
      expect(callback).not.toHaveBeenCalled()
    })

    it('should return empty object when callback is not set / должен возвращать пустой объект, если колбэк не установлен', async () => {
      const mockResponse = new Response('{}', { status: 200 })

      const result = await apiPreparation.makeEnd(true, mockResponse, {} as any)

      expect(result).toEqual({})
    })

    it('should call callback and return result when active is true / должен вызывать колбэк и возвращать результат, если active равен true', async () => {
      const expectedResult: ApiPreparationEnd = {
        reset: true,
        data: { message: 'Success' }
      }
      const callback = vi.fn().mockResolvedValue(expectedResult)
      const mockResponse = new Response('{}', { status: 200 })
      const mockApiFetch: any = { path: 'test' }
      apiPreparation.setEnd(callback)

      const result = await apiPreparation.makeEnd(true, mockResponse, mockApiFetch)

      expect(callback).toHaveBeenCalledWith(mockResponse, mockApiFetch)
      expect(result).toEqual(expectedResult)
    })

    it('should pass Response object to callback / должен передавать объект Response в колбэк', async () => {
      const callback = vi.fn().mockResolvedValue({})
      const mockResponse = new Response('{"test": "data"}', {
        status: 201,
        statusText: 'Created'
      })
      const mockApiFetch: any = { path: 'test' }
      apiPreparation.setEnd(callback)

      await apiPreparation.makeEnd(true, mockResponse, mockApiFetch)

      expect(callback).toHaveBeenCalledWith(mockResponse, mockApiFetch)
    })
  })

  describe('set / Установка колбэка подготовки', () => {
    it('should set callback function / должен устанавливать функцию колбэка', async () => {
      const callback = vi.fn().mockResolvedValue(undefined)

      const returnedInstance = apiPreparation.set(callback)

      expect(returnedInstance).toBe(apiPreparation)
      await apiPreparation.make(true, {} as any)
      expect(callback).toHaveBeenCalled()
    })

    it('should return this for chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const callback = vi.fn().mockResolvedValue(undefined)

      const result = apiPreparation.set(callback)

      expect(result).toBe(apiPreparation)
    })

    it('should allow replacing callback / должен позволять заменять колбэк', async () => {
      const callback1 = vi.fn().mockResolvedValue(undefined)
      const callback2 = vi.fn().mockResolvedValue(undefined)

      apiPreparation.set(callback1)
      apiPreparation.set(callback2)

      await apiPreparation.make(true, {} as any)

      expect(callback1).not.toHaveBeenCalled()
      expect(callback2).toHaveBeenCalled()
    })
  })

  describe('setEnd / Установка колбэка завершения', () => {
    it('should set end callback function / должен устанавливать завершающую функцию колбэка', async () => {
      const callback = vi.fn().mockResolvedValue({})
      const mockResponse = new Response('{}', { status: 200 })

      const returnedInstance = apiPreparation.setEnd(callback)

      expect(returnedInstance).toBe(apiPreparation)
      await apiPreparation.makeEnd(true, mockResponse, {} as any)
      expect(callback).toHaveBeenCalled()
    })

    it('should return this for chaining / должен возвращать этот экземпляр для цепочки вызовов', () => {
      const callback = vi.fn().mockResolvedValue({})

      const result = apiPreparation.setEnd(callback)

      expect(result).toBe(apiPreparation)
    })

    it('should allow chaining set and setEnd / должен позволять использовать цепочку методов set и setEnd', async () => {
      const callback = vi.fn().mockResolvedValue(undefined)
      const callbackEnd = vi.fn().mockResolvedValue({ reset: true })
      const mockResponse = new Response('{}', { status: 200 })

      apiPreparation
        .set(callback)
        .setEnd(callbackEnd)

      await apiPreparation.make(true, {} as any)
      await apiPreparation.makeEnd(true, mockResponse, {} as any)

      expect(callback).toHaveBeenCalled()
      expect(callbackEnd).toHaveBeenCalled()
    })
  })

  describe('integration / Интеграционные сценарии', () => {
    it('should handle full lifecycle with both callbacks / должен обрабатывать полный цикл с обоими колбэками', async () => {
      let preparationDone = false
      const callback = vi.fn().mockImplementation(async () => {
        preparationDone = true
      })
      const callbackEnd = vi.fn().mockResolvedValue({ reset: true, data: { preparationDone } })
      const mockResponse = new Response('{}', { status: 200 })

      apiPreparation.set(callback).setEnd(callbackEnd)

      await apiPreparation.make(true, {} as any)
      const result = await apiPreparation.makeEnd(true, mockResponse, {} as any)

      expect(preparationDone).toBe(true)
      expect(callback).toHaveBeenCalled()
      expect(callbackEnd).toHaveBeenCalled()
      expect(result.reset).toBe(true)
    })

    it('should handle errors in end callback / должен корректно обрабатывать ошибки в колбэке завершения', async () => {
      const error = new Error('End processing failed')
      const callbackEnd = vi.fn().mockRejectedValue(error)
      const mockResponse = new Response('{}', { status: 200 })
      apiPreparation.setEnd(callbackEnd)

      await expect(apiPreparation.makeEnd(true, mockResponse, {} as any)).rejects.toThrow('End processing failed')
    })
  })
})
