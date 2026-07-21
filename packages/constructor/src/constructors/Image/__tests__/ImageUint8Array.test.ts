// @vitest-environment jsdom
import { describe, it, expect, vi, beforeAll } from 'vitest'
import { ImageUint8Array } from '../ImageUint8Array'

describe('ImageUint8Array', () => {
  beforeAll(() => {
    if (typeof URL.createObjectURL === 'undefined') {
      URL.createObjectURL = vi.fn().mockReturnValue('blob:mock-url')
    }
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

  it('should create images with caching', () => {
    const data = new Uint8Array([1, 2, 3])
    const res1 = ImageUint8Array.createImage(data)
    expect(res1?.src).toBeDefined()

    const res2 = ImageUint8Array.createImage(data)
    expect(res2?.src).toBe(res1?.src)
  })
})
