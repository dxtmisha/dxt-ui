import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Mask from './D1Mask.vue'
import { MaskWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Mask',
  component: D1Mask,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MaskWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MaskWikiStorybook.getWiki(),
  args: MaskWikiStorybook.getValues()
} satisfies Meta<typeof D1Mask>

export default meta

type Story = StoryObj<typeof meta>

export const Mask: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
