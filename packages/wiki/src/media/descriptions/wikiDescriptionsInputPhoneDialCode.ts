import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputPhoneDialCode component properties
 *
 * Описания свойств компонента InputPhoneDialCode
 */
export const wikiDescriptionsInputPhoneDialCode: StorybookComponentsDescriptionItem = {
  name: 'InputPhoneDialCode',
  description: {
    en: 'Trigger button for selecting a country phone dial code via a country menu',
    ru: 'Кнопка-триггер для выбора кода страны телефонного номера через меню стран'
  },
  possibilities: {
    en: [
      'automatic detection of the current country via Geo.getCountry()',
      'country selection via a MenuCountry popup with flag and phone code display',
      'configurable label display: country name, phone code, or none',
      'reactive model binding via v-model:selected',
      'customizable trailing icon (arrow) for open/close indication',
      'disables automatic focus return on window close and forwards window events to parent controls',
      'inherits all Button and MenuCountry capabilities'
    ],
    ru: [
      'автоматическое определение текущей страны через Geo.getCountry()',
      'выбор страны через всплывающее меню MenuCountry с флагом и кодом телефона',
      'настраиваемый тип метки: название страны, телефонный код или без метки',
      'реактивная привязка модели через v-model:selected',
      'настраиваемая иконка-стрелка для индикации открытия/закрытия',
      'отключает автоматический возврат фокуса при закрытии окна и пробрасывает событие window наружу',
      'наследует все возможности компонентов Button и MenuCountry'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'InputPhoneDialCodeVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        selected: ref(undefined)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = [{ value: 'US' }]">Select US</button>
            <button class="wiki-storybook-button" @click="selected = [{ value: 'DE' }]">Select DE</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="selected = undefined">Clear</button>
          </div>
          <DesignComponent
            v-model:selected="selected"
            label-type="code"
          />
          <div>Selected: {{ selected?.[0]?.value ?? '—' }}</div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputPhoneDialCode'} type={'inputPhoneDialCode'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputPhoneDialCodeVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args" />
</div>
    `,
    description: `
The InputPhoneDialCode component is a compact trigger button that opens a MenuCountry popup for selecting a country phone dial code.
It automatically detects the user's current country via Geo.getCountry() as the default value and reactively binds the selection via v-model:selected.
The trigger button can display the selected country's flag icon alongside an optional label — either the phone code (e.g. "+1") or the country name — controlled by the labelType prop ('code' | 'name' | 'none').
The trailing arrow icon reflects the open/close state of the menu. It configures the underlying window with disableFocusReturn enabled and forwards the window lifecycle event so host inputs can manage focus directly on close. Typically used as a prefix element inside a phone number input field.
    `,
    hide: true
  }
}
