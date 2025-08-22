import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Bars from './D1Bars.vue'
import { BarsWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Bars',
  component: D1Bars,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BarsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BarsWikiStorybook.getWiki(),
  args: BarsWikiStorybook.getValues()
} satisfies Meta<typeof D1Bars>

export default meta

type Story = StoryObj<typeof meta>

export const Bars: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
