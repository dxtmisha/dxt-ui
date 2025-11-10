import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ChipGroup component properties
 *
 * Описания свойств компонента ChipGroup
 */
export const wikiDescriptionsChipGroup: StorybookComponentsDescriptionItem = {
  name: 'ChipGroup',
  description: {
    en: 'Container for managing a collection of chips with selection functionality',
    ru: 'Контейнер для управления коллекцией чипов с функциональностью выбора'
  },
  possibilities: {
    en: [
      'single or multiple chip selection',
      'dynamic list rendering from data',
      'customizable chip appearance through chipAttrs',
      'conditional icon display based on selection state',
      'flexible data binding with keyLabel and keyValue',
      'event handling for user interactions'
    ],
    ru: [
      'одиночный или множественный выбор чипов',
      'динамический рендеринг списка из данных',
      'настраиваемый внешний вид чипов через chipAttrs',
      'условное отображение иконок в зависимости от состояния выбора',
      'гибкое связывание данных через keyLabel и keyValue',
      'обработка событий для взаимодействия пользователя'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'ChipGroupBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default</div>
            <DesignComponent :list="['Option 1', 'Option 2', 'Option 3']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With icons</div>
            <DesignComponent
              :list="[
                { label: 'Home', icon: 'home' },
                { label: 'Star', icon: 'star' },
                { label: 'Heart', icon: 'favorite' }
              ]"
            />
          </div>
        </div>
      `
    },
    {
      id: 'ChipGroupSelection',
      name: {
        en: 'Selection States',
        ru: 'Состояния выбора'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single selection</div>
            <DesignComponent :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple selection</div>
            <DesignComponent :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Icon when selected</div>
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
        selectedValue: ref('option2'),
        multipleSelected: ref(['option1', 'option3'])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Selected: {{ selectedValue }}</div>
            <div class="wiki-storybook-flex-column">
              <DesignComponent
                v-model:selected="selectedValue"
                :list="[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' }
                ]"
                :readonly="false"
              />
              <div class="wiki-storybook-flex">
                <button class="wiki-storybook-button" @click="selectedValue = 'option1'">Select 1</button>
                <button class="wiki-storybook-button" @click="selectedValue = 'option2'">Select 2</button>
                <button class="wiki-storybook-button" @click="selectedValue = undefined">Clear</button>
              </div>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Selected: {{ multipleSelected }}</div>
            <div class="wiki-storybook-flex-column">
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
              <div class="wiki-storybook-flex">
                <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
                <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
                <button class="wiki-storybook-button" @click="multipleSelected = []">Clear all</button>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
    <StorybookDescriptions componentName={'ChipGroup'} type={'chipGroup'}/>
    <Canvas of={Component.ChipGroupBasic}/>

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
  }
}
