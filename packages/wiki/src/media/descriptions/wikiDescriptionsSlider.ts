import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsSlider: StorybookComponentsDescriptionItem = {
  name: 'Slider',
  description: {
    en: 'Component for selecting a numeric value or range using a movable thumb control',
    ru: 'Компонент для выбора числового значения или диапазона с помощью подвижного ползунка'
  },
  possibilities: {
    en: [
      'single value and dual-thumb range selection mode',
      'customizable minimum, maximum, and step increments',
      'ticks and mark items display with custom labels',
      'magnet snapping to nearest marks',
      'minimum distance enforcement between handles in range mode',
      'horizontal and vertical orientation support',
      'disabled and readonly state support',
      'keyboard navigation (arrows, Home, End, PageUp, PageDown)',
      'pointer drag and touch interaction handling',
      'skeleton state for loading placeholders',
      'slots for custom mark rendering and thumb labels'
    ],
    ru: [
      'одиночный режим и выбор диапазона с двумя ползунками',
      'настраиваемые минимальные, максимальные значения и шаг',
      'отображение делений и меток с пользовательскими подписями',
      'притягивание (магнит) к ближайшим меткам',
      'соблюдение минимального расстояния между ползунками в режиме диапазона',
      'поддержка горизонтальной и вертикальной ориентации',
      'состояния отключения (disabled) и только для чтения (readonly)',
      'клавиатурная навигация (стрелки, Home, End, PageUp, PageDown)',
      'обработка перетаскивания мыши и сенсорных касаний',
      'состояние скелетона для заполнителей загрузки',
      'слоты для кастомного рендеринга меток и надписей ползунков'
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
      id: 'SliderOrientation',
      name: {
        en: 'Orientation',
        ru: 'Ориентация'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Horizontal</div>
            <DesignComponent :value="40" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Vertical</div>
            <DesignComponent vertical :value="60" />
          </div>
        </div>
      `
    },
    {
      id: 'SliderMultiple',
      name: {
        en: 'Range selection',
        ru: 'Выбор диапазона'
      },
      template: `
        <DesignComponent multiple :minimumDistance="10" />
      `
    },
    {
      id: 'SliderMarks',
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
        <DesignComponent :marks="customMarks" magnet :step="5" />
      `
    },
    {
      id: 'SliderVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        sliderValue: ref(40)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: <strong>{{ sliderValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="sliderValue = 25">Set 25</button>
            <button class="wiki-storybook-button" @click="sliderValue = 75">Set 75</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="sliderValue = 0">Clear</button>
          </div>
          <DesignComponent v-model="sliderValue" :min="0" :max="100" />
        </div>
      `
    },
    {
      id: 'SliderSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton />
            <DesignComponent isSkeleton multiple />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Slider'} type={'slider'}/>
<Canvas of={Component.SliderOrientation}/>

<StorybookDescriptions componentName={'Slider'} type={'multiple'}/>
<Canvas of={Component.SliderMultiple}/>

<StorybookDescriptions componentName={'Slider'} type={'marks'}/>
<Canvas of={Component.SliderMarks}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.SliderVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SliderSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Slider'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Slider'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slider'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Slider component for numeric value and range selection through dragging thumbs or keyboard navigation.
Supports single value and dual-handle range selection modes (multiple), customizable min/max boundaries, step resolution, custom mark items with labels, and magnet position snapping.
Offers horizontal and vertical orientation options, disabled and readonly states, ripple effects, ARIA accessibility attributes, and slots for custom mark and thumb label rendering.
Emits input, inputLite, change, and changeLite events and exposes getValue, setValue, increase, decrease methods.
    `
  }
}
