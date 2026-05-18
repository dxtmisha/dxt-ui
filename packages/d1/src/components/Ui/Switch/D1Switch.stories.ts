import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Switch from './D1Switch.vue'
import { SwitchWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Switch',
  component: D1Switch,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SwitchWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SwitchWikiStorybook.getWiki(),
  args: SwitchWikiStorybook.getValues()
} satisfies Meta<typeof D1Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Switch: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
