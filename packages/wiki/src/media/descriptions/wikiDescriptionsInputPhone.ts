import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputPhone properties
 *
 * Описания свойств компонента InputPhone
 */
export const wikiDescriptionsInputPhone: StorybookComponentsDescriptionItem = {
  name: 'InputPhone',
  description: {
    en: 'Phone number input component with automatic country dial code selection, dynamic phone mask formatting, multi-format output, and validation.',
    ru: 'Компонент ввода номера телефона с автоматическим выбором кода страны, динамической телефонной маской, выбором формата вывода и валидацией.'
  },
  possibilities: {
    en: [
      'automatic country detection and dynamic mask switching on input, full paste, or browser autofill (supports full-field replacement, autofill prefix deduplication, and normalizing leading `+` + national `within` prefix such as `+8` -> `+7`)',
      'integrated country dial code selector (`inputPhoneDialCodeAttrs`, `countryList`) with searchable country list, flags (including `XK` Kosovo `+383`), and dial codes',
      'country lock modes: `countryBlock` (hides selector for local format) and `countryReadonly` (locks selector while keeping flag & dial code visible; auto-locks on single-country lists)',
      'configurable output formatting (`formatOutput`: `mask` | `e164` | `digits`) and two-way bindings (`v-model`, `v-model:value`, `v-model:country`, `v-model:e164`, `v-model:digits`)',
      'custom mask configuration via `maskAttrs`, initial country fallback via `countryDefault`, `autocomplete="tel"` by default, and formatted `disabled` / `readonly` display',
      'built-in validation (`required`, `pattern`, `validationCode`, `validationMessage`, `forceShowMessage`, `textInvalidPhone`), country-specific or callback `phoneMatch` rules, and non-blocking warning states (`warning`, `warningMessage`)',
      'events (`input`, `inputLite`, `change`, `changeLite`, `focus`, `blur`) with `detail` phone metadata, slots (`leading`, `trailing`, `prefix`, `suffix`, `label`), and exposed API (`getValue`, `setValue`, `clear`, `checkValidity`, `getValidationMessage`, `getDetail`, `isChanged`)'
    ],
    ru: [
      'автоматическое определение страны и переключение телефонной маски при вводе, полной вставке или автозаполнении браузером (включая замену при полном выделении, дедупликацию префикса и нормализацию `+` + национальный префикс `within`, например `+8` -> `+7`)',
      'встроенный селектор кода страны (`inputPhoneDialCodeAttrs`, `countryList`) с поиском по странам, флагами (включая `XK` Косово `+383`) и кодами',
      'режимы фиксации страны: `countryBlock` (скрывает селектор для локального формата) и `countryReadonly` (блокирует выбор с сохранением флага и кода; включается автоматически для списка из одной страны)',
      'настройка формата вывода (`formatOutput`: `mask` | `e164` | `digits`) и двусторонние привязки (`v-model`, `v-model:value`, `v-model:country`, `v-model:e164`, `v-model:digits`)',
      'настройка маски через `maskAttrs`, выбор страны по умолчанию через `countryDefault`, `autocomplete="tel"` по умолчанию и форматированное отображение `disabled` / `readonly`',
      'встроенная валидация (`required`, `pattern`, `validationCode`, `validationMessage`, `forceShowMessage`, `textInvalidPhone`), страно-специфичные или пользовательские правила `phoneMatch` и неблокирующее предупреждение (`warning`, `warningMessage`)',
      'события (`input`, `inputLite`, `change`, `changeLite`, `focus`, `blur`) с метаданными `detail`, слоты (`leading`, `trailing`, `prefix`, `suffix`, `label`) и программный API (`getValue`, `setValue`, `clear`, `checkValidity`, `getValidationMessage`, `getDetail`, `isChanged`)'
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
await expect(inputElement).toHaveAttribute('inputmode', 'tel')
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { FieldValidationItem } from \'@dxtmisha/constructor\'',
    'import type { InputPhoneExpose as InputPhoneExposeType, InputPhoneValidationContext } from \'@dxtmisha/constructor/InputPhone\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'InputPhoneVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const phone = ref('12025550147')
      return { phone }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button data-testid="btn-phone-us" class="wiki-storybook-button" @click="phone = '12025550147'">US (+1)</button>
            <button data-testid="btn-phone-ru" class="wiki-storybook-button" @click="phone = '79001234567'">RU (+7)</button>
            <span data-testid="phone-model-value">{{ phone }}</span>
          </div>

          <DesignComponent
            v-model:value="phone"
            label="Phone number"
          />
        </div>
      `,
      play: `
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
      `
    },
    {
      id: 'InputPhoneCountryBlock',
      name: {
        en: 'Country Blocking',
        ru: 'Блокировка страны'
      },
      propsName: ['countryDefault', 'countryBlock'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            country-default="DE"
            :country-block="true"
            label="Locked to Germany (DE)"
          />
          <DesignComponent
            country-default="US"
            :country-block="false"
            label="Country selection enabled (US)"
          />
        </div>
      `,
      play: `
const popupTriggers = canvasElement.querySelectorAll('[aria-haspopup="listbox"]')
await expect(popupTriggers.length).toBe(1)
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(2)
await expect(inputs[0].value).toContain('+49')
await expect(inputs[1].value).toContain('+1')
      `
    },
    {
      id: 'InputPhoneCountryReadonly',
      name: {
        en: 'Country Selector Locking (countryReadonly)',
        ru: 'Блокировка селектора страны (countryReadonly)'
      },
      propsName: ['countryDefault', 'countryReadonly', 'countryList', 'inputPhoneDialCodeAttrs'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            country-default="RU"
            :country-readonly="true"
            value="79001234567"
            label="Country selector locked (RU)"
          />
          <DesignComponent
            country-default="RU"
            :country-list="['RU']"
            value="79001234567"
            label="Single-country list auto-lock (RU)"
          />
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(2)
await expect(inputs[0]).not.toHaveAttribute('readonly')
await expect(inputs[0].value).toBe('+7-900-123-45-67')
await expect(inputs[1].value).toBe('+7-900-123-45-67')
      `
    },
    {
      id: 'InputPhoneWarning',
      name: {
        en: 'Warning State (non-blocking)',
        ru: 'Состояние предупреждения (warning)'
      },
      propsName: ['warning', 'warningMessage', 'countryDefault'],
      template: `
        <DesignComponent
          country-default="XK"
          value="38344123456"
          :warning="true"
          warning-message="Phone number from legacy profile needs confirmation"
          label="Contact phone (XK)"
        />
      `,
      play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(canvasElement.textContent).toContain('Phone number from legacy profile needs confirmation')
const inputElement = canvasElement.querySelector<HTMLInputElement>('input')
await expect(inputElement?.value).toBe('+383-44-123-456')
      `
    },
    {
      id: 'InputPhoneSkeleton',
      name: {
        en: 'Skeleton state',
        ru: 'Состояние скелетона'
      },
      propsName: ['isSkeleton'],
      template: `
        <DesignComponent
          :is-skeleton="true"
          label="Phone number"
        />
      `,
      play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
      `
    },
    {
      id: 'InputPhoneExpose',
      name: {
        en: 'Exposed API',
        ru: 'Программный API (expose)'
      },
      setup: `
      const phoneRef = ref<InputPhoneExposeType | null>(null)
      const phoneValue = ref<string>('12025550147')
      const exposeStatus = ref<string>('ready')

      const runReadState = () => {
        const detail = phoneRef.value?.getDetail?.()
        exposeStatus.value = String(phoneRef.value?.getValue?.())
          + '|' + String(phoneRef.value?.checkValidity?.())
          + '|' + String(detail?.e164 ?? '')
          + '|' + String(phoneRef.value?.isChanged?.())
      }

      const runSetValue = () => {
        phoneRef.value?.setValue?.('79001234567')
        const detail = phoneRef.value?.getDetail?.()
        exposeStatus.value = 'set:' + String(phoneRef.value?.getValue?.())
          + '|' + String(phoneRef.value?.checkValidity?.())
          + '|' + String(detail?.item?.value ?? '')
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
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
      `,
      play: `
const statusOutput = canvasElement.querySelector<HTMLElement>('[data-testid="expose-status"]')

await step('Call exposed getValue, checkValidity, getDetail, and isChanged', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="btn-expose-read"]')!)
  await new Promise(resolve => setTimeout(resolve, 40))
})
await expect(statusOutput).toHaveTextContent('12025550147|true|+12025550147|true')

await step('Call exposed setValue and clear methods', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="btn-expose-set"]')!)
  await new Promise(resolve => setTimeout(resolve, 40))
  await expect(statusOutput).toHaveTextContent('set:79001234567|true|RU')

  await userEvent.click(canvasElement.querySelector('[data-testid="btn-expose-clear"]')!)
  await new Promise(resolve => setTimeout(resolve, 40))
})
await expect(statusOutput).toHaveTextContent('cleared:')
      `
    },

    // =========================================================================
    // TIER 2: BEHAVIORAL & EDGE CASE TEST STORIES
    // =========================================================================
    {
      id: 'InputPhoneTestDialCodeAndDetection',
      name: {
        en: 'Test: Dial code selector and dynamic detection',
        ru: 'Тест: Селектор кода страны и автоопределение'
      },
      propsName: [
        'countryDefault',
        'inputPhoneDialCodeAttrs',
        'maskAttrs',
        'modelValue',
        'value'
      ],
      setup: `
      const detectedPhone = ref('')
      return { detectedPhone }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model="detectedPhone"
            country-default="US"
            :input-phone-dial-code-attrs="{ labelType: 'code', menuCountryAttrs: { list: ['US', 'VN', 'RU'] } }"
            :mask-attrs="{ view: '_' }"
            label="Dial code selector"
          />
          <span data-testid="detected-value">{{ detectedPhone }}</span>
        </div>
      `,
      play: `
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
      `
    },
    {
      id: 'InputPhoneTestOutputFormatsAndMultiModel',
      name: {
        en: 'Test: formatOutput, multi-model bindings, and countryList',
        ru: 'Тест: formatOutput, мульти-модель и countryList'
      },
      propsName: [
        'formatOutput',
        'country',
        'e164',
        'digits',
        'countryList'
      ],
      setup: `
      const phoneMask = ref<string>('79001234567')
      const phoneE164 = ref<string | undefined>('+79001234567')
      const phoneDigits = ref<string | undefined>('79001234567')
      const phoneCountry = ref<string>('RU')
      const formatE164Value = ref<string>('12025550147')
      const formatDigitsValue = ref<string>('84912345678')

      return {
        phoneMask,
        phoneE164,
        phoneDigits,
        phoneCountry,
        formatE164Value,
        formatDigitsValue
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model="phoneMask"
            v-model:e164="phoneE164"
            v-model:digits="phoneDigits"
            v-model:country="phoneCountry"
            :country-list="['RU', 'VN', 'DE']"
            label="Multi-model phone"
          />
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button data-testid="btn-set-e164" class="wiki-storybook-button" @click="phoneE164 = '+84912345678'">Set VN e164</button>
            <button data-testid="btn-set-digits" class="wiki-storybook-button" @click="phoneDigits = '493012345678'">Set DE digits</button>
            <span data-testid="multi-model-summary">{{ phoneE164 }}|{{ phoneDigits }}|{{ phoneCountry }}</span>
          </div>
          <DesignComponent
            v-model="formatE164Value"
            format-output="e164"
            label="E.164 format output"
          />
          <DesignComponent
            v-model="formatDigitsValue"
            format-output="digits"
            label="Digits format output"
          />
        </div>
      `,
      play: `
const summaryOutput = canvasElement.querySelector<HTMLElement>('[data-testid="multi-model-summary"]')
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(3)
await expect(inputs[0].value).toBe('+7-900-123-45-67')

await step('Update e164 binding and verify synchronized input, digits, and country', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="btn-set-e164"]')!)
  await new Promise(resolve => setTimeout(resolve, 60))
})
await expect(inputs[0].value).toBe('+84-91-2345-678')
await expect(summaryOutput).toHaveTextContent('+84912345678|84912345678|VN')

await step('Update digits binding and verify synchronized input, e164, and country', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="btn-set-digits"]')!)
  await new Promise(resolve => setTimeout(resolve, 60))
})
await expect(inputs[0].value).toBe('+49-301-234-5678')
await expect(summaryOutput).toHaveTextContent('+493012345678|493012345678|DE')
      `
    },
    {
      id: 'InputPhoneTestPhoneMatchAndAutocomplete',
      name: {
        en: 'Test: phoneMatch rules, textInvalidPhone, and autocomplete',
        ru: 'Тест: правила phoneMatch, textInvalidPhone и autocomplete'
      },
      propsName: [
        'phoneMatch',
        'textInvalidPhone',
        'autocomplete'
      ],
      setup: `
      const mapPhoneRef = ref<InputPhoneExposeType | null>(null)
      const callbackPhoneRef = ref<InputPhoneExposeType | null>(null)
      const mapPhoneValue = ref<string>('74951234567')
      const callbackPhoneValue = ref<string>('12025550147')
      const matchSummary = ref<string>('idle')

      const countryMatchMap = {
        RU: /^9/,
        VN: /^9/
      }

      const customValidator = (context: InputPhoneValidationContext): boolean | string => {
        return context.phone?.endsWith('0') ? true : 'Phone must end with 0'
      }

      const checkBoth = () => {
        matchSummary.value = String(mapPhoneRef.value?.checkValidity?.())
          + '|' + String(mapPhoneRef.value?.getValidationMessage?.())
          + '|' + String(callbackPhoneRef.value?.checkValidity?.())
          + '|' + String(callbackPhoneRef.value?.getValidationMessage?.())
      }

      const setValidNumbers = () => {
        mapPhoneValue.value = '79001234567'
        callbackPhoneValue.value = '12025550140'
      }

      return {
        mapPhoneRef,
        callbackPhoneRef,
        mapPhoneValue,
        callbackPhoneValue,
        matchSummary,
        countryMatchMap,
        customValidator,
        checkBoth,
        setValidNumbers
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="mapPhoneRef"
            v-model:value="mapPhoneValue"
            country-default="RU"
            autocomplete="tel-national"
            text-invalid-phone="Mobile prefix required"
            :phone-match="countryMatchMap"
            :force-show-message="true"
            label="Country map phoneMatch"
          />
          <DesignComponent
            ref="callbackPhoneRef"
            v-model:value="callbackPhoneValue"
            country-default="US"
            :phone-match="customValidator"
            :force-show-message="true"
            label="Callback phoneMatch"
          />
          <div class="wiki-storybook-flex wiki-storybook-gap">
            <button data-testid="btn-check-match" class="wiki-storybook-button" @click="checkBoth">Check</button>
            <button data-testid="btn-fix-match" class="wiki-storybook-button" @click="setValidNumbers">Fix</button>
            <span data-testid="match-summary">{{ matchSummary }}</span>
          </div>
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
const summaryOutput = canvasElement.querySelector<HTMLElement>('[data-testid="match-summary"]')
await expect(inputs[0]).toHaveAttribute('autocomplete', 'tel-national')

await step('Verify initial invalid phoneMatch states', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="btn-check-match"]')!)
  await new Promise(resolve => setTimeout(resolve, 50))
})
await expect(summaryOutput).toHaveTextContent('false|Mobile prefix required|false|Phone must end with 0')

await step('Apply valid numbers and verify phoneMatch passes', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="btn-fix-match"]')!)
  await new Promise(resolve => setTimeout(resolve, 60))
  await userEvent.click(canvasElement.querySelector('[data-testid="btn-check-match"]')!)
  await new Promise(resolve => setTimeout(resolve, 50))
})
await expect(summaryOutput).toHaveTextContent('true||true|')
      `
    },
    {
      id: 'InputPhoneTestValidation',
      name: {
        en: 'Test: Validation, pattern, and custom message',
        ru: 'Тест: Валидация, pattern и пользовательское сообщение'
      },
      propsName: [
        'required',
        'pattern',
        'validationCode',
        'validationMessage',
        'forceShowMessage',
        'helperMessage'
      ],
      setup: `
      const validationTargetRef = ref<InputPhoneExposeType | null>(null)
      const validationSummary = ref('none')
      const triggerCheck = () => {
        validationSummary.value = String(validationTargetRef.value?.checkValidity?.()) + '|' + String(validationTargetRef.value?.getValidationMessage?.())
      }
      return {
        validationTargetRef,
        validationSummary,
        triggerCheck
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="validationTargetRef"
            country-default="RU"
            value="123"
            pattern="^7[0-9]{10}$"
            :validation-code="{ patternMismatch: 'Enter 11 digits starting with 7' }"
            :force-show-message="true"
            label="Pattern phone"
            helper-message="Helper text"
          />
          <DesignComponent
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
      `,
      play: `
await expect(canvasElement.textContent).toContain('Enter 11 digits starting with 7')
await expect(canvasElement.textContent).toContain('Forced error text')
await step('Verify validation expose result', async () => {
  await userEvent.click(canvasElement.querySelector('[data-testid="btn-check-validity"]')!)
  await new Promise(resolve => setTimeout(resolve, 40))
})
await expect(canvasElement.querySelector('[data-testid="validation-summary"]')).toHaveTextContent('false|Enter 11 digits starting with 7')
      `
    },
    {
      id: 'InputPhoneTestStatesAndCancel',
      name: {
        en: 'Test: Disabled, readonly, loading, and cancel',
        ru: 'Тест: Disabled, readonly, loading и cancel'
      },
      propsName: [
        'disabled',
        'readonly',
        'loading',
        'cancel',
        'focus',
        'selected',
        'align',
        'iconTrailing'
      ],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Disabled"
            :disabled="true"
            value="79001234567"
          />
          <DesignComponent
            label="Readonly"
            :readonly="true"
            value="79001234567"
          />
          <DesignComponent
            label="Loading and trailing"
            :loading="true"
            icon-trailing="call"
            value="12025550147"
          />
          <DesignComponent
            label="Cancel none"
            cancel="none"
            align="center"
            :focus="true"
            :selected="true"
            value="12025550147"
          />
        </div>
      `,
      play: `
const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input')
await expect(inputs.length).toBe(4)
await expect(inputs[0]).toBeDisabled()
await expect(inputs[0].value).toBe('+7-900-123-45-67')
await expect(inputs[1]).toHaveAttribute('readonly')
await expect(inputs[1].value).toBe('+7-900-123-45-67')
      `
    },
    {
      id: 'InputPhoneTestSlotsAndEvents',
      name: {
        en: 'Test: Slots, attributes, and events',
        ru: 'Тест: Слоты, атрибуты и события'
      },
      propsName: [
        'inputAttrs',
        'fieldAttrs',
        'fieldLabelAttrs',
        'fieldMessageAttrs',
        'name',
        'id',
        'tabindex',
        'detail',
        'placeholder'
      ],
      setup: `
      const eventTracker = ref<string>('idle')
      const trackedValue = ref<string>('12025550147')
      const onInput = (_event: Event, validation: FieldValidationItem<string>) => {
        eventTracker.value = 'input:' + String(validation.value)
      }
      const onChange = (_event: Event, validation: FieldValidationItem<string>) => {
        eventTracker.value = 'change:' + String(validation.value)
      }
      const onFocus = () => {
        eventTracker.value = 'focus'
      }
      const onBlur = () => {
        eventTracker.value = 'blur'
      }
      return {
        eventTracker,
        trackedValue,
        onInput,
        onChange,
        onFocus,
        onBlur
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
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
            @focus="onFocus"
            @blur="onBlur"
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
          </DesignComponent>
          <span data-testid="event-tracker">{{ eventTracker }}</span>
        </div>
      `,
      play: `
await expect(canvasElement.textContent).toContain('[LABEL]')
await expect(canvasElement.textContent).toContain('Tel:')
await expect(canvasElement.textContent).toContain('EXT')
await expect(canvasElement.textContent).toContain('[OK]')
await expect(canvasElement.textContent).toContain('Hint')
await expect(canvasElement.querySelector('[data-test-field="true"]')).toBeInTheDocument()
await expect(canvasElement.querySelector('[data-test-input="true"]')).toBeInTheDocument()
await expect(canvasElement.querySelector('input[name="phone-slots-name"]')).toBeInTheDocument()
const inputElement = canvasElement.querySelector<HTMLInputElement>('input')
await userEvent.click(inputElement!)
await expect(canvasElement.querySelector('[data-testid="event-tracker"]')).toHaveTextContent('focus')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputPhoneVModel}/>

<StorybookDescriptions componentName={'InputPhone'} type={'countryBlock'}/>
<Canvas of={Component.InputPhoneCountryBlock}/>

<StorybookDescriptions componentName={'InputPhone'} type={'countryReadonly'}/>
<Canvas of={Component.InputPhoneCountryReadonly}/>

<Canvas of={Component.InputPhoneWarning}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputPhoneSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
<StorybookDescriptions componentName={'Event'} type={'focus'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'setValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>
<Canvas of={Component.InputPhoneExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'leading'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    description: `
Phone number input field combining Field, InputPhoneDialCode, and Mask. Automatically detects country codes (including XK Kosovo +383), switches phone masks dynamically on input, full-selection paste, or browser autofill (with prefix deduplication and leading +within normalization like +8 to +7), supports countryList filtering, countryBlock (hides selector) and countryReadonly (locks selector while keeping flag & dial code visible, with automatic lock on single-country lists), configurable formatOutput ('mask' | 'e164' | 'digits') with synchronized v-model:country / v-model:e164 / v-model:digits bindings, custom dial code and mask options (inputPhoneDialCodeAttrs, maskAttrs, countryDefault, autocomplete), pattern and country-specific/custom phoneMatch validation (with textInvalidPhone fallback) plus non-blocking warnings (warning, warningMessage, warningId), slots, detail-enriched events (input, inputLite, change, changeLite, focus, blur), and exposed methods (getValue, setValue, clear, checkValidity, getValidationMessage, getDetail, isChanged).
    `
  }
}
