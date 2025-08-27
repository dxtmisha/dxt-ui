import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Menu from './D1Menu.vue'
import { MenuWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Menu',
  component: D1Menu,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuWikiStorybook.getWiki(),
  args: MenuWikiStorybook.getValues()
} satisfies Meta<typeof D1Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Menu: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
