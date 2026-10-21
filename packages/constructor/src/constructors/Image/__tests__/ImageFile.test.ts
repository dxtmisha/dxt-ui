// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'
import * as functional from '@dxtmisha/functional'
import { ImageFile, MAX_SIZE } from '../ImageFile'
import { browser, loadImage } from './domFixtures'

beforeEach(() => {
  vi.spyOn(functional.ErrorCenter, 'on').mockImplementation(() => undefined)
})

describe('ImageFile', () => {
  it.each([
    ['image/png', true], ['image/jpeg', true], ['image/webp', true],
    ['image/svg+xml', true], ['application/pdf', false], ['', false]
  ])('classifies files by MIME %s rather than their filename', (type, expected) => {
    expect(ImageFile.isImage(new File([], 'misleading.pdf', { type }))).toBe(expected)
  })

  it('decodes URL dimensions and keeps separate elements for independent requests', async () => {
    const first = ImageFile.createImage('/first.png')
    const second = ImageFile.createImage('/second.png')
    expect(browser.images).toHaveLength(2)
    loadImage(browser.images[1]!, 640, 480)
    loadImage(browser.images[0]!, 120, 80)
    expect(await first).toEqual({ image: browser.images[0], src: browser.images[0]!.src, width: 120, height: 80 })
    expect(await second).toEqual({ image: browser.images[1], src: browser.images[1]!.src, width: 640, height: 480 })
  })

  it('waits for the actual FileReader before starting image decoding', async () => {
    const file = new File(['image'], 'photo.png', { type: 'image/png' })
    const pending = ImageFile.createImage(file)
    expect(browser.images).toHaveLength(0)
    await vi.waitFor(() => expect(browser.images).toHaveLength(1))
    const image = browser.images[0]!
    expect(image.src).toBe('data:image/png;base64,aW1hZ2U=')
    loadImage(image, 600, 400)
    expect(await pending).toEqual({ image, src: image.src, width: 600, height: 400 })
  })

  it('settles network image errors without reporting a successful image', async () => {
    const pending = ImageFile.createImage('/broken.png')
    browser.images[0]!.dispatchEvent(new Event('error'))
    expect(await pending).toBeUndefined()
  })

  it('does not allocate image elements for an empty source or unsupported File', async () => {
    expect(await ImageFile.createImage('')).toBeUndefined()
    expect(await ImageFile.createImage(new File(['pdf'], 'document.pdf', { type: 'application/pdf' }))).toBeUndefined()
    expect(browser.images).toHaveLength(0)
  })

  it('reads both empty and populated Files as data URLs', async () => {
    expect(await ImageFile.getFileReader(new File(['abc'], 'photo.png', { type: 'image/png' })))
      .toBe('data:image/png;base64,YWJj')
    expect(await ImageFile.getImageDataUrl(new File([], 'photo.png', { type: 'image/png' })))
      .toBe('data:image/png;base64,')
  })

  it('avoids FileReader work for non-image MIME types', async () => {
    const read = vi.spyOn(FileReader.prototype, 'readAsDataURL')
    expect(await ImageFile.getImageDataUrl(new File([], 'photo.png', { type: 'application/pdf' }))).toBe('')
    expect(read).not.toHaveBeenCalled()
  })

  it.each(['error', 'abort'] as const)('settles FileReader %s with a reported failure', async (event) => {
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

  it('rejects source preparation exceptions through the returned promise', async () => {
    const failure = new Error('readAsDataURL failed')
    vi.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(() => {
      throw failure
    })
    await expect(ImageFile.createImage(new File([], 'photo.png', { type: 'image/png' }))).rejects.toBe(failure)
    expect(browser.images).toHaveLength(0)
    expect(functional.ErrorCenter.on).toHaveBeenCalledWith(expect.objectContaining({ details: failure }))
  })

  it('rejects source assignment exceptions without leaving a pending promise', async () => {
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

  it.each([
    [MAX_SIZE, 200], [MAX_SIZE + 1, 200], [200, MAX_SIZE], [200, MAX_SIZE + 1]
  ])('checks the File resize threshold for %s by %s pixels', async (width, height) => {
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

  it('does not resize remote sources even when their dimensions exceed the File limit', async () => {
    const resize = vi.spyOn(functional, 'resizeImageByMax')
    const pending = ImageFile.createImage('/large.png')
    loadImage(browser.images[0]!, 4000, 2000)
    expect(await pending).toEqual({ image: browser.images[0], src: browser.images[0]!.src, width: 4000, height: 2000 })
    expect(resize).not.toHaveBeenCalled()
  })

  it('rejects errors inside the asynchronous load handler', async () => {
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
