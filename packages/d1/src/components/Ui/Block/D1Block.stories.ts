import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Block from './D1Block.vue'
import { BlockWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Block',
  component: D1Block,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BlockWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BlockWikiStorybook.getWiki(),
  args: BlockWikiStorybook.getValues()
} satisfies Meta<typeof D1Block>

export default meta

type Story = StoryObj<typeof meta>

export const Block: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Block },
    setup: () => ({ args }),
    template: `
      <D1Block v-bind="args">
        <p>
          The Block component serves as a fundamental building unit for constructing complex user interfaces.
          It provides a flexible container that can host various content elements such as labels, descriptions, and icons.
        </p>
        <p>
          With its versatile design, the Block component adapts seamlessly to different layout requirements.
          Whether you need a simple content wrapper or a detailed card with a headline and caption, this component handles it all.
        </p>
        <p>
          Developers can easily customize the appearance and behavior of the Block using properties and slots.
          This ensures that the component fits perfectly into any design system while maintaining consistency across the application.
        </p>
      </D1Block>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BlockBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Block },
    template: `
        <div class="wiki-storybook-flex">
          <D1Block>Content</D1Block>
          <D1Block label="Label" description="Description">Content</D1Block>
          <D1Block headline="Headline" label="Label">Content</D1Block>
          <D1Block icon="home" label="Label">Content</D1Block>
        </div>
    `
  })
}
export const BlockSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Block },
    template: `
        <D1Block>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Block>
    `
  })
}
// :story-items [!] System label / Системная метка
