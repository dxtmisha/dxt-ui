// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { PaginationMenuRows } from '../PaginationMenuRows'

describe('PaginationMenuRows', () => {
  it('should compute menuList correctly if menuRows is provided', () => {
    const props = {
      menuRows: [10, 20, 50],
      rows: 20
    } as any

    const textMock = {
      rowsPerPage: 'Rows count'
    } as any

    const menu = new PaginationMenuRows(props, undefined, textMock)

    expect(menu.menuList.value).toEqual([
      { value: 10, label: '10' },
      { value: 20, label: '20' },
      { value: 50, label: '50' }
    ])

    expect(menu.labelRowsPerPage).toBe('Rows count')
  })

  it('should return undefined menuList if menuRows is missing', () => {
    const props = {} as any
    const menu = new PaginationMenuRows(props)
    expect(menu.menuList.value).toBeUndefined()
  })

  it('should return correct menu binds', () => {
    const mockEvent = {
      onClick: () => {}
    } as any

    const props = {
      menuRows: [10, 20],
      rows: 20,
      menuAttrs: { 'data-menu-custom': 'yes' }
    } as any

    const menu = new PaginationMenuRows(props, mockEvent)
    const binds = menu.binds

    expect(binds.key).toBe('menuRows')
    expect(binds.selected).toBe(20)
    expect(binds.list).toEqual([
      { value: 10, label: '10' },
      { value: 20, label: '20' }
    ])
    expect(binds.onClick).toBe(mockEvent.onClick)
    expect(binds.itemAttrs).toEqual({
      'data-event-type': 'rows'
    })
    expect(binds['data-menu-custom']).toBe('yes')
  })
})
