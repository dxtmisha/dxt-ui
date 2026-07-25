import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { SortInclude } from '../SortInclude'

describe('SortInclude', () => {
  const sampleList = [
    { id: 3, category: 'A', name: 'Charlie', age: 30 },
    { id: 1, category: 'B', name: 'Alice', age: 25 },
    { id: 4, category: 'A', name: 'Alice', age: 20 },
    { id: 2, category: 'B', name: 'Bob', age: 35 }
  ]

  it('should return original list when sort column is not specified', () => {
    const props = ref({
      list: sampleList
    })

    const sortInclude = new SortInclude(props.value)
    expect(sortInclude.isSort()).toBe(false)
    expect(sortInclude.getList()).toEqual(sampleList)
  })

  it('should sort list by numeric column ascending', () => {
    const props = ref({
      list: sampleList,
      sort: 'id',
      sortDir: 'asc' as const
    })

    const sortInclude = new SortInclude(props.value)
    expect(sortInclude.isSort()).toBe(true)
    expect(sortInclude.getList().map(item => item.id)).toEqual([1, 2, 3, 4])
  })

  it('should sort list by string column descending', () => {
    const props = ref({
      list: sampleList,
      sort: 'name',
      sortDir: 'desc' as const
    })

    const sortInclude = new SortInclude(props.value)
    expect(sortInclude.isSort()).toBe(true)
    expect(sortInclude.getList().map(item => item.name)).toEqual(['Charlie', 'Bob', 'Alice', 'Alice'])
  })

  it('should support multi-column sorting via array of columns with default sortDir', () => {
    const props = ref({
      list: sampleList,
      sort: ['category', 'name'],
      sortDir: 'asc' as const
    })

    const sortInclude = new SortInclude(props.value)
    expect(sortInclude.isSort()).toBe(true)
    expect(sortInclude.columns.value).toEqual([
      { column: 'category', dir: 'asc' },
      { column: 'name', dir: 'asc' }
    ])
    expect(sortInclude.getList().map(item => item.id)).toEqual([4, 3, 1, 2])
  })

  it('should support multi-column sorting via array with prefix indicators', () => {
    const props = ref({
      list: sampleList,
      sort: ['-category', 'name']
    })

    const sortInclude = new SortInclude(props.value)
    expect(sortInclude.columns.value).toEqual([
      { column: 'category', dir: 'desc' },
      { column: 'name', dir: 'asc' }
    ])
    expect(sortInclude.getList().map(item => item.id)).toEqual([1, 2, 4, 3])
  })

  it('should support multi-column sorting via object map', () => {
    const props = ref({
      list: sampleList,
      sort: { category: 'asc' as const, age: 'desc' as const }
    })

    const sortInclude = new SortInclude(props.value)
    expect(sortInclude.columns.value).toEqual([
      { column: 'category', dir: 'asc' },
      { column: 'age', dir: 'desc' }
    ])
    expect(sortInclude.getList().map(item => item.id)).toEqual([3, 4, 2, 1])
  })

  it('should support targetList callback function', () => {
    const props = ref({
      sort: 'age',
      sortDir: 'asc' as const
    })

    const sortInclude = new SortInclude(props.value, () => sampleList)
    expect(sortInclude.getList().map(item => item.age)).toEqual([20, 25, 30, 35])
  })

  it('should support custom sortFunction', () => {
    const props = ref({
      list: sampleList,
      sort: 'custom',
      sortFunction: (itemFirst: any, itemSecond: any) => itemFirst.id - itemSecond.id
    })

    const sortInclude = new SortInclude(props.value)
    expect(sortInclude.getList().map(item => item.id)).toEqual([1, 2, 3, 4])
  })
})
