import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FormattedNumber from './D1FormattedNumber.vue'
import { FormattedNumberWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FormattedNumber',
  component: D1FormattedNumber,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FormattedNumberWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FormattedNumberWikiStorybook.getWiki(),
  args: FormattedNumberWikiStorybook.getValues()
} satisfies Meta<typeof D1FormattedNumber>

export default meta

type Story = StoryObj<typeof meta>

export const FormattedNumber: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1FormattedNumber },
    setup: () => ({ args }),
    template: `
      <D1FormattedNumber v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const formatted = canvasElement.querySelector('.d1-formattedNumber')
    await expect(formatted).toBeInTheDocument()
    await expect(formatted?.tagName).toBe('SPAN')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FormattedNumberBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1FormattedNumber },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1FormattedNumber :value="1234567.89" language="en-US"/>
          <D1FormattedNumber :value="1234567.89" currency="USD" language="en-US"/>
          <D1FormattedNumber :value="1234567.89" unit="kilogram" language="en-US"/>
          <D1FormattedNumber :value="1234567.89" :formatting="false"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-formattedNumber')
    await expect(items.length).toBe(4)
    await expect(items[0]).toHaveTextContent('1,234,567.89')
    await expect(items[1]).toHaveTextContent('$1,234,567.89')
    await expect(items[2]).toHaveTextContent('1,234,567.89 kg')
    await expect(items[3]).toHaveTextContent('1234567.89')
  }
}
export const FormattedNumberTestBoundariesAndLocales: Story = {
  name: 'Тест: Нулевые значения, приоритет валюты, локали, неконечные числа и реактивность',
  render: () => ({
    components: { D1FormattedNumber },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-group">
            <D1FormattedNumber :value="0" currency="USD" language="en-US" data-testid="zero-currency"/>
            <D1FormattedNumber :value="0" unit="kilogram" language="en-US" data-testid="zero-unit"/>
            <D1FormattedNumber value="0" :formatting="false" data-testid="zero-raw"/>
            <D1FormattedNumber :value="42" currency="USD" unit="kilogram" language="en-US" data-testid="currency-priority"/>
            <D1FormattedNumber :value="Number.NaN" currency="USD" language="en-US" data-testid="nan-value"/>
            <D1FormattedNumber :value="Number.POSITIVE_INFINITY" language="en-US" data-testid="infinity-value"/>
            <D1FormattedNumber :value="undefined" data-testid="undefined-value"/>
          </div>
          <div class="wiki-storybook-flex">
            <D1FormattedNumber
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
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
  }
}
// :story-items [!] System label / Системная метка
