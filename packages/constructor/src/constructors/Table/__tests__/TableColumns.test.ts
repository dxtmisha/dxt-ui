import './testWarnings'
import { describe, expect, it } from 'vitest'
import { TableColumns } from '../TableColumns'
import type { TableProps } from '../props'

describe('TableColumns', () => {
  describe('TableColumns.is()', () => {
    it('should return true when explicit non-empty columns are provided', () => {
      expect(TableColumns.is({ columns: ['id'] })).toBe(true)
      expect(TableColumns.is({ columns: ['id', 'name'] })).toBe(true)
    })

    it('should return false when explicit columns array is empty even if header is provided', () => {
      expect(TableColumns.is({
        columns: [],
        header: { id: 'ID' }
      })).toBe(false)
    })

    it('should return true when columns are omitted and header is filled', () => {
      expect(TableColumns.is({ header: { id: 'ID' } })).toBe(true)
      expect(TableColumns.is({ header: [{ id: 'ID' }] })).toBe(true)
    })

    it('should return false when props are undefined, empty, or header is empty', () => {
      expect(TableColumns.is()).toBe(false)
      expect(TableColumns.is({})).toBe(false)
      expect(TableColumns.is({ header: {} })).toBe(false)
      expect(TableColumns.is({ header: [] })).toBe(false)
    })
  })

  describe('list resolution', () => {
    it('should return explicit columns array when props.columns is specified (including empty array)', () => {
      const explicitColumns = new TableColumns({
        columns: ['id', 'name', 'email'],
        header: { other: 'Other' }
      })
      expect(explicitColumns.list).toEqual(['id', 'name', 'email'])

      const emptyExplicitColumns = new TableColumns({
        columns: [],
        header: { other: 'Other' }
      })
      expect(emptyExplicitColumns.list).toEqual([])
    })

    it('should infer column names from single header object or last object in header array', () => {
      const fromSingleHeader = new TableColumns({
        header: {
          id: { label: 'ID' },
          name: { label: 'Name' },
          status: { label: 'Status' }
        }
      })
      expect(fromSingleHeader.list).toEqual(['id', 'name', 'status'])

      const fromMultiRowHeader = new TableColumns({
        header: [
          { group: { label: 'Group', colspan: 2 } },
          { id: { label: 'ID' }, title: { label: 'Title' } }
        ]
      })
      expect(fromMultiRowHeader.list).toEqual(['id', 'title'])
    })

    it('should return empty array when neither columns nor valid header object is provided', () => {
      expect(new TableColumns({}).list).toEqual([])
      expect(new TableColumns({ header: [] }).list).toEqual([])
      expect(new TableColumns({ header: ['primitive'] as unknown as TableProps['header'] }).list).toEqual([])
      expect(new TableColumns({ header: 'invalid' as unknown as TableProps['header'] }).list).toEqual([])
    })
  })

  describe('getColStyle(), getCol(), and cols', () => {
    it('should format numeric widths including 0, preserve non-empty strings, and ignore invalid or prototype keys', () => {
      const tableColumns = new TableColumns({
        columns: ['zero', 'numeric', 'percent', 'empty', 'nanWidth', 'infinityWidth', 'toString', 'constructor', 'missing'],
        columnsWidth: {
          zero: 0,
          numeric: 200,
          percent: '25%',
          empty: '',
          nanWidth: Number.NaN,
          infinityWidth: Number.POSITIVE_INFINITY
        }
      })

      expect(tableColumns.getColStyle('zero')).toEqual({ width: '0px' })
      expect(tableColumns.getColStyle('numeric')).toEqual({ width: '200px' })
      expect(tableColumns.getColStyle('percent')).toEqual({ width: '25%' })
      expect(tableColumns.getColStyle('empty')).toBeUndefined()
      expect(tableColumns.getColStyle('nanWidth')).toBeUndefined()
      expect(tableColumns.getColStyle('infinityWidth')).toBeUndefined()
      expect(tableColumns.getColStyle('toString')).toBeUndefined()
      expect(tableColumns.getColStyle('constructor')).toBeUndefined()
      expect(tableColumns.getColStyle('missing')).toBeUndefined()
    })

    it('should return col attributes via getCol and cols getters', () => {
      const tableColumns = new TableColumns({
        columns: ['id', 'name', 'status'],
        columnsWidth: { id: '80px', name: 200 }
      })

      expect(tableColumns.getCol('id')).toEqual({
        'key': 'col-id',
        'data-col': 'id',
        'style': { width: '80px' }
      })

      expect(tableColumns.cols).toEqual([
        { 'key': 'col-id', 'data-col': 'id', 'style': { width: '80px' } },
        { 'key': 'col-name', 'data-col': 'name', 'style': { width: '200px' } },
        { 'key': 'col-status', 'data-col': 'status', 'style': undefined }
      ])
    })
  })
})
