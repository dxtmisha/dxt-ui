import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Modal from './D1Modal.vue'
import { ModalWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within } from 'storybook/test'
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
          <p>Modal is essentially Window with <code>adaptive="modal"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in a Modal component.</p>
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
      const open = ref(false)
      return { open }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <D1Modal v-model:open="open">
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Controlled Modal</h3>
              </div>
            </template>
            <div class="wiki-storybook-item--padding">
              <p>This modal is controlled via <code>v-model:open</code> binding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="wiki-storybook-flex wiki-storybook-item--padding">
                <button :class="classesWindow.close" class="wiki-storybook-button">Close</button>
              </div>
            </template>
          </D1Modal>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const openButton = canvas.getByText(/Open via v-model/)
    await expect(openButton).toBeInTheDocument()
  }
}
export const ModalAllSlots: Story = {
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: { D1Modal },
    template: `
        
        <D1Modal width="md">
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Modal with All Slots</button>
          </template>

          <template #title>
            <div class="wiki-storybook-item--padding">
              <h3>Title slot content</h3>
            </div>
          </template>

          <template #header>
            <div class="wiki-storybook-item--padding">
              <em>Header slot content</em>
            </div>
          </template>

          <template #default>
            <div class="wiki-storybook-item--padding">
              <p>Default body slot content describing the purpose of the dialog.</p>
            </div>
          </template>

          <template #footer="{ classesWindow }">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </template>
        </D1Modal>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByText('Open Modal with All Slots')
    await expect(trigger).toBeInTheDocument()
  }
}
export const ModalImage: Story = {
  name: 'Позиции баннера изображения',
  render: () => ({
    components: { D1Modal },
    template: `
        
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <D1Modal
            image="https://picsum.photos/600/300?random=1"
            imagePosition="top"
            width="md"
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Top Image Modal</button>
            </template>
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Top Banner Modal</h3>
              </div>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Modal dialog with banner positioned at the top.</p>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            image="https://picsum.photos/300/400?random=2"
            imagePosition="left"
            width="lg"
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Left Image Modal</button>
            </template>
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Left Banner Modal</h3>
              </div>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Modal dialog with banner positioned on the left side.</p>
              </div>
            </template>
          </D1Modal>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const topTrigger = canvas.getByText('Top Image Modal')
    const leftTrigger = canvas.getByText('Left Image Modal')
    await expect(topTrigger).toBeInTheDocument()
    await expect(leftTrigger).toBeInTheDocument()
  }
}
export const ModalExpose: Story = {
  name: 'Программное управление через expose',
  render: () => ({
    components: { D1Modal },
    setup() {
      const modalRef = ref<any>(null)
      const onOpen = () => {
        modalRef.value?.toOpen()
      }
      const onClose = () => {
        modalRef.value?.toClose()
      }
      const onToggle = () => {
        modalRef.value?.toggle()
      }
      return { modalRef, onOpen, onClose, onToggle }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button class="wiki-storybook-button" @click="onOpen">toOpen()</button>
            <button class="wiki-storybook-button" @click="onClose">toClose()</button>
            <button class="wiki-storybook-button" @click="onToggle">toggle()</button>
          </div>

          <D1Modal ref="modalRef">
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Expose Controlled Modal</h3>
              </div>
            </template>
            <div class="wiki-storybook-item--padding">
              <p>This modal is opened and closed using exposed methods on its template reference.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="wiki-storybook-flex wiki-storybook-item--padding">
                <button :class="classesWindow.close" class="wiki-storybook-button">Dismiss</button>
              </div>
            </template>
          </D1Modal>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('toOpen()')).toBeInTheDocument()
    await expect(canvas.getByText('toClose()')).toBeInTheDocument()
    await expect(canvas.getByText('toggle()')).toBeInTheDocument()
  }
}
export const ModalTestWidths: Story = {
  name: 'Тест: Предустановленная ширина',
  render: () => ({
    components: { D1Modal },
    template: `
        
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <D1Modal width="sm">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">SM</button>
            </template>
          </D1Modal>
          <D1Modal width="md">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">MD</button>
            </template>
          </D1Modal>
          <D1Modal width="lg">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">LG</button>
            </template>
          </D1Modal>
          <D1Modal width="xl">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">XL</button>
            </template>
          </D1Modal>
          <D1Modal width="auto">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Auto</button>
            </template>
          </D1Modal>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-modal')
    await expect(items.length).toBe(5)
    await expect(items[0]).toHaveClass('d1-modal--width--sm')
    await expect(items[1]).toHaveClass('d1-modal--width--md')
    await expect(items[2]).toHaveClass('d1-modal--width--lg')
    await expect(items[3]).toHaveClass('d1-modal--width--xl')
    await expect(items[4]).toHaveClass('d1-modal--width--auto')
  }
}
export const ModalTestImagePositions: Story = {
  name: 'Тест: Варианты позиции изображения',
  render: () => ({
    components: { D1Modal },
    template: `
        
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <D1Modal image="test.jpg" imagePosition="top">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Image Top</button>
            </template>
          </D1Modal>
          <D1Modal image="test.jpg" imagePosition="left">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Image Left</button>
            </template>
          </D1Modal>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-modal')
    await expect(items.length).toBe(2)
    await expect(items[0]).toHaveClass('d1-modal--imagePosition--top')
    await expect(items[1]).toHaveClass('d1-modal--imagePosition--left')
  }
}
export const ModalTestBarsAndActions: Story = {
  name: 'Тест: Интеграция панелей и действий',
  render: () => ({
    components: { D1Modal },
    setup() {
      const actionsList = [
        { label: 'Action 1', value: 'a1' },
        { label: 'Action 2', value: 'a2' }
      ]
      const barsList = [
        { label: 'Bar 1', value: 'b1' }
      ]
      return { actionsList, barsList }
    },
    template: `
        
        <D1Modal
          :actionsList="actionsList"
          :barsList="barsList"
          :barsBackHide="false"
        >
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Bars & Actions Modal</button>
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">Modal body with bars and actions.</div>
          </template>
        </D1Modal>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Open Bars & Actions Modal')).toBeInTheDocument()
  }
}
export const ModalTestEvents: Story = {
  name: 'Тест: События окна и жизненного цикла',
  render: () => ({
    components: { D1Modal },
    setup() {
      const lastEvent = ref('')
      const onWindowEvent = () => {
        lastEvent.value = 'window'
      }
      return { lastEvent, onWindowEvent }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Modal @window="onWindowEvent">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Trigger Events</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Event Tracker Modal</div>
            </template>
          </D1Modal>
          <span class="wiki-event-indicator">{{ lastEvent }}</span>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Trigger Events')).toBeInTheDocument()
  }
}
// :story-items [!] System label / Системная метка
