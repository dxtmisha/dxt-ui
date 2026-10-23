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

  describe('SSR safety and boundary guard conditions', () => {
    it('should return original src if src is empty or maxSize <= 0', async () => {
      expect(await resizeImage('', 100)).toBe('')
      expect(await resizeImage('https://example.com/test.jpg', 0)).toBe('https://example.com/test.jpg')
      expect(await resizeImage('https://example.com/test.jpg', -50)).toBe('https://example.com/test.jpg')
    })

    it('should return original src in non-DOM environment (SSR)', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)
      const imageUrl = 'https://example.com/ssr.jpg'

      expect(await resizeImage(imageUrl, 500)).toBe(imageUrl)
    })
  })

  describe('Synchronous fast-path for loaded HTMLImageElement', () => {
    it('should immediately return resized image for loaded element using default maxSize and custom typeData', async () => {
      const mockElement = {
        complete: true,
        naturalWidth: 2000,
        naturalHeight: 1000,
        src: 'https://example.com/loaded.jpg'
      } as unknown as HTMLImageElement

      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue('data:image/webp;base64,fast-result')

      const result = await resizeImage(mockElement, undefined, 'image/webp')

      expect(result).toBe('data:image/webp;base64,fast-result')
      expect(resizeModule.resizeImageByMax).toHaveBeenCalledWith(mockElement, 1280, 'auto', 'image/webp')
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

  describe('Asynchronous path via new Image()', () => {
    it('should resolve resized data URL when image exceeds maxSize', async () => {
      class MockImage {
        naturalWidth = 2000
        naturalHeight = 1000
        crossOrigin: string | null = null
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        private sourceUrl = ''

        set src(value: string) {
          this.sourceUrl = value
          setTimeout(() => this.onload?.(), 0)
        }

        get src() {
          return this.sourceUrl
        }
      }
      globalThis.Image = MockImage as unknown as typeof Image
      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue('data:image/png;base64,mock-resized')

      const result = await resizeImage('data:image/png;base64,mock', 500)

      expect(result).toBe('data:image/png;base64,mock-resized')
    })

    it('should fallback to original src when async resizeImageByMax returns undefined', async () => {
      class MockImage {
        naturalWidth = 300
        naturalHeight = 200
        crossOrigin: string | null = null
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        private sourceUrl = ''

        set src(value: string) {
          this.sourceUrl = value
          setTimeout(() => this.onload?.(), 0)
        }

        get src() {
          return this.sourceUrl
        }
      }
      globalThis.Image = MockImage as unknown as typeof Image
      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue(undefined)

      const originalUrl = 'https://example.com/small-async.jpg'
      const result = await resizeImage(originalUrl, 500)

      expect(result).toBe(originalUrl)
    })

    it('should use async path when HTMLImageElement is not yet complete or has zero natural dimensions', async () => {
      class MockImage {
        naturalWidth = 1600
        naturalHeight = 900
        crossOrigin: string | null = null
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        private sourceUrl = ''

        set src(value: string) {
          this.sourceUrl = value
          setTimeout(() => this.onload?.(), 0)
        }

        get src() {
          return this.sourceUrl
        }
      }
      globalThis.Image = MockImage as unknown as typeof Image
      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue('data:image/jpeg;base64,async-from-element')

      const incompleteElement = {
        complete: false,
        naturalWidth: 0,
        naturalHeight: 0,
        src: 'https://example.com/pending.jpg'
      } as unknown as HTMLImageElement

      const result = await resizeImage(incompleteElement, 800, 'image/jpeg')

      expect(result).toBe('data:image/jpeg;base64,async-from-element')
    })

    it('should set crossOrigin = anonymous for remote URLs and omit it for data URLs', async () => {
      let capturedCrossOrigin: string | null = null

      class MockImage {
        naturalWidth = 1000
        naturalHeight = 1000
        crossOrigin: string | null = null
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        private sourceUrl = ''

        set src(value: string) {
          this.sourceUrl = value
          capturedCrossOrigin = this.crossOrigin
          setTimeout(() => this.onload?.(), 0)
        }

        get src() {
          return this.sourceUrl
        }
      }
      globalThis.Image = MockImage as unknown as typeof Image
      vi.spyOn(resizeModule, 'resizeImageByMax').mockReturnValue('data:image/jpeg;base64,remote-resized')

      await resizeImage('https://example.com/photo.jpg', 500)
      expect(capturedCrossOrigin).toBe('anonymous')

      await resizeImage('data:image/png;base64,inline', 500)
      expect(capturedCrossOrigin).toBeNull()
    })

    it('should fallback to src and clean up listeners when image loading fails (onerror)', async () => {
      let createdImageInstance: { onload: (() => void) | null, onerror: (() => void) | null } | null = null

      class ErrorImage {
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        private sourceUrl = ''

        constructor() {
          createdImageInstance = this
        }

        set src(value: string) {
          this.sourceUrl = value
          setTimeout(() => this.onerror?.(), 0)
        }

        get src() {
          return this.sourceUrl
        }
      }
      globalThis.Image = ErrorImage as unknown as typeof Image

      const brokenUrl = 'https://example.com/broken.jpg'
      const result = await resizeImage(brokenUrl, 500)

      expect(result).toBe(brokenUrl)
      expect(createdImageInstance!.onload).toBeNull()
      expect(createdImageInstance!.onerror).toBeNull()
    })

    it('should safely fallback to src and clean up listeners if canvas throws SecurityError (Tainted Canvas)', async () => {
      let createdImageInstance: { onload: (() => void) | null, onerror: (() => void) | null } | null = null

      class MockImage {
        naturalWidth = 2000
        naturalHeight = 1000
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        private sourceUrl = ''

        constructor() {
          createdImageInstance = this
        }

        set src(value: string) {
          this.sourceUrl = value
          setTimeout(() => this.onload?.(), 0)
        }

        get src() {
          return this.sourceUrl
        }
      }
      globalThis.Image = MockImage as unknown as typeof Image
      vi.spyOn(resizeModule, 'resizeImageByMax').mockImplementation(() => {
        throw new Error('SecurityError: Tainted canvas')
      })

      const externalUrl = 'https://external-domain.com/photo.jpg'
      const result = await resizeImage(externalUrl, 500)

      expect(result).toBe(externalUrl)
      expect(createdImageInstance!.onload).toBeNull()
      expect(createdImageInstance!.onerror).toBeNull()
    })
  })
})
