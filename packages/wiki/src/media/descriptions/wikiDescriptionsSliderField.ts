import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SliderField component properties
 *
 * Описания свойств компонента SliderField
 */
export const wikiDescriptionsSliderField: StorybookComponentsDescriptionItem = {
  name: 'SliderField',
  description: {
    en: 'Complete form slider input control combining Field wrapper, embedded Slider, optional numeric input textboxes, and min/max value labels',
    ru: 'Полнофункциональный элемент управления слайдером в формах, объединяющий обертку Field, встроенный Slider, опциональные числовые поля ввода и метки минимального/максимального значений'
  },
  possibilities: {
    en: [
      'single value and dual-handle range slider selection mode',
      'optional numeric input textboxes (showInput) for direct value editing',
      'optional static min/max value badges (showValue)',
      'customizable minimum, maximum, and step values',
      'marks and ticks display with custom labels and magnet snapping',
      'leading and trailing label elements (labelLeading, labelTrailing)',
      'integrated validation, counter, field messages, and status styles',
      'horizontal and vertical layout orientation support',
      'disabled, readonly, and loading skeleton states'
    ],
    ru: [
      'выбор одиночного значения и выбор диапазона слайдером с двумя ползунками',
      'опциональные числовые поля ввода (showInput) для прямого редактирования значений',
      'опциональное отображение меток минимального/максимального значений (showValue)',
      'настраиваемые минимальные, максимальные значения и шаг',
      'отображение делений и меток с подписями и притягиванием (магнит)',
      'ведущие и замыкающие элементы меток (labelLeading, labelTrailing)',
      'интегрированная валидация, счетчик, сообщения поля и стили статусов',
      'поддержка горизонтальной и вертикальной ориентации',
      'состояния отключения (disabled), только для чтения (readonly) и скелетона'
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
      id: 'SliderFieldOrientation',
      name: {
        en: 'Orientation',
        ru: 'Ориентация'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <DesignComponent label="Horizontal" :value="40" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <DesignComponent vertical label="Vertical" :value="60" />
          </div>
        </div>
      `
    },
    {
      id: 'SliderFieldMultiple',
      name: {
        en: 'Range selection',
        ru: 'Выбор диапазона'
      },
      template: `
        <DesignComponent
          label="Range selection"
          multiple
          showInput
          :value="[20, 80]"
        />
      `
    },
    {
      id: 'SliderFieldMarks',
      name: {
        en: 'Marks and ticks',
        ru: 'Метки и деления'
      },
      setup: `
      return {
        customMarks: [
          { mark: 0, label: '0%' },
          { mark: 25, label: '25%' },
          { mark: 50, label: '50%' },
          { mark: 75, label: '75%' },
          { mark: 100, label: '100%' }
        ]
      }
      `,
      template: `
        <DesignComponent
          label="Slider with marks"
          :marks="customMarks"
          magnet
          :step="5"
          showInput
        />
      `
    },
    {
      id: 'SliderFieldVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const singleValue = ref(50)
      const rangeValue = ref([20, 80])

      return { singleValue, rangeValue }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Single value: <strong>{{ singleValue }}</strong></span>
            <button class="wiki-storybook-button" @click="singleValue = 25">25</button>
            <button class="wiki-storybook-button" @click="singleValue = 75">75</button>
          </div>
          <DesignComponent
            v-model="singleValue"
            label="Single slider"
            showInput
            :min="0"
            :max="100"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Range value: <strong>{{ rangeValue }}</strong></span>
            <button class="wiki-storybook-button" @click="rangeValue = [10, 90]">10 - 90</button>
          </div>
          <DesignComponent
            v-model="rangeValue"
            label="Range slider"
            multiple
            showInput
            :min="0"
            :max="100"
          />
        </div>
      `
    },
    {
      id: 'SliderFieldSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              isSkeleton
              label="Loading slider"
              showInput
            />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SliderField'} type={'sliderField'}/>
<Canvas of={Component.SliderFieldOrientation}/>

<StorybookDescriptions componentName={'Slider'} type={'multiple'}/>
<Canvas of={Component.SliderFieldMultiple}/>

<StorybookDescriptions componentName={'Slider'} type={'marks'}/>
<Canvas of={Component.SliderFieldMarks}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.SliderFieldVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SliderFieldSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
<StorybookDescriptions componentName={'Slider'} type={'slots'}/>
    `
  },
  ai: {
    description: `
SliderField component for numeric input and range selection within forms.
Combines Field component structure (labels, helper text, validation rules, status indicators, counter) with an embedded interactive Slider, optional numeric input boxes (showInput) and static min/max value displays (showValue).
Supports single value or array range values (multiple), customizable boundaries (min, max, step), tick marks with labels, and magnet snapping.
Offers horizontal and vertical orientations, disabled, readonly, and skeleton states. Emits input and change events and provides full v-model binding.
    `
  }
}
