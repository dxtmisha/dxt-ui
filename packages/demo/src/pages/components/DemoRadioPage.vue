<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selected = ref('space')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Radio">
    <D1Section>
      <D1Group label="Basic Group">
        <D1Radio
          v-model:selected="selected"
          value-variant="space"
          label="Space Exploration"
          description="Journey to the edge of the galaxy"
        />
        <D1Radio
          v-model:selected="selected"
          value-variant="ocean"
          label="Ocean Exploration"
          description="Discover the secrets of the abyss"
        />
        <D1Radio
          v-model:selected="selected"
          value-variant="forest"
          label="Forest Preservation"
          description="Protect the lungs of our planet"
        />
        <DemoValue :value="selected"/>
      </D1Group>

      <D1Group label="Appearances">
        <D1Radio label="Required" required />
        <D1Radio label="With Helper Message" helperMessage="This is a helper message" />
        <D1Radio
          label="With Validation Message"
          validationMessage="Error: Please choose an option"
        />
      </D1Group>

      <D1Group label="Layout">
        <D1Radio label="Full Width (block)" block />
        <D1Radio label="Content Width" :block="false" />
        <D1Radio label="Item Center" itemCenter description="This description helps to see how the radio is centered relative to the text." />
        <D1Radio label="Item Top" :itemCenter="false" description="This description helps to see how the radio is aligned to the top of the text." />
      </D1Group>

      <D1Group label="Adaptive">
        <D1Radio label="Adaptive (rightAlways)" adaptive="rightAlways" />
      </D1Group>

      <D1Group label="States">
        <D1Radio label="Disabled" disabled />
        <D1Radio label="Disabled Selected" disabled :selected="selected" value-variant="space" />
        <D1Radio label="Focus" focus />
        <D1Radio label="Loading" loading />
      </D1Group>

      <D1Group label="Events">
        <D1Radio
          label="Event Tracker"
          @input="(event, value) => onEvent('input', event, value)"
          @change="(event, value) => onEvent('change', event, value)"
        />
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
