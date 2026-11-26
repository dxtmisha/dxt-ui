import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableFlexRecord from './D1TableFlexRecord.vue'
import { TableFlexRecordWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { SortColumnItem } from '@dxtmisha/functional'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableFlexRecord',
  component: D1TableFlexRecord,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableFlexRecordWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableFlexRecordWikiStorybook.getWiki(),
  args: TableFlexRecordWikiStorybook.getValues()
} satisfies Meta<typeof D1TableFlexRecord>

export default meta

type Story = StoryObj<typeof meta>

export const TableFlexRecord: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TableFlexRecord },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex-column">
      <D1TableFlexRecord v-bind="args" />
      <D1TableFlexRecord v-bind="args" />
      <D1TableFlexRecord v-bind="args" />
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const rows = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexRecord')
      expect(rows.length).toBe(3)

      rows.forEach((row) => {
        expect(row.tagName).toBe('DIV')
        expect(row).toHaveAttribute('role', 'row')
        expect(row.querySelectorAll('[role="cell"], [role="columnheader"], [role="rowheader"]').length).toBeGreaterThan(0)
      })
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableFlexRecordIsHeader: Story = {
  name: 'Строка заголовка',
  render: () => ({
    components: { D1TableFlexRecord },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TableFlexRecord
            :isHeader="true"
            :columns="['id', 'name', 'role', 'status']"
            :item="{ id: 'ID', name: 'Name', role: 'Role', status: 'Status' }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const row = canvasElement.querySelector<HTMLElement>('.d1-tableFlexRecord')
    await expect(row).toBeInTheDocument()
    await expect(row?.tagName).toBe('DIV')
    await expect(row).toHaveAttribute('role', 'row')
    await expect(row).not.toHaveClass('d1-tableFlexRecord--lazy')

    const headerCells = row?.querySelectorAll<HTMLElement>('[role="columnheader"]')
    await expect(headerCells?.length).toBe(4)
    await expect(headerCells?.[0]).toHaveTextContent('ID')
    await expect(headerCells?.[1]).toHaveTextContent('Name')
    await expect(headerCells?.[2]).toHaveTextContent('Role')
    await expect(headerCells?.[3]).toHaveTextContent('Status')
  }
}
export const TableFlexRecordIsFoot: Story = {
  name: 'Строка подвала (isFoot)',
  render: () => ({
    components: { D1TableFlexRecord },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TableFlexRecord
            :isFoot="true"
            :columns="['id', 'name', 'role', 'status']"
            :item="{ id: 'Total', name: '4 members', role: 'Engineering', status: 'Active' }"
          >
            <template #foot-name="{ value }">
              <strong data-testid="flex-record-foot-name">Summary: {{ value }}</strong>
            </template>
            <template #foot-default="{ index, value }">
              <span :data-testid="'flex-record-foot-' + index">{{ value }}</span>
            </template>
          </D1TableFlexRecord>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const row = canvasElement.querySelector<HTMLElement>('.d1-tableFlexRecord')

    await expect(row).toBeInTheDocument()
    await expect(row?.tagName).toBe('DIV')
    await expect(row).toHaveAttribute('role', 'row')
    await expect(row).not.toHaveClass('d1-tableFlexRecord--lazy')

    const footCells = row?.querySelectorAll<HTMLElement>('[role="columnheader"]')
    await expect(footCells?.length).toBe(4)
    footCells?.forEach((footCell) => {
      expect(footCell).not.toHaveAttribute('scope')
    })

    await expect(canvas.getByTestId('flex-record-foot-name')).toHaveTextContent('Summary: 4 members')
    await expect(canvas.getByTestId('flex-record-foot-id')).toHaveTextContent('Total')
    await expect(canvas.getByTestId('flex-record-foot-role')).toHaveTextContent('Engineering')
    await expect(canvas.getByTestId('flex-record-foot-status')).toHaveTextContent('Active')
  }
}
export const TableFlexRecordLazy: Story = {
  name: 'Ленивый рендеринг и defaultHeight',
  render: () => ({
    components: { D1TableFlexRecord },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TableFlexRecord
            index="lazy-numeric"
            :lazy="true"
            :defaultHeight="48"
            :columns="['id', 'name', 'status']"
            :item="{ id: '1', name: 'Lazy row (48px)', status: 'Active' }"
          />
          <D1TableFlexRecord
            index="lazy-rem"
            :lazy="true"
            defaultHeight="4rem"
            :columns="['id', 'name', 'status']"
            :item="{ id: '2', name: 'Lazy row (4rem)', status: 'Pending' }"
          />
          <D1TableFlexRecord
            index="eager-row"
            :lazy="false"
            :defaultHeight="48"
            :columns="['id', 'name', 'status']"
            :item="{ id: '3', name: 'Eager row (lazy=false)', status: 'Active' }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const rows = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexRecord')
      expect(rows.length).toBe(3)

      // 0. Lazy with numeric defaultHeight -> 48px CSS var
      expect(rows[0]).toHaveClass('d1-tableFlexRecord--lazy')
      expect(rows[0].style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('48px')
      expect(rows[0].querySelectorAll('[role="cell"]').length).toBe(3)

      // 1. Lazy with CSS length defaultHeight -> 4rem CSS var
      expect(rows[1]).toHaveClass('d1-tableFlexRecord--lazy')
      expect(rows[1].style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('4rem')
      expect(rows[1].querySelectorAll('[role="cell"]').length).toBe(3)

      // 2. Eager row (lazy=false) -> no lazy class, no minHeight var
      expect(rows[2]).not.toHaveClass('d1-tableFlexRecord--lazy')
      expect(rows[2].style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('')
      expect(rows[2].querySelectorAll('[role="cell"]').length).toBe(3)
    })
  }
}
export const TableFlexRecordSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableFlexRecord, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1TableFlexRecord
              :lazy="false"
              :isSkeleton="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const row = canvasElement.querySelector<HTMLElement>('.d1-tableFlexRecord')
    await expect(row).toBeInTheDocument()
    await expect(row).toHaveAttribute('role', 'row')

    const cells = row?.querySelectorAll<HTMLElement>('[role="cell"]')
    await expect(cells?.length).toBe(4)

    const skeletonLabels = row?.querySelectorAll<HTMLElement>('[class*="skeleton__textVariant"]')
    await expect(skeletonLabels?.length).toBeGreaterThan(0)
  }
}
export const TableFlexRecordTestStatesAttrsAndSort: Story = {
  name: 'Тест: Состояния, ключи, sticky, атрибуты ячеек, *none и событие @sort',
  render: () => ({
    components: { D1TableFlexRecord },
    setup() {
      const lastSortedColumn = ref<string>('none')
      const handleRecordSort = (item: SortColumnItem) => {
        lastSortedColumn.value = (item.column ?? 'none') + ':' + (item.dir ?? 'none')
      }

      return {
        lastSortedColumn,
        handleRecordSort
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">
            <span data-testid="flex-record-sort-output">{{ lastSortedColumn }}</span>
          </div>
          <D1TableFlexRecord
            index="header-sort"
            :isHeader="true"
            :columns="['name', 'score']"
            :item="{ name: { label: 'Name', showSort: true }, score: 'Score' }"
            @sort="handleRecordSort"
          />
          <D1TableFlexRecord
            index="row-selected"
            :lazy="false"
            selected
            :stickyTop="true"
            :stickyLeft="['metric']"
            :tableItemAttrs="{ dividerX: true }"
            :tableItemColumnAttrs="{ score: { align: 'right', colspan: 2 } }"
            :columns="['metric', 'score', 'hidden']"
            :item="{ metric: { label: 'Revenue', isHeader: true }, score: 0, hidden: '*none' }"
          />
          <D1TableFlexRecord
            :lazy="false"
            disabled
            :columns="['name', 'status']"
            :item="{ index: 'fallback-index', name: 'Archived', status: 'Inactive' }"
          />
          <D1TableFlexRecord
            :lazy="false"
            selected
            disabled
            :columns="['name', 'status']"
            :item="{ value: 'fallback-value', name: 'Locked', status: 'Selected' }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const rows = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexRecord')
    await expect(rows.length).toBe(4)

    // 0. Header row bubbles @sort event when clicking sort button
    const sortButton = rows[0].querySelector<HTMLElement>('[role="button"], button')
    await expect(sortButton).toBeInTheDocument()
    await step('Trigger @sort from header record', async () => {
      await userEvent.click(sortButton!)
      await expect(canvas.getByTestId('flex-record-sort-output')).toHaveTextContent('name:asc')
    })

    // 1. Selected row with mixed header cell, numeric 0, *none marker, tableItemAttrs and tableItemColumnAttrs
    await expect(rows[1]).toHaveAttribute('data-key', 'row-selected')
    await expect(rows[1]).toHaveClass('d1-tableFlexRecord--selected')
    await expect(rows[1]).toHaveAttribute('aria-selected', 'true')
    await expect(rows[1]).not.toHaveAttribute('aria-disabled')

    const inlineHeaderCell = rows[1].querySelector<HTMLElement>('[role="rowheader"]')
    await expect(inlineHeaderCell).toBeInTheDocument()
    await expect(inlineHeaderCell).toHaveTextContent('Revenue')
    expect(inlineHeaderCell?.className).toContain('--stickyLeft')
    expect(inlineHeaderCell?.className).toContain('--stickyTop')
    expect(inlineHeaderCell?.className).toContain('--dividerX')

    const dataCells = rows[1].querySelectorAll<HTMLElement>('[role="cell"]')
    await expect(dataCells.length).toBe(2)
    await expect(dataCells[0]).toHaveTextContent('0')
    await expect(dataCells[0]).toHaveAttribute('data-colspan', '2')
    expect(dataCells[0].className).toContain('--align--right')
    await expect(dataCells[1]).toHaveClass('d1-tableFlexRecord--none')

    // 2. Disabled row with fallback item.index key
    await expect(rows[2]).toHaveAttribute('data-key', 'fallback-index')
    await expect(rows[2]).toHaveClass('d1-tableFlexRecord--disabled')
    await expect(rows[2]).toHaveAttribute('aria-disabled', 'true')
    await expect(rows[2]).not.toHaveAttribute('aria-selected')

    // 3. Combined selected + disabled row with fallback item.value key
    await expect(rows[3]).toHaveAttribute('data-key', 'fallback-value')
    await expect(rows[3]).toHaveClass('d1-tableFlexRecord--selected')
    await expect(rows[3]).toHaveClass('d1-tableFlexRecord--disabled')
    await expect(rows[3]).toHaveAttribute('aria-selected', 'true')
    await expect(rows[3]).toHaveAttribute('aria-disabled', 'true')
  }
}
export const TableFlexRecordTestSlotsAndDefaultHeightEdgeCases: Story = {
  name: 'Тест: Слоты шапки/тела/подвала и граничные значения defaultHeight',
  render: () => ({
    components: { D1TableFlexRecord },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TableFlexRecord
            index="header-slots"
            :isHeader="true"
            :lazy="true"
            :defaultHeight="60"
            :columns="['name', 'role']"
            :item="{ name: 'Name', role: 'Role' }"
          >
            <template #header-name="{ value }">
              <span data-testid="record-header-named">H:{{ value }}</span>
            </template>
            <template #header-default="{ index, value }">
              <span :data-testid="'record-header-default-' + index">HD:{{ value }}</span>
            </template>
          </D1TableFlexRecord>
          <D1TableFlexRecord
            index="body-slots"
            :lazy="true"
            :defaultHeight="0"
            :columns="['name', 'role']"
            :item="{ name: 'Alice', role: 'Engineer' }"
          >
            <template #name="{ value }">
              <span data-testid="record-cell-named">C:{{ value }}</span>
            </template>
            <template #default="{ index, value }">
              <span :data-testid="'record-cell-default-' + index">CD:{{ value }}</span>
            </template>
          </D1TableFlexRecord>
          <D1TableFlexRecord
            index="negative-height"
            :lazy="true"
            :defaultHeight="-12"
            :columns="['name', 'role']"
            :item="{ name: 'Bob', role: 'Designer' }"
          />
          <D1TableFlexRecord
            index="foot-bypass-lazy"
            :isFoot="true"
            :lazy="true"
            :defaultHeight="60"
            :columns="['name', 'role']"
            :item="{ name: 'Total', role: '2' }"
          >
            <template #foot-role="{ value }">
              <span data-testid="record-foot-named">F:{{ value }}</span>
            </template>
            <template #foot-default="{ index, value }">
              <span :data-testid="'record-foot-default-' + index">FD:{{ value }}</span>
            </template>
          </D1TableFlexRecord>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitFor(() => {
      const rows = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexRecord')
      expect(rows.length).toBe(4)

      // 0. Header row ignores lazy & defaultHeight and projects #header-* / #header-default
      expect(rows[0]).not.toHaveClass('d1-tableFlexRecord--lazy')
      expect(rows[0].style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('')
      expect(canvas.getByTestId('record-header-named')).toHaveTextContent('H:Name')
      expect(canvas.getByTestId('record-header-default-role')).toHaveTextContent('HD:Role')

      // 1. Data row with defaultHeight=0 normalizes to 0px and projects #<col> / #default
      expect(rows[1]).toHaveClass('d1-tableFlexRecord--lazy')
      expect(rows[1].style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('0px')
      expect(canvas.getByTestId('record-cell-named')).toHaveTextContent('C:Alice')
      expect(canvas.getByTestId('record-cell-default-role')).toHaveTextContent('CD:Engineer')

      // 2. Negative defaultHeight is ignored (empty CSS var)
      expect(rows[2]).toHaveClass('d1-tableFlexRecord--lazy')
      expect(rows[2].style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('')

      // 3. Footer row ignores lazy & defaultHeight and projects #foot-* / #foot-default
      expect(rows[3]).not.toHaveClass('d1-tableFlexRecord--lazy')
      expect(rows[3].style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('')
      expect(canvas.getByTestId('record-foot-named')).toHaveTextContent('F:2')
      expect(canvas.getByTestId('record-foot-default-name')).toHaveTextContent('FD:Total')
    })
  }
}
// :story-items [!] System label / Системная метка
