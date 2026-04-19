import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiHydration } from '../ApiHydration'
import { ApiResponse } from '../ApiResponse'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as getElementSafeScriptModule from '../../functions/getElementSafeScript'
import * as getHydrationDataModule from '../../functions/getHydrationData'
import { ApiMethodItem } from '../../types/apiTypes'
import { ApiDefault } from '../ApiDefault'

describe('ApiHydration', () => {
  let isDomRuntimeSpy: any
  let getHydrationDataSpy: any
  let getElementSafeScriptSpy: any

  beforeEach(() => {
    isDomRuntimeSpy = vi.spyOn(isDomRuntimeModule, 'isDomRuntime')
    getHydrationDataSpy = vi.spyOn(getHydrationDataModule, 'getHydrationData')
    getElementSafeScriptSpy = vi.spyOn(getElementSafeScriptModule, 'getElementSafeScript')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize response when in DOM runtime', () => {
    isDomRuntimeSpy.mockReturnValue(true)
    const mockList = [{ path: 'test', method: ApiMethodItem.get, response: 'data' }]
    getHydrationDataSpy.mockReturnValue(mockList)

    // We need an actual ApiResponse to test add() method call
    const response = new ApiResponse(new ApiDefault())
    const addSpy = vi.spyOn(response, 'add')

    const hydration = new ApiHydration()
    hydration.initResponse(response)

    expect(isDomRuntimeSpy).toHaveBeenCalled()
    expect(getHydrationDataSpy).toHaveBeenCalledWith('__ui:api:hydration:id__', [])
    expect(addSpy).toHaveBeenCalledWith(mockList)
  })

  it('should NOT initialize response when NOT in DOM runtime', () => {
    isDomRuntimeSpy.mockReturnValue(false)
    const response = new ApiResponse(new ApiDefault())
    const addSpy = vi.spyOn(response, 'add')

    const hydration = new ApiHydration()
    hydration.initResponse(response)

    expect(addSpy).not.toHaveBeenCalled()
  })

  it('should push into list for toClient when NOT in DOM runtime', () => {
    isDomRuntimeSpy.mockReturnValue(false) // SSR

    const hydration = new ApiHydration()
    hydration.toClient({ path: 'my-path' }, { someData: 1 })

    // Check list internals by checking toString effect or using bracket access
    getElementSafeScriptSpy.mockImplementation((_: string, list: any) => JSON.stringify(list))

    const result = hydration.toString()
    expect(result).toContain('my-path')
    expect(result).toContain('someData')
  })

  it('should NOT push into list for toClient when in DOM runtime', () => {
    isDomRuntimeSpy.mockReturnValue(true) // Client side

    const hydration = new ApiHydration()
    hydration.toClient({ path: 'my-path' }, { someData: 1 })

    getElementSafeScriptSpy.mockImplementation((_: string, list: any) => JSON.stringify(list))
    const result = hydration.toString()
    expect(result).toBe('[]') // empty list
  })

  it('should NOT push into list if global is false', () => {
    isDomRuntimeSpy.mockReturnValue(false)

    const hydration = new ApiHydration()
    hydration.toClient({ path: 'my-path', global: false }, { someData: 1 })

    getElementSafeScriptSpy.mockImplementation((_: string, list: any) => JSON.stringify(list))
    expect(hydration.toString()).toBe('[]')
  })

  it('should NOT push into list if path is empty', () => {
    isDomRuntimeSpy.mockReturnValue(false)

    const hydration = new ApiHydration()
    hydration.toClient({ path: '' }, { someData: 1 })

    getElementSafeScriptSpy.mockImplementation((_: string, list: any) => JSON.stringify(list))
    expect(hydration.toString()).toBe('[]')
  })

  it('should call getElementSafeScript on toString()', () => {
    getElementSafeScriptSpy.mockReturnValue('<script>...</script>')
    const hydration = new ApiHydration()

    const str = hydration.toString()
    expect(str).toBe('<script>...</script>')
    expect(getElementSafeScriptSpy).toHaveBeenCalledWith('__ui:api:hydration:id__', [])
  })
})
