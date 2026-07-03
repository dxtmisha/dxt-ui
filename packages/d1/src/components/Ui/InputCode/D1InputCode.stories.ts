import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputCode from './D1InputCode.vue'
import { InputCodeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputCode',
  component: D1InputCode,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputCodeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputCodeWikiStorybook.getWiki(),
  args: InputCodeWikiStorybook.getValues()
} satisfies Meta<typeof D1InputCode>

export default meta

type Story = StoryObj<typeof meta>

export const InputCode: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
