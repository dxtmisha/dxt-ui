/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ensureMaxSize } from '../ensureMaxSize'
import * as getElementImageRef from '../getElementImage'
import * as resizeImageByMaxRef from '../resizeImageByMax'
import * as blobToBase64Ref from '../blobToBase64'
import * as isDomRuntimeRef from '../isDomRuntime'

function createMockImage(naturalWidth: number = 1000): HTMLImageElement {
  const image = document.createElement('img')
  Object.defineProperty(image, 'naturalWidth', {
    value: naturalWidth,
    configurable: true,
    writable: true
  })
  return image
}

describe('ensureMaxSize', () => {
  let createdUrls: string[] = []
  let createdBlobs: Blob[] = []
  const sampleFile = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10])

  beforeEach(() => {
    vi.restoreAllMocks()
    createdUrls = []
    createdBlobs = []

    let counter = 0
    const mockCreateObjectURL = vi.fn((blob: Blob | MediaSource) => {
      if (blob instanceof Blob) {
        createdBlobs.push(blob)
      }
      const url = `blob:mock-url-${++counter}`
      createdUrls.push(url)
      return url
    })

    const mockRevokeObjectURL = vi.fn()

    if (typeof URL.createObjectURL === 'function') {
      vi.spyOn(URL, 'createObjectURL').mockImplementation(mockCreateObjectURL)
    } else {
      URL.createObjectURL = mockCreateObjectURL
    }

    if (typeof URL.revokeObjectURL === 'function') {
      vi.spyOn(URL, 'revokeObjectURL').mockImplementation(mockRevokeObjectURL)
    } else {
      URL.revokeObjectURL = mockRevokeObjectURL
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Image resizing & Base64 generation)', () => {
    it('should resize image using default parameters (compress = 0.56, type = "image/jpeg")', async () => {
      const mockImage = createMockImage(1000)
      const spyGetElementImage = vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      const spyResizeImageByMax = vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue('data:image/jpeg;base64,resized-default')
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      const result = await ensureMaxSize(sampleFile)

      expect(spyGetElementImage).toHaveBeenCalledWith(
        'blob:mock-url-1',
        expect.any(Function),
        expect.any(Function)
      )
      expect(spyResizeImageByMax).toHaveBeenCalledWith(
        mockImage,
        560, // 0.56 * 1000
        'width',
        'image/jpeg'
      )
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
      expect(result).toBe('data:image/jpeg;base64,resized-default')
    })

    it('should resize image using custom compress factor and custom MIME type', async () => {
      const mockImage = createMockImage(2000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      const spyResizeImageByMax = vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue('data:image/png;base64,resized-png')

      const result = await ensureMaxSize(sampleFile, 0.75, 'image/png')

      expect(spyResizeImageByMax).toHaveBeenCalledWith(
        mockImage,
        1500, // 0.75 * 2000
        'width',
        'image/png'
      )
      expect(result).toBe('data:image/png;base64,resized-png')
    })

    it('should handle asynchronous image load event properly', async () => {
      const mockImage = createMockImage(1200)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        setTimeout(() => onload?.(mockImage), 5)
        return mockImage
      })
      vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue('data:image/webp;base64,async-result')

      const result = await ensureMaxSize(sampleFile, 0.5, 'image/webp')

      expect(result).toBe('data:image/webp;base64,async-result')
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
    })

    it('should pass created Blob with correct Uint8Array content and MIME type', async () => {
      const mockImage = createMockImage(800)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue('data:image/webp;base64,ok')

      await ensureMaxSize(sampleFile, 0.5, 'image/webp')

      expect(createdBlobs).toHaveLength(1)
      expect(createdBlobs[0].type).toBe('image/webp')
      expect(createdBlobs[0].size).toBe(sampleFile.byteLength)
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should handle compress = 0 and compress = 1 boundary thresholds', async () => {
      const mockImage = createMockImage(1000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      const spyResizeImageByMax = vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue('data:image/jpeg;base64,boundary')

      await ensureMaxSize(sampleFile, 0)
      expect(spyResizeImageByMax).toHaveBeenCalledWith(mockImage, 0, 'width', 'image/jpeg')

      await ensureMaxSize(sampleFile, 1)
      expect(spyResizeImageByMax).toHaveBeenCalledWith(mockImage, 1000, 'width', 'image/jpeg')
    })

    it('should handle empty Uint8Array(0) gracefully', async () => {
      const emptyFile = new Uint8Array(0)
      vi.spyOn(getElementImageRef, 'getElementImage').mockReturnValue(undefined)
      vi.spyOn(blobToBase64Ref, 'blobToBase64').mockResolvedValue(undefined)

      const result = await ensureMaxSize(emptyFile)
      expect(result).toBe('')
      expect(createdBlobs[0].size).toBe(0)
    })
  })

  describe('Fallback mechanisms (When resizing is not required or produces no result)', () => {
    it('should fallback to blobToBase64 when resizeImageByMax returns undefined', async () => {
      const mockImage = createMockImage(1000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue(undefined)
      const spyBlobToBase64 = vi.spyOn(blobToBase64Ref, 'blobToBase64').mockResolvedValue('data:image/jpeg;base64,fallback-original')
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      const result = await ensureMaxSize(sampleFile)

      expect(spyBlobToBase64).toHaveBeenCalledWith(createdBlobs[0])
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
      expect(result).toBe('data:image/jpeg;base64,fallback-original')
    })

    it('should resolve to empty string when resizeImageByMax returns undefined and blobToBase64 resolves undefined', async () => {
      const mockImage = createMockImage(1000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue(undefined)
      vi.spyOn(blobToBase64Ref, 'blobToBase64').mockResolvedValue(undefined)

      const result = await ensureMaxSize(sampleFile)

      expect(result).toBe('')
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
    })

    it('should fallback to blobToBase64 when getElementImage returns undefined', async () => {
      vi.spyOn(getElementImageRef, 'getElementImage').mockReturnValue(undefined)
      const spyBlobToBase64 = vi.spyOn(blobToBase64Ref, 'blobToBase64').mockResolvedValue('data:image/jpeg;base64,no-element-original')
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      const result = await ensureMaxSize(sampleFile)

      expect(spyBlobToBase64).toHaveBeenCalledWith(createdBlobs[0])
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
      expect(result).toBe('data:image/jpeg;base64,no-element-original')
    })

    it('should resolve to empty string when getElementImage returns undefined and blobToBase64 resolves undefined', async () => {
      vi.spyOn(getElementImageRef, 'getElementImage').mockReturnValue(undefined)
      vi.spyOn(blobToBase64Ref, 'blobToBase64').mockResolvedValue(undefined)

      const result = await ensureMaxSize(sampleFile)

      expect(result).toBe('')
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
    })
  })

  describe('Error handling and failed image loads', () => {
    it('should resolve to empty string when getElementImage triggers onerror callback', async () => {
      const mockImage = createMockImage(1000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, _onload, onerror) => {
        onerror?.(mockImage)
        return mockImage
      })
      const spyResizeImageByMax = vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax')
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      const result = await ensureMaxSize(sampleFile)

      expect(result).toBe('')
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
      expect(spyResizeImageByMax).not.toHaveBeenCalled()
    })

    it('should revoke object URL even if resizeImageByMax throws an exception', async () => {
      const mockImage = createMockImage(1000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockImplementation(() => {
        throw new Error('Fatal canvas error')
      })
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      await expect(ensureMaxSize(sampleFile)).rejects.toThrow('Fatal canvas error')
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
    })
  })

  describe('Resource lifecycle and memory management (URL.revokeObjectURL)', () => {
    it('should revoke object URL exactly once on successful resize', async () => {
      const mockImage = createMockImage(1000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue('data:image/jpeg;base64,success')
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      await ensureMaxSize(sampleFile)

      expect(spyRevokeObjectURL).toHaveBeenCalledTimes(1)
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
    })

    it('should revoke object URL exactly once on fallback when resizeImageByMax returns undefined', async () => {
      const mockImage = createMockImage(1000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, onload) => {
        onload?.(mockImage)
        return mockImage
      })
      vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockReturnValue(undefined)
      vi.spyOn(blobToBase64Ref, 'blobToBase64').mockResolvedValue('data:image/jpeg;base64,fallback')
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      await ensureMaxSize(sampleFile)

      expect(spyRevokeObjectURL).toHaveBeenCalledTimes(1)
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
    })

    it('should revoke object URL exactly once when getElementImage returns undefined', async () => {
      vi.spyOn(getElementImageRef, 'getElementImage').mockReturnValue(undefined)
      vi.spyOn(blobToBase64Ref, 'blobToBase64').mockResolvedValue('data:image/jpeg;base64,fallback')
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      await ensureMaxSize(sampleFile)

      expect(spyRevokeObjectURL).toHaveBeenCalledTimes(1)
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
    })

    it('should revoke object URL exactly once when onerror callback is triggered', async () => {
      const mockImage = createMockImage(1000)
      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((_source, _onload, onerror) => {
        onerror?.(mockImage)
        return mockImage
      })
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      await ensureMaxSize(sampleFile)

      expect(spyRevokeObjectURL).toHaveBeenCalledTimes(1)
      expect(spyRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
    })
  })

  describe('SSR and non-browser runtime constraints', () => {
    it('should immediately resolve to empty string in non-DOM environment', async () => {
      vi.spyOn(isDomRuntimeRef, 'isDomRuntime').mockReturnValue(false)
      const spyCreateObjectURL = vi.spyOn(URL, 'createObjectURL')
      const spyGetElementImage = vi.spyOn(getElementImageRef, 'getElementImage')
      const spyRevokeObjectURL = vi.spyOn(URL, 'revokeObjectURL')

      const result = await ensureMaxSize(sampleFile)

      expect(result).toBe('')
      expect(spyCreateObjectURL).not.toHaveBeenCalled()
      expect(spyGetElementImage).not.toHaveBeenCalled()
      expect(spyRevokeObjectURL).not.toHaveBeenCalled()
    })
  })

  describe('Concurrency and multi-image processing', () => {
    it('should process multiple image files concurrently without crossing URLs or interfering', async () => {
      const mockImage1 = createMockImage(1000)
      const mockImage2 = createMockImage(2000)

      vi.spyOn(getElementImageRef, 'getElementImage').mockImplementation((source, onload) => {
        if (source === 'blob:mock-url-1') {
          setTimeout(() => onload?.(mockImage1), 5)
          return mockImage1
        }
        if (source === 'blob:mock-url-2') {
          setTimeout(() => onload?.(mockImage2), 10)
          return mockImage2
        }
        return undefined
      })

      vi.spyOn(resizeImageByMaxRef, 'resizeImageByMax').mockImplementation((element) => {
        if (element === mockImage1) return 'data:image/jpeg;base64,result-1'
        if (element === mockImage2) return 'data:image/jpeg;base64,result-2'
        return undefined
      })

      const [result1, result2] = await Promise.all([
        ensureMaxSize(sampleFile, 0.5),
        ensureMaxSize(sampleFile, 0.8)
      ])

      expect(result1).toBe('data:image/jpeg;base64,result-1')
      expect(result2).toBe('data:image/jpeg;base64,result-2')
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:mock-url-1')
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:mock-url-2')
    })
  })
})
