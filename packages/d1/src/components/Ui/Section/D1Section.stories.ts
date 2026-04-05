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
          The Section component is a fundamental building block for structuring web pages.
          It defaults to using the <code>&lt;section&gt;</code> HTML tag, making it semantically appropriate for grouping thematic content.
        </p>
        <p>
          It provides a rich set of features for content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h2&gt;</code>, which fits the typical document outline structure.
        </p>
        <p>
          Use Section to divide your page into distinct thematic areas, improving both the visual structure and the accessibility of your application.
        </p>
      </D1Section>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SectionBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Section },
    template: `
        <D1Section
          headline="User Profile Settings"
          label="Personalization"
          description="Customize your experience and notification preferences."
        >
          <p>This section allows you to manage your personal display settings, theme selection, and language preferences. Changes are saved automatically as you update them.</p>
        </D1Section>
    `
  })
}
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
