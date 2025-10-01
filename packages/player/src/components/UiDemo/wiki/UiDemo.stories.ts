import type { Meta, StoryObj } from '@storybook/vue3-vite'

import UiDemo from './../UiDemo.vue'

const meta = {
  title: '@dxtmisha/player/UiDemo',
  component: UiDemo
} satisfies Meta<typeof UiDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  render: args => ({
    components: { UiDemo },
    setup() {
      return { args }
    },
    template: `<div>
      <UiDemo v-bind="args" />
    </div>`
  })
}
