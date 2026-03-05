/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest'
import { getElementImage } from '../getElementImage'

describe('getElementImage', () => {
  it('should return an HTMLImageElement if a string source is provided', () => {
    const src = 'https://example.com/image.jpg'
    const img = getElementImage(src)

    expect(img).toBeInstanceOf(HTMLImageElement)
    expect(img?.src).toBe(src)
  })

  it('should return the element itself if an HTMLImageElement is passed', () => {
    const imgElement = document.createElement('img')
    imgElement.src = 'https://example.com/test.png'

    expect(getElementImage(imgElement)).toBe(imgElement)
  })
})
