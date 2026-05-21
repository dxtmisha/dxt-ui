import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MenuCountry component properties
 *
 * Описания свойств компонента MenuCountry
 */
export const wikiDescriptionsMenuCountry: StorybookComponentsDescriptionItem = {
  name: 'MenuCountry',
  description: {
    en: 'Specialized menu for selecting countries with automatic flag and name loading',
    ru: 'Специализированное меню для выбора стран с автоматической загрузкой флагов и названий'
  },
  possibilities: {
    en: [
      'automatic generation of country list via GeoFlagRef',
      'filtering by country codes via countryList prop',
      'all features of the base Menu component',
      'support for internationalized country names'
    ],
    ru: [
      'автоматическая генерация списка стран через GeoFlagRef',
      'фильтрация по кодам стран через свойство countryList',
      'все возможности базового компонента Menu',
      'поддержка интернационализированных названий стран'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Country</button>
      </template>
    </DesignComponent>
  `,
  stories: [
    {
      id: 'MenuCountryBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      setup: `
      return {
        selectedValue: ref('RU')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model:selected="selectedValue"
            is-selected-by-value
          >
            <template #control="{binds, selectedNames}">
              <button class="wiki-storybook-button" v-bind="binds">
                Selected: {{ selectedNames.value[0] || 'None' }}
              </button>
            </template>
          </DesignComponent>
          <div class="wiki-storybook-item">Value: {{ selectedValue }}</div>
        </div>
      `
    },
    {
      id: 'MenuCountryFilter',
      name: {
        en: 'Filtering countries',
        ru: 'Фильтрация стран'
      },
      setup: `
      return {
        selectedValue: ref('US'),
        list: ['US', 'CA', 'MX', 'GB', 'FR', 'DE', 'IT', 'ES']
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model:selected="selectedValue"
            :country-list="list"
            is-selected-by-value
          >
            <template #control="{binds, selectedNames}">
              <button class="wiki-storybook-button" v-bind="binds">
                Selected: {{ selectedNames.value[0] || 'None' }}
              </button>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MenuCountry'} type={'menu'}/>

<StorybookDescriptions componentName={'MenuCountry'} type={'basic'}/>
<Canvas of={Component.MenuCountryBasic}/>

<StorybookDescriptions componentName={'MenuCountry'} type={'filter'}/>
<Canvas of={Component.MenuCountryFilter}/>
    `,
    events: `
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Menu'} type={'expose.navigation'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Menu'} type={'slotsControl'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <MenuCountry v-bind="args">
    <template #control="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Select Country
      </button>
    </template>
  </MenuCountry>
</div>
    `,
    description: `
The MenuCountry component is a specialized version of the Menu component, designed specifically for country selection.
It leverages the GeoFlagRef utility to automatically populate the menu with a list of countries, including their flags and localized names.
It supports all the standard Menu functionalities like Window-based popups, custom controls, and sophisticated focus management.
Use the 'countryList' prop to restrict the selection to a specific subset of countries.
    `
  }
}
