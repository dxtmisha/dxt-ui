/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  Api,
  Translate,
  Icons
} from '@dxtmisha/functional-basic'
import { dxtFunctionalPlugin } from '../dxtFunctionalPlugin'
import { useMeta } from '../../composables/ref/useMeta'
import { RouterItemRef } from '../../classes/ref/RouterItemRef'
import * as executeUse from '../executeUse'

// Mocking dependencies
vi.mock('@dxtmisha/functional-basic', () => ({
  Api: { setConfig: vi.fn() },
  Translate: { setConfig: vi.fn() },
  Icons: { setConfig: vi.fn() }
}))

vi.mock('../../composables/ref/useMeta', () => ({
  useMeta: vi.fn(() => ({
    setSuffix: vi.fn()
  }))
}))

vi.mock('../../classes/ref/RouterItemRef', () => ({
  RouterItemRef: { set: vi.fn() }
}))

vi.mock('../executeUse', () => ({
  executeUseGlobalInit: vi.fn()
}))

describe('dxtFunctionalPlugin', () => {
  const appMock = {
    config: {
      globalProperties: {}
    }
  } as any

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call Api.setConfig if api option is provided', () => {
    const options = { api: { url: 'https://api.test' } }
    dxtFunctionalPlugin.install(appMock, options)
    expect(Api.setConfig).toHaveBeenCalledWith(options.api)
  })

  it('should call Translate.setConfig if translate option is provided', () => {
    const options = { translate: { url: '/locales/' } }
    dxtFunctionalPlugin.install(appMock, options)
    expect(Translate.setConfig).toHaveBeenCalledWith(options.translate)
  })

  it('should call Icons.setConfig if icons option is provided', () => {
    const options = { icons: { url: '/icons/' } }
    dxtFunctionalPlugin.install(appMock, options)
    expect(Icons.setConfig).toHaveBeenCalledWith(options.icons)
  })

  it('should call useMeta().setSuffix if metaSuffix option is provided', () => {
    const options = { metaSuffix: ' - Test' }
    const setSuffixSpy = vi.fn()
    vi.mocked(useMeta).mockReturnValue({ setSuffix: setSuffixSpy } as any)

    dxtFunctionalPlugin.install(appMock, options)
    expect(useMeta).toHaveBeenCalled()
    expect(setSuffixSpy).toHaveBeenCalledWith(' - Test')
  })

  it('should set router in RouterItemRef if router option is provided', () => {
    const routerMock = { name: 'router' } as any
    const options = { router: routerMock }
    dxtFunctionalPlugin.install(appMock, options)
    expect(RouterItemRef.set).toHaveBeenCalledWith(routerMock)
  })

  it('should fallback to globalProperties.$router if router option is missing', () => {
    const routerMock = { name: 'global-router' } as any
    const appWithRouter = {
      config: {
        globalProperties: { $router: routerMock }
      }
    } as any

    dxtFunctionalPlugin.install(appWithRouter, {})
    expect(RouterItemRef.set).toHaveBeenCalledWith(routerMock)
  })

  it('should call executeUseGlobalInit at the end', () => {
    dxtFunctionalPlugin.install(appMock, {})
    expect(executeUse.executeUseGlobalInit).toHaveBeenCalled()
  })
})
