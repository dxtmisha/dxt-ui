import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiHydration } from '../ApiHydration'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import { ApiMethodItem } from '../../types/apiTypes'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('ApiHydration / Гидратация API', () => {
  let apiHydration: ApiHydration

  beforeEach(() => {
    vi.clearAllMocks()
    apiHydration = new ApiHydration()
  })

  describe('toClient / Передача на клиент', () => {
    it('should push data to list when global is true and isDomRuntime is false / должен добавлять данные в список, когда global равно true и isDomRuntime равно false', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)

      const apiFetch = {
        path: 'test/path',
        method: ApiMethodItem.get,
        global: true
      }
      const response = { data: 'test' }

      apiHydration.toClient(apiFetch, response)

      const list = (apiHydration as any).list
      expect(list).toHaveLength(1)
      expect(list[0]).toMatchObject({
        path: 'test/path',
        response: { data: 'test' }
      })
    })

    it('should not push data to list when global is false / не должен добавлять данные в список, когда global равно false', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)

      const apiFetch = {
        path: 'test/path',
        method: ApiMethodItem.post,
        global: false
      }
      const response = { data: 'test' }

      apiHydration.toClient(apiFetch, response)

      expect((apiHydration as any).list).toHaveLength(0)
    })

    it('should not push data to list when isDomRuntime is true / не должен добавлять данные в список, когда isDomRuntime равно true', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)

      const apiFetch = {
        path: 'test/path',
        method: ApiMethodItem.get,
        global: true
      }
      const response = { data: 'test' }

      apiHydration.toClient(apiFetch, response)

      expect((apiHydration as any).list).toHaveLength(0)
    })
  })

  describe('toString / Преобразование в строку', () => {
    it('should return script tag with json data / должен возвращать тег script с данными JSON', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)

      apiHydration.toClient({ path: 'a', global: true }, { b: 1 })

      const result = apiHydration.toString()
      expect(result).toContain('<script id="__ui:api:hydration:id__" type="application/json">')
      expect(result).toContain('"path":"a"')
      expect(result).toContain('"response":{"b":1}')
      expect(result).toContain('</script>')
    })

    it('should return empty script tag when list is empty / должен возвращать пустой тег script, когда список пуст', () => {
      const result = apiHydration.toString()
      expect(result).toContain('[]')
    })
  })

  describe('initResponse / Инициализация ответа', () => {
    it('should add hydration data to response when isDomRuntime is true / должен добавлять данные гидратации в ответ, если isDomRuntime равно true', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)

      const apiDefault = new ApiDefault()
      const apiResponse = new ApiResponse(apiDefault)
      const addSpy = vi.spyOn(apiResponse, 'add')

      // Mock getListByClient indirectly via spy
      const mockData = [{ path: 'hydrated', method: ApiMethodItem.get, response: { ok: true } }]
      vi.spyOn(apiHydration as any, 'getListByClient').mockReturnValue(mockData)

      apiHydration.initResponse(apiResponse)

      expect(addSpy).toHaveBeenCalledWith(mockData)
    })

    it('should not add hydration data to response when isDomRuntime is false / не должен добавлять данные гидратации в ответ, если isDomRuntime равно false', () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)

      const apiDefault = new ApiDefault()
      const apiResponse = new ApiResponse(apiDefault)
      const addSpy = vi.spyOn(apiResponse, 'add')

      apiHydration.initResponse(apiResponse)

      expect(addSpy).not.toHaveBeenCalled()
    })
  })
})
