<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const valueText = ref('Hello World')
const valuePassword = ref('123456')
const valueNumber = ref('123')
const valueEmail = ref('email@example.com')
const valueDate = ref('2025-05-11')
const valueTel = ref('+79001234567')
const valuePhone = ref('+7 (900) 123-45-67')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Input">
    <D1Section>
      <D1Group label="Appearances">
        <D1Input label="Classic (default)" classic />
        <D1Input label="Filled" filled />
        <D1Input label="Outlined" outlined />
        <D1Input label="Tonal" tonal />
        <D1Input label="Boxed" boxed />
        <D1Input label="Basic" basic />
      </D1Group>

      <D1Group label="Sizes">
        <D1Input label="Small (sm)" size="sm" />
        <D1Input label="Medium (md)" size="md" />
        <D1Input label="Large (lg)" size="lg" />
        <D1Input label="Display" size="display" />
      </D1Group>

      <D1Group label="Types">
        <D1Input :label="`Text (${valueText})`" type="text" v-model="valueText"/>
        <D1Input :label="`Password (${valuePassword})`" type="password" v-model="valuePassword"/>
        <D1Input :label="`Number (${valueNumber})`" type="number" v-model="valueNumber"/>
        <D1Input :label="`Email (${valueEmail})`" type="email" v-model="valueEmail" />
        <D1Input :label="`Date (${valueDate})`" type="date" v-model="valueDate"/>
        <D1Input :label="`Tel (${valueTel})`" type="tel" v-model="valueTel" />
      </D1Group>

      <D1Group label="Types (Default)">
        <D1Input label="Text" type="text" />
        <D1Input label="Password" type="password" />
        <D1Input label="Number" type="number" />
        <D1Input label="Email" type="email" />
        <D1Input label="Date" type="date" />
        <D1Input label="Tel" type="tel" />
      </D1Group>

      <D1Group label="Features">
        <D1Input
          label="With Icons"
          icon="search"
          iconTrailing="close"
        />
        <D1Input
          label="Prefix & Suffix"
          prefix="https://"
          suffix=".com"
        />
        <D1Input
          label="Validation (Empty)"
          helperMessage="Enter your full name"
        />
        <D1Input
          label="Validation (Empty)"
          helperMessage="Enter your full name"
          validationMessage="Field is required"
        />
        <D1Input
          label="Validation (Numeric)"
          helperMessage="Enter a valid number"
          value="123.45"
          type="number"
        />
        <D1Input
          label="Counter & Loading"
          :maxlength="20"
          counterShow
          loading
        />
      </D1Group>

      <D1Group label="Mask Support">
        <D1Input
          label="Phone Mask"
          v-model="valuePhone"
          mask="+7 (***) ***-**-**"
        />
        <DemoValue :value="valuePhone"/>
      </D1Group>

      <D1Group label="States">
        <D1Input label="Disabled" disabled value="Disabled content"/>
        <D1Input label="Readonly" readonly value="Readonly content"/>
      </D1Group>

      <D1Group label="Events">
        <D1Input
          label="Event Tracker"
          @input="(event, value) => onEvent('input', event, value)"
          @input-lite="(value) => onEvent('inputLite', value)"
          @change="(event, value) => onEvent('change', event, value)"
          @change-lite="(value) => onEvent('changeLite', value)"
        />
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
