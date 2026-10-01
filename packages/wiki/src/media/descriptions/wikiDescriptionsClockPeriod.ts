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
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'ClockPeriodVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const period = ref('am')
      return { period }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected period: {{ period }}</span>
            <button class="wiki-storybook-button" @click="period = 'am'">Set AM</button>
            <button class="wiki-storybook-button" @click="period = 'pm'">Set PM</button>
          </div>
          <DesignComponent v-model="period" />
        </div>
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
    `
  }
}
