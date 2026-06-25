import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1AlertLink from './D1AlertLink.vue'
import { AlertLinkWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/AlertLink',
  component: D1AlertLink,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AlertLinkWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AlertLinkWikiStorybook.getWiki(),
  args: AlertLinkWikiStorybook.getValues()
} satisfies Meta<typeof D1AlertLink>

export default meta

type Story = StoryObj<typeof meta>

export const AlertLink: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
