import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputCode from './D1InputCode.vue'
import { InputCodeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { InputCodeExpose } from '@dxtmisha/constructor/InputCode'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputCode',
  component: D1InputCode,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputCodeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputCodeWikiStorybook.getWiki(),
  args: InputCodeWikiStorybook.getValues()
} satisfies Meta<typeof D1InputCode>

export default meta

type Story = StoryObj<typeof meta>

export const InputCode: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputCodeVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputCode },
    setup() {
      const codeValue = ref('1234')
      return { codeValue }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="ic-vmodel-value">Current value: {{ codeValue }}</span>
            <button type="button" class="wiki-storybook-button" @click="codeValue = '4321'">Set '4321'</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button-warning" @click="codeValue = ''">Clear</button>
          </div>
          <D1InputCode
            v-model="codeValue"
            label="Code input"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('Reflects initial v-model value in inputs', async () => {
      const inputs = canvasElement.querySelectorAll('input')
      await expect(inputs.length).toBe(4)
      await expect((inputs[0] as HTMLInputElement).value).toBe('1')
      await expect((inputs[3] as HTMLInputElement).value).toBe('4')
    })
    await step('Updates inputs when v-model changes externally', async () => {
      await userEvent.click(canvas.getByRole('button', { name: "Set '4321'" }))
      await waitFor(async () => {
        await expect(canvas.getByTestId('ic-vmodel-value')).toHaveTextContent('Current value: 4321')
      })
      await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
      await waitFor(async () => {
        await expect(canvas.getByTestId('ic-vmodel-value')).toHaveTextContent('Current value:')
      })
    })
  }
}
export const InputCodeSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1InputCode, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true" style="max-width:320px">
          <D1InputCode
            isSkeleton
            label="Loading field"
            helperMessage="This field is loading..."
          />
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll('input')
    await expect(inputs.length).toBe(4)
    const group = canvasElement.querySelector('[role="group"]')
    await expect(group).toBeInTheDocument()
  }
}
export const InputCodeTestStatesAndValidation: Story = {
  name: 'Тест: Состояния, валидация, скрытие, отключение и фильтр символов',
  render: () => ({
    components: { D1InputCode },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputCode
            data-testid="ic-test-validation"
            label="Verification"
            :validation="true"
            validation-message="Incorrect code"
            warning-message="Check SMS"
            helper-message="Enter 4 digits"
          />
          <D1InputCode
            data-testid="ic-test-success"
            label="Confirmed"
            value="1234"
            :success="true"
            :loading="true"
          />
          <D1InputCode
            data-testid="ic-test-disabled"
            label="Locked"
            :disabled="true"
            :force-show-message="true"
            helper-message="Temporarily locked"
          />
          <D1InputCode
            data-testid="ic-test-alpha"
            :hide="true"
            :match="/[a-zA-Z0-9]/"
            input-mode="text"
            autocomplete="off"
            placeholder="A"
            name="pin"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const validationGroup = canvasElement.querySelector('[data-testid="ic-test-validation"]')
    await expect(validationGroup).toHaveAttribute('role', 'group')
    await expect(validationGroup).toHaveAttribute('aria-describedby')
    await expect(validationGroup?.querySelector('input')).toHaveAttribute('aria-invalid', 'true')

    const disabledGroup = canvasElement.querySelector('[data-testid="ic-test-disabled"]')
    await expect(disabledGroup?.querySelector('input')).toHaveAttribute('aria-disabled', 'true')
    await expect(disabledGroup).toHaveTextContent('Temporarily locked')

    const alphaGroup = canvasElement.querySelector('[data-testid="ic-test-alpha"]')
    const alphaInput = alphaGroup?.querySelector('input') as HTMLInputElement
    await expect(alphaInput).toHaveAttribute('inputmode', 'text')
    await expect(alphaInput).toHaveAttribute('autocomplete', 'off')
  }
}
export const InputCodeTestLengthAndExpose: Story = {
  name: 'Тест: Пользовательская длина, событие input и expose API',
  render: () => ({
    components: { D1InputCode },
    setup() {
      const codeReference = ref<InputCodeExpose | null>(null)
      const latestInput = ref('')
      const readValue = ref('')
      return {
        codeReference,
        latestInput,
        readValue,
        onInput: (value: string) => {
          latestInput.value = value
        },
        callSet: () => {
          codeReference.value?.set('654321')
          readValue.value = '654321'
        },
        callReset: () => {
          codeReference.value?.reset()
          readValue.value = codeReference.value?.getValue() ?? ''
        },
        callFocus: () => {
          codeReference.value?.focus()
        }
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="callSet">Set 654321</button>
            <button type="button" class="wiki-storybook-button" @click="callReset">Reset</button>
            <button type="button" class="wiki-storybook-button" @click="callFocus">Focus</button>
          </div>
          <span data-testid="ic-test-expose-read">{{ readValue }}</span>
          <span data-testid="ic-test-input-log">{{ latestInput }}</span>
          <D1InputCode
            ref="codeReference"
            :length="6"
            label="Security PIN"
            @input="onInput"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputs = canvasElement.querySelectorAll('input')
    await expect(inputs.length).toBe(6)

    await step('Calls expose set, reset and focus', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set 654321' }))
      await waitFor(async () => {
        await expect((inputs[0] as HTMLInputElement).value).toBe('6')
        await expect((inputs[5] as HTMLInputElement).value).toBe('1')
      })
      await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
      await waitFor(async () => {
        await expect((inputs[0] as HTMLInputElement).value).toBe('')
      })
      await userEvent.click(canvas.getByRole('button', { name: 'Focus' }))
      await expect(document.activeElement).toBe(inputs[0])
    })
  }
}
// :story-items [!] System label / Системная метка
