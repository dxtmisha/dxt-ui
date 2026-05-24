// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { isTab } from '../isTab'

describe('isTab', () => {
  it('should return true when event.code is "Tab"', () => {
    const event = { code: 'Tab' } as KeyboardEvent
    expect(isTab(event)).toBe(true)
  })

  it('should return true when event.key is "Tab"', () => {
    const event = { key: 'Tab' } as KeyboardEvent
    expect(isTab(event)).toBe(true)
  })

  it('should return true when event.keyCode is 9', () => {
    const event = { keyCode: 9 } as KeyboardEvent
    expect(isTab(event)).toBe(true)
  })

  it('should return false for other keys (e.g., "Enter")', () => {
    const event = { code: 'Enter', key: 'Enter', keyCode: 13 } as KeyboardEvent
    expect(isTab(event)).toBe(false)
  })

  it('should return false for an empty event object', () => {
    const event = {} as KeyboardEvent
    expect(isTab(event)).toBe(false)
  })
})
