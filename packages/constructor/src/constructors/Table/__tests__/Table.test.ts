import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { Table } from '../Table'
import type { TableProps } from '../props'

describe('Table caption', () => {
  it('should initialize caption with prop', () => {
    const props: TableProps = {
      caption: 'Table Caption Test'
    }
    const refs = {
      caption: ref('Table Caption Test')
    } as any
    const element = ref<HTMLElement>()

    const table = new Table(props, refs, element, 'd1', 'd1-table')

    expect(table.caption.is).toBe(true)
    const rendered = table.caption.render()
    expect(rendered).toHaveLength(1)
  })

  it('should initialize caption with slot', () => {
    const props: TableProps = {}
    const refs = {} as any
    const element = ref<HTMLElement>()
    const slots = {
      caption: () => 'Slot Caption Content'
    }

    const table = new Table(props, refs, element, 'd1', 'd1-table', undefined, slots)

    expect(table.caption.is).toBe(true)
    const rendered = table.caption.render()
    expect(rendered).toHaveLength(1)
  })

  it('should support captionBottom prop', () => {
    const props: TableProps = {
      caption: 'Bottom Caption',
      captionBottom: true
    }
    const refs = {
      caption: ref('Bottom Caption'),
      captionBottom: ref(true)
    } as any
    const element = ref<HTMLElement>()

    const table = new Table(props, refs, element, 'd1', 'd1-table')
    expect(table.caption.is).toBe(true)
  })
})

describe('Table foot', () => {
  it('should support foot prop', () => {
    const props: TableProps = {
      foot: {
        id: 'Total',
        name: 'Summary'
      }
    }
    const refs = {} as any
    const element = ref<HTMLElement>()

    const table = new Table(props, refs, element, 'd1', 'd1-table')
    expect(table).toBeDefined()
  })
})

describe('Table colgroup', () => {
  it('should support columnsWidth prop', () => {
    const props: TableProps = {
      columns: ['id', 'name'],
      columnsWidth: { id: '100px', name: '200px' }
    }
    const refs = {} as any
    const element = ref<HTMLElement>()

    const table = new Table(props, refs, element, 'd1', 'd1-table')
    expect(table.columns.list).toEqual(['id', 'name'])
  })
})
