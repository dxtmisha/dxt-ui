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
SnackbarItem is the visual representation of a single notification.
It is typically rendered inside a Snackbar component.

**Key Features:**
1. **Content:**
   - \`label\`: Primary message text.
   - \`description\`: Secondary, detailed message text.
   - \`icon\`: Material symbol name for the leading icon.
   - \`iconTrailing\`: Material symbol name for the trailing icon.
2. **Actions:**
   - \`button\`: A quick action label or bind object for a single button.
   - \`actions\`: Array of action button configurations for more complex scenarios.
3. **Control:**
   - \`closeButton\`: Boolean to show/hide the close icon (default: true).
   - \`iconClose\`: Custom icon for the close button.
4. **Customization:**
   - \`html\`: Allows rendering raw HTML as content.
   - \`component\`: Allows rendering a custom Vue component as the notification body.

**Usage:**
Normally you don't use SnackbarItem directly; instead, you pass its props to the \`add()\` method of the Snackbar component.
    `
  }
}
