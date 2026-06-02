import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputPhone from './D1InputPhone.vue'
import { InputPhoneWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputPhone',
  component: D1InputPhone,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputPhoneWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputPhoneWikiStorybook.getWiki(),
  args: InputPhoneWikiStorybook.getValues()
} satisfies Meta<typeof D1InputPhone>

export default meta

type Story = StoryObj<typeof meta>

export const InputPhone: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
