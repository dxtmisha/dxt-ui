import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SegmentControlItem from './D1SegmentControlItem.vue'
import { SegmentControlItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
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
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
