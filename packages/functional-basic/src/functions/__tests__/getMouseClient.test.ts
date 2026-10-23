import { describe, it, expect } from 'vitest'
import { getMouseClient } from '../getMouseClient'

describe('getMouseClient', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return x and y coordinates from a MouseEvent', () => {
      const event = { clientX: 100, clientY: 200 } as unknown as MouseEvent
      expect(getMouseClient(event)).toEqual({ x: 100, y: 200 })
    })

    it('should return x and y coordinates from targetTouches in a TouchEvent', () => {
      const event = {
        targetTouches: [{ clientX: 150, clientY: 250 }]
      } as unknown as TouchEvent
      expect(getMouseClient(event)).toEqual({ x: 150, y: 250 })
    })

    it('should return x and y coordinates from touches in a TouchEvent when targetTouches is absent', () => {
      const event = {
        touches: [{ clientX: 50, clientY: 75 }]
      } as unknown as TouchEvent
      expect(getMouseClient(event)).toEqual({ x: 50, y: 75 })
    })

    it('should prioritize clientX/clientY on the event over touch lists', () => {
      const event = {
        clientX: 10,
        clientY: 20,
        targetTouches: [{ clientX: 100, clientY: 200 }],
        touches: [{ clientX: 300, clientY: 400 }]
      } as unknown as MouseEvent
      expect(getMouseClient(event)).toEqual({ x: 10, y: 20 })
    })

    it('should prioritize targetTouches[0] over touches[0]', () => {
      const event = {
        targetTouches: [
          { clientX: 110, clientY: 210 },
          { clientX: 999, clientY: 999 }
        ],
        touches: [{ clientX: 310, clientY: 410 }]
      } as unknown as TouchEvent
      expect(getMouseClient(event)).toEqual({ x: 110, y: 210 })
    })
  })

  describe('Boundary values and coordinate thresholds', () => {
    it('should handle zero coordinates (0, 0) on MouseEvent', () => {
      const event = { clientX: 0, clientY: 0 } as unknown as MouseEvent
      expect(getMouseClient(event)).toEqual({ x: 0, y: 0 })
    })

    it('should handle negative coordinates when pointer is outside viewport', () => {
      const mouseEvent = { clientX: -45, clientY: -120 } as unknown as MouseEvent
      expect(getMouseClient(mouseEvent)).toEqual({ x: -45, y: -120 })

      const touchEvent = {
        targetTouches: [{ clientX: -15, clientY: -30 }]
      } as unknown as TouchEvent
      expect(getMouseClient(touchEvent)).toEqual({ x: -15, y: -30 })
    })

    it('should preserve fractional sub-pixel coordinates', () => {
      const event = { clientX: 123.45, clientY: 67.89 } as unknown as MouseEvent
      expect(getMouseClient(event)).toEqual({ x: 123.45, y: 67.89 })
    })

    it('should fallback to touches[0] when targetTouches is an empty array', () => {
      const event = {
        targetTouches: [],
        touches: [{ clientX: 80, clientY: 90 }]
      } as unknown as TouchEvent
      expect(getMouseClient(event)).toEqual({ x: 80, y: 90 })
    })
  })

  describe('Empty and missing coordinate properties', () => {
    it('should default to { x: 0, y: 0 } when event has no coordinate properties', () => {
      const event = {} as unknown as MouseEvent
      expect(getMouseClient(event)).toEqual({ x: 0, y: 0 })
    })

    it('should default to { x: 0, y: 0 } when both targetTouches and touches are empty arrays', () => {
      const event = {
        targetTouches: [],
        touches: []
      } as unknown as TouchEvent
      expect(getMouseClient(event)).toEqual({ x: 0, y: 0 })
    })

    it('should resolve x and y independently when only one axis is provided', () => {
      const onlyXEvent = { clientX: 140 } as unknown as MouseEvent
      expect(getMouseClient(onlyXEvent)).toEqual({ x: 140, y: 0 })

      const onlyYEvent = { clientY: 280 } as unknown as MouseEvent
      expect(getMouseClient(onlyYEvent)).toEqual({ x: 0, y: 280 })
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input event and should return a new coordinate object each time', () => {
      const event = { clientX: 55, clientY: 66 } as unknown as MouseEvent
      const firstResult = getMouseClient(event)
      const secondResult = getMouseClient(event)

      expect(firstResult).toEqual({ x: 55, y: 66 })
      expect(firstResult).not.toBe(secondResult)
      expect(event).toEqual({ clientX: 55, clientY: 66 })
    })
  })
})
