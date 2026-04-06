import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Page from './D1Page.vue'
import { PageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Page',
  component: D1Page,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PageWikiStorybook.getWiki(),
  args: PageWikiStorybook.getValues()
} satisfies Meta<typeof D1Page>

export default meta

type Story = StoryObj<typeof meta>

export const Page: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Page },
    setup: () => ({ args }),
    template: `
      <D1Page v-bind="args">
        <p>
          The Page component is designed to wrap the unique content of a document.
          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.
        </p>
        <p>
          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.
        </p>
        <p>
          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.
        </p>
      </D1Page>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const PageBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Page },
    template: `
        <D1Page
          headline="User Dashboard"
          label="Overview"
          description="View your account analytics and recent activity."
        >
          <p>Welcome to your dashboard. Here you can find a summary of your performance and manage your account settings.</p>
        </D1Page>
    `
  })
}
export const PageSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Page },
    template: `
        <D1Page>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Page>
    `
  })
}
// :story-items [!] System label / Системная метка
