import { beforeEach, describe, expect, it, vi } from 'vitest'

const callOrder: string[] = []

vi.mock('../uiCookieStorage', () => ({
  uiCookieStorage: vi.fn(() => {
    callOrder.push('uiCookieStorage')
  })
}))

vi.mock('../uiServerStorage', () => ({
  uiServerStorage: vi.fn(() => {
    callOrder.push('uiServerStorage')
  })
}))

vi.mock('../uiIdServer', () => ({
  uiIdServer: vi.fn(() => {
    callOrder.push('uiIdServer')
  })
}))

import { uiCookieStorage } from '../uiCookieStorage'
import { uiServerStorage } from '../uiServerStorage'
import { uiIdServer } from '../uiIdServer'
import { uiBootstrapServer } from '../uiBootstrapServer'

describe('uiBootstrapServer', () => {
  beforeEach(() => {
    callOrder.length = 0
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should sequentially initialize uiCookieStorage, uiServerStorage, and uiIdServer', () => {
      const result = uiBootstrapServer()

      expect(result).toBeUndefined()
      expect(uiCookieStorage).toHaveBeenCalledTimes(1)
      expect(uiServerStorage).toHaveBeenCalledTimes(1)
      expect(uiIdServer).toHaveBeenCalledTimes(1)
      expect(callOrder).toEqual([
        'uiCookieStorage',
        'uiServerStorage',
        'uiIdServer'
      ])
    })
  })
})
