import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableFlexHeaderItem component properties
 *
 * Описания свойств компонента TableFlexHeaderItem
 */
export const wikiDescriptionsTableFlexHeaderItem: StorybookComponentsDescriptionItem = {
  name: 'TableFlexHeaderItem',
  description: {
    en: 'Flexbox-based table header cell component representing a semantic div[role="columnheader"] item with sorting and tooltip support',
    ru: 'Компонент ячейки заголовка таблицы на основе flexbox, представляющий семантический элемент div[role="columnheader"] с поддержкой сортировки и подсказок'
  },
  possibilities: {
    en: [
      'flexbox-based header cell rendering div[role="columnheader"] with data-colspan/data-rowspan and zero HTML scope/colspan attributes',
      'horizontal and vertical header alignment options (`align`, `alignVertical`)',
      'horizontal and vertical cell dividers (`dividerX`, `dividerY`)',
      'interactive 3-state column sorting (`showSort`, `sortColumn`, `sortDir`, `aria-sort`, `@sort`)',
      'integrated tooltip component for column documentation (`tooltipLabel`, `tooltipDescription`, `iconTooltip`, `#tooltip`)',
      'responsive sticky headers and columns support (`stickyTop`, `stickyLeft`)',
      'label text clamping (`labelClamp`) and skeleton loading (`isSkeleton`)'
    ],
    ru: [
      'флекс-ячейка заголовка с рендерингом div[role="columnheader"], атрибутами data-colspan/data-rowspan и без HTML-атрибутов scope/colspan',
      'варианты горизонтального и вертикального выравнивания заголовка (`align`, `alignVertical`)',
      'горизонтальные и вертикальные разделители ячеек (`dividerX`, `dividerY`)',
      'интерактивная 3-состоятельная сортировка колонок (`showSort`, `sortColumn`, `sortDir`, `aria-sort`, `@sort`)',
      'интегрированная всплывающая подсказка (`tooltipLabel`, `tooltipDescription`, `iconTooltip`, `#tooltip`)',
      'поддержка адаптивных липких заголовков и столбцов (`stickyTop`, `stickyLeft`)',
      'ограничение высоты текста метки (`labelClamp`) и состояние скелетона (`isSkeleton`)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { SortColumnItem, SortDir } from \'@dxtmisha/functional\''
  ],
  render: `
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
    await expect(headerCells.length).toBe(3)

    headerCells.forEach((headerCell) => {
      expect(headerCell.tagName).toBe('DIV')
      expect(headerCell).toHaveAttribute('role', 'columnheader')
      expect(headerCell).not.toHaveAttribute('scope')
      expect(headerCell).not.toHaveAttribute('colspan')
      expect(headerCell).not.toHaveAttribute('rowspan')
    })
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/slots)
    // =========================================================================
    {
      id: 'TableFlexHeaderItemSort',
      name: {
        en: 'Interactive 3-state sorting',
        ru: 'Интерактивная 3-состоятельная сортировка'
      },
      propsName: ['showSort', 'sortColumn', 'sortDir'],
      setup: `
      const activeSortColumn = ref<string | undefined>(undefined)
      const activeSortDir = ref<SortDir | undefined>(undefined)
      const lastSortEvent = ref<string>('none')

      const handleSort = (item: SortColumnItem) => {
        activeSortColumn.value = typeof item.column === 'string' ? item.column : undefined
        activeSortDir.value = item.dir
        lastSortEvent.value = (item.column ?? 'none') + ':' + (item.dir ?? 'none')
      }

      return {
        activeSortColumn,
        activeSortDir,
        lastSortEvent,
        handleSort
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">
            <span data-testid="flex-header-sort-state">{{ lastSortEvent }}</span>
          </div>
          <div class="wiki-storybook-flex">
            <DesignComponent
              label="Price"
              description="USD"
              index="price"
              :showSort="true"
              :sortColumn="activeSortColumn"
              :sortDir="activeSortDir"
              @sort="handleSort"
            />
            <DesignComponent
              label="Name"
              index="name"
              :showSort="true"
              :sortColumn="activeSortColumn"
              :sortDir="activeSortDir"
              @sort="handleSort"
            />
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(2)

        const priceHeader = headerCells[0]
        const nameHeader = headerCells[1]
        const priceSortButton = priceHeader.querySelector<HTMLElement>('[role="button"], button')

        await expect(priceHeader).toHaveAttribute('role', 'columnheader')
        await expect(priceHeader).not.toHaveAttribute('aria-sort')
        await expect(priceSortButton).toBeInTheDocument()

        await step('First click sorts price ascending', async () => {
          await userEvent.click(priceSortButton!)
          await expect(canvas.getByTestId('flex-header-sort-state')).toHaveTextContent('price:asc')
          await expect(priceHeader).toHaveAttribute('aria-sort', 'ascending')
          await expect(nameHeader).not.toHaveAttribute('aria-sort')
        })

        await step('Second click sorts price descending', async () => {
          await userEvent.click(priceSortButton!)
          await expect(canvas.getByTestId('flex-header-sort-state')).toHaveTextContent('price:desc')
          await expect(priceHeader).toHaveAttribute('aria-sort', 'descending')
        })

        await step('Third click clears sorting', async () => {
          await userEvent.click(priceSortButton!)
          await expect(canvas.getByTestId('flex-header-sort-state')).toHaveTextContent('none:none')
          await expect(priceHeader).not.toHaveAttribute('aria-sort')
        })
      `
    },
    {
      id: 'TableFlexHeaderItemTooltip',
      name: {
        en: 'Tooltip integration',
        ru: 'Интеграция подсказки'
      },
      propsName: ['tooltipLabel', 'tooltipDescription', 'iconTooltip'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent
            label="Revenue"
            index="revenue"
            tooltipLabel="Monthly Revenue"
            tooltipDescription="Gross recurring revenue before refunds."
          />
          <DesignComponent
            label="Margin"
            index="margin"
            iconTooltip="info"
          >
            <template #tooltip>
              <span data-testid="flex-header-tooltip-slot">Custom tooltip body content</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(2)

        headerCells.forEach((headerCell) => {
          expect(headerCell.tagName).toBe('DIV')
          expect(headerCell).toHaveAttribute('role', 'columnheader')
          const tooltipControl = headerCell.querySelector<HTMLElement>('[data-event-type="tooltip"]')
          expect(tooltipControl).toBeInTheDocument()
          expect(tooltipControl).toHaveClass('design-component__tooltip')
        })
      `
    },
    {
      id: 'TableFlexHeaderItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <DesignComponent
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <DesignComponent
              :isSkeleton="true"
              label="Second header"
              description="Second description"
            />
          </div>
        </DesignSkeleton>
      `,
      play: `
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(2)

        headerCells.forEach((headerCell) => {
          expect(headerCell.tagName).toBe('DIV')
          expect(headerCell).toHaveAttribute('role', 'columnheader')

          const labelElement = headerCell.querySelector<HTMLElement>('.design-component__label')
          const descriptionElement = headerCell.querySelector<HTMLElement>('.design-component__description')

          expect(labelElement).toBeInTheDocument()
          expect(descriptionElement).toBeInTheDocument()
          expect(labelElement?.className).toContain('skeleton__textVariant')
          expect(descriptionElement?.className).toContain('skeleton__textVariant')
        })
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'TableFlexHeaderItemTestSpansAttrsAndSlots',
      name: {
        en: 'Test: Zero scope/colspan HTML attrs, data spans, tag and slots',
        ru: 'Тест: Отсутствие scope/colspan, data-атрибуты, тег и слоты'
      },
      propsName: ['scope', 'colspan', 'rowspan', 'index', 'tag', 'labelId', 'descriptionId'],
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              label="Grouped Header"
              description="Spans 3 flex units"
              scope="col"
              :colspan="3"
              :rowspan="2"
              index="group"
              labelId="flex-header-label-id"
              descriptionId="flex-header-description-id"
            />
            <DesignComponent
              tag="section"
              index="slotted"
              tooltipLabel="Slot Info"
            >
              <template #default>
                <strong data-testid="flex-header-slot-default">Slotted Title</strong>
              </template>
              <template #description>
                <em data-testid="flex-header-slot-description">Slotted Subtitle</em>
              </template>
              <template #context>
                <div data-testid="flex-header-slot-context">Extra Header Context</div>
              </template>
            </DesignComponent>
            <DesignComponent
              label="Empty tag fallback"
              tag=""
              scope="row"
              :colspan="0"
              :index="0"
            />
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(3)

        // 0. Zero HTML scope/colspan/rowspan; data-colspan/rowspan/index present
        await expect(headerCells[0].tagName).toBe('DIV')
        await expect(headerCells[0]).toHaveAttribute('role', 'columnheader')
        await expect(headerCells[0]).not.toHaveAttribute('scope')
        await expect(headerCells[0]).not.toHaveAttribute('colspan')
        await expect(headerCells[0]).not.toHaveAttribute('rowspan')
        await expect(headerCells[0]).toHaveAttribute('data-colspan', '3')
        await expect(headerCells[0]).toHaveAttribute('data-rowspan', '2')
        await expect(headerCells[0]).toHaveAttribute('data-index', 'group')
        await expect(headerCells[0].querySelector('.design-component__label')).toHaveAttribute('id', 'flex-header-label-id')
        await expect(headerCells[0].querySelector('.design-component__description')).toHaveAttribute('id', 'flex-header-description-id')

        // 1. Custom section tag + all slots
        await expect(headerCells[1].tagName).toBe('SECTION')
        await expect(headerCells[1]).toHaveAttribute('role', 'columnheader')
        await expect(canvas.getByTestId('flex-header-slot-default')).toHaveTextContent('Slotted Title')
        await expect(canvas.getByTestId('flex-header-slot-description')).toHaveTextContent('Slotted Subtitle')
        await expect(canvas.getByTestId('flex-header-slot-context')).toHaveTextContent('Extra Header Context')
        await expect(headerCells[1].querySelector('[data-event-type="tooltip"]')).toBeInTheDocument()

        // 2. Empty tag fallback to DIV + scope="row" -> role="rowheader" + numeric 0 boundaries
        await expect(headerCells[2].tagName).toBe('DIV')
        await expect(headerCells[2]).toHaveAttribute('role', 'rowheader')
        await expect(headerCells[2]).not.toHaveAttribute('scope')
        await expect(headerCells[2]).toHaveAttribute('data-colspan', '0')
        await expect(headerCells[2]).toHaveAttribute('data-index', '0')
      `
    },
    {
      id: 'TableFlexHeaderItemTestSortStatesAndIcons',
      name: {
        en: 'Test: Sort states, custom sort icons, chipAttrs and tooltipAttrs',
        ru: 'Тест: Состояния сортировки, иконки сортировки, chipAttrs и tooltipAttrs'
      },
      propsName: ['showSort', 'sortColumn', 'sortDir', 'iconSort', 'iconArrowUp', 'iconArrowDown', 'chipAttrs', 'tooltipAttrs'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent
            label="Ascending"
            index="amount"
            :showSort="true"
            sortColumn="amount"
            sortDir="asc"
            iconSort="swap_vert"
            iconArrowUp="arrow_upward"
            iconArrowDown="arrow_downward"
            :chipAttrs="{ 'data-testid': 'sort-chip-asc' }"
          />
          <DesignComponent
            label="Descending"
            index="amount"
            :showSort="true"
            sortColumn="amount"
            sortDir="desc"
            iconArrowUp="arrow_upward"
            iconArrowDown="arrow_downward"
          />
          <DesignComponent
            label="Other Column"
            index="status"
            :showSort="true"
            sortColumn="amount"
            sortDir="asc"
            iconSort="swap_vert"
          />
          <DesignComponent
            label="Sort Disabled"
            index="plain"
            :showSort="false"
            tooltipLabel="Plain column"
            :tooltipAttrs="{ embedded: true }"
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(4)

        // 0. Matching column asc -> aria-sort="ascending" + chipAttrs forwarded
        await expect(headerCells[0]).toHaveAttribute('aria-sort', 'ascending')
        await expect(canvas.getByTestId('sort-chip-asc')).toBeInTheDocument()

        // 1. Matching column desc -> aria-sort="descending"
        await expect(headerCells[1]).toHaveAttribute('aria-sort', 'descending')

        // 2. Non-matching sortColumn -> no aria-sort, sort chip still present
        await expect(headerCells[2]).not.toHaveAttribute('aria-sort')
        await expect(headerCells[2].querySelector('[role="button"], button')).toBeInTheDocument()

        // 3. showSort=false -> no sort chip, tooltip trigger present
        await expect(headerCells[3].querySelector('[role="button"], button')).toBeNull()
        await expect(headerCells[3].querySelector('[data-event-type="tooltip"]')).toBeInTheDocument()
      `
    },
    {
      id: 'TableFlexHeaderItemTestAlignmentDividersAndStates',
      name: {
        en: 'Test: Alignment, dividers, labelClamp, sticky and ARIA states',
        ru: 'Тест: Выравнивание, разделители, labelClamp, sticky и ARIA-состояния'
      },
      propsName: ['align', 'alignVertical', 'dividerX', 'dividerY', 'labelClamp', 'stickyTop', 'stickyLeft', 'selected', 'disabled'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent label="Left Top" align="left" alignVertical="top" dividerX/>
          <DesignComponent label="Center Selected" align="center" alignVertical="center" dividerY selected/>
          <DesignComponent label="Right Disabled" align="right" alignVertical="bottom" disabled stickyTop stickyLeft/>
          <DesignComponent
            label="Combined Header States With Long Text"
            align="right"
            dividerX
            dividerY
            labelClamp
            selected
            disabled
          />
        </div>
      `,
      play: `
        const headerCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(headerCells.length).toBe(4)

        await expect(headerCells[0]).toHaveClass('design-component--align--left')
        await expect(headerCells[0]).toHaveClass('design-component--alignVertical--top')
        await expect(headerCells[0]).toHaveClass('design-component--dividerX')
        await expect(headerCells[0]).not.toHaveAttribute('aria-selected')
        await expect(headerCells[0]).not.toHaveAttribute('aria-disabled')

        await expect(headerCells[1]).toHaveClass('design-component--align--center')
        await expect(headerCells[1]).toHaveClass('design-component--dividerY')
        await expect(headerCells[1]).toHaveClass('design-component--selected')
        await expect(headerCells[1]).toHaveAttribute('aria-selected', 'true')

        await expect(headerCells[2]).toHaveClass('design-component--align--right')
        await expect(headerCells[2]).toHaveClass('design-component--alignVertical--bottom')
        await expect(headerCells[2]).toHaveClass('design-component--disabled')
        await expect(headerCells[2]).toHaveClass('design-component--stickyTop')
        await expect(headerCells[2]).toHaveClass('design-component--stickyLeft')
        await expect(headerCells[2]).toHaveAttribute('aria-disabled', 'true')

        await expect(headerCells[3]).toHaveClass('design-component--dividerX')
        await expect(headerCells[3]).toHaveClass('design-component--dividerY')
        await expect(headerCells[3]).toHaveClass('design-component--labelClamp')
        await expect(headerCells[3]).toHaveClass('design-component--selected')
        await expect(headerCells[3]).toHaveClass('design-component--disabled')
        await expect(headerCells[3]).toHaveAttribute('aria-selected', 'true')
        await expect(headerCells[3]).toHaveAttribute('aria-disabled', 'true')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableFlexHeaderItem'} type={'tableFlexHeaderItem'}/>

<StorybookDescriptions componentName={'Table'} type={'sort'}/>
<Canvas of={Component.TableFlexHeaderItemSort}/>

<StorybookDescriptions componentName={'Slot'} type={'tooltip'}/>
<Canvas of={Component.TableFlexHeaderItemTooltip}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableFlexHeaderItemSkeleton}/>
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
Flexbox-based header cell within a flexible table row or header structure. Inherits from TableHeaderItem, renders div[role="columnheader"] without invalid HTML scope/colspan/rowspan attributes, and manages flex-basis distribution via data-colspan/data-rowspan attributes (up to 12).
Integrates a built-in Tooltip component triggered by an icon and interactive 3-state column sorting (asc -> desc -> reset) with aria-sort synchronization and sort event emission.
Controlled via label, description, tag, colspan (1 to 12), index, showSort, sortColumn, sortDir, and tooltip-specific properties. Use inside flexbox table header and footer structures.
`,
    hide: true
  }
}
