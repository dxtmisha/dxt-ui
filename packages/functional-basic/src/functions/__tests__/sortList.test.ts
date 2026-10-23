import { describe, expect, it, vi } from 'vitest'
import { sortList } from '../sortList'

describe('sortList', () => {
  const sampleList = [
    { id: 3, category: 'A', name: 'Charlie', age: 30 },
    { id: 1, category: 'B', name: 'Alice', age: 25 },
    { id: 4, category: 'A', name: 'Alice', age: 20 },
    { id: 2, category: 'B', name: 'Bob', age: 35 }
  ]

  describe('Standard functional requirements (Single & Multi-column sorting)', () => {
    it('should sort list by numeric column ascending and descending without mutating original list', () => {
      const originalSnapshot = [...sampleList]
      const ascendingResult = sortList(sampleList, [{ column: 'id', dir: 'asc' }])
      expect(ascendingResult.map(item => item.id)).toEqual([1, 2, 3, 4])
      expect(ascendingResult).not.toBe(sampleList)
      expect(sampleList).toEqual(originalSnapshot)

      const descendingResult = sortList(sampleList, [{ column: 'id', dir: 'desc' }])
      expect(descendingResult.map(item => item.id)).toEqual([4, 3, 2, 1])
    })

    it('should default to ascending order when dir is omitted', () => {
      const result = sortList(sampleList, [{ column: 'id' }])
      expect(result.map(item => item.id)).toEqual([1, 2, 3, 4])
    })

    it('should sort list by string column ascending and descending', () => {
      const ascendingResult = sortList(sampleList, [{ column: 'name', dir: 'asc' }])
      expect(ascendingResult.map(item => item.name)).toEqual(['Alice', 'Alice', 'Bob', 'Charlie'])

      const descendingResult = sortList(sampleList, [{ column: 'name', dir: 'desc' }])
      expect(descendingResult.map(item => item.name)).toEqual(['Charlie', 'Bob', 'Alice', 'Alice'])
    })

    it('should support multi-column sorting with tie-breaking across columns', () => {
      const result = sortList(sampleList, [
        { column: 'category', dir: 'asc' },
        { column: 'age', dir: 'desc' }
      ])
      expect(result.map(item => item.id)).toEqual([3, 4, 2, 1])
    })

    it('should preserve relative order when all specified sort columns are equal', () => {
      const tiedList = [
        { id: 10, group: 'same' },
        { id: 20, group: 'same' }
      ]
      const result = sortList(tiedList, [{ column: 'group', dir: 'asc' }])
      expect(result.map(item => item.id)).toEqual([10, 20])
    })

    it('should sort by nested property paths using dot notation', () => {
      const nestedItems = [
        { id: 1, user: { profile: { rating: 85 } } },
        { id: 2, user: { profile: { rating: 95 } } },
        { id: 3, user: { profile: { rating: 70 } } }
      ]

      const result = sortList(nestedItems, [{ column: 'user.profile.rating', dir: 'asc' }])
      expect(result.map(item => item.id)).toEqual([3, 1, 2])
    })
  })

  describe('Data type comparisons (Numeric strings, Booleans, Dates, Natural strings)', () => {
    it('should sort numeric strings numerically instead of lexicographically', () => {
      const items = [
        { id: '10', label: 'Item 10' },
        { id: '2', label: 'Item 2' },
        { id: '0', label: 'Item 0' },
        { id: '1', label: 'Item 1' }
      ]

      const result = sortList(items, [{ column: 'id', dir: 'asc' }])
      expect(result.map(item => item.id)).toEqual(['0', '1', '2', '10'])
    })

    it('should sort alphanumeric strings naturally and case-insensitively via Intl.Collator', () => {
      const items = [
        { code: 'file10' },
        { code: 'File2' },
        { code: 'file1' }
      ]

      const result = sortList(items, [{ column: 'code', dir: 'asc' }])
      expect(result.map(item => item.code)).toEqual(['file1', 'File2', 'file10'])
    })

    it('should sort boolean columns accurately in both directions', () => {
      const booleanItems = [
        { id: 1, active: true },
        { id: 2, active: false },
        { id: 3, active: true },
        { id: 4, active: false }
      ]

      const ascendingResult = sortList(booleanItems, [{ column: 'active', dir: 'asc' }])
      expect(ascendingResult.map(item => item.active)).toEqual([false, false, true, true])

      const descendingResult = sortList(booleanItems, [{ column: 'active', dir: 'desc' }])
      expect(descendingResult.map(item => item.active)).toEqual([true, true, false, false])
    })

    it('should sort valid Date objects chronologically', () => {
      const dateItems = [
        { id: 1, date: new Date('2024-05-15') },
        { id: 2, date: new Date('2023-01-01') },
        { id: 3, date: new Date('2025-12-31') }
      ]

      const ascendingResult = sortList(dateItems, [{ column: 'date', dir: 'asc' }])
      expect(ascendingResult.map(item => item.id)).toEqual([2, 1, 3])

      const descendingResult = sortList(dateItems, [{ column: 'date', dir: 'desc' }])
      expect(descendingResult.map(item => item.id)).toEqual([3, 1, 2])
    })

    it('should fallback to string comparison without NaN when Date objects are invalid', () => {
      const invalidDateItems = [
        { id: 1, date: new Date('invalid-date') },
        { id: 2, date: new Date('2024-01-01') }
      ]

      const result = sortList(invalidDateItems, [{ column: 'date', dir: 'asc' }])
      expect(result).toHaveLength(2)
    })
  })

  describe('Nullish handling and antisymmetry', () => {
    it('should place null and undefined at the end in both ascending and descending order', () => {
      const itemsWithNulls = [
        { id: 1, score: 50 },
        { id: 2, score: null },
        { id: 3, score: 100 },
        { id: 4, score: undefined },
        { id: 5, score: 25 }
      ]

      const ascendingResult = sortList(itemsWithNulls, [{ column: 'score', dir: 'asc' }])
      expect(ascendingResult.slice(0, 3).map(item => item.id)).toEqual([5, 1, 3])
      expect(ascendingResult.slice(3).map(item => item.score)).toEqual([null, undefined])

      const descendingResult = sortList(itemsWithNulls, [{ column: 'score', dir: 'desc' }])
      expect(descendingResult.slice(0, 3).map(item => item.id)).toEqual([3, 1, 5])
      expect(descendingResult.slice(3).map(item => item.score)).toEqual([null, undefined])
    })

    it('should satisfy antisymmetry when comparing null against undefined and fall through to secondary column', () => {
      const firstPair = [
        { id: 1, primaryValue: null, secondary: 2 },
        { id: 2, primaryValue: undefined, secondary: 1 }
      ]
      const secondPair = [
        { id: 2, primaryValue: undefined, secondary: 1 },
        { id: 1, primaryValue: null, secondary: 2 }
      ]

      const firstResult = sortList(firstPair, [
        { column: 'primaryValue', dir: 'asc' },
        { column: 'secondary', dir: 'asc' }
      ])
      const secondResult = sortList(secondPair, [
        { column: 'primaryValue', dir: 'asc' },
        { column: 'secondary', dir: 'asc' }
      ])

      expect(firstResult.map(item => item.id)).toEqual([2, 1])
      expect(secondResult.map(item => item.id)).toEqual([2, 1])
    })
  })

  describe('Custom sort comparator and column filtering', () => {
    it('should invoke customSort with (itemFirst, itemSecond, column, dir) and use its result', () => {
      const customSortSpy = vi.fn(
        (itemFirst: typeof sampleList[0], itemSecond: typeof sampleList[0]) => itemFirst.id - itemSecond.id
      )

      const result = sortList(sampleList, [{ column: 'custom', dir: 'asc' }], customSortSpy)

      expect(result.map(item => item.id)).toEqual([1, 2, 3, 4])
      expect(customSortSpy).toHaveBeenCalledWith(
        expect.any(Object),
        expect.any(Object),
        'custom',
        'asc'
      )
    })

    it('should fall through to the next sortColumn when customSort returns 0', () => {
      const customSort = (
        itemFirst: typeof sampleList[0],
        itemSecond: typeof sampleList[0],
        column?: string,
        direction?: 'asc' | 'desc'
      ) => {
        if (column === 'category') {
          return itemFirst.category.localeCompare(itemSecond.category)
        }
        const factor = direction === 'desc' ? -1 : 1
        return (itemFirst.age - itemSecond.age) * factor
      }

      const result = sortList(
        sampleList,
        [
          { column: 'category', dir: 'asc' },
          { column: 'age', dir: 'desc' }
        ],
        customSort
      )

      expect(result.map(item => item.id)).toEqual([3, 4, 2, 1])
    })

    it('should skip sort columns that have empty or undefined column names', () => {
      const result = sortList(sampleList, [
        { column: undefined, dir: 'asc' },
        { column: '', dir: 'desc' },
        { column: 'id', dir: 'desc' }
      ])
      expect(result.map(item => item.id)).toEqual([4, 3, 2, 1])
    })
  })

  describe('Boundary values, empty collections, and invalid inputs', () => {
    it('should return a shallow copy when sortColumns is empty', () => {
      const result = sortList(sampleList, [])

      expect(result).toEqual(sampleList)
      expect(result).not.toBe(sampleList)
    })

    it('should return a shallow copy when list has fewer than 2 items', () => {
      const single = [{ id: 1 }]
      const singleResult = sortList(single, [{ column: 'id', dir: 'asc' }])

      expect(singleResult).toEqual(single)
      expect(singleResult).not.toBe(single)

      const empty: { id: number }[] = []
      const emptyResult = sortList(empty, [{ column: 'id', dir: 'asc' }])

      expect(emptyResult).toEqual([])
      expect(emptyResult).not.toBe(empty)
    })

    it('should handle non-array runtime inputs safely without throwing', () => {
      // @ts-expect-error testing invalid runtime input
      expect(sortList(undefined, [{ column: 'id' }])).toEqual([])
      // @ts-expect-error testing invalid runtime input
      expect(sortList(null, [{ column: 'id' }])).toEqual([])
      // @ts-expect-error testing invalid runtime input
      expect(sortList(sampleList, undefined)).toEqual(sampleList)
    })
  })
})
