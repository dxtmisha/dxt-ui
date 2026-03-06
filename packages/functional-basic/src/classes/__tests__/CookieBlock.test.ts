import { describe, it, expect, beforeEach } from 'vitest'
import { CookieBlock } from '../CookieBlock'

describe('CookieBlock', () => {
  beforeEach(() => {
    // Reset the internal storage back to default before each test
    CookieBlock.set(false)
  })

  it('should return false by default', () => {
    expect(CookieBlock.get()).toBe(false)
  })

  it('should set block to true and return it', () => {
    CookieBlock.set(true)
    expect(CookieBlock.get()).toBe(true)
  })

  it('should update the block back to false', () => {
    CookieBlock.set(true)
    CookieBlock.set(false)
    expect(CookieBlock.get()).toBe(false)
  })
})
