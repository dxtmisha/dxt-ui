/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { blobToBase64 } from '../blobToBase64'

describe('blobToBase64', () => {
  const originalBuffer = (globalThis as any).Buffer

  afterEach(() => {
    vi.stubGlobal('Buffer', originalBuffer)
  })

  describe('Browser path (Uint8Array + btoa)', () => {
    it('should convert a Blob to a Data URL (default)', async () => {
      // Simulating browser where Buffer is not available
      vi.stubGlobal('Buffer', undefined)

      const text = 'hello world'
      const blob = new Blob([text], { type: 'text/plain' })
      const result = await blobToBase64(blob)

      expect(result).toBe('data:text/plain;base64,aGVsbG8gd29ybGQ=')
    })

    it('should return a raw base64 string when clean is true', async () => {
      vi.stubGlobal('Buffer', undefined)

      const text = 'hello'
      const blob = new Blob([text], { type: 'text/plain' })
      const result = await blobToBase64(blob, true)

      expect(result).toBe('aGVsbG8=')
    })

    it('should handle UTF-8 characters correctly', async () => {
      vi.stubGlobal('Buffer', undefined)

      const text = '👋'
      const blob = new Blob([text], { type: 'text/plain' })
      const result = await blobToBase64(blob, true)

      // 👋 in UTF-8 is F0 9F 91 8B
      // Hex to base64: 8J+Riw==
      expect(result).toBe('8J+Riw==')
    })
  })

  describe('Node.js path (Buffer)', () => {
    it('should use Buffer for conversion if available', async () => {
      // Mocking Buffer behavior for Node.js path
      const mockBuffer = {
        from: (arr: ArrayBuffer) => ({
          toString: (encoding: string) => {
            if (encoding === 'base64') {
              // Convert ArrayBuffer to base64 manually in the mock
              return btoa(String.fromCharCode(...new Uint8Array(arr)))
            }
            return ''
          }
        })
      }
      vi.stubGlobal('Buffer', mockBuffer)

      const text = 'node'
      const blob = new Blob([text], { type: 'text/plain' })
      const result = await blobToBase64(blob, true)

      expect(result).toBe('bm9kZQ==')
    })
  })

  describe('Edge cases', () => {
    it('should handle different MIME types', async () => {
      const blob = new Blob(['data'], { type: 'image/png' })
      const result = await blobToBase64(blob)
      expect(result).toBe('data:image/png;base64,ZGF0YQ==')
    })

    it('should handle empty blobs', async () => {
      const blob = new Blob([])
      const result = await blobToBase64(blob, true)
      expect(result).toBe('')
    })
  })
})
