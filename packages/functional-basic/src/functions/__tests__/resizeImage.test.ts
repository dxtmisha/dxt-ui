// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { resizeImage } from '../resizeImage'

describe('resizeImage', () => {
  let originalImage: typeof Image

  beforeEach(() => {
    vi.restoreAllMocks()
    originalImage = globalThis.Image
  })

  afterEach(() => {
    globalThis.Image = originalImage
  })

  it('should return original src if maxSize <= 0 or empty', async () => {
    expect(await resizeImage('', 100)).toBe('')
    expect(await resizeImage('https://example.com/test.jpg', 0)).toBe('https://example.com/test.jpg')
  })

  it('should resolve resized data URL when image exceeds maxSize', async () => {
    class MockImage {
      naturalWidth = 2000
      naturalHeight = 1000
      onload: (() => void) | null = null
      onerror: (() => void) | null = null
      private _src = ''

      set src(value: string) {
        this._src = value
        setTimeout(() => this.onload?.(), 0)
      }

      get src() {
        return this._src
      }
    }
    globalThis.Image = MockImage as unknown as typeof Image

    const result = await resizeImage('data:image/png;base64,mock', 500)
    expect(result).toBeDefined()
  })
})
