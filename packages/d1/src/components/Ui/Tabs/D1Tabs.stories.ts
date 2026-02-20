import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Tabs from './D1Tabs.vue'
import { TabsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Tabs',
  component: D1Tabs,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TabsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TabsWikiStorybook.getWiki(),
  args: TabsWikiStorybook.getValues()
} satisfies Meta<typeof D1Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Tabs: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Tabs },
    setup: () => ({ args }),
    template: `
      <D1Tabs v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</D1Tabs>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TabsBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1Tabs },
    template: `
        <D1Tabs
          :tabs="[
            { label: 'Home', value: 'home' },
            { label: 'Profile', value: 'profile' }
          ]"
          selected="home"
        >
          <template #home>Home</template>
          <template #profile>Profile</template>
        </D1Tabs>
    `
  })
}
export const TabsVModel: Story = {
  name: 'v-model',
  render: () => ({
    components: { D1Tabs },
    setup() {
      return {
        selected: ref('tab1')
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Tab 3</button>
          </div>
          <div>Current value: {{ selected }}</div>

          <D1Tabs
            :tabs="[
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' },
            { label: 'Tab 3', value: 'tab3' }
          ]"
            v-model:selected="selected"
          >
            <template #tab1>Content 1</template>
            <template #tab2>Content 2</template>
            <template #tab3>Content 3</template>
          </D1Tabs>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
