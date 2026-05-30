<script setup lang="ts">
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const listBasic = [
  { label: 'Left', value: 'left' },
  { label: 'Middle', value: 'middle' },
  { label: 'Right', value: 'right' }
]

const listMany = [
  { label: 'Button 1', value: '1' },
  { label: 'Button 2', value: '2' },
  { label: 'Button 3', value: '3' },
  { label: 'Button 4', value: '4' },
  { label: 'Button 5', value: '5' },
  { label: 'Button 6', value: '6' },
  { label: 'Button 7', value: '7' },
  { label: 'Button 8', value: '8' }
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ButtonGroup">
    <D1Section>
      <D1Group label="Basic">
        <D1ButtonGroup :list="listBasic" />
      </D1Group>

      <D1Group label="Orientation">
        <DemoFlex>
          <D1ButtonGroup :list="listBasic" orientation="horizontal" />
          <D1ButtonGroup :list="listBasic" orientation="vertical" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Wrap">
        <D1ButtonGroup :list="listMany" wrap />
      </D1Group>

      <D1Group label="Button Attributes">
        <DemoFlex>
          <D1ButtonGroup :list="listBasic" :buttonAttrs="{ secondary: true }" />
          <D1ButtonGroup :list="listBasic" :buttonAttrs="{ outline: true, palette: 'green' }" />
          <D1ButtonGroup :list="listBasic" :buttonAttrs="{ size: 'sm', palette: 'red' }" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Default Slot">
        <DemoFlex>
          <D1ButtonGroup>
            <D1Button label="Custom 1" primary />
            <D1Button label="Custom 2" secondary />
            <D1Button label="Custom 3" outline />
          </D1ButtonGroup>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <D1ButtonGroup
          :list="listBasic"
          @click="(event, value) => onEvent('click', event, value)"
          @click-lite="(value) => onEvent('clickLite', value)"
        />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
