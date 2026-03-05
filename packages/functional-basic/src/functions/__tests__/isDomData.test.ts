// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { isDomData } from '../isDomData'

describe('isDomData', () => {
  let originalLocation: Location

  beforeEach(() => {
    // Save the original location
    originalLocation = globalThis.location
  })

  afterEach(() => {
    // Restore original location
    globalThis.location = originalLocation
  })

  it('it should return true if location.href starts with "data":', () => {
    // Mock location
    delete (globalThis as any).location
    globalThis.location = { href: 'data:text/html,<html></html>' } as unknown as Location

    expect(isDomData()).toBe(true)
  })

  it('it should return false if location.href does not start with "data":', () => {
    // Mock location
    delete (globalThis as any).location
    globalThis.location = { href: 'http://localhost' } as unknown as Location

    expect(isDomData()).toBe(false)
  })

  it('should return false for secure origin urls that are not data urls', () => {
    delete (globalThis as any).location
    globalThis.location = { href: 'https://example.com' } as unknown as Location

    expect(isDomData()).toBe(false)
  })
})
