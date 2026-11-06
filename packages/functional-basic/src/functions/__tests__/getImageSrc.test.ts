/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { getImageSrc } from '../getImageSrc'

describe('getImageSrc', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return the string directly when passed a URL string', () => {
      expect(getImageSrc('https://example.com/test.jpg')).toBe('https://example.com/test.jpg')
      expect(getImageSrc('/assets/images/logo.svg')).toBe('/assets/images/logo.svg')
    })

    it('should return data URI and blob URL strings unchanged', () => {
      const dataUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
      expect(getImageSrc(dataUri)).toBe(dataUri)

      const blobUrl = 'blob:https://example.com/550e8400-e29b-41d4-a716-446655440000'
      expect(getImageSrc(blobUrl)).toBe(blobUrl)
    })

    it('should return src from an HTMLImageElement', () => {
      const imageElement = document.createElement('img')
      imageElement.src = 'https://example.com/photo.png'
      expect(getImageSrc(imageElement)).toBe('https://example.com/photo.png')
    })

    it('should extract src from plain objects with a string src property', () => {
      expect(getImageSrc({ src: 'https://example.com/item.png' })).toBe('https://example.com/item.png')
      expect(getImageSrc({ src: '/local/avatar.webp', width: 200, height: 200 })).toBe('/local/avatar.webp')
    })
  })

  describe('Boundary values, falsy inputs, and primitives', () => {
    it('should return an empty string when passed an empty string', () => {
      expect(getImageSrc('')).toBe('')
    })

    it('should preserve whitespace strings when passed as a string source', () => {
      expect(getImageSrc('   ')).toBe('   ')
    })

    it('should return an empty string for an HTMLImageElement without src attribute', () => {
      const imageElement = document.createElement('img')
      expect(getImageSrc(imageElement)).toBe('')
    })

    it('should return an empty string when called with undefined or no arguments', () => {
      expect(getImageSrc(undefined)).toBe('')
      expect(getImageSrc()).toBe('')
    })

    it('should safely return an empty string when called with null without type assertions', () => {
      expect(getImageSrc(null)).toBe('')
    })

    it('should safely handle non-string primitives at runtime without throwing TypeError', () => {
      expect(getImageSrc(42)).toBe('')
      expect(getImageSrc(0)).toBe('')
      expect(getImageSrc(true)).toBe('')
      expect(getImageSrc(false)).toBe('')
      expect(getImageSrc(Symbol('image'))).toBe('')
    })

    it('should fallback to empty string when image object has null or undefined src property', () => {
      expect(getImageSrc({ src: null })).toBe('')
      expect(getImageSrc({ src: undefined })).toBe('')
    })

    it('should fallback to empty string when image object has non-string src property', () => {
      expect(getImageSrc({ src: 123 })).toBe('')
      expect(getImageSrc({ src: true })).toBe('')
      expect(getImageSrc({ src: {} })).toBe('')
    })
  })

  describe('Objects and DOM elements without src', () => {
    it('should return an empty string for DOM elements without a src property', () => {
      const divElement = document.createElement('div')
      expect(getImageSrc(divElement)).toBe('')
    })

    it('should return an empty string for plain objects without a src property', () => {
      expect(getImageSrc({})).toBe('')
      expect(getImageSrc({ url: 'https://example.com/test.png' })).toBe('')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle URLs containing Cyrillic, Vietnamese, CJK, and Emoji characters', () => {
      expect(getImageSrc('https://example.com/картинка.png')).toBe('https://example.com/картинка.png')
      expect(getImageSrc('https://example.com/hình-ảnh.webp')).toBe('https://example.com/hình-ảnh.webp')
      expect(getImageSrc('https://example.com/画像.jpg')).toBe('https://example.com/画像.jpg')
      expect(getImageSrc('https://example.com/🚀.svg')).toBe('https://example.com/🚀.svg')
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the passed HTMLImageElement', () => {
      const imageElement = document.createElement('img')
      imageElement.src = 'https://example.com/immutable.png'
      imageElement.alt = 'Original alt'

      getImageSrc(imageElement)

      expect(imageElement.src).toBe('https://example.com/immutable.png')
      expect(imageElement.alt).toBe('Original alt')
    })

    it('should not mutate the passed plain object', () => {
      const plainObject = { src: 'https://example.com/immutable.jpg', meta: 1 }

      getImageSrc(plainObject)

      expect(plainObject).toEqual({ src: 'https://example.com/immutable.jpg', meta: 1 })
    })
  })
})
