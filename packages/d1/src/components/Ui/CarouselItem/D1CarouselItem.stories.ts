import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CarouselItem from './D1CarouselItem.vue'
import { CarouselItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CarouselItem',
  component: D1CarouselItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CarouselItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CarouselItemWikiStorybook.getWiki(),
  args: CarouselItemWikiStorybook.getValues()
} satisfies Meta<typeof D1CarouselItem>

export default meta

type Story = StoryObj<typeof meta>

export const CarouselItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1CarouselItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <D1CarouselItem v-bind="args" />
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CarouselItemSlot: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1CarouselItem },
    template: `
        <div class="wiki-storybook-item wiki-storybook-item--widescreen">
          <D1CarouselItem>
            <template #default>Default slot</template>
          </D1CarouselItem>
        </div>
    `
  })
}
export const CarouselItemSkeleton: Story = {
  name: 'Состояние скелетона',
  render: () => ({
    components: { D1CarouselItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CarouselItem isSkeleton />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
