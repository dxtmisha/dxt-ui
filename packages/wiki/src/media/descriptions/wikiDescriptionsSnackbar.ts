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
  stories: [
    {
      id: 'SnackbarBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent ref="snackbar" />
          <DesignButton
            label="Push Message"
            primary
            @click="() => $refs.snackbar.add({ data: { label: 'Action completed successfully' } })"
          />
        </div>
      `
    }
  ],
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
<StorybookDescriptions componentName={'Snackbar'} type={'isItem'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'add'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'remove'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'clear'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
`
  },
  ai: {
    description: `
Snackbar is a centralized management system for temporary notifications. It renders \`SnackbarItem\` components and controls their lifecycle through a data manager.

**Key API (Exposed):**
- \`add(item: SnackbarValue)\`: Adds a new notification to the queue.
  - \`SnackbarValue.data\`: Props for the \`SnackbarItem\` (label, description, etc.).
  - \`SnackbarValue.highPriority\`: If true, renders the item in a separate priority container.
  - \`SnackbarValue.delay\`: Individual delay for this particular message.
- \`remove(value: string)\`: Manually removes a notification by its unique value/id.
- \`clear()\`: Instantly removes all active notifications.
- \`isItem\`: A ComputedRef<boolean> indicating if any notifications are currently visible.

**Configuration:**
- \`vertical\`: \`top\` | \`bottom\` (Anchor point vertical).
- \`horizontal\`: \`right\` | \`left\` | \`block\` (Anchor point horizontal).
- \`delay\`: Global auto-hide threshold (default: 8000ms).
- \`origin\`: Entrance animation direction.

**Usage:**
Place a single \`Snackbar\` component in the layout (often in the root App component) and interact with it via a template ref or a shared state manager.
`
  }
}
