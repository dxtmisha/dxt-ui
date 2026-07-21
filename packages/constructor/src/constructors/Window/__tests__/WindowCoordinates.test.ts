// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { WindowCoordinates } from '../WindowCoordinates'
import type { WindowClassesData } from '../WindowClassesData'
import type { WindowElement } from '../WindowElement'

describe('WindowCoordinates', () => {
  let mockClasses: any
  let mockElement: any
  let mainElement: HTMLDivElement
  let bodyElement: HTMLDivElement

  beforeEach(() => {
    mainElement = document.createElement('div')
    bodyElement = document.createElement('div')

    Object.defineProperties(mainElement, {
      offsetWidth: { value: 300 },
      offsetHeight: { value: 400 }
    })
    Object.defineProperties(bodyElement, {
      offsetHeight: { value: 200 }
    })

    mockClasses = {}
    mockElement = {
      getMain: vi.fn().mockReturnValue(mainElement),
      getBody: vi.fn().mockReturnValue(bodyElement),
      getControlRect: vi.fn().mockReturnValue({
        top: 100,
        bottom: 150,
        left: 200,
        right: 300,
        width: 100,
        height: 50
      } as DOMRect)
    }

    vi.stubGlobal('innerWidth', 1024)
    vi.stubGlobal('innerHeight', 768)

    vi.spyOn(window, 'getComputedStyle').mockImplementation((_element: any) => {
      return {
        paddingTop: '12px',
        paddingBottom: '12px'
      } as any
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should initialize with default zero values', () => {
    const coordinates = new WindowCoordinates(mockClasses, mockElement)
    expect(coordinates.getTop()).toBe(0)
    expect(coordinates.getLeft()).toBe(0)
  })

  it('should update coordinates on first call and return true', () => {
    const coordinates = new WindowCoordinates(mockClasses, mockElement)
    const result = coordinates.update()

    expect(result).toBe(true)
    expect(coordinates.getTop()).toBe(100)
    expect(coordinates.getRight()).toBe(300)
    expect(coordinates.getBottom()).toBe(150)
    expect(coordinates.getLeft()).toBe(200)
    expect(coordinates.getWidth()).toBe(300)
    expect(coordinates.getHeight()).toBe(400)
    expect(coordinates.getInnerWidth()).toBe(1024)
    expect(coordinates.getInnerHeight()).toBe(768)
    expect(coordinates.getControlWidth()).toBe(100)
    expect(coordinates.getControlHeight()).toBe(50)
    expect(coordinates.getPadding()).toBe(12)
  })

  it('should return false on update if coordinates are unchanged', () => {
    const coordinates = new WindowCoordinates(mockClasses, mockElement)
    coordinates.update()

    const secondResult = coordinates.update()
    expect(secondResult).toBe(false)
  })

  it('should reset coordinate properties', () => {
    const coordinates = new WindowCoordinates(mockClasses, mockElement)
    coordinates.update()
    coordinates.reset()

    expect(coordinates.getTop()).toBe(0)
    expect(coordinates.getLeft()).toBe(0)
    expect(coordinates.getWidth()).toBe(0)
    expect(coordinates.getInnerWidth()).toBe(0)
  })

  it('should fall back to padding 16 if computed style padding is 0', () => {
    vi.restoreAllMocks()
    vi.spyOn(window, 'getComputedStyle').mockImplementation(() => ({
      paddingTop: '0px',
      paddingBottom: '0px'
    } as any))

    const coordinates = new WindowCoordinates(mockClasses, mockElement)
    coordinates.update()

    expect(coordinates.getPadding()).toBe(16)
  })

  it('should compute correct location position within limits', () => {
    const coordinates = new WindowCoordinates(mockClasses, mockElement)

    // Test normal position
    // top control center = rect.top (100) + rect.height / 2 (25) = 125
    // body height = 200 => half = 100
    // position = 125 - 100 - padding(12) = 13
    // Since 13 >= padding(12), it returns 13px
    coordinates.update()
    expect(coordinates.getLocation()).toBe('13px')
  })

  it('should clamp location position to 0px if overflowing top limit', () => {
    mockElement.getControlRect.mockReturnValue({
      top: 50,
      height: 20
    } as DOMRect) // control center = 60 => position = 60 - 100 - 12 = -52 < padding(12)

    const coordinates = new WindowCoordinates(mockClasses, mockElement)
    coordinates.update()

    expect(coordinates.getLocation()).toBe('0px')
  })

  it('should clamp location position to max height if overflowing bottom limit', () => {
    mockElement.getControlRect.mockReturnValue({
      top: 700,
      height: 20
    } as DOMRect) // control center = 710 => top + half = 710 + 100 = 810 >= innerHeight - padding (768 - 12 = 756)

    const coordinates = new WindowCoordinates(mockClasses, mockElement)
    coordinates.update()

    // max = innerHeight - padding*2 - height = 768 - 24 - 200 = 544
    expect(coordinates.getLocation()).toBe('544px')
  })
})
