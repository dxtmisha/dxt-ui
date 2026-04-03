import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Snackbar component properties
 *
 * Описания свойств компонента Snackbar
 */
export const wikiDescriptionsSnackbar: StorybookComponentsDescriptionItem = {
  name: 'Snackbar',
  description: {
    en: 'An orchestration component for managing and displaying a queue of temporary notification messages (Snackbars).',
    ru: 'Компонент-оркестратор для управления и отображения очереди временных уведомлений (Snackbars).'
  },
  possibilities: {
    en: [
      'automatic lifecycle management for notifications',
      'flexible anchor positioning (top/bottom, left/right/block)',
      'priority-based visual separation of messages',
      'configurable auto-hide timeout',
      'teleport-based rendering to ensure overlay on top of all elements',
      'full programmatic control over the notification queue'
    ],
    ru: [
      'автоматическое управление жизненным циклом уведомлений',
      'гибкое позиционирование (сверху/снизу, слева/справа/блоком)',
      'визуальное разделение сообщений по приоритету',
      'настраиваемое время автоматического скрытия',
      'рендер через Teleport для гарантированного отображения поверх всех элементов',
      'полный программный контроль над очередью уведомлений'
    ]
  },
  import: [],
  render: `
    <div class="wiki-storybook-flex-column">
      <div class="wiki-storybook-flex">
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 3000 })"
        >
          Success Message
        </button>
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true })"
        >
          System Error
        </button>
        <button
          class="wiki-storybook-button wiki-storybook-button--warning"
          @click="() => $refs.snackbar.clear()"
        >
          Clear Queue
        </button>
      </div>
      <DesignComponent ref="snackbar" v-bind="args" />
    </div>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Snackbar'} type={'snackbar'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'add'}/>

<StorybookDescriptions componentName={'Snackbar'} type={'adaptation'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'position'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Snackbar'} type={'event.show'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'event.hide'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Snackbar'} type={'expose.isItem'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.add'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.remove'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.clear'}/>
    `,
    slots: ``
  },
  ai: {
    description: `
Centralized notification management system (orchestrator) that coordinates the lifecycle and queue of temporary messages. Ideal for global system alerts, user feedback, and asynchronous status updates across the application.
Features an intelligent queue manager with support for priority containers, automatic lifecycle hooks (show/hide), and flexible screen anchoring (vertical/horizontal positioning). Includes programmatic control over message stack, custom auto-hide delays, and teleport-based rendering to ensure overlay priority over all content.
Controlled via an exposed API (add, remove, clear) and configurable global settings like delay and origin. Place a single instance at the root of the application (e.g., App.vue) to manage consistent notification patterns throughout the entire user session.
    `
  }
}
