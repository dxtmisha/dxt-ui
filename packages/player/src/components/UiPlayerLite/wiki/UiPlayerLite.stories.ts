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

export const WithSlots: Story = {
  render: args => ({
    components: { UiPlayerLite },
    setup() {
      return { args }
    },
    template: `
      <UiPlayerLite v-bind="args">
        <template #top>
          <div style="padding: 10px; background-color: #e0f2f7; border-radius: 4px;">
            Это контент верхнего слота (например, заголовок).
          </div>
        </template>
        <template #default>
          <div style="padding: 10px; background-color: #e6f7e0; border-radius: 4px; margin-top: 10px;">
            Это контент основного слота (например, описание или дополнительные кнопки).
          </div>
        </template>
      </UiPlayerLite>
    `
  }),
  args: {
    url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    status: 'stop'
  }
}