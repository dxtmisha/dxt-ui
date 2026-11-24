import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ClockPeriod component
 *
 * Описания свойств компонента ClockPeriod
 */
export const wikiDescriptionsClockPeriod: StorybookComponentsDescriptionItem = {
  name: 'ClockPeriod',
  description: {
    en: 'Selector component for switching between AM and PM time periods in 12-hour format',
    ru: 'Компонент селектора для переключения между периодами времени AM и PM в 12-часовом формате'
  },
  possibilities: {
    en: [
      'AM and PM binary time period selection',
      'two-way data binding support via v-model',
      'automatic period resolution from 24-hour hour values',
      'vertical and horizontal layout orientations',
      'keyboard navigation support (Arrow keys, Space, Enter)',
      'custom labels for AM and PM periods',
      'disabled and readonly states handling',
      'accessible radiogroup semantics'
    ],
    ru: [
      'выбор бинарного периода времени AM и PM',
      'двусторонняя привязка данных через v-model',
      'автоматическое определение периода по 24-часовому значению часа',
      'вертикальная и горизонтальная ориентация разметки',
      'поддержка клавиатурной навигации (стрелки, Пробел, Enter)',
      'пользовательские подписи для периодов AM и PM',
      'состояния отключения (disabled) и только для чтения (readonly)',
      'доступная семантика группы переключателей (radiogroup)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import { ClockPeriodType } from \'@dxtmisha/constructor/ClockPeriod\''
  ],
  render: `
      <DesignComponent v-bind="args" />
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component).toHaveAttribute('role', 'radiogroup')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ClockPeriodVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      propsName: ['modelValue', 'orientation'],
      setup: `
      const period = ref<ClockPeriodType>(ClockPeriodType.am)
      return { period, ClockPeriodType }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="clock-period-vmodel-value">Selected period: {{ period }}</span>
            <button class="wiki-storybook-button" @click="period = ClockPeriodType.am">Set AM</button>
            <button class="wiki-storybook-button" @click="period = ClockPeriodType.pm">Set PM</button>
          </div>
          <DesignComponent v-model="period" />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('clock-period-vmodel-value')).toHaveTextContent('Selected period: am')
await userEvent.click(canvas.getByText('Set PM'))
await expect(canvas.getByTestId('clock-period-vmodel-value')).toHaveTextContent('Selected period: pm')
await userEvent.click(canvas.getByText('Set AM'))
await expect(canvas.getByTestId('clock-period-vmodel-value')).toHaveTextContent('Selected period: am')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA — Constructor Props Only)
    // =========================================================================
    {
      id: 'ClockPeriodTestStatesAndOrientations',
      name: {
        en: 'Test: Orientations, custom labels, disabled and readonly states',
        ru: 'Тест: Ориентации, пользовательские подписи, disabled и readonly'
      },
      propsName: ['orientation', 'value', 'textAm', 'textPm', 'disabled', 'readonly'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">horizontal</div>
            <DesignComponent orientation="horizontal" value="pm" text-am="Morning" text-pm="Evening" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">disabled</div>
            <DesignComponent value="am" disabled />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">readonly</div>
            <DesignComponent value="pm" readonly />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).toHaveClass('design-component--orientation--horizontal')
await expect(items[0].querySelector('[data-value="am"]')).toHaveTextContent('Morning')
await expect(items[0].querySelector('[data-value="pm"]')).toHaveTextContent('Evening')
await expect(items[1]).toHaveClass('design-component--disabled')
await expect(items[1]).toHaveAttribute('aria-disabled', 'true')
await expect(items[2]).toHaveClass('design-component--readonly')
await expect(items[2]).toHaveAttribute('aria-readonly', 'true')
      `
    },
    {
      id: 'ClockPeriodTestExposeAndEvents',
      name: {
        en: 'Test: Click events, keyboard navigation, and expose API',
        ru: 'Тест: События клика, клавиатурная навигация и expose API'
      },
      propsName: ['modelValue'],
      setup: `
      const periodRef = ref<{ get: () => ClockPeriodType | undefined, set: (value?: ClockPeriodType) => void, setByHour: (hour?: number) => void }>()
      const periodValue = ref<ClockPeriodType>(ClockPeriodType.am)
      const clickedValue = ref('')
      const onClickLite = (value: EventClickValue) => {
        clickedValue.value = String(value.value)
      }
      const applyEvening = () => {
        periodRef.value?.setByHour(20)
      }
      return { periodRef, periodValue, clickedValue, onClickLite, applyEvening }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="clock-period-test-val">{{ periodValue }}</span>
            <span data-testid="clock-period-test-click">{{ clickedValue }}</span>
            <button class="wiki-storybook-button" @click="applyEvening">Set Hour 20</button>
          </div>
          <DesignComponent
            ref="periodRef"
            v-model="periodValue"
            orientation="horizontal"
            @click-lite="onClickLite"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await userEvent.click(canvas.getByText('Set Hour 20'))
await expect(canvas.getByTestId('clock-period-test-val')).toHaveTextContent('pm')
const amButton = canvasElement.querySelector('[data-value="am"]') as HTMLElement | null
if (amButton) {
  await userEvent.click(amButton)
}
await expect(canvas.getByTestId('clock-period-test-val')).toHaveTextContent('am')
await expect(canvas.getByTestId('clock-period-test-click')).toHaveTextContent('am')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ClockPeriod'} type={'clockPeriod'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.ClockPeriodVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'ClockPeriod'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'ClockPeriod'} type={'expose'}/>
    `
  },
  ai: {
    description: `
Selector component for switching between AM (ante meridiem) and PM (post meridiem) time periods in 12-hour format.
Supports automatic period resolution by hour (0..23), two-way v-model binding, vertical and horizontal orientations, accessible radiogroup keyboard navigation, and custom text labels.
    `,
    hide: true
  }
}
