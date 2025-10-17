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
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1ActionSheet v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1ActionSheet>
    `
  })
}
export const ActionSheetTouchClose: Story = {
  name: 'Закрытие жестом',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      return {
        openWithTouch: ref(false),
        openWithoutTouch: ref(false)
      }
    },
    template: `
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="openWithTouch = true">
            With Touch Close ({{ openWithTouch }})
          </button>
          <button class="wiki-storybook-button" @click="openWithoutTouch = true">
            Without Touch Close ({{ openWithoutTouch }})
          </button>
        </div>

        <D1ActionSheet v-model:open="openWithTouch" :touchClose="true">
          <template #title>
            Swipe Down to Close
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Enabled</strong>
                <p>This action sheet can be closed by swiping down on the title area. Notice the tab indicator at the top that signals the drag interaction.</p>
                <p>Try swiping down on the header to close this panel. This follows iOS and Material Design patterns for mobile interfaces.</p>
              </div>
            </div>
          </template>
        </D1ActionSheet>

        <D1ActionSheet v-model:open="openWithoutTouch" :touchClose="false">
          <template #title>
            No Swipe Gesture
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Disabled</strong>
                <p>This action sheet cannot be closed by swiping down. The tab indicator is not displayed, and touch gestures are disabled.</p>
                <p>You must use the backdrop click or close button to dismiss this panel. This is useful when you want to prevent accidental dismissal.</p>
              </div>
            </div>
          </template>
          <template #footer="{classesWindow}">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Close</button>
          </template>
        </D1ActionSheet>
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

          <template #title>
            Action Sheet Title Slot
          </template>

          <template #default>
            <div class="wiki-storybook-item--padding">
              <h4>Default Slot Content</h4>
              <p>This is the main content area of the action sheet. You can place any content here including action lists, forms, or other components.</p>

              <div class="wiki-storybook-info">
                <strong>Available slots:</strong>
                <ul>
                  <li><code>#control</code> - trigger button or element</li>
                  <li><code>#title</code> - action sheet header/title area</li>
                  <li><code>#default</code> - main content area</li>
                  <li><code>#footer</code> - footer with actions or cancel button</li>
                </ul>
              </div>

              <p>Each slot receives control props that allow you to interact with the action sheet programmatically, such as closing it or accessing window classes. The component slides up from the bottom with touch gesture support.</p>
            </div>
          </template>

          <template #footer="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </template>
        </D1ActionSheet>
    `
  })
}
// :story-items [!] System label / Системная метка
