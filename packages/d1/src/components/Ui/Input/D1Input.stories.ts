import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Input from './D1Input.vue'
import { InputWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Input',
  component: D1Input,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputWikiStorybook.getWiki(),
  args: InputWikiStorybook.getValues()
} satisfies Meta<typeof D1Input>

export default meta

type Story = StoryObj<typeof meta>

export const Input: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
