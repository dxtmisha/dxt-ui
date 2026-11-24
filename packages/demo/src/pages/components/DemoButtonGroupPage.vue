<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const isLoading = ref<boolean>(true)

const listBasic = [
  { label: 'Left', value: 'left' },
  { label: 'Middle', value: 0 },
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

const listWithDisabled = [
  { label: 'Save', value: 'save' },
  { label: 'Archive', value: 0 },
  { label: 'Locked', value: 'locked', disabled: true }
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ButtonGroup">
    <D1Section>
      <D1Group label="Basic & ARIA Group">
        <D1ButtonGroup
          data-testid="demo-bg-basic"
          aria-label="Alignment actions"
          :list="listBasic"
        />
      </D1Group>

      <D1Group label="Orientation (Horizontal & Vertical)">
        <DemoFlex>
          <D1ButtonGroup
            data-testid="demo-bg-horizontal"
            :list="listBasic"
            orientation="horizontal"
          />
          <D1ButtonGroup
            data-testid="demo-bg-vertical"
            :list="listBasic"
            orientation="vertical"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Wrap">
        <D1ButtonGroup
          data-testid="demo-bg-wrap"
          :list="listMany"
          wrap
        />
      </D1Group>

      <D1Group label="Shared Button Attributes (buttonAttrs)">
        <DemoFlex>
          <D1ButtonGroup :list="listBasic" :button-attrs="{ secondary: true }" />
          <D1ButtonGroup :list="listBasic" :button-attrs="{ outline: true, palette: 'green' }" />
          <D1ButtonGroup
            data-testid="demo-bg-attrs-sm"
            :list="listBasic"
            :button-attrs="{ size: 'sm', palette: 'red' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Default Slot">
        <DemoFlex>
          <D1ButtonGroup data-testid="demo-bg-slot" aria-label="Custom actions">
            <D1Button label="Custom 1" primary />
            <D1Button label="Custom 2" secondary />
            <D1Button label="Custom 3" outline />
          </D1ButtonGroup>
        </DemoFlex>
      </D1Group>

      <D1Group label="Click Events & Disabled Item Guard">
        <D1ButtonGroup
          data-testid="demo-bg-events"
          aria-label="Document actions"
          :list="listWithDisabled"
          @click="(event, value) => onEvent('click', event, value)"
          @click-lite="(value) => onEvent('clickLite', value)"
        />
        <DemoValue data-testid="demo-bg-event-output" :value="eventName" />
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex gap="sm">
          <D1Button
            data-testid="demo-bg-skeleton-toggle"
            size="sm"
            outline
            label="Toggle Skeleton"
            @click="isLoading = !isLoading"
          />
        </DemoFlex>
        <D1Skeleton :active="isLoading">
          <D1ButtonGroup
            data-testid="demo-bg-skeleton"
            :is-skeleton="isLoading"
            :list="listBasic"
          />
        </D1Skeleton>
      </D1Group>
    </D1Section>
  </D1Page>
</template>
