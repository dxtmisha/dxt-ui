import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableFlexRecord component properties
 *
 * Описания свойств компонента TableFlexRecord
 */
export const wikiDescriptionsTableFlexRecord: StorybookComponentsDescriptionItem = {
  name: 'TableFlexRecord',
  description: {
    en: 'Flexbox-based table row component rendering div[role="row"] with lazy viewport virtualization and header/footer slot orchestration',
    ru: 'Компонент строки флекс-таблицы, рендерящий div[role="row"] с ленивой виртуализацией и координацией слотов шапки и подвала'
  },
  possibilities: {
    en: [
      'automatic flex cell generation inside div[role="row"] from `columns` and `item` data',
      'supports flex header rows via `isHeader` with `#header-<column>` and `#header-default` slots',
      'supports flex footer rows via `isFoot` with `#foot-<column>` and `#foot-default` slots',
      'viewport-based lazy row rendering via `lazy` and reserved row height via `defaultHeight` (`--design-component-sys-minHeight`)',
      'row-wide `selected` and `disabled` states with `aria-selected` and `aria-disabled`',
      'dynamic per-column and fallback slots plus `@sort` event bubbling from header cells'
    ],
    ru: [
      'автоматическая генерация флекс-ячеек внутри div[role="row"] из `columns` и `item`',
      'поддержка строк заголовка через `isHeader` со слотами `#header-<column>` и `#header-default`',
      'поддержка итоговых строк подвала через `isFoot` со слотами `#foot-<column>` и `#foot-default`',
      'ленивый рендеринг строк в области видимости через `lazy` и резервирование высоты через `defaultHeight` (`--design-component-sys-minHeight`)',
      'состояния `selected` и `disabled` на уровне всей строки с `aria-selected` и `aria-disabled`',
      'динамические и резервные слоты по колонкам, а также проброс события `@sort` из ячеек заголовка'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { SortColumnItem } from \'@dxtmisha/functional\''
  ],
  render: `
    <div class="wiki-storybook-flex-column">
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
    </div>
  `,
  play: `
    await waitFor(() => {
      const rows = canvasElement.querySelectorAll<HTMLElement>('.design-component')
      expect(rows.length).toBe(3)

      rows.forEach((row) => {
        expect(row.tagName).toBe('DIV')
        expect(row).toHaveAttribute('role', 'row')
        expect(row.querySelectorAll('[role="cell"], [role="columnheader"], [role="rowheader"]').length).toBeGreaterThan(0)
      })
    })
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/slots)
    // =========================================================================
    {
      id: 'TableFlexRecordIsHeader',
      name: {
        en: 'Header row',
        ru: 'Строка заголовка'
      },
      propsName: ['isHeader', 'columns', 'item'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :isHeader="true"
            :columns="['id', 'name', 'role', 'status']"
            :item="{ id: 'ID', name: 'Name', role: 'Role', status: 'Status' }"
          />
        </div>
      `,
      play: `
        const row = canvasElement.querySelector<HTMLElement>('.design-component')
        await expect(row).toBeInTheDocument()
        await expect(row?.tagName).toBe('DIV')
        await expect(row).toHaveAttribute('role', 'row')
        await expect(row).not.toHaveClass('design-component--lazy')

        const headerCells = row?.querySelectorAll<HTMLElement>('[role="columnheader"]')
        await expect(headerCells?.length).toBe(4)
        await expect(headerCells?.[0]).toHaveTextContent('ID')
        await expect(headerCells?.[1]).toHaveTextContent('Name')
        await expect(headerCells?.[2]).toHaveTextContent('Role')
        await expect(headerCells?.[3]).toHaveTextContent('Status')
      `
    },
    {
      id: 'TableFlexRecordIsFoot',
      name: {
        en: 'Footer row (isFoot)',
        ru: 'Строка подвала (isFoot)'
      },
      propsName: ['isFoot', 'columns', 'item'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const row = canvasElement.querySelector<HTMLElement>('.design-component')

        await expect(row).toBeInTheDocument()
        await expect(row?.tagName).toBe('DIV')
        await expect(row).toHaveAttribute('role', 'row')
        await expect(row).not.toHaveClass('design-component--lazy')

        const footCells = row?.querySelectorAll<HTMLElement>('[role="columnheader"]')
        await expect(footCells?.length).toBe(4)
        footCells?.forEach((footCell) => {
          expect(footCell).not.toHaveAttribute('scope')
        })

        await expect(canvas.getByTestId('flex-record-foot-name')).toHaveTextContent('Summary: 4 members')
        await expect(canvas.getByTestId('flex-record-foot-id')).toHaveTextContent('Total')
        await expect(canvas.getByTestId('flex-record-foot-role')).toHaveTextContent('Engineering')
        await expect(canvas.getByTestId('flex-record-foot-status')).toHaveTextContent('Active')
      `
    },
    {
      id: 'TableFlexRecordLazy',
      name: {
        en: 'Lazy rendering and defaultHeight',
        ru: 'Ленивый рендеринг и defaultHeight'
      },
      propsName: ['lazy', 'defaultHeight'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            index="lazy-numeric"
            :lazy="true"
            :defaultHeight="48"
            :columns="['id', 'name', 'status']"
            :item="{ id: '1', name: 'Lazy row (48px)', status: 'Active' }"
          />
          <DesignComponent
            index="lazy-rem"
            :lazy="true"
            defaultHeight="4rem"
            :columns="['id', 'name', 'status']"
            :item="{ id: '2', name: 'Lazy row (4rem)', status: 'Pending' }"
          />
          <DesignComponent
            index="eager-row"
            :lazy="false"
            :defaultHeight="48"
            :columns="['id', 'name', 'status']"
            :item="{ id: '3', name: 'Eager row (lazy=false)', status: 'Active' }"
          />
        </div>
      `,
      play: `
        await waitFor(() => {
          const rows = canvasElement.querySelectorAll<HTMLElement>('.design-component')
          expect(rows.length).toBe(3)

          // 0. Lazy with numeric defaultHeight -> 48px CSS var
          expect(rows[0]).toHaveClass('design-component--lazy')
          expect(rows[0].style.getPropertyValue('--design-component-sys-minHeight')).toBe('48px')
          expect(rows[0].querySelectorAll('[role="cell"]').length).toBe(3)

          // 1. Lazy with CSS length defaultHeight -> 4rem CSS var
          expect(rows[1]).toHaveClass('design-component--lazy')
          expect(rows[1].style.getPropertyValue('--design-component-sys-minHeight')).toBe('4rem')
          expect(rows[1].querySelectorAll('[role="cell"]').length).toBe(3)

          // 2. Eager row (lazy=false) -> no lazy class, no minHeight var
          expect(rows[2]).not.toHaveClass('design-component--lazy')
          expect(rows[2].style.getPropertyValue('--design-component-sys-minHeight')).toBe('')
          expect(rows[2].querySelectorAll('[role="cell"]').length).toBe(3)
        })
      `
    },
    {
      id: 'TableFlexRecordSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              :lazy="false"
              :isSkeleton="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
            />
          </div>
        </DesignSkeleton>
      `,
      play: `
        const row = canvasElement.querySelector<HTMLElement>('.design-component')
        await expect(row).toBeInTheDocument()
        await expect(row).toHaveAttribute('role', 'row')

        const cells = row?.querySelectorAll<HTMLElement>('[role="cell"]')
        await expect(cells?.length).toBe(4)

        const skeletonLabels = row?.querySelectorAll<HTMLElement>('[class*="skeleton__textVariant"]')
        await expect(skeletonLabels?.length).toBeGreaterThan(0)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'TableFlexRecordTestStatesAttrsAndSort',
      name: {
        en: 'Test: States, keys, sticky, cell attrs, *none and @sort event',
        ru: 'Тест: Состояния, ключи, sticky, атрибуты ячеек, *none и событие @sort'
      },
      propsName: ['selected', 'disabled', 'index', 'stickyTop', 'stickyLeft', 'tableItemAttrs', 'tableItemColumnAttrs'],
      setup: `
      const lastSortedColumn = ref<string>('none')
      const handleRecordSort = (item: SortColumnItem) => {
        lastSortedColumn.value = (item.column ?? 'none') + ':' + (item.dir ?? 'none')
      }

      return {
        lastSortedColumn,
        handleRecordSort
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">
            <span data-testid="flex-record-sort-output">{{ lastSortedColumn }}</span>
          </div>
          <DesignComponent
            index="header-sort"
            :isHeader="true"
            :columns="['name', 'score']"
            :item="{ name: { label: 'Name', showSort: true }, score: 'Score' }"
            @sort="handleRecordSort"
          />
          <DesignComponent
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
          <DesignComponent
            :lazy="false"
            disabled
            :columns="['name', 'status']"
            :item="{ index: 'fallback-index', name: 'Archived', status: 'Inactive' }"
          />
          <DesignComponent
            :lazy="false"
            selected
            disabled
            :columns="['name', 'status']"
            :item="{ value: 'fallback-value', name: 'Locked', status: 'Selected' }"
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const rows = canvasElement.querySelectorAll<HTMLElement>('.design-component')
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
        await expect(rows[1]).toHaveClass('design-component--selected')
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
        await expect(dataCells[1]).toHaveClass('design-component--none')

        // 2. Disabled row with fallback item.index key
        await expect(rows[2]).toHaveAttribute('data-key', 'fallback-index')
        await expect(rows[2]).toHaveClass('design-component--disabled')
        await expect(rows[2]).toHaveAttribute('aria-disabled', 'true')
        await expect(rows[2]).not.toHaveAttribute('aria-selected')

        // 3. Combined selected + disabled row with fallback item.value key
        await expect(rows[3]).toHaveAttribute('data-key', 'fallback-value')
        await expect(rows[3]).toHaveClass('design-component--selected')
        await expect(rows[3]).toHaveClass('design-component--disabled')
        await expect(rows[3]).toHaveAttribute('aria-selected', 'true')
        await expect(rows[3]).toHaveAttribute('aria-disabled', 'true')
      `
    },
    {
      id: 'TableFlexRecordTestSlotsAndDefaultHeightEdgeCases',
      name: {
        en: 'Test: Header/body/footer slots and defaultHeight boundary values',
        ru: 'Тест: Слоты шапки/тела/подвала и граничные значения defaultHeight'
      },
      propsName: ['lazy', 'defaultHeight', 'isHeader', 'isFoot'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
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
          </DesignComponent>
          <DesignComponent
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
          </DesignComponent>
          <DesignComponent
            index="negative-height"
            :lazy="true"
            :defaultHeight="-12"
            :columns="['name', 'role']"
            :item="{ name: 'Bob', role: 'Designer' }"
          />
          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)

        await waitFor(() => {
          const rows = canvasElement.querySelectorAll<HTMLElement>('.design-component')
          expect(rows.length).toBe(4)

          // 0. Header row ignores lazy & defaultHeight and projects #header-* / #header-default
          expect(rows[0]).not.toHaveClass('design-component--lazy')
          expect(rows[0].style.getPropertyValue('--design-component-sys-minHeight')).toBe('')
          expect(canvas.getByTestId('record-header-named')).toHaveTextContent('H:Name')
          expect(canvas.getByTestId('record-header-default-role')).toHaveTextContent('HD:Role')

          // 1. Data row with defaultHeight=0 normalizes to 0px and projects #<col> / #default
          expect(rows[1]).toHaveClass('design-component--lazy')
          expect(rows[1].style.getPropertyValue('--design-component-sys-minHeight')).toBe('0px')
          expect(canvas.getByTestId('record-cell-named')).toHaveTextContent('C:Alice')
          expect(canvas.getByTestId('record-cell-default-role')).toHaveTextContent('CD:Engineer')

          // 2. Negative defaultHeight is ignored (empty CSS var)
          expect(rows[2]).toHaveClass('design-component--lazy')
          expect(rows[2].style.getPropertyValue('--design-component-sys-minHeight')).toBe('')

          // 3. Footer row ignores lazy & defaultHeight and projects #foot-* / #foot-default
          expect(rows[3]).not.toHaveClass('design-component--lazy')
          expect(rows[3].style.getPropertyValue('--design-component-sys-minHeight')).toBe('')
          expect(canvas.getByTestId('record-foot-named')).toHaveTextContent('F:2')
          expect(canvas.getByTestId('record-foot-default-name')).toHaveTextContent('FD:Total')
        })
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableFlexRecord'} type={'tableFlexRecord'}/>

<StorybookDescriptions componentName={'TableRecord'} type={'instruction'}/>

<StorybookDescriptions componentName={'TableRecord'} type={'isHeader'}/>
<Canvas of={Component.TableFlexRecordIsHeader}/>

<StorybookDescriptions componentName={'TableRecord'} type={'isFoot'}/>
<Canvas of={Component.TableFlexRecordIsFoot}/>

<StorybookDescriptions componentName={'TableFlexRecord'} type={'lazy'}/>
<Canvas of={Component.TableFlexRecordLazy}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableFlexRecordSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'TableRecord'} type={'slots'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'sort'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <div class="wiki-storybook-flex-column">
    <TableFlexRecord v-bind="args" />
  </div>
</div>
    `,
    description: `
Orchestrating component for flexbox table rows rendering div[role="row"]. Maps a list of column indexes to individual flex cell components (TableFlexHeaderItem or TableFlexItem) by referencing row item fields.
Supports header rows (isHeader), footer rows (isFoot with #foot-<column> and #foot-default slots), viewport-based lazy rendering (lazy, defaultHeight via --[design]-tableFlexRecord-sys-minHeight), row-wide selected/disabled ARIA states, skeleton loading, and @sort event bubbling.
Controlled via columns, item, isHeader, isFoot, lazy, defaultHeight, selected, and disabled. Use inside TableFlex or standalone flexbox lists to render structured tabular rows efficiently.
`,
    hide: true
  }
}
