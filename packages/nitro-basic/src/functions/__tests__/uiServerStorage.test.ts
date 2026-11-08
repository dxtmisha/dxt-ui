import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { appContext } from '../initContext'
import { NITRO_APP_STORAGE } from '../../types/nitroAppTypes'
import { uiServerStorage } from '../uiServerStorage'

describe('uiServerStorage', () => {
  afterEach(() => {
    appContext.unset()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should register storage resolver via ServerStorage.init', () => {
      const initSpy = vi.spyOn(ServerStorage, 'init')

      uiServerStorage()

      expect(initSpy).toHaveBeenCalledTimes(1)
      expect(initSpy).toHaveBeenCalledWith(expect.any(Function))
    })

    it('should resolve storage object from Vue inject (NITRO_APP_STORAGE) when inside component context', () => {
      const initSpy = vi.spyOn(ServerStorage, 'init')
      uiServerStorage()
      const [resolver] = initSpy.mock.calls[0]!

      const innerStorage = { userId: 101 }
      const app = createSSRApp({ render: () => null })
      app.provide(NITRO_APP_STORAGE, { storage: innerStorage })

      app.runWithContext(() => {
        expect(resolver()).toBe(innerStorage)
      })
    })

    it('should fallback to appContext ("storage") when outside Vue inject context', () => {
      const initSpy = vi.spyOn(ServerStorage, 'init')
      uiServerStorage()
      const [resolver] = initSpy.mock.calls[0]!

      const innerStorage = { locale: 'vi-VN' }
      appContext.call({ storage: { storage: innerStorage } }, () => {
        expect(resolver()).toBe(innerStorage)
      })
    })

    it('should prioritize Vue inject over appContext when both are available', () => {
      const initSpy = vi.spyOn(ServerStorage, 'init')
      uiServerStorage()
      const [resolver] = initSpy.mock.calls[0]!

      const injectStorage = { source: 'inject' }
      const contextStorage = { source: 'context' }
      const app = createSSRApp({ render: () => null })
      app.provide(NITRO_APP_STORAGE, { storage: injectStorage })

      appContext.call({ storage: { storage: contextStorage } }, () => {
        app.runWithContext(() => {
          expect(resolver()).toBe(injectStorage)
        })
      })
    })
  })

  describe('Inactive context and nullish boundaries', () => {
    it('should return undefined when neither Vue inject nor appContext is active', () => {
      const initSpy = vi.spyOn(ServerStorage, 'init')
      uiServerStorage()
      const [resolver] = initSpy.mock.calls[0]!

      expect(resolver()).toBeUndefined()
    })
  })
})
