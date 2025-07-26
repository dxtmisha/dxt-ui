import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Cell from './D1Cell.vue'
import { CellWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Cell',
  component: D1Cell,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CellWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CellWikiStorybook.getWiki(),
  args: CellWikiStorybook.getValues()
} satisfies Meta<typeof D1Cell>

export default meta

type Story = StoryObj<typeof meta>

export const Cell: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Cell },
    setup: () => ({ args }),
    template: `
      <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    <D1Cell v-bind="args"/>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CellSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1Cell, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
            label="A"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
          <D1Cell
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the cell."
            label="Very Long Label Example for Skeleton"
          />
        </D1Skeleton>
    `
  })
}
export const CellSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Cell },
    template: `
        <D1Cell icon="home">
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </D1Cell>
    `
  })
}
// :story-items [!] System label / Системная метка
