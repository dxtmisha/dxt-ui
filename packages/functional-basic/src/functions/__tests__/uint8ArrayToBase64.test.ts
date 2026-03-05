import { describe, it, expect } from 'vitest'
import { uint8ArrayToBase64 } from '../uint8ArrayToBase64'

describe('uint8ArrayToBase64', () => {
  it('should convert Uint8Array to base64', () => {
    const bytes = new Uint8Array([72, 101, 108, 108, 111]) // "Hello"
    // btoa("Hello") -> "SGVsbG8="
    expect(uint8ArrayToBase64(bytes)).toBe('SGVsbG8=')
  })
})
