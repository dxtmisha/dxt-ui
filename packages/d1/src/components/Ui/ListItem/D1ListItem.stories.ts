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
export const ListItemHighlight: Story = {
  name: 'Выделение',
  render: () => ({
    components: { D1ListItem },
    template: `
        <D1ListItem highlight="search" label="Search result item"/>
        <D1ListItem highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
        <D1ListItem highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
        <D1ListItem highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
    `
  })
}
export const ListItemFill: Story = {
  name: 'Заливка',
  render: () => ({
    components: { D1ListItem },
    template: `
        <D1ListItem label="Default fill"/>
        <D1ListItem fill="#ff0000" label="Red fill"/>
        <D1ListItem fill="rgb(0, 128, 255)" label="Blue fill"/>
        <D1ListItem fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
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
