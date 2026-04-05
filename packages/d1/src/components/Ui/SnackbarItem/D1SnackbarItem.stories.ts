import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SnackbarItem from './D1SnackbarItem.vue'
import { SnackbarItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SnackbarItem',
  component: D1SnackbarItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SnackbarItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SnackbarItemWikiStorybook.getWiki(),
  args: SnackbarItemWikiStorybook.getValues()
} satisfies Meta<typeof D1SnackbarItem>

export default meta

type Story = StoryObj<typeof meta>

export const SnackbarItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
