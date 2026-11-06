import { afterEach, describe, expect, it, vi } from 'vitest'
import * as functionalBasic from '@dxtmisha/functional-basic'
import { getElementId } from '@dxtmisha/functional-basic'
import { uiIdClient } from '../uiIdClient'

describe('uiIdClient', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should register an ID generator via initGetElementId and produce sequential "ui-10000+" IDs', () => {
      const initSpy = vi.spyOn(functionalBasic, 'initGetElementId')

      uiIdClient()

      expect(initSpy).toHaveBeenCalledTimes(1)
      expect(initSpy).toHaveBeenCalledWith(expect.any(Function))

      const generator = initSpy.mock.calls[0]![0]!
      const firstId = generator()
      const secondId = generator()
      const thirdId = generator()

      expect(firstId).toMatch(/^ui-\d+$/)
      const startCode = Number(String(firstId).replace('ui-', ''))
      expect(startCode).toBeGreaterThanOrEqual(10_000)
      expect(secondId).toBe(`ui-${startCode + 1}`)
      expect(thirdId).toBe(`ui-${startCode + 2}`)
    })

    it('should integrate with getElementId() from @dxtmisha/functional-basic', () => {
      uiIdClient()

      const id1 = getElementId()
      const id2 = getElementId()

      expect(id1).toMatch(/^ui-\d+$/)
      expect(id2).toMatch(/^ui-\d+$/)
      expect(id1).not.toBe(id2)
    })
  })
})
