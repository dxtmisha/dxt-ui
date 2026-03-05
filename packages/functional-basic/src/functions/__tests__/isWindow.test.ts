// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { isWindow } from '../isWindow'
import * as isDomRuntimeModule from '../isDomRuntime'

describe('isWindow', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
  })

  it('should return true if the element is exactly the global window object', () => {
    expect(isWindow(window)).toBe(true)
  })

  it('should return false if the element is not the window object', () => {
    const div = document.createElement('div')
    expect(isWindow(div)).toBe(false)
    expect(isWindow(document)).toBe(false)
    expect(isWindow({})).toBe(false)
    expect(isWindow(null)).toBe(false)
  })

  it('should return false if not in a DOM runtime environment', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    expect(isWindow(window)).toBe(false)
  })
})
