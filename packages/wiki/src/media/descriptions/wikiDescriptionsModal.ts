import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Modal component properties
 *
 * Описания свойств компонента Modal
 */
export const wikiDescriptionsModal: StorybookComponentsDescriptionItem = {
  name: 'Modal',
  description: {
    en: 'Simplified wrapper over a Window component for creating centered modal dialogs',
    ru: 'Упрощенная обертка над компонентом Window для создания центрированных модальных диалогов'
  },
  possibilities: {
    en: [
      'pre-configured modal window with centered positioning',
      'overlay backdrop with background blocking',
      'close on the ESC key and click outside',
      'integration with scrollbar for long content',
      'slots for title, header, default and footer customization',
      'support for image banner with top and left layout positions',
      'configurable action buttons and header bars integration',
      'lifecycle events (window, bars, actions)',
      'close button with customizable icon and barsBackHide control',
      'programmatic control via v-model:open and exposed methods',
      'focus management and keyboard navigation',
      'responsive design with mobile optimization'
    ],
    ru: [
      'предварительно настроенное модальное окно с центрированием',
      'оверлей с блокировкой фона',
      'закрытие по ESC и клику вне области',
      'интеграция со скроллбаром для длинного контента',
      'слоты для настройки title, header, default и footer',
      'поддержка баннера с позиционированием сверху и слева',
      'интеграция кнопок действий и панелей заголовка',
      'события жизненного цикла (window, bars, actions)',
      'кнопка закрытия с настраиваемой иконкой и управление barsBackHide',
      'программное управление через v-model:open и методы expose',
      'управление фокусом и клавиатурная навигация',
      'адаптивный дизайн с оптимизацией для мобильных'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
      <DesignComponent v-bind="args">
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
      </DesignComponent>
    `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'ModalVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      propsName: ['open'],
      setup: `
      const open = ref(false)
      return { open }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <DesignComponent v-model:open="open">
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
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const openButton = canvas.getByText(/Open via v-model/)
await expect(openButton).toBeInTheDocument()
      `
    },
    {
      id: 'ModalAllSlots',
      name: {
        en: 'All slots demonstration',
        ru: 'Демонстрация всех слотов'
      },
      propsName: ['width'],
      template: `
        <DesignComponent width="md">
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
        </DesignComponent>
      `,
      play: `
const canvas = within(canvasElement)
const trigger = canvas.getByText('Open Modal with All Slots')
await expect(trigger).toBeInTheDocument()
      `
    },
    {
      id: 'ModalImage',
      name: {
        en: 'Image banner positions',
        ru: 'Позиции баннера изображения'
      },
      propsName: ['image', 'imagePosition', 'width'],
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <DesignComponent
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
          </DesignComponent>

          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const topTrigger = canvas.getByText('Top Image Modal')
const leftTrigger = canvas.getByText('Left Image Modal')
await expect(topTrigger).toBeInTheDocument()
await expect(leftTrigger).toBeInTheDocument()
      `
    },
    {
      id: 'ModalExpose',
      name: {
        en: 'Programmatic control via expose',
        ru: 'Программное управление через expose'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button class="wiki-storybook-button" @click="onOpen">toOpen()</button>
            <button class="wiki-storybook-button" @click="onClose">toClose()</button>
            <button class="wiki-storybook-button" @click="onToggle">toggle()</button>
          </div>

          <DesignComponent ref="modalRef">
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
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('toOpen()')).toBeInTheDocument()
await expect(canvas.getByText('toClose()')).toBeInTheDocument()
await expect(canvas.getByText('toggle()')).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA Only - Prefixed with ModalTest)
    // =========================================================================
    {
      id: 'ModalTestWidths',
      name: {
        en: 'Test: Predefined widths',
        ru: 'Тест: Предустановленная ширина'
      },
      propsName: ['width'],
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <DesignComponent width="sm">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">SM</button>
            </template>
          </DesignComponent>
          <DesignComponent width="md">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">MD</button>
            </template>
          </DesignComponent>
          <DesignComponent width="lg">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">LG</button>
            </template>
          </DesignComponent>
          <DesignComponent width="xl">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">XL</button>
            </template>
          </DesignComponent>
          <DesignComponent width="auto">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Auto</button>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)
await expect(items[0]).toHaveClass('design-component--width--sm')
await expect(items[1]).toHaveClass('design-component--width--md')
await expect(items[2]).toHaveClass('design-component--width--lg')
await expect(items[3]).toHaveClass('design-component--width--xl')
await expect(items[4]).toHaveClass('design-component--width--auto')
      `
    },
    {
      id: 'ModalTestImagePositions',
      name: {
        en: 'Test: Image position variants',
        ru: 'Тест: Варианты позиции изображения'
      },
      propsName: ['imagePosition'],
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <DesignComponent image="test.jpg" imagePosition="top">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Image Top</button>
            </template>
          </DesignComponent>
          <DesignComponent image="test.jpg" imagePosition="left">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Image Left</button>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
await expect(items[0]).toHaveClass('design-component--imagePosition--top')
await expect(items[1]).toHaveClass('design-component--imagePosition--left')
      `
    },
    {
      id: 'ModalTestPersistent',
      name: {
        en: 'Test: Persistent and close button behaviors',
        ru: 'Тест: Постоянное состояние и кнопка закрытия'
      },
      propsName: ['persistent', 'barsBackHide'],
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <DesignComponent :persistent="true">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Persistent</button>
            </template>
          </DesignComponent>
          <DesignComponent :barsBackHide="true">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Hide Close Button</button>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Persistent')).toBeInTheDocument()
await expect(canvas.getByText('Hide Close Button')).toBeInTheDocument()
      `
    },
    {
      id: 'ModalTestBarsAndActions',
      name: {
        en: 'Test: Bars and actions integration',
        ru: 'Тест: Интеграция панелей и действий'
      },
      propsName: ['actionsList', 'barsList', 'barsBackHide'],
      setup: `
      const actionsList = [
        { label: 'Action 1', value: 'a1' },
        { label: 'Action 2', value: 'a2' }
      ]
      const barsList = [
        { label: 'Bar 1', value: 'b1' }
      ]
      return { actionsList, barsList }
      `,
      template: `
        <DesignComponent
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
        </DesignComponent>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Open Bars & Actions Modal')).toBeInTheDocument()
      `
    },
    {
      id: 'ModalTestEvents',
      name: {
        en: 'Test: Window and lifecycle events',
        ru: 'Тест: События окна и жизненного цикла'
      },
      setup: `
      const lastEvent = ref('')
      const onWindowEvent = () => {
        lastEvent.value = 'window'
      }
      return { lastEvent, onWindowEvent }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent @window="onWindowEvent">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Trigger Events</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Event Tracker Modal</div>
            </template>
          </DesignComponent>
          <span class="wiki-event-indicator">{{ lastEvent }}</span>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Trigger Events')).toBeInTheDocument()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Modal'} type={'modal'}/>
<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.ModalVModel}/>

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
  <Modal embedded open v-bind="args">
    <template #default>
      <p>This is a modal dialog.</p>
    </template>
  </Modal>
</div>
    `,
    description: `
Simplified wrapper over the Window component pre-configured for centered modal dialogs. Provides a high-level API for typical interaction patterns like confirmation prompts, info alerts, and data entry forms.
Features automatic overlay management, background interaction blocking, and body scroll locking. Includes built-in focus trapping, Esc key dismissal, and responsive layout optimization (adaptive="modal") for consistent mobile and desktop UX.
Controlled via the v-model:open prop and utilizes #control, #title, and #footer slots for modular layout. Use for critical user notifications, blocking confirmation steps, or focused sub-tasks requiring immediate attention.
    `
  }
}
