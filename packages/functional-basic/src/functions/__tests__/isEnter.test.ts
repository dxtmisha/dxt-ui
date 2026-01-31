import { describe, it, expect } from 'vitest'
import { isEnter } from '../isEnter'

describe('isEnter', () => {
  it('should return true for Enter code', () => {
    const event = { code: 'Enter' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true for Space code', () => {
    const event = { code: 'Space' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true for an Enter key', () => {
    const event = { key: 'Enter' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true for a Space key', () => {
    const event = { key: ' ' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true for Spacebar key', () => {
    const event = { key: 'Spacebar' } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true for Enter keyCode (13)', () => {
    const event = { keyCode: 13 } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return true for Space keyCode (32)', () => {
    const event = { keyCode: 32 } as KeyboardEvent
    expect(isEnter(event)).toBe(true)
  })

  it('should return false for other keys', () => {
    const event = { code: 'KeyA', key: 'a', keyCode: 65 } as KeyboardEvent
    expect(isEnter(event)).toBe(false)
  })

  it('should return false for an empty event', () => {
    const event = {} as KeyboardEvent
    expect(isEnter(event)).toBe(false)
  })
})
