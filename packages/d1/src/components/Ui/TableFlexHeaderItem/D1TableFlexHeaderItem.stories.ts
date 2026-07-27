import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableFlexHeaderItem from './D1TableFlexHeaderItem.vue'
import { TableFlexHeaderItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
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
              label="Label"
              description="Description"
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
