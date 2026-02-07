import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FieldCounter component properties
 *
 * Описания свойств компонента FieldCounter
 */
export const wikiDescriptionsFieldCounter: StorybookComponentsDescriptionItem = {
  name: 'FieldCounter',
  description: {
    en: 'Component for displaying character count and input length limits in form fields',
    ru: 'Компонент для отображения счетчика символов и ограничений длины ввода в полях форм'
  },
  possibilities: {
    en: [
      'displays current character count',
      'shows maximum character limit when specified',
      'customizable display template with placeholders',
      'automatic visibility based on counter and maxlength props',
      'supports both string and number values',
      'compact display format (e.g., "50 / 100")',
      'template-based formatting with [c] and [m] placeholders'
    ],
    ru: [
      'отображает текущее количество символов',
      'показывает максимальное ограничение символов при указании',
      'настраиваемый шаблон отображения с заполнителями',
      'автоматическая видимость на основе свойств counter и maxlength',
      'поддерживает значения как строк, так и чисел',
      'компактный формат отображения (например, "50 / 100")',
      'форматирование на основе шаблона с заполнителями [c] и [m]'
    ]
  },
  import: [],
  stories: [
    {
      id: 'FieldCounterTemplate',
      name: {
        en: 'Custom Template',
        ru: 'Пользовательский шаблон'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default template</div>
            <DesignComponent :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom template: "Characters: [c] of [m]"</div>
            <DesignComponent :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter only with template: "[c] chars"</div>
            <DesignComponent :counter="42" template="<b>[c]</b> chars"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldCounter'} type={'fieldCounter'}/>
<StorybookDescriptions componentName={'FieldCounter'} type={'templates'}/>
<Canvas of={Component.FieldCounterTemplate}/>
    `
  },
  ai: {
    description: `
**Note:** This is a subcomponent of \`Field\`. You should generally not use it directly.
          It is automatically integrated into components like \`Input\` and \`Textarea\`.

FieldCounter is a utility component designed to display character counts and limits for input fields.
It provides visual feedback to users about the length of their input and includes accessibility features for screen readers.

**Key Features:**
1. **Display Logic:**
   - **Counter Only:** If \`maxlength\` is not set, displays the current count (e.g., "10").
   - **With Limit:** If \`maxlength\` is set, displays "current / max" (e.g., "10 / 100").
   - **Template:** The \`template\` prop allows custom formatting using placeholders \`[c]\` (counter) and \`[m]\` (max).

2. **Accessibility:**
   - Automatically manages ARIA live regions to announce status to screen readers.
   - \`maxlengthOnce\`: Determines when to start announcing remaining characters (default is 10% of max).
   - Provides specific messages for "remaining characters" and "limit exceeded".

3. **Integration:**
   - Typically used within \`Input\`, \`Textarea\`, or custom form wrappers.
   - Accepts \`counter\` (current length) and \`maxlength\` (limit) as numbers or strings.

**Usage Examples:**

- **Standard Limit:**
  \`<FieldCounter :counter="currentLength" :maxlength="50" />\`

- **Custom Format:**
  \`<FieldCounter :counter="5" :maxlength="10" template="[c] of [m] chars" />\`
    `
  }
}
