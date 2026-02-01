import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Actions component properties
 *
 * Описания свойств компонента Actions
 */
export const wikiDescriptionsActions: StorybookComponentsDescriptionItem = {
  name: 'Actions',
  description: {
    en: 'A flexible container component for organizing action buttons with primary and secondary groups, supporting various alignment options and adaptive behavior.',
    ru: 'Гибкий компонент-контейнер для организации кнопок действий с основной и вторичной группами, поддерживающий различные варианты выравнивания и адаптивное поведение.'
  },
  possibilities: {
    en: [
      'Organizes action buttons into primary and secondary groups',
      'Supports multiple alignment modes: left, right, center, block',
      'Flexible layout that adapts to available space',
      'Automatic spacing between button groups',
      'Customizable button attributes for each group',
      'Responsive behavior with adaptive breakpoints',
      'Supports both array-based and slot-based button rendering'
    ],
    ru: [
      'Организует кнопки действий в основные и вторичные группы',
      'Поддерживает несколько режимов выравнивания: left, right, center, block',
      'Гибкая раскладка, адаптирующаяся к доступному пространству',
      'Автоматическое расстояние между группами кнопок',
      'Настраиваемые атрибуты кнопок для каждой группы',
      'Адаптивное поведение с точками перехода',
      'Поддерживает рендеринг кнопок через массив и слоты'
    ]
  },
  import: [],
  stories: [
    {
      id: 'ActionsBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `
    },
    {
      id: 'ActionsAlignment',
      name: {
        en: 'Alignment',
        ru: 'Выравнивание'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            align="left"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="center"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="right"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="block"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `
    },
    {
      id: 'ActionsPrimarySecondary',
      name: {
        en: 'Primary & Secondary Groups',
        ru: 'Основная и вторичная группы'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
            :list-secondary="[
              { label: 'Delete', text: true }
            ]"
          />
        </div>
      `
    },
    {
      id: 'ActionsFlexible',
      name: {
        en: 'Flexible Layout',
        ru: 'Гибкая раскладка'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            flexible="adaptive"
            :list="[
              { label: 'Cancel' },
              { label: 'Apply' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `
    },
    {
      id: 'ActionsCustomButtons',
      name: {
        en: 'Custom Button Styles',
        ru: 'Пользовательские стили кнопок'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel', outlined: true },
              { label: 'Save', primary: true }
            ]"
            :button-attrs="{ size: 'large' }"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Actions'} type={'actions'}/>
<StorybookDescriptions componentName={'Actions'} type={'list'}/>
<StorybookDescriptions componentName={'Actions'} type={'flexible'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'secondary'}/>
    `
  },
  ai: {
    description: `
Actions is a layout component for organizing groups of buttons, typically used in dialog footers, card actions, or form controls.
It manages spacing, alignment, and the separation between primary and secondary action groups.

**Key Features:**
1. **Groups:**
   - \`list\`: Array of props for the main group of buttons (usually right-aligned or primary).
   - \`listSecondary\`: Array of props for the secondary group (usually left-aligned).

2. **Alignment (\`align\`):**
   - \`left\`: Aligns all buttons to the left.
   - \`center\`: Centers the buttons.
   - \`right\`: Aligns all buttons to the right (default for dialogs).
   - \`block\`: Stretches buttons to fill the width.

3. **Button Configuration:**
   - Items in \`list\` and \`listSecondary\` are passed directly to the \`Button\` component.
   - \`buttonAttrs\`: Common props applied to all buttons in the main list.
   - \`buttonSecondaryAttrs\`: Common props applied to all buttons in the secondary list.

**Usage Examples:**

- **Dialog Footer:** \`<Actions align="right" :list="[{ label: 'Cancel' }, { label: 'Ok', primary: true }]" />\`
- **Split Actions:** \`<Actions :list="[{ label: 'Save' }]" :listSecondary="[{ label: 'Delete', text: true }]" />\` (Save on right, Delete on left)
- **Full Width:** \`<Actions align="block" :list="[{ label: 'Login', primary: true }]" />\`
      `
  }
}
