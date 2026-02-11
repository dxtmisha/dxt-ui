// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { isEnter } from '../isEnter'

describe('isEnter', () => {
  it('should return true when event.code is "Enter"', () => {
    const event = { code: 'Enter' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true when event.code is "Space"', () => {
    const event = { code: 'Space' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true when event.key is "Enter"', () => {
    const event = { key: 'Enter' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true when event.key is " " (Space)', () => {
    const event = { key: ' ' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true when event.key is "Spacebar"', () => {
    const event = { key: 'Spacebar' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true when event.keyCode is 13 (Enter)', () => {
    const event = { keyCode: 13 } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true when event.keyCode is 32 (Space)', () => {
    const event = { keyCode: 32 } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return false for other keys (e.g., "KeyA")', () => {
    const event = { code: 'KeyA', key: 'a', keyCode: 65 } as KeyboardEvent
    expect(isEnter(event)).toBe(false)
  })

  it('should return false for an empty event object', () => {
    const event = {} as KeyboardEvent
    expect(isEnter(event)).toBe(false)
  })
})
