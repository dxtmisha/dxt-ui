import { describe, it, expect } from 'vitest'
import { getKey } from '../getKey'

describe('getKey', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return event.key when available', () => {
      const event = { key: 'Enter', code: 'Enter', keyCode: 13 } as KeyboardEvent
      expect(getKey(event)).toBe('Enter')
    })

    it('should prioritize event.key over event.code and event.keyCode', () => {
      const event = { key: 'a', code: 'KeyA', keyCode: 65 } as KeyboardEvent
      expect(getKey(event)).toBe('a')
    })

    it('should fallback to event.code when event.key is undefined or null', () => {
      const undefinedKeyEvent = { key: undefined, code: 'Escape', keyCode: 27 } as unknown as KeyboardEvent
      expect(getKey(undefinedKeyEvent)).toBe('Escape')

      const nullKeyEvent = { key: null, code: 'Space', keyCode: 32 } as unknown as KeyboardEvent
      expect(getKey(nullKeyEvent)).toBe('Space')
    })

    it('should fallback to stringified event.keyCode when both key and code are missing', () => {
      const undefinedKeyAndCode = { key: undefined, code: undefined, keyCode: 65 } as unknown as KeyboardEvent
      expect(getKey(undefinedKeyAndCode)).toBe('65')

      const nullKeyAndCode = { key: null, code: null, keyCode: 13 } as unknown as KeyboardEvent
      expect(getKey(nullKeyAndCode)).toBe('13')
    })
  })

  describe('Boundary values and nullish coalescing semantics', () => {
    it('should return empty string when event.key is an empty string without falling back to code', () => {
      const event = { key: '', code: 'Space', keyCode: 32 } as KeyboardEvent
      expect(getKey(event)).toBe('')
    })

    it('should return empty string when event.key is undefined and event.code is an empty string', () => {
      const event = { key: undefined, code: '', keyCode: 32 } as unknown as KeyboardEvent
      expect(getKey(event)).toBe('')
    })

    it('should return "0" when event.keyCode is 0 and key/code are missing', () => {
      const event = { key: undefined, code: undefined, keyCode: 0 } as unknown as KeyboardEvent
      expect(getKey(event)).toBe('0')
    })

    it('should return single space character when space key is pressed', () => {
      const event = { key: ' ', code: 'Space', keyCode: 32 } as KeyboardEvent
      expect(getKey(event)).toBe(' ')
    })
  })

  describe('Empty and nullish inputs', () => {
    it('should return undefined if none of the properties exist on the event', () => {
      const event = {} as KeyboardEvent
      expect(getKey(event)).toBeUndefined()
    })

    it('should return undefined when all key properties are explicitly undefined or null', () => {
      const event = { key: undefined, code: undefined, keyCode: undefined } as unknown as KeyboardEvent
      expect(getKey(event)).toBeUndefined()

      const nullPropertiesEvent = { key: null, code: null, keyCode: null } as unknown as KeyboardEvent
      expect(getKey(nullPropertiesEvent)).toBeUndefined()
    })

    it('should safely return undefined when event is null or undefined at runtime', () => {
      expect(getKey(null as unknown as KeyboardEvent)).toBeUndefined()
      expect(getKey(undefined as unknown as KeyboardEvent)).toBeUndefined()
    })
  })

  describe('Multilingual, Unicode, and special keys', () => {
    it('should handle Cyrillic, Vietnamese, CJK, and Emoji key values', () => {
      expect(getKey({ key: 'й', code: 'KeyQ' } as KeyboardEvent)).toBe('й')
      expect(getKey({ key: 'đ', code: 'KeyD' } as KeyboardEvent)).toBe('đ')
      expect(getKey({ key: 'あ', code: 'KeyA' } as KeyboardEvent)).toBe('あ')
      expect(getKey({ key: '🚀', code: '' } as KeyboardEvent)).toBe('🚀')
    })

    it('should handle function keys and navigation keys', () => {
      expect(getKey({ key: 'F12', code: 'F12', keyCode: 123 } as KeyboardEvent)).toBe('F12')
      expect(getKey({ key: 'ArrowDown', code: 'ArrowDown', keyCode: 40 } as KeyboardEvent)).toBe('ArrowDown')
      expect(getKey({ key: 'Unidentified', code: '', keyCode: 229 } as KeyboardEvent)).toBe('Unidentified')
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input KeyboardEvent object', () => {
      const event = { key: 'Tab', code: 'Tab', keyCode: 9 } as KeyboardEvent
      getKey(event)
      expect(event).toEqual({ key: 'Tab', code: 'Tab', keyCode: 9 })
    })
  })
})
