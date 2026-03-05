// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { isDomRuntime } from '../isDomRuntime'

describe('isDomRuntime', () => {
  let originalWindow: typeof window | undefined

  beforeEach(() => {
    // Save original window if it exists (e.g. if we are somehow in jsdom already)
    originalWindow = global.window
  })

  afterEach(() => {
    if (originalWindow !== undefined) {
      global.window = originalWindow
    } else {
      delete (global as any).window
    }
  })

  it('should return false when window is undefined (e.g., in typical Node.js)', () => {
    delete (global as any).window
    expect(isDomRuntime()).toBe(false)
  })

  it('should return false when window is defined but window.document is undefined', () => {
    ; (global as any).window = {}
    expect(isDomRuntime()).toBe(false)
  })

  it('should return true when both window and window.document are defined', () => {
    ; (global as any).window = {
      document: {}
    }
    expect(isDomRuntime()).toBe(true)
  })
})
