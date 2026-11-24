<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const isSelected1 = ref<boolean>(false)
const isSelected2 = ref<boolean>(true)
const isSkeleton = ref<boolean>(true)
const isTurned = ref<boolean>(false)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Chip">
    <D1Section>
      <D1Group label="Basic & Icons">
        <DemoFlex data-testid="demo-chip-basic">
          <D1Chip label="Classic Chip" />
          <D1Chip label="With Leading Icon" icon="home" />
          <D1Chip label="With Trailing Icon" icon-trailing="close" />
          <D1Chip label="Both Icons" icon="home" icon-trailing="close" />
          <D1Chip label="Icon Turn" icon="arrow_drop_down" :icon-turn="isTurned" @click="isTurned = !isTurned" />
          <D1Chip label="Icon Hidden" icon="home" icon-hide />
          <D1Chip icon="search" aria-label="Search chip" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex data-testid="demo-chip-sizes">
          <D1Chip label="Extra Small" size="xs" />
          <D1Chip label="Small" size="sm" />
          <D1Chip label="Medium" size="md" />
          <D1Chip label="Large" size="lg" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes & Inverse">
        <DemoFlex data-testid="demo-chip-palettes">
          <D1Chip label="Red" palette="red" />
          <D1Chip label="Green" palette="green" />
          <D1Chip label="Blue" palette="blue" />
          <D1Chip label="Orange" palette="orange" />
          <D1Chip label="Purple" palette="purple" />
          <D1Chip label="Inverse" inverse />
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Combinations">
        <DemoFlex data-testid="demo-chip-states">
          <D1Chip
            data-testid="demo-chip-toggle-select"
            label="Click to Select"
            :selected="isSelected1"
            @click="isSelected1 = !isSelected1"
          />
          <D1Chip
            data-testid="demo-chip-selected"
            label="Selected State"
            :selected="isSelected2"
            @click="isSelected2 = !isSelected2"
          />
          <D1Chip data-testid="demo-chip-disabled" label="Disabled" disabled />
          <D1Chip label="Disabled + Selected" disabled selected />
          <D1Chip data-testid="demo-chip-readonly" label="Readonly" readonly />
          <D1Chip label="Focus" focus />
          <D1Chip data-testid="demo-chip-loading" label="Loading" loading />
          <D1Chip label="Loading + Selected" loading selected />
        </DemoFlex>
      </D1Group>

      <D1Group label="Shapes, Adaptive, Grid & Text Align">
        <DemoFlex data-testid="demo-chip-variants">
          <D1Chip label="Standard Rounded" />
          <D1Chip label="Rounded Full" rounded-full />
          <D1Chip label="Adaptive Icon Always" icon="star" adaptive="iconAlways" aria-label="Star" />
          <D1Chip label="Adaptive Block" adaptive="block" text-align="left" />
          <D1Chip label="Centered Grid" grid text-align="center" />
          <D1Chip label="Right Aligned" adaptive="block" text-align="right" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Input, Assistive & Semantic Tags">
        <DemoFlex data-testid="demo-chip-semantic">
          <D1Chip label="Input (closable)" input icon-trailing="close" />
          <D1Chip label="Assistive" assistive icon="settings" />
          <D1Chip data-testid="demo-chip-button-tag" label="Native Button Tag" tag="button" />
          <D1Chip data-testid="demo-chip-link" label="External Link" tag="a" href="#chip-link" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots & Boundaries">
        <DemoFlex data-testid="demo-chip-boundaries">
          <D1Chip :label="0" :value="0" />
          <D1Chip label="Tiếng Việt / Кириллица / 🚀" />
          <D1Chip label="VeryLongUnbrokenChipLabelTextForOverflowTesting1234567890" />
          <D1Chip>
            <template #default>Custom Default Slot</template>
          </D1Chip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button
            data-testid="demo-chip-skeleton-toggle"
            size="sm"
            outline
            label="Toggle Skeleton"
            @click="isSkeleton = !isSkeleton"
          />
        </DemoFlex>
        <D1Skeleton :active="isSkeleton">
          <DemoFlex>
            <D1Chip
              data-testid="demo-chip-skeleton"
              label="Skeleton Chip"
              icon="home"
              :is-skeleton="isSkeleton"
            />
          </DemoFlex>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Chip
            data-testid="demo-chip-event-target"
            label="Click Tracker"
            value="chip-value"
            @click="(event, value) => onEvent('click', event, value)"
            @click-lite="(value) => onEvent('clickLite', value)"
          />
          <D1Chip
            data-testid="demo-chip-event-zero"
            label="Zero Value"
            :value="0"
            @click-lite="(value) => onEvent('clickLite', value)"
          />
          <D1Chip
            data-testid="demo-chip-event-disabled"
            label="Disabled Tracker"
            disabled
            @click="(event, value) => onEvent('click', event, value)"
          />
        </DemoFlex>
        <DemoValue data-testid="demo-chip-event-output" :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
