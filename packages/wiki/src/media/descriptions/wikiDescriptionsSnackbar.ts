import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Snackbar component properties
 *
 * Описания свойств компонента Snackbar
 */
export const wikiDescriptionsSnackbar: StorybookComponentsDescriptionItem = {
  name: 'Snackbar',
  description: {
    en: 'A container component for managing and displaying temporary notification messages (Snackbars).',
    ru: 'Компонент-контейнер для управления и отображения временных уведомлений (Snackbars).'
  },
  possibilities: {
    en: [
      'automatic disappearance of messages after a set delay',
      'flexible positioning (top, bottom, left, right, block)',
      'priority-based message sorting',
      'support for custom animation origins',
      'teleportation to the document body for better layering',
      'programmatic control (add, remove, clear)'
    ],
    ru: [
      'автоматическое исчезновение сообщений после установленной задержки',
      'гибкое позиционирование (сверху, снизу, слева, справа, блоком)',
      'сортировка сообщений по приоритету',
      'поддержка пользовательских точек начала анимации',
      'телепортация в body документа для лучшего наслоения',
      'программное управление (add, remove, clear)'
    ]
  },
  import: [],
  stories: [
    {
      id: 'SnackbarBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent ref="snackbar" />
          <DesignButton 
            label="Add Snackbar" 
            primary 
            @click="() => $refs.snackbar.add({ label: 'Basic message' })" 
          />
        </div>
      `
    },
    {
      id: 'SnackbarPosition',
      name: {
        en: 'Positioning',
        ru: 'Позиционирование'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignButton 
            label="Top Left" 
            outline 
            @click="() => $refs.snackbarTopLeft.add({ label: 'Top Left message' })" 
          />
          <DesignButton 
            label="Bottom Right" 
            outline 
            @click="() => $refs.snackbarBottomRight.add({ label: 'Bottom Right message' })" 
          />
          
          <DesignComponent ref="snackbarTopLeft" vertical="top" horizontal="left" />
          <DesignComponent ref="snackbarBottomRight" vertical="bottom" horizontal="right" />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Snackbar'} type={'snackbar'}/>
<Canvas of={Component.SnackbarBasic}/>

<template prop="vertical">
<StorybookDescriptions componentName={'Snackbar'} type={'vertical'}/>
</template>

<template prop="horizontal">
<StorybookDescriptions componentName={'Snackbar'} type={'horizontal'}/>
<Canvas of={Component.SnackbarPosition}/>
</template>

<template prop="origin">
<StorybookDescriptions componentName={'Snackbar'} type={'origin'}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'delay'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'close'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'isItem'}/>
<StorybookDescriptions componentName={'Expose'} type={'add'}/>
<StorybookDescriptions componentName={'Expose'} type={'remove'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
    `,
    slots: ''
  },
  ai: {
    description: `
Snackbar is a notification system that manages multiple SnackbarItem elements. 
It handles positioning, timing (automatic removal), and teleportation to the body.

**Key Features:**
1. **Management:**
   - \`add(item)\`: Method to programmatically add a notification.
   - \`remove(id)\`: Removes a specific notification.
   - \`clear()\`: Removes all active notifications.
2. **Positioning:**
   - \`vertical\`: 'top' or 'bottom'.
   - \`horizontal\`: 'right', 'left', or 'block'.
3. **Behavior:**
   - \`delay\`: Time in milliseconds before the message disappears (default: 8000).
   - \`origin\`: Controls the direction from which notifications appear (e.g., 'bottomToTop').

**Usage Example:**
\`\`\`vue
<Snackbar ref="mySnackbar" vertical="bottom" horizontal="right" />

<!-- Add message -->
<Button @click="$refs.mySnackbar.add({ label: 'Item saved successfully', icon: 'check' })" />
\`\`\`
    `
  }
}
