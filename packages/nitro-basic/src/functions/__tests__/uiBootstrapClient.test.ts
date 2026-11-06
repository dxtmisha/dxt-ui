import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../uiIdClient', () => ({
  uiIdClient: vi.fn()
}))

import { uiIdClient } from '../uiIdClient'
import { uiBootstrapClient } from '../uiBootstrapClient'

describe('uiBootstrapClient', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should invoke uiIdClient() during client bootstrap', () => {
      const result = uiBootstrapClient()

      expect(result).toBeUndefined()
      expect(uiIdClient).toHaveBeenCalledTimes(1)
      expect(uiIdClient).toHaveBeenCalledWith()
    })

    it('should invoke uiIdClient() on each bootstrap invocation', () => {
      uiBootstrapClient()
      uiBootstrapClient()

      expect(uiIdClient).toHaveBeenCalledTimes(2)
    })
  })
})

