import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableRecord from './D1TableRecord.vue'
import { TableRecordWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { SortColumnItem } from '@dxtmisha/functional'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableRecord',
  component: D1TableRecord,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableRecordWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableRecordWikiStorybook.getWiki(),
  args: TableRecordWikiStorybook.getValues()
} satisfies Meta<typeof D1TableRecord>

export default meta

type Story = StoryObj<typeof meta>

export const TableRecord: Story = {
  args: {
    disabled: false,
    isHeader: false,
    selected: false,

    tableItemColumnAttrs: {
      name: {
        disabled: true
      }
    }
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TableRecord },
    setup: () => ({ args }),
    template: `
      <table>
      <tbody>
        <D1TableRecord v-bind="args" />
        <D1TableRecord v-bind="args" />
        <D1TableRecord v-bind="args" />
      </tbody>
    </table>
    `
  }),
  play: async ({ canvasElement }) => {
    const tableRows = canvasElement.querySelectorAll<HTMLElement>('tr.d1-tableRecord')
    await expect(tableRows.length).toBe(3)
    const firstRowCells = tableRows[0].querySelectorAll('td, th')
    await expect(firstRowCells.length).toBeGreaterThan(0)
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableRecordIsHeader: Story = {
  name: 'Строка заголовка',
  render: () => ({
    components: { D1TableRecord },
    template: `
        
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <D1TableRecord
              :isHeader="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: 'ID', name: 'Name', role: 'Role', status: 'Status' }"
            />
          </thead>
        </table>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const tableRow = canvasElement.querySelector<HTMLElement>('tr.d1-tableRecord')
    await expect(tableRow).toBeInTheDocument()

    const headerCells = tableRow?.querySelectorAll<HTMLElement>('th')
    await expect(headerCells?.length).toBe(4)
    await expect(headerCells?.[0]).toHaveAttribute('scope', 'col')
    await expect(headerCells?.[0]).toHaveAttribute('data-index', 'id')
    await expect(headerCells?.[0]).toHaveTextContent('ID')
    await expect(headerCells?.[1]).toHaveAttribute('scope', 'col')
    await expect(headerCells?.[1]).toHaveTextContent('Name')
  }
}
export const TableRecordIsFoot: Story = {
  name: 'Строка подвала',
  render: () => ({
    components: { D1TableRecord },
    template: `
        
        <table style="border-collapse: collapse; width: 100%;">
          <tfoot>
            <D1TableRecord
              :isFoot="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: 'Total', name: '4 records', role: '-', status: 'Active' }"
            >
              <template #foot-name="{ value }">
                <strong data-testid="record-foot-name">{{ value }}</strong>
              </template>
              <template #foot-default="{ value, index }">
                <span :data-testid="'record-foot-' + index">{{ value }}</span>
              </template>
            </D1TableRecord>
          </tfoot>
        </table>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const footerRow = canvasElement.querySelector<HTMLElement>('tfoot tr.d1-tableRecord')
    await expect(footerRow).toBeInTheDocument()

    const footerCells = footerRow?.querySelectorAll<HTMLElement>('th')
    await expect(footerCells?.length).toBe(4)
    footerCells?.forEach((footerCell) => {
      expect(footerCell).not.toHaveAttribute('scope')
    })

    await expect(canvas.getByTestId('record-foot-name')).toHaveTextContent('4 records')
    await expect(canvas.getByTestId('record-foot-id')).toHaveTextContent('Total')
    await expect(canvas.getByTestId('record-foot-role')).toHaveTextContent('-')
    await expect(canvas.getByTestId('record-foot-status')).toHaveTextContent('Active')
  }
}
export const TableRecordSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1TableRecord },
    template: `
        
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <D1TableRecord
              :isHeader="true"
              :columns="['id', 'name', 'status']"
              :item="{ id: 'ID', name: 'Name', status: 'Status' }"
            >
              <template #header-name="{ value }">
                <span data-testid="record-slot-header-name">Header: {{ value }}</span>
              </template>
              <template #header-default="{ value, index }">
                <span :data-testid="'record-slot-header-' + index">{{ value }}</span>
              </template>
            </D1TableRecord>
          </thead>
          <tbody>
            <D1TableRecord
              :columns="['id', 'name', 'status']"
              :item="{ id: '1', name: 'Alice', status: 'Active' }"
            >
              <template #name="{ value }">
                <strong data-testid="record-slot-cell-name">{{ value }}</strong>
              </template>
              <template #default="{ value, index }">
                <span :data-testid="'record-slot-cell-' + index">{{ value }}</span>
              </template>
            </D1TableRecord>
          </tbody>
        </table>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('record-slot-header-name')).toHaveTextContent('Header: Name')
    await expect(canvas.getByTestId('record-slot-header-id')).toHaveTextContent('ID')
    await expect(canvas.getByTestId('record-slot-header-status')).toHaveTextContent('Status')
    await expect(canvas.getByTestId('record-slot-cell-name')).toHaveTextContent('Alice')
    await expect(canvas.getByTestId('record-slot-cell-id')).toHaveTextContent('1')
    await expect(canvas.getByTestId('record-slot-cell-status')).toHaveTextContent('Active')
  }
}
export const TableRecordSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableRecord, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <D1TableRecord
                :isSkeleton="true"
                :columns="['id', 'name', 'role', 'status']"
                :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
              />
            </tbody>
          </table>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const tableRow = canvasElement.querySelector<HTMLElement>('tr.d1-tableRecord')
    await expect(tableRow).toBeInTheDocument()

    const skeletonElements = tableRow?.querySelectorAll('[class*="skeleton__textVariant"]')
    await expect(skeletonElements?.length).toBe(4)
  }
}
export const TableRecordTestStatesRowHeaderAndSort: Story = {
  name: 'Тест: Заголовок ячейки строки, состояния, липкость, атрибуты, *none и событие sort',
  render: () => ({
    components: { D1TableRecord },
    setup() {
      const emittedSort = ref<string>('none')
      const onSort = (item: SortColumnItem) => {
        emittedSort.value = (item.column || 'none') + ':' + (item.dir || 'none')
      }
      return {
        emittedSort,
        onSort
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="record-sort-event">{{ emittedSort }}</div>
          <table style="border-collapse: collapse; width: 100%;">
            <thead>
              <D1TableRecord
                index="header-row"
                :isHeader="true"
                :columns="['title', 'metric', 'hidden']"
                :item="{ title: { label: 'Title', showSort: true }, metric: 'Metric', hidden: '*none' }"
                @sort="onSort"
              />
            </thead>
            <tbody>
              <D1TableRecord
                index="row-1"
                :selected="true"
                :disabled="true"
                :stickyTop="true"
                :stickyLeft="['title']"
                :tableItemAttrs="{ 'data-common-cell': 'true' }"
                :tableItemColumnAttrs="{ metric: { align: 'right', 'data-metric-cell': 'yes' } }"
                :columns="['title', 'metric', 'hidden']"
                :item="{ title: { label: 'Q1 Summary', isHeader: true }, metric: '420', hidden: '*none' }"
              />
              <D1TableRecord
                :columns="['title', 'metric']"
                :item="{ index: 'derived-index', title: 'Row 2', metric: '180' }"
              />
            </tbody>
          </table>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const tableRows = canvasElement.querySelectorAll<HTMLElement>('tr.d1-tableRecord')
    await expect(tableRows.length).toBe(3)

    // 0. Header row: data-key, *none cell class, and @sort forwarding
    const headerRow = tableRows[0]
    await expect(headerRow).toHaveAttribute('data-key', 'header-row')
    const hiddenHeaderCell = headerRow.querySelector<HTMLElement>('[data-index="hidden"]')
    await expect(hiddenHeaderCell?.className).toContain('--none')

    const sortButton = headerRow.querySelector<HTMLElement>('th[data-index="title"] [role="button"], th[data-index="title"] button')
    await expect(sortButton).toBeInTheDocument()
    await step('Clicking sort button in header row emits sort event from TableRecord', async () => {
      await userEvent.click(sortButton as HTMLElement)
      await expect(canvas.getByTestId('record-sort-event')).toHaveTextContent('title:asc')
    })

    // 1. Body row with per-cell isHeader (scope="row"), selected + disabled, stickyTop/stickyLeft, attrs
    const firstBodyRow = tableRows[1]
    await expect(firstBodyRow).toHaveAttribute('data-key', 'row-1')
    await expect(firstBodyRow).toHaveClass('d1-tableRecord--selected')
    await expect(firstBodyRow).toHaveClass('d1-tableRecord--disabled')
    await expect(firstBodyRow).toHaveAttribute('aria-selected', 'true')
    await expect(firstBodyRow).toHaveAttribute('aria-disabled', 'true')

    const rowHeaderCell = firstBodyRow.querySelector<HTMLElement>('[data-index="title"]')
    await expect(rowHeaderCell?.tagName).toBe('TH')
    await expect(rowHeaderCell).toHaveAttribute('scope', 'row')
    await expect(rowHeaderCell).toHaveAttribute('data-common-cell', 'true')
    await expect(rowHeaderCell?.className).toContain('--stickyTop')
    await expect(rowHeaderCell?.className).toContain('--stickyLeft')

    const metricCell = firstBodyRow.querySelector<HTMLElement>('[data-index="metric"]')
    await expect(metricCell?.tagName).toBe('TD')
    await expect(metricCell).toHaveAttribute('data-common-cell', 'true')
    await expect(metricCell).toHaveAttribute('data-metric-cell', 'yes')
    await expect(metricCell?.className).toContain('--align--right')
    await expect(metricCell?.className).toContain('--stickyTop')
    await expect(metricCell?.className).not.toContain('--stickyLeft')

    const hiddenBodyCell = firstBodyRow.querySelector<HTMLElement>('[data-index="hidden"]')
    await expect(hiddenBodyCell?.className).toContain('--none')

    // 2. Fallback data-key derived from item.index
    await expect(tableRows[2]).toHaveAttribute('data-key', 'derived-index')
  }
}
// :story-items [!] System label / Системная метка
