import { describe, it, expect, beforeEach } from 'vitest'
import { CookieBlockInstance } from '../CookieBlockInstance'

describe('CookieBlockInstance', () => {
  let instance: CookieBlockInstance

  beforeEach(() => {
    instance = new CookieBlockInstance()
    // Reset the internal storage back to default before each test
    instance.set(false)
  })

  it('should return false by default', () => {
    expect(instance.get()).toBe(false)
  })

  it('should set block to true and return it', () => {
    instance.set(true)
    expect(instance.get()).toBe(true)
  })

  it('should update the block back to false', () => {
    instance.set(true)
    instance.set(false)
    expect(instance.get()).toBe(false)
  })
})
