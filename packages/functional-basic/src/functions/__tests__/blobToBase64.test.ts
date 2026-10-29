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
    vi.stubGlobal('FileReader', undefined)
  })

  describe('Standard functional requirements (Happy path)', () => {
    describe('DOM Environment (FileReader)', () => {
      beforeEach(() => {
        vi.stubGlobal('window', { document: {} })
        vi.stubGlobal('document', {})
        vi.stubGlobal('FileReader', class {
          onloadend: (() => void) | null = null
          onerror: (() => void) | null = null
          result: string | null = null

          readAsDataURL(blob: Blob) {
            setTimeout(() => {
              const mime = blob.type || 'application/octet-stream'
              this.result = `data:${mime};base64,aGVsbG8=`
              if (this.onloadend) this.onloadend()
            }, 0)
          }
        })
      })

      it('should convert Blob to full Data URL by default (clean = false)', async () => {
        const blob = new Blob(['hello'], { type: 'text/plain' })
        const result = await blobToBase64(blob)
        expect(result).toBe('data:text/plain;base64,aGVsbG8=')
      })

      it('should return clean base64 string when clean = true', async () => {
        const blob = new Blob(['hello'], { type: 'text/plain' })
        const result = await blobToBase64(blob, true)
        expect(result).toBe('aGVsbG8=')
      })

      it('should preserve diverse MIME types correctly', async () => {
        const pngBlob = new Blob(['png-data'], { type: 'image/png' })
        const pdfBlob = new Blob(['pdf-data'], { type: 'application/pdf' })

        expect(await blobToBase64(pngBlob)).toBe('data:image/png;base64,aGVsbG8=')
        expect(await blobToBase64(pdfBlob)).toBe('data:application/pdf;base64,aGVsbG8=')
      })
    })

    describe('SSR Environment (Buffer)', () => {
      beforeEach(() => {
        vi.stubGlobal('window', undefined)
        vi.stubGlobal('document', undefined)
        vi.stubGlobal('Buffer', {
          from: (_: ArrayBuffer) => ({
            toString: (encoding: string) => (encoding === 'base64' ? 'bm9kZURhdGE=' : '')
          })
        })
      })

      it('should convert Blob using Buffer with clean = false', async () => {
        const blob = new Blob(['node'], { type: 'image/jpeg' })
        blob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(4))

        const result = await blobToBase64(blob, false)
        expect(result).toBe('data:image/jpeg;base64,bm9kZURhdGE=')
      })

      it('should convert Blob using Buffer with clean = true', async () => {
        const blob = new Blob(['node'], { type: 'image/jpeg' })
        blob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(4))

        const result = await blobToBase64(blob, true)
        expect(result).toBe('bm9kZURhdGE=')
      })

      it('should handle Blob with empty MIME type string in SSR', async () => {
        const blob = new Blob(['raw'])
        blob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(3))

        const result = await blobToBase64(blob, false)
        expect(result).toBe('data:;base64,bm9kZURhdGE=')
      })
    })
  })

  describe('Empty, whitespace-only, and nullish inputs (Empty payload guard)', () => {
    it('should return undefined for an empty Blob (new Blob([])) in DOM environment', async () => {
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', class {
        onloadend: (() => void) | null = null
        result = 'data:application/octet-stream;base64,'
        readAsDataURL() {
          setTimeout(() => {
            if (this.onloadend) this.onloadend()
          }, 0)
        }
      })

      const emptyBlob = new Blob([])
      const result = await blobToBase64(emptyBlob)
      expect(result).toBeUndefined()
    })

    it('should return undefined for an empty Blob in SSR environment', async () => {
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (_: ArrayBuffer) => ({
          toString: () => ''
        })
      })

      const emptyBlob = new Blob([])
      emptyBlob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(0))

      const result = await blobToBase64(emptyBlob)
      expect(result).toBeUndefined()
    })

    it('should return undefined for an empty string Blob (new Blob([""]))', async () => {
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', class {
        onloadend: (() => void) | null = null
        result = 'data:text/plain;base64,'
        readAsDataURL() {
          setTimeout(() => {
            if (this.onloadend) this.onloadend()
          }, 0)
        }
      })

      const emptyStringBlob = new Blob([''], { type: 'text/plain' })
      const result = await blobToBase64(emptyStringBlob)
      expect(result).toBeUndefined()
    })

    it('should return undefined for a zero-byte slice of a Blob', async () => {
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', class {
        onloadend: (() => void) | null = null
        result = 'data:text/plain;base64,'
        readAsDataURL() {
          setTimeout(() => {
            if (this.onloadend) this.onloadend()
          }, 0)
        }
      })

      const sourceBlob = new Blob(['sample-data'], { type: 'text/plain' })
      const slicedBlob = sourceBlob.slice(0, 0)
      const result = await blobToBase64(slicedBlob)
      expect(result).toBeUndefined()
    })

    it('should safely return undefined when null or undefined is passed instead of a Blob', async () => {
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (_: ArrayBuffer) => ({
          toString: () => 'data'
        })
      })

      expect(await blobToBase64(null)).toBeUndefined()
      expect(await blobToBase64(undefined)).toBeUndefined()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should accurately encode Cyrillic text content', async () => {
      const cyrillicExpected = '0J/RgNC40LLQtdGCINCc0LjRgA=='
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (_: ArrayBuffer) => ({
          toString: (encoding: string) => (encoding === 'base64' ? cyrillicExpected : '')
        })
      })

      const blob = new Blob(['Привет Мир'], { type: 'text/plain;charset=utf-8' })
      blob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(10))

      const result = await blobToBase64(blob, true)
      expect(result).toBe(cyrillicExpected)
    })

    it('should accurately encode Vietnamese diacritics', async () => {
      const vietnameseExpected = 'SOG7jWMgdGnhur9uZyBWaeG7h3Q='
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (_: ArrayBuffer) => ({
          toString: (encoding: string) => (encoding === 'base64' ? vietnameseExpected : '')
        })
      })

      const blob = new Blob(['Học tiếng Việt'], { type: 'text/plain;charset=utf-8' })
      blob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(15))

      const result = await blobToBase64(blob, true)
      expect(result).toBe(vietnameseExpected)
    })

    it('should accurately encode multibyte Emoji characters', async () => {
      const emojiExpected = '8J+agCDwn5SlIOKcqA=='
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (_: ArrayBuffer) => ({
          toString: (encoding: string) => (encoding === 'base64' ? emojiExpected : '')
        })
      })

      const blob = new Blob(['🚀 🔥 ✨'], { type: 'text/plain;charset=utf-8' })
      blob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(12))

      const result = await blobToBase64(blob, true)
      expect(result).toBe(emojiExpected)
    })

    it('should accurately encode raw binary byte array', async () => {
      const binaryExpected = 'AAEB/w=='
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (_: ArrayBuffer) => ({
          toString: (encoding: string) => (encoding === 'base64' ? binaryExpected : '')
        })
      })

      const binaryData = new Uint8Array([0x00, 0x01, 0x01, 0xff])
      const blob = new Blob([binaryData], { type: 'application/octet-stream' })
      blob.arrayBuffer = vi.fn().mockResolvedValue(binaryData.buffer)

      const result = await blobToBase64(blob, true)
      expect(result).toBe(binaryExpected)
    })
  })

  describe('Error handling, missing environments, and safety', () => {
    it('should safely return undefined if neither DOM nor Buffer is available', async () => {
      const blob = new Blob(['test'], { type: 'text/plain' })
      const result = await blobToBase64(blob)
      expect(result).toBeUndefined()
    })

    it('should return undefined when FileReader triggers onerror without throwing', async () => {
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', class {
        onerror: (() => void) | null = null
        readAsDataURL() {
          setTimeout(() => {
            if (this.onerror) this.onerror()
          }, 0)
        }
      })

      const blob = new Blob(['fail'])
      const result = await blobToBase64(blob)
      expect(result).toBeUndefined()
    })

    it('should return undefined when FileReader returns a non-string result', async () => {
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', class {
        onloadend: (() => void) | null = null
        result = null
        readAsDataURL() {
          setTimeout(() => {
            if (this.onloadend) this.onloadend()
          }, 0)
        }
      })

      const blob = new Blob(['test'])
      const result = await blobToBase64(blob)
      expect(result).toBeUndefined()
    })

    it('should return undefined when FileReader is missing in DOM environment', async () => {
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', undefined)

      const blob = new Blob(['no-reader'])
      const result = await blobToBase64(blob)
      expect(result).toBeUndefined()
    })

    it('should return undefined when arrayBuffer() rejects in SSR environment', async () => {
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (_: ArrayBuffer) => ({
          toString: () => 'data'
        })
      })

      const blob = new Blob(['error'])
      blob.arrayBuffer = vi.fn().mockRejectedValue(new Error('ArrayBuffer read failure'))

      const result = await blobToBase64(blob)
      expect(result).toBeUndefined()
    })

    it('should return undefined if readAsDataURL throws a synchronous exception', async () => {
      vi.stubGlobal('window', { document: {} })
      vi.stubGlobal('FileReader', class {
        readAsDataURL() {
          throw new Error('Immediate hardware failure')
        }
      })

      const blob = new Blob(['sync-error'])
      const result = await blobToBase64(blob)
      expect(result).toBeUndefined()
    })
  })

  describe('Statefulness and concurrency isolation', () => {
    it('should execute sequential calls independently without cross-talk', async () => {
      vi.stubGlobal('window', { document: {} })
      let counter = 0
      vi.stubGlobal('FileReader', class {
        onloadend: (() => void) | null = null
        result = ''
        readAsDataURL() {
          counter++
          this.result = `data:text/plain;base64,Y2FsbA==${counter}`
          setTimeout(() => {
            if (this.onloadend) this.onloadend()
          }, 0)
        }
      })

      const firstBlob = new Blob(['first'])
      const secondBlob = new Blob(['second'])

      const firstResult = await blobToBase64(firstBlob, true)
      const secondResult = await blobToBase64(secondBlob, true)

      expect(firstResult).toBe('Y2FsbA==1')
      expect(secondResult).toBe('Y2FsbA==2')
    })

    it('should safely process concurrent Promise.all calls without interference', async () => {
      vi.stubGlobal('window', undefined)
      vi.stubGlobal('Buffer', {
        from: (buffer: ArrayBuffer) => ({
          toString: () => `base64_${buffer.byteLength}`
        })
      })

      const blobs = [
        new Blob(['a']),
        new Blob(['bb']),
        new Blob(['ccc'])
      ]
      blobs.forEach((blob, index) => {
        blob.arrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(index + 1))
      })

      const results = await Promise.all(blobs.map(blob => blobToBase64(blob, true)))

      expect(results).toEqual(['base64_1', 'base64_2', 'base64_3'])
    })
  })
})
