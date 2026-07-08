import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ScrollSticky from './D1ScrollSticky.vue'
import { ScrollStickyWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ScrollSticky',
  component: D1ScrollSticky,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ScrollStickyWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ScrollStickyWikiStorybook.getWiki(),
  args: ScrollStickyWikiStorybook.getValues()
} satisfies Meta<typeof D1ScrollSticky>

export default meta

type Story = StoryObj<typeof meta>

export const ScrollSticky: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
