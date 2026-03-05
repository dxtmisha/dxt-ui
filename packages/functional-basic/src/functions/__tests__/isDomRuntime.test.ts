// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { isDomRuntime } from '../isDomRuntime'

describe('isDomRuntime', () => {
  let originalWindow: typeof window | undefined

  beforeEach(() => {
    // Save the original window if it exists (e.g. if we are somehow in jsdom already)
    originalWindow = globalThis.window
  })

  afterEach(() => {
    if (originalWindow !== undefined) {
      globalThis.window = originalWindow
    } else {
      delete (globalThis as any).window
    }
  })

  it('should return false when window is undefined (e.g., in typical Node.js)', () => {
    delete (globalThis as any).window
    expect(isDomRuntime()).toBe(false)
  })

  it('should return false when window is defined but window.document is undefined', () => {
    ; (globalThis as any).window = {}
    expect(isDomRuntime()).toBe(false)
  })

  it('should return true when both window and window.document are defined', () => {
    ; (globalThis as any).window = {
      document: {}
    }
    expect(isDomRuntime()).toBe(true)
  })
})
