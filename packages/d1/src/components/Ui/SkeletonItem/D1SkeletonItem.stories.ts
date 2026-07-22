import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SkeletonItem from './D1SkeletonItem.vue'
import { SkeletonItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  render: (args: any) => ({
    components: { D1SkeletonItem },
    setup: () => ({ args }),
    template: `
      <D1Skeleton :active="true">
      <div class="wiki-storybook-group">
        <D1SkeletonItem v-bind="args" text style="width: 200px;"/>
      </div>
    </D1Skeleton>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SkeletonItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1SkeletonItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-group">
            <D1SkeletonItem text style="width: 200px;"/>
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
