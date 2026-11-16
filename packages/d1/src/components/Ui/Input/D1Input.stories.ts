import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Input from './D1Input.vue'
import { InputWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import { expect, userEvent } from 'storybook/test'
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
      <div class="wiki-storybook-group">
        <D1Input
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
          v-bind="args"
        />
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-input')
    const inputElement = canvasElement.querySelector<HTMLInputElement>('input')
    await expect(component).toBeInTheDocument()
    await expect(inputElement).toBeInTheDocument()
  }
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
  }),
  play: async ({ canvasElement, step }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await expect(inputs.length).toBe(7)
    await step('Type into text input', async () => {
      await userEvent.click(inputs[0])
      await userEvent.type(inputs[0], 'Hello')
    })
    await expect(inputs[0].value).toBe('Hello')
  }
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
  }),
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await expect(inputs.length).toBe(5)
    await expect(inputs[1].value).toMatch(/1[\s,\u00a0]234[\s,\u00a0]567/)
    await expect(inputs[4].value).toMatch(/1[\s,\u00a0]234[\s,\u00a0]567[.,]89/)
  }
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
            language="en-US"
          />
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
            language="en-US"
            value="1234.56"
          />
          <D1Input
            type="currency"
            label="Price (currency-hide)"
            currency="EUR"
            currency-hide
            language="en-US"
            value="1234.56"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await expect(inputs.length).toBe(3)
    await expect(inputs[1].value).toMatch(/1[\s,\u00a0]234[.,]56/)
    await expect(inputs[2].value).toMatch(/1[\s,\u00a0]234[.,]56/)
    await expect(inputs[2].value).not.toContain('€')
  }
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
  }),
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await expect(inputs.length).toBe(6)
  }
}
export const InputMask: Story = {
  name: 'Маскированный ввод',
  render: () => ({
    components: { D1Input },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Input type="tel" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" label="Phone" />
          <D1Input type="text" mask="**** **** **** ****" placeholder="0000 0000 0000 0000" label="Card" />
          <D1Input type="tel" mask="+1 (***) ***-****" :mask-visible="false" label="No placeholder" />
          <D1Input type="text" mask="****-****" :mask-none="true" value="raw-123" label="Mask disabled" />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await expect(inputs.length).toBe(4)
    await expect(inputs[3].value).toBe('raw-123')
    await step('Type into phone mask', async () => {
      await userEvent.click(inputs[0])
      await userEvent.type(inputs[0], '5551234567')
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    await expect(inputs[0].value).toContain('+1 (555) 123-4567')
  }
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
            <span data-testid="text-value">Current value: {{ inputValue }}</span>
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="inputValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />

          <div class="wiki-storybook-flex">
            <span data-testid="date-value">Current value: {{ maskValue }}</span>
            <button class="wiki-storybook-button" @click="maskValue = '2022-05-13'">Set date</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="maskValue = ''">Clear</button>
          </div>
          <D1Input
            v-model="maskValue"
            type="date"
            label="Date input"
          />

          <div class="wiki-storybook-flex">
            <span data-testid="number-value">Current value: {{ numberValue }}</span>
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <D1Input
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const setTextBtn = Array.from(canvasElement.querySelectorAll('button')).find(b => b.textContent === 'Set text')
    const plusBtn = Array.from(canvasElement.querySelectorAll('button')).find(b => b.textContent === '+10')
    await step('Update reactive v-model via buttons', async () => {
      await userEvent.click(setTextBtn!)
      await userEvent.click(plusBtn!)
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    await expect(canvasElement.querySelector('[data-testid="text-value"]')).toHaveTextContent('Changed value')
    await expect(canvasElement.querySelector('[data-testid="number-value"]')).toHaveTextContent('52')
  }
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
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-input')
    await expect(items.length).toBe(2)
  }
}
export const InputTestPasswordAndZero: Story = {
  name: 'Тест: Переключатель пароля и числовой ноль',
  render: () => ({
    components: { D1Input },
    setup() {
      return {
        zeroValue: ref(0)
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="password"
            value="Secret123"
            label="Password"
            text-show="Show secret"
            text-hide="Hide secret"
          />
          <D1Input
            type="number"
            v-model="zeroValue"
            label="Zero Value"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await expect(inputs.length).toBe(2)
    await expect(inputs[0].type).toBe('password')
    await expect(inputs[1].value).toBe('0')

    const toggleBtn = canvasElement.querySelector<HTMLElement>('[aria-label="Show secret"]')
    await expect(toggleBtn).toBeInTheDocument()
    await step('Toggle password visibility on and off', async () => {
      await userEvent.click(toggleBtn!)
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    await expect(inputs[0].type).toBe('text')
    await expect(canvasElement.querySelector('[aria-label="Hide secret"]')).toBeInTheDocument()
  }
}
export const InputTestValidationAndMatch: Story = {
  name: 'Тест: Валидация, pattern и совпадение (match)',
  render: () => ({
    components: { D1Input },
    setup() {
      return {
        password: ref('Secret123'),
        confirm: ref('Secret')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Input
            label="Pattern Check"
            pattern="[A-Za-z]+"
            :validation-code="{ patternMismatch: 'Letters only allowed' }"
            value="123"
          />
          <D1Input
            label="Forced Error"
            validation-message="Server validation error"
            force-show-message
            value="bad"
          />
          <D1Input
            label="Password Source"
            name="story-password-source"
            type="password"
            v-model="password"
          />
          <D1Input
            label="Confirm Password"
            type="password"
            v-model="confirm"
            match="[name='story-password-source']"
            text-entries-match="Passwords do not match"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    await new Promise(resolve => setTimeout(resolve, 80))
    await expect(canvasElement.textContent).toContain('Letters only allowed')
    await expect(canvasElement.textContent).toContain('Server validation error')
    await expect(canvasElement.textContent).toContain('Passwords do not match')

    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await step('Type matching password into confirm field', async () => {
      await userEvent.clear(inputs[3])
      await userEvent.type(inputs[3], 'Secret123')
      await new Promise(resolve => setTimeout(resolve, 80))
    })
    await expect(canvasElement.textContent).not.toContain('Passwords do not match')
  }
}
export const InputTestArrowsAndAlign: Story = {
  name: 'Тест: Стрелки, шаг и выравнивание',
  render: () => ({
    components: { D1Input },
    setup() {
      return {
        num: ref(10)
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="number"
            v-model="num"
            arrow="stepper"
            :min="0"
            :max="30"
            :step="5"
            :arrow-step="5"
            arrow-align="right"
            align="center"
            label="Stepper Input"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const input = canvasElement.querySelector<HTMLInputElement>('input')
    await expect(input?.value).toBe('10')
    const nextBtn = canvasElement.querySelector<HTMLElement>('[data-event-type="next"]')
    await expect(nextBtn).toBeInTheDocument()
    await step('Increment number via stepper arrow', async () => {
      await userEvent.click(nextBtn!)
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    await expect(input?.value).toBe('15')
  }
}
export const InputTestSlotsEventsAndExpose: Story = {
  name: 'Тест: Слоты, события и экспонируемые методы',
  render: () => ({
    components: { D1Input },
    setup() {
      const inputRef = ref()
      const val = ref('domain')
      const lastEvent = ref('none')
      const exposeStatus = ref('none')
      return {
        inputRef,
        val,
        lastEvent,
        exposeStatus,
        onInputLite: (data: FieldValidationItem) => {
          lastEvent.value = 'inputLite:' + String(data.value)
        },
        runSetValue: () => {
          inputRef.value?.setValue('updated')
          exposeStatus.value = String(inputRef.value?.getValue()) + '|' + String(inputRef.value?.checkValidity())
        },
        runClear: () => {
          inputRef.value?.clear()
          exposeStatus.value = 'cleared:' + String(inputRef.value?.getValue() ?? '')
        }
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Input
            ref="inputRef"
            v-model="val"
            label="Domain"
            cancel="always"
            counter-show
            :maxlength="30"
            icon="search"
            :field-attrs="{ 'data-test-field': 'true' }"
            :input-attrs="{ 'data-test-input': 'true' }"
            @input-lite="onInputLite"
          >
            <template #leading><span>[L]</span></template>
            <template #trailing><span>[T]</span></template>
            <template #prefix><span>https://</span></template>
            <template #suffix><span>.dev</span></template>
            <template #caption><span>Hint</span></template>
          </D1Input>
          <div class="wiki-storybook-flex">
            <button data-testid="btn-set" class="wiki-storybook-button" @click="runSetValue">setValue</button>
            <button data-testid="btn-clear" class="wiki-storybook-button" @click="runClear">clear</button>
            <span data-testid="event-out">{{ lastEvent }}</span>
            <span data-testid="expose-out">{{ exposeStatus }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    await expect(canvasElement.textContent).toContain('[L]')
    await expect(canvasElement.textContent).toContain('[T]')
    await expect(canvasElement.textContent).toContain('https://')
    await expect(canvasElement.textContent).toContain('.dev')
    await expect(canvasElement.textContent).toContain('Hint')
    await expect(canvasElement.querySelector('[data-test-field="true"]')).toBeInTheDocument()
    await expect(canvasElement.querySelector('[data-test-input="true"]')).toBeInTheDocument()

    await step('Call exposed setValue and clear methods', async () => {
      await userEvent.click(canvasElement.querySelector('[data-testid="btn-set"]')!)
      await new Promise(resolve => setTimeout(resolve, 50))
      await expect(canvasElement.querySelector('[data-testid="expose-out"]')).toHaveTextContent('updated|true')
      await userEvent.click(canvasElement.querySelector('[data-testid="btn-clear"]')!)
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    await expect(canvasElement.querySelector('[data-testid="expose-out"]')).toHaveTextContent('cleared:')
  }
}
// :story-items [!] System label / Системная метка
