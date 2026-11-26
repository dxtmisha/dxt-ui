import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableItem from './D1TableItem.vue'
import { TableItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { expect, within } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TableItem',
  component: D1TableItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TableItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TableItemWikiStorybook.getWiki(),
  args: TableItemWikiStorybook.getValues()
} satisfies Meta<typeof D1TableItem>

export default meta

type Story = StoryObj<typeof meta>

export const TableItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TableItem },
    setup: () => ({ args }),
    template: `
      <table>
      <tbody>
        <tr>
          <D1TableItem v-bind="args"/>
          <D1TableItem v-bind="args"/>
          <D1TableItem v-bind="args"/>
        </tr>
      </tbody>
    </table>
    `
  }),
  play: async ({ canvasElement }) => {
    const tableCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableItem')
    await expect(tableCells.length).toBe(3)
    await expect(tableCells[0].tagName).toBe('TD')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableItemAlignAndSpan: Story = {
  name: 'Выравнивание, разделители, обрезка текста и объединение ячеек',
  render: () => ({
    components: { D1TableItem },
    template: `
        
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr>
              <D1TableItem
                label="Left / Top"
                description="Default left alignment"
                align="left"
                alignVertical="top"
                :dividerX="true"
                :dividerY="true"
              />
              <D1TableItem
                label="Center / Center"
                align="center"
                alignVertical="center"
                :dividerX="true"
                :dividerY="true"
              />
              <D1TableItem
                label="Right / Bottom"
                align="right"
                alignVertical="bottom"
                :dividerY="true"
                :rowspan="2"
              />
            </tr>
            <tr>
              <D1TableItem
                label="Very long label text that demonstrates multi-line clamping across two spanned columns inside a dense data table cell"
                :colspan="2"
                :labelClamp="true"
                :dividerX="true"
                :dividerY="true"
              />
            </tr>
          </tbody>
        </table>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const tableCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableItem')
    await expect(tableCells.length).toBe(4)

    await expect(tableCells[0]).toHaveClass('d1-tableItem--align--left')
    await expect(tableCells[0]).toHaveClass('d1-tableItem--alignVertical--top')
    await expect(tableCells[0]).toHaveClass('d1-tableItem--dividerX')
    await expect(tableCells[0]).toHaveClass('d1-tableItem--dividerY')

    await expect(tableCells[1]).toHaveClass('d1-tableItem--align--center')
    await expect(tableCells[1]).toHaveClass('d1-tableItem--alignVertical--center')
    await expect(tableCells[1]).toHaveClass('d1-tableItem--dividerX')

    await expect(tableCells[2]).toHaveClass('d1-tableItem--align--right')
    await expect(tableCells[2]).toHaveClass('d1-tableItem--alignVertical--bottom')
    await expect(tableCells[2]).toHaveAttribute('rowspan', '2')

    await expect(tableCells[3]).toHaveAttribute('colspan', '2')
    await expect(tableCells[3]).toHaveClass('d1-tableItem--labelClamp')
    await expect(tableCells[3]).toHaveClass('d1-tableItem--dividerX')
    await expect(tableCells[3]).toHaveClass('d1-tableItem--dividerY')
  }
}
export const TableItemSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1TableItem },
    template: `
        
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr>
              <D1TableItem
                labelId="custom-cell-label"
                descriptionId="custom-cell-description"
              >
                <template #default>
                  <strong data-testid="table-item-default-slot">Primary Slot Content</strong>
                </template>
                <template #description>
                  <span data-testid="table-item-description-slot">Secondary description slot</span>
                </template>
                <template #context>
                  <em data-testid="table-item-context-slot">Extra context slot</em>
                </template>
              </D1TableItem>
            </tr>
          </tbody>
        </table>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tableCell = canvasElement.querySelector<HTMLElement>('.d1-tableItem')
    await expect(tableCell).toBeInTheDocument()

    const labelElement = tableCell?.querySelector('.d1-tableItem__label')
    const descriptionElement = tableCell?.querySelector('.d1-tableItem__description')

    await expect(labelElement).toHaveAttribute('id', 'custom-cell-label')
    await expect(descriptionElement).toHaveAttribute('id', 'custom-cell-description')
    await expect(canvas.getByTestId('table-item-default-slot')).toHaveTextContent('Primary Slot Content')
    await expect(canvas.getByTestId('table-item-description-slot')).toHaveTextContent('Secondary description slot')
    await expect(canvas.getByTestId('table-item-context-slot')).toHaveTextContent('Extra context slot')
  }
}
export const TableItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <tr>
                <D1TableItem
                  :isSkeleton="true"
                  label="Label"
                  description="Description"
                />
                <D1TableItem
                  :isSkeleton="true"
                  label="Second Label"
                  description="Second Description"
                />
              </tr>
            </tbody>
          </table>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const tableCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableItem')
    await expect(tableCells.length).toBe(2)

    const skeletonLabels = canvasElement.querySelectorAll('[class*="skeleton__textVariant"]')
    await expect(skeletonLabels.length).toBeGreaterThanOrEqual(4)
  }
}
export const TableItemTestStatesStickyAndTag: Story = {
  name: 'Тест: Состояния, липкое позиционирование, кастомный тег и метаданные индекса',
  render: () => ({
    components: { D1TableItem },
    template: `
        
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr>
              <D1TableItem
                label="Default"
                index="default"
                keyItem="key-default"
                value="raw-default"
              />
              <D1TableItem
                label="Selected"
                index="selected"
                :selected="true"
              />
              <D1TableItem
                label="Disabled"
                index="disabled"
                :disabled="true"
              />
              <D1TableItem
                label="Selected + Disabled"
                index="combined"
                :selected="true"
                :disabled="true"
              />
              <D1TableItem
                label="Sticky Top"
                index="sticky-top"
                :stickyTop="true"
              />
              <D1TableItem
                label="Sticky Left"
                index="sticky-left"
                :stickyLeft="true"
              />
              <D1TableItem
                label="Sticky Both + Header Tag"
                tag="th"
                index="header-tag"
                :stickyTop="true"
                :stickyLeft="true"
              />
            </tr>
          </tbody>
        </table>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const tableCells = canvasElement.querySelectorAll<HTMLElement>('.d1-tableItem')
    await expect(tableCells.length).toBe(7)

    // 0. Default cell
    await expect(tableCells[0].tagName).toBe('TD')
    await expect(tableCells[0]).toHaveAttribute('data-index', 'default')
    await expect(tableCells[0]).not.toHaveAttribute('aria-selected')
    await expect(tableCells[0]).not.toHaveAttribute('aria-disabled')

    // 1. Selected state
    await expect(tableCells[1]).toHaveClass('d1-tableItem--selected')
    await expect(tableCells[1]).toHaveAttribute('aria-selected', 'true')
    await expect(tableCells[1]).not.toHaveAttribute('aria-disabled')

    // 2. Disabled state
    await expect(tableCells[2]).toHaveClass('d1-tableItem--disabled')
    await expect(tableCells[2]).toHaveAttribute('aria-disabled', 'true')
    await expect(tableCells[2]).not.toHaveAttribute('aria-selected')

    // 3. Combined selected + disabled
    await expect(tableCells[3]).toHaveClass('d1-tableItem--selected')
    await expect(tableCells[3]).toHaveClass('d1-tableItem--disabled')
    await expect(tableCells[3]).toHaveAttribute('aria-selected', 'true')
    await expect(tableCells[3]).toHaveAttribute('aria-disabled', 'true')

    // 4. Sticky top
    await expect(tableCells[4]).toHaveClass('d1-tableItem--stickyTop')
    await expect(tableCells[4]).not.toHaveClass('d1-tableItem--stickyLeft')

    // 5. Sticky left
    await expect(tableCells[5]).toHaveClass('d1-tableItem--stickyLeft')
    await expect(tableCells[5]).not.toHaveClass('d1-tableItem--stickyTop')

    // 6. Sticky both + custom th tag
    await expect(tableCells[6].tagName).toBe('TH')
    await expect(tableCells[6]).toHaveAttribute('data-index', 'header-tag')
    await expect(tableCells[6]).toHaveClass('d1-tableItem--stickyTop')
    await expect(tableCells[6]).toHaveClass('d1-tableItem--stickyLeft')
  }
}
// :story-items [!] System label / Системная метка
