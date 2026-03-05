import { describe, it, expect } from 'vitest'
import { getMouseClientY } from '../getMouseClientY'

describe('getMouseClientY', () => {
  it('should return clientY from a MouseEvent', () => {
    const event = { clientY: 150 } as unknown as MouseEvent & TouchEvent
    expect(getMouseClientY(event)).toBe(150)
  })

  it('should return clientY from targetTouches if clientY is not on event', () => {
    const event = {
      clientY: undefined,
      targetTouches: [{ clientY: 200 }]
    } as unknown as MouseEvent & TouchEvent
    expect(getMouseClientY(event)).toBe(200)
  })

  it('should return clientY from touches if targetTouches and clientY are missing', () => {
    const event = {
      clientY: undefined,
      targetTouches: undefined,
      touches: [{ clientY: 250 }]
    } as unknown as MouseEvent & TouchEvent
    expect(getMouseClientY(event)).toBe(250)
  })

  it('should return 0 if no clientY information is found', () => {
    const event = {} as unknown as MouseEvent & TouchEvent
    expect(getMouseClientY(event)).toBe(0)
  })
})
