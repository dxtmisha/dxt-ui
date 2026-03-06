import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Dummy from './D1Dummy.vue'
import { DummyWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Dummy',
  component: D1Dummy,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: DummyWikiStorybook.getDescription()
      }
    }
  },
  argTypes: DummyWikiStorybook.getWiki(),
  args: DummyWikiStorybook.getValues()
} satisfies Meta<typeof D1Dummy>

export default meta

type Story = StoryObj<typeof meta>

export const Dummy: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
