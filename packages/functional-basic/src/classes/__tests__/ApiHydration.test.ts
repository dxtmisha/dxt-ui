import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiHydration } from '../ApiHydration'
import { ApiResponse } from '../ApiResponse'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as getElementSafeScriptModule from '../../functions/getElementSafeScript'
import * as getHydrationDataModule from '../../functions/getHydrationData'
import { type ApiHydrationList, ApiMethodItem } from '../../types/apiTypes'
import { ApiDefault } from '../ApiDefault'

describe('ApiHydration', () => {
  beforeEach(() => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime')
    vi.spyOn(getHydrationDataModule, 'getHydrationData')
    vi.spyOn(getElementSafeScriptModule, 'getElementSafeScript')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize response with client hydration data when in DOM runtime', () => {
    const isDomRuntimeSpy = vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    const mockList: ApiHydrationList = [
      { path: 'test', method: ApiMethodItem.get, response: 'data' }
    ]
    const getHydrationDataSpy = vi
      .spyOn(getHydrationDataModule, 'getHydrationData')
      .mockReturnValue(mockList)

    const response = new ApiResponse(new ApiDefault())
    const addSpy = vi.spyOn(response, 'add')

    const hydration = new ApiHydration()
    hydration.initResponse(response)

    expect(isDomRuntimeSpy).toHaveBeenCalled()
    expect(getHydrationDataSpy).toHaveBeenCalledWith('__ui:api:hydration:id__', [])
    expect(addSpy).toHaveBeenCalledWith(mockList)
  })

  it('should NOT initialize response when NOT in DOM runtime', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    const response = new ApiResponse(new ApiDefault())
    const addSpy = vi.spyOn(response, 'add')

    const hydration = new ApiHydration()
    hydration.initResponse(response)

    expect(addSpy).not.toHaveBeenCalled()
  })

  it('should push GET request into hydration list in toClient() when on server (SSR)', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    const getElementSafeScriptSpy = vi
      .spyOn(getElementSafeScriptModule, 'getElementSafeScript')
      .mockImplementation((_id: string, data: unknown) => JSON.stringify(data))

    const hydration = new ApiHydration()
    hydration.toClient({ path: 'my-path', request: { page: 1 } }, { someData: 1 })

    const serialized = hydration.toString()
    expect(getElementSafeScriptSpy).toHaveBeenCalledWith('__ui:api:hydration:id__', [
      {
        path: 'my-path',
        method: ApiMethodItem.get,
        request: { page: 1 },
        response: { someData: 1 }
      }
    ])
    expect(serialized).toContain('my-path')
    expect(serialized).toContain('someData')
  })

  it('should NOT push non-GET request into hydration list unless global is explicitly true', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    vi.spyOn(getElementSafeScriptModule, 'getElementSafeScript')
      .mockImplementation((_id: string, data: unknown) => JSON.stringify(data))

    const hydration = new ApiHydration()
    hydration.toClient({ path: 'post-path', method: ApiMethodItem.post }, { created: true })
    expect(hydration.toString()).toBe('[]')

    hydration.toClient({ path: 'post-global', method: ApiMethodItem.post, global: true }, { created: true })
    expect(hydration.toString()).toContain('post-global')
  })

  it('should NOT push into list for toClient() when in DOM runtime', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    vi.spyOn(getElementSafeScriptModule, 'getElementSafeScript')
      .mockImplementation((_id: string, data: unknown) => JSON.stringify(data))

    const hydration = new ApiHydration()
    hydration.toClient({ path: 'my-path' }, { someData: 1 })

    expect(hydration.toString()).toBe('[]')
  })

  it('should NOT push into list if global is false', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    vi.spyOn(getElementSafeScriptModule, 'getElementSafeScript')
      .mockImplementation((_id: string, data: unknown) => JSON.stringify(data))

    const hydration = new ApiHydration()
    hydration.toClient({ path: 'my-path', global: false }, { someData: 1 })

    expect(hydration.toString()).toBe('[]')
  })

  it('should NOT push into list if path is empty or missing', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    vi.spyOn(getElementSafeScriptModule, 'getElementSafeScript')
      .mockImplementation((_id: string, data: unknown) => JSON.stringify(data))

    const hydration = new ApiHydration()
    hydration.toClient({ path: '' }, { someData: 1 })
    hydration.toClient({}, { someData: 1 })

    expect(hydration.toString()).toBe('[]')
  })

  it('should call getElementSafeScript on toString()', () => {
    const getElementSafeScriptSpy = vi
      .spyOn(getElementSafeScriptModule, 'getElementSafeScript')
      .mockReturnValue('<script id="__ui:api:hydration:id__">[]</script>')
    const hydration = new ApiHydration()

    const scriptString = hydration.toString()
    expect(scriptString).toBe('<script id="__ui:api:hydration:id__">[]</script>')
    expect(getElementSafeScriptSpy).toHaveBeenCalledWith('__ui:api:hydration:id__', [])
  })
})
