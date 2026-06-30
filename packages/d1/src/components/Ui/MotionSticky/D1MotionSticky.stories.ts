import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MotionSticky from './D1MotionSticky.vue'
import { MotionStickyWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MotionSticky',
  component: D1MotionSticky,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MotionStickyWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MotionStickyWikiStorybook.getWiki(),
  args: MotionStickyWikiStorybook.getValues()
} satisfies Meta<typeof D1MotionSticky>

export default meta

type Story = StoryObj<typeof meta>

export const MotionSticky: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
