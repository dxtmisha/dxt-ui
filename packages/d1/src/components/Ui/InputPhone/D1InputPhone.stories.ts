import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputPhone from './D1InputPhone.vue'
import { InputPhoneWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputPhone',
  component: D1InputPhone,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputPhoneWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputPhoneWikiStorybook.getWiki(),
  args: InputPhoneWikiStorybook.getValues()
} satisfies Meta<typeof D1InputPhone>

export default meta

type Story = StoryObj<typeof meta>

export const InputPhone: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1InputPhone },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group">
        <D1InputPhone
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
          v-bind="args"
        />
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-inputPhone')
    const inputElement = canvasElement.querySelector<HTMLInputElement>('input')
    await expect(component).toBeInTheDocument()
    await expect(inputElement).toBeInTheDocument()
    await expect(inputElement).toHaveAttribute('inputmode', 'tel')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputPhoneVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputPhone },
    setup() {
      const phone = ref('12025550147')
      return { phone }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button data-testid="btn-phone-us" class="wiki-storybook-button" @click="phone = '12025550147'">US (+1)</button>
            <button data-testid="btn-phone-ru" class="wiki-storybook-button" @click="phone = '79001234567'">RU (+7)</button>
            <span data-testid="phone-model-value">{{ phone }}</span>
          </div>

          <D1InputPhone
            v-model:value="phone"
            label="Phone number"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const inputElement = canvasElement.querySelector<HTMLInputElement>('input')
    const valueOutput = canvasElement.querySelector<HTMLElement>('[data-testid="phone-model-value"]')
    const russiaButton = canvasElement.querySelector<HTMLElement>('[data-testid="btn-phone-ru"]')
    const unitedStatesButton = canvasElement.querySelector<HTMLElement>('[data-testid="btn-phone-us"]')

    await expect(inputElement?.value).toBe('+1-202-555-0147')
    await step('Switch bound value to RU number', async () => {
      await userEvent.click(russiaButton!)
      await new Promise(resolve => setTimeout(resolve, 60))
    })
    await expect(valueOutput).toHaveTextContent('79001234567')
    await expect(inputElement?.value).toBe('+7-900-123-45-67')

    await step('Switch bound value back to US number', async () => {
      await userEvent.click(unitedStatesButton!)
      await new Promise(resolve => setTimeout(resolve, 60))
    })
    await expect(inputElement?.value).toBe('+1-202-555-0147')
  }
}
export const InputPhoneCountryBlock: Story = {
  name: 'Блокировка страны',
  render: () => ({
    components: { D1InputPhone },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputPhone
            country-default="DE"
            :country-block="true"
            label="Locked to Germany (DE)"
          />
          <D1InputPhone
            country-default="US"
            :country-block="false"
            label="Country selection enabled (US)"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const popupTriggers = canvasElement.querySelectorAll('[aria-haspopup="listbox"]')
    await expect(popupTriggers.length).toBe(1)
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await expect(inputs.length).toBe(2)
    await expect(inputs[0].value).toContain('+49')
    await expect(inputs[1].value).toContain('+1')
  }
}
export const InputPhoneSkeleton: Story = {
  name: 'Состояние скелетона',
  render: () => ({
    components: { D1InputPhone },
    template: `
        
        <D1InputPhone
          :is-skeleton="true"
          label="Phone number"
        />
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-inputPhone')
    await expect(component).toBeInTheDocument()
  }
}
export const InputPhoneExpose: Story = {
  name: 'Программный API (expose)',
  render: () => ({
    components: { D1InputPhone },
    setup() {
      const phoneRef = ref<any>(null)
      const phoneValue = ref<string>('12025550147')
      const exposeStatus = ref<string>('ready')

      const runReadState = () => {
        exposeStatus.value = String(phoneRef.value?.getValue?.()) + '|' + String(phoneRef.value?.checkValidity?.())
      }

      const runSetValue = () => {
        phoneRef.value?.setValue?.('79001234567')
        exposeStatus.value = 'set:' + String(phoneRef.value?.getValue?.()) + '|' + String(phoneRef.value?.checkValidity?.())
      }

      const runClear = () => {
        phoneRef.value?.clear?.()
        exposeStatus.value = 'cleared:' + String(phoneRef.value?.getValue?.())
      }

      return {
        phoneRef,
        phoneValue,
        exposeStatus,
        runReadState,
        runSetValue,
        runClear
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputPhone
            ref="phoneRef"
            v-model:value="phoneValue"
            required
            label="Expose demo"
          />
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button data-testid="btn-expose-read" class="wiki-storybook-button" @click="runReadState">getValue</button>
            <button data-testid="btn-expose-set" class="wiki-storybook-button" @click="runSetValue">setValue</button>
            <button data-testid="btn-expose-clear" class="wiki-storybook-button" @click="runClear">clear</button>
            <span data-testid="expose-status">{{ exposeStatus }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const statusOutput = canvasElement.querySelector<HTMLElement>('[data-testid="expose-status"]')

    await step('Call exposed getValue and checkValidity', async () => {
      await userEvent.click(canvasElement.querySelector('[data-testid="btn-expose-read"]')!)
      await new Promise(resolve => setTimeout(resolve, 40))
    })
    await expect(statusOutput).toHaveTextContent('12025550147|true')

    await step('Call exposed setValue and clear methods', async () => {
      await userEvent.click(canvasElement.querySelector('[data-testid="btn-expose-set"]')!)
      await new Promise(resolve => setTimeout(resolve, 40))
      await expect(statusOutput).toHaveTextContent('set:79001234567|true')

      await userEvent.click(canvasElement.querySelector('[data-testid="btn-expose-clear"]')!)
      await new Promise(resolve => setTimeout(resolve, 40))
    })
    await expect(statusOutput).toHaveTextContent('cleared:')
  }
}
export const InputPhoneTestDialCodeAndDetection: Story = {
  name: 'Тест: Селектор кода страны и автоопределение',
  render: () => ({
    components: { D1InputPhone },
    setup() {
      const detectedPhone = ref('')
      return { detectedPhone }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputPhone
            v-model="detectedPhone"
            country-default="US"
            :input-phone-dial-code-attrs="{ labelType: 'code', menuCountryAttrs: { list: ['US', 'VN', 'RU'] } }"
            :mask-attrs="{ view: '_' }"
            label="Dial code selector"
          />
          <span data-testid="detected-value">{{ detectedPhone }}</span>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const dialButton = canvasElement.querySelector<HTMLElement>('[aria-haspopup="listbox"]')
    const inputElement = canvasElement.querySelector<HTMLInputElement>('input')
    const valueDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="detected-value"]')
    await expect(dialButton).toBeInTheDocument()
    await expect(dialButton?.textContent).toContain('+1')

    await step('Open country menu and select Vietnam (+84)', async () => {
      await userEvent.click(dialButton!)
      await new Promise(resolve => setTimeout(resolve, 120))
      const optionList = Array.from(document.querySelectorAll<HTMLElement>('[role="option"]'))
      const vietnamOption = optionList.find(optionItem => optionItem.textContent?.includes('+84'))
      await expect(vietnamOption).toBeTruthy()
      await userEvent.click(vietnamOption!)
      await new Promise(resolve => setTimeout(resolve, 100))
    })
    await expect(dialButton?.textContent).toContain('+84')
    await expect(inputElement?.value).toContain('+84')

    await step('Enter complete +84 phone digits and verify v-model output', async () => {
      await userEvent.click(inputElement!)
      await userEvent.type(inputElement!, '912345678')
      await new Promise(resolve => setTimeout(resolve, 60))
    })
    await expect(valueDisplay).toHaveTextContent('+84-91-2345-678')
  }
}
export const InputPhoneTestValidation: Story = {
  name: 'Тест: Валидация, pattern и пользовательское сообщение',
  render: () => ({
    components: { D1InputPhone },
    setup() {
      const validationTargetRef = ref<any>(null)
      const validationSummary = ref('none')
      const triggerCheck = () => {
        validationSummary.value = String(validationTargetRef.value?.checkValidity?.()) + '|' + String(validationTargetRef.value?.getValidationMessage?.())
      }
      return {
        validationTargetRef,
        validationSummary,
        triggerCheck
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputPhone
            ref="validationTargetRef"
            country-default="RU"
            value="123"
            pattern="^7[0-9]{10}$"
            :validation-code="{ patternMismatch: 'Enter 11 digits starting with 7' }"
            :force-show-message="true"
            label="Pattern phone"
            helper-message="Helper text"
          />
          <D1InputPhone
            validation-message="Forced error text"
            :force-show-message="true"
            value="123"
            label="Forced message"
          />
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button data-testid="btn-check-validity" class="wiki-storybook-button" @click="triggerCheck">checkValidity</button>
            <span data-testid="validation-summary">{{ validationSummary }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    await expect(canvasElement.textContent).toContain('Enter 11 digits starting with 7')
    await expect(canvasElement.textContent).toContain('Forced error text')
    await step('Verify validation expose result', async () => {
      await userEvent.click(canvasElement.querySelector('[data-testid="btn-check-validity"]')!)
      await new Promise(resolve => setTimeout(resolve, 40))
    })
    await expect(canvasElement.querySelector('[data-testid="validation-summary"]')).toHaveTextContent('false|Enter 11 digits starting with 7')
  }
}
export const InputPhoneTestStatesAndCancel: Story = {
  name: 'Тест: Disabled, readonly, loading и cancel',
  render: () => ({
    components: { D1InputPhone },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputPhone
            label="Disabled"
            :disabled="true"
            value="79001234567"
          />
          <D1InputPhone
            label="Readonly"
            :readonly="true"
            value="79001234567"
          />
          <D1InputPhone
            label="Loading and trailing"
            :loading="true"
            icon-trailing="call"
            value="12025550147"
          />
          <D1InputPhone
            label="Cancel none"
            cancel="none"
            align="center"
            :focus="true"
            :selected="true"
            value="12025550147"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
    await expect(inputs.length).toBe(4)
    await expect(inputs[0]).toBeDisabled()
    await expect(inputs[0].value).toBe('79001234567')
    await expect(inputs[1]).toHaveAttribute('readonly')
    await expect(inputs[1].value).toBe('79001234567')
  }
}
export const InputPhoneTestSlotsAndEvents: Story = {
  name: 'Тест: Слоты, атрибуты и события',
  render: () => ({
    components: { D1InputPhone },
    setup() {
      const eventTracker = ref<string>('idle')
      const trackedValue = ref<string>('12025550147')
      const onInput = (_event: Event, validation: FieldValidationItem<string>) => {
        eventTracker.value = 'input:' + String(validation.value)
      }
      const onChange = (_event: Event, validation: FieldValidationItem<string>) => {
        eventTracker.value = 'change:' + String(validation.value)
      }
      return {
        eventTracker,
        trackedValue,
        onInput,
        onChange
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputPhone
            v-model:value="trackedValue"
            id="phone-slots-id"
            name="phone-slots-name"
            placeholder="Phone"
            :tabindex="0"
            :detail="{ source: 'story' }"
            :field-attrs="{ 'data-test-field': 'true' }"
            :input-attrs="{ 'data-test-input': 'true' }"
            label="Phone"
            helper-message="Hint"
            @input="onInput"
            @change="onChange"
          >
            <template #label>
              <span>[LABEL]</span>
            </template>
            <template #prefix>
              <span>Tel:</span>
            </template>
            <template #suffix>
              <span>EXT</span>
            </template>
            <template #trailing>
              <span>[OK]</span>
            </template>
          </D1InputPhone>
          <span data-testid="event-tracker">{{ eventTracker }}</span>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.textContent).toContain('[LABEL]')
    await expect(canvasElement.textContent).toContain('Tel:')
    await expect(canvasElement.textContent).toContain('EXT')
    await expect(canvasElement.textContent).toContain('[OK]')
    await expect(canvasElement.textContent).toContain('Hint')
    await expect(canvasElement.querySelector('[data-test-field="true"]')).toBeInTheDocument()
    await expect(canvasElement.querySelector('[data-test-input="true"]')).toBeInTheDocument()
    await expect(canvasElement.querySelector('input[name="phone-slots-name"]')).toBeInTheDocument()
  }
}
// :story-items [!] System label / Системная метка
