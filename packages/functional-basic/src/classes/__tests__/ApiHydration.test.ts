import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiHydration } from '../ApiHydration'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import { ApiMethodItem } from '../../types/apiTypes'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('ApiHydration', () => {
  let apiHydration: ApiHydration

  beforeEach(() => {
    vi.clearAllMocks()
    apiHydration = new ApiHydration()
  })

  describe('toClient', () => {
    it('should push data to list when global is true and isDomRuntime is false', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      
      const apiFetch = {
        path: 'test/path',
        method: ApiMethodItem.get,
        global: true
      }
      const response = { data: 'test' }

      apiHydration.toClient(apiFetch, response)

      expect(apiHydration.toString()).toContain('test/path')
      expect(apiHydration.toString()).toContain('test')
    })

    it('should not push data to list when global is false', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      
      const apiFetch = {
        path: 'test/path',
        method: ApiMethodItem.post,
        global: false
      }
      const response = { data: 'test' }

      apiHydration.toClient(apiFetch, response)

      expect(apiHydration.toString()).not.toContain('test/path')
    })

    it('should not push data to list when isDomRuntime is true', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      
      const apiFetch = {
        path: 'test/path',
        method: ApiMethodItem.get,
        global: true
      }
      const response = { data: 'test' }

      apiHydration.toClient(apiFetch, response)

      expect(apiHydration.toString()).not.toContain('test/path')
    })
  })

  describe('toString', () => {
    it('should return script tag with json data', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      
      apiHydration.toClient({ path: 'a', global: true }, { b: 1 })
      
      const result = apiHydration.toString()
      expect(result).toMatch(/^<script id="__ui:api:hydration:id__" type="application/json">.*<\/script>$/)
      expect(result).toContain('"path":"a"')
      expect(result).toContain('"response":{"b":1}')
    })
  })

  describe('initResponse', () => {
    it('should add hydration data to response when isDomRuntime is true', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      
      const apiDefault = new ApiDefault()
      const apiResponse = new ApiResponse(apiDefault)
      const addSpy = vi.spyOn(apiResponse, 'add')
      
      // Mock getHydrationData indirectly via getListByClient which is protected
      // In tests we can use (apiHydration as any)
      const mockData = [{ path: 'hydrated', method: ApiMethodItem.get, response: { ok: true } }]
      vi.spyOn(apiHydration as any, 'getListByClient').mockReturnValue(mockData)

      apiHydration.initResponse(apiResponse)

      expect(addSpy).toHaveBeenCalledWith(mockData)
    })

    it('should not add hydration data to response when isDomRuntime is false', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      
      const apiDefault = new ApiDefault()
      const apiResponse = new ApiResponse(apiDefault)
      const addSpy = vi.spyOn(apiResponse, 'add')

      apiHydration.initResponse(apiResponse)

      expect(addSpy).not.toHaveBeenCalled()
    })
  })
})
