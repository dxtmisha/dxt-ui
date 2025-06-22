import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Icon from './D1Icon.vue'
import { IconWikiStorybook } from './wiki.ts'

const meta = {
  title: 'Ui/Icon',
  component: D1Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: IconWikiStorybook.getDescription()
      }
    }
  },
  argTypes: IconWikiStorybook.getWiki(),
  args: IconWikiStorybook.getValues()
} satisfies Meta<typeof D1Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}
