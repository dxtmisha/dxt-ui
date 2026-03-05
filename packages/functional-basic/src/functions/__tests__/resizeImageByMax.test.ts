/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { resizeImageByMax } from '../resizeImageByMax'

describe('resizeImageByMax', () => {
  let mockImage: HTMLImageElement

  beforeEach(() => {
    vi.restoreAllMocks()
    mockImage = document.createElement('img')
    Object.defineProperty(mockImage, 'naturalWidth', { value: 2000, configurable: true })
    Object.defineProperty(mockImage, 'naturalHeight', { value: 1000, configurable: true })
  })

  it('should return undefined if image is smaller than maxSize', () => {
    expect(resizeImageByMax(mockImage, 3000)).toBeUndefined()
  })

  it('should resize image if it exceeds maxSize (auto mode)', () => {
    const mockCanvas: any = {
      getContext: vi.fn(() => ({
        drawImage: vi.fn(),
        canvas: {
          width: 0,
          height: 0,
          toDataURL: vi.fn(() => 'data:image/png;base64,mock')
        }
      }))
    }
    vi.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'canvas') return mockCanvas
      return document.createElement(tagName)
    })

    const result = resizeImageByMax(mockImage, 500)
    expect(result).toBe('data:image/png;base64,mock')
  })

  it('should resize by width specifically', () => {
    const mockCanvas: any = {
      getContext: vi.fn(() => ({
        drawImage: vi.fn(),
        canvas: {
          width: 0,
          height: 0,
          toDataURL: vi.fn(() => 'data:image/png;base64,mock')
        }
      }))
    }
    vi.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'canvas') return mockCanvas
      return document.createElement(tagName)
    })

    const result = resizeImageByMax(mockImage, 100, 'width')
    expect(result).toBe('data:image/png;base64,mock')
  })

  it('should resize by height specifically', () => {
    const mockCanvas: any = {
      getContext: vi.fn(() => ({
        drawImage: vi.fn(),
        canvas: {
          width: 0,
          height: 0,
          toDataURL: vi.fn(() => 'data:image/png;base64,mock')
        }
      }))
    }
    vi.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'canvas') return mockCanvas
      return document.createElement(tagName)
    })

    const result = resizeImageByMax(mockImage, 100, 'height')
    expect(result).toBe('data:image/png;base64,mock')
  })
})
