import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputPhone component
 *
 * Описания свойств компонента InputPhone
 */
export const wikiDescriptionsInputPhone: StorybookComponentsDescriptionItem = {
  name: 'InputPhone',
  description: {
    en: 'Phone number input component with country selection, validation, and masking support',
    ru: 'Компонент ввода номера телефона с выбором страны, валидацией и поддержкой маски'
  },
  possibilities: {
    en: [
      'automatic phone number masking based on selected country',
      'interactive country selection menu with search, flags and dialing codes',
      'dynamic country detection from entered phone number digits',
      'configurable default country and restriction of automatic detection via countryBlock',
      'fully custom pattern formatting via mask attributes',
      'supports two-way data binding (v-model)',
      'integrated helper messages, status validation states, and label configurations'
    ],
    ru: [
      'автоматическое маскирование номера телефона на основе выбранной страны',
      'интерактивное меню выбора страны с поиском, флагами и телефонными кодами',
      'динамическое определение страны по вводимым цифрам номера телефона',
      'настройка страны по умолчанию и возможность отключения автоопределения через countryBlock',
      'полностью настраиваемое форматирование шаблонов через атрибуты маски',
      'поддержка двусторонней привязки данных (v-model)',
      'интегрированные подсказки, статусы валидации и конфигурации меток'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'InputPhoneVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        phone: ref('')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model:value="phone"
            label="Phone Number"
            placeholder="Enter phone number"
          />
          <div>Entered phone: {{ phone || '—' }}</div>
        </div>
      `
    },
    {
      id: 'InputPhoneCountryBlock',
      name: {
        en: 'Country blocking',
        ru: 'Блокировка страны'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            country-default="DE"
            :country-block="false"
            label="Dynamic Country Detection (DE default)"
          />
          <DesignComponent
            country-default="DE"
            :country-block="true"
            label="Locked Country (DE)"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputPhone'} type={'inputPhone'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputPhoneVModel}/>

<StorybookDescriptions componentName={'InputPhone'} type={'countryBlock'}/>
<Canvas of={Component.InputPhoneCountryBlock}/>
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
The InputPhone component is a specialized field for inputting and formatting phone numbers.
It integrates with a country flag/code selector and applies automatic mask formatting based on the selected or detected country.
By default, the country can be dynamically identified from the entered dialing digits, which can be restricted using the countryBlock prop.
It supports two-way v-model binding, error validation states, helper messages, and custom mask settings.
    `
  }
}
