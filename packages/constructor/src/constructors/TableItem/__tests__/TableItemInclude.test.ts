// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { TableItemInclude } from '../TableItemInclude'
import type { TableItemComponentInclude, TableItemPropsInclude } from '../basicTypes'

describe('TableItemInclude', () => {
  const naming = new DesignName('d1.tableRecord')

  const MockTableItem = defineComponent({
    name: 'MockTableItem',
    props: {
      label: [String, Number],
      description: [String, Number],
      align: String,
      selected: Boolean,
      disabled: Boolean,
      stickyTop: Boolean,
      stickyLeft: Boolean,
      isSkeleton: Boolean,
      index: [String, Number],
      scope: String
    },
    setup(props, { slots }) {
      return () => h('td', { class: 'mock-table-item' }, slots.context?.() ?? String(props.label ?? ''))
    }
  })

  function createComponents() {
    return new DesignComponents<TableItemComponentInclude, TableItemPropsInclude>({
      tableItem: MockTableItem
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Default rendering (renderItem and renderDefault)', () => {
    it('should return undefined when components registry is missing', () => {
      const include = new TableItemInclude({}, naming)
      expect(include.renderItem('row1__name', 'name', { name: 'Alice' })).toBeUndefined()
      expect(include.renderDefault('row1__name', 'name', 'Alice')).toBeUndefined()
    })

    it('should render primitive string, numeric 0, object cell attrs, and *none sentinel', () => {
      const components = createComponents()
      const include = new TableItemInclude(
        {
          selected: true,
          disabled: false,
          stickyTop: true,
          stickyLeft: ['name'],
          isSkeleton: true
        },
        naming,
        components
      )

      const stringVNode = include.renderItem('r1__name', 'name', { name: 'Alice' })
      expect(stringVNode).toBeDefined()
      expect(stringVNode?.key).toBe('.r1__name.name')
      expect(stringVNode?.props).toMatchObject({
        label: 'Alice',
        selected: true,
        disabled: false,
        stickyTop: true,
        stickyLeft: true,
        isSkeleton: true,
        index: 'name'
      })

      const zeroVNode = include.renderItem('r1__count', 'count', { count: 0 })
      expect(zeroVNode?.props).toMatchObject({
        label: 0,
        stickyLeft: false,
        index: 'count'
      })

      const objectVNode = include.renderItem('r1__info', 'info', {
        info: { label: 'Title', description: 'Sub', align: 'right', class: 'cell-extra' }
      })
      expect(objectVNode?.props).toMatchObject({
        label: 'Title',
        description: 'Sub',
        align: 'right',
        index: 'info'
      })
      expect(String(objectVNode?.props?.class)).toContain('d1-tableRecord__tableItem')
      expect(String(objectVNode?.props?.class)).toContain('cell-extra')

      const noneVNode = include.renderItem('r1__hidden', 'hidden', { hidden: '*none' })
      expect(noneVNode?.props?.label).toBeUndefined()
      expect(String(noneVNode?.props?.class)).toContain('d1-tableRecord__tableItem')
      expect(String(noneVNode?.props?.class)).toContain('d1-tableRecord--none')
    })

    it('should resolve getter props, ref attrs, and getter attrs dynamically', () => {
      const components = createComponents()
      const state = reactive<TableItemPropsInclude>({
        selected: false,
        stickyLeft: ['id']
      })
      const include = new TableItemInclude(() => state, naming, components)

      const refAttrs = ref({ align: 'center' as const })
      const firstVNode = include.renderItem('r1__id', 'id', { id: 1 }, refAttrs)
      expect(firstVNode?.props).toMatchObject({
        label: 1,
        selected: false,
        stickyLeft: true,
        align: 'center'
      })

      state.selected = true
      const secondVNode = include.renderItem('r1__id', 'id', { id: 2 }, () => ({ align: 'right' as const }))
      expect(secondVNode?.props).toMatchObject({
        label: 2,
        selected: true,
        align: 'right'
      })
    })
  })

  describe('Non-destructive binding merge and event composition', () => {
    it('should preserve tableItemColumnAttrs and tableItemAttrs when row-level flags are undefined', () => {
      const components = createComponents()
      const include = new TableItemInclude(
        {
          tableItemAttrs: {
            align: 'left',
            class: 'base-cell'
          },
          tableItemColumnAttrs: {
            price: {
              align: 'right',
              disabled: true,
              selected: true,
              stickyTop: true,
              stickyLeft: true,
              isSkeleton: true,
              class: 'price-column'
            }
          }
        },
        naming,
        components
      )

      const vnode = include.renderItem('r1__price', 'price', { price: 100 })
      expect(vnode?.props).toMatchObject({
        label: 100,
        align: 'right',
        disabled: true,
        selected: true,
        stickyTop: true,
        stickyLeft: true,
        isSkeleton: true,
        index: 'price'
      })
      expect(String(vnode?.props?.class)).toContain('base-cell')
      expect(String(vnode?.props?.class)).toContain('price-column')
      expect(String(vnode?.props?.class)).toContain('d1-tableRecord__tableItem')
    })

    it('should compose onClick handlers across tableItemAttrs, columnAttrs, cell value, and extra attrs via mergeProps', () => {
      const components = createComponents()
      const calls: string[] = []
      const include = new TableItemInclude(
        {
          tableItemAttrs: {
            onClick: () => calls.push('tableItemAttrs')
          },
          tableItemColumnAttrs: {
            action: {
              onClick: () => calls.push('columnAttrs')
            }
          }
        },
        naming,
        components
      )

      const vnode = include.renderItem(
        'r1__action',
        'action',
        { action: { label: 'Go', onClick: () => calls.push('cell') } },
        { onClick: () => calls.push('extra') }
      )

      const onClick = vnode?.props?.onClick
      expect(Array.isArray(onClick)).toBe(true)
      ;(onClick as Array<() => void>).forEach(handler => handler())
      expect(calls).toEqual(['tableItemAttrs', 'columnAttrs', 'cell', 'extra'])
    })
  })

  describe('Slot rendering and BEM item classes', () => {
    it('should render column-specific slot with design-prefixed BEM classes and full slot payload', () => {
      const components = createComponents()
      const nameSlot = vi.fn(() => h('span', 'Custom Name'))
      const defaultSlot = vi.fn(() => h('span', 'Default'))
      const include = new TableItemInclude(
        {},
        naming,
        components,
        undefined,
        {
          name: nameSlot,
          default: defaultSlot
        }
      )

      const row = { name: 'Bob', role: 'Admin' }
      const vnode = include.renderItem('r1__name', 'name', row, { align: 'center' })
      expect(vnode).toBeDefined()
      expect(vnode?.props?.align).toBe('center')
      expect(vnode?.props?.label).toBeUndefined()

      const children = vnode?.children as { context?: () => unknown }
      expect(typeof children?.context).toBe('function')
      children.context?.()

      expect(nameSlot).toHaveBeenCalledWith({
        item: row,
        value: 'Bob',
        classes: {
          label: 'd1-tableItem__label',
          description: 'd1-tableItem__description'
        },
        key: 'r1__name',
        index: 'name',
        slotsName: 'name'
      })
      expect(defaultSlot).not.toHaveBeenCalled()
    })

    it('should fall back to default slot when column slot is missing or non-function, and to default renderer when no callable slot exists', () => {
      const components = createComponents()
      const defaultSlot = vi.fn(() => h('span', 'Fallback'))
      const include = new TableItemInclude(
        {},
        naming,
        components,
        undefined,
        {
          role: undefined,
          default: defaultSlot
        }
      )

      const row = { role: 'Editor' }
      const vnode = include.renderItem('r1__role', 'role', row)
      const children = vnode?.children as { context?: () => unknown }
      children.context?.()

      expect(defaultSlot).toHaveBeenCalledWith(expect.objectContaining({
        item: row,
        value: 'Editor',
        slotsName: 'default'
      }))

      const nonCallableOnly = new TableItemInclude(
        {},
        naming,
        components,
        undefined,
        { role: undefined }
      )
      expect(nonCallableOnly.renderSlot('r1__role', 'role', row, 'Editor')).toBeUndefined()
      const fallbackVNode = nonCallableOnly.renderItem('r1__role', 'role', row)
      expect(fallbackVNode?.props?.label).toBe('Editor')
    })

    it('should compute subclass-aware BEM class names when subclass overrides name', () => {
      class CustomHeaderInclude extends TableItemInclude {
        protected override readonly name = 'tableHeaderItem'
      }

      const components = new DesignComponents({
        tableHeaderItem: MockTableItem
      })
      const slotSpy = vi.fn(() => h('span', 'Header'))
      const include = new CustomHeaderInclude(
        {},
        naming,
        components,
        undefined,
        { title: slotSpy }
      )

      const vnode = include.renderItem('h__title', 'title', { title: 'Col' })
      const children = vnode?.children as { context?: () => unknown }
      children.context?.()

      expect(slotSpy).toHaveBeenCalledWith(expect.objectContaining({
        classes: {
          label: 'd1-tableHeaderItem__label',
          description: 'd1-tableHeaderItem__description'
        }
      }))
    })
  })

  describe('Boundary values and prototype safety', () => {
    it('should safely handle null, undefined, primitive rows, and prototype keys without reading Object.prototype', () => {
      const components = createComponents()
      const include = new TableItemInclude(
        {
          tableItemColumnAttrs: {}
        },
        naming,
        components
      )

      const nullRowVNode = include.renderItem('r1__a', 'a', null)
      expect(nullRowVNode?.props?.label).toBeUndefined()

      const primitiveRowVNode = include.renderItem('r1__a', 'a', 'not-an-object')
      expect(primitiveRowVNode?.props?.label).toBeUndefined()

      const protoKeyVNode = include.renderItem('r1__toString', 'toString', { name: 'Safe' })
      expect(protoKeyVNode?.props?.label).toBeUndefined()

      const constructorKeyVNode = include.renderItem('r1__constructor', 'constructor', { name: 'Safe' })
      expect(constructorKeyVNode?.props?.label).toBeUndefined()
    })
  })
})
