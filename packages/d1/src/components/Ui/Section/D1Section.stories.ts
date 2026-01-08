import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Section from './D1Section.vue'
import { SectionWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Section',
  component: D1Section,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SectionWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SectionWikiStorybook.getWiki(),
  args: SectionWikiStorybook.getValues()
} satisfies Meta<typeof D1Section>

export default meta

type Story = StoryObj<typeof meta>

export const Section: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Section },
    setup: () => ({ args }),
    template: `
      <D1Section v-bind="args">
        <p>
          The Section component is essential for organizing content into meaningful groups.
          It helps in structuring the page layout by providing clear boundaries and hierarchy for related information.
        </p>
        <p>
          With built-in support for headers and descriptions, Section makes it easy to create labeled content areas.
          This improves readability and user experience by clearly defining the context of the enclosed content.
        </p>
        <p>
          Whether used for a simple paragraph of text or a complex grid of interactive elements, Section offers the flexibility needed for modern web design.
          Its customizable nature allows it to adapt to various stylistic requirements while maintaining semantic correctness.
        </p>
      </D1Section>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SectionSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Section },
    template: `
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Section>
    `
  })
}
// :story-items [!] System label / Системная метка
