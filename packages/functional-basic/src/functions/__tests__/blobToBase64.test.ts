import { describe, it, expect } from 'vitest'
/**
 * @vitest-environment jsdom
 */
import { blobToBase64 } from '../blobToBase64'

describe('blobToBase64', () => {
  it('should convert a Blob to a base64 string', async () => {
    const text = 'hello world'
    const blob = new Blob([text], { type: 'text/plain' })
    const result = await blobToBase64(blob)

    expect(result).toBe('data:text/plain;base64,aGVsbG8gd29ybGQ=') // "hello world" encoded in base64
  })

  it('should convert an empty Blob to a base64 string', async () => {
    const blob = new Blob([])
    const result = await blobToBase64(blob)

    // An empty blob without type results in 'data:application/octet-stream;base64,'
    // or just 'data:;base64,' depending on the environment.
    // In most jsdom/happy-dom environments, it gives 'data:;base64,' or similar.
    expect(typeof result).toBe('string')
    expect((result as string).includes('base64,')).toBe(true)
  })
})
