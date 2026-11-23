import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ActionSheet from './D1ActionSheet.vue'
import { ActionSheetWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ActionSheetExpose as ActionSheetExposeType } from '@dxtmisha/constructor/ActionSheet'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'
import { expect, within, userEvent, waitFor, fireEvent } from 'storybook/test'
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
        <template #control="{ binds }">
          <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet</button>
        </template>

        <template #title>
          <div class="wiki-storybook-item--padding">
            <h3>Action Sheet Menu</h3>
          </div>
        </template>

        <template #default>
          <div class="wiki-storybook-item--padding">
            <h4>Mobile Action Sheet Component</h4>
            <p>The Action Sheet component provides a mobile-optimized interface for presenting users with contextual actions or choices. It supports swipe-down dismissal via <code>touchClose</code> and integrates seamlessly with Bars and Actions.</p>
          </div>
        </template>
      </D1ActionSheet>
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
    await expect(triggerButton).toBeInTheDocument()

    await userEvent.click(triggerButton!)
    await waitFor(async () => {
      const sheetElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')
      await expect(sheetElement).toBeInTheDocument()
      await expect(sheetElement).toHaveTextContent('Action Sheet Menu')
      await expect(sheetElement?.querySelector('.d1-actionSheet__touch')).toBeInTheDocument()
      await expect(sheetElement?.querySelector('.d1-actionSheet__tab')).toHaveAttribute('aria-hidden', 'true')
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      const sheetElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')
      await expect(sheetElement).toBeNull()
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ActionSheetVModel: Story = {
  name: 'Двусторонняя привязка (v-model:open и v-model:modelOpen)',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      const openState = ref(false)
      const modelOpenState = ref(false)
      return { openState, modelOpenState }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button class="wiki-storybook-button" data-testid="sheet-open-vmodel" @click="openState = true">
              Open via v-model:open ({{ openState }})
            </button>
            <button class="wiki-storybook-button" data-testid="sheet-open-model" @click="modelOpenState = true">
              Open via v-model:modelOpen ({{ modelOpenState }})
            </button>
          </div>

          <D1ActionSheet v-model:open="openState">
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Controlled Sheet (open)</h3>
              </div>
            </template>
            <div class="wiki-storybook-item--padding">
              <p>Driven by external <code>v-model:open</code> binding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="wiki-storybook-flex wiki-storybook-item--padding">
                <button :class="classesWindow.close" class="wiki-storybook-button" data-testid="sheet-close-vmodel">Close open</button>
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet v-model:modelOpen="modelOpenState">
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Controlled Sheet (modelOpen)</h3>
              </div>
            </template>
            <div class="wiki-storybook-item--padding">
              <p>Driven by external <code>v-model:modelOpen</code> binding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="wiki-storybook-flex wiki-storybook-item--padding">
                <button :class="classesWindow.close" class="wiki-storybook-button" data-testid="sheet-close-model">Close modelOpen</button>
              </div>
            </template>
          </D1ActionSheet>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const openButton = canvas.getByTestId('sheet-open-vmodel')
    const modelOpenButton = canvas.getByTestId('sheet-open-model')

    await step('Open and close via v-model:open', async () => {
      await expect(openButton).toHaveTextContent('false')
      await userEvent.click(openButton)
      await waitFor(async () => {
        await expect(openButton).toHaveTextContent('true')
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeInTheDocument()
        await expect(document.querySelector('[data-testid="sheet-close-vmodel"]')).toBeInTheDocument()
      })
      await new Promise(resolve => requestAnimationFrame(() => resolve(undefined)))

      const closeButton = document.querySelector<HTMLButtonElement>('[data-testid="sheet-close-vmodel"]')
      await userEvent.click(closeButton!)
      await waitFor(async () => {
        const hidingElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="hide"]')
        if (hidingElement) {
          await fireEvent.transitionEnd(hidingElement)
        }
        await expect(openButton).toHaveTextContent('false')
      })
    })

    await step('Open and close via v-model:modelOpen', async () => {
      await expect(modelOpenButton).toHaveTextContent('false')
      await userEvent.click(modelOpenButton)
      await waitFor(async () => {
        await expect(modelOpenButton).toHaveTextContent('true')
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeInTheDocument()
        await expect(document.querySelector('[data-testid="sheet-close-model"]')).toBeInTheDocument()
      })
      await new Promise(resolve => requestAnimationFrame(() => resolve(undefined)))

      const closeButton = document.querySelector<HTMLButtonElement>('[data-testid="sheet-close-model"]')
      await userEvent.click(closeButton!)
      await waitFor(async () => {
        const hidingElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="hide"]')
        if (hidingElement) {
          await fireEvent.transitionEnd(hidingElement)
        }
        await expect(modelOpenButton).toHaveTextContent('false')
      })
    })
  }
}
export const ActionSheetTouchClose: Story = {
  name: 'Закрытие жестом свайпа (touchClose)',
  render: () => ({
    components: { D1ActionSheet },
    template: `
        
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <D1ActionSheet :touchClose="true">
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="sheet-touch-enabled" v-bind="binds">With touchClose (true)</button>
            </template>
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Swipe-to-Close Enabled</h3>
              </div>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Includes drag handle and downward swipe gesture.</div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet :touchClose="false">
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="sheet-touch-disabled" v-bind="binds">Without touchClose (false)</button>
            </template>
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Swipe-to-Close Disabled</h3>
              </div>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Omits the touch swipe wrapper and drag handle.</div>
            </template>
          </D1ActionSheet>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Verify touchClose=true renders touch wrapper and decorative tab', async () => {
      await userEvent.click(canvas.getByTestId('sheet-touch-enabled'))
      await waitFor(async () => {
        const sheetElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')
        await expect(sheetElement).toBeInTheDocument()
        await expect(sheetElement?.querySelector('.d1-actionSheet__touch')).toBeInTheDocument()
        await expect(sheetElement?.querySelector('.d1-actionSheet__tab')).toHaveAttribute('aria-hidden', 'true')
      })
      await userEvent.keyboard('{Escape}')
      await waitFor(async () => {
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
      })
    })

    await step('Verify touchClose=false omits touch wrapper and drag handle', async () => {
      await userEvent.click(canvas.getByTestId('sheet-touch-disabled'))
      await waitFor(async () => {
        const sheetElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')
        await expect(sheetElement).toBeInTheDocument()
        await expect(sheetElement?.querySelector('.d1-actionSheet__touch')).toBeNull()
        await expect(sheetElement?.querySelector('.d1-actionSheet__tab')).toBeNull()
      })
      await userEvent.keyboard('{Escape}')
      await waitFor(async () => {
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
      })
    })
  }
}
export const ActionSheetAllSlots: Story = {
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: { D1ActionSheet },
    template: `
        
        <D1ActionSheet>
          <template #control="{ binds }">
            <button class="wiki-storybook-button" data-testid="sheet-slots-trigger" v-bind="binds">Open Action Sheet with All Slots</button>
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
              <p>Default body slot content.</p>
            </div>
          </template>

          <template #footer="{ classesWindow }">
            <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text" data-testid="sheet-slots-close">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </template>
        </D1ActionSheet>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('sheet-slots-trigger'))

    await waitFor(async () => {
      const sheetElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')
      await expect(sheetElement).toBeInTheDocument()
      await expect(sheetElement?.querySelector('.d1-actionSheet__title')).toHaveTextContent('Title slot content')
      await expect(sheetElement?.querySelector('.d1-actionSheet__header')).toHaveTextContent('Header slot content')
      await expect(sheetElement?.querySelector('.d1-actionSheet__body')).toHaveTextContent('Default body slot content.')
      await expect(sheetElement?.querySelector('.d1-actionSheet__footer')).toHaveTextContent('Confirm')
    })
    await new Promise(resolve => requestAnimationFrame(() => resolve(undefined)))

    const closeButton = document.querySelector<HTMLButtonElement>('[data-testid="sheet-slots-close"]')
    await userEvent.click(closeButton!)
    await waitFor(async () => {
      await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
    })
  }
}
export const ActionSheetBarsAndActions: Story = {
  name: 'Интеграция Bars и Actions',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      const barsList = [
        { icon: 'help', value: 'help' }
      ]
      const actionsList = [
        { label: 'Cancel', value: 'cancel' },
        { label: 'Confirm', value: 'confirm' }
      ]
      const actionsSecondary = [
        { label: 'Reset', value: 'reset' }
      ]
      return { barsList, actionsList, actionsSecondary }
    },
    template: `
        
        <D1ActionSheet
          barsLabel="Sheet Bars Heading"
          barsDescription="Accessible sheet description"
          :barsBackHide="false"
          :barsList="barsList"
          :actionsList="actionsList"
          :actionsSecondary="actionsSecondary"
        >
          <template #control="{ binds }">
            <button class="wiki-storybook-button" data-testid="sheet-bars-trigger" v-bind="binds">Open Bars & Actions Sheet</button>
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">ActionSheet with integrated Bars header and auto-aligned Actions footer.</div>
          </template>
        </D1ActionSheet>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('sheet-bars-trigger'))

    await waitFor(async () => {
      const sheetElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')
      await expect(sheetElement).toBeInTheDocument()

      const labelledById = sheetElement?.getAttribute('aria-labelledby')
      const describedById = sheetElement?.getAttribute('aria-describedby')
      await expect(labelledById).toBeTruthy()
      await expect(describedById).toBeTruthy()
      await expect(document.getElementById(labelledById!)).toHaveTextContent('Sheet Bars Heading')
      await expect(document.getElementById(describedById!)).toHaveTextContent('Accessible sheet description')
      await expect(sheetElement).toHaveTextContent('Confirm')
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
    })
  }
}
export const ActionSheetExpose: Story = {
  name: 'Программное управление через expose',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      const sheetRef = ref<ActionSheetExposeType | null>(null)
      const statusText = ref('closed')
      const syncStatus = () => {
        statusText.value = sheetRef.value?.getOpen() ? 'open' : 'closed'
      }
      const onOpen = async () => {
        await sheetRef.value?.toOpen()
        syncStatus()
      }
      const onClose = async () => {
        await sheetRef.value?.toClose()
        syncStatus()
      }
      const onToggle = async () => {
        await sheetRef.value?.toggle()
        syncStatus()
      }
      const onSetOpen = async () => {
        await sheetRef.value?.setOpen(true)
        syncStatus()
      }
      return { sheetRef, statusText, onOpen, onClose, onToggle, onSetOpen }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button class="wiki-storybook-button" data-testid="sheet-expose-open" @click="onOpen">toOpen()</button>
            <button class="wiki-storybook-button" data-testid="sheet-expose-close" @click="onClose">toClose()</button>
            <button class="wiki-storybook-button" data-testid="sheet-expose-toggle" @click="onToggle">toggle()</button>
            <button class="wiki-storybook-button" data-testid="sheet-expose-set-open" @click="onSetOpen">setOpen(true)</button>
          </div>
          <div class="wiki-storybook-card" data-testid="sheet-expose-status">Status: {{ statusText }}</div>

          <D1ActionSheet ref="sheetRef">
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Expose Controlled Sheet</h3>
              </div>
            </template>
            <div class="wiki-storybook-item--padding">
              <p>Controlled via exposed methods on template reference.</p>
            </div>
            <template #footer>
              <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
                <button class="wiki-storybook-button" data-testid="sheet-expose-close-inside" @click="onClose">Close via toClose()</button>
                <button class="wiki-storybook-button" data-testid="sheet-expose-toggle-inside" @click="onToggle">Toggle via toggle()</button>
              </div>
            </template>
          </D1ActionSheet>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Open via toOpen() and close via toClose()', async () => {
      await userEvent.click(canvas.getByTestId('sheet-expose-open'))
      await waitFor(async () => {
        await expect(canvas.getByTestId('sheet-expose-status')).toHaveTextContent('Status: open')
        await expect(document.querySelector('[data-testid="sheet-expose-close-inside"]')).toBeInTheDocument()
      })

      const insideCloseButton = document.querySelector<HTMLButtonElement>('[data-testid="sheet-expose-close-inside"]')
      await userEvent.click(insideCloseButton!)
      await waitFor(async () => {
        const hidingElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="hide"]')
        if (hidingElement) {
          await fireEvent.transitionEnd(hidingElement)
        }
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
      })
    })

    await step('Toggle open and closed via toggle()', async () => {
      await userEvent.click(canvas.getByTestId('sheet-expose-toggle'))
      await waitFor(async () => {
        await expect(canvas.getByTestId('sheet-expose-status')).toHaveTextContent('Status: open')
        await expect(document.querySelector('[data-testid="sheet-expose-toggle-inside"]')).toBeInTheDocument()
      })

      const insideToggleButton = document.querySelector<HTMLButtonElement>('[data-testid="sheet-expose-toggle-inside"]')
      await userEvent.click(insideToggleButton!)
      await waitFor(async () => {
        const hidingElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="hide"]')
        if (hidingElement) {
          await fireEvent.transitionEnd(hidingElement)
        }
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
      })
    })
  }
}
export const ActionSheetTestWindowOptions: Story = {
  name: 'Тест: Опции окна (disabled, autoClose, disableFocusReturn, windowAttrs)',
  render: () => ({
    components: { D1ActionSheet },
    template: `
        
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <D1ActionSheet :windowAttrs="{ persistent: true }">
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="sheet-test-persistent" v-bind="binds">Persistent</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Persistent sheet content</div>
            </template>
            <template #footer="{ classesWindow }">
              <div class="wiki-storybook-item--padding">
                <button :class="classesWindow.close" class="wiki-storybook-button" data-testid="sheet-test-persistent-close">Explicit Close</button>
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet disabled>
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="sheet-test-disabled" disabled v-bind="binds">Disabled</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Disabled sheet content</div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet autoClose disableFocusReturn :barsBackHide="true">
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="sheet-test-autoclose" v-bind="binds">Auto Close</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding" data-testid="sheet-test-autoclose-body">Click body to auto-close</div>
            </template>
          </D1ActionSheet>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Verify disabled trigger is disabled', async () => {
      await expect(canvas.getByTestId('sheet-test-disabled')).toBeDisabled()
    })

    await step('Verify persistent sheet ignores Escape and closes explicitly', async () => {
      await userEvent.click(canvas.getByTestId('sheet-test-persistent'))
      await waitFor(async () => {
        await expect(document.querySelector('[data-testid="sheet-test-persistent-close"]')).toBeInTheDocument()
      })

      await userEvent.keyboard('{Escape}')
      await expect(document.querySelector('[data-testid="sheet-test-persistent-close"]')).toBeInTheDocument()

      const closeButton = document.querySelector<HTMLButtonElement>('[data-testid="sheet-test-persistent-close"]')
      await userEvent.click(closeButton!)
      await waitFor(async () => {
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
      })
    })

    await step('Verify autoClose closes sheet on body click', async () => {
      await userEvent.click(canvas.getByTestId('sheet-test-autoclose'))
      await waitFor(async () => {
        await expect(document.querySelector('[data-testid="sheet-test-autoclose-body"]')).toBeInTheDocument()
      })

      const bodyElement = document.querySelector<HTMLElement>('[data-testid="sheet-test-autoclose-body"]')
      await userEvent.click(bodyElement!)
      await waitFor(async () => {
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
      })
    })
  }
}
export const ActionSheetTestBarsAndActionsStates: Story = {
  name: 'Тест: Скрытие Bars/Actions, attrs и граничный числовой 0',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      const zeroActions = [
        { label: 0, value: 0 },
        { label: 'OK', value: 'ok' }
      ]
      return { zeroActions }
    },
    template: `
        
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <D1ActionSheet
            :barsLabel="0"
            :actionsList="zeroActions"
            :barsAttrs="{ 'data-testid': 'sheet-custom-bars' }"
            :actionsAttrs="{ 'data-testid': 'sheet-custom-actions' }"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="sheet-zero-trigger" v-bind="binds">Numeric 0 & Attrs</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Numeric 0 label and actions test</div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet
            barsLabel="Hidden Header"
            :barsHide="true"
            :actionsList="zeroActions"
            :actionsHide="true"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="sheet-hidden-trigger" v-bind="binds">Hidden Bars & Actions</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Bars and actions hidden</div>
            </template>
          </D1ActionSheet>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Verify numeric 0 and barsAttrs/actionsAttrs', async () => {
      await userEvent.click(canvas.getByTestId('sheet-zero-trigger'))
      await waitFor(async () => {
        const barsElement = document.querySelector<HTMLElement>('[data-testid="sheet-custom-bars"]')
        const actionsElement = document.querySelector<HTMLElement>('[data-testid="sheet-custom-actions"]')
        await expect(barsElement).toBeInTheDocument()
        await expect(barsElement).toHaveTextContent('0')
        await expect(actionsElement).toBeInTheDocument()
        await expect(actionsElement).toHaveTextContent('0')
        await expect(actionsElement).toHaveTextContent('OK')
      })

      await userEvent.keyboard('{Escape}')
      await waitFor(async () => {
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
      })
    })

    await step('Verify barsHide and actionsHide omit Bars and Actions', async () => {
      await userEvent.click(canvas.getByTestId('sheet-hidden-trigger'))
      await waitFor(async () => {
        const sheetElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')
        await expect(sheetElement).toBeInTheDocument()
        await expect(sheetElement).not.toHaveTextContent('Hidden Header')
        await expect(sheetElement).not.toHaveTextContent('OK')
      })

      await userEvent.keyboard('{Escape}')
      await waitFor(async () => {
        await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
      })
    })
  }
}
export const ActionSheetTestEvents: Story = {
  name: 'Тест: События окна, Bars, Actions и моделей',
  render: () => ({
    components: { D1ActionSheet },
    setup() {
      const eventLog = ref<string[]>([])
      const isOpen = ref(false)
      const barsList = [
        { label: 'Help', value: 'help' }
      ]
      const actionsList = [
        { label: 'Submit', value: 'submit' }
      ]
      const onWindowEvent = (options: WindowEmitOptions) => {
        eventLog.value.push('window:' + String(options.open))
      }
      const onActionsEvent = (_event: MouseEvent, value: EventClickValue) => {
        eventLog.value.push('actions:' + String(value.value))
      }
      const onActionsLiteEvent = (value: EventClickValue) => {
        eventLog.value.push('actionsLite:' + String(value.value))
      }
      const onBarsEvent = (_event: MouseEvent, value: EventClickValue) => {
        eventLog.value.push('bars:' + String(value.value))
      }
      const onBarsLiteEvent = (value: EventClickValue) => {
        eventLog.value.push('barsLite:' + String(value.value))
      }
      return {
        eventLog,
        isOpen,
        barsList,
        actionsList,
        onWindowEvent,
        onActionsEvent,
        onActionsLiteEvent,
        onBarsEvent,
        onBarsLiteEvent
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ActionSheet
            v-model:open="isOpen"
            barsLabel="Events Sheet"
            :barsList="barsList"
            :actionsList="actionsList"
            @window="onWindowEvent"
            @actions="onActionsEvent"
            @actionsLite="onActionsLiteEvent"
            @bars="onBarsEvent"
            @barsLite="onBarsLiteEvent"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="sheet-events-trigger" v-bind="binds">Trigger Events</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Event Tracker Action Sheet</div>
            </template>
          </D1ActionSheet>
          <span class="wiki-event-indicator" data-testid="sheet-events-log">open:{{ isOpen }}|{{ eventLog.join(',') }}</span>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByTestId('sheet-events-trigger'))
    await waitFor(async () => {
      await expect(canvas.getByTestId('sheet-events-log')).toHaveTextContent('open:true')
      await expect(canvas.getByTestId('sheet-events-log')).toHaveTextContent('window:true')
    })

    const sheetElement = document.querySelector<HTMLElement>('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')
    const buttons = Array.from(sheetElement?.querySelectorAll('button') ?? [])
    const submitButton = buttons.find(button => button.textContent?.trim() === 'Submit')
    const helpButton = buttons.find(button => button.textContent?.trim() === 'Help')

    await userEvent.click(submitButton!)
    await userEvent.click(helpButton!)

    await waitFor(async () => {
      const logElement = canvas.getByTestId('sheet-events-log')
      await expect(logElement).toHaveTextContent('actions:submit')
      await expect(logElement).toHaveTextContent('actionsLite:submit')
      await expect(logElement).toHaveTextContent('bars:help')
      await expect(logElement).toHaveTextContent('barsLite:help')
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelector('.d1-actionSheet[data-status="open"], .d1-actionSheet[data-status="flash"]')).toBeNull()
    })
  }
}
// :story-items [!] System label / Системная метка
