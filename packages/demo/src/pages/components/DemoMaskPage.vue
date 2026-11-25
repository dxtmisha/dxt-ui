<script setup lang="ts">
import { ref } from 'vue'
import type { FieldMasks, FieldValidationItem, MaskExpose } from '@dxtmisha/constructor'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const valuePhone = ref<string>('+7 (900) 123-45-67')
const valueMulti = ref<string>('123456')
const valueDate = ref<string>('2005-02-12')
const valueNumber = ref<string>('123456')
const valueCurrency = ref<string>('123456.7')
const valueGroups = ref<string>('12ab')
const valueFullOnly = ref<string>('')
const valueForm = ref<string>('')
const formStatus = ref<string>('Not submitted')
const formDataSummary = ref<string>('None')
const exposedValue = ref<string>('')
const exposedBasicValue = ref<string>('')
const isLifecycleMounted = ref<boolean>(true)

const maskReference = ref<MaskExpose | undefined>()
const formReference = ref<HTMLFormElement | null>(null)

const xssPayload = '<img src=x onerror=alert(1)>'

const specialGroups = {
  n: {
    match: /[0-9]/,
    view: 'N'
  },
  a: {
    match: /[a-zA-Z]/,
    view: 'A'
  }
}

const rubberSpecial = {
  '*': {
    rubber: true,
    transitionChar: '-',
    minLength: 2,
    maxLength: 5
  },
  '#': {
    defaultValue: '0',
    match: /[0-9]/,
    pattern: '[0-9]{2}'
  }
}

const dynamicPattern = (groups?: FieldMasks): string => {
  const firstGroup = groups?.['*']?.value ?? ''
  return firstGroup.startsWith('9') ? '9[0-9]{2}' : '[1-8][0-9]{2}'
}

const onUpdateExposed = (): void => {
  exposedValue.value = maskReference.value?.getValue() ?? ''
  exposedBasicValue.value = maskReference.value?.getValueBasic() ?? ''
}

const onSetExposed = (): void => {
  maskReference.value?.setValue('987654')
  onUpdateExposed()
}

const onSetEmptyExposed = (): void => {
  maskReference.value?.setValue('')
  onUpdateExposed()
}

const onClearExposed = (): void => {
  maskReference.value?.clear()
  onUpdateExposed()
}

const onPhoneInput = (validation: FieldValidationItem): void => {
  valuePhone.value = String(validation.value ?? '')
}

const onMultiInput = (validation: FieldValidationItem): void => {
  valueMulti.value = String(validation.value ?? '')
}

const onGroupsInput = (validation: FieldValidationItem): void => {
  valueGroups.value = String(validation.value ?? '')
}

const onDateInput = (validation: FieldValidationItem): void => {
  valueDate.value = String(validation.value ?? '')
}

const onNumberInput = (validation: FieldValidationItem): void => {
  valueNumber.value = String(validation.value ?? '')
}

const onCurrencyInput = (validation: FieldValidationItem): void => {
  valueCurrency.value = String(validation.value ?? '')
}

const onFullOnlyInput = (validation: FieldValidationItem): void => {
  valueFullOnly.value = String(validation.value ?? '')
}

const onFormInput = (validation: FieldValidationItem): void => {
  valueForm.value = String(validation.value ?? '')
}

const onFormSubmit = (): void => {
  const formElement = formReference.value
  if (!formElement) {
    return
  }

  const isValid = formElement.checkValidity()
  const data = new FormData(formElement)

  formStatus.value = isValid ? 'Submitted (valid)' : 'Invalid form'
  formDataSummary.value = JSON.stringify(Object.fromEntries(data.entries()))
}

const onFormReset = (): void => {
  valueForm.value = ''
  formStatus.value = 'Reset'
  formDataSummary.value = 'None'
}

const trackEvent = (name: string, payload?: unknown): void => {
  onEvent(name, payload)
  if (payload && typeof payload === 'object' && 'type' in payload) {
    eventPayload.value = `type=${String((payload as Event).type)}`
  } else {
    eventPayload.value = payload !== undefined ? JSON.stringify(payload) : 'Triggered'
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Mask">
    <D1Section class="demo-mask-page">
      <D1Group label="Standard & Multi-Pattern Masks">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Mask
              mask="+7 (***) ***-**-**"
              name="phone-empty"
              :input-attrs="{ 'aria-label': 'Empty phone mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              :value="valuePhone"
              mask="+7 (***) ***-**-**"
              name="phone-filled"
              :input-attrs="{ 'aria-label': 'Phone mask with value', 'inputMode': 'tel' }"
              @input-lite="onPhoneInput"
            />
            <DemoFlex>
              <D1Button label="Set Sample Phone" size="sm" @click="valuePhone = '+7 (911) 222-33-44'"/>
              <D1Button label="Clear Phone" size="sm" outline @click="valuePhone = ''"/>
            </DemoFlex>
            <DemoValue :value="valuePhone"/>
          </DemoBox>
          <DemoBox>
            <D1Mask
              :value="valueMulti"
              :mask="['***-***', '****-****']"
              :input-attrs="{ 'aria-label': 'Multi-pattern mask' }"
              @input-lite="onMultiInput"
            />
            <DemoValue :value="valueMulti"/>
          </DemoBox>
          <DemoBox>
            <D1Mask
              :value="0"
              :value-default="0"
              type="number"
              :input-attrs="{ 'aria-label': 'Numeric zero mask' }"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Special Characters, Rubber Groups & Matching">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Mask
              mask="XX.XX.XXXX"
              special="X"
              view="0"
              :input-attrs="{ 'aria-label': 'Custom special symbol' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              :value="valueGroups"
              mask="n-n-a-a"
              :special="specialGroups"
              :input-attrs="{ 'aria-label': 'Custom special groups' }"
              @input-lite="onGroupsInput"
            />
            <DemoValue :value="valueGroups"/>
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="*-##"
              :special="rubberSpecial"
              value="12-34"
              :input-attrs="{ 'aria-label': 'Rubber mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="***-###"
              :special="['*', '#']"
              :group-save="true"
              value="123456"
              :input-attrs="{ 'aria-label': 'Group save enabled' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="***-###"
              :special="['*', '#']"
              :group-save="false"
              value="123456"
              :input-attrs="{ 'aria-label': 'Group save disabled' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="***-***"
              :match="/[A-F0-9]/"
              value="A1B2C3"
              :input-attrs="{ 'aria-label': 'RegExp hex match' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="***-***"
              match="[A-Za-z]"
              value="AbCdEf"
              :input-attrs="{ 'aria-label': 'String letter match' }"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Validation & Full-Only Mode">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Mask
              mask="***"
              pattern="[6-9]{3}"
              value="123"
              :input-attrs="{ 'aria-label': 'Pattern validation error state' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="***"
              :pattern="dynamicPattern"
              value="912"
              :input-attrs="{ 'aria-label': 'Function pattern mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="****"
              check="^[0-9]{4}$"
              value="12"
              :input-attrs="{ 'aria-label': 'Global check pattern' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              :value="valueFullOnly"
              mask="****"
              :full-only="true"
              :input-attrs="{ 'aria-label': 'Full only mask' }"
              @input-lite="onFullOnlyInput"
            />
            <DemoValue :value="valueFullOnly"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Blocked States (Disabled & Readonly)">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Mask
              mask="***-***"
              value="123456"
              :input-attrs="{ 'aria-label': 'Disabled mask input', 'disabled': true }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="***-***"
              value="654321"
              :input-attrs="{ 'aria-label': 'Readonly mask input', 'readOnly': true }"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Visibility, Alignment & Direction">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Mask
              mask="+1 (***) ***"
              :visible="true"
              :input-attrs="{ 'aria-label': 'Visible mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="+1 (***) ***"
              :visible="false"
              :input-attrs="{ 'aria-label': 'Hidden mask placeholder' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="+1 (***) ***"
              :visible="false"
              :visible-partly="true"
              :input-attrs="{ 'aria-label': 'Partly visible mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="****"
              value="12"
              align="left"
              :input-attrs="{ 'aria-label': 'Left aligned mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="****"
              value="12"
              align="center"
              :input-attrs="{ 'aria-label': 'Center aligned mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="****"
              value="12"
              align="right"
              :input-attrs="{ 'aria-label': 'Right aligned mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="****"
              value="12"
              dir="ltr"
              :input-attrs="{ 'aria-label': 'LTR mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              mask="****"
              value="12"
              dir="rtl"
              :input-attrs="{ 'aria-label': 'RTL mask' }"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Date & Time Masks">
        <DemoFlex direction="column">
          <DemoBox>
            <DemoFlex>
              <D1Mask type="full"/>
              <D1Mask type="datetime"/>
              <D1Mask type="date" language="en-US"/>
              <D1Mask type="year-month"/>
              <D1Mask type="year"/>
              <D1Mask type="month"/>
              <D1Mask type="day"/>
              <D1Mask type="day-month"/>
              <D1Mask type="time"/>
              <D1Mask type="hour-minute"/>
              <D1Mask type="hour"/>
              <D1Mask type="minute"/>
              <D1Mask type="second"/>
            </DemoFlex>
          </DemoBox>
          <DemoBox>
            <D1Mask
              :value="valueDate"
              type="date"
              language="en-US"
              :input-attrs="{ 'aria-label': 'Interactive date mask' }"
              @input-lite="onDateInput"
            />
            <DemoValue :value="valueDate"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Number & Currency Masks">
        <DemoFlex direction="column">
          <DemoBox>
            <DemoFlex>
              <D1Mask type="number" :fraction="2"/>
              <D1Mask type="number-format" fraction="3" language="en-US"/>
              <D1Mask type="number-format" :fraction="true" language="en-US"/>
              <D1Mask type="currency" currency="USD" language="en-US"/>
              <D1Mask type="currency" currency="USD" :currency-hide="true" language="en-US"/>
            </DemoFlex>
          </DemoBox>
          <DemoBox>
            <D1Mask
              :value="valueNumber"
              type="number-format"
              language="en-US"
              :input-attrs="{ 'aria-label': 'Interactive formatted number mask' }"
              @input-lite="onNumberInput"
            />
            <DemoValue :value="valueNumber"/>
          </DemoBox>
          <DemoBox>
            <D1Mask
              :value="valueCurrency"
              type="currency"
              currency="EUR"
              language="en-US"
              :input-attrs="{ 'aria-label': 'Interactive currency mask' }"
              @input-lite="onCurrencyInput"
            />
            <DemoValue :value="valueCurrency"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Form Integration & Validation">
        <form
          ref="formReference"
          @submit.prevent="onFormSubmit"
          @reset="onFormReset"
        >
          <DemoFlex direction="column">
            <DemoBox>
              <D1Mask
                :value="valueForm"
                name="account-code"
                mask="***-***"
                pattern="[0-9]{3}"
                :input-attrs="{ 'aria-label': 'Account code', 'required': true }"
                @input-lite="onFormInput"
              />
            </DemoBox>
            <DemoFlex>
              <D1Button type="submit" label="Submit Form"/>
              <D1Button type="reset" label="Reset Form" outline/>
            </DemoFlex>
            <DemoValue label="formValue" :value="valueForm"/>
            <DemoValue label="formStatus" :value="formStatus"/>
            <DemoValue label="formData" :value="formDataSummary"/>
          </DemoFlex>
        </form>
      </D1Group>

      <D1Group label="Exposed API Controls">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Mask
              ref="maskReference"
              mask="***-***"
              value="123"
              value-default="000"
              :input-attrs="{ 'aria-label': 'Exposed API mask' }"
            />
          </DemoBox>
          <DemoFlex>
            <D1Button label="Read Values" @click="onUpdateExposed"/>
            <D1Button label="Set 987654" @click="onSetExposed"/>
            <D1Button label="Set Empty" outline @click="onSetEmptyExposed"/>
            <D1Button label="Clear" outline @click="onClearExposed"/>
          </DemoFlex>
          <DemoValue label="getValue" :value="exposedValue"/>
          <DemoValue label="getValueBasic" :value="exposedBasicValue"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <D1Mask
          mask="****-****"
          :input-attrs="{ 'aria-label': 'Events tracker mask' }"
          @focus="(event) => trackEvent('focus', event)"
          @blur="(event) => trackEvent('blur', event)"
          @keydown="(event) => trackEvent('keydown', { key: event.key })"
          @keyup="(event) => trackEvent('keyup', { key: event.key })"
          @beforeinput="(event) => trackEvent('beforeinput', { data: event.data })"
          @input="(_, validation) => trackEvent('input', validation)"
          @input-lite="(validation) => trackEvent('inputLite', validation)"
          @change="(_, validation) => trackEvent('change', validation)"
          @change-lite="(validation) => trackEvent('changeLite', validation)"
          @paste="(event) => trackEvent('paste', event)"
          @reset="(event) => trackEvent('reset', event)"
        />
        <DemoValue label="event" :value="eventName"/>
        <DemoValue label="payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <DemoBox>
          <D1Mask
            mask="****-****"
            value="1234"
            :input-attrs="{
              'aria-label': 'Accessible security code',
              'aria-describedby': 'demo-mask-a11y-hint',
              'inputMode': 'numeric'
            }"
          />
          <div id="demo-mask-a11y-hint">
            Enter 8 digits; decorative character overlay stays hidden from screen readers.
          </div>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex direction="column">
          <DemoBox>
            <DemoFlex>
              <D1Mask mask="****" value="" :input-attrs="{ 'aria-label': 'Empty string value mask' }"/>
              <D1Mask mask="****" value="   " :input-attrs="{ 'aria-label': 'Whitespace value mask' }"/>
              <D1Mask mask="****" :value="undefined" :input-attrs="{ 'aria-label': 'Undefined value mask' }"/>
            </DemoFlex>
          </DemoBox>
          <DemoBox>
            <D1Mask
              type="text"
              mask="********************************"
              match="."
              value="Học tiếng Việt / Привет 🚀🔥✨"
              :input-attrs="{ 'aria-label': 'Unicode mask' }"
            />
          </DemoBox>
          <DemoBox>
            <D1Mask
              type="text"
              mask="******************************"
              match="."
              :value="xssPayload"
              :input-attrs="{ 'aria-label': 'XSS escaped mask' }"
            />
          </DemoBox>
          <DemoBox>
            <div class="demo-mask-page__narrow">
              <D1Mask
                mask="+1 (***) ***-**-** ext. ****"
                value="20255501479999"
                :input-attrs="{ 'aria-label': 'Overflow clipped long mask' }"
              />
            </div>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle (Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isLifecycleMounted ? 'Unmount Mask' : 'Mount Mask'"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox>
          <D1Mask
            v-if="isLifecycleMounted"
            mask="***-***"
            value="456789"
            :input-attrs="{ 'aria-label': 'Lifecycle managed mask' }"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-mask-page {
  &__narrow {
    max-width: 240px;
  }
}
</style>
