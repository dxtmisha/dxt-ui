import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FieldLabel from './D1FieldLabel.vue'
import { FieldLabelWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FieldLabel',
  component: D1FieldLabel,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FieldLabelWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FieldLabelWikiStorybook.getWiki(),
  args: FieldLabelWikiStorybook.getValues()
} satisfies Meta<typeof D1FieldLabel>

export default meta

type Story = StoryObj<typeof meta>

export const FieldLabel: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
