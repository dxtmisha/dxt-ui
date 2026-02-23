import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Checkbox from './D1Checkbox.vue'
import { CheckboxWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Checkbox',
  component: D1Checkbox,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CheckboxWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CheckboxWikiStorybook.getWiki(),
  args: CheckboxWikiStorybook.getValues()
} satisfies Meta<typeof D1Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
