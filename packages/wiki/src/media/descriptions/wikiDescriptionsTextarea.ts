import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsTextarea: StorybookComponentsDescriptionItem = {
  name: 'Textarea',
  description: {
    en: 'A multi-line text input component. Supports auto-sizing, validation, icons, labels, messages, and counters.',
    ru: 'Компонент многострочного ввода текста. Поддерживает авто-размер, валидацию, иконки, метки, сообщения и счетчики.'
  },
  possibilities: {
    en: [
      'multi-line text input',
      'auto-sizing based on content (`autosize`)',
      'validation support (`validationMessage`, `required`)',
      'label and helper message support',
      'character counter (`counter`, `maxlength`)',
      'icons support',
      'disabled and readonly states'
    ],
    ru: [
      'многострочный ввод текста',
      'авто-размер в зависимости от контента (`autosize`)',
      'поддержка валидации (`validationMessage`, `required`)',
      'поддержка метки и вспомогательного сообщения',
      'счетчик символов (`counter`, `maxlength`)',
      'поддержка иконок',
      'состояния отключения и только для чтения'
    ]
  },
  render: `
    <DesignComponent v-bind="args" />
  `,
  stories: [
    {
      id: 'TextareaBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent label="Label" placeholder="Placeholder" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Filled</div>
            <DesignComponent
              label="Label"
              value="Modern web development relies heavily on robust form components. The Textarea component offers a flexible solution for multi-line input, adapting to user content with auto-resizing capabilities. It integrates seamlessly with validation systems and provides visual feedback through states and helper text, ensuring a smooth user experience across different devices and screen sizes."
            />
          </div>
        </div>
      `
    },
    {
      id: 'TextareaAutosize',
      name: {
        en: 'Autosize',
        ru: 'Авто-размер'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Autosize (default)</div>
            <DesignComponent label="Autosize" autosize />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Fixed Rows</div>
            <DesignComponent label="5 Rows" :autosize="false" rows="5" />
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Textarea'} type={'textarea'}/>
<Canvas of={Component.TextareaBasic}/>

<StorybookDescriptions componentName={'Textarea'} type={'autosize'}/>
<Canvas of={Component.TextareaAutosize}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `
  },
  ai: {
    description: `
Textarea is a component for multi-line text input.
It extends the functionality of the standard \`<textarea>\` element with additional features.

**Key Features:**

1.  **Auto-sizing (\`autosize\`):**
    -   Automatically adjusts the height of the textarea based on the content.
    -   Enabled by default.
    -   Use \`rows\` to set a fixed height if \`autosize\` is disabled.

2.  **Validation:**
    -   Supports \`validationMessage\` to display error messages.
    -   Supports \`required\`, \`minlength\`, \`maxlength\` attributes.
    -   Visual states for error and success.

3.  **Label and Helper:**
    -   \`label\`: Floating or static label for the field.
    -   \`helperMessage\`: Additional text below the field.

4.  **Counter:**
    -   \`counter\`: Displays a character counter.
    -   \`maxlength\`: Limits the number of characters and shows the limit in the counter.

5.  **Icons:**
    -   Supports icons via \`icon\` (leading) and \`iconTrailing\` (trailing) props (inherited from Field).

**Usage Examples:**

-   **Basic:**
    \`<Textarea label="Description" />\`

-   **With Fixed Rows:**
    \`<Textarea label="Comment" :autosize="false" rows="5" />\`

-   **With Validation:**
    \`<Textarea label="Feedback" required validation-message="Please enter feedback" />\`

-   **With Counter:**
    \`<Textarea label="Bio" :maxlength="200" counter />\`
    `
  }
}
