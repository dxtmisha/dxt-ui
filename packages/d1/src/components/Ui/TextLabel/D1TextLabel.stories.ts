import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TextLabel from './D1TextLabel.vue'
import { TextLabelWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TextLabel',
  component: D1TextLabel,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextLabelWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextLabelWikiStorybook.getWiki(),
  args: TextLabelWikiStorybook.getValues()
} satisfies Meta<typeof D1TextLabel>

export default meta

type Story = StoryObj<typeof meta>

export const TextLabel: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
