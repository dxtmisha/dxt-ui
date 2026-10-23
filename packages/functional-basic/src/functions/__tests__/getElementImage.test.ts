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

  describe('Standard functional requirements (Happy path)', () => {
    it('should return an HTMLImageElement if an absolute string URL is provided', () => {
      const imageSource = 'https://example.com/image.jpg'
      const image = getElementImage(imageSource)

      expect(image).toBeInstanceOf(HTMLImageElement)
      expect(image?.src).toBe(imageSource)
    })

    it('should return an HTMLImageElement if a relative path string is provided', () => {
      const relativePath = '/assets/images/logo.png'
      const image = getElementImage(relativePath)

      expect(image).toBeInstanceOf(HTMLImageElement)
      expect(image?.getAttribute('src')).toBe(relativePath)
    })

    it('should return an HTMLImageElement for data URI and blob URL strings', () => {
      const dataUri = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      const blobUrl = 'blob:https://example.com/550e8400-e29b-41d4-a716-446655440000'

      const dataImage = getElementImage(dataUri)
      const blobImage = getElementImage(blobUrl)

      expect(dataImage).toBeInstanceOf(HTMLImageElement)
      expect(dataImage?.src).toBe(dataUri)
      expect(blobImage).toBeInstanceOf(HTMLImageElement)
      expect(blobImage?.src).toBe(blobUrl)
    })

    it('should return the element itself if an HTMLImageElement instance is passed', () => {
      const imageElement = document.createElement('img')
      imageElement.src = 'https://example.com/test.png'

      expect(getElementImage(imageElement)).toBe(imageElement)
    })

    it('should work without callbacks provided and keep onload and onerror as null', () => {
      const image = getElementImage('https://example.com/test.jpg')

      expect(image).toBeInstanceOf(HTMLImageElement)
      expect(image?.onload).toBeNull()
      expect(image?.onerror).toBeNull()
    })
  })

  describe('Event callback handling (onload and onerror)', () => {
    it('should attach onload callback and invoke it with (image, event) on load event', () => {
      const loadCallback = vi.fn()
      const image = getElementImage('https://example.com/photo.jpg', loadCallback)

      expect(image).toBeDefined()
      expect(image?.onload).toBeTypeOf('function')
      expect(image?.onerror).toBeNull()

      const mockEvent = new Event('load')
      image?.onload?.(mockEvent)

      expect(loadCallback).toHaveBeenCalledTimes(1)
      expect(loadCallback).toHaveBeenCalledWith(image, mockEvent)
    })

    it('should attach onerror callback and invoke it with (image, event) on error Event', () => {
      const errorCallback = vi.fn()
      const image = getElementImage('https://example.com/photo.jpg', undefined, errorCallback)

      expect(image).toBeDefined()
      expect(image?.onload).toBeNull()
      expect(image?.onerror).toBeTypeOf('function')

      const mockEvent = new Event('error')
      image?.onerror?.(mockEvent)

      expect(errorCallback).toHaveBeenCalledTimes(1)
      expect(errorCallback).toHaveBeenCalledWith(image, mockEvent)
    })

    it('should pass string error message to onerror callback when error is invoked with a string', () => {
      const errorCallback = vi.fn()
      const image = getElementImage('https://example.com/broken.jpg', undefined, errorCallback)

      image?.onerror?.('Network failure while loading image')

      expect(errorCallback).toHaveBeenCalledTimes(1)
      expect(errorCallback).toHaveBeenCalledWith(image, 'Network failure while loading image')
    })

    it('should attach both onload and onerror callbacks simultaneously when both are provided', () => {
      const loadCallback = vi.fn()
      const errorCallback = vi.fn()
      const image = getElementImage('https://example.com/both.jpg', loadCallback, errorCallback)

      const loadEvent = new Event('load')
      const errorEvent = new Event('error')

      image?.onload?.(loadEvent)
      expect(loadCallback).toHaveBeenCalledWith(image, loadEvent)
      expect(errorCallback).not.toHaveBeenCalled()

      image?.onerror?.(errorEvent)
      expect(errorCallback).toHaveBeenCalledWith(image, errorEvent)
    })

    it('should return an existing HTMLImageElement immediately without attaching or overwriting its listeners', () => {
      const imageElement = document.createElement('img')
      imageElement.src = 'https://example.com/test.png'
      const existingOnload = vi.fn()
      imageElement.onload = existingOnload

      const loadCallback = vi.fn()
      const errorCallback = vi.fn()

      const result = getElementImage(imageElement, loadCallback, errorCallback)

      expect(result).toBe(imageElement)
      expect(imageElement.onload).toBe(existingOnload)
      expect(imageElement.onerror).toBeNull()
    })

    it('should assign onload and onerror handlers before assigning src on new image', () => {
      let onloadOrder = 0
      let onerrorOrder = 0
      let sourceOrder = 0
      let step = 0

      const originalCreateElement = document.createElement.bind(document)
      const mockImage = originalCreateElement('img')

      Object.defineProperty(mockImage, 'onload', {
        set(callback) {
          onloadOrder = ++step
          Object.defineProperty(mockImage, '_onload', {
            value: callback,
            writable: true,
            configurable: true
          })
        },
        get() {
          return (mockImage as unknown as { _onload?: unknown })._onload
        },
        configurable: true
      })

      Object.defineProperty(mockImage, 'onerror', {
        set(callback) {
          onerrorOrder = ++step
          Object.defineProperty(mockImage, '_onerror', {
            value: callback,
            writable: true,
            configurable: true
          })
        },
        get() {
          return (mockImage as unknown as { _onerror?: unknown })._onerror
        },
        configurable: true
      })

      Object.defineProperty(mockImage, 'src', {
        set(value: string) {
          sourceOrder = ++step
          mockImage.setAttribute('src', value)
        },
        get() {
          return mockImage.getAttribute('src') ?? ''
        },
        configurable: true
      })

      vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
        if (tagName === 'img') {
          return mockImage
        }

        return originalCreateElement(tagName)
      })

      getElementImage('https://example.com/order-check.jpg', vi.fn(), vi.fn())

      expect(onloadOrder).toBe(1)
      expect(onerrorOrder).toBe(2)
      expect(sourceOrder).toBe(3)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should create an HTMLImageElement and attach handlers even when string is empty ""', () => {
      const loadCallback = vi.fn()
      const errorCallback = vi.fn()
      const emptyImage = getElementImage('', loadCallback, errorCallback)

      expect(emptyImage).toBeInstanceOf(HTMLImageElement)
      expect(emptyImage?.getAttribute('src')).toBe('')
      expect(emptyImage?.onload).toBeTypeOf('function')
      expect(emptyImage?.onerror).toBeTypeOf('function')
    })

    it('should handle very long URL strings with extensive query parameters', () => {
      const longQuery = 'a'.repeat(2048)
      const longUrl = `https://example.com/image.webp?token=${longQuery}`
      const image = getElementImage(longUrl)

      expect(image).toBeInstanceOf(HTMLImageElement)
      expect(image?.src).toBe(longUrl)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return undefined when called with no arguments', () => {
      expect(getElementImage()).toBeUndefined()
    })

    it('should return undefined when image parameter is explicitly undefined', () => {
      expect(getElementImage(undefined)).toBeUndefined()
    })

    it('should handle null safely at runtime without throwing', () => {
      // @ts-expect-error Testing runtime safety with null input
      expect(getElementImage(null)).toBeNull()
    })

    it('should handle whitespace-only string by creating an HTMLImageElement', () => {
      const whitespaceImage = getElementImage('   ')

      expect(whitespaceImage).toBeInstanceOf(HTMLImageElement)
      expect(whitespaceImage?.getAttribute('src')).toBe('   ')
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should not create an image element if non-string falsy values (0, false) are passed at runtime', () => {
      // @ts-expect-error Testing runtime type guard with number 0
      expect(getElementImage(0)).toBe(0)
      // @ts-expect-error Testing runtime type guard with boolean false
      expect(getElementImage(false)).toBe(false)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should preserve query strings, hash fragments, and special URL characters', () => {
      const complexUrl = 'https://example.com/path/to/image.png?width=100&height=200&format=webp#preview'
      const image = getElementImage(complexUrl)

      expect(image?.src).toBe(complexUrl)
    })

    it('should safely assign potentially malicious strings to src attribute without HTML execution', () => {
      const xssPayload = '"><script>alert(1)</script>'
      const image = getElementImage(xssPayload)

      expect(image).toBeInstanceOf(HTMLImageElement)
      expect(image?.getAttribute('src')).toBe(xssPayload)
      expect(image?.children.length).toBe(0)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle URLs containing Cyrillic, Vietnamese, CJK, and Emoji characters', () => {
      const cyrillicImage = getElementImage('/изображения/баннер.png')
      const vietnameseImage = getElementImage('/hình-ảnh/biểu-tượng.png')
      const cjkEmojiImage = getElementImage('/画像/🚀.png')

      expect(cyrillicImage?.getAttribute('src')).toBe('/изображения/баннер.png')
      expect(vietnameseImage?.getAttribute('src')).toBe('/hình-ảnh/biểu-tượng.png')
      expect(cjkEmojiImage?.getAttribute('src')).toBe('/画像/🚀.png')
    })
  })

  describe('SSR safety, statefulness, and isolation', () => {
    it('should return undefined in non-DOM environment (isDomRuntime === false) when string is provided', () => {
      vi.spyOn(domRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const loadCallback = vi.fn()
      const errorCallback = vi.fn()

      const result = getElementImage('https://example.com/test.jpg', loadCallback, errorCallback)

      expect(result).toBeUndefined()
      expect(loadCallback).not.toHaveBeenCalled()
      expect(errorCallback).not.toHaveBeenCalled()
    })

    it('should return the passed HTMLImageElement directly even when isDomRuntime returns false', () => {
      const imageElement = document.createElement('img')
      vi.spyOn(domRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      expect(getElementImage(imageElement)).toBe(imageElement)
    })

    it('should create independent HTMLImageElement instances across multiple calls with the same URL', () => {
      const url = 'https://example.com/shared.png'
      const firstImage = getElementImage(url)
      const secondImage = getElementImage(url)

      expect(firstImage).toBeInstanceOf(HTMLImageElement)
      expect(secondImage).toBeInstanceOf(HTMLImageElement)
      expect(firstImage).not.toBe(secondImage)
    })
  })
})
