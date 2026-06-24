import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputSocial from './D1InputSocial.vue'
import { InputSocialWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputSocial',
  component: D1InputSocial,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputSocialWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputSocialWikiStorybook.getWiki(),
  args: InputSocialWikiStorybook.getValues()
} satisfies Meta<typeof D1InputSocial>

export default meta

type Story = StoryObj<typeof meta>

export const InputSocial: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
