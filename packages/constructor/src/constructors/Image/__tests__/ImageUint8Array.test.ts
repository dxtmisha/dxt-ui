// @vitest-environment jsdom
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { ImageUint8Array } from '../ImageUint8Array'

describe('ImageUint8Array', () => {
  let originalImage: typeof Image

  beforeAll(() => {
    URL.createObjectURL = vi.fn().mockReturnValue('blob:mock-url')
    URL.revokeObjectURL = vi.fn()

    originalImage = globalThis.Image
    class MockImage {
      _src = ''
      naturalWidth = 200
      naturalHeight = 100
      onload: (() => void) | null = null
      onerror: (() => void) | null = null

      set src(value: string) {
        this._src = value
        setTimeout(() => this.onload?.(), 0)
      }

      get src() {
        return this._src
      }
    }

    globalThis.Image = MockImage as unknown as typeof Image
  })

  afterAll(() => {
    globalThis.Image = originalImage
  })

  it('should check if value is Uint8Array or ArrayBuffer', () => {
    expect(ImageUint8Array.is(new Uint8Array())).toBe(true)
    expect(ImageUint8Array.is(new ArrayBuffer(8))).toBe(true)
    expect(ImageUint8Array.is('string')).toBe(false)
  })

  it('should convert values to Uint8Array', () => {
    const buf = new ArrayBuffer(8)
    const arr = ImageUint8Array.toUint8Array(buf)
    expect(arr instanceof Uint8Array).toBe(true)

    const u8 = new Uint8Array()
    expect(ImageUint8Array.toUint8Array(u8)).toBe(u8)
  })

  it('should create images and cleanup on reset', async () => {
    const helper = new ImageUint8Array()
    const data = new Uint8Array([1, 2, 3])
    const res = await helper.createImage(data)
    expect(res?.src).toBe('blob:mock-url')
    expect(res?.width).toBe(200)
    expect(res?.height).toBe(100)

    helper.reset()
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:mock-url')
  })
})
