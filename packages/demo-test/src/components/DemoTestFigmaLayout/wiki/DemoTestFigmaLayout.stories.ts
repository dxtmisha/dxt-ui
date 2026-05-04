import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DemoTestFigmaLayout from './../DemoTestFigmaLayout.vue'

const meta = {
  title: '@dxtmisha/demo-test/DemoTestFigmaLayout',
  component: DemoTestFigmaLayout
} satisfies Meta<typeof DemoTestFigmaLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  render: args => ({
    components: { DemoTestFigmaLayout },
    setup() {
      return { args }
    },
    template: `<div>
      <DemoTestFigmaLayout v-bind="args" />
    </div>`
  })
}
