import { afterEach, describe, expect, it, vi } from 'vitest'
import * as functionalBasic from '@dxtmisha/functional-basic'
import { appContext } from '../initContext'
import { uiIdServer } from '../uiIdServer'

describe('uiIdServer', () => {
  afterEach(() => {
    appContext.unset()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should register an ID generator via initGetElementId and increment id.code in active appContext', () => {
      const initSpy = vi.spyOn(functionalBasic, 'initGetElementId')

      uiIdServer()

      expect(initSpy).toHaveBeenCalledTimes(1)
      const generator = initSpy.mock.calls[0]![0]!

      const contextPayload = { id: { code: 10_000 } }
      appContext.call(contextPayload, () => {
        expect(generator()).toBe('ui-10000')
        expect(generator()).toBe('ui-10001')
        expect(generator()).toBe('ui-10002')
        expect(contextPayload.id.code).toBe(10_003)
      })
    })
  })

  describe('Inactive context and nullish boundaries', () => {
    it('should return empty string when no appContext is active', () => {
      const initSpy = vi.spyOn(functionalBasic, 'initGetElementId')
      uiIdServer()
      const generator = initSpy.mock.calls[0]![0]!

      expect(generator()).toBe('')
    })

    it('should return empty string when appContext does not contain "id" key', () => {
      const initSpy = vi.spyOn(functionalBasic, 'initGetElementId')
      uiIdServer()
      const generator = initSpy.mock.calls[0]![0]!

      appContext.call({ otherKey: 'value' }, () => {
        expect(generator()).toBe('')
      })
    })
  })

  describe('SSR concurrency and request isolation', () => {
    it('should isolate ID counters across concurrent async SSR requests', async () => {
      const initSpy = vi.spyOn(functionalBasic, 'initGetElementId')
      uiIdServer()
      const generator = initSpy.mock.calls[0]![0]!

      const simulateRequest = async (delayMs: number) => {
        return await appContext.call({ id: { code: 10_000 } }, async () => {
          const first = generator()
          await new Promise(resolve => setTimeout(resolve, delayMs))
          const second = generator()
          return [first, second]
        })
      }

      const [reqA, reqB] = await Promise.all([
        simulateRequest(20),
        simulateRequest(5)
      ])

      expect(reqA).toEqual(['ui-10000', 'ui-10001'])
      expect(reqB).toEqual(['ui-10000', 'ui-10001'])
    })
  })
})
