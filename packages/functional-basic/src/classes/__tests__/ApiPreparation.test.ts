import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiPreparation } from '../ApiPreparation'
import type { ApiPreparationEnd } from '../../types/apiTypes'

describe('ApiPreparation', () => {
  let apiPreparation: ApiPreparation

  beforeEach(() => {
    apiPreparation = new ApiPreparation()
  })

  describe('make', () => {
    it('should not call callback when active is false', async () => {
      const callback = vi.fn().mockResolvedValue(undefined)
      apiPreparation.set(callback)

      await apiPreparation.make(false)

      expect(callback).not.toHaveBeenCalled()
    })

    it('should not call callback when callback is not set', async () => {
      const result = await apiPreparation.make(true)

      expect(result).toBeUndefined()
    })

    it('should call callback when active is true and callback is set', async () => {
      const callback = vi.fn().mockResolvedValue(undefined)
      apiPreparation.set(callback)

      await apiPreparation.make(true)

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should wait for callback to complete', async () => {
      let callbackCompleted = false
      const callback = vi.fn().mockImplementation(async () => {
        await new Promise(resolve => setTimeout(resolve, 100))
        callbackCompleted = true
      })
      apiPreparation.set(callback)

      await apiPreparation.make(true)

      expect(callbackCompleted).toBe(true)
    })

    it('should handle multiple concurrent calls without overlapping', async () => {
      let executionCount = 0
      const callback = vi.fn().mockImplementation(async () => {
        executionCount++
        await new Promise(resolve => setTimeout(resolve, 50))
        executionCount--
      })
      apiPreparation.set(callback)

      // Start multiple concurrent calls
      const promises = [
        apiPreparation.make(true),
        apiPreparation.make(true),
        apiPreparation.make(true)
      ]

      await Promise.all(promises)

      // Callback should be called 3 times but never overlap
      expect(callback).toHaveBeenCalledTimes(3)
      expect(executionCount).toBe(0)
    })
  })

  describe('makeEnd', () => {
    it('should return empty object when active is false', async () => {
      const callback = vi.fn().mockResolvedValue({ reset: true })
      const mockResponse = new Response('{}', { status: 200 })
      apiPreparation.setEnd(callback)

      const result = await apiPreparation.makeEnd(false, mockResponse)

      expect(result).toEqual({})
      expect(callback).not.toHaveBeenCalled()
    })

    it('should return empty object when callback is not set', async () => {
      const mockResponse = new Response('{}', { status: 200 })

      const result = await apiPreparation.makeEnd(true, mockResponse)

      expect(result).toEqual({})
    })

    it('should call callback and return result when active is true', async () => {
      const expectedResult: ApiPreparationEnd = {
        reset: true,
        data: { message: 'Success' }
      }
      const callback = vi.fn().mockResolvedValue(expectedResult)
      const mockResponse = new Response('{}', { status: 200 })
      apiPreparation.setEnd(callback)

      const result = await apiPreparation.makeEnd(true, mockResponse)

      expect(callback).toHaveBeenCalledWith(mockResponse)
      expect(result).toEqual(expectedResult)
    })

    it('should pass Response object to callback', async () => {
      const callback = vi.fn().mockResolvedValue({})
      const mockResponse = new Response('{"test": "data"}', {
        status: 201,
        statusText: 'Created'
      })
      apiPreparation.setEnd(callback)

      await apiPreparation.makeEnd(true, mockResponse)

      expect(callback).toHaveBeenCalledWith(mockResponse)
    })

    it('should handle callback returning reset flag', async () => {
      const callback = vi.fn().mockResolvedValue({ reset: true })
      const mockResponse = new Response('{}', { status: 200 })
      apiPreparation.setEnd(callback)

      const result = await apiPreparation.makeEnd(true, mockResponse)

      expect(result.reset).toBe(true)
    })

    it('should handle callback returning data', async () => {
      const testData = { userId: 123, token: 'abc' }
      const callback = vi.fn().mockResolvedValue({ data: testData })
      const mockResponse = new Response('{}', { status: 200 })
      apiPreparation.setEnd(callback)

      const result = await apiPreparation.makeEnd(true, mockResponse)

      expect(result.data).toEqual(testData)
    })
  })

  describe('set', () => {
    it('should set callback function', async () => {
      const callback = vi.fn().mockResolvedValue(undefined)

      const returnedInstance = apiPreparation.set(callback)

      expect(returnedInstance).toBe(apiPreparation)
      await apiPreparation.make(true)
      expect(callback).toHaveBeenCalled()
    })

    it('should return this for chaining', () => {
      const callback = vi.fn().mockResolvedValue(undefined)

      const result = apiPreparation.set(callback)

      expect(result).toBe(apiPreparation)
    })

    it('should allow replacing callback', async () => {
      const callback1 = vi.fn().mockResolvedValue(undefined)
      const callback2 = vi.fn().mockResolvedValue(undefined)

      apiPreparation.set(callback1)
      apiPreparation.set(callback2)

      await apiPreparation.make(true)

      expect(callback1).not.toHaveBeenCalled()
      expect(callback2).toHaveBeenCalled()
    })
  })

  describe('setEnd', () => {
    it('should set end callback function', async () => {
      const callback = vi.fn().mockResolvedValue({})
      const mockResponse = new Response('{}', { status: 200 })

      const returnedInstance = apiPreparation.setEnd(callback)

      expect(returnedInstance).toBe(apiPreparation)
      await apiPreparation.makeEnd(true, mockResponse)
      expect(callback).toHaveBeenCalled()
    })

    it('should return this for chaining', () => {
      const callback = vi.fn().mockResolvedValue({})

      const result = apiPreparation.setEnd(callback)

      expect(result).toBe(apiPreparation)
    })

    it('should allow chaining set and setEnd', async () => {
      const callback = vi.fn().mockResolvedValue(undefined)
      const callbackEnd = vi.fn().mockResolvedValue({ reset: true })
      const mockResponse = new Response('{}', { status: 200 })

      apiPreparation
        .set(callback)
        .setEnd(callbackEnd)

      await apiPreparation.make(true)
      await apiPreparation.makeEnd(true, mockResponse)

      expect(callback).toHaveBeenCalled()
      expect(callbackEnd).toHaveBeenCalled()
    })

    it('should allow replacing end callback', async () => {
      const callback1 = vi.fn().mockResolvedValue({})
      const callback2 = vi.fn().mockResolvedValue({ data: 'test' })
      const mockResponse = new Response('{}', { status: 200 })

      apiPreparation.setEnd(callback1)
      apiPreparation.setEnd(callback2)

      await apiPreparation.makeEnd(true, mockResponse)

      expect(callback1).not.toHaveBeenCalled()
      expect(callback2).toHaveBeenCalled()
    })
  })

  describe('integration', () => {
    it('should handle full lifecycle with both callbacks', async () => {
      let preparationDone = false
      const callback = vi.fn().mockImplementation(async () => {
        preparationDone = true
      })
      const callbackEnd = vi.fn().mockResolvedValue({ reset: true, data: { preparationDone } })
      const mockResponse = new Response('{}', { status: 200 })

      apiPreparation.set(callback).setEnd(callbackEnd)

      await apiPreparation.make(true)
      const result = await apiPreparation.makeEnd(true, mockResponse)

      expect(preparationDone).toBe(true)
      expect(callback).toHaveBeenCalled()
      expect(callbackEnd).toHaveBeenCalled()
      expect(result.reset).toBe(true)
    })

    it('should handle errors in end callback', async () => {
      const error = new Error('End processing failed')
      const callbackEnd = vi.fn().mockRejectedValue(error)
      const mockResponse = new Response('{}', { status: 200 })
      apiPreparation.setEnd(callbackEnd)

      await expect(apiPreparation.makeEnd(true, mockResponse)).rejects.toThrow('End processing failed')
    })
  })
})
