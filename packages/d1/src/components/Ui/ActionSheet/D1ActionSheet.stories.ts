import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ActionSheet from './D1ActionSheet.vue'
import { ActionSheetWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ActionSheet',
  component: D1ActionSheet,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ActionSheetWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ActionSheetWikiStorybook.getWiki(),
  args: ActionSheetWikiStorybook.getValues()
} satisfies Meta<typeof D1ActionSheet>

export default meta

type Story = StoryObj<typeof meta>

export const ActionSheet: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ActionSheet },
    setup: () => ({ args }),
    template: `
      <D1ActionSheet v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet</button>
        </template>

        <template #title>
          Action Sheet Menu
        </template>

        <template #default>
          <h4>Mobile Action Sheet Component</h4>
          <p>The Action Sheet component provides a mobile-optimized interface for presenting users with a set of actions or choices. It slides up from the bottom of the screen, following familiar patterns from iOS and Material Design guidelines.</p>

          <p>This component is particularly effective for contextual actions related to specific content, such as sharing options, editing tools, or destructive operations. The bottom-anchored design makes it easily accessible on mobile devices while maintaining a clear visual hierarchy.</p>

          <h4>Key Features</h4>
          <p>The Action Sheet includes support for primary and secondary action lists, allowing you to group related actions logically. It automatically handles touch interactions, backdrop dismissal, and keyboard accessibility, ensuring a consistent user experience across different input methods.</p>

          <p>Integration with List and Actions components provides flexibility in content presentation, while the customizable appearance adapts seamlessly to different design systems and brand requirements. The component automatically adjusts its height based on content, preventing overflow issues while maintaining optimal usability.</p>
        </template>
      </D1ActionSheet>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ActionSheetVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      return {
        open: ref(false)
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1ActionSheet v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </D1ActionSheet>
        </div>
    `
  })
}
export const ActionSheetAllSlots: Story = {
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: { D1ActionSheet },
    template: `
        <D1ActionSheet>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet with All Slots</button>
          </template>

          <template #title>Title slot</template>
          <template #default>Default slot</template>
          <template #footer>Footer slot</template>
        </D1ActionSheet>
    `
  })
}
// :story-items [!] System label / Системная метка
