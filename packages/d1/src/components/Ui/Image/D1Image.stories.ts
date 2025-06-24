import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Image from './D1Image.vue'
import { ImageWikiStorybook } from './wiki.ts'

const meta = {
  title: 'Ui/Image',
  component: D1Image,
  tags: ['autodocs'],
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ImageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ImageWikiStorybook.getWiki(),
  args: ImageWikiStorybook.getValues()
} satisfies Meta<typeof D1Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}
