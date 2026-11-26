// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, provide, reactive, ref } from 'vue'
import type { SortColumnItem, SortDir } from '@dxtmisha/functional'

import type { SortColumn } from '../../../types/sortTypes'
import { TableHeaderItemSort } from '../TableHeaderItemSort'
import type { TableHeaderItemProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('TableHeaderItemSort', () => {
  describe('Static predicate guard', () => {
    it('should return true only when showSort is truthy', () => {
      expect(TableHeaderItemSort.is()).toBe(false)
      expect(TableHeaderItemSort.is({})).toBe(false)
      expect(TableHeaderItemSort.is({ showSort: false })).toBe(false)
      expect(TableHeaderItemSort.is({ showSort: true })).toBe(true)
    })
  })

  describe('Column, direction, item, and isSorted resolution', () => {
    it('should resolve string index, numeric 0 index, and undefined index without falsy zero loss', () => {
      const stringSort = new TableHeaderItemSort({ index: 'column_key' })
      expect(stringSort.column).toBe('column_key')

      const zeroSort = new TableHeaderItemSort({ index: 0, sortColumn: 0, sortDir: 'asc' })
      expect(zeroSort.column).toBe('0')
      expect(zeroSort.getSortColumn()).toBe('0')
      expect(zeroSort.dir).toBe('asc')
      expect(zeroSort.item).toEqual({ column: '0', dir: 'asc' })
      expect(zeroSort.isSorted()).toBe(true)

      const emptySort = new TableHeaderItemSort({ sortDir: 'asc' })
      expect(emptySort.column).toBe('')
      expect(emptySort.getSortColumn()).toBe('')
      expect(emptySort.isSorted()).toBe(false)
    })

    it('should evaluate isSorted across matching, mismatching, and missing sortDir props', () => {
      const unsorted = new TableHeaderItemSort({
        index: 'title',
        sortColumn: 'author',
        sortDir: 'asc'
      })
      expect(unsorted.isSorted()).toBe(false)

      const sorted = new TableHeaderItemSort({
        index: 'title',
        sortColumn: 'title',
        sortDir: 'asc'
      })
      expect(sorted.isSorted()).toBe(true)

      const noDir = new TableHeaderItemSort({
        index: 'title',
        sortColumn: 'title'
      })
      expect(noDir.isSorted()).toBe(false)
    })

    it('should prioritize explicit/injected refs over props and react to ref updates', () => {
      const sortColumnRef = ref<SortColumn | undefined>('author')
      const sortDirRef = ref<SortDir | undefined>('desc')
      const props = reactive<TableHeaderItemProps>({
        index: 'title',
        sortColumn: 'title',
        sortDir: 'asc'
      })

      const sort = new TableHeaderItemSort(props, undefined, sortColumnRef, sortDirRef)
      expect(sort.getSortColumn()).toBe('author')
      expect(sort.dir).toBe('desc')
      expect(sort.isSorted()).toBe(false)

      sortColumnRef.value = 'title'
      expect(sort.isSorted()).toBe(true)
      expect(sort.item).toEqual({ column: 'title', dir: 'desc' })

      sortColumnRef.value = undefined
      sortDirRef.value = undefined
      expect(sort.getSortColumn()).toBe('title')
      expect(sort.dir).toBe('asc')
      expect(sort.isSorted()).toBe(true)
    })

    it('should inject sortColumn and sortDir when instantiated inside Vue setup()', async () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const providedColumn = ref<SortColumn | undefined>('price')
      const providedDir = ref<SortDir | undefined>('asc')
      let capturedSort!: TableHeaderItemSort

      const Child = defineComponent({
        setup() {
          capturedSort = new TableHeaderItemSort({ index: 'price' })
          return () => h('span', capturedSort.dir ?? 'none')
        }
      })

      const Parent = defineComponent({
        setup() {
          provide('sortColumn', providedColumn)
          provide('sortDir', providedDir)
          return () => h(Child)
        }
      })

      const app = createApp(Parent)
      app.mount(host)
      cleanups.push(() => app.unmount())
      await nextTick()

      expect(capturedSort.getSortColumn()).toBe('price')
      expect(capturedSort.dir).toBe('asc')
      expect(capturedSort.isSorted()).toBe(true)
    })
  })

  describe('chipExtra and 3-state onSort emission cycle', () => {
    it('should return unsorted and sorted (asc/desc) chipExtra bindings', () => {
      const props = reactive<TableHeaderItemProps>({
        index: 'title',
        sortColumn: 'author',
        iconSort: 'sort-default',
        iconArrowUp: 'custom-up',
        iconArrowDown: 'custom-down'
      })
      const sort = new TableHeaderItemSort(props)

      expect(sort.chipExtra()).toEqual({
        icon: 'sort-default',
        onClick: sort.onSort
      })

      props.sortColumn = 'title'
      props.sortDir = 'asc'
      expect(sort.chipExtra()).toEqual({
        icon: {
          icon: 'custom-up',
          iconActive: 'custom-down',
          active: false
        },
        selected: true,
        onClick: sort.onSort
      })

      props.sortDir = 'desc'
      expect(sort.chipExtra()).toEqual({
        icon: {
          icon: 'custom-up',
          iconActive: 'custom-down',
          active: true
        },
        selected: true,
        onClick: sort.onSort
      })
    })

    it('should emit sort events in full 3-state cycle (undefined -> asc -> desc -> undefined) including numeric 0 column', () => {
      const emitted: SortColumnItem[] = []
      const props = reactive<TableHeaderItemProps>({
        index: 0
      })
      const sort = new TableHeaderItemSort(
        props,
        (event, item) => {
          if (event === 'sort') {
            emitted.push(item)
          }
        }
      )

      // Unsorted -> asc
      sort.onSort()
      expect(emitted[0]).toEqual({ column: '0', dir: 'asc' })

      // asc -> desc
      props.sortColumn = 0
      props.sortDir = 'asc'
      sort.onSort()
      expect(emitted[1]).toEqual({ column: '0', dir: 'desc' })

      // desc -> undefined
      props.sortDir = 'desc'
      sort.onSort()
      expect(emitted[2]).toEqual({ column: undefined, dir: undefined })

      // Another column sorted -> clicking this column starts at asc
      props.sortColumn = 'other'
      props.sortDir = 'desc'
      sort.onSort()
      expect(emitted[3]).toEqual({ column: '0', dir: 'asc' })
    })
  })
})
