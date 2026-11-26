import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableHeaderItem component properties
 *
 * Описания свойств компонента TableHeaderItem
 */
export const wikiDescriptionsTableHeaderItem: StorybookComponentsDescriptionItem = {
  name: 'TableHeaderItem',
  description: {
    en: 'Table header cell component representing a th element with sorting and tooltip support',
    ru: 'Компонент ячейки заголовка таблицы, представляющий элемент th с поддержкой сортировки и подсказок'
  },
  possibilities: {
    en: [
      'support for standard `th` and custom tag configurations (`tag`) with semantic `scope`',
      'horizontal and vertical header alignment (`align`, `alignVertical`) and cell dividers (`dividerX`, `dividerY`)',
      'interactive 3-state column sorting (`showSort`, `sortColumn`, `sortDir`, `aria-sort`, `@sort`)',
      'integrated tooltip component for extra documentation (`tooltipLabel`, `tooltipDescription`, `tooltipAttrs`)',
      'customizable tooltip and sort icons (`iconTooltip`, `iconSort`, `iconArrowUp`, `iconArrowDown`)',
      'sticky headers and columns support (`stickyTop`, `stickyLeft`)',
      'label text clamping (`labelClamp`), skeleton states (`isSkeleton`), and custom slots (`default`, `description`, `context`, `tooltip`)'
    ],
    ru: [
      'поддержка стандартного `th` и настраиваемых тегов (`tag`) с семантическим `scope`',
      'горизонтальное и вертикальное выравнивание (`align`, `alignVertical`) и разделители (`dividerX`, `dividerY`)',
      'интерактивная 3-состоятельная сортировка колонок (`showSort`, `sortColumn`, `sortDir`, `aria-sort`, `@sort`)',
      'интегрированная всплывающая подсказка для дополнительной документации (`tooltipLabel`, `tooltipDescription`, `tooltipAttrs`)',
      'настраиваемые иконки подсказки и сортировки (`iconTooltip`, `iconSort`, `iconArrowUp`, `iconArrowDown`)',
      'поддержка липких заголовков и столбцов (`stickyTop`, `stickyLeft`)',
      'ограничение высоты текста метки (`labelClamp`), состояния скелетона (`isSkeleton`) и слоты (`default`, `description`, `context`, `tooltip`)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { SortColumnItem } from \'@dxtmisha/functional\''
  ],
  render: `
    <table>
      <thead>
        <tr>
          <DesignComponent v-bind="args"/>
          <DesignComponent v-bind="args"/>
          <DesignComponent v-bind="args"/>
        </tr>
      </thead>
    </table>
  `,
  play: `
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
    await expect(headerCells.length).toBe(3)
    await expect(headerCells[0].tagName).toBe('TH')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TableHeaderItemSort',
      name: {
        en: 'Interactive sorting',
        ru: 'Интерактивная сортировка'
      },
      setup: `
      const sortColumn = ref<string | number | undefined>(undefined)
      const sortDir = ref<'asc' | 'desc' | undefined>(undefined)
      const onSort = (item: SortColumnItem) => {
        sortColumn.value = item.column
        sortDir.value = item.dir
      }
      return {
        sortColumn,
        sortDir,
        onSort
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="header-sort-state">
            {{ sortColumn || 'none' }}:{{ sortDir || 'none' }}
          </div>
          <table style="border-collapse: collapse; width: 100%;">
            <thead>
              <tr>
                <DesignComponent
                  label="Name"
                  index="name"
                  scope="col"
                  :showSort="true"
                  :sortColumn="sortColumn"
                  :sortDir="sortDir"
                  @sort="onSort"
                />
                <DesignComponent
                  label="Age"
                  index="age"
                  scope="col"
                  :showSort="true"
                  :sortColumn="sortColumn"
                  :sortDir="sortDir"
                  @sort="onSort"
                />
                <DesignComponent
                  label="Role"
                  index="role"
                  scope="col"
                />
              </tr>
            </thead>
          </table>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const nameHeader = canvasElement.querySelector<HTMLElement>('th[data-index="name"]')
        const ageHeader = canvasElement.querySelector<HTMLElement>('th[data-index="age"]')
        const roleHeader = canvasElement.querySelector<HTMLElement>('th[data-index="role"]')

        await expect(nameHeader).toBeInTheDocument()
        await expect(ageHeader).toBeInTheDocument()
        await expect(roleHeader).toBeInTheDocument()
        await expect(nameHeader).toHaveAttribute('scope', 'col')
        await expect(nameHeader).not.toHaveAttribute('aria-sort')
        await expect(roleHeader?.querySelector('[role="button"], button')).toBeNull()

        const nameSortButton = nameHeader?.querySelector<HTMLElement>('[role="button"], button')
        const ageSortButton = ageHeader?.querySelector<HTMLElement>('[role="button"], button')
        await expect(nameSortButton).toBeInTheDocument()
        await expect(ageSortButton).toBeInTheDocument()

        await step('First click sorts Name ascending', async () => {
          await userEvent.click(nameSortButton as HTMLElement)
          await expect(canvas.getByTestId('header-sort-state')).toHaveTextContent('name:asc')
          await expect(nameHeader).toHaveAttribute('aria-sort', 'ascending')
          await expect(ageHeader).not.toHaveAttribute('aria-sort')
        })

        await step('Second click sorts Name descending', async () => {
          await userEvent.click(nameSortButton as HTMLElement)
          await expect(canvas.getByTestId('header-sort-state')).toHaveTextContent('name:desc')
          await expect(nameHeader).toHaveAttribute('aria-sort', 'descending')
        })

        await step('Third click resets Name sort', async () => {
          await userEvent.click(nameSortButton as HTMLElement)
          await expect(canvas.getByTestId('header-sort-state')).toHaveTextContent('none:none')
          await expect(nameHeader).not.toHaveAttribute('aria-sort')
        })

        await step('Clicking Age switches active sort column to Age ascending', async () => {
          await userEvent.click(ageSortButton as HTMLElement)
          await expect(canvas.getByTestId('header-sort-state')).toHaveTextContent('age:asc')
          await expect(ageHeader).toHaveAttribute('aria-sort', 'ascending')
          await expect(nameHeader).not.toHaveAttribute('aria-sort')
        })
      `
    },
    {
      id: 'TableHeaderItemTooltip',
      name: {
        en: 'Tooltip support',
        ru: 'Поддержка подсказок'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <DesignComponent
                label="Plain Header"
                scope="col"
              />
              <DesignComponent
                label="Metric"
                scope="col"
                tooltipLabel="Metric definition"
                tooltipDescription="Explains how this column value is computed."
              />
              <DesignComponent
                label="Custom Tooltip Slot"
                scope="col"
                iconTooltip="info"
              >
                <template #tooltip>
                  <span>Custom tooltip slot content</span>
                </template>
              </DesignComponent>
            </tr>
          </thead>
        </table>
      `,
      play: `
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(3)

        await expect(headerCells[0].querySelector('[data-event-type="tooltip"]')).toBeNull()

        const secondTooltipControl = headerCells[1].querySelector<HTMLElement>('[data-event-type="tooltip"]')
        await expect(secondTooltipControl).toBeInTheDocument()
        await expect(secondTooltipControl).toHaveClass('design-component__tooltip')

        const thirdTooltipControl = headerCells[2].querySelector<HTMLElement>('[data-event-type="tooltip"]')
        await expect(thirdTooltipControl).toBeInTheDocument()
        await expect(thirdTooltipControl).toHaveClass('design-component__tooltip')
      `
    },
    {
      id: 'TableHeaderItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <thead>
              <tr>
                <DesignComponent
                  :isSkeleton="true"
                  label="Column A"
                />
                <DesignComponent
                  :isSkeleton="true"
                  label="Column B"
                  description="Description"
                />
              </tr>
            </thead>
          </table>
        </DesignSkeleton>
      `,
      play: `
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(2)

        const skeletonElements = canvasElement.querySelectorAll('[class*="skeleton__textVariant"]')
        await expect(skeletonElements.length).toBeGreaterThanOrEqual(3)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'TableHeaderItemTestScopeStatesAndSlots',
      name: {
        en: 'Test: Scope, spans, states, custom icons, attrs and slots',
        ru: 'Тест: Scope, объединения, состояния, иконки, атрибуты и слоты'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <DesignComponent
                label="Colgroup Span"
                scope="colgroup"
                :colspan="2"
                align="center"
                alignVertical="top"
                :dividerX="true"
                :dividerY="true"
                :stickyTop="true"
              />
              <DesignComponent
                label="Rowgroup Span"
                scope="rowgroup"
                :rowspan="2"
                align="right"
                alignVertical="bottom"
                :labelClamp="true"
                :stickyLeft="true"
              />
            </tr>
            <tr>
              <DesignComponent
                index="price"
                scope="row"
                sortDir="asc"
                :showSort="true"
                :selected="true"
                :disabled="true"
                iconSort="swap_vert"
                iconArrowUp="arrow_upward"
                iconArrowDown="arrow_downward"
                :chipAttrs="{ 'data-sort-chip': 'custom' }"
                :tooltipAttrs="{ 'data-tooltip-custom': 'yes' }"
                tooltipLabel="Price info"
              >
                <template #default>
                  <span data-testid="header-default-slot">Price Slot</span>
                </template>
                <template #description>
                  <span data-testid="header-description-slot">USD</span>
                </template>
                <template #context>
                  <span data-testid="header-context-slot">Context Info</span>
                </template>
              </DesignComponent>
              <DesignComponent
                label="Mismatched Sort Column"
                index="score"
                tag="td"
                sortColumn="other"
                sortDir="desc"
              />
            </tr>
          </thead>
        </table>
      `,
      play: `
        const canvas = within(canvasElement)
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(4)

        // 0. colgroup + colspan + alignment + dividers + stickyTop
        await expect(headerCells[0].tagName).toBe('TH')
        await expect(headerCells[0]).toHaveAttribute('scope', 'colgroup')
        await expect(headerCells[0]).toHaveAttribute('colspan', '2')
        await expect(headerCells[0]).toHaveClass('design-component--align--center')
        await expect(headerCells[0]).toHaveClass('design-component--alignVertical--top')
        await expect(headerCells[0]).toHaveClass('design-component--dividerX')
        await expect(headerCells[0]).toHaveClass('design-component--dividerY')
        await expect(headerCells[0]).toHaveClass('design-component--stickyTop')

        // 1. rowgroup + rowspan + labelClamp + stickyLeft
        await expect(headerCells[1]).toHaveAttribute('scope', 'rowgroup')
        await expect(headerCells[1]).toHaveAttribute('rowspan', '2')
        await expect(headerCells[1]).toHaveClass('design-component--align--right')
        await expect(headerCells[1]).toHaveClass('design-component--alignVertical--bottom')
        await expect(headerCells[1]).toHaveClass('design-component--labelClamp')
        await expect(headerCells[1]).toHaveClass('design-component--stickyLeft')

        // 2. scope="row" + direct sortDir aria-sort + selected/disabled + chipAttrs + slots
        await expect(headerCells[2]).toHaveAttribute('scope', 'row')
        await expect(headerCells[2]).toHaveAttribute('data-index', 'price')
        await expect(headerCells[2]).toHaveAttribute('aria-sort', 'ascending')
        await expect(headerCells[2]).toHaveClass('design-component--selected')
        await expect(headerCells[2]).toHaveClass('design-component--disabled')
        await expect(headerCells[2]).toHaveAttribute('aria-selected', 'true')
        await expect(headerCells[2]).toHaveAttribute('aria-disabled', 'true')
        await expect(headerCells[2].querySelector('[data-sort-chip="custom"]')).toBeInTheDocument()
        await expect(headerCells[2].querySelector('.design-component__body')).toBeInTheDocument()
        await expect(headerCells[2].querySelector('[data-event-type="tooltip"]')).toBeInTheDocument()
        await expect(canvas.getByTestId('header-default-slot')).toHaveTextContent('Price Slot')
        await expect(canvas.getByTestId('header-description-slot')).toHaveTextContent('USD')
        await expect(canvas.getByTestId('header-context-slot')).toHaveTextContent('Context Info')

        // 3. Mismatched sortColumn suppresses aria-sort and tag="td" overrides default th
        await expect(headerCells[3].tagName).toBe('TD')
        await expect(headerCells[3]).not.toHaveAttribute('aria-sort')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableHeaderItem'} type={'tableHeaderItem'}/>

<Canvas of={Component.TableHeaderItemSort}/>
<Canvas of={Component.TableHeaderItemTooltip}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableHeaderItemSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'tooltip'}/>
<StorybookDescriptions componentName={'TableItem'} type={'slots'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'sort'}/>
    `
  },
  ai: {
    description: `
Extends the TableItem cell logic to represent a table header (th) with semantic scope support. Integrates a built-in Tooltip component triggered by an icon and interactive 3-state column sorting (asc -> desc -> reset) with aria-sort synchronization and sort event emission.
Provides skeleton loaders, label/description layout, dividers, and sticky position utilities. Uses help-circle as default tooltip icon when tooltipLabel, tooltipDescription, or tooltip slot is defined.
Controlled via label, description, tag, scope, colspan, rowspan, index, showSort, sortColumn, sortDir, and tooltip properties. Use inside table thead or tfoot structures to specify column headers or summary cells.
`,
    hide: true
  }
}
