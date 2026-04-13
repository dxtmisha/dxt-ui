/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { blobToBase64 } from '../blobToBase64'

describe('blobToBase64', () => {
  beforeEach(() => {
    vi.stubGlobal('window', undefined)
    vi.stubGlobal('document', undefined)
    vi.stubGlobal('Buffer', undefined)
  })

  describe('DOM Environment (FileReader)', () => {
    beforeEach(() => {
      // Simulate DOM runtime
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', class {
        onloadend: () => void = () => {}
        onerror: () => void = () => {}
        result: string | null = null
        readAsDataURL(_: Blob) {
          // Simulate the result
          setTimeout(() => {
            this.result = 'data:text/plain;base64,aGVsbG8='
            if (this.onloadend) this.onloadend()
          }, 0)
        }
      })
    })

    it('should convert Blob using FileReader if DOM is available', async () => {
      const blob = new Blob(['hello'], { type: 'text/plain' })
      const result = await blobToBase64(blob)
      expect(result).toBe('data:text/plain;base64,aGVsbG8=')
    })

    it('should return clean base64 if clean: true', async () => {
      const blob = new Blob(['hello'], { type: 'text/plain' })
      const result = await blobToBase64(blob, true)
      expect(result).toBe('aGVsbG8=')
    })
  })

  describe('SSR Environment (Buffer)', () => {
    beforeEach(() => {
      // Logic for SSR: isDomRuntime is false, isBuffer is true
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (_: ArrayBuffer) => ({
          toString: (enc: string) => {
            if (enc === 'base64') return 'bm9kZQ=='
            return ''
          }
        })
      })
    })

    it('should convert Blob using Buffer if Buffer is available and DOM is not', async () => {
      const blob = new Blob(['node'], { type: 'text/plain' })
      // mocking arrayBuffer for the blob since we are in a stubbed env
      blob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(4))

      const result = await blobToBase64(blob, true)
      expect(result).toBe('bm9kZQ==')
    })
  })

  describe('Empty Environment', () => {
    it('should return undefined if neither DOM nor Buffer is available', async () => {
      const blob = new Blob(['test'], { type: 'text/plain' })
      const result = await blobToBase64(blob)
      expect(result).toBeUndefined()
    })
  })

  describe('Edge Cases', () => {
    it('should include the MIME type in the default output', async () => {
      // Mock DOM for this test
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', class {
        onloadend: () => void = () => {}
        result = 'data:image/png;base64,cG5n'
        readAsDataURL() { setTimeout(() => this.onloadend(), 0) }
      })

      const blob = new Blob(['png'], { type: 'image/png' })
      const result = await blobToBase64(blob)
      expect(result).toBe('data:image/png;base64,cG5n')
    })
  })
})
