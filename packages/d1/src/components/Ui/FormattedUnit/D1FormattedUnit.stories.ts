import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FormattedUnit from './D1FormattedUnit.vue'
import { FormattedUnitWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FormattedUnit',
  component: D1FormattedUnit,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FormattedUnitWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FormattedUnitWikiStorybook.getWiki(),
  args: FormattedUnitWikiStorybook.getValues()
} satisfies Meta<typeof D1FormattedUnit>

export default meta

type Story = StoryObj<typeof meta>

export const FormattedUnit: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1FormattedUnit },
    setup: () => ({ args }),
    template: `
      <D1FormattedUnit v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const formatted = canvasElement.querySelector('.d1-formattedUnit')
    await expect(formatted).toBeInTheDocument()
    await expect(formatted?.tagName).toBe('SPAN')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FormattedUnitBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1FormattedUnit },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="celsius" language="ru-RU"/> →
            <D1FormattedUnit :value="100" unit="celsius" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="1000" unit="gram" language="ru-RU"/> →
            <D1FormattedUnit :value="1000" unit="gram" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="kilometer-per-hour" language="en-US"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-formattedUnit')
    await expect(items.length).toBe(5)
    await expect(items[0]).toHaveTextContent('100 °C')
    await expect(items[1]).toHaveTextContent('212°F')
    await expect(items[2]).toHaveTextContent('1 000 г')
    await expect(items[3]).toHaveTextContent('35.274 oz')
    await expect(items[4]).toHaveTextContent('62.137 mph')
  }
}
export const FormattedUnitTestUnitsAndLocales: Story = {
  name: 'Тест: Поддерживаемые единицы, локали, числовые форматы и сырой режим',
  render: () => ({
    components: { D1FormattedUnit },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">kilometer (en-US / de-DE / ru-RU)</div>
            <D1FormattedUnit :value="10" unit="kilometer" language="en-US" data-testid="km-en"/>
            <D1FormattedUnit :value="10" unit="kilometer" language="de-DE" data-testid="km-de"/>
            <D1FormattedUnit :value="10" unit="kilometer" language="ru-RU" data-testid="km-ru"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">gram numeric string &amp; liter &amp; square-meter</div>
            <D1FormattedUnit value="250" unit="gram" language="en-US" data-testid="gram-string-en"/>
            <D1FormattedUnit :value="5" unit="liter" language="en-US" data-testid="liter-en"/>
            <D1FormattedUnit :value="5" unit="liter" language="de-DE" data-testid="liter-de"/>
            <D1FormattedUnit :value="10" unit="square-meter" language="en-US" data-testid="sqm-en"/>
            <D1FormattedUnit :value="10" unit="square-meter" language="de-DE" data-testid="sqm-de"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">negative, decimal &amp; formatting=false</div>
            <D1FormattedUnit :value="-40" unit="celsius" language="en-US" data-testid="neg-celsius-en"/>
            <D1FormattedUnit :value="12.345" unit="celsius" language="ru-RU" data-testid="dec-celsius-ru"/>
            <D1FormattedUnit :value="12.345" unit="celsius" language="de-DE" data-testid="dec-celsius-de"/>
            <D1FormattedUnit :value="12.345" unit="celsius" language="en-US" :formatting="false" data-testid="raw-decimal"/>
            <D1FormattedUnit value="250" unit="gram" language="en-US" :formatting="false" data-testid="raw-string"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const FormattedUnitTestBoundariesAndReactive: Story = {
  name: 'Тест: Граничные значения, неизвестные единицы и реактивное переключение',
  render: () => ({
    components: { D1FormattedUnit },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-group">
            <D1FormattedUnit :value="0" unit="celsius" language="en-US" data-testid="zero-number"/>
            <D1FormattedUnit value="0" unit="celsius" language="ru-RU" data-testid="zero-string"/>
            <D1FormattedUnit :value="0" unit="gram" :formatting="false" data-testid="zero-raw"/>
            <D1FormattedUnit value="" unit="celsius" language="en-US" data-testid="empty-string"/>
            <D1FormattedUnit :value="undefined" unit="celsius" language="en-US" data-testid="undefined-value"/>
            <D1FormattedUnit :value="100" unit="unknown-unit" language="en-US" data-testid="unknown-unit"/>
            <D1FormattedUnit :value="100" language="en-US" data-testid="missing-unit"/>
          </div>
          <div class="wiki-storybook-flex">
            <D1FormattedUnit
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
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
  }
}
// :story-items [!] System label / Системная метка
