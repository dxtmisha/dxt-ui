import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SkeletonItem from './D1SkeletonItem.vue'
import { SkeletonItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SkeletonItem',
  component: D1SkeletonItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SkeletonItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SkeletonItemWikiStorybook.getWiki(),
  args: SkeletonItemWikiStorybook.getValues()
} satisfies Meta<typeof D1SkeletonItem>

export default meta

type Story = StoryObj<typeof meta>

export const SkeletonItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
