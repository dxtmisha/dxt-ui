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
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'fieldCounterId'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
    `
  }
}
