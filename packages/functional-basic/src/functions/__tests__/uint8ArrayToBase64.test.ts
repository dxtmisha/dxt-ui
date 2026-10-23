import { describe, it, expect, afterEach, vi } from 'vitest'
import { uint8ArrayToBase64 } from '../uint8ArrayToBase64'

interface GlobalWithEncoders {
  Buffer?: {
    from(
      buffer: ArrayBufferLike,
      byteOffset?: number,
      byteLength?: number
    ): { toString(encoding: string): string }
  }
  btoa?: (data: string) => string
}

describe('uint8ArrayToBase64', () => {
  const globalEncoders = globalThis as unknown as GlobalWithEncoders
  const originalBuffer = globalEncoders.Buffer
  const originalBtoa = globalEncoders.btoa

  afterEach(() => {
    globalEncoders.Buffer = originalBuffer
    globalEncoders.btoa = originalBtoa
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should convert standard ASCII byte sequences to base64', () => {
      const bytes = new Uint8Array([72, 101, 108, 108, 111]) // "Hello"
      expect(uint8ArrayToBase64(bytes)).toBe('SGVsbG8=')
    })

    it('should handle base64 padding lengths (1, 2, and 3 bytes)', () => {
      expect(uint8ArrayToBase64(new Uint8Array([77]))).toBe('TQ==') // "M" -> 2 padding chars
      expect(uint8ArrayToBase64(new Uint8Array([77, 97]))).toBe('TWE=') // "Ma" -> 1 padding char
      expect(uint8ArrayToBase64(new Uint8Array([77, 97, 110]))).toBe('TWFu') // "Man" -> 0 padding chars
    })

    it('should convert byte arrays containing null and non-printable boundary bytes (0x00 to 0xFF)', () => {
      const bytes = new Uint8Array([0, 1, 2, 127, 128, 254, 255])
      expect(uint8ArrayToBase64(bytes)).toBe('AAECf4D+/w==')
    })
  })

  describe('Subarrays and shared ArrayBuffer views', () => {
    it('should encode only the sliced range when given a subarray with non-zero byteOffset', () => {
      const fullBuffer = new Uint8Array([0, 72, 101, 108, 108, 111, 255])
      const slicedBytes = fullBuffer.subarray(1, 6) // "Hello"
      expect(uint8ArrayToBase64(slicedBytes)).toBe('SGVsbG8=')
    })

    it('should respect custom byteOffset and byteLength on a shared ArrayBuffer view', () => {
      const rawBuffer = new Uint8Array([99, 99, 65, 66, 67, 99]).buffer
      const view = new Uint8Array(rawBuffer, 2, 3) // "ABC"
      expect(uint8ArrayToBase64(view)).toBe('QUJD')
    })
  })

  describe('Empty and nullish inputs', () => {
    it('should return an empty string for an empty Uint8Array', () => {
      expect(uint8ArrayToBase64(new Uint8Array([]))).toBe('')
    })

    it('should return an empty string for a zero-length subarray view', () => {
      const bytes = new Uint8Array([1, 2, 3])
      expect(uint8ArrayToBase64(bytes.subarray(1, 1))).toBe('')
    })

    it('should safely return an empty string for undefined, null, or omitted arguments', () => {
      expect(uint8ArrayToBase64()).toBe('')
      expect(uint8ArrayToBase64(undefined)).toBe('')
      expect(uint8ArrayToBase64(null)).toBe('')
    })
  })

  describe('Multilingual and Unicode UTF-8 byte sequences', () => {
    it('should accurately encode UTF-8 bytes of Cyrillic, Vietnamese, CJK, and Emoji text', () => {
      const encoder = new TextEncoder()
      const text = 'Привет • Tiếng Việt • 你好 • 🚀'
      const bytes = encoder.encode(text)

      const expected = originalBuffer!.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString('base64')
      expect(uint8ArrayToBase64(bytes)).toBe(expected)
    })
  })

  describe('Cross-runtime fallback execution paths', () => {
    it('should use modern Uint8Array.prototype.toBase64 when global Buffer is unavailable', () => {
      globalEncoders.Buffer = undefined

      const bytes = new Uint8Array([72, 101, 108, 108, 111])
      const toBase64Mock = vi.fn(() => 'SGVsbG8=')
      Object.defineProperty(bytes, 'toBase64', {
        value: toBase64Mock,
        configurable: true
      })

      expect(uint8ArrayToBase64(bytes)).toBe('SGVsbG8=')
      expect(toBase64Mock).toHaveBeenCalledTimes(1)
    })

    it('should fall back to globalThis.btoa when both Buffer and toBase64 are unavailable', () => {
      globalEncoders.Buffer = undefined

      const bytes = new Uint8Array([72, 101, 108, 108, 111])
      Object.defineProperty(bytes, 'toBase64', {
        value: undefined,
        configurable: true
      })

      const btoaSpy = vi.fn((binary: string) => originalBtoa!(binary))
      globalEncoders.btoa = btoaSpy

      expect(uint8ArrayToBase64(bytes)).toBe('SGVsbG8=')
      expect(btoaSpy).toHaveBeenCalledWith('Hello')
    })

    it('should chunk large buffers (> 32KB) properly in the btoa fallback without call stack overflow', () => {
      const size = 65536 // 64 KB (2 full chunks of 0x8000) + 1 extra byte
      const largeArray = new Uint8Array(size + 1)

      for (let index = 0; index < largeArray.length; index++) {
        largeArray[index] = index % 256
      }

      const expectedBase64 = originalBuffer!.from(
        largeArray.buffer,
        largeArray.byteOffset,
        largeArray.byteLength
      ).toString('base64')

      globalEncoders.Buffer = undefined
      Object.defineProperty(largeArray, 'toBase64', {
        value: undefined,
        configurable: true
      })

      expect(uint8ArrayToBase64(largeArray)).toBe(expectedBase64)
    })

    it('should return an empty string if neither Buffer, toBase64, nor btoa are available in the runtime', () => {
      globalEncoders.Buffer = undefined
      globalEncoders.btoa = undefined

      const bytes = new Uint8Array([72, 101, 108, 108, 111])
      Object.defineProperty(bytes, 'toBase64', {
        value: undefined,
        configurable: true
      })

      expect(uint8ArrayToBase64(bytes)).toBe('')
    })
  })

  describe('Statefulness and input immutability', () => {
    it('should not mutate the input Uint8Array during encoding', () => {
      const bytes = new Uint8Array([10, 20, 30, 40])
      const snapshot = new Uint8Array(bytes)

      uint8ArrayToBase64(bytes)
      expect(bytes).toEqual(snapshot)
    })
  })
})
