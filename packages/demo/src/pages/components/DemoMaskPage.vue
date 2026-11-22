<script setup lang="ts">
import { ref } from 'vue'
import type { FieldValidationItem, MaskExpose } from '@dxtmisha/constructor'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const valuePhone = ref<string>('+7 (900) 123-45-67')
const valueMulti = ref<string>('123456')
const valueDate = ref<string>('2005-02-12')
const valueNumber = ref<string>('123456')
const valueCurrency = ref<string>('123456.7')
const valueGroups = ref<string>('12ab')
const valueFullOnly = ref<string>('')
const exposedValue = ref<string>('')
const exposedBasicValue = ref<string>('')

const maskRef = ref<MaskExpose | undefined>()

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

const onUpdateExposed = (): void => {
  exposedValue.value = maskRef.value?.getValue() ?? ''
  exposedBasicValue.value = maskRef.value?.getValueBasic() ?? ''
}

const onSetExposed = (): void => {
  maskRef.value?.setValue('987654')
  onUpdateExposed()
}

const onClearExposed = (): void => {
  maskRef.value?.clear()
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
              dir="rtl"
              :input-attrs="{ 'aria-label': 'RTL mask' }"
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

      <D1Group label="Exposed API Controls">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Mask
              ref="maskRef"
              mask="***-***"
              value="123"
              value-default="000"
              :input-attrs="{ 'aria-label': 'Exposed API mask' }"
            />
          </DemoBox>
          <DemoFlex>
            <D1Button label="Read Values" @click="onUpdateExposed"/>
            <D1Button label="Set 987654" @click="onSetExposed"/>
            <D1Button label="Clear" @click="onClearExposed"/>
          </DemoFlex>
          <DemoValue :value="exposedValue"/>
          <DemoValue :value="exposedBasicValue"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <D1Mask
          mask="****-****"
          :input-attrs="{ 'aria-label': 'Events tracker mask' }"
          @focus="onEvent('focus')"
          @blur="onEvent('blur')"
          @keydown="onEvent('keydown')"
          @keyup="onEvent('keyup')"
          @beforeinput="onEvent('beforeinput')"
          @input="onEvent('input')"
          @input-lite="onEvent('inputLite')"
          @change="onEvent('change')"
          @change-lite="onEvent('changeLite')"
          @paste="onEvent('paste')"
          @reset="onEvent('reset')"
        />
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-mask-page {
  &__narrow {
    max-width: 120px;
  }
}
</style>
