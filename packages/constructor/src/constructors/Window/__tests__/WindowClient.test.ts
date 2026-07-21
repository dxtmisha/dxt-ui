// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { WindowClient } from '../WindowClient'
import type { WindowElement } from '../WindowElement'

describe('WindowClient', () => {
  it('should initialize to unset coordinates', () => {
    const mockElement = {} as WindowElement
    const windowClient = new WindowClient(mockElement)

    expect(windowClient.is()).toBe(false)
    expect(windowClient.isZero()).toBe(false)
    expect(windowClient.getX()).toBe(-1)
    expect(windowClient.getY()).toBe(-1)
  })

  it('should set coordinates and return correct is() state', () => {
    const mockElement = {} as WindowElement
    const windowClient = new WindowClient(mockElement)

    windowClient.set(10, 20)

    expect(windowClient.is()).toBe(true)
    expect(windowClient.isZero()).toBe(false)
    expect(windowClient.getX()).toBe(10)
    expect(windowClient.getY()).toBe(20)
  })

  it('should identify coordinates at origin (0,0) as zero', () => {
    const mockElement = {} as WindowElement
    const windowClient = new WindowClient(mockElement)

    windowClient.set(0, 0)

    expect(windowClient.is()).toBe(true)
    expect(windowClient.isZero()).toBe(true)
  })

  it('should return correct shifts relative to input values', () => {
    const mockElement = {} as WindowElement
    const windowClient = new WindowClient(mockElement)

    windowClient.set(50, 100)

    expect(windowClient.getShiftX(30)).toBe(20)
    expect(windowClient.getShiftY(40)).toBe(60)
  })

  it('should reset coordinates to unset state', () => {
    const mockElement = {} as WindowElement
    const windowClient = new WindowClient(mockElement)

    windowClient.set(10, 20)
    windowClient.reset()

    expect(windowClient.is()).toBe(false)
    expect(windowClient.getX()).toBe(-1)
  })

  it('should update center coordinates from control element rect if coordinates are zero', () => {
    const mockElement = {
      getControlRect: vi.fn().mockReturnValue({
        left: 100,
        top: 200,
        width: 60,
        height: 40
      } as DOMRect)
    } as unknown as WindowElement

    const windowClient = new WindowClient(mockElement)
    windowClient.set(0, 0)

    windowClient.update()

    // x = left + width/2 = 100 + 30 = 130
    // y = top + height/2 = 200 + 20 = 220
    expect(windowClient.getX()).toBe(130)
    expect(windowClient.getY()).toBe(220)
  })

  it('should not update coordinates if they are not zero', () => {
    const mockElement = {
      getControlRect: vi.fn().mockReturnValue({
        left: 100,
        top: 200,
        width: 60,
        height: 40
      } as DOMRect)
    } as unknown as WindowElement

    const windowClient = new WindowClient(mockElement)
    windowClient.set(10, 20)

    windowClient.update()

    expect(windowClient.getX()).toBe(10)
    expect(windowClient.getY()).toBe(20)
  })
})
