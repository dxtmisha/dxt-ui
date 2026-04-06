import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TextareaAutosize from './D1TextareaAutosize.vue'
import { TextareaAutosizeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TextareaAutosize',
  component: D1TextareaAutosize,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextareaAutosizeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextareaAutosizeWikiStorybook.getWiki(),
  args: TextareaAutosizeWikiStorybook.getValues()
} satisfies Meta<typeof D1TextareaAutosize>

export default meta

type Story = StoryObj<typeof meta>

export const TextareaAutosize: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TextareaAutosize },
    setup: () => ({ args }),
    template: `
      <D1TextareaAutosize v-bind="args" :inputAttrs="{style: 'width: 240px; border: 1px solid #90A1B9FF'}" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
