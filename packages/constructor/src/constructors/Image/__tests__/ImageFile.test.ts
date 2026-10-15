// @vitest-environment jsdom
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest'
import { ErrorCenter } from '@dxtmisha/functional'
import { ImageFile } from '../ImageFile'

describe('ImageFile', () => {
  let image: HTMLImageElement

  beforeEach(() => {
    image = document.createElement('img')
    vi.stubGlobal('Image', vi.fn(function (): HTMLImageElement {
      return image
    }))
    vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('should verify image files types', () => {
    const imageFile = new File([], 'img.png', { type: 'image/png' })
    expect(ImageFile.isImage(imageFile)).toBe(true)

    const pdfFile = new File([], 'img.pdf', { type: 'application/pdf' })
    expect(ImageFile.isImage(pdfFile)).toBe(false)
  })

  it('should return the loaded URL and intrinsic dimensions', async () => {
    Object.defineProperties(image, {
      naturalWidth: { value: 600 },
      naturalHeight: { value: 400 }
    })

    const result = ImageFile.createImage('/photo.png')
    image.onload?.call(image, new Event('load'))

    await expect(result).resolves.toEqual({
      image,
      src: image.src,
      width: 600,
      height: 400
    })
  })

  it('should wait for file reading before loading the image', async () => {
    const source = 'data:image/png;base64,dGVzdA=='
    let finishReading: (source: string) => void = () => undefined
    vi.spyOn(ImageFile, 'getImageDataUrl').mockReturnValue(new Promise((resolve) => {
      finishReading = resolve
    }))
    Object.defineProperties(image, {
      naturalWidth: { value: 600 },
      naturalHeight: { value: 400 }
    })

    const result = ImageFile.createImage(new File([], 'photo.png', { type: 'image/png' }))
    expect(Image).not.toHaveBeenCalled()

    finishReading(source)
    await vi.waitFor(() => expect(image.src).toBe(source))
    image.onload?.call(image, new Event('load'))

    await expect(result).resolves.toEqual({ image, src: source, width: 600, height: 400 })
  })

  it('should resolve image loading errors as undefined', async () => {
    const result = ImageFile.createImage('/broken.png')
    image.onerror?.call(image, new Event('error'))

    await expect(result).resolves.toBeUndefined()
  })

  it('should resolve empty sources without creating an image', async () => {
    await expect(ImageFile.createImage('')).resolves.toBeUndefined()
    expect(Image).not.toHaveBeenCalled()
  })

  it('should resolve an empty file reading result without starting an image load', async () => {
    vi.spyOn(ImageFile, 'getImageDataUrl').mockResolvedValue('')

    await expect(ImageFile.createImage(new File([], 'photo.png', { type: 'image/png' })))
      .resolves.toBeUndefined()
    expect(Image).not.toHaveBeenCalled()
  })

  it('should reject the returned promise when file reading rejects', async () => {
    const error = new Error('File reading failed')
    vi.spyOn(ImageFile, 'getImageDataUrl').mockRejectedValue(error)

    await expect(ImageFile.createImage(new File([], 'photo.png', { type: 'image/png' })))
      .rejects.toBe(error)
    expect(Image).not.toHaveBeenCalled()
    expect(ErrorCenter.on).toHaveBeenCalledWith(expect.objectContaining({
      code: 'image-file',
      details: error
    }))
  })

  it('should reject the returned promise when assigning the image source throws', async () => {
    const error = new Error('Image source assignment failed')
    vi.spyOn(image, 'src', 'set').mockImplementation(() => {
      throw error
    })

    await expect(ImageFile.createImage('/photo.png')).rejects.toBe(error)
  })

  it('should reject the load promise when canvas resizing throws', async () => {
    const error = new Error('Canvas resizing failed')
    const source = 'data:image/png;base64,dGVzdA=='
    vi.spyOn(ImageFile, 'getImageDataUrl').mockResolvedValue(source)
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(() => {
      throw error
    })
    Object.defineProperties(image, {
      naturalWidth: { value: 4000 },
      naturalHeight: { value: 2000 }
    })

    const result = ImageFile.createImage(new File([], 'photo.png', { type: 'image/png' }))
    const rejection = expect(result).rejects.toBe(error)
    await vi.waitFor(() => expect(image.src).toBe(source))

    expect(() => image.onload?.call(image, new Event('load'))).not.toThrow()
    await rejection
    expect(ErrorCenter.on).toHaveBeenCalledWith(expect.objectContaining({
      code: 'image-file',
      details: error
    }))
  })
})
