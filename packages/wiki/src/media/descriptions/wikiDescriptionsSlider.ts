import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Slider component properties
 *
 * Описания свойств компонента Slider
 */
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
    'import { ref } from \'vue\'',
    'import type { SliderExpose } from \'@dxtmisha/constructor/Slider\''
  ],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const slider = canvasElement.querySelector('.design-component')
await expect(slider).toBeInTheDocument()
const thumb = canvasElement.querySelector('[role="slider"]')
await expect(thumb).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
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
            <DesignComponent :value="40"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Vertical</div>
            <DesignComponent vertical :value="60"/>
          </div>
        </div>
      `,
      play: `
const sliders = canvasElement.querySelectorAll('.design-component')
await expect(sliders.length).toBe(2)
await expect(sliders[1]).toHaveClass('design-component--vertical')
const verticalThumb = sliders[1].querySelector('[role="slider"]')
await expect(verticalThumb).toHaveAttribute('aria-orientation', 'vertical')
      `
    },
    {
      id: 'SliderMultiple',
      name: {
        en: 'Range selection',
        ru: 'Выбор диапазона'
      },
      template: `
        <DesignComponent multiple :minimumDistance="10"/>
      `,
      play: `
const thumbs = canvasElement.querySelectorAll('[role="slider"]')
await expect(thumbs.length).toBe(2)
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
          { value: 0, label: '0%' },
          { value: 25, label: '25%' },
          { value: 50, label: '50%' },
          { value: 75, label: '75%' },
          { value: 100, label: '100%' }
        ]
      }
      `,
      template: `
        <DesignComponent :marks="customMarks" magnet :step="5"/>
      `,
      play: `
const marks = canvasElement.querySelectorAll('.design-component__mark')
await expect(marks.length).toBe(5)
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
            <span data-testid="slider-vmodel-value">Current value: <strong>{{ sliderValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="sliderValue = 25">Set 25</button>
            <button class="wiki-storybook-button" @click="sliderValue = 75">Set 75</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="sliderValue = 0">Clear</button>
          </div>
          <DesignComponent v-model="sliderValue" :min="0" :max="100"/>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('slider-vmodel-value')).toHaveTextContent('40')
await step('Update v-model to 75 and 0', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set 75' }))
  await expect(canvas.getByTestId('slider-vmodel-value')).toHaveTextContent('75')
  await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
  await expect(canvas.getByTestId('slider-vmodel-value')).toHaveTextContent('0')
})
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
            <DesignComponent isSkeleton/>
            <DesignComponent isSkeleton multiple/>
          </div>
        </DesignSkeleton>
      `,
      play: `
const sliders = canvasElement.querySelectorAll('.design-component')
await expect(sliders.length).toBe(2)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'SliderTestStatesSlotsExpose',
      name: {
        en: 'Test: States, slots, hidden input, ARIA and expose methods',
        ru: 'Тест: Состояния, слоты, скрытый input, ARIA и методы expose'
      },
      propsName: ['disabled', 'readonly', 'selected', 'showThumbLabel', 'name', 'required', 'min', 'max', 'step', 'inputAttrs'],
      setup: `
      const sliderReference = ref<SliderExpose | null>(null)
      const controlledValue = ref<number>(0)
      const increaseValue = () => {
        sliderReference.value?.increase()
      }
      const decreaseValue = () => {
        sliderReference.value?.decrease()
      }
      return { sliderReference, controlledValue, increaseValue, decreaseValue }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="increaseValue">Increase</button>
            <button class="wiki-storybook-button" @click="decreaseValue">Decrease</button>
            <span data-testid="slider-controlled-value">{{ controlledValue }}</span>
          </div>
          <DesignComponent
            ref="sliderReference"
            v-model="controlledValue"
            name="level"
            required
            :min="-50"
            :max="50"
            :step="10"
            :inputAttrs="{ 'data-testid': 'slider-hidden-input' }"
          />
          <DesignComponent :value="40" disabled/>
          <DesignComponent :value="60" readonly selected :showThumbLabel="false"/>
          <DesignComponent :value="[20, 80]" multiple showThumbLabel>
            <template #minLabel="{ value }"><span>Min {{ value }}</span></template>
            <template #maxLabel="{ value }"><span>Max {{ value }}</span></template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const hiddenInput = canvas.getByTestId('slider-hidden-input')
await expect(hiddenInput).toHaveAttribute('value', '0')
await expect(hiddenInput).toHaveAttribute('name', 'level')

const sliders = canvasElement.querySelectorAll('.design-component')
await expect(sliders.length).toBe(4)
await expect(sliders[1].querySelector('[role="slider"]')).toHaveAttribute('aria-disabled', 'true')
await expect(sliders[2].querySelector('[role="slider"]')).toHaveAttribute('aria-readonly', 'true')
await expect(sliders[3]).toHaveTextContent('Min 20')
await expect(sliders[3]).toHaveTextContent('Max 80')

await step('Increase and decrease via expose methods', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Increase' }))
  await expect(canvas.getByTestId('slider-controlled-value')).toHaveTextContent('10')
  await userEvent.click(canvas.getByRole('button', { name: 'Decrease' }))
  await expect(canvas.getByTestId('slider-controlled-value')).toHaveTextContent('0')
})
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
