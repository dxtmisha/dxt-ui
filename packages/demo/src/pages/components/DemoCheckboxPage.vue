<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const value = ref(false)
const valueTrue = ref(true)
const valueIndeterminate = ref(false)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Checkbox">
    <D1Section>
      <D1Group label="Basic">
        <D1Checkbox
          label="Default"
          v-model="value"
        />
        <DemoValue :value="value"/>

        <D1Checkbox
          label="Checked by default"
          v-model="valueTrue"
        />
        <DemoValue :value="valueTrue"/>
      </D1Group>

      <D1Group label="Indeterminate">
        <D1Checkbox
          label="Indeterminate state"
          v-model="valueIndeterminate"
          indeterminate
        />
        <DemoValue :value="valueIndeterminate"/>
      </D1Group>

      <D1Group label="Appearances">
        <D1Checkbox label="Required" required />
        <D1Checkbox label="With Description" description="This is a description for the checkbox" />
        <D1Checkbox
          label="With Helper Message"
          helperMessage="This is a helper message"
        />
        <D1Checkbox
          label="With Validation Message"
          validationMessage="Error: This field is required"
        />
      </D1Group>

      <D1Group label="Layout">
        <D1Checkbox label="Full Width (block)" block />
        <D1Checkbox label="Content Width" :block="false" />
        <D1Checkbox label="Item Center" itemCenter description="This description helps to see how the checkbox is centered relative to the text." />
        <D1Checkbox label="Item Top" :itemCenter="false" description="This description helps to see how the checkbox is aligned to the top of the text." />
      </D1Group>

      <D1Group label="Adaptive">
        <D1Checkbox label="Adaptive (rightAlways)" adaptive="rightAlways" />
        <D1Checkbox label="Adaptive (rightSm)" adaptive="rightSm" />
      </D1Group>

      <D1Group label="States">
        <D1Checkbox label="Disabled" disabled />
        <D1Checkbox label="Disabled Checked" disabled :modelValue="true" />
        <D1Checkbox label="Focus" focus />
        <D1Checkbox label="Loading" loading />
      </D1Group>

      <D1Group label="Icons">
        <D1Checkbox label="Custom Icon" iconCheckbox="home" />
        <D1Checkbox label="Custom Indeterminate Icon" indeterminate iconIndeterminate="close" />
      </D1Group>

      <D1Group label="Events">
        <D1Checkbox
          label="Event Tracker"
          @input="onEvent('input')"
          @input-lite="onEvent('inputLite')"
          @change="onEvent('change')"
          @change-lite="onEvent('changeLite')"
        />
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
