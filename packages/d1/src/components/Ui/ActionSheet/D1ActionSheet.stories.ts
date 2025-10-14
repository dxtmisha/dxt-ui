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
          <h3 class="wiki-storybook-item--padding">Action Sheet Menu</h3>
        </template>

        <template #default>
          <div class="wiki-storybook-item--padding">
            <h4>Mobile Action Sheet Component</h4>
            <p>The Action Sheet component provides a mobile-optimized interface for presenting users with a set of actions or choices. It slides up from the bottom of the screen, following familiar patterns from iOS and Material Design guidelines.</p>

            <p>This component is particularly effective for contextual actions related to specific content, such as sharing options, editing tools, or destructive operations. The bottom-anchored design makes it easily accessible on mobile devices while maintaining a clear visual hierarchy.</p>

            <h4>Key Features</h4>
            <p>The Action Sheet includes support for primary and secondary action lists, allowing you to group related actions logically. It automatically handles touch interactions, backdrop dismissal, and keyboard accessibility, ensuring a consistent user experience across different input methods.</p>

            <p>Integration with List and Actions components provides flexibility in content presentation, while the customizable appearance adapts seamlessly to different design systems and brand requirements. The component automatically adjusts its height based on content, preventing overflow issues while maintaining optimal usability.</p>
          </div>
        </template>

        <template #footer="{classesWindow}">
          <div class="wiki-storybook-flex wiki-storybook-item--padding">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
          </div>
        </template>
      </D1ActionSheet>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ActionSheetBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      return {
          actionItems: [
            { label: 'Share', value: 'share', icon: 'share' },
            { label: 'Copy Link', value: 'copy', icon: 'content_copy' },
            { label: 'Download', value: 'download', icon: 'download' },
            { label: 'Delete', value: 'delete', icon: 'delete', destructive: true }
          ]
        }
    },
    template: `
        <D1ActionSheet :list="actionItems">
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Show Actions</button>
          </template>
        </D1ActionSheet>
    `
  })
}
export const ActionSheetGrouped: Story = {
  name: 'Сгруппированные действия',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      return {
          primaryActions: [
            { label: 'Save to Gallery', value: 'save', icon: 'save' },
            { label: 'Add to Favorites', value: 'favorite', icon: 'favorite' }
          ],
          secondaryActions: [
            { label: 'Report', value: 'report', icon: 'flag' },
            { label: 'Block User', value: 'block', icon: 'block' }
          ]
        }
    },
    template: `
        <D1ActionSheet :list="primaryActions" :listSecondary="secondaryActions">
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Show Grouped Actions</button>
          </template>
        </D1ActionSheet>
    `
  })
}
export const ActionSheetWithCancel: Story = {
  name: 'С кнопкой отмены',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      return {
          actions: [
            { label: 'Edit Profile', value: 'edit', icon: 'edit' },
            { label: 'Settings', value: 'settings', icon: 'settings' },
            { label: 'Sign Out', value: 'signout', icon: 'logout' }
          ]
        }
    },
    template: `
        <D1ActionSheet :list="actions" cancel>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
          </template>
        </D1ActionSheet>
    `
  })
}
// :story-items [!] System label / Системная метка
