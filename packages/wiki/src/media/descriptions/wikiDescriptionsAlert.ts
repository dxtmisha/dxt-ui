import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Alert component properties
 *
 * Описания свойств компонента Alert
 */
export const wikiDescriptionsAlert: StorybookComponentsDescriptionItem = {
  name: 'Alert',
  description: {
    en: 'An alert component for displaying messages, notifications, or status updates',
    ru: 'Компонент оповещения для отображения сообщений, уведомлений или обновлений статуса'
  },
  possibilities: {
    en: [
      'customizable label and description text or slots',
      'supports actions and clickable action buttons',
      'supports inline links for contextual navigation',
      'closable status with optional close button',
      'customizable action button on the trailing side',
      'supports custom body and trailing slots',
      'leading and trailing icon integrations',
      'smooth hide transition effect'
    ],
    ru: [
      'настраиваемый текст или слоты для метки и описания',
      'поддержка действий и кликабельных кнопок действий',
      'поддержка встроенных ссылок для контекстной навигации',
      'статус закрытия с необязательной кнопкой закрытия',
      'настраиваемая кнопка действия на правой (хвостовой) стороне',
      'поддержка пользовательских слотов для тела и правой стороны',
      'интеграция с ведущими и хвостовыми иконками',
      'плавный эффект анимации при закрытии'
    ]
  },
  import: [],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  stories: [
    {
      id: 'AlertBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Alert Title" description="This is an alert description text."/>
          <DesignComponent label="Alert with Icon" description="Alert description text with an icon." icon="info"/>
          <DesignComponent
            label="Alert with actions and links"
            description="Detailed message with custom navigation links and action buttons below."
            icon="info"
            :links="[{ label: 'First link', href: '#' }, { label: 'Second link', href: '#' }]"
            :actions-list="[{ label: 'Accept', value: 'accept' }, { label: 'Decline', value: 'decline' }]"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Alert'} type={'alert'}/>
<Canvas of={Component.AlertBasic}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
<StorybookDescriptions componentName={'Event'} type={'link'}/>
<StorybookDescriptions componentName={'Alert'} type={'event.close'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    description: `
An alert banner/notification block designed to display critical context-sensitive user feedback.
Features modular components including a title/label, description block, custom action links (AlertLink), list action buttons, leading/trailing icons, and a dismiss/close button.
Fires a close event on user dismissal via closeButton.
`
  }
}
