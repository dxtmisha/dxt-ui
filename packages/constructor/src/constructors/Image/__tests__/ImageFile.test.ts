// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'
import * as functional from '@dxtmisha/functional'
import { ImageFile, MAX_SIZE } from '../ImageFile'
import { browser, loadImage } from './domFixtures'

beforeEach(() => {
  vi.spyOn(functional.ErrorCenter, 'on').mockImplementation(() => undefined)
})

describe('ImageFile', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it.each([
      ['image/png', true],
      ['image/jpeg', true],
      ['image/webp', true],
      ['image/svg+xml', true],
      ['application/pdf', false],
      ['text/plain', false],
      ['', false]
    ])('should classify File by MIME type %j rather than its filename', (type, expected) => {
      expect(ImageFile.isImage(new File([], 'misleading.pdf', { type }))).toBe(expected)
    })

    it('should decode URL dimensions and keep separate image elements for concurrent requests', async () => {
      const first = ImageFile.createImage('/first.png')
      const second = ImageFile.createImage('/second.png')

      expect(browser.images).toHaveLength(2)
      loadImage(browser.images[1]!, 640, 480)
      loadImage(browser.images[0]!, 120, 80)

      expect(await first).toEqual({ image: browser.images[0], src: browser.images[0]!.src, width: 120, height: 80 })
      expect(await second).toEqual({ image: browser.images[1], src: browser.images[1]!.src, width: 640, height: 480 })
    })

    it('should wait for FileReader before starting image decoding for a File source', async () => {
      const file = new File(['image'], 'photo.png', { type: 'image/png' })
      const pending = ImageFile.createImage(file)

      expect(browser.images).toHaveLength(0)
      await vi.waitFor(() => expect(browser.images).toHaveLength(1))

      const image = browser.images[0]!
      expect(image.src).toBe('data:image/png;base64,aW1hZ2U=')
      loadImage(image, 600, 400)

      expect(await pending).toEqual({ image, src: image.src, width: 600, height: 400 })
    })

    it('should read both populated and empty Files as Data URLs', async () => {
      expect(await ImageFile.getFileReader(new File(['abc'], 'photo.png', { type: 'image/png' })))
        .toBe('data:image/png;base64,YWJj')
      expect(await ImageFile.getImageDataUrl(new File([], 'photo.png', { type: 'image/png' })))
        .toBe('data:image/png;base64,')
    })
  })

  describe('Boundary values and MAX_SIZE resize thresholds', () => {
    it.each([
      [MAX_SIZE, 200],
      [MAX_SIZE + 1, 200],
      [200, MAX_SIZE],
      [200, MAX_SIZE + 1]
    ])('should enforce MAX_SIZE resize threshold for File with %i by %i pixels', async (width, height) => {
      const resize = vi.spyOn(functional, 'resizeImageByMax').mockReturnValue('data:image/png;base64,resized')
      const pending = ImageFile.createImage(new File(['image'], 'photo.png', { type: 'image/png' }))

      await vi.waitFor(() => expect(browser.images).toHaveLength(1))
      const image = browser.images[0]!
      loadImage(image, width, height)
      const result = await pending

      if (width > MAX_SIZE || height > MAX_SIZE) {
        expect(resize).toHaveBeenCalledExactlyOnceWith(image, MAX_SIZE)
        expect(result).toEqual({ image, src: 'data:image/png;base64,resized', width, height })
      } else {
        expect(resize).not.toHaveBeenCalled()
        expect(result).toEqual({ image, src: image.src, width, height })
      }
    })

    it('should fall back to an empty string when resizeImageByMax returns undefined', async () => {
      vi.spyOn(functional, 'resizeImageByMax').mockReturnValue(undefined)
      const pending = ImageFile.createImage(new File(['image'], 'photo.png', { type: 'image/png' }))

      await vi.waitFor(() => expect(browser.images).toHaveLength(1))
      const image = browser.images[0]!
      loadImage(image, MAX_SIZE + 100, MAX_SIZE + 100)

      expect(await pending).toEqual({ image, src: '', width: MAX_SIZE + 100, height: MAX_SIZE + 100 })
    })

    it('should not resize remote URL sources even when their dimensions exceed MAX_SIZE', async () => {
      const resize = vi.spyOn(functional, 'resizeImageByMax')
      const pending = ImageFile.createImage('/large.png')

      loadImage(browser.images[0]!, 4000, 2000)
      expect(await pending).toEqual({ image: browser.images[0], src: browser.images[0]!.src, width: 4000, height: 2000 })
      expect(resize).not.toHaveBeenCalled()
    })
  })

  describe('Empty, non-image, and non-string FileReader results', () => {
    it('should not allocate image elements for an empty source or unsupported File', async () => {
      expect(await ImageFile.createImage('')).toBeUndefined()
      expect(await ImageFile.createImage(new File(['pdf'], 'document.pdf', { type: 'application/pdf' }))).toBeUndefined()
      expect(browser.images).toHaveLength(0)
    })

    it('should skip FileReader work in getImageDataUrl for non-image MIME types', async () => {
      const read = vi.spyOn(FileReader.prototype, 'readAsDataURL')
      expect(await ImageFile.getImageDataUrl(new File([], 'photo.png', { type: 'application/pdf' }))).toBe('')
      expect(read).not.toHaveBeenCalled()
    })

    it('should return an empty string when FileReader.result is not a string on load', async () => {
      vi.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(function (this: FileReader) {
        Object.defineProperty(this, 'result', { configurable: true, value: new ArrayBuffer(4) })
        this.dispatchEvent(new Event('load'))
      })

      expect(await ImageFile.getFileReader(new File(['abc'], 'photo.png', { type: 'image/png' }))).toBe('')
    })
  })

  describe('Error handling and exception propagation', () => {
    it('should settle network image errors to undefined without throwing', async () => {
      const pending = ImageFile.createImage('/broken.png')
      browser.images[0]!.dispatchEvent(new Event('error'))
      expect(await pending).toBeUndefined()
    })

    it.each(['error', 'abort'] as const)('should settle FileReader %s event with ErrorCenter notification and empty string', async (event) => {
      const failure = new DOMException('read failed')
      vi.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(function (this: FileReader) {
        Object.defineProperty(this, 'error', { configurable: true, value: failure })
        this.dispatchEvent(new Event(event))
      })

      expect(await ImageFile.getFileReader(new File([], 'photo.png', { type: 'image/png' }))).toBe('')
      expect(functional.ErrorCenter.on).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
        code: 'image-file', details: failure
      }))
    })

    it('should reject source preparation exceptions and report them to ErrorCenter', async () => {
      const failure = new Error('readAsDataURL failed')
      vi.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(() => {
        throw failure
      })

      await expect(ImageFile.createImage(new File([], 'photo.png', { type: 'image/png' }))).rejects.toBe(failure)
      expect(browser.images).toHaveLength(0)
      expect(functional.ErrorCenter.on).toHaveBeenCalledWith(expect.objectContaining({ details: failure }))
    })

    it('should reject synchronous src assignment exceptions without leaving a pending promise', async () => {
      const failure = new Error('src assignment failed')
      const image = document.createElement('img')
      vi.stubGlobal('Image', vi.fn(function (): HTMLImageElement {
        return image
      }))
      vi.spyOn(image, 'src', 'set').mockImplementation(() => {
        throw failure
      })

      await expect(ImageFile.createImage('/photo.png')).rejects.toBe(failure)
    })

    it('should reject errors thrown inside the asynchronous image onload handler', async () => {
      const failure = new Error('canvas unavailable')
      vi.spyOn(functional, 'resizeImageByMax').mockImplementation(() => {
        throw failure
      })

      const pending = ImageFile.createImage(new File(['image'], 'photo.png', { type: 'image/png' }))
      const rejection = expect(pending).rejects.toBe(failure)

      await vi.waitFor(() => expect(browser.images).toHaveLength(1))
      expect(() => loadImage(browser.images[0]!, 4000, 2000)).not.toThrow()
      await rejection
      expect(functional.ErrorCenter.on).toHaveBeenCalledWith(expect.objectContaining({ details: failure }))
    })
  })
})
