import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1PageArea from './D1PageArea.vue'
import { PageAreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/PageArea',
  component: D1PageArea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PageAreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PageAreaWikiStorybook.getWiki(),
  args: PageAreaWikiStorybook.getValues()
} satisfies Meta<typeof D1PageArea>

export default meta

type Story = StoryObj<typeof meta>

export const PageArea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1PageArea },
    setup: () => ({ args }),
    template: `
      <D1PageArea v-bind="args">
        <p>
          The PageArea component is a specialized container designed to structure the content within a specific page or layout region.
          It provides consistent margins, alignment, and semantic grouping for nested components.
        </p>
        <p>
          It acts as an orchestrator for various UI blocks, allowing developers to define a clear information hierarchy.
          Whether it's a dashboard overview or a detailed data view, PageArea ensures the layout remains cohesive.
        </p>
      </D1PageArea>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const PageAreaBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1PageArea },
    template: `
        <D1PageArea>
          <p>This is a basic example of PageArea content. It can contain any combination of blocks, sections, or individual UI elements.</p>
        </D1PageArea>
    `
  })
}
export const PageAreaSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1PageArea },
    template: `
        <D1PageArea>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1PageArea>
    `
  })
}
// :story-items [!] System label / Системная метка
