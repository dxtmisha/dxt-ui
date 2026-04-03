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
Subcomponent of the Field wrapper responsible for rendering form field labels and required markers. Ensures consistent styling, positioning, and accessibility for all input headings.
Features automated support for the "required" property (showing an asterisk) and works seamlessly with character counters and progress bars within the Field header.
Controlled through the label prop or #label slot. Primarily used within Input, Textarea, and other field-based controls; should generally not be used as a standalone component.
    `
  }
}
