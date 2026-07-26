import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import type { SortDir } from '@dxtmisha/functional'
import type { SortColumn } from '../../types/sortTypes'
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

  it('should use fallback sort and sortDir parameters when props.sort is missing', () => {
    const props = ref({
      list: sampleList
    })

    const sortInclude = new SortInclude(props.value, undefined, 'age', 'desc')
    expect(sortInclude.isSort()).toBe(true)
    expect(sortInclude.column).toBe('age')
    expect(sortInclude.dir).toBe('desc')
    expect(sortInclude.getList().map(item => item.age)).toEqual([35, 30, 25, 20])
  })

  it('should prioritize constructor sort parameter over props.sort', () => {
    const props = ref({
      list: sampleList,
      sort: 'name',
      sortDir: 'asc' as const
    })

    const sortInclude = new SortInclude(props.value, undefined, 'age', 'desc')
    expect(sortInclude.column).toBe('age')
    expect(sortInclude.dir).toBe('desc')
    expect(sortInclude.getList().map(item => item.age)).toEqual([35, 30, 25, 20])
  })

  it('should support callback functions for sort and sortDir constructor parameters', () => {
    const props = ref({
      list: sampleList
    })

    const sortInclude = new SortInclude(props.value, undefined, () => 'category', () => 'desc')
    expect(sortInclude.column).toBe('category')
    expect(sortInclude.dir).toBe('desc')
    expect(sortInclude.getList().map(item => item.category)).toEqual(['B', 'B', 'A', 'A'])
  })

  it('should support reactive Ref parameters for sort and sortDir', () => {
    const props = ref({
      list: sampleList
    })
    const sortRef = ref<SortColumn | undefined>('age')
    const sortDirRef = ref<SortDir | undefined>('desc')

    const sortInclude = new SortInclude(props.value, undefined, sortRef, sortDirRef)
    expect(sortInclude.column).toBe('age')
    expect(sortInclude.dir).toBe('desc')
    expect(sortInclude.getList().map(item => item.age)).toEqual([35, 30, 25, 20])

    // Mutate reactive refs
    sortRef.value = 'name'
    sortDirRef.value = 'asc'
    expect(sortInclude.column).toBe('name')
    expect(sortInclude.dir).toBe('asc')
    expect(sortInclude.getList().map(item => item.name)).toEqual(['Alice', 'Alice', 'Bob', 'Charlie'])
  })
})
