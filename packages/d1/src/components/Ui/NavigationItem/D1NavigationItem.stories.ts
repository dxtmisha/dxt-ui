import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationItem from './D1NavigationItem.vue'
import { NavigationItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationItem',
  component: D1NavigationItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationItemWikiStorybook.getWiki(),
  args: NavigationItemWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationItem>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const NavigationItemHighlight: Story = {
  name: 'Выделение',
  render: () => ({
    components: { D1NavigationItem },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationItem highlight="nav" label="Navigation link item"/>
            <D1NavigationItem highlight="set" :highlightLengthStart="3" label="Settings panel"/>
          </div>
        </div>
    `
  })
}
export const NavigationItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1NavigationItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1NavigationItem>
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the navigation item component."
          >Navigation Item Label Example</D1NavigationItem>
          <D1NavigationItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the navigation item."
          >Very Long Navigation Item Label Example for Skeleton</D1NavigationItem>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
