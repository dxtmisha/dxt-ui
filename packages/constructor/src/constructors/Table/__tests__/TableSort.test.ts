import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { TableSort } from '../TableSort'

describe('TableSort', () => {
  const sampleList = [
    { id: 3, category: 'A', name: 'Charlie', age: 30 },
    { id: 1, category: 'B', name: 'Alice', age: 25 },
    { id: 4, category: 'A', name: 'Alice', age: 20 },
    { id: 2, category: 'B', name: 'Bob', age: 35 }
  ]

  it('should update reactive sortColumn and sortDir and emit sort event on onSort call', () => {
    const emits = vi.fn()
    const props = ref({})

    const sort = new TableSort(props.value, () => sampleList, emits)
    expect(sort.isSort()).toBe(false)
    expect(sort.sortColumn.value).toBeUndefined()
    expect(sort.sortDir.value).toBeUndefined()

    // Trigger onSort
    sort.onSort({ column: 'age', dir: 'desc' })

    expect(sort.sortColumn.value).toBe('age')
    expect(sort.sortDir.value).toBe('desc')
    expect(sort.isSort()).toBe(true)
    expect(sort.column).toBe('age')
    expect(sort.dir).toBe('desc')
    expect(sort.getList().map(item => item.age)).toEqual([35, 30, 25, 20])
    expect(emits).toHaveBeenLastCalledWith('sort', { column: 'age', dir: 'desc' })

    // Reset sort via onSort
    sort.onSort({ column: undefined, dir: undefined })

    expect(sort.sortColumn.value).toBeUndefined()
    expect(sort.sortDir.value).toBeUndefined()
    expect(sort.isSort()).toBe(false)
    expect(emits).toHaveBeenLastCalledWith('sort', { column: undefined, dir: undefined })
  })

  it('should fall back to props.sort initially and override with reactive sort state on sort action', () => {
    const emits = vi.fn()
    const props = ref({
      sort: 'name',
      sortDir: 'asc' as const
    })

    const sort = new TableSort(props.value, () => sampleList, emits)
    // Initial state uses props.sort as fallback
    expect(sort.column).toBe('name')
    expect(sort.dir).toBe('asc')
    expect(sort.getList().map(item => item.name)).toEqual(['Alice', 'Alice', 'Bob', 'Charlie'])

    // Interactive sort takes priority
    sort.onSort({ column: 'age', dir: 'desc' })
    expect(sort.column).toBe('age')
    expect(sort.dir).toBe('desc')
    expect(sort.getList().map(item => item.age)).toEqual([35, 30, 25, 20])
  })
})
