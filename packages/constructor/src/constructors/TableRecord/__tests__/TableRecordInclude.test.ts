// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { TableRecordInclude } from '../TableRecordInclude'
import type { TableRecordComponentInclude, TableRecordPropsInclude } from '../basicTypes'

describe('TableRecordInclude', () => {
  const naming = new DesignName('d1.table')

  const MockTableRecord = defineComponent({
    name: 'MockTableRecord',
    props: {
      item: Object,
      columns: Array,
      isHeader: Boolean,
      index: String,
      selected: Boolean,
      disabled: Boolean,
      stickyTop: Boolean,
      stickyLeft: Array,
      isSkeleton: Boolean,
      lazy: Boolean,
      defaultHeight: [String, Number],
      tableItemAttrs: Object,
      tableItemColumnAttrs: Object
    },
    setup(props) {
      return () => h('tr', { 'data-index': props.index })
    }
  })

  function createComponents() {
    return new DesignComponents<TableRecordComponentInclude, TableRecordPropsInclude>({
      tableRecord: MockTableRecord
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Key resolution (getKey)', () => {
    it('should resolve props.keyValue, item.index, item.value, and fallback key in strict priority order', () => {
      const include = new TableRecordInclude({ keyValue: 'id' }, naming)

      expect(include.getKey('fallback', { id: 'custom-1', index: 'idx', value: 'val' })).toBe('custom-1')
      expect(include.getKey('fallback', { index: 'idx', value: 'val' })).toBe('idx')
      expect(include.getKey('fallback', { value: 'val' })).toBe('val')
      expect(include.getKey('fallback', { name: 'No key field' })).toBe('fallback')
      expect(include.getKey(0, undefined)).toBe('0')
    })

    it('should preserve numeric 0 and string "0", ignore empty/NaN/object cell values, and block prototype lookups', () => {
      const include = new TableRecordInclude({ keyValue: 'id' }, naming)

      expect(include.getKey('fallback', { id: 0 })).toBe('0')
      expect(include.getKey('fallback', { id: '0' })).toBe('0')
      expect(include.getKey('fallback', { index: 0 })).toBe('0')
      expect(include.getKey('fallback', { value: 0 })).toBe('0')
      expect(include.getKey('fallback', { id: '', index: '', value: { label: 'Object cell' } })).toBe('fallback')
      expect(include.getKey('fallback', { id: Number.NaN, index: Number.POSITIVE_INFINITY })).toBe('fallback')
      expect(include.getKey('fallback', null)).toBe('fallback')
      expect(include.getKey('fallback', 'primitive')).toBe('fallback')

      const protoInclude = new TableRecordInclude({ keyValue: 'toString' }, naming)
      expect(protoInclude.getKey('fallback', { name: 'Safe' })).toBe('fallback')
    })

    it('should evaluate getter props dynamically in getKey', () => {
      const state = reactive<TableRecordPropsInclude>({ keyValue: 'code' })
      const include = new TableRecordInclude(() => state, naming)

      expect(include.getKey('fb', { code: 'A1', uid: 'U9' })).toBe('A1')

      state.keyValue = 'uid'
      expect(include.getKey('fb', { code: 'A1', uid: 'U9' })).toBe('U9')
    })
  })

  describe('Record rendering (renderRecord)', () => {
    it('should return undefined when components registry is missing', () => {
      const include = new TableRecordInclude({}, naming)
      expect(include.renderRecord('row-0', ['name'], { name: 'Alice' })).toBeUndefined()
    })

    it('should forward parent props, compute selected/stickyTop/disabled, and pass slots and index key', () => {
      const components = createComponents()
      const nameSlot = vi.fn(() => h('span', 'Slot'))
      const columns = ['id', 'name'] as const
      const include = new TableRecordInclude(
        {
          keyValue: 'id',
          selected: ['42'],
          stickyTop: ['42'],
          stickyLeft: ['id'],
          isSkeleton: true,
          lazy: true,
          defaultHeight: 48,
          tableItemAttrs: { align: 'left' },
          tableItemColumnAttrs: { id: { align: 'right' } }
        },
        naming,
        components,
        undefined,
        { name: nameSlot }
      )

      const row = { id: 42, name: 'Alice', disabled: true }
      const vnode = include.renderRecord('item-0', columns, row, false)

      expect(vnode).toBeDefined()
      expect(vnode?.key).toBe('.42.42')
      expect(vnode?.props).toMatchObject({
        index: '42',
        item: row,
        columns,
        isHeader: false,
        selected: true,
        disabled: true,
        stickyTop: true,
        stickyLeft: ['id'],
        isSkeleton: true,
        lazy: true,
        defaultHeight: 48,
        tableItemAttrs: { align: 'left' },
        tableItemColumnAttrs: { id: { align: 'right' } }
      })
      expect(String(vnode?.props?.class)).toContain('d1-table__tableRecord')
      expect(vnode?.children).toMatchObject({ name: nameSlot })
    })

    it('should preserve tableRowAttrs and tableRecordAttrs when parent flags are undefined and allow call-site attrs override', () => {
      const components = createComponents()
      const include = new TableRecordInclude(
        {
          stickyTop: ['header-0'],
          tableRecordAttrs: {
            class: 'record-base'
          },
          tableRowAttrs: {
            'row-1': {
              selected: true,
              disabled: true,
              stickyTop: true,
              class: 'row-special'
            }
          }
        },
        naming,
        components
      )

      const rowVNode = include.renderRecord('row-1', ['name'], { name: 'Bob' })
      expect(rowVNode?.props).toMatchObject({
        selected: true,
        disabled: true,
        stickyTop: false,
        index: 'row-1'
      })
      expect(String(rowVNode?.props?.class)).toContain('d1-table__tableRecord')
      expect(String(rowVNode?.props?.class)).toContain('record-base')
      expect(String(rowVNode?.props?.class)).toContain('row-special')

      const headerVNode = include.renderRecord(
        'header-0',
        ['name'],
        { name: 'Name' },
        true,
        { stickyTop: false }
      )
      expect(headerVNode?.props?.stickyTop).toBe(false)
      expect(headerVNode?.props?.isHeader).toBe(true)
    })

    it('should support ref and getter call-site attrs and compose event listeners via mergeProps', () => {
      const components = createComponents()
      const clickCalls: string[] = []
      const sortCalls: string[] = []
      const include = new TableRecordInclude(
        {
          tableRecordAttrs: {
            onClick: () => clickCalls.push('recordAttrs')
          },
          tableRowAttrs: {
            r1: {
              onClick: () => clickCalls.push('rowAttrs'),
              onSort: () => sortCalls.push('rowAttrs')
            }
          }
        },
        naming,
        components,
        () => ({ onSort: () => sortCalls.push('extra') })
      )

      const refAttrs = ref({
        onClick: () => clickCalls.push('callAttrs'),
        onSort: () => sortCalls.push('callAttrs')
      })
      const vnode = include.renderRecord('r1', ['name'], { name: 'Alice' }, undefined, refAttrs)

      const onClick = vnode?.props?.onClick
      expect(Array.isArray(onClick)).toBe(true)
      ;(onClick as Array<() => void>).forEach(handler => handler())
      expect(clickCalls).toEqual(['recordAttrs', 'rowAttrs', 'callAttrs'])

      const onSort = vnode?.props?.onSort
      expect(Array.isArray(onSort)).toBe(true)
      ;(onSort as Array<() => void>).forEach(handler => handler())
      expect(sortCalls).toEqual(['extra', 'rowAttrs', 'callAttrs'])

      const getterVNode = include.renderRecord(
        'r2',
        ['name'],
        { name: 'Bob', disabled: false },
        undefined,
        () => ({ stickyTop: true })
      )
      expect(getterVNode?.props?.disabled).toBe(false)
      expect(getterVNode?.props?.stickyTop).toBe(true)
    })

    it('should safely ignore prototype keys in tableRowAttrs and handle null/primitive row items', () => {
      const components = createComponents()
      const include = new TableRecordInclude(
        {
          tableRowAttrs: {}
        },
        naming,
        components
      )

      const protoVNode = include.renderRecord('toString', ['a'], null)
      expect(protoVNode).toBeDefined()
      expect(protoVNode?.props?.index).toBe('toString')
      expect(protoVNode?.props?.disabled).toBeUndefined()

      const primitiveVNode = include.renderRecord('constructor', ['a'], 'raw-string')
      expect(primitiveVNode?.props?.index).toBe('constructor')
      expect(primitiveVNode?.props?.disabled).toBeUndefined()
    })
  })
})
