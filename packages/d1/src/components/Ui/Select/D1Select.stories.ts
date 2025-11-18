import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Select from './D1Select.vue'
import { SelectWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Select',
  component: D1Select,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SelectWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SelectWikiStorybook.getWiki(),
  args: SelectWikiStorybook.getValues()
} satisfies Meta<typeof D1Select>

export default meta

type Story = StoryObj<typeof meta>

export const Select: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Select },
    setup: () => ({ args }),
    template: `
      <D1Select v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
