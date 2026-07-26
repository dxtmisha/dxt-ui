import { describe, expect, it } from 'vitest'
import { TableHeaderItemSort } from '../TableHeaderItemSort'
import type { TableHeaderItemProps } from '../props'

describe('TableHeaderItemSort', () => {
  it('should return index as column name', () => {
    const props: TableHeaderItemProps = {
      index: 'column_key'
    }
    const sort = new TableHeaderItemSort(props)

    expect(sort.column).toBe('column_key')
  })

  it('should check isSorted based on sortColumn and sortDir props', () => {
    const unsortedProps: TableHeaderItemProps = {
      index: 'title',
      sortColumn: 'author',
      sortDir: 'asc'
    }
    const unsorted = new TableHeaderItemSort(unsortedProps)
    expect(unsorted.isSorted()).toBe(false)

    const sortedProps: TableHeaderItemProps = {
      index: 'title',
      sortColumn: 'title',
      sortDir: 'asc'
    }
    const sorted = new TableHeaderItemSort(sortedProps)
    expect(sorted.isSorted()).toBe(true)

    const noDirProps: TableHeaderItemProps = {
      index: 'title',
      sortColumn: 'title'
    }
    const noDir = new TableHeaderItemSort(noDirProps)
    expect(noDir.isSorted()).toBe(false)
  })

  it('should return chipExtra for unsorted state', () => {
    const props: TableHeaderItemProps = {
      index: 'title',
      sortColumn: 'author',
      iconSort: 'sort-default'
    }
    const sort = new TableHeaderItemSort(props)

    expect(sort.chipExtra()).toEqual({
      icon: 'sort-default',
      onClick: sort.onSort
    })
  })

  it('should return chipExtra with icon configuration for sorted state', () => {
    const props: TableHeaderItemProps = {
      index: 'title',
      sortColumn: 'title',
      sortDir: 'asc',
      iconArrowUp: 'custom-up',
      iconArrowDown: 'custom-down'
    }
    const sort = new TableHeaderItemSort(props)

    expect(sort.chipExtra()).toEqual({
      icon: {
        icon: 'custom-up',
        iconActive: 'custom-down',
        active: false
      },
      selected: true,
      onClick: sort.onSort
    })
  })
})
