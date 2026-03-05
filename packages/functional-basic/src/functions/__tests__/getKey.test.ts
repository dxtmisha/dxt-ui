import { describe, it, expect } from 'vitest'
import { getKey } from '../getKey'

describe('getKey', () => {
  it('should return event.key if available', () => {
    const event = { key: 'Enter', code: 'Enter', keyCode: 13 } as KeyboardEvent
    expect(getKey(event)).toBe('Enter')
  })

  it('should fallback to event.code if event.key is missing', () => {
    const event = { key: undefined, code: 'Escape', keyCode: 27 } as unknown as KeyboardEvent
    expect(getKey(event)).toBe('Escape')
  })

  it('should fallback to event.keyCode stringified if key and code are missing', () => {
    const event = { key: undefined, code: undefined, keyCode: 65 } as unknown as KeyboardEvent
    expect(getKey(event)).toBe('65')
  })

  it('should return undefined if none of the properties exist', () => {
    const event = {} as KeyboardEvent
    expect(getKey(event)).toBeUndefined()
  })
})
