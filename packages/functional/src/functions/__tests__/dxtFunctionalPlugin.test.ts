/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  Api,
  Translate,
  Icons,
  ErrorCenter
} from '@dxtmisha/functional-basic'
import { MediaSocial } from '@dxtmisha/media'
import { dxtFunctionalPlugin } from '../dxtFunctionalPlugin'
import { useMeta } from '../../composables/ref/useMeta'
import { RouterItemRef } from '../../classes/ref/RouterItemRef'
import { GeoRef } from '../../classes/ref/GeoRef'
import * as executeUse from '../executeUse'

// Mocking dependencies
vi.mock('@dxtmisha/functional-basic', () => ({
  Api: { setConfig: vi.fn() },
  Translate: { setConfig: vi.fn() },
  Icons: { setConfig: vi.fn() },
  ErrorCenter: { addList: vi.fn(), addHandlerList: vi.fn(), addCallback: vi.fn() },
  initGetElementId: vi.fn()
}))

vi.mock('@dxtmisha/media', () => ({
  MediaSocial: { addIcons: vi.fn() }
}))

vi.mock('../../composables/ref/useMeta', () => ({
  useMeta: vi.fn(() => ({
    setSuffix: vi.fn()
  }))
}))

vi.mock('../../classes/ref/RouterItemRef', () => ({
  RouterItemRef: { set: vi.fn() }
}))

vi.mock('../../classes/ref/GeoRef', () => ({
  GeoRef: { setValueDefault: vi.fn() }
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

  it('should install smoothly with default empty options', () => {
    expect(() => dxtFunctionalPlugin?.install?.(appMock)).not.toThrow()
    expect(executeUse.executeUseGlobalInit).toHaveBeenCalled()
  })

  it('should call Api.setConfig if api option is provided', () => {
    const options = { api: { url: 'https://api.test' } }
    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(Api.setConfig).toHaveBeenCalledWith(options.api)
  })

  it('should call Translate.setConfig if translate option is provided', () => {
    const options = { translate: { url: '/locales/' } }
    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(Translate.setConfig).toHaveBeenCalledWith(options.translate)
  })

  it('should call Icons.setConfig if icons option is provided', () => {
    const options = { icons: { url: '/icons/' } }
    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(Icons.setConfig).toHaveBeenCalledWith(options.icons)
  })

  it('should call MediaSocial.addIcons if iconsSocial option is provided', () => {
    const options = { iconsSocial: { github: 'svg-data' } }
    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(MediaSocial.addIcons).toHaveBeenCalledWith(options.iconsSocial)
  })

  it('should call useMeta().setSuffix if metaSuffix option is provided', () => {
    const options = { metaSuffix: ' - Test' }
    const setSuffixSpy = vi.fn()
    vi.mocked(useMeta).mockReturnValue({ setSuffix: setSuffixSpy } as any)

    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(useMeta).toHaveBeenCalled()
    expect(setSuffixSpy).toHaveBeenCalledWith(' - Test')
  })

  it('should set router in RouterItemRef if router option is provided', () => {
    const routerMock = { name: 'router' } as any
    const options = { router: routerMock }
    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(RouterItemRef.set).toHaveBeenCalledWith(routerMock)
  })

  it('should fallback to globalProperties.$router if router option is missing', () => {
    const routerMock = { name: 'global-router' } as any
    const appWithRouter = {
      config: {
        globalProperties: { $router: routerMock }
      }
    } as any

    dxtFunctionalPlugin?.install?.(appWithRouter, {})
    expect(RouterItemRef.set).toHaveBeenCalledWith(routerMock)
  })

  it('should call ErrorCenter.addList if errorCauses option is provided', () => {
    const options = { errorCauses: { test: 'error' } as any }
    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(ErrorCenter.addList).toHaveBeenCalledWith(options.errorCauses)
  })

  it('should call ErrorCenter.addHandlerList if errorHandlers option is provided', () => {
    const options = { errorHandlers: [{ group: 'test', handlers: [] }] as any }
    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(ErrorCenter.addHandlerList).toHaveBeenCalledWith(options.errorHandlers)
  })

  it('should call ErrorCenter.addCallback for each callback in errorCallbacks option', () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()
    const options = { errorCallbacks: [callback1, callback2] }
    dxtFunctionalPlugin?.install?.(appMock, options)
    expect(ErrorCenter.addCallback).toHaveBeenCalledWith(callback1)
    expect(ErrorCenter.addCallback).toHaveBeenCalledWith(callback2)
  })

  it('should call GeoRef.setValueDefault with string or function location', () => {
    const optionsString = { location: 'de-DE' }
    dxtFunctionalPlugin?.install?.(appMock, optionsString)
    expect(GeoRef.setValueDefault).toHaveBeenCalledWith('de-DE')

    const locationFactory = () => 'vi-VN'
    const optionsFunction = { location: locationFactory }
    dxtFunctionalPlugin?.install?.(appMock, optionsFunction)
    expect(GeoRef.setValueDefault).toHaveBeenCalledWith(locationFactory)
  })

  it('should call executeUseGlobalInit at the end of installation', () => {
    dxtFunctionalPlugin?.install?.(appMock, {})
    expect(executeUse.executeUseGlobalInit).toHaveBeenCalled()
  })
})
