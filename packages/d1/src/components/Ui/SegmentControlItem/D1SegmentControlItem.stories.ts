import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SegmentControlItem from './D1SegmentControlItem.vue'
import { SegmentControlItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SegmentControlItem',
  component: D1SegmentControlItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SegmentControlItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SegmentControlItemWikiStorybook.getWiki(),
  args: SegmentControlItemWikiStorybook.getValues()
} satisfies Meta<typeof D1SegmentControlItem>

export default meta

type Story = StoryObj<typeof meta>

export const SegmentControlItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1SegmentControlItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
      <D1SegmentControlItem v-bind="args" />
      <D1SegmentControlItem v-bind="args" />
      <D1SegmentControlItem v-bind="args" />
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SegmentControlItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1SegmentControlItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1SegmentControlItem isSkeleton>Segment control item</D1SegmentControlItem>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
