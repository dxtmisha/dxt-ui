import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ProgressBar from './D1ProgressBar.vue'
import { ProgressBarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ProgressBar',
  component: D1ProgressBar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ProgressBarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ProgressBarWikiStorybook.getWiki(),
  args: ProgressBarWikiStorybook.getValues()
} satisfies Meta<typeof D1ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const ProgressBar: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
