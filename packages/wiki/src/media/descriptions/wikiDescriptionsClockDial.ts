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
      'analog clock display mode with hour, minute, and second hands via clock prop',
      'range and step constraints (min, max, step)',
      'two-way data binding support via v-model',
      'custom slot support for tick mark rendering and central content',
      'disabled and readonly states handling',
      'theme palette styling support'
    ],
    ru: [
      'раскладки циферблата на 12 часов, 24 часа в два ряда, 60 минут и 60 секунд',
      'интерактивное плавное перетаскивание и выбор деления по координатам',
      'режим отображения аналоговых часов со стрелками через свойство clock',
      'ограничения диапазона и шага (min, max, step)',
      'двусторонняя привязка данных через v-model',
      'поддержка пользовательских слотов для меток делений и центральной области',
      'состояния отключения (disabled) и только для чтения (readonly)',
      'поддержка цветовых палитр темы'
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
      id: 'ClockDialType',
      name: {
        en: 'Dial types and constraints',
        ru: 'Типы циферблата и ограничения'
      },
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
      `
    },
    {
      id: 'ClockDialVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const hour = ref(9)
      return { hour }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected hour: {{ hour }}</span>
            <button class="wiki-storybook-button" @click="hour = 12">Set 12</button>
            <button class="wiki-storybook-button" @click="hour = 6">Set 6</button>
          </div>
          <DesignComponent
            v-model="hour"
            type="12"
          />
        </div>
      `
    },
    {
      id: 'ClockDialClock',
      name: {
        en: 'Clock mode with hands',
        ru: 'Режим часов со стрелками'
      },
      template: `
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
    `
  }
}
