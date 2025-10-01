import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Demo from './../D1Demo.vue'

const meta = {
  title: '@dxtmisha/player/D1Demo',
  component: D1Demo
} satisfies Meta<typeof D1Demo>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  render: args => ({
    components: { D1Demo },
    setup() {
      return { args }
    },
    template: `<div>
      <D1Demo v-bind="args" />
    </div>`
  })
}

export const Basic: Story = {
  args: {
    x: '10',
    y: '20'
  }
}

export const WithTopSlot: Story = {
  args: {
    x: '5',
    y: '7'
  },
  render: args => ({
    components: { D1Demo },
    setup() {
      return { args }
    },
    template: `
      <D1Demo v-bind="args">
        <template #top>
          <span>Содержимое слота сверху</span>
        </template>
      </D1Demo>
    `
  })
}

export const WithDefaultSlot: Story = {
  args: {
    x: '100',
    y: '200'
  },
  render: args => ({
    components: { D1Demo },
    setup() {
      return { args }
    },
    template: `
      <D1Demo v-bind="args">
        <span>Содержимое слота по умолчанию</span>
      </D1Demo>
    `
  })
}

export const Interactive: Story = {
  args: {
    x: '30',
    y: '40'
  },
  render: args => ({
    components: { D1Demo },
    setup() {
      const handleClick = () => {
        alert('Событие click сработало!')
      }
      return { args, handleClick }
    },
    template: `
      <D1Demo v-bind="args" @click="handleClick" />
    `
  })
}
