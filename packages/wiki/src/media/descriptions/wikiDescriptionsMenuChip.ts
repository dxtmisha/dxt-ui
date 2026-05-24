import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MenuChip component properties
 *
 * Описания свойств компонента MenuChip
 */
export const wikiDescriptionsMenuChip: StorybookComponentsDescriptionItem = {
  name: 'MenuChip',
  description: {
    en: 'Chip-based dropdown selector combining Chip, Menu, and Select for clean, compact selection interfaces',
    ru: 'Выпадающий селектор на основе чипа (Chip), объединяющий Chip, Menu и Select для компактных интерфейсов выбора'
  },
  possibilities: {
    en: [
      'chip trigger interface instead of standard field outline',
      'displays selected value names with a custom separator',
      'supports hiding the value when an icon is present (hideValueIcon)',
      'supports hiding the label when a value is selected (hideLabelValue)',
      'built-in search and filtering inside the dropdown header',
      'single or multiple value selection',
      'standard form data integration via a hidden input element'
    ],
    ru: [
      'интерфейс чипа-триггера вместо стандартной рамки поля',
      'отображает имена выбранных значений с настраиваемым разделителем',
      'поддержка скрытия значения при наличии иконки (hideValueIcon)',
      'поддержка скрытия метки при выборе значения (hideLabelValue)',
      'встроенный поиск и фильтрация внутри заголовка выпадающего меню',
      'одиночный или множественный выбор значений',
      'стандартная интеграция данных формы через скрытый элемент ввода input'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'MenuChipBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      setup: `
      const options = ref([
        { label: 'English', value: 'en' },
        { label: 'Russian', value: 'ru' },
        { label: 'Vietnamese', value: 'vi' },
        { label: 'Spanish', value: 'es' }
      ])
      const value1 = ref('en')
      const value2 = ref('ru')
      const value3 = ref('vi')

      return { options, value1, value2, value3 }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent
            v-model="value1"
            type="menuChip"
            label="Language"
            :option="options"
          />
          <DesignComponent
            v-model="value2"
            type="menuChip"
            label="With search"
            showSearch
            :option="options"
          />
          <DesignComponent
            v-model="value3"
            type="menuChip"
            label="Hide value if icon"
            icon="settings"
            hideValueIcon
            :option="options"
          />
        </div>
      `
    },
    {
      id: 'MenuChipVModel',
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
            type="menuChip"
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
            type="menuChip"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
      `
    },
    {
      id: 'MenuChipSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              type="menuChip"
              label="Loading menu chip"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :chipAttrs="{isSkeleton: true}"
            />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MenuChip'} type={'menuChip'}/>
<Canvas of={Component.MenuChipBasic}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.MenuChipVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.MenuChipSkeleton}/>
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
<StorybookDescriptions componentName={'Slot'} type={'default'} />
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Chip-based dropdown selector combining a trigger Chip and a dropdown Menu. Designed for space-saving select dropdowns where a standard text field outline or large button trigger is undesirable.
Displays selected values with configurable label separators (labelSeparator) and label hiding options (hideLabelValue, hideValueIcon).
Integrated hidden inputs provide standard form data carrying, while optional header search components (showSearch) allow filterable options lists.
    `
  }
}
