// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ApiHydration } from '../ApiHydration'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import * as domUtils from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('ApiHydration', () => {
  let hydration: ApiHydration

  beforeEach(() => {
    vi.clearAllMocks()
    hydration = new ApiHydration()
  })

  it('toClient should store data in non-DOM environment for global GET requests', () => {
    vi.mocked(domUtils.isDomRuntime).mockReturnValue(false)

    const apiFetch = {
      path: '/api/data',
      method: 'GET',
      global: true
    } as any
    const responseData = { id: 1, name: 'Test' }

    hydration.toClient(apiFetch, responseData)

    // We can check the list via toString() since list is protected
    const script = hydration.toString()
    expect(script).toContain('__ui:api:hydration:id__')
    expect(script).toContain('/api/data')
    expect(script).toContain('Test')
  })

  it('toClient should not store data in DOM environment', () => {
    vi.mocked(domUtils.isDomRuntime).mockReturnValue(true)

    const apiFetch = {
      path: '/api/data',
      method: 'GET',
      global: true
    } as any

    hydration.toClient(apiFetch, { data: 1 })
    // Even if empty, it returns a script tag with empty array
    expect(hydration.toString()).toContain('[]')
  })

  it('toClient should not store data if global is false', () => {
    vi.mocked(domUtils.isDomRuntime).mockReturnValue(false)

    hydration.toClient({ path: '/api', global: false } as any, { x: 1 })
    expect(hydration.toString()).toContain('[]')
  })

  it('initResponse should add hydration data to response on client side', () => {
    vi.mocked(domUtils.isDomRuntime).mockReturnValue(true)

    // Mock hydration data in DOM
    const mockData = [{ path: '/api/init', response: { ok: true } }]
    const script = document.createElement('script')
    script.id = '__ui:api:hydration:id__'
    script.type = 'application/json'
    script.textContent = JSON.stringify(mockData)
    document.body.appendChild(script)

    const response = new ApiResponse(new ApiDefault())
    const addSpy = vi.spyOn(response, 'add')

    hydration.initResponse(response)

    expect(addSpy).toHaveBeenCalledWith(mockData)

    if (script.parentNode) {
      script.parentNode.removeChild(script)
    }
  })
})
