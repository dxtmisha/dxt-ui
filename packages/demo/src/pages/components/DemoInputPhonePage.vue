<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const valueDefault = ref('')
const valueUS = ref('')
const valueDE = ref('')
const valueBlocked = ref('')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputPhone">
    <D1Section>
      <D1Group label="Basic">
        <D1InputPhone
          v-model:value="valueDefault"
          label="Phone Number"
          placeholder="Enter phone number"
        />
        <DemoValue :value="valueDefault"/>
      </D1Group>

      <D1Group label="Country Default">
        <D1InputPhone
          v-model:value="valueUS"
          countryDefault="US"
          label="US Default"
        />
        <DemoValue :value="valueUS"/>

        <D1InputPhone
          v-model:value="valueDE"
          countryDefault="DE"
          label="Germany Default"
        />
        <DemoValue :value="valueDE"/>
      </D1Group>

      <D1Group label="Country Blocking">
        <D1InputPhone
          v-model:value="valueBlocked"
          countryDefault="DE"
          :countryBlock="true"
          label="Blocked/Locked to Germany (DE)"
        />
        <DemoValue :value="valueBlocked"/>
      </D1Group>

      <D1Group label="Appearances">
        <D1InputPhone label="Classic (default)" classic />
        <D1InputPhone label="Filled" filled />
        <D1InputPhone label="Outlined" outlined />
        <D1InputPhone label="Tonal" tonal />
        <D1InputPhone label="Boxed" boxed />
        <D1InputPhone label="Basic" basic />
      </D1Group>

      <D1Group label="Sizes">
        <D1InputPhone label="Small (sm)" size="sm" />
        <D1InputPhone label="Medium (md)" size="md" />
        <D1InputPhone label="Large (lg)" size="lg" />
        <D1InputPhone label="Display" size="display" />
      </D1Group>

      <D1Group label="States">
        <D1InputPhone label="Disabled" disabled value="+79001234567"/>
        <D1InputPhone label="Readonly" readonly value="+79001234567"/>
      </D1Group>

      <D1Group label="Events">
        <D1InputPhone
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

<style lang="scss">
</style>
