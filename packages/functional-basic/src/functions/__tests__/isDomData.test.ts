// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { isDomData } from '../isDomData'

describe('isDomData', () => {
  let originalLocation: Location

  beforeEach(() => {
    // Save original location
    originalLocation = global.location
  })

  afterEach(() => {
    // Restore original location
    global.location = originalLocation
  })

  it('should return true if location.href starts with "data:"', () => {
    // Mock location
    delete (global as any).location
    global.location = { href: 'data:text/html,<html></html>' } as unknown as Location

    expect(isDomData()).toBe(true)
  })

  it('should return false if location.href does not start with "data:"', () => {
    // Mock location
    delete (global as any).location
    global.location = { href: 'http://localhost' } as unknown as Location

    expect(isDomData()).toBe(false)
  })

  it('should return false for secure origin urls that are not data urls', () => {
    delete (global as any).location
    global.location = { href: 'https://example.com' } as unknown as Location

    expect(isDomData()).toBe(false)
  })
})
