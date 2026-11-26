// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { TableHeaderItemInclude } from '../TableHeaderItemInclude'
import type { TableHeaderItemComponentInclude, TableHeaderItemPropsInclude } from '../basicTypes'

describe('TableHeaderItemInclude', () => {
  const naming = new DesignName('d1.tableRecord')

  const MockTableHeaderItem = defineComponent({
    name: 'MockTableHeaderItem',
    props: {
      label: [String, Number],
      description: [String, Number],
      scope: String,
      showSort: Boolean,
      index: [String, Number],
      selected: Boolean,
      disabled: Boolean,
      isSkeleton: Boolean
    },
    setup(props, { slots }) {
      return () => h('th', { class: 'mock-header-item' }, slots.context?.() ?? String(props.label ?? ''))
    }
  })

  function createComponents() {
    return new DesignComponents<TableHeaderItemComponentInclude, TableHeaderItemPropsInclude>({
      tableHeaderItem: MockTableHeaderItem
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Header slot resolution and fallback semantics', () => {
    it('should resolve header-<index> slot even when body default slot is also present', () => {
      const components = createComponents()
      const headerNameSlot = vi.fn(() => h('span', 'Header Name'))
      const bodyDefaultSlot = vi.fn(() => h('span', 'Body Default'))

      const include = new TableHeaderItemInclude(
        {},
        naming,
        components,
        undefined,
        {
          'header-name': headerNameSlot,
          'default': bodyDefaultSlot
        }
      )

      const row = { name: 'Name' }
      const vnode = include.renderItem('h__name', 'name', row, { scope: 'col' })
      expect(vnode).toBeDefined()
      expect(vnode?.props?.scope).toBe('col')

      const children = vnode?.children as { context?: () => unknown }
      expect(typeof children?.context).toBe('function')
      children.context?.()

      expect(headerNameSlot).toHaveBeenCalledWith({
        item: row,
        value: 'Name',
        classes: {
          label: 'd1-tableHeaderItem__label',
          description: 'd1-tableHeaderItem__description'
        },
        key: 'h__name',
        index: 'name',
        slotsName: 'header-name'
      })
      expect(bodyDefaultSlot).not.toHaveBeenCalled()
    })

    it('should fall back to header-default slot when header-<index> is absent, even if body <index> slot exists', () => {
      const components = createComponents()
      const bodyNameSlot = vi.fn(() => h('span', 'Body Name'))
      const headerDefaultSlot = vi.fn(() => h('span', 'Header Default'))

      const include = new TableHeaderItemInclude(
        {},
        naming,
        components,
        undefined,
        {
          'name': bodyNameSlot,
          'header-default': headerDefaultSlot
        }
      )

      const row = { name: 'Title' }
      const vnode = include.renderItem('h__name', 'name', row)
      const children = vnode?.children as { context?: () => unknown }
      children.context?.()

      expect(headerDefaultSlot).toHaveBeenCalledWith(expect.objectContaining({
        item: row,
        value: 'Title',
        slotsName: 'header-default',
        classes: {
          label: 'd1-tableHeaderItem__label',
          description: 'd1-tableHeaderItem__description'
        }
      }))
      expect(bodyNameSlot).not.toHaveBeenCalled()
    })

    it('should fall back to default rendering when no callable header slot exists (ignoring body default slot)', () => {
      const components = createComponents()
      const bodyDefaultSlot = vi.fn(() => h('span', 'Body Default'))

      const include = new TableHeaderItemInclude(
        {},
        naming,
        components,
        undefined,
        {
          'default': bodyDefaultSlot,
          'header-name': undefined
        }
      )

      const vnode = include.renderItem('h__name', 'name', { name: 'Column Label' })
      expect(vnode?.props).toMatchObject({
        label: 'Column Label',
        index: 'name'
      })
      expect(bodyDefaultSlot).not.toHaveBeenCalled()
    })

    it('should resolve foot-<index> and foot-default slots when isFoot is true', () => {
      const components = createComponents()
      const footNameSlot = vi.fn(() => h('span', 'Foot Name'))
      const footDefaultSlot = vi.fn(() => h('span', 'Foot Default'))
      const headerNameSlot = vi.fn(() => h('span', 'Header Name'))

      const include = new TableHeaderItemInclude(
        { isFoot: true } as TableHeaderItemPropsInclude & { isFoot?: boolean },
        naming,
        components,
        undefined,
        {
          'foot-name': footNameSlot,
          'foot-default': footDefaultSlot,
          'header-name': headerNameSlot
        }
      )

      const row = { name: 'Total', age: 100 }
      const nameVNode = include.renderItem('f__name', 'name', row)
      const nameChildren = nameVNode?.children as { context?: () => unknown }
      nameChildren.context?.()
      expect(footNameSlot).toHaveBeenCalledWith(expect.objectContaining({
        item: row,
        value: 'Total',
        slotsName: 'foot-name'
      }))
      expect(headerNameSlot).not.toHaveBeenCalled()

      const ageVNode = include.renderItem('f__age', 'age', row)
      const ageChildren = ageVNode?.children as { context?: () => unknown }
      ageChildren.context?.()
      expect(footDefaultSlot).toHaveBeenCalledWith(expect.objectContaining({
        item: row,
        value: 100,
        slotsName: 'foot-default'
      }))
    })
  })

  describe('Default rendering, extra bindings, and boundary cases', () => {
    it('should render with tableHeaderItem class, forward onSort/scope extra attrs, handle numeric 0 and *none', () => {
      const components = createComponents()
      const onSort = vi.fn()
      const include = new TableHeaderItemInclude(
        {
          selected: true,
          isSkeleton: true
        },
        naming,
        components,
        { onSort }
      )

      const zeroVNode = include.renderItem('h__0', '0', { 0: 0 }, { scope: 'col' })
      expect(zeroVNode).toBeDefined()
      expect(zeroVNode?.props).toMatchObject({
        label: 0,
        index: '0',
        scope: 'col',
        selected: true,
        isSkeleton: true
      })
      expect(String(zeroVNode?.props?.class)).toContain('d1-tableRecord__tableHeaderItem')

      const onSortProp = zeroVNode?.props?.onSort as ((item: unknown) => void) | undefined
      expect(typeof onSortProp).toBe('function')
      onSortProp?.({ column: '0', dir: 'asc' })
      expect(onSort).toHaveBeenCalledWith({ column: '0', dir: 'asc' })

      const noneVNode = include.renderItem('h__hidden', 'hidden', { hidden: '*none' })
      expect(noneVNode?.props?.label).toBeUndefined()
      expect(String(noneVNode?.props?.class)).toContain('d1-tableRecord--none')
    })

    it('should return undefined when components registry is absent and ignore prototype keys', () => {
      const noComponents = new TableHeaderItemInclude({}, naming)
      expect(noComponents.renderItem('h__name', 'name', { name: 'Title' })).toBeUndefined()

      const withComponents = new TableHeaderItemInclude({}, naming, createComponents())
      const protoVNode = withComponents.renderItem('h__toString', 'toString', { name: 'Title' })
      expect(protoVNode?.props?.label).toBeUndefined()
    })
  })
})
