import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Divider from './D1Divider.vue'
import { DividerWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Divider',
  component: D1Divider,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: DividerWikiStorybook.getDescription()
      }
    }
  },
  argTypes: DividerWikiStorybook.getWiki(),
  args: DividerWikiStorybook.getValues()
} satisfies Meta<typeof D1Divider>

export default meta

type Story = StoryObj<typeof meta>

export const Divider: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
