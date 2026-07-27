import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TableFlexItem from './D1TableFlexItem.vue'
import { TableFlexItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  })
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
              label="Label"
              description="Description"
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
