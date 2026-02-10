import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TextareaAutosize component
 *
 * Описания свойств компонента TextareaAutosize
 */
export const wikiDescriptionsTextareaAutosize: StorybookComponentsDescriptionItem = {
  name: 'TextareaAutosize',
  description: {
    en: 'Textarea component that automatically adjusts its height based on content',
    ru: 'Компонент текстового поля, которое автоматически подстраивает свою высоту под содержимое'
  },
  possibilities: {
    en: [
      'automatic height adjustment based on content',
      'clone element for precise height calculation',
      'respects padding and styling from the original textarea',
      'smooth height transitions on content change',
      'supports all standard textarea attributes via inputAttrs',
      'optional autosize toggle for flexibility',
      'reactive value binding with input event emission'
    ],
    ru: [
      'автоматическая подстройка высоты под содержимое',
      'элемент-клон для точного расчёта высоты',
      'учитывает отступы и стили исходного textarea',
      'плавные переходы высоты при изменении содержимого',
      'поддержка всех стандартных атрибутов textarea через inputAttrs',
      'опциональное отключение autosize для гибкости',
      'реактивная привязка значения с генерацией события input'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args" :inputAttrs="{style: 'width: 240px; border: 1px solid #90A1B9FF'}" />
    `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TextareaAutosize'} type={'textarea-autosize'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input-standard'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
    `
  },
  ai: {
    description: `
**Note:** This is a subcomponent of \`Textarea\`. You should generally not use it directly.
          It is automatically integrated into the \`Textarea\` component to provide auto-resizing capabilities.

TextareaAutosize is a functional component that renders a \`<textarea>\` element capable of automatically adjusting its height to fit the content.

**Key Features:**
1. **Auto-Resizing Logic:**
   - It renders a hidden "clone" element (a \`div\`) that mirrors the styles (font, padding, border, width) of the actual textarea.
   - As text is entered, the content is copied to the clone, and the clone's height is measured.
   - The textarea's height is then updated to match the clone's height, ensuring no scrollbars appear and the field grows/shrinks dynamically.

2. **Input Attributes (\`inputAttrs\`):**
   - Standard HTML attributes for the textarea (like \`placeholder\`, \`rows\`, \`disabled\`, \`readonly\`, \`style\`) should be passed via the \`inputAttrs\` prop.
   - This ensures they are applied directly to the native \`<textarea>\` element.

3. **Value Management:**
   - It manages the input value and emits updates, allowing for reactive data binding.

**When to use:**
- This component is designed to be the internal engine for the \`Textarea\` component.
- Use \`Textarea\` instead for a complete form field with labels, validation, and styling.

**Usage Examples:**

- **Internal Usage:**
  \`<TextareaAutosize :value="modelValue" :inputAttrs="{ rows: 1 }" />\`
    `
  }
}
