/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { resizeImageByMax } from '../resizeImageByMax'
import * as domRuntimeModule from '../isDomRuntime'

interface MockCanvasState {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  getWidth: () => number
  getHeight: () => number
  drawImageSpy: ReturnType<typeof vi.fn>
  toDataURLSpy: ReturnType<typeof vi.fn>
  callOrder: string[]
}

function createMockCanvas(options?: { contextNull?: boolean }): MockCanvasState {
  let width = 0
  let height = 0
  const callOrder: string[] = []

  const drawImageSpy = vi.fn(() => {
    callOrder.push('drawImage')
  })
  const toDataURLSpy = vi.fn((type?: string) => {
    callOrder.push('toDataURL')
    return `data:${type || 'image/png'};base64,mock`
  })

  const mockContext = options?.contextNull
    ? null
    : ({
        drawImage: drawImageSpy
      } as unknown as CanvasRenderingContext2D)

  const canvas = {
    set width(value: number) {
      width = value
      callOrder.push(`setWidth:${value}`)
    },
    get width() {
      return width
    },
    set height(value: number) {
      height = value
      callOrder.push(`setHeight:${value}`)
    },
    get height() {
      return height
    },
    toDataURL: toDataURLSpy,
    getContext: vi.fn((contextId: string) => {
      if (contextId === '2d') {
        return mockContext
      }
      return null
    })
  } as unknown as HTMLCanvasElement

  return {
    canvas,
    context: mockContext as CanvasRenderingContext2D,
    getWidth: () => width,
    getHeight: () => height,
    drawImageSpy,
    toDataURLSpy,
    callOrder
  }
}

describe('resizeImageByMax', () => {
  const originalCreateElement = document.createElement.bind(document)
  let activeMockCanvas: MockCanvasState | null = null
  let mockImage: HTMLImageElement

  beforeEach(() => {
    vi.restoreAllMocks()
    activeMockCanvas = null

    mockImage = document.createElement('img')
    Object.defineProperty(mockImage, 'naturalWidth', { value: 2000, configurable: true })
    Object.defineProperty(mockImage, 'naturalHeight', { value: 1000, configurable: true })

    vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      if (tagName === 'canvas' && activeMockCanvas) {
        return activeMockCanvas.canvas
      }
      return originalCreateElement(tagName)
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Aspect ratio scaling & Data URL generation)', () => {
    it('should resize landscape image by maximum side (width) in auto mode', () => {
      activeMockCanvas = createMockCanvas()

      const result = resizeImageByMax(mockImage, 500, 'auto', 'image/jpeg')

      expect(activeMockCanvas.getWidth()).toBe(500)
      expect(activeMockCanvas.getHeight()).toBe(250) // (1000 / 2000) * 500
      expect(activeMockCanvas.drawImageSpy).toHaveBeenCalledWith(mockImage, 0, 0, 500, 250)
      expect(activeMockCanvas.toDataURLSpy).toHaveBeenCalledWith('image/jpeg')
      expect(result).toBe('data:image/jpeg;base64,mock')
    })

    it('should resize portrait image by maximum side (height) in auto mode', () => {
      Object.defineProperty(mockImage, 'naturalWidth', { value: 1000, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 2000, configurable: true })
      activeMockCanvas = createMockCanvas()

      const result = resizeImageByMax(mockImage, 600, 'auto')

      expect(activeMockCanvas.getHeight()).toBe(600)
      expect(activeMockCanvas.getWidth()).toBe(300) // (1000 / 2000) * 600
      expect(activeMockCanvas.drawImageSpy).toHaveBeenCalledWith(mockImage, 0, 0, 300, 600)
      expect(activeMockCanvas.toDataURLSpy).toHaveBeenCalledWith(undefined)
      expect(result).toBe('data:image/png;base64,mock')
    })

    it('should resize square image proportionally in auto mode', () => {
      Object.defineProperty(mockImage, 'naturalWidth', { value: 1500, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 1500, configurable: true })
      activeMockCanvas = createMockCanvas()

      const result = resizeImageByMax(mockImage, 500, 'auto')

      expect(activeMockCanvas.getWidth()).toBe(500)
      expect(activeMockCanvas.getHeight()).toBe(500)
      expect(activeMockCanvas.drawImageSpy).toHaveBeenCalledWith(mockImage, 0, 0, 500, 500)
      expect(result).toBe('data:image/png;base64,mock')
    })

    it('should round fractional dimensions to integer pixels using Math.round', () => {
      // 16:9 aspect ratio with maxSize 500 produces 281.25 height
      Object.defineProperty(mockImage, 'naturalWidth', { value: 1920, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 1080, configurable: true })
      activeMockCanvas = createMockCanvas()

      resizeImageByMax(mockImage, 500, 'width')

      expect(activeMockCanvas.getWidth()).toBe(500)
      expect(activeMockCanvas.getHeight()).toBe(281) // Math.round(1080 / 1920 * 500) = 281
      expect(Number.isInteger(activeMockCanvas.getHeight())).toBe(true)
    })

    it('should round fractional width when scaling portrait image by height', () => {
      // 9:16 aspect ratio with maxSize 500 produces 281.25 width
      Object.defineProperty(mockImage, 'naturalWidth', { value: 1080, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 1920, configurable: true })
      activeMockCanvas = createMockCanvas()

      resizeImageByMax(mockImage, 500, 'height')

      expect(activeMockCanvas.getHeight()).toBe(500)
      expect(activeMockCanvas.getWidth()).toBe(281) // Math.round(1080 / 1920 * 500) = 281
      expect(Number.isInteger(activeMockCanvas.getWidth())).toBe(true)
    })

    it('should support webp and png MIME types in typeData argument', () => {
      activeMockCanvas = createMockCanvas()
      resizeImageByMax(mockImage, 400, 'auto', 'image/webp')
      expect(activeMockCanvas.toDataURLSpy).toHaveBeenCalledWith('image/webp')

      activeMockCanvas = createMockCanvas()
      resizeImageByMax(mockImage, 400, 'auto', 'image/png')
      expect(activeMockCanvas.toDataURLSpy).toHaveBeenCalledWith('image/png')
    })
  })

  describe('Explicit width and height scaling modes', () => {
    it('should force scaling by width even if height is greater', () => {
      Object.defineProperty(mockImage, 'naturalWidth', { value: 1000, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 3000, configurable: true })
      activeMockCanvas = createMockCanvas()

      resizeImageByMax(mockImage, 500, 'width')

      expect(activeMockCanvas.getWidth()).toBe(500)
      expect(activeMockCanvas.getHeight()).toBe(1500)
    })

    it('should force scaling by height even if width is greater', () => {
      Object.defineProperty(mockImage, 'naturalWidth', { value: 3000, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 1000, configurable: true })
      activeMockCanvas = createMockCanvas()

      resizeImageByMax(mockImage, 500, 'height')

      expect(activeMockCanvas.getHeight()).toBe(500)
      expect(activeMockCanvas.getWidth()).toBe(1500)
    })

    it('should return undefined when type is height and height is smaller than maxSize', () => {
      // Landscape image where width > maxSize, but type is height and height <= maxSize
      Object.defineProperty(mockImage, 'naturalWidth', { value: 2000, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 500, configurable: true })

      expect(resizeImageByMax(mockImage, 1000, 'height')).toBeUndefined()
    })

    it('should return undefined when type is width and width is smaller than maxSize', () => {
      // Portrait image where height > maxSize, but type is width and width <= maxSize
      Object.defineProperty(mockImage, 'naturalWidth', { value: 500, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 2000, configurable: true })

      expect(resizeImageByMax(mockImage, 1000, 'width')).toBeUndefined()
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return undefined if image size is exactly equal to maxSize', () => {
      expect(resizeImageByMax(mockImage, 2000, 'auto')).toBeUndefined()
    })

    it('should return undefined if image is strictly smaller than maxSize', () => {
      expect(resizeImageByMax(mockImage, 3000, 'auto')).toBeUndefined()
    })

    it('should return undefined when maxSize is 0', () => {
      expect(resizeImageByMax(mockImage, 0)).toBeUndefined()
    })

    it('should return undefined when maxSize is negative', () => {
      expect(resizeImageByMax(mockImage, -1)).toBeUndefined()
      expect(resizeImageByMax(mockImage, -500)).toBeUndefined()
    })

    it('should handle floating-point maxSize values and round dimensions correctly', () => {
      activeMockCanvas = createMockCanvas()

      resizeImageByMax(mockImage, 499.6, 'auto')

      expect(activeMockCanvas.getWidth()).toBe(500) // Math.round(499.6) = 500
      expect(activeMockCanvas.getHeight()).toBe(250) // Math.round((1000 / 2000) * 499.6) = 250
    })
  })

  describe('Input variations, unloaded elements, and edge cases', () => {
    it('should return undefined when naturalWidth is 0', () => {
      Object.defineProperty(mockImage, 'naturalWidth', { value: 0, configurable: true })
      expect(resizeImageByMax(mockImage, 500)).toBeUndefined()
    })

    it('should return undefined when naturalHeight is 0', () => {
      Object.defineProperty(mockImage, 'naturalHeight', { value: 0, configurable: true })
      expect(resizeImageByMax(mockImage, 500)).toBeUndefined()
    })

    it('should return undefined when passed an asynchronous image URL string (element not yet loaded)', () => {
      expect(resizeImageByMax('https://example.com/photo.jpg', 500)).toBeUndefined()
    })

    it('should return undefined when passed an empty string URL', () => {
      expect(resizeImageByMax('', 500)).toBeUndefined()
    })
  })

  describe('SSR and Canvas availability failures', () => {
    it('should return undefined in non-DOM environment', () => {
      vi.spyOn(domRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      expect(resizeImageByMax(mockImage, 500)).toBeUndefined()
    })

    it('should return undefined when canvas getContext(2d) returns null', () => {
      activeMockCanvas = createMockCanvas({ contextNull: true })

      expect(resizeImageByMax(mockImage, 500)).toBeUndefined()
    })

    it('should not create a canvas if image does not exceed maxSize', () => {
      const createElementSpy = vi.spyOn(document, 'createElement')

      resizeImageByMax(mockImage, 5000)

      expect(createElementSpy).not.toHaveBeenCalledWith('canvas')
    })
  })

  describe('Canvas lifecycle and execution sequence', () => {
    it('should set width and height before calling drawImage and toDataURL', () => {
      activeMockCanvas = createMockCanvas()

      resizeImageByMax(mockImage, 500, 'auto')

      expect(activeMockCanvas.callOrder).toEqual([
        'setWidth:500',
        'setHeight:250',
        'drawImage',
        'toDataURL'
      ])
    })

    it('should return undefined if canvas.toDataURL throws SecurityError (Tainted Canvas)', () => {
      activeMockCanvas = createMockCanvas()
      activeMockCanvas.toDataURLSpy.mockImplementation(() => {
        throw new Error('SecurityError: Tainted canvas')
      })

      expect(resizeImageByMax(mockImage, 500)).toBeUndefined()
    })

    it('should guarantee minimum 1px dimension for extreme aspect ratios', () => {
      activeMockCanvas = createMockCanvas()
      Object.defineProperty(mockImage, 'naturalWidth', { value: 10000, configurable: true })
      Object.defineProperty(mockImage, 'naturalHeight', { value: 2, configurable: true })

      resizeImageByMax(mockImage, 1000, 'auto')

      expect(activeMockCanvas.getHeight()).toBeGreaterThanOrEqual(1)
    })

    it('should configure imageSmoothingEnabled and imageSmoothingQuality high', () => {
      activeMockCanvas = createMockCanvas()

      resizeImageByMax(mockImage, 500)

      expect(activeMockCanvas.context.imageSmoothingEnabled).toBe(true)
      expect(activeMockCanvas.context.imageSmoothingQuality).toBe('high')
    })

    it('should pass quality parameter to toDataURL when specified', () => {
      activeMockCanvas = createMockCanvas()

      resizeImageByMax(mockImage, 500, 'auto', 'image/jpeg', 0.85)

      expect(activeMockCanvas.toDataURLSpy).toHaveBeenCalledWith('image/jpeg', 0.85)
    })
  })
})
