<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const value = ref(false)
const valueTrue = ref(true)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Switch">
    <D1Section>
      <D1Group label="Basic">
        <D1Switch
          label="Default"
          v-model="value"
        />
        <DemoValue :value="value"/>

        <D1Switch
          label="Checked by default"
          v-model="valueTrue"
        />
        <DemoValue :value="valueTrue"/>
      </D1Group>

      <D1Group label="Appearances">
        <D1Switch label="Required" required />
        <D1Switch label="With Description" description="This is a description for the switch" />
        <D1Switch
          label="With Helper Message"
          helperMessage="This is a helper message"
        />
        <D1Switch
          label="With Validation Message"
          validationMessage="Error: This field is required"
        />
      </D1Group>

      <D1Group label="Layout">
        <D1Switch label="Full Width (block)" block />
        <D1Switch label="Content Width" :block="false" />
        <D1Switch label="Item Center" itemCenter description="This description helps to see how the switch is centered relative to the text." />
        <D1Switch label="Item Top" :itemCenter="false" description="This description helps to see how the switch is aligned to the top of the text." />
      </D1Group>

      <D1Group label="Adaptive">
        <D1Switch label="Adaptive (rightAlways)" adaptive="rightAlways" />
        <D1Switch label="Adaptive (rightSm)" adaptive="rightSm" />
      </D1Group>

      <D1Group label="States">
        <D1Switch label="Disabled" disabled />
        <D1Switch label="Disabled Checked" disabled :modelValue="true" />
        <D1Switch label="Focus" focus />
        <D1Switch label="Loading" loading />
      </D1Group>

      <D1Group label="Events">
        <D1Switch
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
