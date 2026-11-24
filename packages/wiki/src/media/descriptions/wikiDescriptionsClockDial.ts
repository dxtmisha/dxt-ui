import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ClockDial component
 *
 * Описания свойств компонента ClockDial
 */
export const wikiDescriptionsClockDial: StorybookComponentsDescriptionItem = {
  name: 'ClockDial',
  description: {
    en: 'An interactive circular clock dial component for picking and displaying hours, minutes, and seconds',
    ru: 'Интерактивный компонент круглого циферблата часов для выбора и отображения часов, минут и секунд'
  },
  possibilities: {
    en: [
      '12-hour, 24-hour dual-tier, 60-minute, and 60-second dial layouts',
      'interactive continuous drag and coordinate-based pointer selection',
      'analog clock display mode with hour, minute, and second hands via clock and showTime props',
      'range and step constraints (min, max, step)',
      'two-way data binding support via v-model',
      'custom slot support for tick mark rendering and central content',
      'disabled and readonly states handling with WAI-ARIA slider semantics',
      'keyboard navigation support (Arrow keys, Home, End)'
    ],
    ru: [
      'раскладки циферблата на 12 часов, 24 часа в два ряда, 60 минут и 60 секунд',
      'интерактивное плавное перетаскивание и выбор деления по координатам',
      'режим отображения аналоговых часов со стрелками через свойства clock и showTime',
      'ограничения диапазона и шага (min, max, step)',
      'двусторонняя привязка данных через v-model',
      'поддержка пользовательских слотов для меток делений и центральной области',
      'состояния отключения (disabled) и только для чтения (readonly) с семантикой WAI-ARIA slider',
      'поддержка клавиатурной навигации (стрелки, Home, End)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { ClockDialEventItem } from \'@dxtmisha/constructor/ClockDial\''
  ],
  render: `
      <DesignComponent v-bind="args" />
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ClockDialType',
      name: {
        en: 'Dial types and constraints',
        ru: 'Типы циферблата и ограничения'
      },
      propsName: ['type', 'value', 'min', 'max', 'step'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">12-Hour</div>
            <DesignComponent type="12" :value="10" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">24-Hour (min: 9, max: 18)</div>
            <DesignComponent
              type="24"
              :value="16"
              :min="9"
              :max="18"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Minute (step: 5)</div>
            <DesignComponent
              type="minute"
              :value="45"
              :step="5"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Second</div>
            <DesignComponent type="second" :value="30" />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)
await expect(items[0]).toHaveClass('design-component--type--12')
await expect(items[1]).toHaveClass('design-component--type--24')
await expect(items[1]).toHaveClass('design-component--section')
await expect(items[2]).toHaveClass('design-component--type--minute')
await expect(items[3]).toHaveClass('design-component--type--second')
      `
    },
    {
      id: 'ClockDialVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      propsName: ['modelValue', 'type'],
      setup: `
      const hour = ref(9)
      return { hour }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="clock-dial-vmodel-value">Selected hour: {{ hour }}</span>
            <button class="wiki-storybook-button" @click="hour = 12">Set 12</button>
            <button class="wiki-storybook-button" @click="hour = 6">Set 6</button>
          </div>
          <DesignComponent
            v-model="hour"
            type="12"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await step('Verify initial value and update via buttons', async () => {
  await expect(canvas.getByTestId('clock-dial-vmodel-value')).toHaveTextContent('Selected hour: 9')
  await userEvent.click(canvas.getByText('Set 12'))
  await expect(canvas.getByTestId('clock-dial-vmodel-value')).toHaveTextContent('Selected hour: 12')
  await userEvent.click(canvas.getByText('Set 6'))
  await expect(canvas.getByTestId('clock-dial-vmodel-value')).toHaveTextContent('Selected hour: 6')
})
      `
    },
    {
      id: 'ClockDialClock',
      name: {
        en: 'Clock mode with hands',
        ru: 'Режим часов со стрелками'
      },
      propsName: ['clock', 'showTime', 'hour', 'minute', 'second'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">10:15:30</div>
            <DesignComponent
              clock
              type="12"
              :hour="10"
              :minute="15"
              :second="30"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">showTime</div>
            <DesignComponent
              clock
              show-time
              type="12"
              :hour="10"
              :minute="15"
              :second="30"
            />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
await expect(items[0].querySelector('.design-component__arrowHour')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__arrowMinute')).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__arrowSecond')).toBeInTheDocument()
await expect(items[1].querySelector('.design-component__dial')).toHaveTextContent('10:15:30')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA — Constructor Props Only)
    // =========================================================================
    {
      id: 'ClockDialTestStates',
      name: {
        en: 'Test: Disabled, readonly, and range constraints',
        ru: 'Тест: Отключённое, только для чтения и ограничения диапазона'
      },
      propsName: ['disabled', 'readonly', 'min', 'max', 'step', 'value'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">disabled</div>
            <DesignComponent type="12" :value="6" disabled />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">readonly</div>
            <DesignComponent type="12" :value="9" readonly />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">min 3 max 9 step 2</div>
            <DesignComponent type="12" :value="5" :min="3" :max="9" :step="2" />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).toHaveClass('design-component--disabled')
await expect(items[0]).toHaveAttribute('aria-disabled', 'true')
await expect(items[1]).toHaveClass('design-component--readonly')
await expect(items[1]).toHaveAttribute('aria-readonly', 'true')
const disabledMark = items[2].querySelector('[data-value="1"]')
await expect(disabledMark).toHaveClass('design-component__value--disabled')
      `
    },
    {
      id: 'ClockDialTestSlotsAndEvents',
      name: {
        en: 'Test: Slots, events, and expose API',
        ru: 'Тест: Слоты, события и expose API'
      },
      propsName: ['value', 'type'],
      setup: `
      const dialRef = ref<{ getValue: () => number | undefined, setValue: (value?: number) => void }>()
      const lastEvent = ref('')
      const currentValue = ref(3)
      const onChange = (_event: ClockDialEventItem, value: number) => {
        lastEvent.value = 'change:' + value
      }
      const setZero = () => {
        dialRef.value?.setValue(0)
      }
      return { dialRef, lastEvent, currentValue, onChange, setZero }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="clock-dial-test-event">{{ lastEvent }}</span>
            <span data-testid="clock-dial-test-value">{{ currentValue }}</span>
            <button class="wiki-storybook-button" @click="setZero">Set Zero</button>
          </div>
          <DesignComponent
            ref="dialRef"
            v-model="currentValue"
            type="24"
            @change="onChange"
          >
            <template #default>CENTER</template>
            <template #item="{ item }">{{ item.value }}h</template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const dial = canvasElement.querySelector('.design-component')
await expect(dial?.querySelector('.design-component__dial')).toHaveTextContent('CENTER')
await expect(dial?.querySelector('[data-value="3"]')).toHaveTextContent('3h')
await userEvent.click(canvas.getByText('Set Zero'))
await expect(canvas.getByTestId('clock-dial-test-value')).toHaveTextContent('0')
const markNine = dial?.querySelector('[data-value="9"]') as HTMLElement | null
if (markNine) {
  await fireEvent.click(markNine)
}
await expect(canvas.getByTestId('clock-dial-test-event')).toHaveTextContent('change:9')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ClockDial'} type={'clockDial'}/>

<StorybookDescriptions componentName={'ClockDial'} type={'type'}/>
<Canvas of={Component.ClockDialType}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.ClockDialVModel}/>

<StorybookDescriptions componentName={'ClockDial'} type={'hands'}/>
<Canvas of={Component.ClockDialClock}/>
    `,
    events: `
<StorybookDescriptions componentName={'ClockDial'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'ClockDial'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ClockDial'} type={'slots'}/>
    `
  },
  ai: {
    description: `
An interactive circular clock dial component for picking and displaying hours, minutes, and seconds.
Supports 12-hour, 24-hour, minute, and second dials, interactive pointer rotation, coordinate-based mark resolution, time hands with clock mode, and min/max/step constraints.
    `,
    hide: true
  }
}
