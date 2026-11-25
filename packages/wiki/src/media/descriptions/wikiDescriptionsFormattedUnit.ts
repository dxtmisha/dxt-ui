import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for FormattedUnit component properties
 *
 * Описания свойств компонента FormattedUnit
 */
export const wikiDescriptionsFormattedUnit: StorybookComponentsDescriptionItem = {
  name: 'FormattedUnit',
  description: {
    en: 'Inline formatted text component for displaying and automatically converting units of measurement',
    ru: 'Компонент для отображения и автоматической конвертации единиц измерения с форматированием'
  },
  possibilities: {
    en: [
      'automatic metric-to-customary unit conversion based on country locale (e.g. Celsius to Fahrenheit, grams to ounces)',
      'localized unit formatting using GeoUnit',
      'optional formatting toggle (raw value output)',
      'custom language/locale configuration'
    ],
    ru: [
      'автоматическая конвертация метрических единиц в традиционные на основе локали страны (например, Цельсий в Фаренгейт, граммы в унции)',
      'локализованное форматирование единиц с использованием GeoUnit',
      'опциональное отключение форматирования (вывод исходного значения)',
      'настройка пользовательского языка/локали'
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
      id: 'FormattedUnitBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-row-gap">
            <DesignComponent :value="100" unit="celsius" language="ru-RU"/> →
            <DesignComponent :value="100" unit="celsius" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <DesignComponent :value="1000" unit="gram" language="ru-RU"/> →
            <DesignComponent :value="1000" unit="gram" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <DesignComponent :value="100" unit="kilometer-per-hour" language="en-US"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)
await expect(items[0]).toHaveTextContent('100 °C')
await expect(items[1]).toHaveTextContent('212°F')
await expect(items[2]).toHaveTextContent('1 000 г')
await expect(items[3]).toHaveTextContent('35.274 oz')
await expect(items[4]).toHaveTextContent('62.137 mph')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (NOT in documentation)
    // =========================================================================
    {
      id: 'FormattedUnitTestUnitsAndLocales',
      name: {
        en: 'Test: Supported units, locales, numeric formats and raw mode',
        ru: 'Тест: Поддерживаемые единицы, локали, числовые форматы и сырой режим'
      },
      propsName: ['value', 'unit', 'language', 'formatting'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">kilometer (en-US / de-DE / ru-RU)</div>
            <DesignComponent :value="10" unit="kilometer" language="en-US" data-testid="km-en"/>
            <DesignComponent :value="10" unit="kilometer" language="de-DE" data-testid="km-de"/>
            <DesignComponent :value="10" unit="kilometer" language="ru-RU" data-testid="km-ru"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">gram numeric string &amp; liter &amp; square-meter</div>
            <DesignComponent value="250" unit="gram" language="en-US" data-testid="gram-string-en"/>
            <DesignComponent :value="5" unit="liter" language="en-US" data-testid="liter-en"/>
            <DesignComponent :value="5" unit="liter" language="de-DE" data-testid="liter-de"/>
            <DesignComponent :value="10" unit="square-meter" language="en-US" data-testid="sqm-en"/>
            <DesignComponent :value="10" unit="square-meter" language="de-DE" data-testid="sqm-de"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">negative, decimal &amp; formatting=false</div>
            <DesignComponent :value="-40" unit="celsius" language="en-US" data-testid="neg-celsius-en"/>
            <DesignComponent :value="12.345" unit="celsius" language="ru-RU" data-testid="dec-celsius-ru"/>
            <DesignComponent :value="12.345" unit="celsius" language="de-DE" data-testid="dec-celsius-de"/>
            <DesignComponent :value="12.345" unit="celsius" language="en-US" :formatting="false" data-testid="raw-decimal"/>
            <DesignComponent value="250" unit="gram" language="en-US" :formatting="false" data-testid="raw-string"/>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await expect(canvas.getByTestId('km-en')).toHaveTextContent('6.214 mi')
await expect(canvas.getByTestId('km-de')).toHaveTextContent('10 km')
await expect(canvas.getByTestId('km-ru')).toHaveTextContent('10 км')

await expect(canvas.getByTestId('gram-string-en')).toHaveTextContent('8.818 oz')
await expect(canvas.getByTestId('liter-en')).toHaveTextContent('1.321 gal')
await expect(canvas.getByTestId('liter-de')).toHaveTextContent('5 l')
await expect(canvas.getByTestId('sqm-en')).toHaveTextContent('107.639 sq ft')
await expect(canvas.getByTestId('sqm-de')).toHaveTextContent('10 m²')

await expect(canvas.getByTestId('neg-celsius-en')).toHaveTextContent('-40°F')
await expect(canvas.getByTestId('dec-celsius-ru')).toHaveTextContent('12,345 °C')
await expect(canvas.getByTestId('dec-celsius-de')).toHaveTextContent('12,345 °C')
await expect(canvas.getByTestId('raw-decimal')).toHaveTextContent('12.345')
await expect(canvas.getByTestId('raw-string')).toHaveTextContent('250')
      `
    },
    {
      id: 'FormattedUnitTestBoundariesAndReactive',
      name: {
        en: 'Test: Boundary inputs, unknown units and reactive switching',
        ru: 'Тест: Граничные значения, неизвестные единицы и реактивное переключение'
      },
      propsName: ['value', 'unit', 'language', 'formatting'],
      setup: `
      const currentValue = ref<number | string>(100)
      const currentUnit = ref('celsius')
      const currentLanguage = ref('en-US')
      const currentFormatting = ref(true)

      const switchValue = () => {
        currentValue.value = '25'
      }
      const switchUnit = () => {
        currentUnit.value = 'kilometer'
      }
      const switchLocale = () => {
        currentLanguage.value = 'ru-RU'
      }
      const toggleFormatting = () => {
        currentFormatting.value = !currentFormatting.value
      }

      return {
        currentValue,
        currentUnit,
        currentLanguage,
        currentFormatting,
        switchValue,
        switchUnit,
        switchLocale,
        toggleFormatting
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-group">
            <DesignComponent :value="0" unit="celsius" language="en-US" data-testid="zero-number"/>
            <DesignComponent value="0" unit="celsius" language="ru-RU" data-testid="zero-string"/>
            <DesignComponent :value="0" unit="gram" :formatting="false" data-testid="zero-raw"/>
            <DesignComponent value="" unit="celsius" language="en-US" data-testid="empty-string"/>
            <DesignComponent :value="undefined" unit="celsius" language="en-US" data-testid="undefined-value"/>
            <DesignComponent :value="100" unit="unknown-unit" language="en-US" data-testid="unknown-unit"/>
            <DesignComponent :value="100" language="en-US" data-testid="missing-unit"/>
          </div>
          <div class="wiki-storybook-flex">
            <DesignComponent
              :value="currentValue"
              :unit="currentUnit"
              :language="currentLanguage"
              :formatting="currentFormatting"
              data-testid="reactive-unit"
            />
            <button class="wiki-storybook-button" type="button" @click="switchValue">Set 25</button>
            <button class="wiki-storybook-button" type="button" @click="switchUnit">Switch Kilometer</button>
            <button class="wiki-storybook-button" type="button" @click="switchLocale">Switch ru-RU</button>
            <button class="wiki-storybook-button" type="button" @click="toggleFormatting">Toggle Formatting</button>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await expect(canvas.getByTestId('zero-number')).toHaveTextContent('32°F')
await expect(canvas.getByTestId('zero-string')).toHaveTextContent('0 °C')
await expect(canvas.getByTestId('zero-raw')).toHaveTextContent('0')
await expect(canvas.getByTestId('empty-string')).toHaveTextContent('')
await expect(canvas.getByTestId('undefined-value')).toHaveTextContent('')
await expect(canvas.getByTestId('unknown-unit')).toHaveTextContent('100')
await expect(canvas.getByTestId('missing-unit')).toHaveTextContent('100')

await expect(canvas.getByTestId('reactive-unit')).toHaveTextContent('212°F')

await step('Switch reactive value to string 25', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set 25' }))
  await waitFor(() => {
    expect(canvas.getByTestId('reactive-unit')).toHaveTextContent('77°F')
  })
})

await step('Switch unit to kilometer', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Switch Kilometer' }))
  await waitFor(() => {
    expect(canvas.getByTestId('reactive-unit')).toHaveTextContent('15.534 mi')
  })
})

await step('Switch locale to ru-RU', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Switch ru-RU' }))
  await waitFor(() => {
    expect(canvas.getByTestId('reactive-unit')).toHaveTextContent('25 км')
  })
})

await step('Toggle formatting off and back on', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Toggle Formatting' }))
  await waitFor(() => {
    expect(canvas.getByTestId('reactive-unit')).toHaveTextContent('25')
  })
  await userEvent.click(canvas.getByRole('button', { name: 'Toggle Formatting' }))
  await waitFor(() => {
    expect(canvas.getByTestId('reactive-unit')).toHaveTextContent('25 км')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FormattedUnit'} type={'formattedUnit'}/>
<Canvas of={Component.FormattedUnitBasic}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent :value="100" unit="celsius" language="en-US" v-bind="args"/>
</div>
    `,
    description: `
Low-level inline formatting component used to display and automatically convert units of measurement (like celsius, gram, kilometer-per-hour) according to the user locale.
    `
  }
}
