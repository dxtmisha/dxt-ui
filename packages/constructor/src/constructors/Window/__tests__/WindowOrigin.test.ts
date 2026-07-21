// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { WindowOrigin } from '../WindowOrigin'
import type { WindowClient } from '../WindowClient'
import type { WindowElement } from '../WindowElement'
import type { WindowPosition } from '../WindowPosition'

describe('WindowOrigin', () => {
  let mockClient: any
  let mockElement: any
  let mockPosition: any
  let mainElement: HTMLDivElement

  beforeEach(() => {
    mainElement = document.createElement('div')
    mockClient = {
      update: vi.fn(),
      is: vi.fn().mockReturnValue(true),
      getShiftX: vi.fn().mockImplementation((value: number) => 50 - value),
      getShiftY: vi.fn().mockImplementation((value: number) => 100 - value)
    }
    mockElement = {
      getMain: vi.fn().mockReturnValue(mainElement),
      getBodyRect: vi.fn().mockReturnValue({
        left: 20,
        top: 40
      } as DOMRect)
    }
    mockPosition = {
      getX: vi.fn().mockReturnValue(10),
      getY: vi.fn().mockReturnValue(15)
    }

    vi.spyOn(window, 'getComputedStyle').mockImplementation((_element: any) => {
      return {
        getPropertyValue: (property: string) => {
          if (property === '--sys-window-type-body') {
            return '--POPUP--'
          }
          return ''
        }
      } as any
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with null styles', () => {
    const origin = new WindowOrigin(mockClient, mockElement, mockPosition)
    expect(origin.getStyleX()).toBeNull()
    expect(origin.getStyleY()).toBeNull()
  })

  it('should set styles to 0px if client is not set', () => {
    mockClient.is.mockReturnValue(false)

    const origin = new WindowOrigin(mockClient, mockElement, mockPosition)
    origin.update()

    expect(origin.getStyleX()).toBe('0px')
    expect(origin.getStyleY()).toBe('0px')
  })

  it('should compute menu origin shift based on body rect if menu computed type matches --MENU--', () => {
    vi.restoreAllMocks()
    vi.spyOn(window, 'getComputedStyle').mockImplementation(() => ({
      getPropertyValue: () => '--MENU--'
    } as any))

    const origin = new WindowOrigin(mockClient, mockElement, mockPosition)
    origin.update()

    // shiftX = 50 - rect.left (20) = 30
    // shiftY = 100 - rect.top (40) = 60
    expect(origin.getStyleX()).toBe('30px')
    expect(origin.getStyleY()).toBe('60px')
  })

  it('should compute standard popup origin shift based on position if type does not match --MENU--', () => {
    const origin = new WindowOrigin(mockClient, mockElement, mockPosition)
    origin.update()

    // shiftX = 50 - position.getX() (10) = 40
    // shiftY = 100 - position.getY() (15) = 85
    expect(origin.getStyleX()).toBe('40px')
    expect(origin.getStyleY()).toBe('85px')
  })

  it('should reset coordinate properties to null', () => {
    const origin = new WindowOrigin(mockClient, mockElement, mockPosition)
    origin.update()
    origin.reset()

    expect(origin.getStyleX()).toBeNull()
  })
})
