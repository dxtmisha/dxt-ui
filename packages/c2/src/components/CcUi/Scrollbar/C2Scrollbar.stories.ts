import type { Meta, StoryObj } from '@storybook/vue3-vite'

import C2Scrollbar from './C2Scrollbar.vue'
import { ScrollbarWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'CcUi/Scrollbar',
  component: C2Scrollbar,
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: ScrollbarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ScrollbarWikiStorybook.getWiki(),
  args: ScrollbarWikiStorybook.getValues()
} satisfies Meta<typeof C2Scrollbar>

export default meta

type Story = StoryObj<typeof meta>

export const Scrollbar: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
