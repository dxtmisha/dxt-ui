import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MotionTransform from './D1MotionTransform.vue'
import { MotionTransformWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MotionTransform',
  component: D1MotionTransform,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MotionTransformWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MotionTransformWikiStorybook.getWiki(),
  args: MotionTransformWikiStorybook.getValues()
} satisfies Meta<typeof D1MotionTransform>

export default meta

type Story = StoryObj<typeof meta>

export const MotionTransform: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
