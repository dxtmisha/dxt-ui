import { describe, it, expect, afterEach, vi } from 'vitest'
import { reactive, ref } from 'vue'
import type { SortDir } from '@dxtmisha/functional'
import type { SortColumn, SortPropsInclude } from '../../types/sortTypes'
import { SortInclude } from '../SortInclude'

interface SampleRow {
  id: number
  category: string
  name: string
  age: number
  active?: boolean
  createdAt?: Date
  meta?: { score?: number | null }
}

describe('SortInclude', () => {
  const sampleList: SampleRow[] = [
    { id: 3, category: 'A', name: 'Charlie', age: 30, active: true, createdAt: new Date(2024, 2, 10), meta: { score: 20 } },
    { id: 1, category: 'B', name: 'Alice', age: 25, active: false, createdAt: new Date(2024, 0, 5), meta: { score: 0 } },
    { id: 4, category: 'A', name: 'Alice', age: 20, active: true, createdAt: new Date(2024, 5, 1), meta: { score: null } },
    { id: 2, category: 'B', name: 'Bob', age: 35, active: false, createdAt: new Date(2024, 1, 15), meta: { score: 10 } }
  ]

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should return original order when sort column is not specified', () => {
      const props = reactive<SortPropsInclude<SampleRow>>({
        list: sampleList
      })

      const sortInclude = new SortInclude(props)

      expect(sortInclude.isSort()).toBe(false)
      expect(sortInclude.column).toBeUndefined()
      expect(sortInclude.dir).toBe('asc')
      expect(sortInclude.columns.value).toEqual([])
      expect(sortInclude.getList()).toEqual(sampleList)
    })

    it('should sort list by numeric column ascending and string column descending', () => {
      const ascSort = new SortInclude<SampleRow>({
        list: sampleList,
        sort: 'id',
        sortDir: 'asc'
      })

      expect(ascSort.isSort()).toBe(true)
      expect(ascSort.column).toBe('id')
      expect(ascSort.dir).toBe('asc')
      expect(ascSort.getList().map(item => item.id)).toEqual([1, 2, 3, 4])

      const descSort = new SortInclude<SampleRow>({
        list: sampleList,
        sort: 'name',
        sortDir: 'desc'
      })

      expect(descSort.isSort()).toBe(true)
      expect(descSort.column).toBe('name')
      expect(descSort.dir).toBe('desc')
      expect(descSort.getList().map(item => item.name)).toEqual(['Charlie', 'Bob', 'Alice', 'Alice'])
    })

    it('should support multi-column sorting via array with default sortDir', () => {
      const sortInclude = new SortInclude<SampleRow>({
        list: sampleList,
        sort: ['category', 'name'],
        sortDir: 'asc'
      })

      expect(sortInclude.isSort()).toBe(true)
      expect(sortInclude.columns.value).toEqual([
        { column: 'category', dir: 'asc' },
        { column: 'name', dir: 'asc' }
      ])
      expect(sortInclude.getList().map(item => item.id)).toEqual([4, 3, 1, 2])
    })

    it('should support prefix indicators (- and +) overriding props.sortDir', () => {
      const sortInclude = new SortInclude<SampleRow>({
        list: sampleList,
        sort: ['-category', '+name'],
        sortDir: 'desc'
      })

      expect(sortInclude.columns.value).toEqual([
        { column: 'category', dir: 'desc' },
        { column: 'name', dir: 'asc' }
      ])
      expect(sortInclude.column).toBe('category')
      expect(sortInclude.dir).toBe('desc')
      expect(sortInclude.getList().map(item => item.id)).toEqual([1, 2, 4, 3])
    })

    it('should support multi-column sorting via object map', () => {
      const sortInclude = new SortInclude<SampleRow>({
        list: sampleList,
        sort: { category: 'asc', age: 'desc' }
      })

      expect(sortInclude.columns.value).toEqual([
        { column: 'category', dir: 'asc' },
        { column: 'age', dir: 'desc' }
      ])
      expect(sortInclude.getList().map(item => item.id)).toEqual([3, 4, 2, 1])
    })

    it('should support targetList array and callback function', () => {
      const fromArray = new SortInclude<SampleRow>({ sort: 'age', sortDir: 'asc' }, sampleList)
      expect(fromArray.getList().map(item => item.age)).toEqual([20, 25, 30, 35])

      const fromCallback = new SortInclude<SampleRow>({ sort: 'age', sortDir: 'desc' }, () => sampleList)
      expect(fromCallback.getList().map(item => item.age)).toEqual([35, 30, 25, 20])
    })

    it('should support custom sortFunction', () => {
      const sortInclude = new SortInclude<SampleRow>({
        list: sampleList,
        sort: 'custom',
        sortFunction: (itemFirst, itemSecond) => itemFirst.id - itemSecond.id
      })

      expect(sortInclude.getList().map(item => item.id)).toEqual([1, 2, 3, 4])
    })

    it('should prioritize constructor sort and sortDir over props and react to Ref/callback updates', () => {
      const props = reactive<SortPropsInclude<SampleRow>>({
        list: sampleList,
        sort: 'name',
        sortDir: 'asc'
      })
      const sortRef = ref<SortColumn | undefined>('age')
      const sortDirRef = ref<SortDir | undefined>('desc')

      const sortInclude = new SortInclude(props, undefined, sortRef, sortDirRef)

      expect(sortInclude.column).toBe('age')
      expect(sortInclude.dir).toBe('desc')
      expect(sortInclude.getList().map(item => item.age)).toEqual([35, 30, 25, 20])

      sortRef.value = 'name'
      sortDirRef.value = 'asc'
      expect(sortInclude.column).toBe('name')
      expect(sortInclude.dir).toBe('asc')
      expect(sortInclude.getList().map(item => item.name)).toEqual(['Alice', 'Alice', 'Bob', 'Charlie'])

      // Clearing constructor refs falls back to props.sort / props.sortDir
      sortRef.value = undefined
      sortDirRef.value = undefined
      props.sort = 'id'
      props.sortDir = 'desc'
      expect(sortInclude.column).toBe('id')
      expect(sortInclude.dir).toBe('desc')
      expect(sortInclude.getList().map(item => item.id)).toEqual([4, 3, 2, 1])
    })

    it('should support callback functions for sort and sortDir constructor parameters', () => {
      const sortInclude = new SortInclude<SampleRow>(
        { list: sampleList },
        undefined,
        () => 'category',
        () => 'desc'
      )

      expect(sortInclude.column).toBe('category')
      expect(sortInclude.dir).toBe('desc')
      expect(sortInclude.getList().map(item => item.category)).toEqual(['B', 'B', 'A', 'A'])
    })
  })

  describe('Boundary values, falsy traps, and empty/nullish inputs', () => {
    it('should handle empty sort values and ignore empty or prefix-only column names', () => {
      expect(new SortInclude({ list: sampleList, sort: '' }).isSort()).toBe(false)
      expect(new SortInclude({ list: sampleList, sort: [] }).isSort()).toBe(false)
      expect(new SortInclude({ list: sampleList, sort: {} }).isSort()).toBe(false)

      const prefixOnly = new SortInclude({ list: sampleList, sort: ['-', '+', ''] })
      expect(prefixOnly.columns.value).toEqual([])
      expect(prefixOnly.isSort()).toBe(false)
      expect(prefixOnly.column).toBeUndefined()

      const mixedArray = new SortInclude({ list: sampleList, sort: ['', '-', 'age'] })
      expect(mixedArray.columns.value).toEqual([{ column: 'age', dir: 'asc' }])
      expect(mixedArray.column).toBe('age')

      const mixedObject = new SortInclude({ list: sampleList, sort: { '': 'desc', 'age': 'desc' } })
      expect(mixedObject.columns.value).toEqual([{ column: 'age', dir: 'desc' }])
    })

    it('should handle nested paths, numeric 0, boolean false, Date values, and nullish values', () => {
      const nestedSort = new SortInclude<SampleRow>({
        list: sampleList,
        sort: 'meta.score',
        sortDir: 'asc'
      })
      // 0 < 10 < 20, null placed last
      expect(nestedSort.getList().map(item => item.meta?.score)).toEqual([0, 10, 20, null])

      const boolSort = new SortInclude<SampleRow>({
        list: sampleList,
        sort: 'active',
        sortDir: 'asc'
      })
      expect(boolSort.getList().map(item => item.active)).toEqual([false, false, true, true])

      const dateSort = new SortInclude<SampleRow>({
        list: sampleList,
        sort: 'createdAt',
        sortDir: 'asc'
      })
      expect(dateSort.getList().map(item => item.id)).toEqual([1, 2, 3, 4])
    })

    it('should handle empty props, undefined targetList fallback, and empty targetList array', () => {
      const empty = new SortInclude<SampleRow>({})
      expect(empty.getList()).toEqual([])
      expect(empty.isSort()).toBe(false)

      const fallback = new SortInclude<SampleRow>({ list: sampleList, sort: 'id' }, () => undefined)
      expect(fallback.getList().map(item => item.id)).toEqual([1, 2, 3, 4])

      const emptyTarget = new SortInclude<SampleRow>({ list: sampleList, sort: 'id' }, () => [])
      expect(emptyTarget.getList()).toEqual([])
    })

    it('should accept Readonly props without errors', () => {
      const frozenProps = Object.freeze({ list: sampleList, sort: '-id' })
      const sortInclude = new SortInclude<SampleRow>(frozenProps)

      expect(sortInclude.column).toBe('id')
      expect(sortInclude.dir).toBe('desc')
      expect(sortInclude.getList().map(item => item.id)).toEqual([4, 3, 2, 1])
    })
  })

  describe('Immutability and multilingual/Unicode sorting', () => {
    it('should not mutate the caller input array in place', () => {
      const list = sampleList.map(item => ({ ...item }))
      const originalOrder = list.map(item => item.id)

      const sortInclude = new SortInclude({ list, sort: 'id', sortDir: 'asc' })

      expect(sortInclude.getList().map(item => item.id)).toEqual([1, 2, 3, 4])
      expect(list.map(item => item.id)).toEqual(originalOrder)
    })

    it('should sort multilingual strings and natural numbers predictably', () => {
      const unicodeList = [
        { label: 'Item 10' },
        { label: 'Item 2' },
        { label: 'Яблоко' },
        { label: 'Арбуз' },
        { label: 'tiếng Việt' }
      ]

      const sortInclude = new SortInclude({ list: unicodeList, sort: 'label', sortDir: 'asc' })
      const labels = sortInclude.getList().map(item => item.label)

      expect(labels.indexOf('Item 2')).toBeLessThan(labels.indexOf('Item 10'))
      expect(labels.indexOf('Арбуз')).toBeLessThan(labels.indexOf('Яблоко'))
      expect(labels).toContain('tiếng Việt')
    })
  })
})
