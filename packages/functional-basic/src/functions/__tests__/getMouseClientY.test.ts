import { describe, it, expect } from 'vitest'
import { getMouseClientY } from '../getMouseClientY'

describe('getMouseClientY', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return clientY from a MouseEvent', () => {
      const event = { clientY: 150 } as unknown as MouseEvent
      expect(getMouseClientY(event)).toBe(150)
    })

    it('should return clientY from targetTouches[0] if clientY is not on event', () => {
      const event = {
        targetTouches: [{ clientY: 200 }, { clientY: 400 }]
      } as unknown as TouchEvent
      expect(getMouseClientY(event)).toBe(200)
    })

    it('should return clientY from touches[0] if targetTouches and clientY are missing', () => {
      const event = {
        touches: [{ clientY: 250 }, { clientY: 500 }]
      } as unknown as TouchEvent
      expect(getMouseClientY(event)).toBe(250)
    })

    it('should prioritize event.clientY over targetTouches and touches', () => {
      const event = {
        clientY: 42,
        targetTouches: [{ clientY: 200 }],
        touches: [{ clientY: 250 }]
      } as unknown as MouseEvent
      expect(getMouseClientY(event)).toBe(42)
    })

    it('should prioritize targetTouches[0].clientY over touches[0].clientY', () => {
      const event = {
        targetTouches: [{ clientY: 180 }],
        touches: [{ clientY: 260 }]
      } as unknown as TouchEvent
      expect(getMouseClientY(event)).toBe(180)
    })
  })

  describe('Boundary values and coordinate thresholds', () => {
    it('should return 0 when MouseEvent clientY is 0', () => {
      const event = { clientY: 0, touches: [{ clientY: 999 }] } as unknown as MouseEvent
      expect(getMouseClientY(event)).toBe(0)
    })

    it('should return negative coordinates correctly', () => {
      expect(getMouseClientY({ clientY: -75 } as unknown as MouseEvent)).toBe(-75)
      expect(getMouseClientY({ targetTouches: [{ clientY: -30 }] } as unknown as TouchEvent)).toBe(-30)
      expect(getMouseClientY({ touches: [{ clientY: -10 }] } as unknown as TouchEvent)).toBe(-10)
    })

    it('should preserve floating-point sub-pixel coordinates', () => {
      expect(getMouseClientY({ clientY: 512.25 } as unknown as MouseEvent)).toBe(512.25)
    })

    it('should fallback to touches[0].clientY when targetTouches is empty', () => {
      const event = {
        targetTouches: [],
        touches: [{ clientY: 320 }]
      } as unknown as TouchEvent
      expect(getMouseClientY(event)).toBe(320)
    })
  })

  describe('Empty and missing coordinate properties', () => {
    it('should return 0 if no clientY information is found on event', () => {
      const event = {} as unknown as MouseEvent
      expect(getMouseClientY(event)).toBe(0)
    })

    it('should return 0 when targetTouches and touches are empty arrays', () => {
      const event = {
        targetTouches: [],
        touches: []
      } as unknown as TouchEvent
      expect(getMouseClientY(event)).toBe(0)
    })

    it('should return 0 when touch item has clientY of 0', () => {
      const event = {
        targetTouches: [{ clientY: 0 }]
      } as unknown as TouchEvent
      expect(getMouseClientY(event)).toBe(0)
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input event', () => {
      const event = { clientY: 256 } as unknown as MouseEvent
      getMouseClientY(event)
      expect(event).toEqual({ clientY: 256 })
    })
  })
})
