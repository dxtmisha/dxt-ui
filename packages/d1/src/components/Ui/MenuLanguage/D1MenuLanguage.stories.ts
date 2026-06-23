import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuLanguage from './D1MenuLanguage.vue'
import { MenuLanguageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuLanguage',
  component: D1MenuLanguage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuLanguageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuLanguageWikiStorybook.getWiki(),
  args: MenuLanguageWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuLanguage>

export default meta

type Story = StoryObj<typeof meta>

export const MenuLanguage: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
