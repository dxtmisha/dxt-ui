import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputCodeItem from './D1InputCodeItem.vue'
import { InputCodeItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputCodeItem',
  component: D1InputCodeItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputCodeItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputCodeItemWikiStorybook.getWiki(),
  args: InputCodeItemWikiStorybook.getValues()
} satisfies Meta<typeof D1InputCodeItem>

export default meta

type Story = StoryObj<typeof meta>

export const InputCodeItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
