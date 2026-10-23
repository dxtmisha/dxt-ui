import { describe, it, expect } from 'vitest'
import { getMouseClientX } from '../getMouseClientX'

describe('getMouseClientX', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return clientX from a MouseEvent', () => {
      const event = { clientX: 150 } as unknown as MouseEvent
      expect(getMouseClientX(event)).toBe(150)
    })

    it('should return clientX from targetTouches[0] if clientX is not on event', () => {
      const event = {
        targetTouches: [{ clientX: 200 }, { clientX: 400 }]
      } as unknown as TouchEvent
      expect(getMouseClientX(event)).toBe(200)
    })

    it('should return clientX from touches[0] if targetTouches and clientX are missing', () => {
      const event = {
        touches: [{ clientX: 250 }, { clientX: 500 }]
      } as unknown as TouchEvent
      expect(getMouseClientX(event)).toBe(250)
    })

    it('should prioritize event.clientX over targetTouches and touches', () => {
      const event = {
        clientX: 42,
        targetTouches: [{ clientX: 200 }],
        touches: [{ clientX: 250 }]
      } as unknown as MouseEvent
      expect(getMouseClientX(event)).toBe(42)
    })

    it('should prioritize targetTouches[0].clientX over touches[0].clientX', () => {
      const event = {
        targetTouches: [{ clientX: 180 }],
        touches: [{ clientX: 260 }]
      } as unknown as TouchEvent
      expect(getMouseClientX(event)).toBe(180)
    })
  })

  describe('Boundary values and coordinate thresholds', () => {
    it('should return 0 when MouseEvent clientX is 0', () => {
      const event = { clientX: 0, touches: [{ clientX: 999 }] } as unknown as MouseEvent
      expect(getMouseClientX(event)).toBe(0)
    })

    it('should return negative coordinates correctly', () => {
      expect(getMouseClientX({ clientX: -75 } as unknown as MouseEvent)).toBe(-75)
      expect(getMouseClientX({ targetTouches: [{ clientX: -30 }] } as unknown as TouchEvent)).toBe(-30)
      expect(getMouseClientX({ touches: [{ clientX: -10 }] } as unknown as TouchEvent)).toBe(-10)
    })

    it('should preserve floating-point sub-pixel coordinates', () => {
      expect(getMouseClientX({ clientX: 312.75 } as unknown as MouseEvent)).toBe(312.75)
    })

    it('should fallback to touches[0].clientX when targetTouches is empty', () => {
      const event = {
        targetTouches: [],
        touches: [{ clientX: 320 }]
      } as unknown as TouchEvent
      expect(getMouseClientX(event)).toBe(320)
    })
  })

  describe('Empty and missing coordinate properties', () => {
    it('should return 0 if no clientX information is found on event', () => {
      const event = {} as unknown as MouseEvent
      expect(getMouseClientX(event)).toBe(0)
    })

    it('should return 0 when targetTouches and touches are empty arrays', () => {
      const event = {
        targetTouches: [],
        touches: []
      } as unknown as TouchEvent
      expect(getMouseClientX(event)).toBe(0)
    })

    it('should return 0 when touch item has clientX of 0', () => {
      const event = {
        targetTouches: [{ clientX: 0 }]
      } as unknown as TouchEvent
      expect(getMouseClientX(event)).toBe(0)
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input event', () => {
      const event = { clientX: 128 } as unknown as MouseEvent
      getMouseClientX(event)
      expect(event).toEqual({ clientX: 128 })
    })
  })
})
