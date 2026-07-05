import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputCodeItem from './D1InputCodeItem.vue'
import { InputCodeItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputCodeItem',
  component: D1InputCodeItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputCodeItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputCodeItemWikiStorybook.getWiki(),
  args: InputCodeItemWikiStorybook.getValues()
} satisfies Meta<typeof D1InputCodeItem>

export default meta

type Story = StoryObj<typeof meta>

export const InputCodeItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputCodeItemBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1InputCodeItem },
    template: `
        <div class="wiki-storybook-flex">
          <D1InputCodeItem value="0" />
          <D1InputCodeItem hide value="1" />
          <D1InputCodeItem success value="2" />
          <D1InputCodeItem error value="3" />
          <D1InputCodeItem disabled value="4" />
        </div>
    `
  })
}
export const InputCodeItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1InputCodeItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex">
            <D1InputCodeItem isSkeleton value="0" />
            <D1InputCodeItem isSkeleton value="1" />
            <D1InputCodeItem isSkeleton value="2" />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
