import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ListItem from './D1ListItem.vue'
import { ListItemWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ListItem',
  component: D1ListItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ListItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ListItemWikiStorybook.getWiki(),
  args: ListItemWikiStorybook.getValues()
} satisfies Meta<typeof D1ListItem>

export default meta

type Story = StoryObj<typeof meta>

export const ListItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ListItem },
    setup: () => ({ args }),
    template: `
      <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    <D1ListItem v-bind="args"/>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ListItemBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1ListItem },
    template: `
        <D1ListItem>Simple Item</D1ListItem>
        <D1ListItem icon="person">Item with Icon</D1ListItem>
        <D1ListItem description="Additional information">Item with Description</D1ListItem>
        <D1ListItem focus>Focus</D1ListItem>
        <D1ListItem selected>Selected</D1ListItem>
        <D1ListItem disabled>Disabled</D1ListItem>
        <D1ListItem readonly>Readonly</D1ListItem>
        <D1ListItem prefix="01" suffix="Info">With Prefix & Suffix</D1ListItem>
        <D1ListItem caption="Caption" description="Description text here">Full Content</D1ListItem>
        <D1ListItem icon="star" badge="new">Icon with Badge</D1ListItem>
    `
  })
}
export const ListItemBody: Story = {
  name: 'Body',
  render: () => ({
    components: { D1ListItem },
    template: `
        <D1ListItem>
          Basic Item
          <template #body>Additional content in body slot</template>
        </D1ListItem>
        <D1ListItem icon="info" description="Item with description">
          Item with Description
          <template #body>Extra information or controls</template>
        </D1ListItem>
        <D1ListItem caption="Caption" prefix="01">
          Complex Item
          <template #body>Metadata, secondary actions, or details</template>
        </D1ListItem>
    `
  })
}
export const ListItemSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1ListItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</D1ListItem>
          <D1ListItem
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</D1ListItem>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
