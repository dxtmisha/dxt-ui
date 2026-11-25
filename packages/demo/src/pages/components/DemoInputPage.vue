<script setup lang="ts">
import { ref } from 'vue'
import type { NumberOrString } from '@dxtmisha/functional'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { InputExpose } from '@dxtmisha/constructor/Input'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

// Individual type models
const valueText = ref<string>('Hello World')
const valueTextEmpty = ref<string>('')
const valueSearch = ref<string>('Design tokens')
const valuePassword = ref<string>('Secret123')
const valuePasswordConfirm = ref<string>('Secret')
const valueNumber = ref<number>(42)
const valueZero = ref<number>(0)
const valueArrowAuto = ref<number>(5)
const valueArrowStepper = ref<number>(10)
const valueArrowCarousel = ref<number>(3)
const valueArrowNone = ref<number>(7)
const valueNumberFormatEn = ref<number>(12345.67)
const valueNumberFormatRu = ref<number>(987654.321)
const valueCurrencyUsd = ref<number>(1499.95)
const valueCurrencyEur = ref<number>(2500.5)
const valueCurrencyRub = ref<number>(4990)
const valueEmail = ref<string>('email@example.com')
const valueUrl = ref<string>('https://example.com')
const valueTel = ref<string>('+79001234567')
const valueDate = ref<string>('2025-05-11')
const valueDateTime = ref<string>('2025-05-11T14:30')
const valueYearMonth = ref<string>('2025-05')
const valueTime = ref<string>('14:30:00')
const valueHourMinute = ref<string>('14:30')
const valueCheckbox = ref<string>('on')
const valueRadio = ref<string>('option-a')
const valueDatalist = ref<string>('Vue 3')

// Mask models
const valuePhoneMask = ref<string>('+7 (900) 123-45-67')
const valueMaskHidden = ref<string>('4242')
const valueMaskNone = ref<string>('raw-123')
const valueMaskAttrs = ref<string>('123456')

// Validation models
const valuePattern = ref<string>('123')
const valueMinMax = ref<string>('ab')

// Dynamic state toggles & blocked tracking
const dynamicValue = ref<string>('Dynamic target')
const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(true)
const isDynamicFocus = ref<boolean>(false)
const isDynamicSelected = ref<boolean>(false)
const isDynamicWarning = ref<boolean>(false)
const blockedTriggerCount = ref<number>(0)
const isLifecycleMounted = ref<boolean>(true)

// Form integration state
const formValue = ref<string>('')
const formStatus = ref<string>('Not submitted')

// Exposed API ref and readouts
const exposedTarget = ref<InputExpose>()
const exposedResult = ref<string>('none')

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleInputEvent = (
  domEvent: InputEvent | Event,
  validationItem: FieldValidationItem<NumberOrString>
): void => {
  trackEvent('input', {
    eventType: domEvent.type,
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleInputLiteEvent = (validationItem: FieldValidationItem<NumberOrString>): void => {
  trackEvent('inputLite', {
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleChangeEvent = (
  domEvent: InputEvent | Event,
  validationItem: FieldValidationItem<NumberOrString>
): void => {
  trackEvent('change', {
    eventType: domEvent.type,
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleChangeLiteEvent = (validationItem: FieldValidationItem<NumberOrString>): void => {
  trackEvent('changeLite', {
    value: validationItem.value,
    detail: validationItem.detail,
    status: validationItem.status
  })
}

const handleFocusEvent = (focusEvent: FocusEvent): void => {
  trackEvent('focus', { eventType: focusEvent.type })
}

const handleBlurEvent = (focusEvent: FocusEvent): void => {
  trackEvent('blur', { eventType: focusEvent.type })
}

const handleUpdateValue = (nextValue: NumberOrString): void => {
  trackEvent('update:value', { value: nextValue })
}

const handleUpdateModelValue = (nextValue: NumberOrString): void => {
  trackEvent('update:modelValue', { value: nextValue })
}

const handleBlockedEvent = (): void => {
  blockedTriggerCount.value += 1
}

const handleFormSubmit = (): void => {
  formStatus.value = formValue.value.trim().length >= 3
    ? `Form submitted (${formValue.value})`
    : 'Form blocked (invalid)'
}

const handleFormReset = (): void => {
  formValue.value = ''
  formStatus.value = 'Form reset'
}

const handleReadExposed = (): void => {
  const currentValue = exposedTarget.value?.getValue()
  const reactiveValue = exposedTarget.value?.value
  const isValid = exposedTarget.value?.checkValidity()
  const isChanged = exposedTarget.value?.isChanged()
  const validationMessage = exposedTarget.value?.getValidationMessage()
  exposedResult.value = `value=${String(currentValue)}, ref=${String(reactiveValue)}, valid=${String(isValid)}, changed=${String(isChanged)}, message=${validationMessage || 'none'}`
}

const handleSetExposed = (): void => {
  exposedTarget.value?.setValue('Preset Value')
  handleReadExposed()
}

const handleClearExposed = (): void => {
  exposedTarget.value?.clear()
  handleReadExposed()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Input">
    <D1Section class="demo-input-page">
      <D1Group label="Appearances & Layout">
        <DemoFlex>
          <DemoBox><D1Input label="Classic (default)" classic value="Classic"/></DemoBox>
          <DemoBox><D1Input label="Filled" filled value="Filled"/></DemoBox>
          <DemoBox><D1Input label="Outlined" outlined value="Outlined"/></DemoBox>
          <DemoBox><D1Input label="Tonal" tonal value="Tonal"/></DemoBox>
          <DemoBox><D1Input label="Boxed" boxed value="Boxed"/></DemoBox>
          <DemoBox><D1Input label="Basic" basic value="Basic"/></DemoBox>
          <DemoBox><D1Input label="Custom Width (240px)" outlined width="240px" value="Fixed 240px"/></DemoBox>
          <DemoBox><D1Input label="Block Width" outlined block value="Full width input"/></DemoBox>
          <DemoBox><D1Input label="Field Palette Blue" outlined :field-attrs="{ palette: 'blue' }" value="Blue field"/></DemoBox>
          <DemoBox><D1Input label="Forced isValue" outlined is-value placeholder="Placeholder with isValue"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes & Alignments">
        <DemoFlex>
          <DemoBox><D1Input label="Small (sm)" size="sm" value="Small"/></DemoBox>
          <DemoBox><D1Input label="Medium (md)" size="md" value="Medium"/></DemoBox>
          <DemoBox><D1Input label="Large (lg)" size="lg" value="Large"/></DemoBox>
          <DemoBox><D1Input label="Display" size="display" value="Display"/></DemoBox>
          <DemoBox><D1Input label="Align Left" align="left" value="Left aligned"/></DemoBox>
          <DemoBox><D1Input label="Align Center" align="center" value="Center aligned"/></DemoBox>
          <DemoBox><D1Input label="Align Right" align="right" value="Right aligned"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Type: Text & v-model Controls">
        <DemoFlex direction="column">
          <DemoFlex>
            <DemoBox>
              <D1Input
                v-model="valueText"
                type="text"
                label="Controlled Text"
                placeholder="Enter text..."
                autocomplete="name"
                autocapitalize="words"
                autocorrect="off"
                spellcheck="false"
                enter-key-hint="next"
                input-mode="text"
              />
              <DemoFlex align="center">
                <D1Button label="Set Sample" size="sm" outline @click="valueText = 'Updated Text'"/>
                <D1Button label="Clear" size="sm" outline @click="valueText = ''"/>
                <D1Button label="Reset" size="sm" outline @click="valueText = 'Hello World'"/>
              </DemoFlex>
              <DemoValue :value="valueText"/>
            </DemoBox>
            <DemoBox>
              <D1Input
                v-model="valueTextEmpty"
                type="text"
                label="Empty Text"
                placeholder="Type here..."
                helper-message="Optional text input"
              />
              <DemoValue :value="valueTextEmpty"/>
            </DemoBox>
            <DemoBox>
              <D1Input
                v-model="valueDatalist"
                type="text"
                label="Datalist Suggestions"
                list="demo-input-datalist"
              />
              <datalist id="demo-input-datalist">
                <option value="Vue 3"/>
                <option value="TypeScript"/>
                <option value="Vite"/>
              </datalist>
              <DemoValue :value="valueDatalist"/>
            </DemoBox>
            <DemoBox>
              <D1Input
                type="text"
                label="HTML Code Message"
                has-html-code
                helper-message="Helper with <strong>strong</strong> markup"
                value="<b>Plain</b>"
              />
            </DemoBox>
          </DemoFlex>
        </DemoFlex>
      </D1Group>

      <D1Group label="Type: Search">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valueSearch"
              type="search"
              label="Search Input"
              placeholder="Search items..."
              icon="search"
              cancel="always"
              enter-key-hint="search"
              input-mode="search"
            />
            <DemoValue :value="valueSearch"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Type: Password">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valuePassword"
              name="demo-password-source"
              type="password"
              label="Password"
              text-show="Show password"
              text-hide="Hide password"
              autocomplete="new-password"
            />
            <DemoValue :value="valuePassword"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valuePasswordConfirm"
              type="password"
              label="Confirm Password (Match)"
              match="[name='demo-password-source']"
              text-entries-match="Passwords must match"
            />
            <DemoValue :value="valuePasswordConfirm"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              type="password"
              label="Custom Visibility Icons"
              value="CustomIcons"
              icon-visibility="lock_open"
              icon-visibility-off="lock"
              text-show="Reveal"
              text-hide="Conceal"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Type: Number & Arrows">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valueNumber"
              type="number"
              label="Standard Number"
              input-mode="decimal"
            />
            <DemoValue :value="valueNumber"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueZero"
              type="number"
              label="Numeric Zero"
            />
            <DemoValue :value="valueZero"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueArrowAuto"
              type="number"
              arrow="auto"
              label="Arrow Auto (0..20)"
              :min="0"
              :max="20"
              :step="1"
            />
            <DemoValue :value="valueArrowAuto"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueArrowStepper"
              type="number"
              arrow="stepper"
              :min="0"
              :max="100"
              :step="5"
              :arrow-step="5"
              label="Arrow Stepper (step 5)"
            />
            <DemoValue :value="valueArrowStepper"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueArrowCarousel"
              type="number"
              arrow="carousel"
              arrow-align="left"
              :min="1"
              :max="10"
              :step="1"
              label="Arrow Carousel (left)"
            />
            <DemoValue :value="valueArrowCarousel"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueArrowNone"
              type="number"
              arrow="none"
              label="Arrow None"
            />
            <DemoValue :value="valueArrowNone"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Type: Number Format">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valueNumberFormatEn"
              type="number-format"
              language="en-US"
              :fraction="2"
              label="Formatted (en-US, 2 decimals)"
            />
            <DemoValue :value="valueNumberFormatEn"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueNumberFormatRu"
              type="number-format"
              language="ru-RU"
              fraction="3"
              label="Formatted (ru-RU, 3 decimals)"
            />
            <DemoValue :value="valueNumberFormatRu"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              type="number-format"
              language="en-US"
              :fraction="true"
              value="9876.5432"
              label="Dynamic Fraction"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Type: Currency">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valueCurrencyUsd"
              type="currency"
              currency="USD"
              :fraction="2"
              language="en-US"
              label="Currency USD (en-US)"
            />
            <DemoValue :value="valueCurrencyUsd"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueCurrencyEur"
              type="currency"
              currency="EUR"
              currency-hide
              language="en-US"
              label="Currency Hidden (EUR)"
            />
            <DemoValue :value="valueCurrencyEur"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueCurrencyRub"
              type="currency"
              currency="RUB"
              :fraction="0"
              language="ru-RU"
              label="Currency RUB (ru-RU)"
            />
            <DemoValue :value="valueCurrencyRub"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Types: Email, URL & Tel">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valueEmail"
              type="email"
              label="Email Input"
              input-mode="email"
              placeholder="name@domain.com"
            />
            <DemoValue :value="valueEmail"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueUrl"
              type="url"
              label="URL Input"
              input-mode="url"
              placeholder="https://example.com"
            />
            <DemoValue :value="valueUrl"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueTel"
              type="tel"
              label="Telephone Input"
              input-mode="tel"
              placeholder="+1 555 000 0000"
            />
            <DemoValue :value="valueTel"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Types: Date & Time">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valueDate"
              type="date"
              language="en-US"
              min="2024-01-01"
              max="2026-12-31"
              label="Date (en-US)"
            />
            <DemoValue :value="valueDate"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueDateTime"
              type="datetime"
              language="en-US"
              label="DateTime (en-US)"
            />
            <DemoValue :value="valueDateTime"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueYearMonth"
              type="year-month"
              language="en-US"
              label="Year-Month"
            />
            <DemoValue :value="valueYearMonth"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueTime"
              type="time"
              language="en-US"
              label="Time"
            />
            <DemoValue :value="valueTime"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueHourMinute"
              type="hour-minute"
              language="en-US"
              label="Hour-Minute"
            />
            <DemoValue :value="valueHourMinute"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Types: Checkbox & Radio (Fallback to Text)">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valueCheckbox"
              type="checkbox"
              label="Checkbox Type (Fallback to Text)"
            />
            <DemoValue :value="valueCheckbox"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueRadio"
              type="radio"
              name="demo-radio-type"
              label="Radio Type (Fallback to Text)"
            />
            <DemoValue :value="valueRadio"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Masks">
        <DemoFlex>
          <DemoBox>
            <D1Input
              v-model="valuePhoneMask"
              label="Phone Mask"
              mask="+7 (***) ***-**-**"
            />
            <DemoValue :value="valuePhoneMask"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueMaskHidden"
              label="Mask Visible False"
              mask="****-****"
              :mask-visible="false"
            />
            <DemoValue :value="valueMaskHidden"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueMaskNone"
              label="Mask None"
              mask="****-****"
              mask-none
            />
            <DemoValue :value="valueMaskNone"/>
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueMaskAttrs"
              label="Mask Custom Attrs"
              mask="*** ***"
              :mask-attrs="{ view: '0', groupSave: false }"
            />
            <DemoValue :value="valueMaskAttrs"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Validation, Counter & Warning">
        <DemoFlex>
          <DemoBox>
            <D1Input
              label="Required Field"
              required
              helper-id="helper-required"
              helper-message="Required field hint"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valueMinMax"
              label="Min / Max Length"
              :minlength="3"
              :maxlength="12"
              counter-show
              counter-id="counter-length"
              helper-message="3 to 12 characters"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Explicit Counter Prop"
              :counter="8"
              counter-show
              :maxlength="20"
              value="Explicit"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              v-model="valuePattern"
              label="Pattern Letters Only"
              pattern="[A-Za-z]+"
              :validation-code="{ patternMismatch: 'Only Latin letters allowed' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Forced Validation Message"
              validation-id="validation-forced"
              validation-message="Server validation failed"
              force-show-message
              value="Invalid"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="String ValidationCode"
              pattern="[0-9]+"
              validation-code="Must contain digits only"
              value="abc"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Warning State"
              warning
              warning-id="warning-input"
              warning-message="Caps Lock may be active"
              helper-message="Fallback helper text"
              value="Warning value"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Validation Overrides Warning"
              warning
              warning-message="Warning text"
              validation-message="Validation takes priority"
              force-show-message
              value="Error priority"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons, Cancel & Loading">
        <DemoFlex>
          <DemoBox>
            <D1Input
              label="Icon Names & Trailing Modifiers"
              icon="search"
              icon-trailing="arrow_forward"
              icon-palette
              icon-trailing-palette
              icon-trailing-dir-only
              icon-trailing-turn-only
              value="With icons"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Icon Object, Dir & Hide"
              :icon="{ icon: 'mail', size: 'sm' }"
              icon-dir
              icon-turn
              :icon-hide="false"
              :icon-attrs="{ rounded: 'full' }"
              value="user@example.com"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Hidden Icon"
              icon="visibility"
              icon-hide
              value="Icon hidden"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Cancel Always"
              cancel="always"
              text-cancel="Clear input"
              value="Clearable"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Cancel None"
              cancel="none"
              value="Not clearable"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Loading Boolean"
              loading
              value="Loading..."
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Loading Object"
              :loading="{ visible: true, value: 65, max: 100 }"
              value="Progress circular value"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Interactive Toggles & Skeleton">
        <DemoFlex>
          <DemoBox><D1Input label="Disabled" disabled value="Disabled content"/></DemoBox>
          <DemoBox><D1Input label="Readonly" readonly value="Readonly content"/></DemoBox>
          <DemoBox><D1Input label="Focused" focus value="Focused state"/></DemoBox>
          <DemoBox><D1Input label="Selected" selected value="Selected state"/></DemoBox>
          <DemoBox>
            <D1Skeleton :active="true">
              <D1Input label="Skeleton" is-skeleton value="Skeleton content"/>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>

        <D1Skeleton :active="isDynamicSkeleton">
          <D1Input
            v-model="dynamicValue"
            data-testid="demo-input-dynamic"
            label="Dynamic State Input"
            helper-message="Toggle disabled, readonly, loading, skeleton, focus, selected, warning"
            warning-message="Dynamic warning state"
            :disabled="isDynamicDisabled"
            :readonly="isDynamicReadonly"
            :loading="isDynamicLoading"
            :is-skeleton="isDynamicSkeleton"
            :focus="isDynamicFocus"
            :selected="isDynamicSelected"
            :warning="isDynamicWarning"
          />
        </D1Skeleton>
        <DemoFlex align="center">
          <D1Button label="Toggle Disabled" size="sm" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" size="sm" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
          <D1Button label="Toggle Loading" size="sm" outline @click="isDynamicLoading = !isDynamicLoading"/>
          <D1Button label="Toggle Skeleton" size="sm" outline @click="isDynamicSkeleton = !isDynamicSkeleton"/>
          <D1Button label="Toggle Focus" size="sm" outline @click="isDynamicFocus = !isDynamicFocus"/>
          <D1Button label="Toggle Selected" size="sm" outline @click="isDynamicSelected = !isDynamicSelected"/>
          <D1Button label="Toggle Warning" size="sm" outline @click="isDynamicWarning = !isDynamicWarning"/>
        </DemoFlex>
        <DemoValue
          label="Dynamic Flags"
          :value="{
            isDynamicDisabled,
            isDynamicReadonly,
            isDynamicLoading,
            isDynamicSkeleton,
            isDynamicFocus,
            isDynamicSelected,
            isDynamicWarning
          }"
        />
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <DemoFlex>
          <DemoBox>
            <D1Input
              label="Blocked Disabled"
              disabled
              value="Locked"
              @input="handleBlockedEvent"
              @change="handleBlockedEvent"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Blocked Readonly"
              readonly
              value="Readonly"
              @input="handleBlockedEvent"
              @change="handleBlockedEvent"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Blocked Loading"
              loading
              value="Loading"
              @input="handleBlockedEvent"
              @change="handleBlockedEvent"
            />
          </DemoBox>
        </DemoFlex>
        <DemoValue label="Blocked Trigger Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Prefix, Suffix, Caption Props & Slots">
        <DemoFlex>
          <DemoBox>
            <D1Input
              label="Prop Prefix, Suffix & Caption"
              prefix="https://"
              suffix=".com"
              caption="Prop caption"
              value="example"
            />
          </DemoBox>
          <DemoBox>
            <D1Input label="Leading & Trailing Slots" value="Slot content">
              <template #leading="{ id }">
                <span>[Lead:{{ id }}]</span>
              </template>
              <template #trailing>
                <span>[Trail]</span>
              </template>
            </D1Input>
          </DemoBox>
          <DemoBox>
            <D1Input label="Prefix & Suffix Slots" value="domain" prefix-id="prefix-id" suffix-id="suffix-id">
              <template #prefix>
                <span>https://</span>
              </template>
              <template #suffix>
                <span>.dev</span>
              </template>
            </D1Input>
          </DemoBox>
          <DemoBox>
            <D1Input label="With Caption Slot" width="280px" value="Input value" caption-decorative>
              <template #caption>
                <span>Note</span>
              </template>
            </D1Input>
          </DemoBox>
          <DemoBox>
            <D1Input label="Label:" label-id="custom-label-id" value="With label slot">
              <template #label>
                <span> Custom</span>
              </template>
            </D1Input>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Exposed API">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Input
              ref="exposedTarget"
              label="Exposed Target"
              required
              value="Initial"
            />
          </DemoBox>
          <DemoFlex>
            <D1Button label="Read Values" size="sm" @click="handleReadExposed"/>
            <D1Button label="setValue('Preset Value')" size="sm" outline @click="handleSetExposed"/>
            <D1Button label="clear()" size="sm" outline @click="handleClearExposed"/>
          </DemoFlex>
          <DemoValue label="Expose Output" :value="exposedResult"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Form Integration">
        <form id="demo-input-form" @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <D1Input
            v-model="formValue"
            form="demo-input-form"
            name="username"
            label="Username (required, min 3 chars)"
            placeholder="Enter username..."
            required
            :minlength="3"
          />
          <DemoFlex align="center">
            <D1Button label="Submit Form" tag="button" type="submit" size="sm" primary/>
            <D1Button label="Reset Form" tag="button" type="reset" size="sm" outline/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Status" :value="formStatus"/>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Input
              label="Event Tracker"
              placeholder="Type and blur to emit events..."
              :detail="{ source: 'demo-input' }"
              @focus="handleFocusEvent"
              @blur="handleBlurEvent"
              @update:value="handleUpdateValue"
              @update:model-value="handleUpdateModelValue"
              @input="handleInputEvent"
              @input-lite="handleInputLiteEvent"
              @change="handleChangeEvent"
              @change-lite="handleChangeLiteEvent"
            />
          </DemoBox>
          <DemoValue label="Event Name" :value="eventName"/>
          <DemoValue label="Event Payload" :value="eventPayload"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Accessibility (ARIA & Attributes)">
        <DemoFlex>
          <DemoBox>
            <D1Input
              id="custom-input-id"
              name="custom-field-name"
              label="Custom Attrs"
              :tabindex="0"
              :detail="{ origin: 'demo' }"
              :field-attrs="{ 'data-custom-field': 'yes' }"
              :input-attrs="{ 'data-custom-input': 'yes' }"
              :field-label-attrs="{ 'data-custom-label': 'yes' }"
              :field-message-attrs="{ 'data-custom-message': 'yes' }"
              :field-counter-attrs="{ 'data-custom-counter': 'yes' }"
              counter-show
              :maxlength="40"
              helper-message="Attributed field"
              value="Attrs"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              :input-attrs="{ 'aria-label': 'Standalone input without visible label' }"
              placeholder="Aria-labeled input"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <DemoBox><D1Input label="Empty String" value=""/></DemoBox>
          <DemoBox><D1Input label="Whitespace Value" value="   "/></DemoBox>
          <DemoBox><D1Input label="Null Value" :value="undefined" placeholder="Undefined/empty"/></DemoBox>
          <DemoBox><D1Input label="Single Character" value="A"/></DemoBox>
          <DemoBox><D1Input label="Negative Number" type="number" :value="-42"/></DemoBox>
          <DemoBox><D1Input label="Decimal Number" type="number" :value="3.14"/></DemoBox>
          <DemoBox>
            <D1Input
              label="Long Multi-Sentence Text"
              value="Very long multi-sentence input value designed to verify horizontal scrolling and clean visual boundaries across containers."
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Unicode & Emoji"
              value="Привет / Học tiếng Việt 🚀✨"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="XSS Escaped Text"
              value="<img src=x onerror=alert(1)>"
            />
          </DemoBox>
        </DemoFlex>
        <DemoBox class="demo-input-page__narrow" size="sm">
          <D1Input
            label="Narrow Container Unbroken"
            value="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1Input
            data-testid="demo-input-lifecycle"
            label="Mounted Input"
            value="Active in DOM"
          />
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-input-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
