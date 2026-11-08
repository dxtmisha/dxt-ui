import { describe, expect, it, vi } from 'vitest'
import { createSSRApp, inject } from 'vue'
import { NITRO_APP_STORAGE } from '../../types/nitroAppTypes'
import { initServerStorage } from '../initServerStorage'

describe('initServerStorage', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should provide { storage: {} } via NITRO_APP_STORAGE and return { storage: data }', () => {
      const app = createSSRApp({ render: () => null })
      const provideSpy = vi.spyOn(app, 'provide')

      const result = initServerStorage(app)

      expect(result).toEqual({ storage: { storage: {} } })
      expect(provideSpy).toHaveBeenCalledTimes(1)
      expect(provideSpy).toHaveBeenCalledWith(NITRO_APP_STORAGE, result.storage)

      app.runWithContext(() => {
        const injected = inject<{ storage: Record<string, unknown> }>(NITRO_APP_STORAGE)
        expect(injected).toBe(result.storage)
        expect(injected?.storage).toEqual({})
      })
    })
  })

  describe('Reference sharing and state mutations', () => {
    it('should share the same inner storage object reference between returned container and Vue inject', () => {
      const app = createSSRApp({ render: () => null })
      const { storage: container } = initServerStorage(app)

      container.storage.user = { id: 42, name: 'Tung' }

      app.runWithContext(() => {
        const injected = inject<{ storage: Record<string, unknown> }>(NITRO_APP_STORAGE)
        expect(injected?.storage.user).toEqual({ id: 42, name: 'Tung' })
      })
    })
  })

  describe('SSR request isolation', () => {
    it('should allocate isolated storage containers for concurrent SSR app instances', () => {
      const app1 = createSSRApp({ render: () => null })
      const app2 = createSSRApp({ render: () => null })

      const res1 = initServerStorage(app1)
      const res2 = initServerStorage(app2)

      res1.storage.storage.token = 'req-1-token'
      res2.storage.storage.token = 'req-2-token'

      expect(res1.storage).not.toBe(res2.storage)
      expect(res1.storage.storage).not.toBe(res2.storage.storage)
      expect(res1.storage.storage.token).toBe('req-1-token')
      expect(res2.storage.storage.token).toBe('req-2-token')
    })
  })
})
