import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SliderField from './D1SliderField.vue'
import { SliderFieldWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SliderField',
  component: D1SliderField,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SliderFieldWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SliderFieldWikiStorybook.getWiki(),
  args: SliderFieldWikiStorybook.getValues()
} satisfies Meta<typeof D1SliderField>

export default meta

type Story = StoryObj<typeof meta>

export const SliderField: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
