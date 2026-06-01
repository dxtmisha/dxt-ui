<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const valueText = ref('This is a text area with default content. You can write multiple lines of text here.')
const valueAutosizeFixed = ref('This textarea has autosize disabled. Its height is fixed based on rows property.')
const valueValidated = ref('')
const valueState = ref('Disabled or readonly initial value')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Textarea">
    <D1Section>
      <D1Group label="Basic">
        <D1Textarea label="Default Textarea" placeholder="Enter text here..." v-model="valueText" />
      </D1Group>

      <D1Group label="Autosize Behavior">
        <D1Textarea
          label="Autosize (Enabled by default)"
          placeholder="Start typing to see the height expand..."
          :autosize="true"
        />
        <D1Textarea
          label="Fixed Height (Autosize disabled, rows=4)"
          :autosize="false"
          :rows="4"
          v-model="valueAutosizeFixed"
        />
      </D1Group>

      <D1Group label="Features & Validation">
        <D1Textarea
          label="With Prefix & Suffix Icons"
          icon="search"
          iconTrailing="close"
          placeholder="Search descriptions..."
        />
        <D1Textarea
          label="Counter & Length Constraint (Max 50)"
          :maxlength="50"
          counterShow
          placeholder="Type here..."
        />
        <D1Textarea
          label="Helper Message"
          helperMessage="Provide a detailed feedback response."
          placeholder="Enter feedback"
        />
        <D1Textarea
          label="Required with Validation Error"
          v-model="valueValidated"
          required
          helperMessage="This field must not be empty"
          validationMessage="Field is required and must contain content"
        />
        <D1Textarea
          label="Loading State"
          loading
          placeholder="Component in loading state"
        />
      </D1Group>

      <D1Group label="States">
        <D1Textarea label="Disabled State" disabled v-model="valueState" />
        <D1Textarea label="Readonly State" readonly v-model="valueState" />
      </D1Group>

      <D1Group label="Events">
        <D1Textarea
          label="Event Tracker"
          placeholder="Interact with this field to see events fired..."
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
