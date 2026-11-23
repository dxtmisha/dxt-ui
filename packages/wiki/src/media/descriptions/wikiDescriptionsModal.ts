import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Modal component properties
 *
 * Описания свойств компонента Modal
 */
export const wikiDescriptionsModal: StorybookComponentsDescriptionItem = {
  name: 'Modal',
  description: {
    en: 'Simplified wrapper over a Window component for creating centered modal dialogs with integrated Bars and Actions.',
    ru: 'Упрощенная обертка над компонентом Window для создания центрированных модальных диалогов со встроенными Bars и Actions.'
  },
  possibilities: {
    en: [
      'pre-configured modal window with centered positioning (adaptive="modal")',
      'overlay backdrop with background blocking and body scroll lock',
      'close on the ESC key and outside click with configurable persistent mode via windowAttrs',
      'integration with scrollbar for long scrollable content',
      'slots for control, title, header, default, and footer customization',
      'support for banner image with top and left imagePosition layouts',
      'integrated Bars header and Actions footer with automatic ARIA linkage',
      'lifecycle and interaction events (window, bars, barsLite, barsBack, actions, actionsLite)',
      'programmatic control via v-model:open, v-model:modelOpen, and exposed methods',
      'focus management, keyboard navigation, and disableFocusReturn control'
    ],
    ru: [
      'предварительно настроенное модальное окно с центрированием (adaptive="modal")',
      'оверлей с блокировкой фона и прокрутки страницы',
      'закрытие по ESC и клику вне области с поддержкой persistent через windowAttrs',
      'интеграция со скроллбаром для длинного прокручиваемого контента',
      'слоты для настройки control, title, header, default и footer',
      'поддержка баннера изображения с позиционированием сверху и слева (imagePosition)',
      'интегрированные шапка Bars и футер Actions с автоматической связью ARIA',
      'события жизненного цикла и взаимодействия (window, bars, barsLite, barsBack, actions, actionsLite)',
      'программное управление через v-model:open, v-model:modelOpen и методы expose',
      'управление фокусом, клавиатурная навигация и настройка disableFocusReturn'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { image1, image2 } from \'@dxtmisha/wiki/media\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { ModalExpose as ModalExposeType } from \'@dxtmisha/constructor/Modal\'',
    'import type { WindowEmitOptions } from \'@dxtmisha/constructor/Window\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <template #control="{ binds }">
          <button class="wiki-storybook-button" v-bind="binds">Open Modal</button>
        </template>

        <template #default>
          <h4>Modal Component Overview</h4>
          <p>Modal is a specialized wrapper around the Window component with preset adaptive mode set to modal. It provides a simplified API for creating centered modal dialogs with integrated Bars and Actions.</p>

          <p>The component automatically handles common modal dialog scenarios including confirmations, forms, alerts, and content previews. It manages focus, scroll behavior, and keyboard navigation across devices.</p>

          <h4>Relationship with Window</h4>
          <p>Modal is built on Window with <code>adaptive="modal"</code> preset, simplifying usage for standard dialog scenarios while allowing full customization via <code>windowAttrs</code>.</p>
        </template>
      </DesignComponent>
    `,
  play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
await expect(triggerButton).toBeInTheDocument()

await userEvent.click(triggerButton!)
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(modalElement).toBeInTheDocument()
  await expect(modalElement).toHaveTextContent('Modal Component Overview')
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(modalElement).toBeNull()
})
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'ModalVModel',
      name: {
        en: 'Two-way binding (v-model:open & v-model:modelOpen)',
        ru: 'Двусторонняя привязка (v-model:open и v-model:modelOpen)'
      },
      propsName: ['open', 'modelOpen'],
      setup: `
      const openState = ref(false)
      const modelOpenState = ref(false)
      return { openState, modelOpenState }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button class="wiki-storybook-button" data-testid="open-vmodel" @click="openState = true">
              Open via v-model:open ({{ openState }})
            </button>
            <button class="wiki-storybook-button" data-testid="open-model-open" @click="modelOpenState = true">
              Open via v-model:modelOpen ({{ modelOpenState }})
            </button>
          </div>

          <DesignComponent v-model:open="openState">
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Controlled Modal (open)</h3>
              </div>
            </template>
            <div class="wiki-storybook-item--padding">
              <p>This modal is controlled via <code>v-model:open</code> binding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="wiki-storybook-flex wiki-storybook-item--padding">
                <button :class="classesWindow.close" class="wiki-storybook-button" data-testid="close-vmodel">Close open</button>
              </div>
            </template>
          </DesignComponent>

          <DesignComponent v-model:modelOpen="modelOpenState">
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Controlled Modal (modelOpen)</h3>
              </div>
            </template>
            <div class="wiki-storybook-item--padding">
              <p>This modal is controlled via <code>v-model:modelOpen</code> binding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="wiki-storybook-flex wiki-storybook-item--padding">
                <button :class="classesWindow.close" class="wiki-storybook-button" data-testid="close-model-open">Close modelOpen</button>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const openButton = canvas.getByTestId('open-vmodel')
const modelOpenButton = canvas.getByTestId('open-model-open')

await step('Open and close via v-model:open', async () => {
  await expect(openButton).toHaveTextContent('false')
  await userEvent.click(openButton)
  await waitFor(async () => {
    await expect(openButton).toHaveTextContent('true')
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeInTheDocument()
    await expect(document.querySelector('[data-testid="close-vmodel"]')).toBeInTheDocument()
  })
  await new Promise(resolve => requestAnimationFrame(() => resolve(undefined)))

  const closeButton = document.querySelector<HTMLButtonElement>('[data-testid="close-vmodel"]')
  await userEvent.click(closeButton!)
  await waitFor(async () => {
    const hidingElement = document.querySelector<HTMLElement>('.design-component[data-status="hide"]')
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
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeInTheDocument()
    await expect(document.querySelector('[data-testid="close-model-open"]')).toBeInTheDocument()
  })
  await new Promise(resolve => requestAnimationFrame(() => resolve(undefined)))

  const closeButton = document.querySelector<HTMLButtonElement>('[data-testid="close-model-open"]')
  await userEvent.click(closeButton!)
  await waitFor(async () => {
    const hidingElement = document.querySelector<HTMLElement>('.design-component[data-status="hide"]')
    if (hidingElement) {
      await fireEvent.transitionEnd(hidingElement)
    }
    await expect(modelOpenButton).toHaveTextContent('false')
  })
})
      `
    },
    {
      id: 'ModalAllSlots',
      name: {
        en: 'All slots demonstration',
        ru: 'Демонстрация всех слотов'
      },
      template: `
        <DesignComponent>
          <template #control="{ binds }">
            <button class="wiki-storybook-button" data-testid="slots-trigger" v-bind="binds">Open Modal with All Slots</button>
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
            <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text" data-testid="slots-close">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const canvas = within(canvasElement)
const triggerButton = canvas.getByTestId('slots-trigger')
await expect(triggerButton).toBeInTheDocument()

await userEvent.click(triggerButton)
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(modalElement).toBeInTheDocument()
  await expect(modalElement?.querySelector('.design-component__title')).toHaveTextContent('Title slot content')
  await expect(modalElement?.querySelector('.design-component__header')).toHaveTextContent('Header slot content')
  await expect(modalElement?.querySelector('.design-component__body')).toHaveTextContent('Default body slot content')
  await expect(modalElement?.querySelector('.design-component__footer')).toHaveTextContent('Confirm')
})
await new Promise(resolve => requestAnimationFrame(() => resolve(undefined)))

const closeButton = document.querySelector<HTMLButtonElement>('[data-testid="slots-close"]')
await userEvent.click(closeButton!)
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(modalElement).toBeNull()
})
      `
    },
    {
      id: 'ModalBarsAndActions',
      name: {
        en: 'Integrated Bars and Actions',
        ru: 'Интеграция Bars и Actions'
      },
      propsName: ['barsLabel', 'barsDescription', 'barsBackHide', 'barsList', 'actionsList', 'actionsSecondary'],
      setup: `
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
      `,
      template: `
        <DesignComponent
          barsLabel="Dialog Heading"
          barsDescription="Accessible modal description"
          :barsBackHide="false"
          :barsList="barsList"
          :actionsList="actionsList"
          :actionsSecondary="actionsSecondary"
        >
          <template #control="{ binds }">
            <button class="wiki-storybook-button" data-testid="bars-actions-trigger" v-bind="binds">Open Bars & Actions Modal</button>
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <p>Modal content paired with integrated Bars header and Actions footer.</p>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const canvas = within(canvasElement)
const triggerButton = canvas.getByTestId('bars-actions-trigger')
await userEvent.click(triggerButton)

await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(modalElement).toBeInTheDocument()

  const labelledById = modalElement?.getAttribute('aria-labelledby')
  const describedById = modalElement?.getAttribute('aria-describedby')
  await expect(labelledById).toBeTruthy()
  await expect(describedById).toBeTruthy()
  await expect(document.getElementById(labelledById!)).toHaveTextContent('Dialog Heading')
  await expect(document.getElementById(describedById!)).toHaveTextContent('Accessible modal description')
  await expect(modalElement).toHaveTextContent('Confirm')
  await expect(modalElement).toHaveTextContent('Reset')
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(modalElement).toBeNull()
})
      `
    },
    {
      id: 'ModalImage',
      name: {
        en: 'Image banner positions',
        ru: 'Позиции баннера изображения'
      },
      propsName: ['image', 'imagePosition'],
      setup: `
      return { image1, image2 }
      `,
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <DesignComponent
            :image="image1"
            imagePosition="top"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="image-top-trigger" v-bind="binds">Top Image Modal</button>
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
          </DesignComponent>

          <DesignComponent
            :image="image2"
            imagePosition="left"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="image-left-trigger" v-bind="binds">Left Image Modal</button>
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
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Open top image position modal', async () => {
  await userEvent.click(canvas.getByTestId('image-top-trigger'))
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component--imagePosition--top[data-status="open"], .design-component--imagePosition--top[data-status="flash"]')
    await expect(modalElement).toBeInTheDocument()
  })
  await userEvent.keyboard('{Escape}')
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeNull()
  })
})

await step('Open left image position modal', async () => {
  await userEvent.click(canvas.getByTestId('image-left-trigger'))
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component--imagePosition--left[data-status="open"], .design-component--imagePosition--left[data-status="flash"]')
    await expect(modalElement).toBeInTheDocument()
  })
  await userEvent.keyboard('{Escape}')
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeNull()
  })
})
      `
    },
    {
      id: 'ModalExpose',
      name: {
        en: 'Programmatic control via expose',
        ru: 'Программное управление через expose'
      },
      setup: `
      const modalRef = ref<ModalExposeType | null>(null)
      const statusText = ref('closed')
      const syncStatus = () => {
        statusText.value = modalRef.value?.getOpen() ? 'open' : 'closed'
      }
      const onOpen = async () => {
        await modalRef.value?.toOpen()
        syncStatus()
      }
      const onClose = async () => {
        await modalRef.value?.toClose()
        syncStatus()
      }
      const onToggle = async () => {
        await modalRef.value?.toggle()
        syncStatus()
      }
      const onSetOpen = async () => {
        await modalRef.value?.setOpen(true)
        syncStatus()
      }
      return { modalRef, statusText, onOpen, onClose, onToggle, onSetOpen }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button class="wiki-storybook-button" data-testid="expose-open" @click="onOpen">toOpen()</button>
            <button class="wiki-storybook-button" data-testid="expose-close" @click="onClose">toClose()</button>
            <button class="wiki-storybook-button" data-testid="expose-toggle" @click="onToggle">toggle()</button>
            <button class="wiki-storybook-button" data-testid="expose-set-open" @click="onSetOpen">setOpen(true)</button>
          </div>
          <div class="wiki-storybook-card" data-testid="expose-status">Status: {{ statusText }}</div>

          <DesignComponent ref="modalRef">
            <template #title>
              <div class="wiki-storybook-item--padding">
                <h3>Expose Controlled Modal</h3>
              </div>
            </template>
            <div class="wiki-storybook-item--padding">
              <p>This modal is opened and closed using exposed methods on its template reference.</p>
            </div>
            <template #footer>
              <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
                <button class="wiki-storybook-button" data-testid="expose-close-inside" @click="onClose">Close via toClose()</button>
                <button class="wiki-storybook-button" data-testid="expose-toggle-inside" @click="onToggle">Toggle via toggle()</button>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Open via toOpen() and close via toClose()', async () => {
  await userEvent.click(canvas.getByTestId('expose-open'))
  await waitFor(async () => {
    await expect(canvas.getByTestId('expose-status')).toHaveTextContent('Status: open')
    await expect(document.querySelector('[data-testid="expose-close-inside"]')).toBeInTheDocument()
  })

  const insideCloseButton = document.querySelector<HTMLButtonElement>('[data-testid="expose-close-inside"]')
  await userEvent.click(insideCloseButton!)
  await waitFor(async () => {
    const hidingElement = document.querySelector<HTMLElement>('.design-component[data-status="hide"]')
    if (hidingElement) {
      await fireEvent.transitionEnd(hidingElement)
    }
    const openModalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(openModalElement).toBeNull()
  })
})

await step('Toggle open and closed via toggle()', async () => {
  await userEvent.click(canvas.getByTestId('expose-toggle'))
  await waitFor(async () => {
    await expect(canvas.getByTestId('expose-status')).toHaveTextContent('Status: open')
    await expect(document.querySelector('[data-testid="expose-toggle-inside"]')).toBeInTheDocument()
  })

  const insideToggleButton = document.querySelector<HTMLButtonElement>('[data-testid="expose-toggle-inside"]')
  await userEvent.click(insideToggleButton!)
  await waitFor(async () => {
    const hidingElement = document.querySelector<HTMLElement>('.design-component[data-status="hide"]')
    if (hidingElement) {
      await fireEvent.transitionEnd(hidingElement)
    }
    const openModalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(openModalElement).toBeNull()
  })
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA Only - Prefixed with ModalTest)
    // =========================================================================
    {
      id: 'ModalTestWindowOptions',
      name: {
        en: 'Test: Window options (disabled, autoClose, disableFocusReturn, windowAttrs)',
        ru: 'Тест: Опции окна (disabled, autoClose, disableFocusReturn, windowAttrs)'
      },
      propsName: ['disabled', 'autoClose', 'disableFocusReturn', 'windowAttrs', 'barsBackHide'],
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <DesignComponent :windowAttrs="{ persistent: true }">
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="test-persistent" v-bind="binds">Persistent</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Persistent modal content</div>
            </template>
            <template #footer="{ classesWindow }">
              <div class="wiki-storybook-item--padding">
                <button :class="classesWindow.close" class="wiki-storybook-button" data-testid="test-persistent-close">Explicit Close</button>
              </div>
            </template>
          </DesignComponent>

          <DesignComponent disabled>
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="test-disabled" disabled v-bind="binds">Disabled</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Disabled modal content</div>
            </template>
          </DesignComponent>

          <DesignComponent autoClose disableFocusReturn :barsBackHide="true">
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="test-autoclose" v-bind="binds">Auto Close</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding" data-testid="test-autoclose-body">Click body to auto-close</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Verify disabled trigger is disabled', async () => {
  await expect(canvas.getByTestId('test-disabled')).toBeDisabled()
})

await step('Verify persistent modal ignores Escape and closes explicitly', async () => {
  await userEvent.click(canvas.getByTestId('test-persistent'))
  await waitFor(async () => {
    await expect(document.querySelector('[data-testid="test-persistent-close"]')).toBeInTheDocument()
  })

  await userEvent.keyboard('{Escape}')
  await expect(document.querySelector('[data-testid="test-persistent-close"]')).toBeInTheDocument()

  const closeButton = document.querySelector<HTMLButtonElement>('[data-testid="test-persistent-close"]')
  await userEvent.click(closeButton!)
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeNull()
  })
})

await step('Verify autoClose modal closes on body click', async () => {
  await userEvent.click(canvas.getByTestId('test-autoclose'))
  await waitFor(async () => {
    await expect(document.querySelector('[data-testid="test-autoclose-body"]')).toBeInTheDocument()
  })

  const bodyElement = document.querySelector<HTMLElement>('[data-testid="test-autoclose-body"]')
  await userEvent.click(bodyElement!)
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeNull()
  })
})
      `
    },
    {
      id: 'ModalTestBarsAndActionsStates',
      name: {
        en: 'Test: Bars/Actions hide, attrs, and numeric 0 boundary',
        ru: 'Тест: Скрытие Bars/Actions, attrs и граничный числовой 0'
      },
      propsName: ['barsHide', 'barsAttrs', 'actionsHide', 'actionsAttrs', 'barsLabel', 'actionsList'],
      setup: `
      const zeroActions = [
        { label: 0, value: 0 },
        { label: 'OK', value: 'ok' }
      ]
      return { zeroActions }
      `,
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <DesignComponent
            :barsLabel="0"
            :actionsList="zeroActions"
            :barsAttrs="{ 'data-testid': 'custom-bars-attr' }"
            :actionsAttrs="{ 'data-testid': 'custom-actions-attr' }"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="test-zero-trigger" v-bind="binds">Numeric 0 & Attrs</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Numeric 0 label and actions test</div>
            </template>
          </DesignComponent>

          <DesignComponent
            barsLabel="Hidden Header"
            :barsHide="true"
            :actionsList="zeroActions"
            :actionsHide="true"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="test-hidden-trigger" v-bind="binds">Hidden Bars & Actions</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Bars and actions hidden</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Verify numeric 0 and barsAttrs/actionsAttrs', async () => {
  await userEvent.click(canvas.getByTestId('test-zero-trigger'))
  await waitFor(async () => {
    const barsElement = document.querySelector<HTMLElement>('[data-testid="custom-bars-attr"]')
    const actionsElement = document.querySelector<HTMLElement>('[data-testid="custom-actions-attr"]')
    await expect(barsElement).toBeInTheDocument()
    await expect(barsElement).toHaveTextContent('0')
    await expect(actionsElement).toBeInTheDocument()
    await expect(actionsElement).toHaveTextContent('0')
    await expect(actionsElement).toHaveTextContent('OK')
  })

  await userEvent.keyboard('{Escape}')
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeNull()
  })
})

await step('Verify barsHide and actionsHide omit Bars and Actions', async () => {
  await userEvent.click(canvas.getByTestId('test-hidden-trigger'))
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeInTheDocument()
    await expect(modalElement).not.toHaveTextContent('Hidden Header')
    await expect(modalElement).not.toHaveTextContent('OK')
  })

  await userEvent.keyboard('{Escape}')
  await waitFor(async () => {
    const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
    await expect(modalElement).toBeNull()
  })
})
      `
    },
    {
      id: 'ModalTestImagePositions',
      name: {
        en: 'Test: Image position variants and imageAttrs',
        ru: 'Тест: Варианты позиции изображения и imageAttrs'
      },
      propsName: ['image', 'imagePosition', 'imageAttrs'],
      setup: `
      return { image1, image2 }
      `,
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <DesignComponent
            :image="image1"
            imagePosition="top"
            :imageAttrs="{ alt: 'Top banner image' }"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="test-img-top" v-bind="binds">Image Top</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Top image content</div>
            </template>
          </DesignComponent>

          <DesignComponent
            :image="image2"
            imagePosition="left"
            :imageAttrs="{ alt: 'Left banner image' }"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="test-img-left" v-bind="binds">Image Left</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Left image content</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await userEvent.click(canvas.getByTestId('test-img-top'))
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component--imagePosition--top[data-status="open"], .design-component--imagePosition--top[data-status="flash"]')
  await expect(modalElement).toBeInTheDocument()
})
await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(modalElement).toBeNull()
})

await userEvent.click(canvas.getByTestId('test-img-left'))
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component--imagePosition--left[data-status="open"], .design-component--imagePosition--left[data-status="flash"]')
  await expect(modalElement).toBeInTheDocument()
})
await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(modalElement).toBeNull()
})
      `
    },
    {
      id: 'ModalTestEvents',
      name: {
        en: 'Test: Window, Bars, Actions and model events',
        ru: 'Тест: События окна, Bars, Actions и моделей'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model:open="isOpen"
            barsLabel="Events Modal"
            :barsList="barsList"
            :actionsList="actionsList"
            @window="onWindowEvent"
            @actions="onActionsEvent"
            @actionsLite="onActionsLiteEvent"
            @bars="onBarsEvent"
            @barsLite="onBarsLiteEvent"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" data-testid="test-events-trigger" v-bind="binds">Trigger Events</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Event Tracker Modal</div>
            </template>
          </DesignComponent>
          <span class="wiki-event-indicator" data-testid="test-events-log">open:{{ isOpen }}|{{ eventLog.join(',') }}</span>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await userEvent.click(canvas.getByTestId('test-events-trigger'))
await waitFor(async () => {
  await expect(canvas.getByTestId('test-events-log')).toHaveTextContent('open:true')
  await expect(canvas.getByTestId('test-events-log')).toHaveTextContent('window:true')
})

const modalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
const buttons = Array.from(modalElement?.querySelectorAll('button') ?? [])
const submitButton = buttons.find(button => button.textContent?.trim() === 'Submit')
const helpButton = buttons.find(button => button.textContent?.trim() === 'Help')

await userEvent.click(submitButton!)
await userEvent.click(helpButton!)

await waitFor(async () => {
  const logElement = canvas.getByTestId('test-events-log')
  await expect(logElement).toHaveTextContent('actions:submit')
  await expect(logElement).toHaveTextContent('actionsLite:submit')
  await expect(logElement).toHaveTextContent('bars:help')
  await expect(logElement).toHaveTextContent('barsLite:help')
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  const openModalElement = document.querySelector<HTMLElement>('.design-component[data-status="open"], .design-component[data-status="flash"]')
  await expect(openModalElement).toBeNull()
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Modal'} type={'modal'}/>
<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.ModalVModel}/>
<Canvas of={Component.ModalBarsAndActions}/>
<Canvas of={Component.ModalImage}/>

<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
    `,
    expose: `
<Canvas of={Component.ModalExpose}/>
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<StorybookDescriptions componentName={'Window'} type={'getWindowElement'}/>
    `,
    slots: `
<Canvas of={Component.ModalAllSlots}/>
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent open v-bind="args">
    <template #default>
      <p>This is a modal dialog.</p>
    </template>
  </DesignComponent>
</div>
    `,
    description: `
Simplified wrapper over the Window component pre-configured for centered modal dialogs. Provides a high-level API for typical interaction patterns like confirmation prompts, info alerts, and data entry forms.
Features automatic overlay management, background interaction blocking, integrated Bars header and Actions footer, and body scroll locking. Includes built-in focus trapping, Esc key dismissal, and responsive layout optimization (adaptive="modal").
Controlled via v-model:open, v-model:modelOpen, or exposed methods, and supports #control, #title, #header, #default, and #footer slots.
    `
  }
}
