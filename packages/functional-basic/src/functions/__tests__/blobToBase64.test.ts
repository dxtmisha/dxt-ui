import { describe, it, expect, vi } from 'vitest'
/**
 * @vitest-environment jsdom
 */
import { blobToBase64 } from '../blobToBase64'

describe('blobToBase64', () => {
  it('should convert a Blob to a Data URL (default)', async () => {
    const text = 'hello world'
    const blob = new Blob([text], { type: 'text/plain' })
    const result = await blobToBase64(blob)

    expect(result).toBe('data:text/plain;base64,aGVsbG8gd29ybGQ=')
  })

  it('should convert a Blob to a raw base64 string when clean is true', async () => {
    const text = 'hello world'
    const blob = new Blob([text], { type: 'text/plain' })
    const result = await blobToBase64(blob, true)

    expect(result).toBe('aGVsbG8gd29ybGQ=')
  })

  it('should convert an empty Blob to a base64 string', async () => {
    const blob = new Blob([])
    const result = await blobToBase64(blob)

    expect(typeof result).toBe('string')
    expect((result as string).includes('base64,')).toBe(true)
  })

  it('should return null if FileReader is undefined (SSR scenario)', async () => {
    const originalFileReader = globalThis.FileReader

    vi.stubGlobal('FileReader', undefined)

    try {
      const blob = new Blob(['test'])
      const result = await blobToBase64(blob)
      expect(result).toBeNull()
    } finally {
      vi.stubGlobal('FileReader', originalFileReader)
    }
  })
})
