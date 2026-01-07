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

export const WithSlots: Story = {
  render: args => ({
    components: { DemoAiDoc },
    setup() {
      return { args }
    },
    template: `
      <DemoAiDoc v-bind="args">
        <template #header="{ title }">
          <span style="color: blue; font-weight: bold;">Custom: {{ title }}</span>
        </template>
        <p>This is custom content provided via the default slot.</p>
        <template #footer>
          <button @click.stop>Action in Footer</button>
        </template>
      </DemoAiDoc>
    `
  }),
  args: {
    title: 'Custom Slot Title',
    isOpen: true
  }
}
