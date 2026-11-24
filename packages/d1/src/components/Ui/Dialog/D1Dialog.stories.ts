import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Dialog from './D1Dialog.vue'
import { DialogWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { image1 } from '@dxtmisha/wiki/media'
import { expect, within, userEvent, waitFor, fireEvent } from 'storybook/test'
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
        <template #control="{ binds }">
          <button type="button" class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </D1Dialog>
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
    await expect(triggerButton).toBeInTheDocument()

    await userEvent.click(triggerButton!)
    await waitFor(async () => {
      const openDialog = document.querySelector<HTMLElement>('.d1-dialog[data-status="open"], .d1-dialog[data-status="flash"]')
      await expect(openDialog).toBeInTheDocument()
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      const openDialog = document.querySelector<HTMLElement>('.d1-dialog[data-status="open"], .d1-dialog[data-status="flash"]')
      await expect(openDialog).toBeNull()
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const DialogStates: Story = {
  name: 'Состояния успеха и ошибки',
  render: () => ({
    components: { D1Dialog },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Dialog
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" data-testid="dialog-success-trigger" v-bind="binds">Success Dialog</button>
            </template>
          </D1Dialog>

          <D1Dialog
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" data-testid="dialog-error-trigger" v-bind="binds">Error Dialog</button>
            </template>
          </D1Dialog>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Open and verify success dialog', async () => {
      await userEvent.click(canvas.getByTestId('dialog-success-trigger'))
      await waitFor(async () => {
        const dialogElement = document.querySelector<HTMLElement>('.d1-dialog--success[data-status="open"], .d1-dialog--success[data-status="flash"]')
        await expect(dialogElement).toBeInTheDocument()
        await expect(dialogElement).toHaveTextContent('Operation Successful')
      })
      await userEvent.keyboard('{Escape}')
      await waitFor(async () => {
        await expect(document.querySelector('.d1-dialog--success[data-status="open"], .d1-dialog--success[data-status="flash"]')).toBeNull()
      })
    })

    await step('Open and verify error dialog', async () => {
      await userEvent.click(canvas.getByTestId('dialog-error-trigger'))
      await waitFor(async () => {
        const dialogElement = document.querySelector<HTMLElement>('.d1-dialog--error[data-status="open"], .d1-dialog--error[data-status="flash"]')
        await expect(dialogElement).toBeInTheDocument()
        await expect(dialogElement).toHaveTextContent('Operation Failed')
      })
      await userEvent.keyboard('{Escape}')
      await waitFor(async () => {
        await expect(document.querySelector('.d1-dialog--error[data-status="open"], .d1-dialog--error[data-status="flash"]')).toBeNull()
      })
    })
  }
}
export const DialogVModel: Story = {
  name: 'Двусторонняя привязка (v-model:open)',
  render: () => ({
    components: { D1Dialog },
    setup() {
      const openState = ref<boolean>(false)
      return {
        openState
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="dialog-vmodel-open" @click="openState = true">
              Open via v-model ({{ openState }})
            </button>
          </div>

          <D1Dialog
            v-model:open="openState"
            label="Confirmation"
            description="Are you sure you want to proceed with this action?"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const openButton = canvas.getByTestId('dialog-vmodel-open')

    await expect(openButton).toHaveTextContent('false')
    await userEvent.click(openButton)

    await waitFor(async () => {
      await expect(openButton).toHaveTextContent('true')
      const openDialog = document.querySelector<HTMLElement>('.d1-dialog[data-status="open"], .d1-dialog[data-status="flash"]')
      await expect(openDialog).toBeInTheDocument()
      await expect(openDialog).toHaveTextContent('Confirmation')
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelector('.d1-dialog[data-status="open"], .d1-dialog[data-status="flash"]')).toBeNull()
    })
  }
}
export const DialogAllSlots: Story = {
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: { D1Dialog },
    template: `
        
        <D1Dialog>
          <template #control="{ binds }">
            <button type="button" class="wiki-storybook-button" data-testid="dialog-slots-trigger" v-bind="binds">
              Open Dialog with All Slots
            </button>
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

          <template #header>
            Header Slot
          </template>

          <template #default>
            Default Slot
          </template>

          <template #footer>
            Footer Slot
          </template>
        </D1Dialog>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('dialog-slots-trigger'))

    await waitFor(async () => {
      const openDialog = document.querySelector<HTMLElement>('.d1-dialog[data-status="open"], .d1-dialog[data-status="flash"]')
      await expect(openDialog).toBeInTheDocument()
      await expect(openDialog).toHaveTextContent('Title Slot')
      await expect(openDialog).toHaveTextContent('Label Slot')
      await expect(openDialog).toHaveTextContent('Description Slot')
      await expect(openDialog).toHaveTextContent('Header Slot')
      await expect(openDialog).toHaveTextContent('Default Slot')
      await expect(openDialog).toHaveTextContent('Footer Slot')
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelector('.d1-dialog[data-status="open"], .d1-dialog[data-status="flash"]')).toBeNull()
    })
  }
}
export const DialogTestButtonsEventsAndImage: Story = {
  name: 'Тест: Кнопки, clickOkAndClose=false, скрытие кнопок null, imagePosition и события ok/close',
  render: () => ({
    components: { D1Dialog },
    setup() {
      const eventLog = ref<string[]>([])
      const onOk = () => {
        eventLog.value = [...eventLog.value, 'ok']
      }
      const onClose = () => {
        eventLog.value = [...eventLog.value, 'close']
      }
      return {
        image1,
        eventLog,
        onOk,
        onClose
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1Dialog
              label="Stay Open Test"
              description="OK emits without closing."
              icon="info"
              :image="image1"
              image-position="left"
              button-ok="Confirm Stay"
              button-close="Dismiss Now"
              :click-ok-and-close="false"
              @ok="onOk"
              @close="onClose"
            >
              <template #control="{ binds }">
                <button type="button" class="wiki-storybook-button" data-testid="dialog-events-trigger" v-bind="binds">
                  Open Events Dialog
                </button>
              </template>
            </D1Dialog>

            <D1Dialog
              label="No Buttons Test"
              description="Buttons disabled via null."
              :button-ok="null"
              :button-close="null"
            >
              <template #control="{ binds }">
                <button type="button" class="wiki-storybook-button" data-testid="dialog-nobuttons-trigger" v-bind="binds">
                  Open Null Buttons
                </button>
              </template>
            </D1Dialog>
          </div>
          <span data-testid="dialog-event-log">{{ eventLog.join(',') }}</span>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Verify clickOkAndClose=false emits ok without closing, then close dismisses', async () => {
      await userEvent.click(canvas.getByTestId('dialog-events-trigger'))
      await waitFor(async () => {
        const dialogElement = document.querySelector<HTMLElement>('.d1-dialog--imagePosition--left[data-status="open"], .d1-dialog--imagePosition--left[data-status="flash"]')
        await expect(dialogElement).toBeInTheDocument()
      })

      const okButton = [...document.querySelectorAll<HTMLButtonElement>('button')].find(button => button.textContent?.trim() === 'Confirm Stay')
      await expect(okButton).toBeInTheDocument()
      await userEvent.click(okButton!)

      await waitFor(async () => {
        await expect(canvasElement.querySelector('[data-testid="dialog-event-log"]')).toHaveTextContent('ok')
        await expect(document.querySelector('.d1-dialog--imagePosition--left[data-status="open"], .d1-dialog--imagePosition--left[data-status="flash"]')).toBeInTheDocument()
      })

      await new Promise(resolve => requestAnimationFrame(() => resolve(undefined)))

      const closeButton = [...document.querySelectorAll<HTMLButtonElement>('button')].find(button => button.textContent?.trim() === 'Dismiss Now')
      await expect(closeButton).toBeInTheDocument()
      await userEvent.click(closeButton!)

      await waitFor(async () => {
        const hidingElement = document.querySelector<HTMLElement>('.d1-dialog--imagePosition--left[data-status="hide"]')
        if (hidingElement) {
          await fireEvent.transitionEnd(hidingElement)
        }
        await expect(canvasElement.querySelector('[data-testid="dialog-event-log"]')).toHaveTextContent('ok,close')
        await expect(document.querySelector('.d1-dialog--imagePosition--left[data-status="open"], .d1-dialog--imagePosition--left[data-status="flash"]')).toBeNull()
      })
    })

    await step('Verify buttonOk=null and buttonClose=null omit default action buttons', async () => {
      await userEvent.click(canvas.getByTestId('dialog-nobuttons-trigger'))
      await waitFor(async () => {
        const openDialog = document.querySelector<HTMLElement>('.d1-dialog[data-status="open"], .d1-dialog[data-status="flash"]')
        await expect(openDialog).toBeInTheDocument()
        await expect(openDialog).toHaveTextContent('No Buttons Test')
      })
      await userEvent.keyboard('{Escape}')
      await waitFor(async () => {
        await expect(document.querySelector('.d1-dialog[data-status="open"], .d1-dialog[data-status="flash"]')).toBeNull()
      })
    })
  }
}
// :story-items [!] System label / Системная метка
