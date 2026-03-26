/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ensureMaxSize } from '../ensureMaxSize'
import * as getElementImageRef from '../getElementImage'
import * as resizeImageByMaxRef from '../resizeImageByMax'
import * as blobToBase64Ref from '../blobToBase64'

describe('ensureMaxSize', () => {
  beforeEach(() => {
    vi.restoreAllMocks()

    // Mock URL.createObjectURL as it's not implemented in jsdom
    if (typeof URL.createObjectURL === 'undefined') {
      URL.createObjectURL = vi.fn(() => 'blob:mock-url')
    } else {
      vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:mock-url')
    }
  })

  it('should resize the image when getElementImage returns an image', async () => {
    const mockImage: any = {
      naturalWidth: 1000,
      onload: null
    }

    const spyGetElementImage = vi.spyOn(getElementImageRef, 'getElementImage').mockReturnValue(mockImage)
    const spyResizeImageByMax = vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue('data:image/jpeg;base64,resized')

    const file = new Uint8Array([1, 2, 3])
    const promise = ensureMaxSize(file, 0.5)

    // Trigger onload manually
    if (mockImage.onload) {
      mockImage.onload()
    }

    const result = await promise

    expect(spyGetElementImage).toHaveBeenCalledWith('blob:mock-url')
    expect(spyResizeImageByMax).toHaveBeenCalledWith(
      mockImage,
      500, // 0.5 * 1000
      'width',
      'image/jpeg'
    )
    expect(result).toBe('data:image/jpeg;base64,resized')
  })

  it('should fallback to blobToBase64 if getElementImage returns undefined', async () => {
    vi.spyOn(getElementImageRef, 'getElementImage').mockReturnValue(undefined)
    const spyBlobToBase64 = vi.spyOn(blobToBase64Ref, 'blobToBase64').mockResolvedValue('data:image/jpeg;base64,original')

    const file = new Uint8Array([1, 2, 3])
    const result = await ensureMaxSize(file)

    expect(spyBlobToBase64).toHaveBeenCalled()
    expect(result).toBe('data:image/jpeg;base64,original')
  })

  it('should return an empty string if resizeImageByMax returns undefined', async () => {
    const mockImage: any = {
      naturalWidth: 1000,
      onload: null
    }

    vi.spyOn(getElementImageRef, 'getElementImage').mockReturnValue(mockImage)
    vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue(undefined)

    const file = new Uint8Array([1, 2, 3])
    const promise = ensureMaxSize(file)

    if (mockImage.onload) {
      mockImage.onload()
    }

    const result = await promise
    expect(result).toBe('')
  })
})
