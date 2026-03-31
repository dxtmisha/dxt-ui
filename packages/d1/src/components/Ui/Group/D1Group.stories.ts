import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Group from './D1Group.vue'
import { GroupWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Group',
  component: D1Group,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: GroupWikiStorybook.getDescription()
      }
    }
  },
  argTypes: GroupWikiStorybook.getWiki(),
  args: GroupWikiStorybook.getValues()
} satisfies Meta<typeof D1Group>

export default meta

type Story = StoryObj<typeof meta>

export const Group: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Group },
    setup: () => ({ args }),
    template: `
      <D1Group v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </D1Group>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const GroupBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Group },
    template: `
        <D1Group
          headline="Notifications"
          label="Settings"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </D1Group>
    `
  })
}
export const GroupSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Group },
    template: `
        <D1Group>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Group>
    `
  })
}
// :story-items [!] System label / Системная метка
