import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MenuLanguage component properties
 *
 * Описания свойств компонента MenuLanguage
 */
export const wikiDescriptionsMenuLanguage: StorybookComponentsDescriptionItem = {
  name: 'MenuLanguage',
  description: {
    en: 'Specialized menu for selecting languages with automatic flag and name loading',
    ru: 'Специализированное меню для выбора языков с автоматической загрузкой флагов и названий'
  },
  possibilities: {
    en: [
      'automatic generation of language list via GeoFlagRef',
      'filtering by country/language codes via countryList prop',
      'all features of the base Menu component',
      'support for native language names'
    ],
    ru: [
      'автоматическая генерация списка языков через GeoFlagRef',
      'фильтрация по кодам стран/языков через свойство countryList',
      'все возможности базового компонента Menu',
      'поддержка названий на родном языке'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Language</button>
      </template>
    </DesignComponent>
  `,
  stories: [
    {
      id: 'MenuLanguageFilter',
      name: {
        en: 'Filtering languages',
        ru: 'Фильтрация языков'
      },
      setup: `
      return {
        selectedValue: ref('en'),
        list: ['en', 'ru', 'vi', 'zh', 'fr', 'de']
      }
      `,
      template: `
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MenuLanguage'} type={'menuLanguage'}/>
<Canvas of={Component.MenuLanguageFilter}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'loading'}/>
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
  <MenuLanguage v-bind="args">
    <template #control="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Select Language
      </button>
    </template>
  </MenuLanguage>
</div>
    `,
    description: `
The MenuLanguage component is a specialized version of the Menu component, designed specifically for language selection.
It leverages the GeoFlagRef utility to automatically populate the menu with a list of languages, including native language names and country flags where relevant.
It supports all the standard Menu functionalities like Window-based popups, custom controls, and sophisticated focus management.
Use the 'countryList' prop to restrict the selection to a specific subset of language codes.
    `
  }
}
