import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ChipGroup component properties
 *
 * Описания свойств компонента ChipGroup
 */
export const wikiDescriptionsChipGroup: StorybookComponentsDescriptionItem = {
  name: 'ChipGroup',
  description: {
    en: 'Component for managing a group of interactive chips with support for selection and data binding',
    ru: 'Компонент для управления группой интерактивных чипов с поддержкой выбора и привязки данных'
  },
  possibilities: {
    en: [
      'rendering a list of chips from a data array',
      'managing selection state (single or multiple)',
      'customizing the appearance of all chips in the group via chipAttrs',
      'handling click events and value updates',
      'controlling icon visibility based on selection'
    ],
    ru: [
      'рендеринг списка чипов из массива данных',
      'управление состоянием выбора (одиночный или множественный)',
      'настройка внешнего вида всех чипов в группе через chipAttrs',
      'обработка событий клика и обновлений значений',
      'управление видимостью иконки в зависимости от выбора'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'ChipGroupSelection',
      name: {
        en: 'Selection States',
        ru: 'Состояния выбора'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <DesignComponent :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          <DesignComponent
            :list="[
              { label: 'Option 1', icon: 'check', value: 'option1' },
              { label: 'Option 2', icon: 'check', value: 'option2' },
              { label: 'Option 3', icon: 'check', value: 'option3' }
            ]"
            :selected="['option2']"
            :icon-when-selected="true"
          />
        </div>
      `
    },
    {
      id: 'ChipGroupVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        multipleSelected: ref(['option1', 'option3'])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ multipleSelected }}</span>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
          <DesignComponent
            v-model:selected="multipleSelected"
            :list="[
              { label: 'Option 1', value: 'option1', icon: 'check' },
              { label: 'Option 2', value: 'option2', icon: 'check' },
              { label: 'Option 3', value: 'option3', icon: 'check' }
            ]"
            :readonly="false"
            :icon-when-selected="true"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
    <StorybookDescriptions componentName={'ChipGroup'} type={'chipGroup'}/>

    <StorybookDescriptions componentName={'ChipGroup'} type={'selected'}/>
    <Canvas of={Component.ChipGroupSelection}/>

    <StorybookDescriptions componentName={'Value'} type={'v-model:selected'}/>
    <Canvas of={Component.ChipGroupVModel}/>
    `,
    events: `
    <StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
    <StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Wrapper component for managing collections of Chip elements based on an array of data. Streamlines the creation of filter sets, choice groups, and tag lists by automating iteration and selection logic.
Features support for single and multiple selection modes, shared chip attributes (via chipAttrs), and icon visibility control. Includes built-in data binding for selected values and @click event propagation.
Controlled via the list prop for data and v-model:selected for state. Use for dynamic filtering interfaces, selecting multiple categories, or building interactive tag lists from API data.
    `
  }
}
