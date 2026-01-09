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
        <div class="wiki-storybook-flex-column">
          <D1Section>
            <p>Generic section content without header.</p>
          </D1Section>
          <D1Section label="Contact Information" description="Get in touch with us">
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </D1Section>
          <D1Section headline="Our Services" label="What we do">
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
            </ul>
          </D1Section>
        </div>
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
