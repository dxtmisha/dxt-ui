import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Modal from './D1Modal.vue'
import { ModalWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Modal',
  component: D1Modal,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ModalWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ModalWikiStorybook.getWiki(),
  args: ModalWikiStorybook.getValues()
} satisfies Meta<typeof D1Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Modal: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Modal },
    setup: () => ({ args }),
    template: `
      <D1Modal v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Modal</button>
        </template>

        <template #default>
          <h4>Modal Component Overview</h4>
          <p>Modal is a specialized wrapper around the Window component with preset adaptive mode set to 'modal'. It provides a simplified API for creating centered modal dialogs without needing to configure positioning and adaptive behavior manually.</p>

          <p>The component automatically handles common modal dialog scenarios including confirmations, forms, alerts, and content previews. It manages focus, scroll behavior, and keyboard navigation to ensure accessibility and optimal user experience across different devices and screen sizes.</p>

          <h4>Best Practices</h4>
          <p>Use modals sparingly and only for content that genuinely requires immediate attention. Ensure modals have clear actions (confirm/cancel), provide easy ways to dismiss them, and avoid nesting modals within modals. The component should be large enough to display content comfortably but not so large that it overwhelms the screen.</p>

          <h4>Relationship with Window</h4>
          <p>Modal is essentially Window with <code>adaptive="modal"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in Modal component.</p>
        </template>
      </D1Modal>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ModalVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Modal },
    setup() {
      return {
        open: ref(false)
      }
    },
    template: `
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Modal v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Modal>
    `
  })
}
// :story-items [!] System label / Системная метка
