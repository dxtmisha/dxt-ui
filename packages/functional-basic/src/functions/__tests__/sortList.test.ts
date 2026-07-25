import { describe, it, expect } from 'vitest'
import { sortList } from '../sortList'

describe('sortList', () => {
  const sampleList = [
    { id: 3, category: 'A', name: 'Charlie', age: 30 },
    { id: 1, category: 'B', name: 'Alice', age: 25 },
    { id: 4, category: 'A', name: 'Alice', age: 20 },
    { id: 2, category: 'B', name: 'Bob', age: 35 }
  ]

  it('should return original array when sortColumns is empty', () => {
    expect(sortList(sampleList, [])).toEqual(sampleList)
  })

  it('should sort list by numeric column ascending', () => {
    const result = sortList(sampleList, [{ column: 'id', dir: 'asc' }])
    expect(result.map(item => item.id)).toEqual([1, 2, 3, 4])
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

  it('should support custom sort function', () => {
    const customSort = (itemFirst: any, itemSecond: any) => itemFirst.id - itemSecond.id
    const result = sortList(sampleList, [{ column: 'custom', dir: 'asc' }], customSort)
    expect(result.map(item => item.id)).toEqual([1, 2, 3, 4])
  })
})
