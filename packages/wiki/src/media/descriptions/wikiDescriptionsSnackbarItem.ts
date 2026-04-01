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
        <div class="wiki-storybook-flex">
          <DesignComponent label="Notification label" />
          <DesignComponent label="Detailed notification" description="Description text provides more context for the user." />
        </div>
      `
    },
    {
      id: 'SnackbarItemIcon',
      name: {
        en: 'With Icons',
        ru: 'С иконками'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent label="Success message" icon="check_circle" />
          <DesignComponent label="Warning message" icon="warning" />
          <DesignComponent label="Error message" icon="error" />
        </div>
      `
    },
    {
      id: 'SnackbarItemActions',
      name: {
        en: 'With Actions',
        ru: 'С действиями'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent 
            label="File deleted" 
            icon="delete" 
            button="Undo" 
          />
          <DesignComponent 
            label="Connection lost" 
            icon="wifi_off" 
            :actions="[{ label: 'Retry', primary: true }]" 
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SnackbarItem'} type={'snackbarItem'}/>
<Canvas of={Component.SnackbarItemBasic}/>

<template prop="icon">
<StorybookDescriptions componentName={'SnackbarItem'} type={'icon'}/>
<Canvas of={Component.SnackbarItemIcon}/>
</template>

<template prop="iconTrailing">
<StorybookDescriptions componentName={'SnackbarItem'} type={'iconTrailing'}/>
</template>

<template prop="button">
<StorybookDescriptions componentName={'SnackbarItem'} type={'button'}/>
<Canvas of={Component.SnackbarItemActions}/>
</template>

<template prop="closeButton">
<StorybookDescriptions componentName={'SnackbarItem'} type={'closeButton'}/>
</template>

<template prop="iconClose">
<StorybookDescriptions componentName={'SnackbarItem'} type={'iconClose'}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'label'}/>
<StorybookDescriptions componentName={'Value'} type={'description'}/>
<StorybookDescriptions componentName={'Value'} type={'html'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'close'}/>
    `,
    expose: '',
    slots: ''
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
