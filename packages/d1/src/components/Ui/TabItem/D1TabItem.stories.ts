import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TabItem from './D1TabItem.vue'
import { TabItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TabItem',
  component: D1TabItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TabItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TabItemWikiStorybook.getWiki(),
  args: TabItemWikiStorybook.getValues()
} satisfies Meta<typeof D1TabItem>

export default meta

type Story = StoryObj<typeof meta>

export const TabItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TabItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
      <D1TabItem v-bind="args" />
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TabItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1TabItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1TabItem isSkeleton>Tab item</D1TabItem>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
