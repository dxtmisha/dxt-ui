import { describe, it, expect } from 'vitest'
import { TableColumns } from '../TableColumns'
import type { TableProps } from '../props'

describe('TableColumns', () => {
  it('should return columns array when props.columns is specified', () => {
    const tableColumns = new TableColumns({
      columns: ['id', 'name', 'email']
    } as TableProps)

    expect(tableColumns.list).toEqual(['id', 'name', 'email'])
  })

  it('should infer column names from single header object', () => {
    const tableColumns = new TableColumns({
      header: {
        id: { label: 'ID' },
        name: { label: 'Name' },
        status: { label: 'Status' }
      }
    } as TableProps)

    expect(tableColumns.list).toEqual(['id', 'name', 'status'])
  })

  it('should infer column names from last header object in array', () => {
    const tableColumns = new TableColumns({
      header: [
        { group: { label: 'Group' } },
        { id: { label: 'ID' }, title: { label: 'Title' } }
      ]
    } as TableProps)

    expect(tableColumns.list).toEqual(['id', 'title'])
  })

  it('should return empty array when neither columns nor header is provided', () => {
    const tableColumns = new TableColumns({} as TableProps)

    expect(tableColumns.list).toEqual([])
  })
})
