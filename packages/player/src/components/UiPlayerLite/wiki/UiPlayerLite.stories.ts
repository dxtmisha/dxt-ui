import type { Meta, StoryObj } from '@storybook/vue3-vite'

import UiPlayerLite from './../UiPlayerLite.vue'
import { UiPlayerLiteWikiStorybook } from './wiki'

const meta = {
  title: '@dxt-ui/player/UiPlayerLite',
  component: UiPlayerLite,
  parameters: {
    docs: {
      description: {
        component: UiPlayerLiteWikiStorybook.getDescription()
      }
    }
  },
  argTypes: UiPlayerLiteWikiStorybook.getWiki(),
  args: UiPlayerLiteWikiStorybook.getValues()
} satisfies Meta<typeof UiPlayerLite>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  render: args => ({
    components: { UiPlayerLite },
    setup() {
      return { args }
    },
    template: `<div>
      <UiPlayerLite v-bind="args" />
    </div>`
  })
}
