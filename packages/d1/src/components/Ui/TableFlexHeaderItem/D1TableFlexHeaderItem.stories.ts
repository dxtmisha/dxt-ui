import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableFlexHeaderItem from './D1TableFlexHeaderItem.vue'
import { TableFlexHeaderItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { SortColumnItem, SortDir } from '@dxtmisha/functional'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableFlexHeaderItem',
  component: D1TableFlexHeaderItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableFlexHeaderItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableFlexHeaderItemWikiStorybook.getWiki(),
  args: TableFlexHeaderItemWikiStorybook.getValues()
} satisfies Meta<typeof D1TableFlexHeaderItem>

export default meta

type Story = StoryObj<typeof meta>

export const TableFlexHeaderItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TableFlexHeaderItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
      <D1TableFlexHeaderItem v-bind="args"/>
      <D1TableFlexHeaderItem v-bind="args"/>
      <D1TableFlexHeaderItem v-bind="args"/>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexHeaderItem')
    await expect(headerCells.length).toBe(3)

    headerCells.forEach((headerCell) => {
      expect(headerCell.tagName).toBe('DIV')
      expect(headerCell).toHaveAttribute('role', 'columnheader')
      expect(headerCell).not.toHaveAttribute('scope')
      expect(headerCell).not.toHaveAttribute('colspan')
      expect(headerCell).not.toHaveAttribute('rowspan')
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableFlexHeaderItemSort: Story = {
  name: 'Интерактивная 3-состоятельная сортировка',
  render: () => ({
    components: { D1TableFlexHeaderItem },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">
            <span data-testid="flex-header-sort-state">{{ lastSortEvent }}</span>
          </div>
          <div class="wiki-storybook-flex">
            <D1TableFlexHeaderItem
              label="Price"
              description="USD"
              index="price"
              :showSort="true"
              :sortColumn="activeSortColumn"
              :sortDir="activeSortDir"
              @sort="handleSort"
            />
            <D1TableFlexHeaderItem
              label="Name"
              index="name"
              :showSort="true"
              :sortColumn="activeSortColumn"
              :sortDir="activeSortDir"
              @sort="handleSort"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexHeaderItem')
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
  }
}
export const TableFlexHeaderItemTooltip: Story = {
  name: 'Интеграция подсказки',
  render: () => ({
    components: { D1TableFlexHeaderItem },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1TableFlexHeaderItem
            label="Revenue"
            index="revenue"
            tooltipLabel="Monthly Revenue"
            tooltipDescription="Gross recurring revenue before refunds."
          />
          <D1TableFlexHeaderItem
            label="Margin"
            index="margin"
            iconTooltip="info"
          >
            <template #tooltip>
              <span data-testid="flex-header-tooltip-slot">Custom tooltip body content</span>
            </template>
          </D1TableFlexHeaderItem>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexHeaderItem')
    await expect(headerCells.length).toBe(2)

    headerCells.forEach((headerCell) => {
      expect(headerCell.tagName).toBe('DIV')
      expect(headerCell).toHaveAttribute('role', 'columnheader')
      const tooltipControl = headerCell.querySelector<HTMLElement>('[data-event-type="tooltip"]')
      expect(tooltipControl).toBeInTheDocument()
      expect(tooltipControl).toHaveClass('d1-tableFlexHeaderItem__tooltip')
    })
  }
}
export const TableFlexHeaderItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableFlexHeaderItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1TableFlexHeaderItem
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <D1TableFlexHeaderItem
              :isSkeleton="true"
              label="Second header"
              description="Second description"
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexHeaderItem')
    await expect(headerCells.length).toBe(2)

    headerCells.forEach((headerCell) => {
      expect(headerCell.tagName).toBe('DIV')
      expect(headerCell).toHaveAttribute('role', 'columnheader')

      const labelElement = headerCell.querySelector<HTMLElement>('.d1-tableFlexHeaderItem__label')
      const descriptionElement = headerCell.querySelector<HTMLElement>('.d1-tableFlexHeaderItem__description')

      expect(labelElement).toBeInTheDocument()
      expect(descriptionElement).toBeInTheDocument()
      expect(labelElement?.className).toContain('skeleton__textVariant')
      expect(descriptionElement?.className).toContain('skeleton__textVariant')
    })
  }
}
export const TableFlexHeaderItemTestSpansAttrsAndSlots: Story = {
  name: 'Тест: Отсутствие scope/colspan, data-атрибуты, тег и слоты',
  render: () => ({
    components: { D1TableFlexHeaderItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1TableFlexHeaderItem
              label="Grouped Header"
              description="Spans 3 flex units"
              scope="col"
              :colspan="3"
              :rowspan="2"
              index="group"
              labelId="flex-header-label-id"
              descriptionId="flex-header-description-id"
            />
            <D1TableFlexHeaderItem
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
            </D1TableFlexHeaderItem>
            <D1TableFlexHeaderItem
              label="Empty tag fallback"
              tag=""
              scope="row"
              :colspan="0"
              :index="0"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexHeaderItem')
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
    await expect(headerCells[0].querySelector('.d1-tableFlexHeaderItem__label')).toHaveAttribute('id', 'flex-header-label-id')
    await expect(headerCells[0].querySelector('.d1-tableFlexHeaderItem__description')).toHaveAttribute('id', 'flex-header-description-id')

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
  }
}
export const TableFlexHeaderItemTestSortStatesAndIcons: Story = {
  name: 'Тест: Состояния сортировки, иконки сортировки, chipAttrs и tooltipAttrs',
  render: () => ({
    components: { D1TableFlexHeaderItem },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1TableFlexHeaderItem
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
          <D1TableFlexHeaderItem
            label="Descending"
            index="amount"
            :showSort="true"
            sortColumn="amount"
            sortDir="desc"
            iconArrowUp="arrow_upward"
            iconArrowDown="arrow_downward"
          />
          <D1TableFlexHeaderItem
            label="Other Column"
            index="status"
            :showSort="true"
            sortColumn="amount"
            sortDir="asc"
            iconSort="swap_vert"
          />
          <D1TableFlexHeaderItem
            label="Sort Disabled"
            index="plain"
            :showSort="false"
            tooltipLabel="Plain column"
            :tooltipAttrs="{ embedded: true }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexHeaderItem')
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
  }
}
export const TableFlexHeaderItemTestAlignmentDividersAndStates: Story = {
  name: 'Тест: Выравнивание, разделители, labelClamp, sticky и ARIA-состояния',
  render: () => ({
    components: { D1TableFlexHeaderItem },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1TableFlexHeaderItem label="Left Top" align="left" alignVertical="top" dividerX/>
          <D1TableFlexHeaderItem label="Center Selected" align="center" alignVertical="center" dividerY selected/>
          <D1TableFlexHeaderItem label="Right Disabled" align="right" alignVertical="bottom" disabled stickyTop stickyLeft/>
          <D1TableFlexHeaderItem
            label="Combined Header States With Long Text"
            align="right"
            dividerX
            dividerY
            labelClamp
            selected
            disabled
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexHeaderItem')
    await expect(headerCells.length).toBe(4)

    await expect(headerCells[0]).toHaveClass('d1-tableFlexHeaderItem--align--left')
    await expect(headerCells[0]).toHaveClass('d1-tableFlexHeaderItem--alignVertical--top')
    await expect(headerCells[0]).toHaveClass('d1-tableFlexHeaderItem--dividerX')
    await expect(headerCells[0]).not.toHaveAttribute('aria-selected')
    await expect(headerCells[0]).not.toHaveAttribute('aria-disabled')

    await expect(headerCells[1]).toHaveClass('d1-tableFlexHeaderItem--align--center')
    await expect(headerCells[1]).toHaveClass('d1-tableFlexHeaderItem--dividerY')
    await expect(headerCells[1]).toHaveClass('d1-tableFlexHeaderItem--selected')
    await expect(headerCells[1]).toHaveAttribute('aria-selected', 'true')

    await expect(headerCells[2]).toHaveClass('d1-tableFlexHeaderItem--align--right')
    await expect(headerCells[2]).toHaveClass('d1-tableFlexHeaderItem--alignVertical--bottom')
    await expect(headerCells[2]).toHaveClass('d1-tableFlexHeaderItem--disabled')
    await expect(headerCells[2]).toHaveClass('d1-tableFlexHeaderItem--stickyTop')
    await expect(headerCells[2]).toHaveClass('d1-tableFlexHeaderItem--stickyLeft')
    await expect(headerCells[2]).toHaveAttribute('aria-disabled', 'true')

    await expect(headerCells[3]).toHaveClass('d1-tableFlexHeaderItem--dividerX')
    await expect(headerCells[3]).toHaveClass('d1-tableFlexHeaderItem--dividerY')
    await expect(headerCells[3]).toHaveClass('d1-tableFlexHeaderItem--labelClamp')
    await expect(headerCells[3]).toHaveClass('d1-tableFlexHeaderItem--selected')
    await expect(headerCells[3]).toHaveClass('d1-tableFlexHeaderItem--disabled')
    await expect(headerCells[3]).toHaveAttribute('aria-selected', 'true')
    await expect(headerCells[3]).toHaveAttribute('aria-disabled', 'true')
  }
}
// :story-items [!] System label / Системная метка
