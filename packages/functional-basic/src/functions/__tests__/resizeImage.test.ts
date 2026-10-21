// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as domRuntime from '../isDomRuntime'
import { resizeImage } from '../resizeImage'
import * as resizeModule from '../resizeImageByMax'

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
    expect(await resizeImage('https://example.com/test.jpg', -50)).toBe('https://example.com/test.jpg')
  })

  it('should return original src in non-DOM environment (SSR)', async () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)
    const url = 'https://example.com/ssr.jpg'
    expect(await resizeImage(url, 500)).toBe(url)
  })

  describe('synchronous fast-path for loaded HTMLImageElement', () => {
    it('should immediately return resized image for loaded element', async () => {
      const mockElement = {
        complete: true,
        naturalWidth: 2000,
        naturalHeight: 1000,
        src: 'https://example.com/loaded.jpg'
      } as unknown as HTMLImageElement

      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue('data:image/jpeg;base64,fast-result')

      const result = await resizeImage(mockElement, 500)
      expect(result).toBe('data:image/jpeg;base64,fast-result')
      expect(resizeModule.resizeImageByMax).toHaveBeenCalledWith(mockElement, 500, 'auto', undefined)
    })

    it('should fallback to src if resizeImageByMax returns undefined', async () => {
      const mockElement = {
        complete: true,
        naturalWidth: 300,
        naturalHeight: 200,
        src: 'https://example.com/small.jpg'
      } as unknown as HTMLImageElement

      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue(undefined)

      const result = await resizeImage(mockElement, 500)
      expect(result).toBe('https://example.com/small.jpg')
    })

    it('should catch exceptions in synchronous path and fallback to src', async () => {
      const mockElement = {
        complete: true,
        naturalWidth: 2000,
        naturalHeight: 1000,
        src: 'https://example.com/tainted.jpg'
      } as unknown as HTMLImageElement

      vi.spyOn(resizeModule, 'resizeImageByMax').mockImplementation(() => {
        throw new Error('SecurityError: Tainted canvas')
      })

      const result = await resizeImage(mockElement, 500)
      expect(result).toBe('https://example.com/tainted.jpg')
    })
  })

  describe('asynchronous path via new Image()', () => {
    it('should resolve resized data URL when image exceeds maxSize', async () => {
      class MockImage {
        naturalWidth = 2000
        naturalHeight = 1000
        crossOrigin: string | null = null
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
      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue('data:image/png;base64,mock-resized')

      const result = await resizeImage('data:image/png;base64,mock', 500)
      expect(result).toBe('data:image/png;base64,mock-resized')
    })

    it('should set crossOrigin = anonymous for remote URLs', async () => {
      let capturedCrossOrigin: string | null = null

      class MockImage {
        naturalWidth = 1000
        naturalHeight = 1000
        crossOrigin: string | null = null
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        private _src = ''

        set src(value: string) {
          this._src = value
          capturedCrossOrigin = this.crossOrigin
          setTimeout(() => this.onload?.(), 0)
        }

        get src() {
          return this._src
        }
      }
      globalThis.Image = MockImage as unknown as typeof Image
      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue('data:image/jpeg;base64,remote-resized')

      await resizeImage('https://example.com/photo.jpg', 500)
      expect(capturedCrossOrigin).toBe('anonymous')
    })

    it('should fallback to src when image loading fails (onerror)', async () => {
      class ErrorImage {
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        private _src = ''

        set src(value: string) {
          this._src = value
          setTimeout(() => this.onerror?.(), 0)
        }

        get src() {
          return this._src
        }
      }
      globalThis.Image = ErrorImage as unknown as typeof Image

      const brokenUrl = 'https://example.com/broken.jpg'
      const result = await resizeImage(brokenUrl, 500)
      expect(result).toBe(brokenUrl)
    })

    it('should safely fallback to src if canvas throws SecurityError (Tainted Canvas)', async () => {
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
      vi.spyOn(resizeModule, 'resizeImageByMax').mockImplementation(() => {
        throw new Error('SecurityError: Tainted canvas')
      })

      const externalUrl = 'https://external-domain.com/photo.jpg'
      const result = await resizeImage(externalUrl, 500)
      expect(result).toBe(externalUrl)
    })
  })
})
