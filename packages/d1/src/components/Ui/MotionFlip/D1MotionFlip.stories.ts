import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MotionFlip from './D1MotionFlip.vue'
import { MotionFlipWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MotionFlip',
  component: D1MotionFlip,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MotionFlipWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MotionFlipWikiStorybook.getWiki(),
  args: MotionFlipWikiStorybook.getValues()
} satisfies Meta<typeof D1MotionFlip>

export default meta

type Story = StoryObj<typeof meta>

export const MotionFlip: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
