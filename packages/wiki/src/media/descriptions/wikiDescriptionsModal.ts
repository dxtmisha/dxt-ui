import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Modal component properties
 *
 * Описания свойств компонента Modal
 */
export const wikiDescriptionsModal: StorybookComponentsDescriptionItem = {
  name: 'Modal',
  description: {
    en: 'Simplified wrapper over Window component for creating centered modal dialogs',
    ru: 'Упрощенная обертка над компонентом Window для создания центрированных модальных диалогов'
  },
  possibilities: {
    en: [
      'pre-configured modal window with centered positioning',
      'overlay backdrop with background blocking',
      'close on ESC key and click outside',
      'integration with scrollbar for long content',
      'slots for title, content and footer customization',
      'lifecycle events (preparation, opening, closing)',
      'close button with customizable icon',
      'programmatic control via v-model:open',
      'focus management and keyboard navigation',
      'responsive design with mobile optimization'
    ],
    ru: [
      'предварительно настроенное модальное окно с центрированием',
      'оверлей с блокировкой фона',
      'закрытие по ESC и клику вне области',
      'интеграция со скроллбаром для длинного контента',
      'слоты для настройки заголовка, содержимого и подвала',
      'события жизненного цикла (preparation, opening, closing)',
      'кнопка закрытия с настраиваемой иконкой',
      'программное управление через v-model:open',
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
          <p>Modal is essentially Window with <code>adaptive="modal"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in Modal component.</p>
        </template>
      </DesignComponent>
    `,
  stories: [
    {
      id: 'ModalVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        open: ref(false)
      }
      `,
      template: `
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Modal'} type={'modal'}/>
<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.ModalVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `
  }
}
