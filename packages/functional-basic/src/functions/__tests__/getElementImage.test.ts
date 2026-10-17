/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getElementImage } from '../getElementImage'
import * as domRuntimeModule from '../isDomRuntime'

describe('getElementImage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements', () => {
    it('should return an HTMLImageElement if a string source is provided', () => {
      const src = 'https://example.com/image.jpg'
      const image = getElementImage(src)

      expect(image).toBeInstanceOf(HTMLImageElement)
      expect(image?.src).toBe(src)
    })

    it('should return the element itself if an HTMLImageElement is passed', () => {
      const imageElement = document.createElement('img')
      imageElement.src = 'https://example.com/test.png'

      expect(getElementImage(imageElement)).toBe(imageElement)
    })

    it('should work without callbacks provided', () => {
      const image = getElementImage('https://example.com/test.jpg')

      expect(image).toBeInstanceOf(HTMLImageElement)
      expect(image?.onload).toBeNull()
      expect(image?.onerror).toBeNull()
    })
  })

  describe('Event callback handling (onload and onerror)', () => {
    it('should attach onload callback and invoke it on load event', () => {
      const loadCallback = vi.fn()
      const image = getElementImage('https://example.com/photo.jpg', loadCallback)

      expect(image).toBeDefined()
      expect(image?.onload).toBeDefined()

      const mockEvent = new Event('load')
      image?.onload?.(mockEvent)

      expect(loadCallback).toHaveBeenCalledTimes(1)
      expect(loadCallback).toHaveBeenCalledWith(image, mockEvent)
    })

    it('should attach onerror callback and invoke it on error event', () => {
      const errorCallback = vi.fn()
      const image = getElementImage('https://example.com/photo.jpg', undefined, errorCallback)

      expect(image).toBeDefined()
      expect(image?.onerror).toBeDefined()

      const mockEvent = new Event('error')
      image?.onerror?.(mockEvent)

      expect(errorCallback).toHaveBeenCalledTimes(1)
      expect(errorCallback).toHaveBeenCalledWith(image, mockEvent)
    })

    it('should return an existing HTMLImageElement immediately without modifying its listeners', () => {
      const imageElement = document.createElement('img')
      imageElement.src = 'https://example.com/test.png'
      const loadCallback = vi.fn()
      const errorCallback = vi.fn()

      const result = getElementImage(imageElement, loadCallback, errorCallback)

      expect(result).toBe(imageElement)
      expect(imageElement.onload).toBeNull()
      expect(imageElement.onerror).toBeNull()
    })

    it('should assign onload and onerror handlers before assigning src on new image', () => {
      let onloadOrder = 0
      let srcOrder = 0
      let step = 0

      const originalCreateElement = document.createElement.bind(document)
      const mockImage = originalCreateElement('img')

      Object.defineProperty(mockImage, 'onload', {
        set(fn) {
          onloadOrder = ++step
          Object.defineProperty(mockImage, '_onload', { value: fn, writable: true, configurable: true })
        },
        get() {
          return (mockImage as unknown as { _onload?: unknown })._onload
        },
        configurable: true
      })

      Object.defineProperty(mockImage, 'src', {
        set(value: string) {
          srcOrder = ++step
          mockImage.setAttribute('src', value)
        },
        get() {
          return mockImage.getAttribute('src') ?? ''
        },
        configurable: true
      })

      vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
        if (tagName === 'img') return mockImage
        return originalCreateElement(tagName)
      })

      getElementImage('https://example.com/order-check.jpg', vi.fn())

      expect(onloadOrder).toBeGreaterThan(0)
      expect(srcOrder).toBeGreaterThan(0)
      expect(onloadOrder).toBeLessThan(srcOrder)
    })
  })

  describe('SSR and boundary conditions', () => {
    it('should return undefined in non-DOM environment when string is provided', () => {
      vi.spyOn(domRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      const result = getElementImage('https://example.com/test.jpg')

      expect(result).toBeUndefined()
    })

    it('should handle undefined safely', () => {
      expect(getElementImage(undefined as unknown as string)).toBeUndefined()
    })

    it('should handle empty string safely', () => {
      const emptyImage = getElementImage('')
      expect(emptyImage).toBeInstanceOf(HTMLImageElement)
    })
  })
})
