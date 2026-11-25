<script setup lang="ts">
import { ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { InputPhoneExpose, InputPhoneValidationContext } from '@dxtmisha/constructor/InputPhone'
import type { InputPhoneProps } from '@dxtmisha/d1/D1InputPhone'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<NonNullable<InputPhoneProps['fieldAttrs']>['palette']>[] = [
  'red',
  'orange',
  'amber',
  'green',
  'emerald',
  'teal',
  'blue',
  'indigo',
  'purple',
  'rose',
  'slate',
  'neutral'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const valueBasic = ref<string>('')
const valueModel = ref<string>('12025550147')
const valueUS = ref<string>('')
const valueDE = ref<string>('')
const valueVN = ref<string>('84912345678')
const valueCountryReadonly = ref<string>('79001234567')
const valueSingleCountry = ref<string>('79001234567')
const valueBlocked = ref<string>('')
const valueMaskAttrs = ref<string>('')
const valueValidation = ref<string>('7900')
const valueRequired = ref<string>('')
const valueIncomplete = ref<string>('')
const valueLengthMask = ref<string>('49301234')
const valueConflictCode = ref<string>('12025550147')
const valueWithinRU = ref<string>('')
const valueWithinVN = ref<string>('')
const valueWithinRUBlocked = ref<string>('')
const valueWithinVNBlocked = ref<string>('')
const valuePasteCountry = ref<string>('')
const valuePasteSelectAllVN = ref<string>('84912345678')
const valuePastePartialRU = ref<string>('79001234567')
const valuePasteRU = ref<string>('')
const valuePasteVN = ref<string>('')
const valuePasteBlocked = ref<string>('')
const copiedSample = ref<string>('none')

const countryDefaultDynamic = ref<string | undefined>(undefined)
const valueDynamicUntouched = ref<string>('')
const valueDynamicModified = ref<string>('79001234567')
const dynamicResetKey = ref<number>(0)

const modelCountryCode = ref<string>('DE')
const valueModelCountry = ref<string>('')

const valueFormatMask = ref<string | undefined>('+1-202-555-0147')
const valueFormatE164 = ref<string | undefined>('+12025550147')
const valueFormatDigits = ref<string | undefined>('84912345678')
const valueMultiMask = ref<string | undefined>('79001234567')
const valueMultiE164 = ref<string | undefined>('+79001234567')
const valueMultiDigits = ref<string | undefined>('79001234567')
const valueMultiCountry = ref<string>('RU')
const valueRestrictedList = ref<string>('84912345678')
const valuePhoneMatchMap = ref<string>('74951234567')
const valuePhoneMatchCustom = ref<string>('12025550147')
const valuePhoneMatchRegex = ref<string>('74951234567')

const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(false)
const isDynamicCountryBlock = ref<boolean>(false)
const isDynamicCountryReadonly = ref<boolean>(false)
const valueDynamicTarget = ref<string>('79001234567')
const blockedTriggerCount = ref<number>(0)
const isLifecycleMounted = ref<boolean>(true)

const formPhoneValue = ref<string>('')
const formStatus = ref<string>('Not submitted')

const phoneMatchMapRef = ref<InputPhoneExpose>()
const phoneMatchMapResult = ref<string>('not checked')
const phoneMatchCustomRef = ref<InputPhoneExpose>()
const phoneMatchCustomResult = ref<string>('not checked')
const phoneMatchRegexRef = ref<InputPhoneExpose>()
const phoneMatchRegexResult = ref<string>('not checked')

const phoneMatchMapRule = {
  RU: /^9/,
  VN: /^9/
}

const phoneMatchCustomRule = (context: InputPhoneValidationContext): boolean | string => {
  return context.phone?.endsWith('0') ? true : 'Phone must end with 0'
}

const requiredRef = ref<InputPhoneExpose>()
const requiredValidResult = ref<string>('not checked')

const incompleteRef = ref<InputPhoneExpose>()
const incompleteValidResult = ref<string>('not checked')

const exposedRef = ref<InputPhoneExpose>()
const exposedResult = ref<string>('none')

const eventPhoneValue = ref<string>('')
const eventCountryValue = ref<string>('US')
const eventDigitsValue = ref<string | undefined>(undefined)
const eventE164Value = ref<string | undefined>(undefined)

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleInputEvent = (
  domEvent: InputEvent | Event,
  validationItem: FieldValidationItem<string>
): void => {
  trackEvent('input', {
    eventType: domEvent.type,
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleInputLiteEvent = (validationItem: FieldValidationItem<string>): void => {
  trackEvent('inputLite', {
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleChangeEvent = (
  domEvent: InputEvent | Event,
  validationItem: FieldValidationItem<string>
): void => {
  trackEvent('change', {
    eventType: domEvent.type,
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleChangeLiteEvent = (validationItem: FieldValidationItem<string>): void => {
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

const handleBlockedEvent = (): void => {
  blockedTriggerCount.value += 1
}

const onCheckRequired = (): void => {
  const valid = requiredRef.value?.checkValidity()
  const message = requiredRef.value?.getValidationMessage()

  requiredValidResult.value = `valid=${String(valid)}, message=${message || 'none'}`
}

const onCheckIncomplete = (): void => {
  const valid = incompleteRef.value?.checkValidity()
  const message = incompleteRef.value?.getValidationMessage()

  incompleteValidResult.value = `valid=${String(valid)}, message=${message || 'none'}`
}

const onCheckPhoneMatchMap = (): void => {
  const valid = phoneMatchMapRef.value?.checkValidity()
  const message = phoneMatchMapRef.value?.getValidationMessage()

  phoneMatchMapResult.value = `valid=${String(valid)}, message=${message || 'none'}`
}

const onCheckPhoneMatchCustom = (): void => {
  const valid = phoneMatchCustomRef.value?.checkValidity()
  const message = phoneMatchCustomRef.value?.getValidationMessage()

  phoneMatchCustomResult.value = `valid=${String(valid)}, message=${message || 'none'}`
}

const onCheckPhoneMatchRegex = (): void => {
  const valid = phoneMatchRegexRef.value?.checkValidity()
  const message = phoneMatchRegexRef.value?.getValidationMessage()

  phoneMatchRegexResult.value = `valid=${String(valid)}, message=${message || 'none'}`
}

const onResetDynamicCountry = (): void => {
  countryDefaultDynamic.value = undefined
  valueDynamicUntouched.value = ''
  valueDynamicModified.value = '79001234567'
  dynamicResetKey.value++
}

const onReadExposed = (): void => {
  const reactiveValue = exposedRef.value?.value
  const value = exposedRef.value?.getValue()
  const valid = exposedRef.value?.checkValidity()
  const message = exposedRef.value?.getValidationMessage()
  const detail = exposedRef.value?.getDetail()
  const changed = exposedRef.value?.isChanged()

  exposedResult.value = `reactive=${String(reactiveValue)}, value=${String(value)}, valid=${String(valid)}, message=${message || 'none'}, country=${detail?.item?.value || 'none'}, e164=${detail?.e164 || 'none'}, isFull=${String(detail?.isFull)}, changed=${String(changed)}`
}

const onSetExposed = (): void => {
  exposedRef.value?.setValue('4930123456')
  onReadExposed()
}

const onClearExposed = (): void => {
  exposedRef.value?.clear()
  onReadExposed()
}

const onCopySample = async (text: string): Promise<void> => {
  await navigator.clipboard?.writeText(text)
  copiedSample.value = text
}

const onResetPasteCases = (): void => {
  valuePasteCountry.value = ''
  valuePasteSelectAllVN.value = '84912345678'
  valuePastePartialRU.value = '79001234567'
  valuePasteRU.value = ''
  valuePasteVN.value = ''
  valuePasteBlocked.value = ''
}

const handleFormSubmit = (): void => {
  formStatus.value = formPhoneValue.value ? `Form submitted (${formPhoneValue.value})` : 'Form blocked (required)'
}

const handleFormReset = (): void => {
  formPhoneValue.value = ''
  formStatus.value = 'Form reset'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputPhone">
    <D1Section class="demo-input-phone-page">
      <D1Group label="Basic & v-model">
        <DemoFlex>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueBasic"
              label="Phone Number (v-model:value)"
              placeholder="Enter phone number"
            />
            <DemoValue :value="valueBasic"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model="valueModel"
              label="Controlled (v-model)"
              helper-message="Auto-detects US (+1)"
            />
            <DemoValue :value="valueModel"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Static Value Prop"
              value="79001234567"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Country Default & Dial Code Options">
        <DemoFlex direction="column">
          <DemoFlex>
            <DemoBox>
              <D1InputPhone
                v-model:value="valueUS"
                country-default="US"
                label="US Default"
              />
              <DemoValue :value="valueUS"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model:value="valueDE"
                country-default="DE"
                label="Germany Default"
              />
              <DemoValue :value="valueDE"/>
            </DemoBox>
          </DemoFlex>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueVN"
              country-default="VN"
              block
              label="Dial Code Label (code)"
              :input-phone-dial-code-attrs="{ labelType: 'code', iconArrowDown: 'expand_more' }"
            />
            <DemoValue :value="valueVN"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              country-default="US"
              block
              label="Dial Code Label (name)"
              :input-phone-dial-code-attrs="{ labelType: 'name', menuCountryAttrs: { list: ['US', 'DE', 'RU', 'VN'] } }"
            />
          </DemoBox>
          <DemoFlex>
            <DemoBox>
              <D1InputPhone
                :key="`dynamic-untouched-${dynamicResetKey}`"
                v-model:value="valueDynamicUntouched"
                :country-default="countryDefaultDynamic"
                label="Reactive countryDefault (Untouched)"
                helper-message="Follows Geo default until changed; reacts when countryDefault updates"
              />
              <DemoValue :value="`${countryDefaultDynamic || 'auto'} -> ${valueDynamicUntouched || 'empty'}`"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                :key="`dynamic-modified-${dynamicResetKey}`"
                v-model:value="valueDynamicModified"
                :country-default="countryDefaultDynamic"
                label="Reactive countryDefault (Modified)"
                helper-message="Keeps existing non-default phone value when countryDefault updates"
              />
              <DemoValue :value="valueDynamicModified"/>
            </DemoBox>
          </DemoFlex>
          <DemoFlex>
            <D1Button label="Set countryDefault = DE" @click="countryDefaultDynamic = 'DE'"/>
            <D1Button label="Set countryDefault = VN" @click="countryDefaultDynamic = 'VN'"/>
            <D1Button label="Reset Dynamic Default" @click="onResetDynamicCountry"/>
          </DemoFlex>
          <DemoFlex>
            <DemoBox>
              <D1InputPhone
                v-model:value="valueModelCountry"
                v-model:country="modelCountryCode"
                label="Two-way v-model:country"
                helper-message="Syncs ISO country code bidirectionally with phone input and selector"
              />
              <DemoValue :value="`country=${modelCountryCode}, phone=${valueModelCountry || 'empty'}`"/>
            </DemoBox>
            <DemoBox>
              <DemoFlex>
                <D1Button label="v-model:country = RU" @click="modelCountryCode = 'RU'"/>
                <D1Button label="v-model:country = VN" @click="modelCountryCode = 'VN'"/>
                <D1Button label="v-model:country = DE" @click="modelCountryCode = 'DE'"/>
              </DemoFlex>
            </DemoBox>
          </DemoFlex>
        </DemoFlex>
      </D1Group>

      <D1Group label="Output Formats & Multi-Model (format-output, v-model:e164, v-model:digits)">
        <DemoFlex direction="column">
          <DemoFlex>
            <DemoBox>
              <D1InputPhone
                v-model="valueFormatMask"
                format-output="mask"
                label="Format Output: mask (default)"
                helper-message="Emits formatted mask (+1-202-555-0147)"
              />
              <DemoValue :value="valueFormatMask"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model="valueFormatE164"
                format-output="e164"
                label="Format Output: e164"
                helper-message="Emits E.164 format (+12025550147)"
              />
              <DemoValue :value="valueFormatE164"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model="valueFormatDigits"
                format-output="digits"
                label="Format Output: digits"
                helper-message="Emits digits-only format (84912345678)"
              />
              <DemoValue :value="valueFormatDigits"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model="valueMultiMask"
                v-model:e164="valueMultiE164"
                v-model:digits="valueMultiDigits"
                v-model:country="valueMultiCountry"
                label="Multi-Model Sync (mask + e164 + digits + country)"
              />
              <DemoValue :value="`mask=${valueMultiMask || 'none'} | e164=${valueMultiE164 || 'none'} | digits=${valueMultiDigits || 'none'} | country=${valueMultiCountry}`"/>
            </DemoBox>
          </DemoFlex>
          <DemoFlex>
            <D1Button label="Set e164 = +84912345678" @click="valueMultiE164 = '+84912345678'"/>
            <D1Button label="Set digits = 493012345678" @click="valueMultiDigits = '493012345678'"/>
            <D1Button label="Set e164 = +79001234567" @click="valueMultiE164 = '+79001234567'"/>
          </DemoFlex>
        </DemoFlex>
      </D1Group>

      <D1Group label="Country Blocking & Mask Attrs">
        <DemoFlex>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueBlocked"
              country-default="DE"
              :country-block="true"
              label="Locked to Germany (DE)"
              helper-message="Hides dial code selector and keeps local mask"
            />
            <DemoValue :value="valueBlocked"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueCountryReadonly"
              country-default="RU"
              :country-readonly="true"
              label="Country Readonly (Flag Visible)"
              helper-message="Keeps colored flag visible without arrow or menu while input stays editable"
              :input-phone-dial-code-attrs="{ labelType: 'code' }"
            />
            <DemoValue :value="valueCountryReadonly"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueSingleCountry"
              country-default="RU"
              label="Single Country List (Auto Readonly)"
              helper-message="country-list=['RU'] auto-hides arrow and disables selector click"
              :country-list="['RU']"
              :input-phone-dial-code-attrs="{ labelType: 'code' }"
            />
            <DemoValue :value="valueSingleCountry"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueRestrictedList"
              country-default="VN"
              label="Restricted Country List (US, VN, RU)"
              helper-message="Direct country-list prop restricts selector and validation"
              :country-list="['US', 'VN', 'RU']"
              :input-phone-dial-code-attrs="{ labelType: 'code' }"
            />
            <DemoValue :value="valueRestrictedList"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueMaskAttrs"
              country-default="US"
              label="Custom Mask Attrs"
              :mask-attrs="{ view: '0' }"
            />
            <DemoValue :value="valueMaskAttrs"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Appearances & Layout">
        <DemoFlex>
          <DemoBox><D1InputPhone label="Classic (default)" classic value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Filled" filled value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Outlined" outlined value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Tonal" tonal value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Boxed" boxed value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Basic" basic value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="isValue Active Label" outlined is-value value=""/></DemoBox>
          <DemoBox><D1InputPhone label="Custom Width (280px)" outlined width="280px" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Block Width" outlined block value="12025550147"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes (via fieldAttrs)">
        <div class="demo-input-phone-page__palettes">
          <D1InputPhone
            v-for="paletteName in paletteList"
            :key="paletteName"
            outlined
            :label="`Palette: ${paletteName}`"
            :field-attrs="{ palette: paletteName }"
            value="12025550147"
          />
        </div>
      </D1Group>

      <D1Group label="Sizes & Alignments">
        <DemoFlex>
          <DemoBox><D1InputPhone label="Small (sm)" size="sm" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Medium (md)" size="md" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Large (lg)" size="lg" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Display" size="display" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Align Left" align="left" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Align Center" align="center" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Align Right" align="right" value="12025550147"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Validation & Messages">
        <DemoFlex>
          <DemoBox>
            <D1InputPhone
              ref="requiredRef"
              v-model:value="valueRequired"
              country-default="US"
              label="Required Field"
              required
              :validation-code="{ valueMissing: 'Phone number is required' }"
              helper-message="Bare dial prefix (+1-) is invalid when required"
            />
            <DemoValue :value="requiredValidResult"/>
            <DemoFlex>
              <D1Button label="Validate Required" @click="onCheckRequired"/>
            </DemoFlex>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              ref="incompleteRef"
              v-model:value="valueIncomplete"
              country-default="RU"
              label="Incomplete Phone (Optional)"
              text-invalid-phone="Enter full phone number"
              helper-message="Partial number triggers error on blur even when not required"
            />
            <DemoValue :value="incompleteValidResult"/>
            <DemoFlex>
              <D1Button label="Validate Incomplete" @click="onCheckIncomplete"/>
            </DemoFlex>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueValidation"
              label="Pattern & ValidationCode"
              pattern="^7[0-9]{10}$"
              :validation-code="{ patternMismatch: 'Enter 11 digits starting with 7' }"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Forced Validation Message"
              validation-message="Phone number is invalid"
              force-show-message
              value="123"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="HTML Helper Message"
              has-html-code
              helper-message="Format: <strong>+1-XXX-XXX-XXXX</strong>"
              value="12025550147"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Warning Message"
              warning-message="Phone from legacy profile needs confirmation"
              value="79001234567"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Warning Flag Only"
              :warning="true"
              helper-message="Highlights field border without blocking validity"
              value="79001234567"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Warning + Error (Error Wins)"
              warning-message="Confirm phone"
              validation-message="Phone number is invalid"
              value="79001234567"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              ref="phoneMatchMapRef"
              v-model:value="valuePhoneMatchMap"
              country-default="RU"
              label="phoneMatch (Country Map: RU /^9/, VN /^9/)"
              text-invalid-phone="Mobile prefix required (national 9...)"
              :phone-match="phoneMatchMapRule"
            />
            <DemoValue :value="phoneMatchMapResult"/>
            <DemoFlex>
              <D1Button label="Validate Map" @click="onCheckPhoneMatchMap"/>
              <D1Button label="Set Valid RU (7900...)" @click="valuePhoneMatchMap = '79001234567'"/>
            </DemoFlex>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              ref="phoneMatchRegexRef"
              v-model:value="valuePhoneMatchRegex"
              country-default="RU"
              label="phoneMatch (Global RegExp /^9/)"
              text-invalid-phone="National part must start with 9"
              :phone-match="/^9/"
            />
            <DemoValue :value="phoneMatchRegexResult"/>
            <DemoFlex>
              <D1Button label="Validate RegExp" @click="onCheckPhoneMatchRegex"/>
              <D1Button label="Set Valid 7900..." @click="valuePhoneMatchRegex = '79001234567'"/>
            </DemoFlex>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              ref="phoneMatchCustomRef"
              v-model:value="valuePhoneMatchCustom"
              country-default="US"
              label="phoneMatch (Custom Validator Callback)"
              :phone-match="phoneMatchCustomRule"
            />
            <DemoValue :value="phoneMatchCustomResult"/>
            <DemoFlex>
              <D1Button label="Validate Callback" @click="onCheckPhoneMatchCustom"/>
              <D1Button label="Set Ending 0" @click="valuePhoneMatchCustom = '12025550140'"/>
            </DemoFlex>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons, Cancel & Loading">
        <DemoFlex direction="column">
          <DemoFlex>
            <DemoBox>
              <D1InputPhone
                label="Cancel Auto (default)"
                cancel="auto"
                value="12025550147"
              />
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                label="Cancel Always + Custom Close"
                cancel="always"
                cancel-show
                text-cancel="Clear phone"
                icon-close="close"
                value="12025550147"
              />
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                label="Cancel None"
                cancel="none"
                value="12025550147"
              />
            </DemoBox>
          </DemoFlex>
          <DemoBox>
            <D1InputPhone
              label="With Trailing Icon"
              block
              icon-trailing="call"
              value="12025550147"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Loading Boolean"
              block
              loading
              value="12025550147"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Loading Object"
              block
              :loading="{ visible: true, value: 65, max: 100 }"
              value="12025550147"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Skeleton & Dynamic Toggles">
        <DemoFlex>
          <DemoBox><D1InputPhone label="Disabled" disabled value="79001234567"/></DemoBox>
          <DemoBox><D1InputPhone label="Readonly" readonly value="79001234567"/></DemoBox>
          <DemoBox><D1InputPhone label="Disabled (Partial)" disabled value="7900123"/></DemoBox>
          <DemoBox><D1InputPhone label="Readonly (Blocked US)" readonly country-default="US" :country-block="true" value="2025550"/></DemoBox>
          <DemoBox><D1InputPhone label="Focused" focus value="79001234567"/></DemoBox>
          <DemoBox><D1InputPhone label="Selected" selected value="79001234567"/></DemoBox>
          <DemoBox>
            <D1Skeleton :active="true">
              <D1InputPhone label="Skeleton" is-skeleton value="79001234567"/>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
        <DemoBox>
          <D1Skeleton :active="isDynamicSkeleton">
            <D1InputPhone
              v-model="valueDynamicTarget"
              label="Dynamic State Target"
              :disabled="isDynamicDisabled"
              :readonly="isDynamicReadonly"
              :loading="isDynamicLoading"
              :is-skeleton="isDynamicSkeleton"
              :country-block="isDynamicCountryBlock"
              :country-readonly="isDynamicCountryReadonly"
            />
          </D1Skeleton>
          <DemoFlex>
            <D1Button label="Toggle Disabled" size="sm" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
            <D1Button label="Toggle Readonly" size="sm" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
            <D1Button label="Toggle Loading" size="sm" outline @click="isDynamicLoading = !isDynamicLoading"/>
            <D1Button label="Toggle Skeleton" size="sm" outline @click="isDynamicSkeleton = !isDynamicSkeleton"/>
            <D1Button label="Toggle countryBlock" size="sm" outline @click="isDynamicCountryBlock = !isDynamicCountryBlock"/>
            <D1Button label="Toggle countryReadonly" size="sm" outline @click="isDynamicCountryReadonly = !isDynamicCountryReadonly"/>
          </DemoFlex>
          <DemoValue
            label="Dynamic State"
            :value="{
              isDynamicDisabled,
              isDynamicReadonly,
              isDynamicLoading,
              isDynamicSkeleton,
              isDynamicCountryBlock,
              isDynamicCountryReadonly
            }"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <DemoFlex>
          <DemoBox>
            <D1InputPhone
              label="Blocked Disabled"
              disabled
              value="79001234567"
              @input="handleBlockedEvent"
              @change="handleBlockedEvent"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Blocked Readonly"
              readonly
              value="79001234567"
              @input="handleBlockedEvent"
              @change="handleBlockedEvent"
            />
          </DemoBox>
        </DemoFlex>
        <DemoValue label="Blocked Trigger Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Slots & Attributes">
        <DemoFlex direction="column">
          <DemoBox>
            <D1InputPhone label="Prefix, Suffix & Trailing" block value="12025550147">
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
          </DemoBox>
          <DemoFlex>
            <DemoBox>
              <D1InputPhone label="Leading Slot (with countryBlock)" country-default="US" country-block value="2025550147">
                <template #leading>
                  <span>+1</span>
                </template>
              </D1InputPhone>
            </DemoBox>
            <DemoBox>
              <D1InputPhone label="Label:" label-id="phone-custom-label" value="12025550147">
                <template #label>
                  <span> Custom</span>
                </template>
              </D1InputPhone>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                id="custom-phone-id"
                name="custom-phone-name"
                autocomplete="tel-national"
                label="Custom Attrs"
                :tabindex="0"
                :detail="{ origin: 'demo' }"
                :field-attrs="{ 'data-custom-field': 'yes' }"
                :input-attrs="{ 'data-custom-input': 'yes' }"
                :field-label-attrs="{ 'data-custom-label': 'yes' }"
                :field-message-attrs="{ 'data-custom-message': 'yes' }"
                helper-message="Attributed phone field"
                value="12025550147"
              />
            </DemoBox>
          </DemoFlex>
        </DemoFlex>
      </D1Group>

      <D1Group label="Form Integration">
        <form id="demo-input-phone-form" @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <D1InputPhone
            v-model="formPhoneValue"
            form="demo-input-phone-form"
            name="contact-phone"
            country-default="US"
            label="Contact Phone"
            required
          />
          <DemoFlex>
            <D1Button label="Submit Form" tag="button" type="submit" size="sm" primary/>
            <D1Button label="Reset Form" tag="button" type="reset" size="sm" outline/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Status" :value="formStatus"/>
      </D1Group>

      <D1Group label="Exposed API">
        <DemoFlex direction="column">
          <DemoBox>
            <D1InputPhone
              ref="exposedRef"
              label="Exposed Target"
              required
              country-default="US"
            />
          </DemoBox>
          <DemoFlex>
            <D1Button label="Read Values" @click="onReadExposed"/>
            <D1Button label="setValue('4930123456')" @click="onSetExposed"/>
            <D1Button label="clear()" @click="onClearExposed"/>
          </DemoFlex>
          <DemoValue :value="exposedResult"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex direction="column">
          <DemoBox>
            <D1InputPhone
              v-model:value="eventPhoneValue"
              v-model:country="eventCountryValue"
              v-model:digits="eventDigitsValue"
              v-model:e164="eventE164Value"
              label="Event Tracker"
              :detail="{ source: 'demo-input-phone' }"
              @update:value="(nextValue) => trackEvent('update:value', { value: nextValue })"
              @update:model-value="(nextValue) => trackEvent('update:modelValue', { value: nextValue })"
              @update:country="(nextCountry) => trackEvent('update:country', { country: nextCountry })"
              @update:model-country="(nextCountry) => trackEvent('update:modelCountry', { country: nextCountry })"
              @update:digits="(nextDigits) => trackEvent('update:digits', { digits: nextDigits })"
              @update:model-digits="(nextDigits) => trackEvent('update:modelDigits', { digits: nextDigits })"
              @update:e164="(nextE164) => trackEvent('update:e164', { e164: nextE164 })"
              @update:model-e164="(nextE164) => trackEvent('update:modelE164', { e164: nextE164 })"
              @input="handleInputEvent"
              @input-lite="handleInputLiteEvent"
              @change="handleChangeEvent"
              @change-lite="handleChangeLiteEvent"
              @focus="handleFocusEvent"
              @blur="handleBlurEvent"
            />
          </DemoBox>
          <DemoValue label="Event Name" :value="eventName || 'No events triggered yet'"/>
          <DemoValue label="Event Payload" :value="eventPayload"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Accessibility (ARIA & Keyboard)">
        <DemoBox>
          <D1InputPhone
            id="demo-phone-a11y"
            label="Accessible Phone Number"
            label-id="demo-phone-label-id"
            helper-id="demo-phone-helper-id"
            validation-id="demo-phone-validation-id"
            helper-message="Linked ARIA helper and explicit labels"
            :tabindex="0"
            :input-attrs="{ 'aria-label': 'Accessible telephone input' }"
            :input-phone-dial-code-attrs="{
              disableFocusReturn: false,
              buttonAttrs: { 'aria-label': 'Country dial code selector' }
            }"
            value="12025550147"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary Cases">
        <DemoFlex>
          <DemoBox><D1InputPhone label="Empty Value" value=""/></DemoBox>
          <DemoBox><D1InputPhone label="Whitespace Value" value="   "/></DemoBox>
          <DemoBox><D1InputPhone label="Zero Value" value="0"/></DemoBox>
          <DemoBox><D1InputPhone label="Unicode / Việt / Emoji 🚀" helper-message="Học tiếng Việt / Привет" value="84912345678"/></DemoBox>
          <DemoBox><D1InputPhone label="<img src=x onerror=alert(1)>" value="12025550147"/></DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Very long multi-sentence telephone field label verifying clean wrapping and layout bounds across viewports"
              helper-message="Extended multi-sentence helper message checking vertical spacing and text flow"
              value="12025550147"
            />
          </DemoBox>
        </DemoFlex>
        <DemoBox class="demo-input-phone-page__narrow" size="sm">
          <D1InputPhone
            label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            value="4930123456789"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1InputPhone
            label="Mounted InputPhone"
            country-default="US"
            value="12025550147"
          />
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>

      <D1Group label="Dynamic Mask Length & Conflicting Country Codes">
        <DemoFlex direction="column">
          <DemoBox>
            <D1InputPhone
              v-model:value="valueLengthMask"
              block
              country-default="DE"
              label="Mask Change by Length"
              helper-message="Mask adapts dynamically as digits grow/shrink (e.g. DE, CN, MM, ID)"
              :input-phone-dial-code-attrs="{ labelType: 'code' }"
            />
            <DemoValue :value="valueLengthMask"/>
            <DemoFlex>
              <D1Button label="DE 6 digits" @click="valueLengthMask = '49301234'"/>
              <D1Button label="DE 10 digits" @click="valueLengthMask = '493012345678'"/>
              <D1Button label="DE 11 digits" @click="valueLengthMask = '4930123456789'"/>
              <D1Button label="CN 11 digits" @click="valueLengthMask = '8613800138000'"/>
            </DemoFlex>
          </DemoBox>

          <DemoBox>
            <D1InputPhone
              v-model:value="valueConflictCode"
              block
              country-default="US"
              label="Conflicting Country Codes"
              helper-message="Resolves overlapping prefixes (+1 US/CA/NANP, +7 RU/KZ, +39 IT/VA, +44 GB/GG/JE/IM, +358 FI/AX, +599 CW/BQ, +672 AQ/NF)"
              :input-phone-dial-code-attrs="{ labelType: 'name' }"
            />
            <DemoValue :value="valueConflictCode"/>
            <DemoFlex>
              <D1Button label="US (+1-202)" @click="valueConflictCode = '12025550147'"/>
              <D1Button label="CA (+1-416)" @click="valueConflictCode = '14165550147'"/>
              <D1Button label="RU (+7-900)" @click="valueConflictCode = '79001234567'"/>
              <D1Button label="KZ (+7-701)" @click="valueConflictCode = '77011234567'"/>
              <D1Button label="GB (+44-20)" @click="valueConflictCode = '442079460958'"/>
              <D1Button label="GG (+44-1481)" @click="valueConflictCode = '441481123456'"/>
            </DemoFlex>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Domestic Trunk Prefixes (8 / 0)">
        <DemoFlex>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueWithinRU"
              country-default="RU"
              label="Russia (Trunk Prefix 8)"
              helper-message="Type 89001234567: leading 8 is skipped in +7-~**-***-**-**"
              :input-phone-dial-code-attrs="{ labelType: 'code' }"
            />
            <DemoValue :value="valueWithinRU"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueWithinVN"
              country-default="VN"
              label="Vietnam (Trunk Prefix 0)"
              helper-message="Type 0912345678: leading 0 is skipped in +84-=*-****-***"
              :input-phone-dial-code-attrs="{ labelType: 'code' }"
            />
            <DemoValue :value="valueWithinVN"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueWithinRUBlocked"
              country-default="RU"
              :country-block="true"
              label="Russia Blocked (Trunk Prefix 8)"
              helper-message="With countryBlock=true, typing 89001234567 skips 8"
            />
            <DemoValue :value="valueWithinRUBlocked"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueWithinVNBlocked"
              country-default="VN"
              :country-block="true"
              label="Vietnam Blocked (Trunk Prefix 0)"
              helper-message="With countryBlock=true, typing 0912345678 skips 0"
            />
            <DemoValue :value="valueWithinVNBlocked"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Copy & Paste">
        <DemoFlex direction="column">
          <DemoFlex>
            <D1Button label="Copy +7 (900) 123-45-67" @click="onCopySample('+7 (900) 123-45-67')"/>
            <D1Button label="Copy +89023343333" @click="onCopySample('+89023343333')"/>
            <D1Button label="Copy 8 (900) 123-45-67" @click="onCopySample('8 (900) 123-45-67')"/>
            <D1Button label="Copy +84 91 234 5678" @click="onCopySample('+84 91 234 5678')"/>
            <D1Button label="Copy +0912345678" @click="onCopySample('+0912345678')"/>
            <D1Button label="Copy 911" @click="onCopySample('911')"/>
            <D1Button label="Copy +8902334333 (10 digits)" @click="onCopySample('+8902334333')"/>
            <D1Button label="Reset Paste Cases" @click="onResetPasteCases"/>
          </DemoFlex>
          <DemoValue :value="`Clipboard sample: ${copiedSample}`"/>
          <DemoFlex>
            <DemoBox>
              <D1InputPhone
                v-model:value="valuePasteCountry"
                label="Paste With Country Code"
                helper-message="Paste without selection: +7 900 123-45-67, +84 91 234 5678, +49 30 12345678"
                :input-phone-dial-code-attrs="{ labelType: 'code' }"
              />
              <DemoValue :value="valuePasteCountry"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model:value="valuePasteSelectAllVN"
                country-default="VN"
                label="Select All Filled VN -> RU"
                helper-message="Select all (Cmd+A / Ctrl+A) in +84-91-2345-678 and paste +7 (900) 123-45-67 -> updates country & mask to RU"
                :input-phone-dial-code-attrs="{ labelType: 'code' }"
              />
              <DemoValue :value="valuePasteSelectAllVN"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model:value="valuePastePartialRU"
                country-default="RU"
                label="Partial Selection (Mask Paste)"
                helper-message="Select middle digits (e.g. 900) and paste 911 -> standard Mask paste (+7-911-123-45-67)"
                :input-phone-dial-code-attrs="{ labelType: 'code' }"
              />
              <DemoValue :value="valuePastePartialRU"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model:value="valuePasteRU"
                country-default="RU"
                label="Paste RU (+8 / 8 -> +7 vs +84)"
                helper-message="Paste +89023343333 or 8 (900) 123-45-67 -> +7; paste +84 91 234 5678 -> VN; incomplete +8902334333 goes to Mask"
                :input-phone-dial-code-attrs="{ labelType: 'code' }"
              />
              <DemoValue :value="valuePasteRU"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model:value="valuePasteVN"
                country-default="VN"
                label="Paste VN (+0 / 0 -> +84 vs Local)"
                helper-message="Paste +0912345678 or 0912345678 -> +84-91-2345-678; incomplete 912345678 goes to Mask"
                :input-phone-dial-code-attrs="{ labelType: 'code' }"
              />
              <DemoValue :value="valuePasteVN"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model:value="valuePasteBlocked"
                country-default="RU"
                :country-block="true"
                label="Paste Blocked (countryBlock=true)"
                helper-message="Locked to RU: +7 (900) 123-45-67 and +89023343333 normalize to +7; foreign +84 91 234 5678 is blocked"
              />
              <DemoValue :value="valuePasteBlocked"/>
            </DemoBox>
          </DemoFlex>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-input-phone-page {
  &__palettes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
