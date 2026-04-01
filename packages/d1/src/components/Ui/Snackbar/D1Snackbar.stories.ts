import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Snackbar from './D1Snackbar.vue'
import { SnackbarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Snackbar',
  component: D1Snackbar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SnackbarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SnackbarWikiStorybook.getWiki(),
  args: SnackbarWikiStorybook.getValues()
} satisfies Meta<typeof D1Snackbar>

export default meta

type Story = StoryObj<typeof meta>

export const Snackbar: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
