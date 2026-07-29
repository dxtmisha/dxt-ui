import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationRailItem from './D1NavigationRailItem.vue'
import { NavigationRailItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationRailItem',
  component: D1NavigationRailItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationRailItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationRailItemWikiStorybook.getWiki(),
  args: NavigationRailItemWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationRailItem>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationRailItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const NavigationRailItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1NavigationRailItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1NavigationRailItem
            :isSkeleton="true"
            icon="home"
            badge="5"
          >Home</D1NavigationRailItem>
          <D1NavigationRailItem
            :isSkeleton="true"
            icon="settings"
          >Navigation Rail Item Label Example</D1NavigationRailItem>
        </D1Skeleton>
    `
  })
}
export const NavigationRailItemSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1NavigationRailItem },
    template: `
        <D1NavigationRailItem>
          <template #default>Default slot</template>
          <template #leading>Leading slot</template>
          <template #body>Body slot</template>
        </D1NavigationRailItem>
    `
  })
}
// :story-items [!] System label / Системная метка
