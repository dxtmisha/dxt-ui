import { describe, expect, it } from 'vitest'
import { getColumn } from '../getColumn'

interface UserRecord {
  id: number
  name?: string
  age?: number
}

describe('getColumn', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return an array of values for the specified column from an array of objects', () => {
      const users: UserRecord[] = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
      ]

      expect(getColumn(users, 'name')).toEqual(['Alice', 'Bob', 'Charlie'])
      expect(getColumn(users, 'id')).toEqual([1, 2, 3])
    })

    it('should return undefined for missing properties in partial objects', () => {
      const users: UserRecord[] = [
        { id: 1, name: 'Alice' },
        { id: 2 },
        { id: 3, name: 'Charlie' }
      ]

      expect(getColumn(users, 'name')).toEqual(['Alice', undefined, 'Charlie'])
    })

    it('should extract column values from a dictionary object (Record<string, T>)', () => {
      const usersByKey: Record<string, { name: string, role: string }> = {
        user1: { name: 'Alice', role: 'admin' },
        user2: { name: 'Bob', role: 'user' }
      }

      expect(getColumn(usersByKey, 'name')).toEqual(['Alice', 'Bob'])
      expect(getColumn(usersByKey, 'role')).toEqual(['admin', 'user'])
    })

    it('should work with readonly arrays and readonly object properties', () => {
      const readonlyItems: readonly { readonly id: number, readonly title: string }[] = [
        { id: 101, title: 'Item 1' },
        { id: 102, title: 'Item 2' }
      ]

      expect(getColumn(readonlyItems, 'title')).toEqual(['Item 1', 'Item 2'])
    })
  })

  describe('Preservation of falsy and special values (0, false, "", null, undefined, NaN)', () => {
    it('should preserve numeric zero (0) and negative numbers without dropping them', () => {
      const items = [
        { id: 0, balance: 0 },
        { id: 1, balance: -50 },
        { id: 2, balance: 0 }
      ]

      expect(getColumn(items, 'id')).toEqual([0, 1, 2])
      expect(getColumn(items, 'balance')).toEqual([0, -50, 0])
    })

    it('should preserve boolean values including false', () => {
      const tasks = [
        { name: 'task1', completed: false },
        { name: 'task2', completed: true },
        { name: 'task3', completed: false }
      ]

      expect(getColumn(tasks, 'completed')).toEqual([false, true, false])
    })

    it('should preserve empty strings ("") and whitespace strings', () => {
      const comments = [
        { id: 1, text: '' },
        { id: 2, text: '   ' },
        { id: 3, text: 'valid' }
      ]

      expect(getColumn(comments, 'text')).toEqual(['', '   ', 'valid'])
    })

    it('should preserve explicit null and undefined property values', () => {
      const nodes = [
        { id: 1, parentId: null, extra: undefined },
        { id: 2, parentId: 1, extra: 'present' },
        { id: 3, parentId: null, extra: undefined }
      ]

      expect(getColumn(nodes, 'parentId')).toEqual([null, 1, null])
      expect(getColumn(nodes, 'extra')).toEqual([undefined, 'present', undefined])
    })

    it('should preserve NaN and Infinity numeric values', () => {
      const metrics = [
        { score: Number.NaN },
        { score: Number.POSITIVE_INFINITY },
        { score: Number.NEGATIVE_INFINITY }
      ]

      const result = getColumn(metrics, 'score')
      expect(Number.isNaN(result[0])).toBe(true)
      expect(result[1]).toBe(Number.POSITIVE_INFINITY)
      expect(result[2]).toBe(Number.NEGATIVE_INFINITY)
    })
  })

  describe('Multi-dimensional arrays, tuples, and Symbol keys', () => {
    it('should extract elements by numeric index from a 2D array or array of tuples', () => {
      const matrix = [
        ['a', 10],
        ['b', 20],
        ['c', 30]
      ] as const

      expect(getColumn(matrix, 0)).toEqual(['a', 'b', 'c'])
      expect(getColumn(matrix, 1)).toEqual([10, 20, 30])
    })

    it('should extract values keyed by Symbol', () => {
      const secretKey = Symbol('secret')
      const records = [
        { [secretKey]: 'alpha' },
        { [secretKey]: 'beta' }
      ]

      expect(getColumn(records, secretKey)).toEqual(['alpha', 'beta'])
    })
  })

  describe('Multilingual, Unicode, and complex reference values', () => {
    it('should handle Cyrillic, Vietnamese, CJK, and Emoji strings in column values', () => {
      const translations = [
        { label: 'Привет Мир' },
        { label: 'Tiếng Việt' },
        { label: '你好 世界' },
        { label: '🚀 🔥 ✨' }
      ]

      expect(getColumn(translations, 'label')).toEqual([
        'Привет Мир',
        'Tiếng Việt',
        '你好 世界',
        '🚀 🔥 ✨'
      ])
    })

    it('should preserve nested object and array references without cloning', () => {
      const metaFirst = { tags: ['a'] }
      const metaSecond = { tags: ['b'] }
      const dataset = [
        { id: 1, meta: metaFirst },
        { id: 2, meta: metaSecond }
      ]

      const extracted = getColumn(dataset, 'meta')
      expect(extracted[0]).toBe(metaFirst)
      expect(extracted[1]).toBe(metaSecond)
    })
  })

  describe('Empty, nullish, and sparse inputs', () => {
    it('should return an empty array when given an empty array or empty object', () => {
      const emptyArray: UserRecord[] = []
      const emptyRecord: Record<string, UserRecord> = {}

      expect(getColumn(emptyArray, 'name')).toEqual([])
      expect(getColumn(emptyRecord, 'name')).toEqual([])
    })

    it('should safely return an empty array when passed null or undefined as the collection', () => {
      expect(getColumn(undefined as unknown as UserRecord[], 'name')).toEqual([])
      expect(getColumn(null as unknown as UserRecord[], 'name')).toEqual([])
    })

    it('should handle null Elements inside an array via optional chaining (item?.[column])', () => {
      const sparseItems = [
        { id: 1, name: 'First' },
        null as unknown as UserRecord,
        { id: 3, name: 'Third' }
      ]

      expect(getColumn(sparseItems, 'name')).toEqual(['First', undefined, 'Third'])
    })

    it('should return an array of undefined when querying a non-existent key', () => {
      const items: UserRecord[] = [{ id: 1 }, { id: 2 }]
      expect(getColumn(items, 'unknownKey' as keyof UserRecord)).toEqual([undefined, undefined])
    })
  })

  describe('Immutability and state isolation', () => {
    it('should not mutate the original input array or its items', () => {
      const source: UserRecord[] = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
      ]
      const snapshot = JSON.stringify(source)

      const result = getColumn(source, 'name')
      result.push('Mutated')

      expect(JSON.stringify(source)).toBe(snapshot)
    })
  })
})
