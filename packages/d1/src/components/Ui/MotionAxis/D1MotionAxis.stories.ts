import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MotionAxis from './D1MotionAxis.vue'
import { MotionAxisWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MotionAxis',
  component: D1MotionAxis,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MotionAxisWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MotionAxisWikiStorybook.getWiki(),
  args: MotionAxisWikiStorybook.getValues()
} satisfies Meta<typeof D1MotionAxis>

export default meta

type Story = StoryObj<typeof meta>

export const MotionAxis: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
