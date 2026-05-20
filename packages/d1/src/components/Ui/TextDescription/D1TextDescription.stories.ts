import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TextDescription from './D1TextDescription.vue'
import { TextDescriptionWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TextDescription',
  component: D1TextDescription,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextDescriptionWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextDescriptionWikiStorybook.getWiki(),
  args: TextDescriptionWikiStorybook.getValues()
} satisfies Meta<typeof D1TextDescription>

export default meta

type Story = StoryObj<typeof meta>

export const TextDescription: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
