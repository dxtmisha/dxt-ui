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
      id: 'SelectBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      setup: `
      const options = ref([
        {label: 'JavaScript', value: 'js'},
        {label: 'TypeScript', value: 'ts'},
        {label: 'Python', value: 'py'},
        {label: 'Java', value: 'java'},
        {label: 'C++', value: 'cpp'},
        {label: 'Ruby', value: 'rb'},
        {label: 'Go', value: 'go'},
        {label: 'PHP', value: 'php'}
      ])

      return { options }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="select"
            label="Standard select"
            placeholder="Select option"
            :option="options"
          />
          <DesignComponent
            type="select"
            label="With search"
            placeholder="Search..."
            showSearch
            :option="options"
          />
          <DesignComponent
            type="select"
            label="With filter"
            placeholder="Type to filter"
            showSearch
            filterMode
            :option="options"
          />
          <DesignComponent
            type="select"
            label="Edit value"
            placeholder="Select or type"
            editValue
            filterMode
            :option="options"
          />
          <DesignComponent
            type="select"
            label="With arrows"
            placeholder="Select option"
            arrow="carousel"
            :option="options"
          />
        </div>
      `
    },
    {
      id: 'SelectVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const valueSingle = ref('option2')
      const valueMultiple = ref(['option1', 'option3'])
      const options = [
        { label: 'First option', value: 'option1' },
        { label: 'Second option', value: 'option2' },
        { label: 'Third option', value: 'option3' }
      ]

      return { valueSingle, valueMultiple, options }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueSingle }}</strong></span>
            <button class="wiki-storybook-button" @click="valueSingle = 'option1'">option 1</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option2'">option 2</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option3'">option 3</button>
          </div>

          <DesignComponent
            v-model="valueSingle"
            type="select"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <DesignComponent
            v-model="valueMultiple"
            type="select"
            label="Multiple select"
            multiple
            :option="options"
          />
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
<Canvas of={Component.SelectBasic}/>

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
  },
  ai: {
    description: `
High-level form control that combines a trigger field, a dropdown menu, and a structured value display (Chips or text). Designed for choosing single or multiple items from static lists or dynamic datasets with built-in search and filtering.
Features support for AJAX data loading with caching, multiple selection with chips, and an editable combobox mode (editValue). Includes integrated validation, keyboard navigation, and full Field component functionality (labels, icons, and state messages).
Controlled via the option prop for data and v-model for state tracking, supporting custom key mapping (keyLabel/keyValue). Use for user selection, category filtering, or complex multi-select interfaces requiring real-time search.
    `
  }
}
