import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FieldMessage component properties
 *
 * Описания свойств компонента FieldMessage
 */
export const wikiDescriptionsFieldMessage: StorybookComponentsDescriptionItem = {
  name: 'FieldMessage',
  description: {
    en: 'Component for displaying helper and validation messages for form fields',
    ru: 'Компонент для отображения вспомогательных и валидационных сообщений для полей форм'
  },
  possibilities: {
    en: [
      'shows helper text under the field',
      'displays validation message when error occurs',
      'visibility control via a dedicated force flag',
      'works together with input fields and counters',
      'supports HTML-safe rendering by design system'
    ],
    ru: [
      'показывает вспомогательный текст под полем',
      'отображает сообщение валидации при ошибке',
      'управление видимостью через специальный флаг',
      'работает совместно с полями ввода и счетчиками',
      'поддерживает безопасный рендеринг HTML силами дизайн-системы'
    ]
  },
  import: [],
  stories: [
    {
      id: 'FieldMessageSlots',
      name: {
        en: 'Slots',
        ru: 'Слоты'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <template #helper>
              <span><b>Helper:</b> You can use Latin letters</span>
            </template>
          </DesignComponent>
          <DesignComponent>
            <template #validation>
              <span><b>Validation:</b> Please fill out this field</span>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldMessage'} type={'fieldMessage'}/>
    `,
    slots: `
<Canvas of={Component.FieldMessageSlots}/>
<StorybookDescriptions componentName={'FieldMessage'} type={'slots'}/>
    `
  },
  ai: {
    description: `
**Note:** This component is part of the \`Field\` component and should not be used directly.

FieldMessage is a component used to display informational text below form input fields.
It can show helper text, validation errors, and a character counter.

**When to use:**
1.  **Helper Text:** When a form field needs a hint or an explanation. This is controlled by the \`helperMessage\` prop.
2.  **Validation Error:** When a form field has an invalid value. This is controlled by the \`validationMessage\` prop. The component will automatically style itself to indicate an error (usually by changing the text color to red). The validation message has priority over the helper message.
3.  **Character Counter:** When you need to show the user how many characters they have typed, typically in relation to a \`maxlength\`. This is enabled with the \`counter: true\` prop.

**Key Features:**
- **Priority:** \`validationMessage\` is always shown if present. \`helperMessage\` is shown only if there is no validation message.
- **Styling:** Automatically applies error styling when a \`validationMessage\` is provided.
- **Counter:** Integrates a character counter that works with the \`maxlength\` prop.
- **Accessibility:** It's designed to be linked with an input field via ARIA attributes, which is handled automatically when used within components like TextField.

**How to identify in a design:**
- Look for small text directly beneath an input, textarea, or select.
- If the text is red or has an error-like appearance, it corresponds to the \`validationMessage\` prop.
- If the text is a neutral color, it corresponds to the \`helperMessage\` prop.
- If you see a "current/max" number format (e.g., "12/100"), this is the character counter, enabled by the \`counter\` prop.
    `
  }
}
