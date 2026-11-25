import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FormattedNumber component properties
 *
 * Описания свойств компонента FormattedNumber
 */
export const wikiDescriptionsFormattedNumber: StorybookComponentsDescriptionItem = {
  name: 'FormattedNumber',
  description: {
    en: 'Inline formatted text component for displaying numbers, currencies, and units of measurement',
    ru: 'Компонент для отображения чисел, валют и единиц измерения с форматированием'
  },
  possibilities: {
    en: [
      'localized number formatting using GeoIntl',
      'currency formatting with code support and priority over unit',
      'unit of measurement formatting support',
      'optional formatting toggle (raw value output)',
      'custom language/locale configuration and reactive zero handling'
    ],
    ru: [
      'локализованное форматирование чисел с использованием GeoIntl',
      'форматирование валюты с поддержкой кодов и приоритетом над unit',
      'поддержка форматирования единиц измерения',
      'опциональное отключение форматирования (вывод исходного значения)',
      'настройка пользовательского языка/локали и корректная обработка нуля'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const formatted = canvasElement.querySelector('.design-component')
await expect(formatted).toBeInTheDocument()
await expect(formatted?.tagName).toBe('SPAN')
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'FormattedNumberBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent :value="1234567.89" language="en-US"/>
          <DesignComponent :value="1234567.89" currency="USD" language="en-US"/>
          <DesignComponent :value="1234567.89" unit="kilogram" language="en-US"/>
          <DesignComponent :value="1234567.89" :formatting="false"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)
await expect(items[0]).toHaveTextContent('1,234,567.89')
await expect(items[1]).toHaveTextContent('$1,234,567.89')
await expect(items[2]).toHaveTextContent('1,234,567.89 kg')
await expect(items[3]).toHaveTextContent('1234567.89')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (NOT in documentation)
    // =========================================================================
    {
      id: 'FormattedNumberTestBoundariesAndLocales',
      name: {
        en: 'Test: Zero values, currency priority, locales, non-finite and reactive updates',
        ru: 'Тест: Нулевые значения, приоритет валюты, локали, неконечные числа и реактивность'
      },
      propsName: ['value', 'currency', 'unit', 'formatting', 'language'],
      setup: `
      const currentValue = ref<number | string>(0)
      const currentLanguage = ref('en-US')
      const currentFormatting = ref(true)
      const switchLocale = () => {
        currentLanguage.value = 'de-DE'
      }
      const disableFormatting = () => {
        currentFormatting.value = false
      }
      return {
        currentValue,
        currentLanguage,
        currentFormatting,
        switchLocale,
        disableFormatting
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-group">
            <DesignComponent :value="0" currency="USD" language="en-US" data-testid="zero-currency"/>
            <DesignComponent :value="0" unit="kilogram" language="en-US" data-testid="zero-unit"/>
            <DesignComponent value="0" :formatting="false" data-testid="zero-raw"/>
            <DesignComponent :value="42" currency="USD" unit="kilogram" language="en-US" data-testid="currency-priority"/>
            <DesignComponent :value="Number.NaN" currency="USD" language="en-US" data-testid="nan-value"/>
            <DesignComponent :value="Number.POSITIVE_INFINITY" language="en-US" data-testid="infinity-value"/>
            <DesignComponent :value="undefined" data-testid="undefined-value"/>
          </div>
          <div class="wiki-storybook-flex">
            <DesignComponent
              :value="currentValue"
              currency="USD"
              :language="currentLanguage"
              :formatting="currentFormatting"
              data-testid="reactive-number"
            />
            <button class="wiki-storybook-button" type="button" @click="switchLocale">Switch de-DE</button>
            <button class="wiki-storybook-button" type="button" @click="disableFormatting">Raw Mode</button>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('zero-currency')).toHaveTextContent('$0.00')
await expect(canvas.getByTestId('zero-unit')).toHaveTextContent('0 kg')
await expect(canvas.getByTestId('zero-raw')).toHaveTextContent('0')
await expect(canvas.getByTestId('currency-priority')).toHaveTextContent('$42.00')
await expect(canvas.getByTestId('nan-value')).toHaveTextContent('NaN')
await expect(canvas.getByTestId('infinity-value')).toHaveTextContent('Infinity')
await expect(canvas.getByTestId('undefined-value')).toHaveTextContent('')

await step('Switch locale and toggle formatting off', async () => {
  await expect(canvas.getByTestId('reactive-number')).toHaveTextContent('$0.00')
  await userEvent.click(canvas.getByRole('button', { name: 'Switch de-DE' }))
  await expect(canvas.getByTestId('reactive-number')).toHaveTextContent('0,00')
  await userEvent.click(canvas.getByRole('button', { name: 'Raw Mode' }))
  await expect(canvas.getByTestId('reactive-number')).toHaveTextContent('0')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FormattedNumber'} type={'formattedNumber'}/>
<Canvas of={Component.FormattedNumberBasic}/>
    `
  },
  ai: {
    description: `
Low-level inline formatting component used to display numbers, currencies, and units. It dynamically resolves formatting based on localized settings and parameters.
    `
  }
}
