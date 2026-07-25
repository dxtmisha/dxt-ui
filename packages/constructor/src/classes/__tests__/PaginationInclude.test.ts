import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { PaginationInclude } from '../PaginationInclude'
import { SearchInclude } from '../SearchInclude'

describe('PaginationInclude', () => {
  const sampleList = Array.from({ length: 25 }, (_, index) => ({ id: index + 1, name: `Item ${index + 1}` }))

  it('should return full list when rows prop is not specified or 0', () => {
    const pagination = new PaginationInclude({ list: sampleList })
    expect(pagination.rows).toBe(0)
    expect(pagination.page).toBe(1)
    expect(pagination.list).toHaveLength(25)
    expect(pagination.list).toEqual(sampleList)
  })

  it('should return first page slice when rows is specified', () => {
    const pagination = new PaginationInclude({ list: sampleList, rows: 10 })
    expect(pagination.rows).toBe(10)
    expect(pagination.page).toBe(1)
    expect(pagination.list).toHaveLength(10)
    expect(pagination.list[0]).toEqual({ id: 1, name: 'Item 1' })
    expect(pagination.list[9]).toEqual({ id: 10, name: 'Item 10' })
  })

  it('should return second page slice when rows and page are specified', () => {
    const pagination = new PaginationInclude({ list: sampleList, rows: 10, page: 2 })
    expect(pagination.rows).toBe(10)
    expect(pagination.page).toBe(2)
    expect(pagination.list).toHaveLength(10)
    expect(pagination.list[0]).toEqual({ id: 11, name: 'Item 11' })
    expect(pagination.list[9]).toEqual({ id: 20, name: 'Item 20' })
  })

  it('should return partial slice on the last page', () => {
    const pagination = new PaginationInclude({ list: sampleList, rows: 10, page: 3 })
    expect(pagination.rows).toBe(10)
    expect(pagination.page).toBe(3)
    expect(pagination.list).toHaveLength(5)
    expect(pagination.list[0]).toEqual({ id: 21, name: 'Item 21' })
    expect(pagination.list[4]).toEqual({ id: 25, name: 'Item 25' })
  })

  it('should handle string page and rows values', () => {
    const pagination = new PaginationInclude({ list: sampleList, rows: '5', page: '2' })
    expect(pagination.rows).toBe(5)
    expect(pagination.page).toBe(2)
    expect(pagination.list).toHaveLength(5)
    expect(pagination.list[0]).toEqual({ id: 6, name: 'Item 6' })
  })

  it('should return 0 rows and full list if rows is 0 or negative', () => {
    const paginationZero = new PaginationInclude({ list: sampleList, rows: 0 })
    expect(paginationZero.rows).toBe(0)
    expect(paginationZero.list).toHaveLength(25)

    const paginationNegative = new PaginationInclude({ list: sampleList, rows: -5 })
    expect(paginationNegative.rows).toBe(0)
    expect(paginationNegative.list).toHaveLength(25)
  })

  it('should fallback page to 1 if page is invalid or <= 0', () => {
    const paginationInvalidPage = new PaginationInclude({ list: sampleList, rows: 10, page: -1 })
    expect(paginationInvalidPage.page).toBe(1)
    expect(paginationInvalidPage.list[0]).toEqual({ id: 1, name: 'Item 1' })
  })

  it('should support dynamic list array as parameter', () => {
    const customList = sampleList.slice(0, 15)
    const pagination = new PaginationInclude({ list: sampleList, rows: 5 }, customList)
    expect(pagination.list).toHaveLength(5)
    expect(pagination.list[0]).toEqual({ id: 1, name: 'Item 1' })
  })

  it('should support dynamic list callback function as parameter', () => {
    const props = ref({
      list: sampleList,
      search: 'Item 1',
      searchColumns: ['name'],
      page: 1,
      rows: 5
    })
    const search = new SearchInclude(props.value, ['name'])
    const pagination = new PaginationInclude(props.value, () => search.list)

    expect(search.isSearch()).toBe(true)
    expect(search.list.length).toBeGreaterThan(0)
    expect(pagination.list).toHaveLength(5)
  })

  it('should calculate max pages correctly and cap page at max page', () => {
    const pagination = new PaginationInclude({ list: sampleList, rows: 10, page: 100 })
    expect(pagination.max).toBe(3)
    expect(pagination.page).toBe(3)
    expect(pagination.list).toHaveLength(5)
    expect(pagination.list[0]).toEqual({ id: 21, name: 'Item 21' })
  })
})
