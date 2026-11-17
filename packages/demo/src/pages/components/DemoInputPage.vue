<script setup lang="ts">
import { ref } from 'vue'
import type { InputExpose } from '@dxtmisha/constructor/Input'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

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

// Mask models
const valuePhoneMask = ref<string>('+7 (900) 123-45-67')
const valueMaskHidden = ref<string>('4242')
const valueMaskNone = ref<string>('raw-123')
const valueMaskAttrs = ref<string>('123456')

// Validation models
const valuePattern = ref<string>('123')
const valueMinMax = ref<string>('ab')

// Exposed API ref and readouts
const exposedRef = ref<InputExpose>()
const exposedResult = ref<string>('none')

const onReadExposed = (): void => {
  const val = exposedRef.value?.getValue()
  const valid = exposedRef.value?.checkValidity()
  const msg = exposedRef.value?.getValidationMessage()
  exposedResult.value = `value=${String(val)}, valid=${String(valid)}, message=${msg || 'none'}`
}

const onSetExposed = (): void => {
  exposedRef.value?.setValue('Preset Value')
  onReadExposed()
}

const onClearExposed = (): void => {
  exposedRef.value?.clear()
  onReadExposed()
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

      <D1Group label="Type: Text">
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
                type="text"
                label="HTML Code Input"
                has-html-code
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

      <D1Group label="Validation & Counter">
        <DemoFlex>
          <DemoBox>
            <D1Input
              label="Required Field"
              required
              helper-id="helper-req"
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
              counter-id="counter-len"
              helper-message="3 to 12 characters"
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
              validation-id="val-forced"
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
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons, Cancel & Loading">
        <DemoFlex>
          <DemoBox>
            <D1Input
              label="Icon Names"
              icon="search"
              icon-trailing="check"
              icon-palette
              value="With icons"
            />
          </DemoBox>
          <DemoBox>
            <D1Input
              label="Icon Object & Dir"
              :icon="{ icon: 'mail', size: 'sm' }"
              icon-dir
              icon-turn
              :icon-attrs="{ rounded: 'full' }"
              value="user@example.com"
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

      <D1Group label="States & Skeleton">
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
      </D1Group>

      <D1Group label="Boundary Cases">
        <DemoFlex>
          <DemoBox><D1Input label="Whitespace Value" value="   "/></DemoBox>
          <DemoBox>
            <D1Input
              label="Long Unbroken Text"
              width="240px"
              value="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
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
      </D1Group>

      <D1Group label="Slots & Attributes">
        <DemoFlex>
          <DemoBox>
            <D1Input label="Leading & Trailing" value="Slot content">
              <template #leading>
                <span>[Lead]</span>
              </template>
              <template #trailing>
                <span>[Trail]</span>
              </template>
            </D1Input>
          </DemoBox>
          <DemoBox>
            <D1Input label="Prefix & Suffix" value="domain" prefix-id="pref-id" suffix-id="suf-id">
              <template #prefix>
                <span>https://</span>
              </template>
              <template #suffix>
                <span>.dev</span>
              </template>
            </D1Input>
          </DemoBox>
          <DemoBox>
            <D1Input label="With Caption" width="280px" value="Input value" caption-decorative>
              <template #caption>
                <span>Note</span>
              </template>
            </D1Input>
          </DemoBox>
          <DemoBox>
            <D1Input label="Label:" label-id="custom-lbl-id" value="With label slot">
              <template #label>
                <span> Custom</span>
              </template>
            </D1Input>
          </DemoBox>
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
        </DemoFlex>
      </D1Group>

      <D1Group label="Exposed API">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Input
              ref="exposedRef"
              label="Exposed Target"
              required
              value="Initial"
            />
          </DemoBox>
          <DemoFlex>
            <D1Button label="Read Values" @click="onReadExposed"/>
            <D1Button label="setValue('Preset Value')" @click="onSetExposed"/>
            <D1Button label="clear()" @click="onClearExposed"/>
          </DemoFlex>
          <DemoValue :value="exposedResult"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Input
              label="Event Tracker"
              placeholder="Type and blur to emit events..."
              @update:value="() => onEvent('update:value')"
              @update:model-value="() => onEvent('update:modelValue')"
              @input="(event, value) => onEvent('input', event, value)"
              @input-lite="(value) => onEvent('inputLite', value)"
              @change="(event, value) => onEvent('change', event, value)"
              @change-lite="(value) => onEvent('changeLite', value)"
            />
          </DemoBox>
          <DemoValue :value="eventName"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
