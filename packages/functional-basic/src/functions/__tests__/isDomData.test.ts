// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { isDomData } from '../isDomData'

describe('isDomData', () => {
  let originalLocation: Location
  let originalWindow: typeof window

  beforeEach(() => {
    originalLocation = globalThis.location
    originalWindow = globalThis.window
  })

  afterEach(() => {
    globalThis.location = originalLocation
    globalThis.window = originalWindow
    vi.restoreAllMocks()
  })

  const mockLocationHref = (href: string) => {
    Reflect.deleteProperty(globalThis, 'location')
    globalThis.location = { href } as unknown as Location
  }

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true when location.href starts with "data:"', () => {
      mockLocationHref('data:text/html,<html></html>')
      expect(isDomData()).toBe(true)

      mockLocationHref('data:application/json;base64,eyJrZXkiOiJ2YWx1ZSJ9')
      expect(isDomData()).toBe(true)

      mockLocationHref('data:,Hello%2C%20World%21')
      expect(isDomData()).toBe(true)
    })

    it('should return false for standard HTTP and HTTPS origins', () => {
      mockLocationHref('http://localhost:3000')
      expect(isDomData()).toBe(false)

      mockLocationHref('https://example.com/path')
      expect(isDomData()).toBe(false)
    })
  })

  describe('Alternative URI schemes and substring edge cases', () => {
    it('should return false for non-data URI schemes (blob:, about:, file:)', () => {
      mockLocationHref('blob:https://example.com/550e8400-e29b-41d4-a716-446655440000')
      expect(isDomData()).toBe(false)

      mockLocationHref('about:blank')
      expect(isDomData()).toBe(false)

      mockLocationHref('file:///Users/test/index.html')
      expect(isDomData()).toBe(false)
    })

    it('should return false when "data:" appears in the query string or hash rather than at the start', () => {
      mockLocationHref('https://example.com/?redirect=data:text/html,test')
      expect(isDomData()).toBe(false)

      mockLocationHref('https://example.com/#data:text/plain,hash')
      expect(isDomData()).toBe(false)
    })

    it('should return false for empty href or uppercase "DATA:" prefix', () => {
      mockLocationHref('')
      expect(isDomData()).toBe(false)

      mockLocationHref('DATA:text/html,<html></html>')
      expect(isDomData()).toBe(false)
    })
  })

  describe('SSR safety and non-DOM environments', () => {
    it('should return false when window is undefined (SSR environment)', () => {
      mockLocationHref('data:text/html,<html></html>')
      Reflect.deleteProperty(globalThis, 'window')

      expect(isDomData()).toBe(false)
    })

    it('should return false when window.document is undefined', () => {
      mockLocationHref('data:text/html,<html></html>')
      globalThis.window = {} as unknown as Window & typeof globalThis

      expect(isDomData()).toBe(false)
    })
  })
})
