import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Input from './D1Input.vue'
import { InputWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Input',
  component: D1Input,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputWikiStorybook.getWiki(),
  args: InputWikiStorybook.getValues()
} satisfies Meta<typeof D1Input>

export default meta

type Story = StoryObj<typeof meta>

export const Input: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Input },
    setup: () => ({ args }),
    template: `
      <D1Input v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputTypes: Story = {
  name: 'Типы ввода',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input type="text" label="Text" placeholder="Enter text" />
          <D1Input type="email" label="Email" placeholder="email@example.com" />
          <D1Input type="password" label="Password" placeholder="Enter password" />
          <D1Input type="number" label="Number" placeholder="0" />
          <D1Input type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <D1Input type="date" label="Date" />
          <D1Input type="search" label="Search" placeholder="Search..." />
        </div>
    `
  })
}
export const InputNumber: Story = {
  name: 'Форматирование чисел',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input type="number" value="1234567" label="Number" />
          <D1Input type="number-format" value="1234567" language="en-US" label="Formatted" />
          <D1Input type="number" value="50" :min="0" :max="100" label="From 0 to 100" />
          <D1Input type="number" value="10" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />
          <D1Input type="number-format" value="1234567.89" align="center" :fraction="2" label="Centered" />
        </div>
    `
  })
}
export const InputCurrency: Story = {
  name: 'Валюта и форматирование чисел',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
          />
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
            value="1234.56"
          />
          <D1Input
            type="currency"
            label="Price (EUR)"
            currency="EUR"
            value="1234.56"
          />
        </div>
    `
  })
}
export const InputMask: Story = {
  name: 'Маскированный ввод',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Phone" />
          <D1Input type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Card" />
          <D1Input type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="No placeholder" />
        </div>
    `
  })
}
export const InputDate: Story = {
  name: 'Дата и время',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input type="date" label="Date" language="ru-RU" />
          <D1Input type="datetime" label="Date and Time" language="en-US" />
          <D1Input type="year-month" label="Period" language="ru-RU" />
          <D1Input type="time" label="Time" />
          <D1Input type="hour-minute" label="Hours:Minutes" />
          <D1Input type="date" label="Limited Date" language="ru-RU" min="2024-01-01" max="2024-12-31" />
        </div>
    `
  })
}
export const InputVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Input },
    setup() {
      return {
        inputValue: ref('Initial value'),
        maskValue: ref(''),
        numberValue: ref(42)
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button" @click="inputValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />
          <div>Value: {{ inputValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="maskValue = '2022-05-13'">Set date</button>
            <button class="wiki-storybook-button" @click="maskValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="maskValue"
            type="date"
            label="Date input"
            value="2024-03-01"
          />
          <div>Mask: {{ maskValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <D1Input
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
          <div>Number: {{ numberValue }}</div>
        </div>
    `
  })
}
export const InputSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Input, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1Input
              isSkeleton
              label="Loading field"
              helperMessage="This field is loading..."
            />
            <D1Input
              isSkeleton
              label="Another field"
              counterShow
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
