// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { isMetaKey } from '../isMetaKey'

describe('isMetaKey', () => {
  it('should return true when event.metaKey is true', () => {
    const event = { metaKey: true } as KeyboardEvent
    expect(isMetaKey(event)).toBe(true)
  })

  it('should return true when event.altKey is true', () => {
    const event = { altKey: true } as KeyboardEvent
    expect(isMetaKey(event)).toBe(true)
  })

  it('should return true when event.ctrlKey is true', () => {
    const event = { ctrlKey: true } as KeyboardEvent
    expect(isMetaKey(event)).toBe(true)
  })

  it('should return false when metaKey, altKey, and ctrlKey are false or undefined', () => {
    const event = { metaKey: false, altKey: false, ctrlKey: false } as KeyboardEvent
    expect(isMetaKey(event)).toBe(false)
  })

  it('should return false for an empty event object', () => {
    const event = {} as KeyboardEvent
    expect(isMetaKey(event)).toBe(false)
  })
})
