import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FormattedNumber component properties
 *
 * Описания свойств компонента FormattedNumber
 */
export const wikiDescriptionsFormattedNumber: StorybookComponentsDescriptionItem = {
  name: 'FormattedNumber',
  description: {
    en: 'Inline formatted text component for displaying numbers, currencies, and units of measurement',
    ru: 'Компонент для отображения чисел, валют и единиц измерения с форматированием'
  },
  possibilities: {
    en: [
      'localized number formatting using GeoIntl',
      'currency formatting with code support',
      'unit of measurement formatting support',
      'optional formatting toggle (raw value output)',
      'custom language/locale configuration'
    ],
    ru: [
      'локализованное форматирование чисел с использованием GeoIntl',
      'форматирование валюты с поддержкой кодов',
      'поддержка форматирования единиц измерения',
      'опциональное отключение форматирования (вывод исходного значения)',
      'настройка пользовательского языка/локали'
    ]
  },
  import: [],
  stories: [
    {
      id: 'FormattedNumberBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent :value="1234567.89"/>
          <DesignComponent :value="1234567.89" currency="USD"/>
          <DesignComponent :value="1234567.89" unit="kilogram"/>
          <DesignComponent :value="1234567.89" :format="false"/>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FormattedNumber'} type={'formattedNumber'}/>
<Canvas of={Component.FormattedNumberBasic}/>
    `
  },
  ai: {
    description: `
Low-level inline formatting component used to display numbers, currencies, and units. It dynamically resolves formatting based on localized settings and parameters.
    `
  }
}
