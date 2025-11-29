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
      </D1Dialog>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
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
          <D1Dialog
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Success Dialog</button>
            </template>
          </D1Dialog>

          <D1Dialog
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Error Dialog</button>
            </template>
          </D1Dialog>
        </div>
    `
  })
}
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
        />
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
            Title Slot
          </template>

          <template #label>
            <strong>Label Slot</strong>
          </template>

          <template #description>
            <em>Description Slot</em>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #footer="{classesWindow}">
            Footer Slot
          </template>
        </D1Dialog>
    `
  })
}
// :story-items [!] System label / Системная метка
