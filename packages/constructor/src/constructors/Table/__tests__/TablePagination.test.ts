import { describe, it, expect } from 'vitest'
import { TablePagination } from '../TablePagination'
import type { TableProps } from '../props'

describe('TablePagination', () => {
  const sampleList = Array.from({ length: 25 }, (_, index) => ({ id: index + 1, name: `Item ${index + 1}` }))

  it('should return full list when rows prop is not specified or 0', () => {
    const pagination = new TablePagination({ list: sampleList } as TableProps)
    expect(pagination.rows).toBe(0)
    expect(pagination.page).toBe(1)
    expect(pagination.list).toHaveLength(25)
    expect(pagination.list).toEqual(sampleList)
  })

  it('should return first page slice when rows is specified', () => {
    const pagination = new TablePagination({ list: sampleList, rows: 10 } as TableProps)
    expect(pagination.rows).toBe(10)
    expect(pagination.page).toBe(1)
    expect(pagination.list).toHaveLength(10)
    expect(pagination.list[0]).toEqual({ id: 1, name: 'Item 1' })
    expect(pagination.list[9]).toEqual({ id: 10, name: 'Item 10' })
  })

  it('should return second page slice when rows and page are specified', () => {
    const pagination = new TablePagination({ list: sampleList, rows: 10, page: 2 } as TableProps)
    expect(pagination.rows).toBe(10)
    expect(pagination.page).toBe(2)
    expect(pagination.list).toHaveLength(10)
    expect(pagination.list[0]).toEqual({ id: 11, name: 'Item 11' })
    expect(pagination.list[9]).toEqual({ id: 20, name: 'Item 20' })
  })

  it('should return partial slice on the last page', () => {
    const pagination = new TablePagination({ list: sampleList, rows: 10, page: 3 } as TableProps)
    expect(pagination.rows).toBe(10)
    expect(pagination.page).toBe(3)
    expect(pagination.list).toHaveLength(5)
    expect(pagination.list[0]).toEqual({ id: 21, name: 'Item 21' })
    expect(pagination.list[4]).toEqual({ id: 25, name: 'Item 25' })
  })

  it('should handle string page and rows values', () => {
    const pagination = new TablePagination({ list: sampleList, rows: '5', page: '2' } as TableProps)
    expect(pagination.rows).toBe(5)
    expect(pagination.page).toBe(2)
    expect(pagination.list).toHaveLength(5)
    expect(pagination.list[0]).toEqual({ id: 6, name: 'Item 6' })
  })

  it('should return 0 rows and full list if rows is 0 or negative', () => {
    const paginationZero = new TablePagination({ list: sampleList, rows: 0 } as TableProps)
    expect(paginationZero.rows).toBe(0)
    expect(paginationZero.list).toHaveLength(25)

    const paginationNegative = new TablePagination({ list: sampleList, rows: -5 } as TableProps)
    expect(paginationNegative.rows).toBe(0)
    expect(paginationNegative.list).toHaveLength(25)
  })

  it('should fallback page to 1 if page is invalid or <= 0', () => {
    const paginationInvalidPage = new TablePagination({ list: sampleList, rows: 10, page: -1 } as TableProps)
    expect(paginationInvalidPage.page).toBe(1)
    expect(paginationInvalidPage.list[0]).toEqual({ id: 1, name: 'Item 1' })
  })
})
