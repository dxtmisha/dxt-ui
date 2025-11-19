import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Select component properties
 *
 * Описания свойств компонента Select
 */
export const wikiDescriptionsSelect: StorybookComponentsDescriptionItem = {
  name: 'Select',
  description: {
    en: 'Complete select dropdown control combining Field, Menu, SelectValue and Input for sophisticated selection interface',
    ru: 'Полнофункциональный элемент выбора из выпадающего списка, объединяющий Field, Menu, SelectValue и Input для продвинутого интерфейса выбора'
  },
  possibilities: {
    en: [
      'single or multiple value selection',
      'built-in search and filtering capabilities',
      'editable selected value mode (editValue)',
      'AJAX data loading with caching support',
      'filter mode for real-time option filtering',
      'validation with standard Field features',
      'keyboard navigation and accessibility',
      'custom option list via slots or data',
      'icon support for dropdown arrow and search',
      'auto-close control for multiple selection',
      'integration with all Field component features (label, counter, messages, icons)'
    ],
    ru: [
      'выбор одиночного или множественных значений',
      'встроенный поиск и возможности фильтрации',
      'режим редактирования выбранного значения (editValue)',
      'AJAX загрузка данных с поддержкой кеширования',
      'режим фильтрации для реального времени',
      'валидация со стандартными функциями Field',
      'клавиатурная навигация и доступность',
      'пользовательский список опций через слоты или данные',
      'поддержка иконок для стрелки выпадающего списка и поиска',
      'управление автозакрытием для множественного выбора',
      'интеграция со всеми возможностями компонента Field (подпись, счётчик, сообщения, иконки)'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
      <DesignComponent v-bind="args" />
    `,
  stories: [
    {
      id: 'SelectVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        singleValue: ref('option2'),
        multipleValue: ref(['option1', 'option3']),
        countryValue: ref(''),
        countries: ref([
          {label: 'United States', value: 'us', icon: 'flag'},
          {label: 'United Kingdom', value: 'uk', icon: 'flag'},
          {label: 'Germany', value: 'de', icon: 'flag'},
          {label: 'France', value: 'fr', icon: 'flag'},
          {label: 'Japan', value: 'jp', icon: 'flag'}
        ])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="singleValue = 'option1'">Select Option 1</button>
            <button class="wiki-storybook-button" @click="singleValue = 'option3'">Select Option 3</button>
            <button class="wiki-storybook-button" @click="singleValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="singleValue"
            type="select"
            label="Single select"
            :option="[
              {label: 'First option', value: 'option1'},
              {label: 'Second option', value: 'option2'},
              {label: 'Third option', value: 'option3'}
            ]"
          />
          <div>Selected value: {{ singleValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="multipleValue = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleValue.push('option3')">Add Option 3</button>
            <button class="wiki-storybook-button" @click="multipleValue = []">Clear all</button>
          </div>
          <DesignComponent
            v-model="multipleValue"
            type="select"
            label="Multiple select"
            multiple
            :option="[
              {label: 'First option', value: 'option1', icon: 'check'},
              {label: 'Second option', value: 'option2', icon: 'check'},
              {label: 'Third option', value: 'option3', icon: 'check'}
            ]"
          />
          <div>Selected values: {{ multipleValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="countryValue = 'us'">USA</button>
            <button class="wiki-storybook-button" @click="countryValue = 'uk'">UK</button>
            <button class="wiki-storybook-button" @click="countryValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="countryValue"
            type="select"
            label="Country"
            placeholder="Select country"
            :option="countries"
          />
          <div>Selected country: {{ countryValue }}</div>
        </div>
      `
    },
    {
      id: 'SelectSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              isSkeleton
              type="select"
              label="Loading select"
              helperMessage="Options are loading..."
              :option="[
                {label: 'First option', value: 'option1'},
                {label: 'Second option', value: 'option2'},
                {label: 'Third option', value: 'option3'}
              ]"
            />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Select'} type={'select'}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.SelectVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SelectSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'validation'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  }
}
