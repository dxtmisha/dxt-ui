import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableFlexItem from './D1TableFlexItem.vue'
import { TableFlexItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { expect, within } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableFlexItem',
  component: D1TableFlexItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableFlexItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableFlexItemWikiStorybook.getWiki(),
  args: TableFlexItemWikiStorybook.getValues()
} satisfies Meta<typeof D1TableFlexItem>

export default meta

type Story = StoryObj<typeof meta>

export const TableFlexItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TableFlexItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
      <D1TableFlexItem v-bind="args"/>
      <D1TableFlexItem v-bind="args"/>
      <D1TableFlexItem v-bind="args"/>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const cells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexItem')
    await expect(cells.length).toBe(3)

    cells.forEach((cell) => {
      expect(cell.tagName).toBe('DIV')
      expect(cell).toHaveAttribute('role', 'cell')
      expect(cell).not.toHaveAttribute('colspan')
      expect(cell).not.toHaveAttribute('rowspan')
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableFlexItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableFlexItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1TableFlexItem
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <D1TableFlexItem
              :isSkeleton="true"
              label="Second label"
              description="Second description"
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const cells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexItem')
    await expect(cells.length).toBe(2)

    cells.forEach((cell) => {
      expect(cell.tagName).toBe('DIV')
      expect(cell).toHaveAttribute('role', 'cell')

      const labelElement = cell.querySelector<HTMLElement>('.d1-tableFlexItem__label')
      const descriptionElement = cell.querySelector<HTMLElement>('.d1-tableFlexItem__description')

      expect(labelElement).toBeInTheDocument()
      expect(descriptionElement).toBeInTheDocument()
      expect(labelElement?.className).toContain('skeleton__textVariant')
      expect(descriptionElement?.className).toContain('skeleton__textVariant')
    })
  }
}
export const TableFlexItemSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1TableFlexItem },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1TableFlexItem index="summary">
            <template #default>
              <strong data-testid="flex-item-slot-default">Default Slot Label</strong>
            </template>
            <template #description>
              <em data-testid="flex-item-slot-description">Description Slot Text</em>
            </template>
            <template #context>
              <div data-testid="flex-item-slot-context">Context Slot Content</div>
            </template>
          </D1TableFlexItem>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const cell = canvasElement.querySelector<HTMLElement>('.d1-tableFlexItem')

    await expect(cell).toBeInTheDocument()
    await expect(cell?.tagName).toBe('DIV')
    await expect(cell).toHaveAttribute('role', 'cell')
    await expect(cell).toHaveAttribute('data-index', 'summary')
    await expect(canvas.getByTestId('flex-item-slot-default')).toHaveTextContent('Default Slot Label')
    await expect(canvas.getByTestId('flex-item-slot-description')).toHaveTextContent('Description Slot Text')
    await expect(canvas.getByTestId('flex-item-slot-context')).toHaveTextContent('Context Slot Content')
    await expect(cell?.querySelector('.d1-tableFlexItem__label [data-testid="flex-item-slot-default"]')).toBeInTheDocument()
    await expect(cell?.querySelector('.d1-tableFlexItem__description [data-testid="flex-item-slot-description"]')).toBeInTheDocument()
  }
}
export const TableFlexItemTestSpansAndTag: Story = {
  name: 'Тест: Атрибуты data-colspan/rowspan, индексы, кастомный тег и ID',
  render: () => ({
    components: { D1TableFlexItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1TableFlexItem
              label="Wide cell"
              description="Spans 3 columns"
              :colspan="3"
              :rowspan="2"
              index="email"
              value="user@example.com"
              keyItem="cell-email"
              labelId="flex-item-label-id"
              descriptionId="flex-item-description-id"
            />
            <D1TableFlexItem
              :label="0"
              :description="0"
              :colspan="0"
              :rowspan="0"
              :index="0"
            />
            <D1TableFlexItem
              label="Section tag"
              tag="section"
              colspan="2"
            />
            <D1TableFlexItem
              label="Empty tag fallback"
              tag=""
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const cells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexItem')
    await expect(cells.length).toBe(4)

    // 0. Standard div with data-colspan, data-rowspan, data-index, and zero HTML colspan/rowspan
    await expect(cells[0].tagName).toBe('DIV')
    await expect(cells[0]).toHaveAttribute('role', 'cell')
    await expect(cells[0]).toHaveAttribute('data-colspan', '3')
    await expect(cells[0]).toHaveAttribute('data-rowspan', '2')
    await expect(cells[0]).toHaveAttribute('data-index', 'email')
    await expect(cells[0]).not.toHaveAttribute('colspan')
    await expect(cells[0]).not.toHaveAttribute('rowspan')
    await expect(cells[0].querySelector('.d1-tableFlexItem__label')).toHaveAttribute('id', 'flex-item-label-id')
    await expect(cells[0].querySelector('.d1-tableFlexItem__description')).toHaveAttribute('id', 'flex-item-description-id')

    // 1. Numeric 0 boundary values rendered without dropping
    await expect(cells[1]).toHaveAttribute('role', 'cell')
    await expect(cells[1]).toHaveAttribute('data-colspan', '0')
    await expect(cells[1]).toHaveAttribute('data-rowspan', '0')
    await expect(cells[1]).toHaveAttribute('data-index', '0')
    await expect(cells[1]).not.toHaveAttribute('colspan')
    await expect(cells[1]).not.toHaveAttribute('rowspan')
    await expect(cells[1].querySelector('.d1-tableFlexItem__label')).toHaveTextContent('0')
    await expect(cells[1].querySelector('.d1-tableFlexItem__description')).toHaveTextContent('0')

    // 2. Custom semantic tag with role="cell"
    await expect(cells[2].tagName).toBe('SECTION')
    await expect(cells[2]).toHaveAttribute('role', 'cell')
    await expect(cells[2]).toHaveAttribute('data-colspan', '2')
    await expect(cells[2]).not.toHaveAttribute('colspan')

    // 3. Empty tag safely falls back to DIV
    await expect(cells[3].tagName).toBe('DIV')
    await expect(cells[3]).toHaveAttribute('role', 'cell')
  }
}
export const TableFlexItemTestAlignmentAndDividers: Story = {
  name: 'Тест: Выравнивание, разделители, labelClamp и липкие модификаторы',
  render: () => ({
    components: { D1TableFlexItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1TableFlexItem label="Left Top" align="left" alignVertical="top" dividerX :dividerY="false"/>
            <D1TableFlexItem label="Center Middle" align="center" alignVertical="center" :dividerX="false" dividerY/>
            <D1TableFlexItem
              label="Right Bottom Clamped Long Content Text"
              align="right"
              alignVertical="bottom"
              dividerX
              dividerY
              labelClamp
            />
            <D1TableFlexItem label="Sticky Both" stickyTop stickyLeft/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const cells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexItem')
    await expect(cells.length).toBe(4)

    await expect(cells[0]).toHaveClass('d1-tableFlexItem--align--left')
    await expect(cells[0]).toHaveClass('d1-tableFlexItem--alignVertical--top')
    await expect(cells[0]).toHaveClass('d1-tableFlexItem--dividerX')
    await expect(cells[0]).not.toHaveClass('d1-tableFlexItem--dividerY')

    await expect(cells[1]).toHaveClass('d1-tableFlexItem--align--center')
    await expect(cells[1]).toHaveClass('d1-tableFlexItem--alignVertical--center')
    await expect(cells[1]).toHaveClass('d1-tableFlexItem--dividerY')
    await expect(cells[1]).not.toHaveClass('d1-tableFlexItem--dividerX')

    await expect(cells[2]).toHaveClass('d1-tableFlexItem--align--right')
    await expect(cells[2]).toHaveClass('d1-tableFlexItem--alignVertical--bottom')
    await expect(cells[2]).toHaveClass('d1-tableFlexItem--dividerX')
    await expect(cells[2]).toHaveClass('d1-tableFlexItem--dividerY')
    await expect(cells[2]).toHaveClass('d1-tableFlexItem--labelClamp')

    await expect(cells[3]).toHaveClass('d1-tableFlexItem--stickyTop')
    await expect(cells[3]).toHaveClass('d1-tableFlexItem--stickyLeft')
  }
}
export const TableFlexItemTestStates: Story = {
  name: 'Тест: Выбранное, отключенное и комбинированные состояния',
  render: () => ({
    components: { D1TableFlexItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1TableFlexItem label="Default"/>
            <D1TableFlexItem label="Selected" selected/>
            <D1TableFlexItem label="Disabled" disabled/>
            <D1TableFlexItem label="Selected + Disabled" selected disabled/>
            <D1TableFlexItem label="Selected + Disabled + Skeleton" selected disabled :isSkeleton="true"/>
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const cells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableFlexItem')
    await expect(cells.length).toBe(5)

    // 0. Default clean state without false-positive ARIA
    await expect(cells[0]).toHaveAttribute('role', 'cell')
    await expect(cells[0]).not.toHaveAttribute('aria-selected')
    await expect(cells[0]).not.toHaveAttribute('aria-disabled')
    await expect(cells[0]).not.toHaveClass('d1-tableFlexItem--selected')
    await expect(cells[0]).not.toHaveClass('d1-tableFlexItem--disabled')

    // 1. Selected
    await expect(cells[1]).toHaveClass('d1-tableFlexItem--selected')
    await expect(cells[1]).toHaveAttribute('aria-selected', 'true')
    await expect(cells[1]).not.toHaveAttribute('aria-disabled')

    // 2. Disabled
    await expect(cells[2]).toHaveClass('d1-tableFlexItem--disabled')
    await expect(cells[2]).toHaveAttribute('aria-disabled', 'true')
    await expect(cells[2]).not.toHaveAttribute('aria-selected')

    // 3. Selected + Disabled combined
    await expect(cells[3]).toHaveClass('d1-tableFlexItem--selected')
    await expect(cells[3]).toHaveClass('d1-tableFlexItem--disabled')
    await expect(cells[3]).toHaveAttribute('aria-selected', 'true')
    await expect(cells[3]).toHaveAttribute('aria-disabled', 'true')

    // 4. Selected + Disabled + Skeleton combined
    await expect(cells[4]).toHaveClass('d1-tableFlexItem--selected')
    await expect(cells[4]).toHaveClass('d1-tableFlexItem--disabled')
    await expect(cells[4]).toHaveAttribute('aria-selected', 'true')
    await expect(cells[4]).toHaveAttribute('aria-disabled', 'true')
    expect(cells[4].querySelector<HTMLElement>('.d1-tableFlexItem__label')?.className).toContain('skeleton__textVariant')
  }
}
// :story-items [!] System label / Системная метка
