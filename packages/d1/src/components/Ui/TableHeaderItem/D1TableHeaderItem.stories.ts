import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableHeaderItem from './D1TableHeaderItem.vue'
import { TableHeaderItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { SortColumnItem } from '@dxtmisha/functional'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableHeaderItem',
  component: D1TableHeaderItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableHeaderItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableHeaderItemWikiStorybook.getWiki(),
  args: TableHeaderItemWikiStorybook.getValues()
} satisfies Meta<typeof D1TableHeaderItem>

export default meta

type Story = StoryObj<typeof meta>

export const TableHeaderItem: Story = {
  args: {
    showSort: true,
    sortColumn: '123',
    index: 123
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TableHeaderItem },
    setup: () => ({ args }),
    template: `
      <table>
      <thead>
        <tr>
          <D1TableHeaderItem v-bind="args"/>
          <D1TableHeaderItem v-bind="args"/>
          <D1TableHeaderItem v-bind="args"/>
        </tr>
      </thead>
    </table>
    `
  }),
  play: async ({ canvasElement }) => {
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableHeaderItem')
    await expect(headerCells.length).toBe(3)
    await expect(headerCells[0].tagName).toBe('TH')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableHeaderItemSort: Story = {
  name: 'Интерактивная сортировка',
  render: () => ({
    components: { D1TableHeaderItem },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="header-sort-state">
            {{ sortColumn || 'none' }}:{{ sortDir || 'none' }}
          </div>
          <table style="border-collapse: collapse; width: 100%;">
            <thead>
              <tr>
                <D1TableHeaderItem
                  label="Name"
                  index="name"
                  scope="col"
                  :showSort="true"
                  :sortColumn="sortColumn"
                  :sortDir="sortDir"
                  @sort="onSort"
                />
                <D1TableHeaderItem
                  label="Age"
                  index="age"
                  scope="col"
                  :showSort="true"
                  :sortColumn="sortColumn"
                  :sortDir="sortDir"
                  @sort="onSort"
                />
                <D1TableHeaderItem
                  label="Role"
                  index="role"
                  scope="col"
                />
              </tr>
            </thead>
          </table>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
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
  }
}
export const TableHeaderItemTooltip: Story = {
  name: 'Поддержка подсказок',
  render: () => ({
    components: { D1TableHeaderItem },
    template: `
        
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <D1TableHeaderItem
                label="Plain Header"
                scope="col"
              />
              <D1TableHeaderItem
                label="Metric"
                scope="col"
                tooltipLabel="Metric definition"
                tooltipDescription="Explains how this column value is computed."
              />
              <D1TableHeaderItem
                label="Custom Tooltip Slot"
                scope="col"
                iconTooltip="info"
              >
                <template #tooltip>
                  <span>Custom tooltip slot content</span>
                </template>
              </D1TableHeaderItem>
            </tr>
          </thead>
        </table>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableHeaderItem')
    await expect(headerCells.length).toBe(3)

    await expect(headerCells[0].querySelector('[data-event-type="tooltip"]')).toBeNull()

    const secondTooltipControl = headerCells[1].querySelector<HTMLElement>('[data-event-type="tooltip"]')
    await expect(secondTooltipControl).toBeInTheDocument()
    await expect(secondTooltipControl).toHaveClass('d1-tableHeaderItem__tooltip')

    const thirdTooltipControl = headerCells[2].querySelector<HTMLElement>('[data-event-type="tooltip"]')
    await expect(thirdTooltipControl).toBeInTheDocument()
    await expect(thirdTooltipControl).toHaveClass('d1-tableHeaderItem__tooltip')
  }
}
export const TableHeaderItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableHeaderItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <thead>
              <tr>
                <D1TableHeaderItem
                  :isSkeleton="true"
                  label="Column A"
                />
                <D1TableHeaderItem
                  :isSkeleton="true"
                  label="Column B"
                  description="Description"
                />
              </tr>
            </thead>
          </table>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableHeaderItem')
    await expect(headerCells.length).toBe(2)

    const skeletonElements = canvasElement.querySelectorAll('[class*="skeleton__textVariant"]')
    await expect(skeletonElements.length).toBeGreaterThanOrEqual(3)
  }
}
export const TableHeaderItemTestScopeStatesAndSlots: Story = {
  name: 'Тест: Scope, объединения, состояния, иконки, атрибуты и слоты',
  render: () => ({
    components: { D1TableHeaderItem },
    template: `
        
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <D1TableHeaderItem
                label="Colgroup Span"
                scope="colgroup"
                :colspan="2"
                align="center"
                alignVertical="top"
                :dividerX="true"
                :dividerY="true"
                :stickyTop="true"
              />
              <D1TableHeaderItem
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
              <D1TableHeaderItem
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
              </D1TableHeaderItem>
              <D1TableHeaderItem
                label="Mismatched Sort Column"
                index="score"
                tag="td"
                sortColumn="other"
                sortDir="desc"
              />
            </tr>
          </thead>
        </table>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const headerCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableHeaderItem')
    await expect(headerCells.length).toBe(4)

    // 0. colgroup + colspan + alignment + dividers + stickyTop
    await expect(headerCells[0].tagName).toBe('TH')
    await expect(headerCells[0]).toHaveAttribute('scope', 'colgroup')
    await expect(headerCells[0]).toHaveAttribute('colspan', '2')
    await expect(headerCells[0]).toHaveClass('d1-tableHeaderItem--align--center')
    await expect(headerCells[0]).toHaveClass('d1-tableHeaderItem--alignVertical--top')
    await expect(headerCells[0]).toHaveClass('d1-tableHeaderItem--dividerX')
    await expect(headerCells[0]).toHaveClass('d1-tableHeaderItem--dividerY')
    await expect(headerCells[0]).toHaveClass('d1-tableHeaderItem--stickyTop')

    // 1. rowgroup + rowspan + labelClamp + stickyLeft
    await expect(headerCells[1]).toHaveAttribute('scope', 'rowgroup')
    await expect(headerCells[1]).toHaveAttribute('rowspan', '2')
    await expect(headerCells[1]).toHaveClass('d1-tableHeaderItem--align--right')
    await expect(headerCells[1]).toHaveClass('d1-tableHeaderItem--alignVertical--bottom')
    await expect(headerCells[1]).toHaveClass('d1-tableHeaderItem--labelClamp')
    await expect(headerCells[1]).toHaveClass('d1-tableHeaderItem--stickyLeft')

    // 2. scope="row" + direct sortDir aria-sort + selected/disabled + chipAttrs + slots
    await expect(headerCells[2]).toHaveAttribute('scope', 'row')
    await expect(headerCells[2]).toHaveAttribute('data-index', 'price')
    await expect(headerCells[2]).toHaveAttribute('aria-sort', 'ascending')
    await expect(headerCells[2]).toHaveClass('d1-tableHeaderItem--selected')
    await expect(headerCells[2]).toHaveClass('d1-tableHeaderItem--disabled')
    await expect(headerCells[2]).toHaveAttribute('aria-selected', 'true')
    await expect(headerCells[2]).toHaveAttribute('aria-disabled', 'true')
    await expect(headerCells[2].querySelector('[data-sort-chip="custom"]')).toBeInTheDocument()
    await expect(headerCells[2].querySelector('.d1-tableHeaderItem__body')).toBeInTheDocument()
    await expect(headerCells[2].querySelector('[data-event-type="tooltip"]')).toBeInTheDocument()
    await expect(canvas.getByTestId('header-default-slot')).toHaveTextContent('Price Slot')
    await expect(canvas.getByTestId('header-description-slot')).toHaveTextContent('USD')
    await expect(canvas.getByTestId('header-context-slot')).toHaveTextContent('Context Info')

    // 3. Mismatched sortColumn suppresses aria-sort and tag="td" overrides default th
    await expect(headerCells[3].tagName).toBe('TD')
    await expect(headerCells[3]).not.toHaveAttribute('aria-sort')
  }
}
// :story-items [!] System label / Системная метка
