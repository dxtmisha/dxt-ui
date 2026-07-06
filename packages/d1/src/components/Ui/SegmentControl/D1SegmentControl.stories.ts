import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SegmentControl from './D1SegmentControl.vue'
import { SegmentControlWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SegmentControl',
  component: D1SegmentControl,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SegmentControlWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SegmentControlWikiStorybook.getWiki(),
  args: SegmentControlWikiStorybook.getValues()
} satisfies Meta<typeof D1SegmentControl>

export default meta

type Story = StoryObj<typeof meta>

export const SegmentControl: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
