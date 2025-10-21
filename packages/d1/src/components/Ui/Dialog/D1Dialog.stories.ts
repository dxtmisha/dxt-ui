import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Dialog from './D1Dialog.vue'
import { DialogWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Dialog',
  component: D1Dialog,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: DialogWikiStorybook.getDescription()
      }
    }
  },
  argTypes: DialogWikiStorybook.getWiki(),
  args: DialogWikiStorybook.getValues()
} satisfies Meta<typeof D1Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Dialog: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Dialog },
    setup: () => ({ args }),
    template: `
      <D1Dialog v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>

        <template #default>
          Modal dialog for displaying alerts, confirmations, and informational messages with icon support and predefined action buttons.
        </template>
      </D1Dialog>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const DialogVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Dialog },
    setup() {
      return {
        open: ref(false)
      }
    },
    template: `
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Dialog
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        >
          <div class="wiki-storybook-item--padding">Additional content can be placed here</div>
        </D1Dialog>
    `
  })
}
export const DialogStates: Story = {
  name: 'Состояния успеха и ошибки',
  render: () => ({
    components: { D1Dialog },
    setup() {
      return {
        openSuccess: ref(false),
        openError: ref(false)
      }
    },
    template: `
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="openSuccess = true">
            Success Dialog ({{ openSuccess }})
          </button>
          <button class="wiki-storybook-button" @click="openError = true">
            Error Dialog ({{ openError }})
          </button>
        </div>

        <D1Dialog
          v-model:open="openSuccess"
          :success="true"
          label="Operation Successful"
          description="Your changes have been saved successfully."
        >
          <div class="wiki-storybook-item--padding">
            <div class="wiki-storybook-info">
              <strong>Success State</strong>
              <p>When the <code>success</code> prop is set to <code>true</code>, the dialog automatically displays a success icon (typically a check circle). This visual feedback helps users understand that their action completed successfully.</p>
              <p>The success icon is controlled by the <code>iconSuccess</code> prop, which defaults to 'check_circle' but can be customized to any icon from your icon library.</p>
            </div>
          </div>
        </D1Dialog>

        <D1Dialog
          v-model:open="openError"
          :error="true"
          label="Operation Failed"
          description="An error occurred while processing your request. Please try again."
        >
          <div class="wiki-storybook-item--padding">
            <div class="wiki-storybook-info">
              <strong>Error State</strong>
              <p>When the <code>error</code> prop is set to <code>true</code>, the dialog automatically displays an error icon. This provides immediate visual feedback that something went wrong.</p>
              <p>The error icon is controlled by the <code>iconError</code> prop, which defaults to 'error' but can be customized. This helps maintain consistency in error communication across your application.</p>
            </div>
          </div>
        </D1Dialog>
    `
  })
}
export const DialogImagePosition: Story = {
  name: 'Позиционирование изображения',
  render: () => ({
    components: { D1Dialog },
    setup() {
      return {
        openTop: ref(false),
        openLeft: ref(false)
      }
    },
    template: `
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="openTop = true">
            Image Top ({{ openTop }})
          </button>
          <button class="wiki-storybook-button" @click="openLeft = true">
            Image Left ({{ openLeft }})
          </button>
        </div>

        <D1Dialog
          v-model:open="openTop"
          imagePosition="top"
          :success="true"
          label="Top Image Layout"
          description="The image is positioned at the top of the dialog content."
        >
          <div class="wiki-storybook-item--padding">
            <div class="wiki-storybook-info">
              <strong>Image Position: Top</strong>
              <p>This is the default layout where the icon or image appears above the text content. This vertical arrangement works well for most dialog scenarios and is particularly effective on mobile devices.</p>
            </div>
          </div>
        </D1Dialog>

        <D1Dialog
          v-model:open="openLeft"
          imagePosition="left"
          :error="true"
          label="Left Image Layout"
          description="The image is positioned to the left of the dialog content."
        >
          <div class="wiki-storybook-item--padding">
            <div class="wiki-storybook-info">
              <strong>Image Position: Left</strong>
              <p>The left positioning places the icon or image beside the text content in a horizontal arrangement. This layout can be more space-efficient on wider screens and creates a different visual hierarchy.</p>
            </div>
          </div>
        </D1Dialog>
    `
  })
}
export const DialogCustomButtons: Story = {
  name: 'Пользовательские кнопки действий',
  render: () => ({
    components: { D1Dialog },
    setup() {
      return {
        openCustom: ref(false)
      }
    },
    template: `
        <button class="wiki-storybook-button" @click="openCustom = true">
          Dialog with Custom Buttons
        </button>

        <D1Dialog
          v-model:open="openCustom"
          label="Delete Confirmation"
          description="This action cannot be undone. Are you sure?"
          :buttonOk="{label: 'Delete', appearance: 'fill', palette: 'error'}"
          :buttonClose="{label: 'Cancel', appearance: 'text'}"
          @ok="console.log('Delete confirmed')"
          @close="console.log('Cancelled')"
        >
          <div class="wiki-storybook-item--padding">
            <div class="wiki-storybook-info">
              <strong>Custom Button Configuration</strong>
              <p>The <code>buttonOk</code> and <code>buttonClose</code> props accept either a string (for simple label) or a full button configuration object. This allows you to customize appearance, palette, icons, and other button properties.</p>
              <p>Setting a button prop to <code>null</code> will hide that button entirely, giving you full control over the dialog's action buttons.</p>
            </div>
          </div>
        </D1Dialog>
    `
  })
}
export const DialogAllSlots: Story = {
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: { D1Dialog },
    template: `
        <D1Dialog>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Dialog with All Slots</button>
          </template>

          <template #title>
            Dialog Title Slot
          </template>

          <template #label>
            <strong>Custom Label Slot</strong>
          </template>

          <template #description>
            <em>Custom description slot with formatted text</em>
          </template>

          <template #default>
            <div class="wiki-storybook-item--padding">
              <h4>Default Slot Content</h4>
              <p>This is the main content area of the dialog. It appears after the information block (icon, label, description).</p>

              <div class="wiki-storybook-info">
                <strong>Available slots:</strong>
                <ul>
                  <li><code>#control</code> - trigger button or element with binds</li>
                  <li><code>#title</code> - dialog header/title area (Bars component)</li>
                  <li><code>#label</code> - label within information block</li>
                  <li><code>#description</code> - description within information block</li>
                  <li><code>#default</code> - main content area after information block</li>
                  <li><code>#footer</code> - footer with action buttons (Actions component)</li>
                </ul>
              </div>

              <p>Each slot receives control props that allow you to interact with the dialog programmatically, such as closing it or accessing component classes and methods.</p>
            </div>
          </template>

          <template #footer="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Custom Cancel</button>
              <button class="wiki-storybook-button">Custom Confirm</button>
            </div>
          </template>
        </D1Dialog>
    `
  })
}
// :story-items [!] System label / Системная метка
