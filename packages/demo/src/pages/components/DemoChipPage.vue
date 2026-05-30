<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const isSelected1 = ref(false)
const isSelected2 = ref(true)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Chip">
    <D1Section>
      <D1Group label="Basic">
        <DemoFlex>
          <D1Chip label="Classic Chip" />
          <D1Chip label="With Leading Icon" icon="home" />
          <D1Chip label="With Trailing Icon" iconTrailing="close" />
          <D1Chip label="Both Icons" icon="home" iconTrailing="close" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex>
          <D1Chip label="Small" size="sm" />
          <D1Chip label="Medium" size="md" />
          <D1Chip label="Large" size="lg" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex>
          <D1Chip label="Red" palette="red" />
          <D1Chip label="Green" palette="green" />
          <D1Chip label="Blue" palette="blue" />
          <D1Chip label="Orange" palette="orange" />
          <D1Chip label="Purple" palette="purple" />
        </DemoFlex>
      </D1Group>

      <D1Group label="States">
        <DemoFlex>
          <D1Chip label="Click to Select" :selected="isSelected1" @click="isSelected1 = !isSelected1" />
          <D1Chip label="Selected State" :selected="isSelected2" @click="isSelected2 = !isSelected2" />
          <D1Chip label="Disabled" disabled />
          <D1Chip label="Readonly" readonly />
          <D1Chip label="Focus" focus />
          <D1Chip label="Loading" loading />
        </DemoFlex>
      </D1Group>

      <D1Group label="Shapes">
        <DemoFlex>
          <D1Chip label="Standard Rounded" />
          <D1Chip label="Rounded Full" roundedFull />
        </DemoFlex>
      </D1Group>

      <D1Group label="Input & Assistive">
        <DemoFlex>
          <D1Chip label="Input (closable)" input iconTrailing="close" />
          <D1Chip label="Assistive" assistive icon="settings" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Chip
            label="Click Tracker"
            value="chip-value"
            @click="(event, value) => onEvent('click', event, value)"
          />
        </DemoFlex>
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
