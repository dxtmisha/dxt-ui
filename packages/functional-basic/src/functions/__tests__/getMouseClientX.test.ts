import { describe, it, expect } from 'vitest'
import { getMouseClientX } from '../getMouseClientX'

describe('getMouseClientX', () => {
  it('should return clientX from a MouseEvent', () => {
    const event = { clientX: 150 } as unknown as MouseEvent & TouchEvent
    expect(getMouseClientX(event)).toBe(150)
  })

  it('should return clientX from targetTouches if clientX is not on event', () => {
    const event = {
      clientX: undefined,
      targetTouches: [{ clientX: 200 }]
    } as unknown as MouseEvent & TouchEvent
    expect(getMouseClientX(event)).toBe(200)
  })

  it('should return clientX from touches if targetTouches and clientX are missing', () => {
    const event = {
      clientX: undefined,
      targetTouches: undefined,
      touches: [{ clientX: 250 }]
    } as unknown as MouseEvent & TouchEvent
    expect(getMouseClientX(event)).toBe(250)
  })

  it('should return 0 if no clientX information is found', () => {
    const event = {} as unknown as MouseEvent & TouchEvent
    expect(getMouseClientX(event)).toBe(0)
  })
})
