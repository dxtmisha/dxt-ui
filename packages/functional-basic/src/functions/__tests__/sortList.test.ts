import { describe, expect, it } from 'vitest'
import { sortList } from '../sortList'

describe('sortList', () => {
  const sampleList = [
    { id: 3, category: 'A', name: 'Charlie', age: 30 },
    { id: 1, category: 'B', name: 'Alice', age: 25 },
    { id: 4, category: 'A', name: 'Alice', age: 20 },
    { id: 2, category: 'B', name: 'Bob', age: 35 }
  ]

  it('should return a new array copy (immutability) when sortColumns is empty', () => {
    const result = sortList(sampleList, [])

    expect(result).toEqual(sampleList)
    expect(result).not.toBe(sampleList)
  })

  it('should return a new array copy when list has fewer than 2 items', () => {
    const single = [{ id: 1 }]
    const result = sortList(single, [{ column: 'id', dir: 'asc' }])

    expect(result).toEqual(single)
    expect(result).not.toBe(single)

    const empty: { id: number }[] = []
    const emptyResult = sortList(empty, [{ column: 'id', dir: 'asc' }])

    expect(emptyResult).toEqual([])
    expect(emptyResult).not.toBe(empty)
  })

  it('should handle non-array inputs safely', () => {
    // @ts-expect-error testing invalid input at runtime
    expect(sortList(undefined, [{ column: 'id' }])).toEqual([])
    // @ts-expect-error testing invalid input at runtime
    expect(sortList(sampleList, undefined)).toEqual(sampleList)
  })

  it('should sort list by numeric column ascending and descending', () => {
    const ascResult = sortList(sampleList, [{ column: 'id', dir: 'asc' }])
    expect(ascResult.map(item => item.id)).toEqual([1, 2, 3, 4])

    const descResult = sortList(sampleList, [{ column: 'id', dir: 'desc' }])
    expect(descResult.map(item => item.id)).toEqual([4, 3, 2, 1])
  })

  it('should sort numeric strings correctly instead of lexicographically', () => {
    const items = [
      { id: '10', label: 'Item 10' },
      { id: '2', label: 'Item 2' },
      { id: '1', label: 'Item 1' }
    ]

    const result = sortList(items, [{ column: 'id', dir: 'asc' }])
    expect(result.map(item => item.id)).toEqual(['1', '2', '10'])
  })

  it('should sort list by string column descending', () => {
    const result = sortList(sampleList, [{ column: 'name', dir: 'desc' }])
    expect(result.map(item => item.name)).toEqual(['Charlie', 'Bob', 'Alice', 'Alice'])
  })

  it('should support multi-column sorting', () => {
    const result = sortList(sampleList, [
      { column: 'category', dir: 'asc' },
      { column: 'age', dir: 'desc' }
    ])
    expect(result.map(item => item.id)).toEqual([3, 4, 2, 1])
  })

  it('should sort boolean columns correctly', () => {
    const booleanItems = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
      { id: 4, active: false }
    ]

    const ascResult = sortList(booleanItems, [{ column: 'active', dir: 'asc' }])
    expect(ascResult.map(item => item.active)).toEqual([false, false, true, true])

    const descResult = sortList(booleanItems, [{ column: 'active', dir: 'desc' }])
    expect(descResult.map(item => item.active)).toEqual([true, true, false, false])
  })

  it('should sort Date objects chronologically', () => {
    const dateItems = [
      { id: 1, date: new Date('2024-05-15') },
      { id: 2, date: new Date('2023-01-01') },
      { id: 3, date: new Date('2025-12-31') }
    ]

    const ascResult = sortList(dateItems, [{ column: 'date', dir: 'asc' }])
    expect(ascResult.map(item => item.id)).toEqual([2, 1, 3])

    const descResult = sortList(dateItems, [{ column: 'date', dir: 'desc' }])
    expect(descResult.map(item => item.id)).toEqual([3, 1, 2])
  })

  it('should place null and undefined at the end in both asc and desc order', () => {
    const itemsWithNulls = [
      { id: 1, score: 50 },
      { id: 2, score: null },
      { id: 3, score: 100 },
      { id: 4, score: undefined },
      { id: 5, score: 25 }
    ]

    const ascResult = sortList(itemsWithNulls, [{ column: 'score', dir: 'asc' }])
    expect(ascResult.slice(0, 3).map(item => item.id)).toEqual([5, 1, 3])
    expect(ascResult.slice(3).map(item => item.score)).toEqual([null, undefined])

    const descResult = sortList(itemsWithNulls, [{ column: 'score', dir: 'desc' }])
    expect(descResult.slice(0, 3).map(item => item.id)).toEqual([3, 1, 5])
    expect(descResult.slice(3).map(item => item.score)).toEqual([null, undefined])
  })

  it('should satisfy antisymmetry when comparing null against undefined', () => {
    const pair1 = [
      { id: 1, val: null, secondary: 2 },
      { id: 2, val: undefined, secondary: 1 }
    ]
    const pair2 = [
      { id: 2, val: undefined, secondary: 1 },
      { id: 1, val: null, secondary: 2 }
    ]

    // Both should fall through to the secondary column consistently
    const result1 = sortList(pair1, [
      { column: 'val', dir: 'asc' },
      { column: 'secondary', dir: 'asc' }
    ])
    const result2 = sortList(pair2, [
      { column: 'val', dir: 'asc' },
      { column: 'secondary', dir: 'asc' }
    ])

    expect(result1.map(item => item.id)).toEqual([2, 1])
    expect(result2.map(item => item.id)).toEqual([2, 1])
  })

  it('should sort by nested property paths (dot notation)', () => {
    const nestedItems = [
      { id: 1, user: { profile: { rating: 85 } } },
      { id: 2, user: { profile: { rating: 95 } } },
      { id: 3, user: { profile: { rating: 70 } } }
    ]

    const result = sortList(nestedItems, [{ column: 'user.profile.rating', dir: 'asc' }])
    expect(result.map(item => item.id)).toEqual([3, 1, 2])
  })

  it('should support custom sort function', () => {
    const customSort = (itemFirst: typeof sampleList[0], itemSecond: typeof sampleList[0]) => itemFirst.id - itemSecond.id
    const result = sortList(sampleList, [{ column: 'custom', dir: 'asc' }], customSort)
    expect(result.map(item => item.id)).toEqual([1, 2, 3, 4])
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
