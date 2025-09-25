import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ComponentDoc from './../ComponentDoc.vue'
import { ComponentDocWikiStorybook } from './wiki'

const meta = {
  title: '[project]/ComponentDoc',
  component: ComponentDoc,
  parameters: {
    docs: {
      description: {
        component: ComponentDocWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ComponentDocWikiStorybook.getWiki(),
  args: ComponentDocWikiStorybook.getValues()
} satisfies Meta<typeof ComponentDoc>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  render: args => ({
    components: { ComponentDoc },
    setup() {
      return { args }
    },
    template: `<div>
      <ComponentDoc v-bind="args" />
    </div>`
  })
}
