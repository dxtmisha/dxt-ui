import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableHeaderItem from './D1TableHeaderItem.vue'
import { TableHeaderItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TableHeaderItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1TableHeaderItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <table>
            <thead>
              <tr>
                <D1TableHeaderItem
                  :isSkeleton="true"
                  value="Value"
                />
                <D1TableHeaderItem
                  :isSkeleton="true"
                  label="Label"
                  description="Description"
                />
              </tr>
            </thead>
          </table>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
