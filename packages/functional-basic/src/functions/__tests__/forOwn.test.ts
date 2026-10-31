import { describe, it, expect, vi } from 'vitest'
import { forOwn } from '../forOwn'

describe('forOwn', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should iterate over own enumerable properties of an object', () => {
      const source = { a: 1, b: 2, c: 3 }
      const collected: Record<string, number> = {}

      const result = forOwn(source, (value, key) => {
        collected[key] = value
      })

      expect(collected).toEqual({ a: 1, b: 2, c: 3 })
      expect(result).toBeUndefined()
    })

    it('should support objects conforming to strict TypeScript interfaces without index signatures', () => {
      interface UserProfile {
        name: string
        age: number
        isActive: boolean
      }

      const user: UserProfile = {
        name: 'Alex',
        age: 30,
        isActive: true
      }

      const keys: string[] = []
      const values: unknown[] = []

      forOwn(user, (value, key) => {
        keys.push(key)
        values.push(value)
      })

      expect(keys).toEqual(['name', 'age', 'isActive'])
      expect(values).toEqual(['Alex', 30, true])
    })

    it('should pass value, key, and source collection to callback', () => {
      const source = { x: 'hello' }
      const callback = vi.fn()

      forOwn(source, callback)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith('hello', 'x', source)
    })
  })

  describe('Early termination (break on false)', () => {
    it('should stop iteration when callback returns false', () => {
      const source = { a: 1, b: 2, c: 3, d: 4 }
      const visitedKeys: string[] = []

      forOwn(source, (value, key) => {
        visitedKeys.push(key)
        if (value === 2) {
          return false
        }
        return undefined
      })

      expect(visitedKeys).toEqual(['a', 'b'])
    })

    it('should continue iteration when callback returns truthy or undefined', () => {
      const source = { a: 1, b: 2, c: 3 }
      const visitedKeys: string[] = []

      forOwn(source, (_value, key) => {
        visitedKeys.push(key)
        return true
      })

      expect(visitedKeys).toEqual(['a', 'b', 'c'])
    })
  })

  describe('Prototype pollution and prototype chain security', () => {
    it('should skip __proto__, constructor, and prototype keys', () => {
      const source = {
        validKey: 'safe',
        __proto__: { polluted: true },
        constructor: 'fake-constructor',
        prototype: 'fake-prototype'
      }
      const visitedKeys: string[] = []

      forOwn(source, (_value, key) => {
        visitedKeys.push(key)
      })

      expect(visitedKeys).toEqual(['validKey'])
      expect(visitedKeys).not.toContain('__proto__')
      expect(visitedKeys).not.toContain('constructor')
      expect(visitedKeys).not.toContain('prototype')
    })

    it('should skip inherited properties from the prototype chain', () => {
      const proto = { inheritedProp: 'from-proto' }
      const source = Object.create(proto)
      source.ownProp = 'own-value'

      const visitedKeys: string[] = []

      forOwn(source, (_value, key) => {
        visitedKeys.push(key)
      })

      expect(visitedKeys).toEqual(['ownProp'])
      expect(visitedKeys).not.toContain('inheritedProp')
    })
  })

  describe('Empty, nullish, and primitive inputs', () => {
    it('should safely handle empty objects without calling callback', () => {
      const callback = vi.fn()
      const result = forOwn({}, callback)

      expect(callback).not.toHaveBeenCalled()
      expect(result).toBeUndefined()
    })

    it('should return undefined when passed null or undefined', () => {
      const callback = vi.fn()

      expect(forOwn(null, callback)).toBeUndefined()
      expect(forOwn(undefined, callback)).toBeUndefined()
      expect(callback).not.toHaveBeenCalled()
    })

    it('should safely handle omitted or undefined callback', () => {
      expect(forOwn({ a: 1 })).toBeUndefined()
      expect(forOwn({ a: 1 }, undefined)).toBeUndefined()
    })

    it('should safely handle primitive non-object values without crashing', () => {
      const callback = vi.fn()

      expect(forOwn(123 as unknown as Record<string, unknown>, callback)).toBeUndefined()
      expect(forOwn('string' as unknown as Record<string, unknown>, callback)).toBeUndefined()
      expect(forOwn(true as unknown as Record<string, unknown>, callback)).toBeUndefined()

      expect(callback).not.toHaveBeenCalled()
    })
  })

  describe('Unicode and non-standard keys', () => {
    it('should handle Cyrillic, Vietnamese, and Emoji keys', () => {
      const source = {
        'ключ': 'значение',
        'tiêu_đề': 'nội dung',
        '🚀': 'rocket'
      }
      const collected: Record<string, string> = {}

      forOwn(source, (value, key) => {
        collected[key] = value
      })

      expect(collected).toEqual({
        'ключ': 'значение',
        'tiêu_đề': 'nội dung',
        '🚀': 'rocket'
      })
    })

    it('should support numeric string keys', () => {
      const source = { 0: 'zero', 100: 'hundred' }
      const collected: Record<string, string> = {}

      forOwn(source, (value, key) => {
        collected[key] = value
      })

      expect(collected).toEqual({ 0: 'zero', 100: 'hundred' })
    })
  })
})
