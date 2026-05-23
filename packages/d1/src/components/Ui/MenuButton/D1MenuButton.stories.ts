import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuButton from './D1MenuButton.vue'
import { MenuButtonWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuButton',
  component: D1MenuButton,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuButtonWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuButtonWikiStorybook.getWiki(),
  args: MenuButtonWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuButton>

export default meta

type Story = StoryObj<typeof meta>

export const MenuButton: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
