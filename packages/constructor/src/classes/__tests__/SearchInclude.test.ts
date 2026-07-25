import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { SearchInclude } from '../SearchInclude'

describe('SearchInclude', () => {
  const sampleList = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
    { id: 4, name: 'David Miller', email: 'david@example.com', role: 'Admin' },
    { id: 5, name: 'Eve Smith', email: 'eve@example.com', role: 'Editor' }
  ]

  it('should return all items when search query is empty', () => {
    const props = ref({
      list: sampleList,
      search: ''
    })

    const searchInclude = new SearchInclude(props.value, ['name', 'email'])
    expect(searchInclude.isSearch()).toBe(false)
    expect(searchInclude.list).toHaveLength(5)
    expect(searchInclude.length).toBe(5)
  })

  it('should filter items by search query', () => {
    const props = ref({
      list: sampleList,
      search: 'Smith'
    })

    const searchInclude = new SearchInclude(props.value, ['name', 'email'])
    expect(searchInclude.isSearch()).toBe(true)
    expect(searchInclude.list).toHaveLength(2)
    expect(searchInclude.length).toBe(2)
    expect(searchInclude.list[0].name).toContain('Alice')
    expect(searchInclude.list[1].name).toContain('Eve')
  })

  it('should filter items using searchColumns from props over fallback columns', () => {
    const props = ref({
      list: sampleList,
      search: 'Admin',
      searchColumns: ['role']
    })

    const searchInclude = new SearchInclude(props.value, ['name', 'email'])
    expect(searchInclude.isSearch()).toBe(true)
    expect(searchInclude.list).toHaveLength(2)
    expect(searchInclude.list[0].id).toBe(1)
    expect(searchInclude.list[1].id).toBe(4)
  })

  it('should support callback function for dynamic columns', () => {
    const props = ref({
      list: sampleList,
      search: 'Editor'
    })

    const getColumns = (): ('id' | 'name' | 'email' | 'role')[] => ['role']
    const searchInclude = new SearchInclude(props.value, getColumns)

    expect(searchInclude.isSearch()).toBe(true)
    expect(searchInclude.list).toHaveLength(1)
    expect(searchInclude.list[0].name).toBe('Eve Smith')
  })
})
