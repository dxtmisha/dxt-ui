// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { getImageSrc } from '../getImageSrc'

describe('getImageSrc', () => {
  it('should return string directly if passed a string', () => {
    expect(getImageSrc('https://example.com/test.jpg')).toBe('https://example.com/test.jpg')
    expect(getImageSrc('')).toBe('')
  })

  it('should return src from HTMLImageElement', () => {
    const img = document.createElement('img')
    img.src = 'https://example.com/photo.png'
    expect(getImageSrc(img)).toBe('https://example.com/photo.png')
  })

  it('should return empty string for undefined or null', () => {
    expect(getImageSrc(undefined)).toBe('')
  })
})
