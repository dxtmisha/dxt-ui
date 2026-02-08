import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FieldLabel component properties
 *
 * Описания свойств компонента FieldLabel
 */
export const wikiDescriptionsFieldLabel: StorybookComponentsDescriptionItem = {
  name: 'FieldLabel',
  description: {
    en: 'Component for displaying a field label and required marker; can be used together with counter and progress',
    ru: 'Компонент для отображения метки поля и индикатора обязательности; может использоваться вместе со счетчиком и прогрессом'
  },
  possibilities: {
    en: [
      'renders a text label for form fields',
      'shows required marker when the field is mandatory',
      'works together with FieldCounter and Progress when passed as props',
      'keeps consistent spacing and classes within form controls'
    ],
    ru: [
      'рендерит текстовую метку для полей формы',
      'показывает индикатор обязательности для обязательных полей',
      'работает совместно со счетчиком FieldCounter и прогрессом при передаче соответствующих свойств',
      'сохраняет согласованные отступы и классы внутри элементов формы'
    ]
  },
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldLabel'} type={'fieldLabel'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
    `
  },
  ai: {
    description: `
**Note:** This is a subcomponent of \`Field\`. You should generally not use it directly.
          It is automatically integrated into components like \`Input\` and \`Textarea\`.

FieldLabel is a component responsible for rendering the label of a form field.
It ensures consistent styling, positioning, and accessibility for field labels.

**Key Features:**
1. **Label Text:**
   - Displays the text provided in the \`label\` prop.
   - Can be customized via the \`#label\` slot.

2. **Required Indicator:**
   - If the \`required\` prop is true, it visually indicates that the field is mandatory (usually with an asterisk).

**Usage Examples:**

- **Standard Label:**
  \`<FieldLabel label="Username" />\`
    `
  }
}
