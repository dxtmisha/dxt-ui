import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Mask from './D1Mask.vue'
import { MaskWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { FieldMasks, FieldValidationItem } from '@dxtmisha/constructor'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Mask',
  component: D1Mask,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MaskWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MaskWikiStorybook.getWiki(),
  args: MaskWikiStorybook.getValues()
} satisfies Meta<typeof D1Mask>

export default meta

type Story = StoryObj<typeof meta>

export const Mask: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Mask },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group">
      <D1Mask
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-mask')
    const inputElement = canvasElement.querySelector<HTMLInputElement>('.d1-mask__input')
    await expect(component).toBeInTheDocument()
    await expect(inputElement).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MaskBasic: Story = {
  name: 'Примеры масок',
  render: () => ({
    components: { D1Mask },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Phone number format (+1 area code)</div>
            <D1Mask :mask="'+1 *** *** ** **'"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Auto format selection (multiple masks)</div>
            <D1Mask :mask="['*** *** ***', '**** **** ****']"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.d1-mask__input')
    await expect(inputs.length).toBe(2)

    await step('Type into single phone mask', async () => {
      await userEvent.click(inputs[0])
      await userEvent.type(inputs[0], '900123')
      await new Promise((resolve) => setTimeout(resolve, 50))
    })
    await expect(inputs[0].value).toContain('+1 900 123')

    await step('Type into multi-pattern mask', async () => {
      await userEvent.click(inputs[1])
      await userEvent.type(inputs[1], '1234567890')
      await new Promise((resolve) => setTimeout(resolve, 50))
    })
    await expect(inputs[1].value).toContain('1234 5678 90')
  }
}
export const MaskSpecial: Story = {
  name: 'Специальные символы',
  render: () => ({
    components: { D1Mask },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default special symbol (*)</div>
            <D1Mask :mask="'+7 *** *** ** **'"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom special symbol (X)</div>
            <D1Mask :mask="'XX.XX.XXXX'" special="X"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple special symbols (*, #, X)</div>
            <D1Mask :mask="'***-###-XXX'" :special="['*', '#', 'X']"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.d1-mask__input')
    await expect(inputs.length).toBe(3)

    await step('Type into custom special character mask', async () => {
      await userEvent.click(inputs[1])
      await userEvent.type(inputs[1], '31122026')
      await new Promise((resolve) => setTimeout(resolve, 50))
    })
    await expect(inputs[1].value).toBe('31.12.2026')
  }
}
export const MaskValidation: Story = {
  name: 'Валидация',
  render: () => ({
    components: { D1Mask },
    setup() {
      const checkPin = (masks?: FieldMasks) => {
        const groupValue = masks?.['*']?.value || ''
        return groupValue === '1234' ? {} : { pattern: '1234' }
      }

      return {
        checkPin
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Pattern validation (6-9 digits only)</div>
            <D1Mask :mask="'***'" pattern="[6-9]{3}" value="123"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Group-specific pattern (*, # groups)</div>
            <D1Mask :mask="'**:##'" :special="['*', '#']" pattern="[6-9]+"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Global check validation (requires 1234)</div>
            <D1Mask :mask="'****'" :check="checkPin" value="9999"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const maskElements = canvasElement.querySelectorAll<HTMLElement>('.d1-mask')
    await expect(maskElements.length).toBe(3)
    await expect(maskElements[0].querySelectorAll('.d1-mask__character__item--error').length).toBe(3)
    await expect(maskElements[2].querySelectorAll('.d1-mask__character__item--error').length).toBe(4)
  }
}
export const MaskGroupSave: Story = {
  name: 'Навигация по группам (groupSave)',
  render: () => ({
    components: { D1Mask },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation enabled (groupSave: true)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="true" value="123456"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation disabled (groupSave: false)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="false" value="123456"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.d1-mask__input')
    await expect(inputs.length).toBe(2)
    await expect(inputs[0].value).toBe('1234-56')
    await expect(inputs[1].value).toBe('1234-56')
  }
}
export const MaskMatch: Story = {
  name: 'Допустимые символы (match)',
  render: () => ({
    components: { D1Mask },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HEX characters (0-9, A-F)</div>
            <D1Mask :mask="'***-***'" match="[A-F0-9]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Letters only (A-Z, a-z)</div>
            <D1Mask :mask="'***-***'" match="[A-Za-z]"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.d1-mask__input')
    await expect(inputs.length).toBe(2)

    await step('Reject non-letter characters on letters-only mask', async () => {
      await userEvent.click(inputs[1])
      await userEvent.type(inputs[1], 'A1B2C3')
      await new Promise((resolve) => setTimeout(resolve, 50))
    })
    await expect(inputs[1].value).toContain('ABC')
  }
}
export const MaskNumberTypes: Story = {
  name: 'Числовые типы',
  render: () => ({
    components: { D1Mask },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Simple number</div>
            <D1Mask type="number" :fraction="2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Formatted number with separators</div>
            <D1Mask type="number-format" language="ru" :fraction="2" value="12345.6"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Currency (RUB)</div>
            <D1Mask type="currency" currency="RUB" language="ru" value="1250.5"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.d1-mask__input')
    await expect(inputs.length).toBe(3)
    await expect(inputs[1].value).toContain('12')
    await expect(inputs[2].value).toContain('1')
  }
}
export const MaskDateTypes: Story = {
  name: 'Типы дат и времени',
  render: () => ({
    components: { D1Mask },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Full date (DD.MM.YYYY)</div>
            <D1Mask type="date" language="ru" value="2026-11-16"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Date and time</div>
            <D1Mask type="datetime" language="ru"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Time only (HH:MM)</div>
            <D1Mask type="hour-minute"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('.d1-mask__input')
    await expect(inputs.length).toBe(3)
    await expect(inputs[0].value).toBe('16.11.2026')
  }
}
export const MaskVisible: Story = {
  name: 'Управление видимостью',
  render: () => ({
    components: { D1Mask },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">visible: true (default)</div>
            <D1Mask mask="+7 (***) ***" :visible="true"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">visible: false</div>
            <D1Mask mask="+7 (***) ***" :visible="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">visiblePartly: true</div>
            <D1Mask mask="+7 (***) ***" :visible="false" :visiblePartly="true" value="900"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const maskElements = canvasElement.querySelectorAll<HTMLElement>('.d1-mask')
    await expect(maskElements.length).toBe(3)
    await expect(maskElements[0]).toHaveClass('d1-mask--visible')
    await expect(maskElements[1]).not.toHaveClass('d1-mask--visible')
    await expect(maskElements[2]).toHaveClass('d1-mask--visiblePartly')
  }
}
export const MaskEvents: Story = {
  name: 'События (input, inputLite, focus, blur)',
  render: () => ({
    components: { D1Mask },
    setup() {
      const lastValue = ref('')
      const eventLog = ref('none')

      const onFocus = () => {
        eventLog.value = 'focus'
      }

      const onBlur = () => {
        eventLog.value = 'blur'
      }

      const onInputLite = (validation: FieldValidationItem) => {
        lastValue.value = String(validation.value ?? '')
        eventLog.value = 'inputLite'
      }

      const onChangeLite = (validation: FieldValidationItem) => {
        lastValue.value = String(validation.value ?? '')
        eventLog.value = 'changeLite'
      }

      return {
        lastValue,
        eventLog,
        onFocus,
        onBlur,
        onInputLite,
        onChangeLite
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <D1Mask
              mask="****"
              @focus="onFocus"
              @blur="onBlur"
              @input-lite="onInputLite"
              @change-lite="onChangeLite"
            />
          </div>
          <div class="wiki-storybook-card">
            <div>Last Event: <span class="mask-event-log">{{ eventLog }}</span></div>
            <div>Last Value: <span class="mask-event-value">{{ lastValue }}</span></div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const inputElement = canvasElement.querySelector<HTMLInputElement>('.d1-mask__input')
    const logOutput = canvasElement.querySelector<HTMLElement>('.mask-event-log')
    const valueOutput = canvasElement.querySelector<HTMLElement>('.mask-event-value')

    await expect(inputElement).toBeInTheDocument()
    await step('Type characters and verify inputLite emission', async () => {
      await userEvent.click(inputElement!)
      await userEvent.type(inputElement!, '45')
      await new Promise((resolve) => setTimeout(resolve, 120))
    })
    await expect(valueOutput).toHaveTextContent('45')
    await expect(logOutput).toHaveTextContent('inputLite')
  }
}
export const MaskExpose: Story = {
  name: 'Экспортируемые методы (getValue, setValue, clear)',
  render: () => ({
    components: { D1Mask },
    setup() {
      const maskReference = ref()
      const currentFormatted = ref('')
      const currentBasic = ref('')

      const syncValues = () => {
        if (maskReference.value) {
          currentFormatted.value = maskReference.value.getValue()
          currentBasic.value = maskReference.value.getValueBasic()
        }
      }

      const applyPreset = () => {
        maskReference.value?.setValue('987654')
        syncValues()
      }

      const clearMask = () => {
        maskReference.value?.clear()
        syncValues()
      }

      return {
        maskReference,
        currentFormatted,
        currentBasic,
        syncValues,
        applyPreset,
        clearMask
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <D1Mask
              ref="maskReference"
              mask="***-***"
              value="123"
              valueDefault="000"
            />
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button expose-read" @click="syncValues">Read Values</button>
            <button class="wiki-storybook-button expose-set" @click="applyPreset">Set 987654</button>
            <button class="wiki-storybook-button expose-clear" @click="clearMask">Clear</button>
          </div>
          <div class="wiki-storybook-card">
            <div>getValue: <span class="expose-formatted">{{ currentFormatted }}</span></div>
            <div>getValueBasic: <span class="expose-basic">{{ currentBasic }}</span></div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const readButton = canvasElement.querySelector<HTMLButtonElement>('.expose-read')
    const setButton = canvasElement.querySelector<HTMLButtonElement>('.expose-set')
    const clearButton = canvasElement.querySelector<HTMLButtonElement>('.expose-clear')
    const formattedOutput = canvasElement.querySelector<HTMLElement>('.expose-formatted')
    const basicOutput = canvasElement.querySelector<HTMLElement>('.expose-basic')

    await step('Read initial exposed values', async () => {
      await userEvent.click(readButton!)
    })
    await expect(formattedOutput).toHaveTextContent('123-')

    await step('Set value via expose.setValue', async () => {
      await userEvent.click(setButton!)
    })
    await expect(formattedOutput).toHaveTextContent('987-654')
    await expect(basicOutput).toHaveTextContent('987-654')

    await step('Reset value via expose.clear to valueDefault', async () => {
      await userEvent.click(clearButton!)
    })
    await expect(formattedOutput).toHaveTextContent('000-')
  }
}
export const MaskTestAlignDirView: Story = {
  name: 'Тест: Выравнивание, направление, view, name, inputAttrs и числовой ноль',
  render: () => ({
    components: { D1Mask },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">align="left"</div>
            <D1Mask mask="****" align="left" value="12"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">align="center"</div>
            <D1Mask mask="****" align="center" value="12"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">align="right"</div>
            <D1Mask mask="****" align="right" value="12"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">dir="rtl"</div>
            <D1Mask mask="****" dir="rtl" value="12"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">view="0", name &amp; inputAttrs</div>
            <D1Mask
              mask="**-**"
              view="0"
              name="pin-field"
              value="12"
              :input-attrs="{ inputMode: 'numeric', 'aria-label': 'Custom mask input' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">value=0, valueDefault=0</div>
            <D1Mask type="number" :value="0" :value-default="0"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const maskElements = canvasElement.querySelectorAll<HTMLElement>('.d1-mask')
    await expect(maskElements.length).toBe(6)

    await expect(maskElements[0]).toHaveClass('d1-mask--align--left')
    await expect(maskElements[1]).toHaveClass('d1-mask--align--center')
    await expect(maskElements[2]).toHaveClass('d1-mask--align--right')
    await expect(maskElements[3]).toHaveClass('d1-mask--dir--rtl')

    const hiddenInput = canvasElement.querySelector<HTMLInputElement>('input[type="hidden"][name="pin-field"]')
    const customInput = canvasElement.querySelector<HTMLInputElement>('input[aria-label="Custom mask input"]')
    await expect(hiddenInput).toBeInTheDocument()
    await expect(hiddenInput?.value).toBe('12-')
    await expect(customInput).toHaveAttribute('inputmode', 'numeric')

    const zeroInput = maskElements[5].querySelector<HTMLInputElement>('.d1-mask__input')
    await expect(zeroInput?.value).toBe('0')
    await expect(maskElements[5]).toHaveClass('d1-mask--value')
  }
}
export const MaskTestRubberAndFullOnly: Story = {
  name: 'Тест: Резиновые группы, currencyHide, fraction и fullOnly',
  render: () => ({
    components: { D1Mask },
    setup() {
      const fullOnlyValue = ref('')

      const onFullOnlyInput = (validation: FieldValidationItem) => {
        fullOnlyValue.value = String(validation.value ?? '')
      }

      return {
        fullOnlyValue,
        onFullOnlyInput
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">rubber special groups</div>
            <D1Mask
              mask="*-#"
              :special="{
                '*': { rubber: true, maxLength: 3, transitionChar: '-' },
                '#': { rubber: true, maxLength: 3 }
              }"
              value="12-345"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">currencyHide &amp; fraction</div>
            <D1Mask
              type="currency"
              currency="USD"
              :currency-hide="true"
              :fraction="true"
              language="en-US"
              value="1234.5"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">fullOnly mode</div>
            <D1Mask
              mask="****"
              :full-only="true"
              :input-attrs="{ 'aria-label': 'Full only test' }"
              @input-lite="onFullOnlyInput"
            />
            <div class="full-only-output">{{ fullOnlyValue }}</div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const maskElements = canvasElement.querySelectorAll<HTMLElement>('.d1-mask')
    await expect(maskElements.length).toBe(3)

    const rubberInput = maskElements[0].querySelector<HTMLInputElement>('.d1-mask__input')
    await expect(rubberInput?.value).toBe('12-345')

    const currencyInput = maskElements[1].querySelector<HTMLInputElement>('.d1-mask__input')
    await expect(currencyInput?.value).not.toContain('$')

    const fullOnlyInput = canvasElement.querySelector<HTMLInputElement>('input[aria-label="Full only test"]')
    const fullOnlyOutput = canvasElement.querySelector<HTMLElement>('.full-only-output')

    await step('Partial input must not emit fullOnly value', async () => {
      await userEvent.click(fullOnlyInput!)
      await userEvent.type(fullOnlyInput!, '12')
      await new Promise((resolve) => setTimeout(resolve, 120))
    })
    await expect(fullOnlyOutput).toHaveTextContent('')

    await step('Complete input emits fullOnly value', async () => {
      await userEvent.type(fullOnlyInput!, '34')
      await new Promise((resolve) => setTimeout(resolve, 120))
    })
    await expect(fullOnlyOutput).toHaveTextContent('1234')
  }
}
// :story-items [!] System label / Системная метка
