import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Input properties
 *
 * Описания свойств компонента Input
 */
export const wikiDescriptionsInput: StorybookComponentsDescriptionItem = {
  name: 'Input',
  description: {
    en: 'Universal input component with support for masking, currency and number formatting, validation, password visibility toggle, counters, arrows, and slots.',
    ru: 'Универсальный компонент ввода с поддержкой маскирования, форматирования чисел и валют, валидации, переключателя видимости пароля, счётчиков, стрелок и слотов.'
  },
  possibilities: {
    en: [
      'supports standard, numeric (number, number-format, currency), date/time, email, tel, url, search, and password input types',
      'built-in mask integration (mask, maskVisible, maskNone, maskAttrs) and localization (language, currency, currencyHide, fraction)',
      'built-in validation via pattern, validationCode, validationMessage, forceShowMessage, non-blocking warning/warningMessage states, and cross-field match checking',
      'password visibility toggle with customizable textShow and textHide labels',
      'numeric controls with min, max, step, arrow (auto, stepper, carousel, none), arrowStep, arrowAlign, and text align',
      'supports two-way binding (value, modelValue), focus/blur/input/change events, slots (leading, trailing, label, prefix, suffix, caption), and exposed methods (getValue, setValue, clear, isChanged, checkValidity, getValidationMessage)'
    ],
    ru: [
      'поддерживает стандартные, числовые (number, number-format, currency), даты/времени, email, tel, url, search и password типы ввода',
      'встроенная интеграция с масками (mask, maskVisible, maskNone, maskAttrs) и локализацией (language, currency, currencyHide, fraction)',
      'встроенная валидация через pattern, validationCode, validationMessage, forceShowMessage, неблокирующие предупреждения warning/warningMessage и проверку совпадения match',
      'переключатель видимости пароля с настраиваемыми метками textShow и textHide',
      'числовое управление с min, max, step, arrow (auto, stepper, carousel, none), arrowStep, arrowAlign и выравниванием текста align',
      'поддерживает двустороннюю привязку (value, modelValue), события focus/blur/input/change, слоты (leading, trailing, label, prefix, suffix, caption) и методы (getValue, setValue, clear, isChanged, checkValidity, getValidationMessage)'
    ]
  },
  render: `
      <div class="wiki-storybook-group">
        <DesignComponent
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
          v-bind="args"
        />
      </div>
    `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
const inputElement = canvasElement.querySelector<HTMLInputElement>('input')
await expect(component).toBeInTheDocument()
await expect(inputElement).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { FieldValidationItem } from \'@dxtmisha/constructor\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'InputTypes',
      name: {
        en: 'Input types',
        ru: 'Типы ввода'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="text" label="Text" placeholder="Enter text" />
          <DesignComponent type="email" label="Email" placeholder="email@example.com" />
          <DesignComponent type="password" label="Password" placeholder="Enter password" />
          <DesignComponent type="number" label="Number" placeholder="0" />
          <DesignComponent type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <DesignComponent type="date" label="Date" />
          <DesignComponent type="search" label="Search" placeholder="Search..." />
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(7)
await step('Type into text input', async () => {
  await userEvent.click(inputs[0])
  await userEvent.type(inputs[0], 'Hello')
})
await expect(inputs[0].value).toBe('Hello')
      `
    },
    {
      id: 'InputNumber',
      name: {
        en: 'Number formatting',
        ru: 'Форматирование чисел'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="number" value="1234567" label="Number" />
          <DesignComponent type="number-format" value="1234567" language="en-US" label="Formatted" />
          <DesignComponent type="number" value="50" :min="0" :max="100" label="From 0 to 100" />
          <DesignComponent type="number" value="10" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />
          <DesignComponent type="number-format" value="1234567.89" align="center" :fraction="2" label="Centered" />
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(5)
await expect(inputs[1].value).toMatch(/1[\\s,\\u00a0]234[\\s,\\u00a0]567/)
await expect(inputs[4].value).toMatch(/1[\\s,\\u00a0]234[\\s,\\u00a0]567[.,]89/)
      `
    },
    {
      id: 'InputCurrency',
      name: {
        en: 'Currency and number formatting',
        ru: 'Валюта и форматирование чисел'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="currency"
            label="Price (USD)"
            currency="USD"
            language="en-US"
          />
          <DesignComponent
            type="currency"
            label="Price (USD)"
            currency="USD"
            language="en-US"
            value="1234.56"
          />
          <DesignComponent
            type="currency"
            label="Price (currency-hide)"
            currency="EUR"
            currency-hide
            language="en-US"
            value="1234.56"
          />
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(3)
await expect(inputs[1].value).toMatch(/1[\\s,\\u00a0]234[.,]56/)
await expect(inputs[2].value).toMatch(/1[\\s,\\u00a0]234[.,]56/)
await expect(inputs[2].value).not.toContain('€')
      `
    },
    {
      id: 'InputDate',
      name: {
        en: 'Date and time',
        ru: 'Дата и время'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="date" label="Date" language="ru-RU" />
          <DesignComponent type="datetime" label="Date and Time" language="en-US" />
          <DesignComponent type="year-month" label="Period" language="ru-RU" />
          <DesignComponent type="time" label="Time" />
          <DesignComponent type="hour-minute" label="Hours:Minutes" />
          <DesignComponent type="date" label="Limited Date" language="ru-RU" min="2024-01-01" max="2024-12-31" />
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(6)
      `
    },
    {
      id: 'InputMask',
      name: {
        en: 'Masked input',
        ru: 'Маскированный ввод'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="tel" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" label="Phone" />
          <DesignComponent type="text" mask="**** **** **** ****" placeholder="0000 0000 0000 0000" label="Card" />
          <DesignComponent type="tel" mask="+1 (***) ***-****" :mask-visible="false" label="No placeholder" />
          <DesignComponent type="text" mask="****-****" :mask-none="true" value="raw-123" label="Mask disabled" />
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(4)
await expect(inputs[3].value).toBe('raw-123')
await step('Type into phone mask', async () => {
  await userEvent.click(inputs[0])
  await userEvent.type(inputs[0], '5551234567')
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(inputs[0].value).toContain('+1 (555) 123-4567')
      `
    },
    {
      id: 'InputVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        inputValue: ref('Initial value'),
        maskValue: ref(''),
        numberValue: ref(42)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="text-value">Current value: {{ inputValue }}</span>
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="inputValue = ''">Clear</button>
          </div>
          <DesignComponent
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
          <DesignComponent
            v-model="maskValue"
            type="date"
            label="Date input"
          />

          <div class="wiki-storybook-flex">
            <span data-testid="number-value">Current value: {{ numberValue }}</span>
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <DesignComponent
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
        </div>
      `,
      play: `
const setTextButton = Array.from(canvasElement.querySelectorAll('button')).find((button) => button.textContent === 'Set text')
const plusButton = Array.from(canvasElement.querySelectorAll('button')).find((button) => button.textContent === '+10')
await step('Update reactive v-model via buttons', async () => {
  await userEvent.click(setTextButton!)
  await userEvent.click(plusButton!)
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(canvasElement.querySelector('[data-testid="text-value"]')).toHaveTextContent('Changed value')
await expect(canvasElement.querySelector('[data-testid="number-value"]')).toHaveTextContent('52')
      `
    },
    {
      id: 'InputSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              isSkeleton
              label="Loading field"
              helperMessage="This field is loading..."
            />
            <DesignComponent
              isSkeleton
              label="Another field"
              counterShow
            />
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
      `
    },
    {
      id: 'InputSlots',
      name: {
        en: 'Slots',
        ru: 'Слоты'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Domain"
            value="example"
          >
            <template #leading><span>[Lead]</span></template>
            <template #trailing><span>[Trail]</span></template>
            <template #prefix><span>https://</span></template>
            <template #suffix><span>.dev</span></template>
            <template #caption><span>Hint</span></template>
          </DesignComponent>
        </div>
      `,
      play: `
await expect(canvasElement.textContent).toContain('[Lead]')
await expect(canvasElement.textContent).toContain('[Trail]')
await expect(canvasElement.textContent).toContain('https://')
await expect(canvasElement.textContent).toContain('.dev')
await expect(canvasElement.textContent).toContain('Hint')
      `
    },
    {
      id: 'InputExpose',
      name: {
        en: 'Exposed methods',
        ru: 'Экспонируемые методы'
      },
      setup: `
      const inputRef = ref()
      const value = ref('Initial')
      const exposeStatus = ref('none')
      return {
        inputRef,
        value,
        exposeStatus,
        runSetValue: () => {
          inputRef.value?.setValue('updated')
          exposeStatus.value = String(inputRef.value?.getValue()) + '|' + String(inputRef.value?.checkValidity()) + '|' + String(inputRef.value?.isChanged())
        },
        runClear: () => {
          inputRef.value?.clear()
          exposeStatus.value = 'cleared:' + String(inputRef.value?.getValue() ?? '')
        }
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="inputRef"
            v-model="value"
            label="Expose demo"
          />
          <div class="wiki-storybook-flex">
            <button data-testid="button-expose-set" class="wiki-storybook-button" @click="runSetValue">setValue</button>
            <button data-testid="button-expose-clear" class="wiki-storybook-button" @click="runClear">clear</button>
            <span data-testid="button-expose-out">{{ exposeStatus }}</span>
          </div>
        </div>
      `,
      play: `
await step('Call exposed setValue and clear methods', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="button-expose-set"]')!)
  await new Promise((resolve) => setTimeout(resolve, 50))
  await expect(canvasElement.querySelector('[data-testid="button-expose-out"]')).toHaveTextContent('updated|true|true')
  await userEvent.click(canvasElement.querySelector('[data-testid="button-expose-clear"]')!)
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(canvasElement.querySelector('[data-testid="button-expose-out"]')).toHaveTextContent('cleared:')
      `
    },
    // =========================================================================
    // TIER 2: BEHAVIORAL & EDGE CASE TEST STORIES
    // =========================================================================
    {
      id: 'InputTestPasswordAndZero',
      name: {
        en: 'Test: Password toggle and numeric zero',
        ru: 'Тест: Переключатель пароля и числовой ноль'
      },
      propsName: ['type', 'textShow', 'textHide', 'modelValue', 'value'],
      setup: `
      return {
        zeroValue: ref(0)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="password"
            value="Secret123"
            label="Password"
            text-show="Show secret"
            text-hide="Hide secret"
          />
          <DesignComponent
            type="number"
            v-model="zeroValue"
            label="Zero Value"
          />
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(2)
await expect(inputs[0].type).toBe('password')
await expect(inputs[1].value).toBe('0')

const toggleButton = canvasElement.querySelector<HTMLElement>('[aria-label="Show secret"]')
await expect(toggleButton).toBeInTheDocument()
await step('Toggle password visibility on and off', async () => {
  await userEvent.click(toggleButton!)
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(inputs[0].type).toBe('text')
await expect(canvasElement.querySelector('[aria-label="Hide secret"]')).toBeInTheDocument()
      `
    },
    {
      id: 'InputTestValidationAndMatch',
      name: {
        en: 'Test: Validation, warning, pattern, and match',
        ru: 'Тест: Валидация, предупреждение, pattern и совпадение (match)'
      },
      propsName: [
        'required',
        'minlength',
        'maxlength',
        'pattern',
        'validationCode',
        'validationMessage',
        'warning',
        'warningMessage',
        'forceShowMessage',
        'match',
        'textEntriesMatch'
      ],
      setup: `
      return {
        password: ref('Secret123'),
        confirm: ref('Secret')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Pattern Check"
            pattern="[A-Za-z]+"
            :validation-code="{ patternMismatch: 'Letters only allowed' }"
            value="123"
          />
          <DesignComponent
            label="Forced Error"
            validation-message="Server validation error"
            force-show-message
            value="bad"
          />
          <DesignComponent
            label="Warning State"
            warning
            warning-message="Caps Lock may be active"
            value="warn"
          />
          <DesignComponent
            label="Password Source"
            name="story-password-source"
            type="password"
            v-model="password"
          />
          <DesignComponent
            label="Confirm Password"
            type="password"
            v-model="confirm"
            match="[name='story-password-source']"
            text-entries-match="Passwords do not match"
          />
        </div>
      `,
      play: `
await new Promise((resolve) => setTimeout(resolve, 80))
await expect(canvasElement.textContent).toContain('Letters only allowed')
await expect(canvasElement.textContent).toContain('Server validation error')
await expect(canvasElement.textContent).toContain('Caps Lock may be active')
await expect(canvasElement.textContent).toContain('Passwords do not match')

const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await step('Type matching password into confirm field', async () => {
  await userEvent.clear(inputs[4])
  await userEvent.type(inputs[4], 'Secret123')
  await new Promise((resolve) => setTimeout(resolve, 80))
})
await expect(canvasElement.textContent).not.toContain('Passwords do not match')
      `
    },
    {
      id: 'InputTestArrowsAndAlign',
      name: {
        en: 'Test: Arrows, step, and alignment',
        ru: 'Тест: Стрелки, шаг и выравнивание'
      },
      propsName: ['arrow', 'arrowStep', 'arrowAlign', 'align', 'min', 'max', 'step'],
      setup: `
      return {
        numericValue: ref(10)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="number"
            v-model="numericValue"
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
      `,
      play: `
const input = canvasElement.querySelector<HTMLInputElement>('input')
await expect(input?.value).toBe('10')
const nextButton = canvasElement.querySelector<HTMLElement>('[data-event-type="next"]')
await expect(nextButton).toBeInTheDocument()
await step('Increment number via stepper arrow', async () => {
  await userEvent.click(nextButton!)
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(input?.value).toBe('15')
      `
    },
    {
      id: 'InputTestSlotsEventsAndExpose',
      name: {
        en: 'Test: Slots, events, and exposed methods',
        ru: 'Тест: Слоты, события и экспонируемые методы'
      },
      propsName: [
        'cancel',
        'counterShow',
        'icon',
        'iconTrailing',
        'fieldAttrs',
        'inputAttrs',
        'autocomplete',
        'maskAttrs'
      ],
      setup: `
      const inputRef = ref()
      const domainValue = ref('domain')
      const lastEvent = ref('none')
      const focusState = ref('none')
      const exposeStatus = ref('none')
      return {
        inputRef,
        domainValue,
        lastEvent,
        focusState,
        exposeStatus,
        onFocus: () => {
          focusState.value = 'focused'
        },
        onBlur: () => {
          focusState.value = 'blurred'
        },
        onInputLite: (data: FieldValidationItem) => {
          lastEvent.value = 'inputLite:' + String(data.value)
        },
        runSetValue: () => {
          inputRef.value?.setValue('updated')
          exposeStatus.value = String(inputRef.value?.getValue()) + '|' + String(inputRef.value?.checkValidity()) + '|' + String(inputRef.value?.isChanged())
        },
        runClear: () => {
          inputRef.value?.clear()
          exposeStatus.value = 'cleared:' + String(inputRef.value?.getValue() ?? '')
        }
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="inputRef"
            v-model="domainValue"
            label="Domain"
            cancel="always"
            counter-show
            :maxlength="30"
            icon="search"
            :field-attrs="{ 'data-test-field': 'true' }"
            :input-attrs="{ 'data-test-input': 'true' }"
            @focus="onFocus"
            @blur="onBlur"
            @input-lite="onInputLite"
          >
            <template #leading><span>[L]</span></template>
            <template #trailing><span>[T]</span></template>
            <template #prefix><span>https://</span></template>
            <template #suffix><span>.dev</span></template>
            <template #caption><span>Hint</span></template>
          </DesignComponent>
          <div class="wiki-storybook-flex">
            <button data-testid="button-set" class="wiki-storybook-button" @click="runSetValue">setValue</button>
            <button data-testid="button-clear" class="wiki-storybook-button" @click="runClear">clear</button>
            <span data-testid="focus-out">{{ focusState }}</span>
            <span data-testid="event-out">{{ lastEvent }}</span>
            <span data-testid="expose-out">{{ exposeStatus }}</span>
          </div>
        </div>
      `,
      play: `
await expect(canvasElement.textContent).toContain('[L]')
await expect(canvasElement.textContent).toContain('[T]')
await expect(canvasElement.textContent).toContain('https://')
await expect(canvasElement.textContent).toContain('.dev')
await expect(canvasElement.textContent).toContain('Hint')
await expect(canvasElement.querySelector('[data-test-field="true"]')).toBeInTheDocument()
await expect(canvasElement.querySelector('[data-test-input="true"]')).toBeInTheDocument()

const inputElement = canvasElement.querySelector<HTMLInputElement>('input')
await step('Verify focus and blur events', async () => {
  await userEvent.click(inputElement!)
  await expect(canvasElement.querySelector('[data-testid="focus-out"]')).toHaveTextContent('focused')
  await userEvent.tab()
  await expect(canvasElement.querySelector('[data-testid="focus-out"]')).toHaveTextContent('blurred')
})

await step('Call exposed setValue and clear methods', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="button-set"]')!)
  await new Promise((resolve) => setTimeout(resolve, 50))
  await expect(canvasElement.querySelector('[data-testid="expose-out"]')).toHaveTextContent('updated|true|true')
  await userEvent.click(canvasElement.querySelector('[data-testid="button-clear"]')!)
  await new Promise((resolve) => setTimeout(resolve, 50))
})
await expect(canvasElement.querySelector('[data-testid="expose-out"]')).toHaveTextContent('cleared:')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Input'} type={'input'}/>

<StorybookDescriptions componentName={'Input'} type={'type'}/>
<Canvas of={Component.InputTypes}/>

<StorybookDescriptions componentName={'Input'} type={'number'}/>
<Canvas of={Component.InputNumber}/>

<StorybookDescriptions componentName={'Input'} type={'currency'}/>
<Canvas of={Component.InputCurrency}/>

<StorybookDescriptions componentName={'Input'} type={'date'}/>
<Canvas of={Component.InputDate}/>

<StorybookDescriptions componentName={'Input'} type={'mask'}/>
<Canvas of={Component.InputMask}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'focus'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>
<Canvas of={Component.InputExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'leading'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
<Canvas of={Component.InputSlots}/>
    `
  },
  ai: {
    description: `
Universal input field component wrapping Field and Mask. Supports text, password (with visibility toggle), email, tel, url, search, number, number-format, currency, and localized date/time formats. Handles masking, pattern/length/match validation, numeric steppers/carousels, counters, slots (leading, trailing, prefix, suffix, caption, label), and v-model binding.
    `
  }
}
