import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Textarea from './D1Textarea.vue'
import { TextareaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Textarea',
  component: D1Textarea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextareaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextareaWikiStorybook.getWiki(),
  args: TextareaWikiStorybook.getValues()
} satisfies Meta<typeof D1Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Textarea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Textarea },
    setup: () => ({ args }),
    template: `
      <D1Textarea v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
