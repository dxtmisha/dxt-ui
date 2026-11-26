import { describe, it, expect, afterEach, vi } from 'vitest'
import { reactive, ref } from 'vue'
import { PaginationInclude } from '../PaginationInclude'
import { SearchInclude } from '../SearchInclude'

interface SampleItem {
  id: number
  name: string
}

describe('PaginationInclude', () => {
  const sampleList: SampleItem[] = Array.from(
    { length: 25 },
    (_, index) => ({ id: index + 1, name: `Item ${index + 1}` })
  )

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should return full list when rows prop is not specified', () => {
      const pagination = new PaginationInclude({ list: sampleList })

      expect(pagination.rows).toBe(0)
      expect(pagination.page).toBe(1)
      expect(pagination.max).toBe(1)
      expect(pagination.list).toHaveLength(25)
      expect(pagination.list).toEqual(sampleList)
    })

    it('should return first, middle, and partial last page slices when rows and page are specified', () => {
      const firstPage = new PaginationInclude({ list: sampleList, rows: 10 })
      expect(firstPage.rows).toBe(10)
      expect(firstPage.page).toBe(1)
      expect(firstPage.max).toBe(3)
      expect(firstPage.list).toHaveLength(10)
      expect(firstPage.list[0]).toEqual({ id: 1, name: 'Item 1' })
      expect(firstPage.list[9]).toEqual({ id: 10, name: 'Item 10' })

      const secondPage = new PaginationInclude({ list: sampleList, rows: 10, page: 2 })
      expect(secondPage.page).toBe(2)
      expect(secondPage.list).toHaveLength(10)
      expect(secondPage.list[0]).toEqual({ id: 11, name: 'Item 11' })
      expect(secondPage.list[9]).toEqual({ id: 20, name: 'Item 20' })

      const lastPage = new PaginationInclude({ list: sampleList, rows: 10, page: 3 })
      expect(lastPage.page).toBe(3)
      expect(lastPage.list).toHaveLength(5)
      expect(lastPage.list[0]).toEqual({ id: 21, name: 'Item 21' })
      expect(lastPage.list[4]).toEqual({ id: 25, name: 'Item 25' })
    })

    it('should handle numeric string values for page and rows', () => {
      const pagination = new PaginationInclude({ list: sampleList, rows: '5', page: '2' })

      expect(pagination.rows).toBe(5)
      expect(pagination.page).toBe(2)
      expect(pagination.max).toBe(5)
      expect(pagination.list).toHaveLength(5)
      expect(pagination.list[0]).toEqual({ id: 6, name: 'Item 6' })
    })

    it('should support static targetList array overriding props.list', () => {
      const customList = sampleList.slice(0, 12)
      const pagination = new PaginationInclude({ list: sampleList, rows: 5, page: 3 }, customList)

      expect(pagination.max).toBe(3)
      expect(pagination.list).toHaveLength(2)
      expect(pagination.list[0]).toEqual({ id: 11, name: 'Item 11' })
    })

    it('should support reactive targetList callback chained with SearchInclude', () => {
      const props = reactive({
        list: sampleList,
        search: 'Item 1',
        searchColumns: ['name'],
        page: 1,
        rows: 5
      })
      const search = new SearchInclude(props, ['name'])
      const pagination = new PaginationInclude(props, () => search.list)

      expect(search.isSearch()).toBe(true)
      expect(search.list.length).toBeGreaterThan(5)
      expect(pagination.list).toHaveLength(5)
      expect(pagination.max).toBe(Math.ceil(search.list.length / 5))

      props.page = 2
      expect(pagination.page).toBe(2)
      expect(pagination.list).toHaveLength(5)
    })

    it('should reactively update list, max, and page when reactive props or targetList ref mutate', () => {
      const props = reactive<{ list: SampleItem[], rows: number, page: number }>({
        list: sampleList,
        rows: 10,
        page: 3
      })
      const dynamicTarget = ref<SampleItem[] | undefined>(undefined)
      const pagination = new PaginationInclude(props, () => dynamicTarget.value)

      expect(pagination.max).toBe(3)
      expect(pagination.page).toBe(3)
      expect(pagination.list).toHaveLength(5)

      dynamicTarget.value = sampleList.slice(0, 8)
      expect(pagination.max).toBe(1)
      expect(pagination.page).toBe(1)
      expect(pagination.list).toHaveLength(8)

      props.rows = 3
      expect(pagination.max).toBe(3)
      expect(pagination.page).toBe(3)
      expect(pagination.list).toHaveLength(2)
    })
  })

  describe('Boundary values, zero/falsy traps, and limit thresholds', () => {
    it('should return 0 rows and full list when rows is 0, negative, NaN, Infinity, or non-numeric', () => {
      const invalidRowsValues = [0, -5, Number.NaN, Number.POSITIVE_INFINITY, 'invalid', '']

      for (const rows of invalidRowsValues) {
        const pagination = new PaginationInclude({ list: sampleList, rows })
        expect(pagination.rows).toBe(0)
        expect(pagination.max).toBe(1)
        expect(pagination.page).toBe(1)
        expect(pagination.list).toHaveLength(25)
      }
    })

    it('should fallback page to 1 when page is 0, negative, NaN, Infinity, or invalid string', () => {
      const invalidPageValues = [0, -1, Number.NaN, Number.POSITIVE_INFINITY, 'abc', '']

      for (const page of invalidPageValues) {
        const pagination = new PaginationInclude({ list: sampleList, rows: 10, page })
        expect(pagination.page).toBe(1)
        expect(pagination.list[0]).toEqual({ id: 1, name: 'Item 1' })
      }
    })

    it('should cap page at max available page when requested page exceeds max', () => {
      const pagination = new PaginationInclude({ list: sampleList, rows: 10, page: 100 })

      expect(pagination.max).toBe(3)
      expect(pagination.page).toBe(3)
      expect(pagination.list).toHaveLength(5)
      expect(pagination.list[0]).toEqual({ id: 21, name: 'Item 21' })
    })

    it('should handle exact list length boundaries (length < rows, length === rows, rows === 1)', () => {
      const exactPagination = new PaginationInclude({ list: sampleList.slice(0, 10), rows: 10, page: 1 })
      expect(exactPagination.max).toBe(1)
      expect(exactPagination.list).toHaveLength(10)

      const underLimitPagination = new PaginationInclude({ list: sampleList.slice(0, 4), rows: 10, page: 2 })
      expect(underLimitPagination.max).toBe(1)
      expect(underLimitPagination.page).toBe(1)
      expect(underLimitPagination.list).toHaveLength(4)

      const singleRowPagination = new PaginationInclude({ list: sampleList.slice(0, 3), rows: 1, page: 2 })
      expect(singleRowPagination.max).toBe(3)
      expect(singleRowPagination.list).toEqual([{ id: 2, name: 'Item 2' }])
    })
  })

  describe('Empty, nullish, and readonly inputs', () => {
    it('should handle empty props object with no list and no targetList', () => {
      const pagination = new PaginationInclude<SampleItem>({})

      expect(pagination.rows).toBe(0)
      expect(pagination.max).toBe(1)
      expect(pagination.page).toBe(1)
      expect(pagination.list).toEqual([])
    })

    it('should fallback to props.list when targetList callback returns undefined', () => {
      const pagination = new PaginationInclude({ list: sampleList, rows: 5 }, () => undefined)

      expect(pagination.max).toBe(5)
      expect(pagination.list).toHaveLength(5)
      expect(pagination.list[0]).toEqual({ id: 1, name: 'Item 1' })
    })

    it('should keep empty array returned by targetList callback instead of falling back to props.list', () => {
      const pagination = new PaginationInclude({ list: sampleList, rows: 5, page: 2 }, () => [])

      expect(pagination.max).toBe(1)
      expect(pagination.page).toBe(1)
      expect(pagination.list).toEqual([])
    })

    it('should accept Readonly props without errors', () => {
      const frozenProps = Object.freeze({ list: sampleList, rows: 5, page: 2 })
      const pagination = new PaginationInclude(frozenProps)

      expect(pagination.page).toBe(2)
      expect(pagination.list).toHaveLength(5)
      expect(pagination.list[0]).toEqual({ id: 6, name: 'Item 6' })
    })
  })

  describe('Immutability and instance isolation', () => {
    it('should not mutate the caller source list array', () => {
      const list = sampleList.slice(0, 10)
      const snapshot = list.map(item => ({ ...item }))
      const pagination = new PaginationInclude({ list, rows: 4, page: 2 })

      expect(pagination.list).toHaveLength(4)
      expect(list).toEqual(snapshot)
    })

    it('should isolate state across multiple instances', () => {
      const first = new PaginationInclude({ list: sampleList, rows: 5, page: 1 })
      const second = new PaginationInclude({ list: sampleList, rows: 10, page: 3 })

      expect(first.list).toHaveLength(5)
      expect(second.list).toHaveLength(5)
      expect(first.list[0].id).toBe(1)
      expect(second.list[0].id).toBe(21)
    })
  })
})
