// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { isDomRuntime } from '../isDomRuntime'

describe('isDomRuntime', () => {
  let originalWindow: typeof window | undefined

  beforeEach(() => {
    originalWindow = globalThis.window
  })

  afterEach(() => {
    if (originalWindow !== undefined) {
      globalThis.window = originalWindow
    } else {
      Reflect.deleteProperty(globalThis, 'window')
    }
  })

  describe('Standard functional requirements (Browser vs SSR)', () => {
    it('should return true when both window and window.document are defined', () => {
      globalThis.window = {
        document: {}
      } as unknown as Window & typeof globalThis

      expect(isDomRuntime()).toBe(true)
    })

    it('should return false when window is undefined (Node.js / SSR environment)', () => {
      Reflect.deleteProperty(globalThis, 'window')
      expect(isDomRuntime()).toBe(false)
    })
  })

  describe('Partial and non-standard global window environments', () => {
    it('should return false when window is defined as an empty object without document', () => {
      globalThis.window = {} as unknown as Window & typeof globalThis
      expect(isDomRuntime()).toBe(false)
    })

    it('should return false when window.document is null or undefined', () => {
      globalThis.window = {
        document: undefined
      } as unknown as Window & typeof globalThis
      expect(isDomRuntime()).toBe(false)

      globalThis.window = {
        document: null
      } as unknown as Window & typeof globalThis
      expect(isDomRuntime()).toBe(false)
    })

    it('should return false when window.document is a falsy primitive (false, 0, empty string)', () => {
      globalThis.window = {
        document: false
      } as unknown as Window & typeof globalThis
      expect(isDomRuntime()).toBe(false)

      globalThis.window = {
        document: 0
      } as unknown as Window & typeof globalThis
      expect(isDomRuntime()).toBe(false)

      globalThis.window = {
        document: ''
      } as unknown as Window & typeof globalThis
      expect(isDomRuntime()).toBe(false)
    })
  })

  describe('Purity, determinism, and idempotency', () => {
    it('should return consistent results across multiple consecutive invocations', () => {
      globalThis.window = {
        document: {}
      } as unknown as Window & typeof globalThis

      expect(isDomRuntime()).toBe(true)
      expect(isDomRuntime()).toBe(true)
      expect(isDomRuntime()).toBe(true)
    })

    it('should safely identify Web Worker environments (where self exists but window does not)', () => {
      Reflect.deleteProperty(globalThis, 'window')
      expect(isDomRuntime()).toBe(false)
    })
  })
})
