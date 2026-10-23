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
  })

  describe('Boundary values and empty inputs', () => {
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

    it('should return an empty string when called with null at runtime', () => {
      expect(getImageSrc(null as unknown as undefined)).toBe('')
    })

    it('should fallback to empty string when image object has null or undefined src property', () => {
      const imageWithNullSrc = { src: null } as unknown as HTMLImageElement
      expect(getImageSrc(imageWithNullSrc)).toBe('')

      const imageWithUndefinedSrc = { src: undefined } as unknown as HTMLImageElement
      expect(getImageSrc(imageWithUndefinedSrc)).toBe('')
    })
  })

  describe('Type coercion and non-image objects', () => {
    it('should return an empty string for DOM elements without a src property', () => {
      const divElement = document.createElement('div') as unknown as HTMLImageElement
      expect(getImageSrc(divElement)).toBe('')
    })

    it('should return an empty string for plain objects without a src property', () => {
      const emptyObject = {} as unknown as HTMLImageElement
      expect(getImageSrc(emptyObject)).toBe('')
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
  })
})
