import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FormattedUnit component properties
 *
 * Описания свойств компонента FormattedUnit
 */
export const wikiDescriptionsFormattedUnit: StorybookComponentsDescriptionItem = {
  name: 'FormattedUnit',
  description: {
    en: 'Inline formatted text component for displaying and automatically converting units of measurement',
    ru: 'Компонент для отображения и автоматической конвертации единиц измерения с форматированием'
  },
  possibilities: {
    en: [
      'automatic metric-to-customary unit conversion based on country locale (e.g. Celsius to Fahrenheit, grams to ounces)',
      'localized unit formatting using GeoUnit',
      'optional formatting toggle (raw value output)',
      'custom language/locale configuration'
    ],
    ru: [
      'автоматическая конвертация метрических единиц в традиционные на основе локали страны (например, Цельсий в Фаренгейт, граммы в унции)',
      'локализованное форматирование единиц с использованием GeoUnit',
      'опциональное отключение форматирования (вывод исходного значения)',
      'настройка пользовательского языка/локали'
    ]
  },
  import: [],
  stories: [
    {
      id: 'FormattedUnitBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-row-gap">
            <DesignComponent :value="100" unit="celsius" language="ru-RU"/> →
            <DesignComponent :value="100" unit="celsius" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <DesignComponent :value="1000" unit="gram" language="ru-RU"/> →
            <DesignComponent :value="1000" unit="gram" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <DesignComponent :value="100" unit="kilometer-per-hour" language="en-US"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FormattedUnit'} type={'formattedUnit'}/>
<Canvas of={Component.FormattedUnitBasic}/>
    `
  },
  ai: {
    description: `
Low-level inline formatting component used to display and automatically convert units of measurement (like celsius, gram, kilometer-per-hour) according to the user locale.
    `
  }
}
