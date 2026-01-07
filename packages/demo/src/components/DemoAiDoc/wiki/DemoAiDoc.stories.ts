import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DemoAiDoc from './../DemoAiDoc.vue'

const meta = {
  title: '@dxtmisha/demo/DemoAiDoc',
  component: DemoAiDoc
} satisfies Meta<typeof DemoAiDoc>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  render: args => ({
    components: { DemoAiDoc },
    setup() {
      return { args }
    },
    template: `<div>
      <DemoAiDoc v-bind="args" />
    </div>`
  })
}
