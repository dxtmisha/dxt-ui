import { describe, it, expect } from 'vitest'
import { ref, toRefs } from 'vue'
import { TableSearch } from '../TableSearch'
import { TableColumns } from '../TableColumns'
import { TablePagination } from '../TablePagination'
import { Table } from '../Table'

describe('TableSearch', () => {
  const sampleList = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
    { id: 4, name: 'David Miller', email: 'david@example.com', role: 'Admin' },
    { id: 5, name: 'Eve Smith', email: 'eve@example.com', role: 'Editor' }
  ]

  it('should return all items when search query is empty', () => {
    const props = ref<any>({
      list: sampleList,
      search: ''
    })
    const refs = toRefs(props.value) as any
    const columns = new TableColumns({ columns: ['name', 'email'] } as any)

    const tableSearch = new TableSearch(props.value, refs, columns)
    expect(tableSearch.isSearch).toBe(false)
    expect(tableSearch.list).toHaveLength(5)
  })

  it('should filter items by search query', () => {
    const props = ref<any>({
      list: sampleList,
      search: 'Smith'
    })
    const refs = toRefs(props.value) as any
    const columns = new TableColumns({ columns: ['name', 'email'] } as any)

    const tableSearch = new TableSearch(props.value, refs, columns)
    expect(tableSearch.isSearch).toBe(true)
    expect(tableSearch.list).toHaveLength(2)
    expect(tableSearch.list[0].name).toContain('Alice')
    expect(tableSearch.list[1].name).toContain('Eve')
  })

  it('should filter items using specified searchColumns', () => {
    const props = ref<any>({
      list: sampleList,
      search: 'Admin',
      searchColumns: ['role']
    })
    const refs = toRefs(props.value) as any
    const columns = new TableColumns({ columns: ['name', 'email'] } as any)

    const tableSearch = new TableSearch(props.value, refs, columns)
    expect(tableSearch.isSearch).toBe(true)
    expect(tableSearch.list).toHaveLength(2)
    expect(tableSearch.list[0].id).toBe(1)
    expect(tableSearch.list[1].id).toBe(4)
  })

  it('should integrate search with pagination', () => {
    const props = ref<any>({
      list: sampleList,
      search: 'User',
      searchColumns: ['role'],
      page: 1,
      rows: 1
    })
    const refs = toRefs(props.value) as any
    const columns = new TableColumns({ columns: ['role'] } as any)

    const tableSearch = new TableSearch(props.value, refs, columns)
    const tablePagination = new TablePagination(props.value, tableSearch)

    expect(tableSearch.list).toHaveLength(2) // Bob and Charlie are 'User'
    expect(tablePagination.list).toHaveLength(1)
    expect(tablePagination.list[0].id).toBe(2)

    // Page 2
    props.value.page = 2
    expect(tablePagination.list).toHaveLength(1)
    expect(tablePagination.list[0].id).toBe(3)
  })

  it('should initialize Table class with search support', () => {
    const props = ref<any>({
      list: sampleList,
      search: 'David',
      columns: ['name', 'email']
    })
    const refs = toRefs(props.value) as any
    const element = ref<HTMLElement>()

    const table = new Table(
      props.value,
      refs,
      element,
      'd1',
      'd1-table'
    )

    expect(table.search).toBeDefined()
    expect(table.search.isSearch).toBe(true)
    expect(table.pagination.list).toHaveLength(1)
    expect(table.pagination.list[0].name).toContain('David')
  })
})
