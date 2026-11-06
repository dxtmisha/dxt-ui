import { describe, expect, it, vi } from 'vitest'
import type { Router } from 'vue-router'
import { initClientRouter } from '../initClientRouter'

describe('initClientRouter', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should call and await router.isReady() when router is provided', async () => {
      let resolved = false
      const isReadyMock = vi.fn(async () => {
        await new Promise(resolve => setTimeout(resolve, 10))
        resolved = true
      })
      const router = { isReady: isReadyMock } as unknown as Router

      await initClientRouter(router)

      expect(isReadyMock).toHaveBeenCalledTimes(1)
      expect(resolved).toBe(true)
    })
  })

  describe('Nullish and optional boundaries', () => {
    it('should resolve immediately when router is undefined', async () => {
      await expect(initClientRouter(undefined)).resolves.toBeUndefined()
    })

    it('should resolve immediately when called without arguments', async () => {
      await expect(initClientRouter()).resolves.toBeUndefined()
    })
  })

  describe('Error boundaries', () => {
    it('should propagate error if router.isReady() rejects', async () => {
      const router = {
        isReady: vi.fn().mockRejectedValue(new Error('Router initialization failed'))
      } as unknown as Router

      await expect(initClientRouter(router)).rejects.toThrow('Router initialization failed')
    })
  })
})

