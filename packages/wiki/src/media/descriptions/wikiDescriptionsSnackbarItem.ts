import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SnackbarItem component properties
 *
 * Описания свойств компонента SnackbarItem
 */
export const wikiDescriptionsSnackbarItem: StorybookComponentsDescriptionItem = {
  name: 'SnackbarItem',
  description: {
    en: 'Individual notification message element used within a Snackbar.',
    ru: 'Элемент индивидуального уведомления, используемый внутри Snackbar.'
  },
  possibilities: {
    en: [
      'support for label and detailed description text',
      'leading and trailing icons support',
      'action buttons support',
      'custom HTML or component rendering',
      'built-in close button with customizable icon',
      'accessible ARIA status by default'
    ],
    ru: [
      'поддержка заголовка и подробного текста описания',
      'поддержка начальных и конечных иконок',
      'поддержка кнопок действий',
      'рендер произвольного HTML или компонентов',
      'встроенная кнопка закрытия с настраиваемой иконкой',
      'доступный ARIA статус по умолчанию'
    ]
  },
  import: [],
  stories: [
    {
      id: 'SnackbarItemBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-group">
          <DesignComponent
            label="Detailed notification"
            description="Description text provides more context for the user."
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="Success message"
            icon="check_circle"
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="File deleted"
            icon="delete"
            button="Undo"
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="Connection lost"
            icon="wifi_off"
            :actions-list="[{ label: 'Retry', primary: true }]"
            class="wiki-storybook-item--squared--lg"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SnackbarItem'} type={'snackbarItem'}/>
<Canvas of={Component.SnackbarItemBasic}/>

<StorybookDescriptions componentName={'SnackbarItem'} type={'component'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'html'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'role'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'eventClose'}/>
    `,
    expose: '',
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
`
  },
  ai: {
    description: `
Visual representation element for a single notification message, typically orchestrated by the Snackbar component. Designed for concise informational alerts, success messages, or quick-action prompts.
Features a flexible internal structure with support for labels, detailed descriptions, and material-symbol icons (leading/trailing). Includes integrated action button support, a mandatory close button, and support for rendering custom HTML or Vue components as message bodies.
Controlled via simple content props or an actions-list array for complex button configurations. Use as the base message unit for all system feedback, ensuring high visibility and accessibility through automatic ARIA status role implementation.
    `
  }
}
