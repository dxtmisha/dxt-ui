import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableRecord component properties
 *
 * Описания свойств компонента TableRecord
 */
export const wikiDescriptionsTableRecord: StorybookComponentsDescriptionItem = {
  name: 'TableRecord',
  description: {
    en: 'Table row component coordinating column cell rendering from data',
    ru: 'Компонент строки таблицы, координирующий рендеринг ячеек столбцов из данных'
  },
  possibilities: {
    en: [
      'automatic cell generation from `columns` and row `item` object',
      'header row mode via `isHeader` (`<th scope="col">` and `#header-*` slots)',
      'footer row mode via `isFoot` (`<th>` without `scope="col"` and `#foot-*` slots)',
      'per-cell row header support via `isHeader: true` on an individual cell object (`<th scope="row">`)',
      'row-wide `selected` and `disabled` states with ARIA synchronization',
      'dynamic per-column and fallback slots (`#<column>`, `#default`, `#header-<column>`, `#header-default`, `#foot-<column>`, `#foot-default`)',
      'forwarding of `@sort` events from sortable header cells'
    ],
    ru: [
      'автоматическая генерация ячеек на основе `columns` и объекта строки `item`',
      'режим строки заголовка через `isHeader` (`<th scope="col">` и слоты `#header-*`)',
      'режим строки подвала через `isFoot` (`<th>` без `scope="col"` и слоты `#foot-*`)',
      'поддержка заголовков отдельных ячеек строки через `isHeader: true` в объекте ячейки (`<th scope="row">`)',
      'состояния `selected` и `disabled` на уровне всей строки с синхронизацией ARIA',
      'динамические слоты по колонкам и резервные слоты (`#<column>`, `#default`, `#header-<column>`, `#header-default`, `#foot-<column>`, `#foot-default`)',
      'проброс событий `@sort` от сортируемых ячеек заголовка'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { SortColumnItem } from \'@dxtmisha/functional\''
  ],
  render: `
    <table>
      <tbody>
        <DesignComponent v-bind="args" />
        <DesignComponent v-bind="args" />
        <DesignComponent v-bind="args" />
      </tbody>
    </table>
  `,
  play: `
    const tableRows = canvasElement.querySelectorAll<HTMLElement>('tr.design-component')
    await expect(tableRows.length).toBe(3)
    const firstRowCells = tableRows[0].querySelectorAll('td, th')
    await expect(firstRowCells.length).toBeGreaterThan(0)
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TableRecordIsHeader',
      name: {
        en: 'Header row',
        ru: 'Строка заголовка'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <DesignComponent
              :isHeader="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: 'ID', name: 'Name', role: 'Role', status: 'Status' }"
            />
          </thead>
        </table>
      `,
      play: `
        const tableRow = canvasElement.querySelector<HTMLElement>('tr.design-component')
        await expect(tableRow).toBeInTheDocument()

        const headerCells = tableRow?.querySelectorAll<HTMLElement>('th')
        await expect(headerCells?.length).toBe(4)
        await expect(headerCells?.[0]).toHaveAttribute('scope', 'col')
        await expect(headerCells?.[0]).toHaveAttribute('data-index', 'id')
        await expect(headerCells?.[0]).toHaveTextContent('ID')
        await expect(headerCells?.[1]).toHaveAttribute('scope', 'col')
        await expect(headerCells?.[1]).toHaveTextContent('Name')
      `
    },
    {
      id: 'TableRecordIsFoot',
      name: {
        en: 'Footer row',
        ru: 'Строка подвала'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <tfoot>
            <DesignComponent
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
            </DesignComponent>
          </tfoot>
        </table>
      `,
      play: `
        const canvas = within(canvasElement)
        const footerRow = canvasElement.querySelector<HTMLElement>('tfoot tr.design-component')
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
      `
    },
    {
      id: 'TableRecordSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <DesignComponent
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
            </DesignComponent>
          </thead>
          <tbody>
            <DesignComponent
              :columns="['id', 'name', 'status']"
              :item="{ id: '1', name: 'Alice', status: 'Active' }"
            >
              <template #name="{ value }">
                <strong data-testid="record-slot-cell-name">{{ value }}</strong>
              </template>
              <template #default="{ value, index }">
                <span :data-testid="'record-slot-cell-' + index">{{ value }}</span>
              </template>
            </DesignComponent>
          </tbody>
        </table>
      `,
      play: `
        const canvas = within(canvasElement)
        await expect(canvas.getByTestId('record-slot-header-name')).toHaveTextContent('Header: Name')
        await expect(canvas.getByTestId('record-slot-header-id')).toHaveTextContent('ID')
        await expect(canvas.getByTestId('record-slot-header-status')).toHaveTextContent('Status')
        await expect(canvas.getByTestId('record-slot-cell-name')).toHaveTextContent('Alice')
        await expect(canvas.getByTestId('record-slot-cell-id')).toHaveTextContent('1')
        await expect(canvas.getByTestId('record-slot-cell-status')).toHaveTextContent('Active')
      `
    },
    {
      id: 'TableRecordSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <DesignComponent
                :isSkeleton="true"
                :columns="['id', 'name', 'role', 'status']"
                :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
              />
            </tbody>
          </table>
        </DesignSkeleton>
      `,
      play: `
        const tableRow = canvasElement.querySelector<HTMLElement>('tr.design-component')
        await expect(tableRow).toBeInTheDocument()

        const skeletonElements = tableRow?.querySelectorAll('[class*="skeleton__textVariant"]')
        await expect(skeletonElements?.length).toBe(4)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'TableRecordTestStatesRowHeaderAndSort',
      name: {
        en: 'Test: Per-cell header scope, states, sticky, attrs, *none and sort emit',
        ru: 'Тест: Заголовок ячейки строки, состояния, липкость, атрибуты, *none и событие sort'
      },
      setup: `
      const emittedSort = ref<string>('none')
      const onSort = (item: SortColumnItem) => {
        emittedSort.value = (item.column || 'none') + ':' + (item.dir || 'none')
      }
      return {
        emittedSort,
        onSort
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="record-sort-event">{{ emittedSort }}</div>
          <table style="border-collapse: collapse; width: 100%;">
            <thead>
              <DesignComponent
                index="header-row"
                :isHeader="true"
                :columns="['title', 'metric', 'hidden']"
                :item="{ title: { label: 'Title', showSort: true }, metric: 'Metric', hidden: '*none' }"
                @sort="onSort"
              />
            </thead>
            <tbody>
              <DesignComponent
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
              <DesignComponent
                :columns="['title', 'metric']"
                :item="{ index: 'derived-index', title: 'Row 2', metric: '180' }"
              />
            </tbody>
          </table>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const tableRows = canvasElement.querySelectorAll<HTMLElement>('tr.design-component')
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
        await expect(firstBodyRow).toHaveClass('design-component--selected')
        await expect(firstBodyRow).toHaveClass('design-component--disabled')
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableRecord'} type={'tableRecord'}/>

<StorybookDescriptions componentName={'TableRecord'} type={'instruction'}/>

<StorybookDescriptions componentName={'TableRecord'} type={'isHeader'}/>
<Canvas of={Component.TableRecordIsHeader}/>

<StorybookDescriptions componentName={'TableRecord'} type={'isFoot'}/>
<Canvas of={Component.TableRecordIsFoot}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableRecordSkeleton}/>
    `,
    slots: `
<Canvas of={Component.TableRecordSlots}/>
<StorybookDescriptions componentName={'TableRecord'} type={'slots'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'sort'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <table style="border-collapse: collapse; width: 100%;">
    <tbody>
      <TableRecord v-bind="args" />
    </tbody>
  </table>
</div>
    `,
    description: `
Orchestrating component for table rows (tr). Maps list of column indexes to individual cell components (TableHeaderItem for isHeader, isFoot, or per-cell isHeader, or TableItem for data cells) by referencing row item fields.
Allows granular slot customization where slot names match column keys (#<col>, #default, #header-<col>, #header-default, #foot-<col>, #foot-default). Features selection and disabled flags with ARIA attributes and forwards @sort events.
Controlled via columns (array of index strings), item (row data object), index, isHeader, and isFoot. Use to build efficient tables by mapping list datasets to structured row components.
`,
    hide: true
  }
}
