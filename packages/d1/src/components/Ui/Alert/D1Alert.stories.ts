import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Alert from './D1Alert.vue'
import { AlertWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Alert',
  component: D1Alert,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AlertWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AlertWikiStorybook.getWiki(),
  args: AlertWikiStorybook.getValues()
} satisfies Meta<typeof D1Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Alert: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
