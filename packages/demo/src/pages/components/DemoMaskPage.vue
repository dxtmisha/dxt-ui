<script setup lang="ts">
import { ref } from 'vue'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const valuePhone = ref('+7 (900) 123-45-67')
const valueDate = ref('2005-02-12')
const valueNumber = ref('123456')
const valueCurrency = ref('123456.7')
const eventName = ref('')

const onEvent = (event: string) => {
  eventName.value = event
  console.log(`Event: ${event}`)
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Mask">
    <D1Section>
      <D1Group label="Standard Mask">
        <D1Mask
          mask="+7 (***) ***-**-**"
        />
        <D1Mask
          :value="valuePhone"
          mask="+7 (***) ***-**-**"
          @input-lite="valuePhone = $event.value"
        />
        <DemoValue :value="valuePhone"/>
      </D1Group>

      <D1Group label="Date Mask">
        <D1Mask type="full"/>
        <D1Mask type="datetime"/>
        <D1Mask type="date"/>
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
        <D1Mask
          :value="valueDate"
          type="date"
          @input-lite="valueDate = $event.value"
        />
        <DemoValue :value="valueDate"/>
      </D1Group>

      <D1Group label="Number & Currency Mask">
        <D1Mask type="number"/>
        <D1Mask type="number-format"/>
        <D1Mask type="currency" currency="USD"/>

        <D1Mask
          :value="valueNumber"
          type="number-format"
          @input-lite="valueNumber = $event.value"
        />
        <DemoValue :value="valueNumber"/>

        <D1Mask
          :value="valueCurrency"
          type="currency"
          currency="EUR"
          @input-lite="valueCurrency = $event.value"
        />
        <DemoValue :value="valueCurrency"/>
      </D1Group>

      <D1Group label="Events">
        <D1Mask
          mask="****-****"
          @focus="onEvent('focus', $event)"
          @blur="onEvent('blur', $event)"
          @keydown="onEvent('keydown', $event)"
          @keyup="onEvent('keyup', $event)"
          @beforeinput="onEvent('beforeinput', $event)"
          @input="onEvent('input', $event)"
          @input-lite="onEvent('inputLite', $event)"
          @change="onEvent('change', $event)"
          @change-lite="onEvent('changeLite', $event)"
          @paste="onEvent('paste', $event)"
          @reset="onEvent('reset', $event)"
        />
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
