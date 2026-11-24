import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Dialog component properties
 *
 * Описания свойств компонента Dialog
 */
export const wikiDescriptionsDialog: StorybookComponentsDescriptionItem = {
  name: 'Dialog',
  description: {
    en: 'Modal dialog component for displaying alerts, confirmations, and informational messages with icon and action buttons',
    ru: 'Модальный диалоговый компонент для отображения предупреждений, подтверждений и информационных сообщений с иконкой и кнопками действий'
  },
  possibilities: {
    en: [
      'modal dialog with centered positioning and backdrop',
      'icon support with predefined success and error states',
      'customizable title, description, and content areas',
      'action buttons with OK and Close presets and null hiding',
      'image positioning (top or left alignment)',
      'integration with Window, Bars, Actions, Icon components',
      'close on ESC key and backdrop click',
      'programmatic control via v-model:open and v-model:modelOpen',
      'automatic icon switching based on success/error states',
      'automatic ARIA aria-labelledby and aria-describedby linking',
      'customizable clickOkAndClose auto-close behavior'
    ],
    ru: [
      'модальный диалог с центрированием и подложкой',
      'поддержка иконок с предустановленными состояниями успеха и ошибки',
      'настраиваемые области заголовка, описания и контента',
      'кнопки действий с пресетами OK и Закрыть и скрытием через null',
      'позиционирование изображения (сверху или слева)',
      'интеграция с компонентами Window, Bars, Actions, Icon',
      'закрытие по ESC и клику на подложку',
      'программное управление через v-model:open и v-model:modelOpen',
      'автоматическое переключение иконки на основе состояний успеха/ошибки',
      'автоматическое связывание ARIA aria-labelledby и aria-describedby',
      'настраиваемое автозакрытие по нажатию OK (clickOkAndClose)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { image1 } from \'@dxtmisha/wiki/media\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <template #control="{ binds }">
          <button type="button" class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </DesignComponent>
    `,
  play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
await expect(triggerButton).toBeInTheDocument()

await userEvent.click(triggerButton!)
await waitFor(async () => {
  const openDialog = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(openDialog).toBeInTheDocument()
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  const openDialog = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(openDialog).toBeNull()
})
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'DialogStates',
      name: {
        en: 'Success and error states',
        ru: 'Состояния успеха и ошибки'
      },
      propsName: ['success', 'error'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" data-testid="dialog-success-trigger" v-bind="binds">Success Dialog</button>
            </template>
          </DesignComponent>

          <DesignComponent
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" data-testid="dialog-error-trigger" v-bind="binds">Error Dialog</button>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Open and verify success dialog', async () => {
  await userEvent.click(canvas.getByTestId('dialog-success-trigger'))
  await waitFor(async () => {
    const dialogElement = document.querySelector<HTMLElement>('.design-component--success[data-status="open"], .design-component--success[data-status="flash"]')
    await expect(dialogElement).toBeInTheDocument()
    await expect(dialogElement).toHaveTextContent('Operation Successful')
  })
  await userEvent.keyboard('{Escape}')
  await waitFor(async () => {
    await expect(document.querySelector('.design-component--success[data-status="open"], .design-component--success[data-status="flash"]')).toBeNull()
  })
})

await step('Open and verify error dialog', async () => {
  await userEvent.click(canvas.getByTestId('dialog-error-trigger'))
  await waitFor(async () => {
    const dialogElement = document.querySelector<HTMLElement>('.design-component--error[data-status="open"], .design-component--error[data-status="flash"]')
    await expect(dialogElement).toBeInTheDocument()
    await expect(dialogElement).toHaveTextContent('Operation Failed')
  })
  await userEvent.keyboard('{Escape}')
  await waitFor(async () => {
    await expect(document.querySelector('.design-component--error[data-status="open"], .design-component--error[data-status="flash"]')).toBeNull()
  })
})
      `
    },
    {
      id: 'DialogVModel',
      name: {
        en: 'Two-way binding (v-model:open)',
        ru: 'Двусторонняя привязка (v-model:open)'
      },
      propsName: ['open'],
      setup: `
      const openState = ref<boolean>(false)
      return {
        openState
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="dialog-vmodel-open" @click="openState = true">
              Open via v-model ({{ openState }})
            </button>
          </div>

          <DesignComponent
            v-model:open="openState"
            label="Confirmation"
            description="Are you sure you want to proceed with this action?"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const openButton = canvas.getByTestId('dialog-vmodel-open')

await expect(openButton).toHaveTextContent('false')
await userEvent.click(openButton)

await waitFor(async () => {
  await expect(openButton).toHaveTextContent('true')
  const openDialog = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(openDialog).toBeInTheDocument()
  await expect(openDialog).toHaveTextContent('Confirmation')
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(document.querySelector('.design-component[data-status="open"], .design-component[data-status="flash"]')).toBeNull()
})
      `
    },
    {
      id: 'DialogAllSlots',
      name: {
        en: 'All slots demonstration',
        ru: 'Демонстрация всех слотов'
      },
      template: `
        <DesignComponent>
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
        </DesignComponent>
      `,
      play: `
const canvas = within(canvasElement)
await userEvent.click(canvas.getByTestId('dialog-slots-trigger'))

await waitFor(async () => {
  const openDialog = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
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
  await expect(document.querySelector('.design-component[data-status="open"], .design-component[data-status="flash"]')).toBeNull()
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor-level QA only — NEVER in documentation)
    // =========================================================================
    {
      id: 'DialogTestButtonsEventsAndImage',
      name: {
        en: 'Test: Custom buttons, clickOkAndClose=false, null buttons, imagePosition and ok/close events',
        ru: 'Тест: Кнопки, clickOkAndClose=false, скрытие кнопок null, imagePosition и события ok/close'
      },
      propsName: ['buttonOk', 'buttonClose', 'clickOkAndClose', 'image', 'imagePosition', 'icon'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
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
            </DesignComponent>

            <DesignComponent
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
            </DesignComponent>
          </div>
          <span data-testid="dialog-event-log">{{ eventLog.join(',') }}</span>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Verify clickOkAndClose=false emits ok without closing, then close dismisses', async () => {
  await userEvent.click(canvas.getByTestId('dialog-events-trigger'))
  await waitFor(async () => {
    const dialogElement = document.querySelector<HTMLElement>('.design-component--imagePosition--left[data-status="open"], .design-component--imagePosition--left[data-status="flash"]')
    await expect(dialogElement).toBeInTheDocument()
  })

  const okButton = [...document.querySelectorAll<HTMLButtonElement>('button')].find(button => button.textContent?.trim() === 'Confirm Stay')
  await expect(okButton).toBeInTheDocument()
  await userEvent.click(okButton!)

  await waitFor(async () => {
    await expect(canvasElement.querySelector('[data-testid="dialog-event-log"]')).toHaveTextContent('ok')
    await expect(document.querySelector('.design-component--imagePosition--left[data-status="open"], .design-component--imagePosition--left[data-status="flash"]')).toBeInTheDocument()
  })

  await new Promise(resolve => requestAnimationFrame(() => resolve(undefined)))

  const closeButton = [...document.querySelectorAll<HTMLButtonElement>('button')].find(button => button.textContent?.trim() === 'Dismiss Now')
  await expect(closeButton).toBeInTheDocument()
  await userEvent.click(closeButton!)

  await waitFor(async () => {
    const hidingElement = document.querySelector<HTMLElement>('.design-component--imagePosition--left[data-status="hide"]')
    if (hidingElement) {
      await fireEvent.transitionEnd(hidingElement)
    }
    await expect(canvasElement.querySelector('[data-testid="dialog-event-log"]')).toHaveTextContent('ok,close')
    await expect(document.querySelector('.design-component--imagePosition--left[data-status="open"], .design-component--imagePosition--left[data-status="flash"]')).toBeNull()
  })
})

await step('Verify buttonOk=null and buttonClose=null omit default action buttons', async () => {
  await userEvent.click(canvas.getByTestId('dialog-nobuttons-trigger'))
  await waitFor(async () => {
    const openDialog = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(openDialog).toBeInTheDocument()
    await expect(openDialog).toHaveTextContent('No Buttons Test')
  })
  await userEvent.keyboard('{Escape}')
  await waitFor(async () => {
    await expect(document.querySelector('.design-component[data-status="open"], .design-component[data-status="flash"]')).toBeNull()
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Dialog'} type={'dialog'}/>

<StorybookDescriptions componentName={'Dialog'} type={'states'}/>
<Canvas of={Component.DialogStates}/>

<StorybookDescriptions componentName={'Dialog'} type={'buttons'}/>

<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.DialogVModel}/>

<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Dialog'} type={'events'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,
    slots: `
<Canvas of={Component.DialogAllSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent embedded open label="Dialog Title" description="This is a description text." v-bind="args"/>
</div>
    `,
    description: `
Specialized modal component for standardized user interactions such as alerts, confirmations, and status messages. Extends the Modal component with a predefined layout for icons, titles, and action buttons.
Features built-in success/error states with automatic icon switching and content styling. Supports flexible positioning of images (top/left) and integrates with Window, Bars, and Actions for a consistent footer.
Controlled via v-model:open and various content props (label, description). Use for critical operations requiring user confirmation, operation success/fail alerts, or informative system messages.
    `
  }
}
