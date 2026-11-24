// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { TextInclude } from '../../../classes/TextInclude'

import { PaginationEvent } from '../PaginationEvent'
import { PaginationMenuRows } from '../PaginationMenuRows'
import { PaginationPage } from '../PaginationPage'
import type { PaginationProps } from '../props'

describe('PaginationMenuRows', () => {
  const createFixture = (initialProps: Partial<PaginationProps> = {}) => {
    const props = reactive<PaginationProps>({
      rows: 20,
      count: 100,
      ...initialProps
    })
    const text = new TextInclude(props)
    const page = new PaginationPage(props, () => text)
    const eventClick = new EventClickInclude(props)
    const modelRows = new ModelInclude<number>('rows')
    const modelValue = new ModelInclude<number>('value')
    const event = new PaginationEvent(
      () => eventClick,
      () => modelRows,
      () => modelValue,
      () => page
    )
    const menuRows = new PaginationMenuRows(
      props,
      () => event,
      () => page,
      () => text
    )

    return { props, text, page, event, menuRows }
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Static predicate guard (PaginationMenuRows.is)', () => {
    it('should return true only when menuRows is a non-empty array', () => {
      expect(PaginationMenuRows.is(undefined)).toBe(false)
      expect(PaginationMenuRows.is({})).toBe(false)
      expect(PaginationMenuRows.is({ menuRows: [] })).toBe(false)
      expect(PaginationMenuRows.is({ menuRows: [10] })).toBe(true)
      expect(PaginationMenuRows.is({ menuRows: [10, 20, 50] })).toBe(true)
    })
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should compute menuList options and localized rowsPerPage label', () => {
      const { menuRows } = createFixture({
        menuRows: [10, 20, 50],
        textRowsPerPage: 'Rows count'
      })

      expect(menuRows.menuList.value).toEqual([
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' }
      ])
      expect(menuRows.labelRowsPerPage).toBe('Rows count')
    })

    it('should return undefined menuList when menuRows is omitted', () => {
      const { menuRows } = createFixture({ menuRows: undefined })

      expect(menuRows.menuList.value).toBeUndefined()
    })

    it('should build menu binds synchronized with normalized page.rows (including modelRows and string rows)', () => {
      const { menuRows, event, page } = createFixture({
        menuRows: [10, 20, 50],
        modelRows: '20',
        menuAttrs: { 'data-menu-custom': 'yes' }
      })

      const binds = menuRows.binds

      expect(binds.key).toBe('menuRows')
      expect(binds.selected).toBe(20)
      expect(binds.list).toEqual([
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' }
      ])
      expect(binds.onClick).toBe(event.onClick)
      expect(binds.itemAttrs).toEqual({
        'data-event-type': 'rows'
      })
      expect(binds['data-menu-custom']).toBe('yes')

      page.setRows(50)
      expect(menuRows.binds.selected).toBe(50)
    })
  })

  describe('Attribute merging & non-destructive behavior', () => {
    it('should preserve data-event-type=rows when menuAttrs also defines itemAttrs and compose onClick handlers', () => {
      const customClick = vi.fn()
      const { menuRows, event } = createFixture({
        menuRows: [10, 20],
        menuAttrs: {
          class: 'custom-menu',
          onClick: customClick,
          itemAttrs: {
            'class': 'custom-item',
            'data-extra': 'ok'
          }
        }
      })

      const binds = menuRows.binds

      expect(binds.class).toBe('custom-menu')
      expect(binds.itemAttrs).toEqual({
        'data-event-type': 'rows',
        'class': 'custom-item',
        'data-extra': 'ok'
      })
      expect(Array.isArray(binds.onClick)).toBe(true)
      expect(binds.onClick).toEqual([event.onClick, customClick])
    })

    it('should not instantiate lazy dependencies during constructor execution', () => {
      const eventGetter = vi.fn()
      const pageGetter = vi.fn()
      const textGetter = vi.fn()

      const menuRows = new PaginationMenuRows(
        reactive<PaginationProps>({ menuRows: [10, 20] }),
        eventGetter,
        pageGetter,
        textGetter
      )

      expect(menuRows).toBeInstanceOf(PaginationMenuRows)
      expect(eventGetter).not.toHaveBeenCalled()
      expect(pageGetter).not.toHaveBeenCalled()
      expect(textGetter).not.toHaveBeenCalled()
    })
  })
})
