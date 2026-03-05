import { describe, it, expect } from 'vitest'
import { getMouseClient } from '../getMouseClient'

describe('getMouseClient', () => {
  it('should return x and y coordinates from a regular MouseEvent', () => {
    const event = { clientX: 100, clientY: 200 } as unknown as MouseEvent & TouchEvent
    expect(getMouseClient(event)).toEqual({ x: 100, y: 200 })
  })

  it('should return x and y coordinates from targetTouches in a TouchEvent', () => {
    const event = {
      targetTouches: [{ clientX: 150, clientY: 250 }]
    } as unknown as MouseEvent & TouchEvent
    expect(getMouseClient(event)).toEqual({ x: 150, y: 250 })
  })

  it('should return x and y coordinates from touches in a TouchEvent', () => {
    const event = {
      touches: [{ clientX: 50, clientY: 75 }]
    } as unknown as MouseEvent & TouchEvent
    expect(getMouseClient(event)).toEqual({ x: 50, y: 75 })
  })

  it('should default to { x: 0, y: 0 } if properties are missing', () => {
    const event = {} as MouseEvent & TouchEvent
    expect(getMouseClient(event)).toEqual({ x: 0, y: 0 })
  })
})
