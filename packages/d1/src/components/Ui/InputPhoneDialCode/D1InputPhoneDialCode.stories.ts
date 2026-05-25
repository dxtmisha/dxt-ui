import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputPhoneDialCode from './D1InputPhoneDialCode.vue'
import { InputPhoneDialCodeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputPhoneDialCode',
  component: D1InputPhoneDialCode,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputPhoneDialCodeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputPhoneDialCodeWikiStorybook.getWiki(),
  args: InputPhoneDialCodeWikiStorybook.getValues()
} satisfies Meta<typeof D1InputPhoneDialCode>

export default meta

type Story = StoryObj<typeof meta>

export const InputPhoneDialCode: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
