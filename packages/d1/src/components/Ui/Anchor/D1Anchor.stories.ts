import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Anchor from './D1Anchor.vue'
import { AnchorWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Anchor',
  component: D1Anchor,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AnchorWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AnchorWikiStorybook.getWiki(),
  args: AnchorWikiStorybook.getValues()
} satisfies Meta<typeof D1Anchor>

export default meta

type Story = StoryObj<typeof meta>

export const Anchor: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
