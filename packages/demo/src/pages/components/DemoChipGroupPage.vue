<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const listBasic = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' }
]

const listCustomKeys = [
  { title: 'First Choice', code: '1' },
  { title: 'Second Choice', code: '2' },
  { title: 'Third Choice', code: '3' }
]

const selectedSingle = ref('b')
const selectedMultiple = ref(['a', 'c'])
const selectedReadonly = ref('a')
const selectedCustom = ref('2')
const selectedIcon = ref('a')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ChipGroup">
    <D1Section>
      <D1Group label="Basic Single Selection">
        <D1ChipGroup
          v-model:selected="selectedSingle"
          :list="listBasic"
          :readonly="false"
        />
        <DemoValue :value="selectedSingle" />
      </D1Group>

      <D1Group label="Multiple Selection">
        <D1ChipGroup
          v-model:selected="selectedMultiple"
          :list="listBasic"
          :readonly="false"
          multiple
        />
        <DemoValue :value="selectedMultiple" />
      </D1Group>

      <D1Group label="Readonly">
        <D1ChipGroup
          v-model:selected="selectedReadonly"
          :list="listBasic"
          readonly
        />
        <DemoValue :value="selectedReadonly" />
      </D1Group>

      <D1Group label="Icon When Selected">
        <D1ChipGroup
          v-model:selected="selectedIcon"
          :list="listBasic"
          :readonly="false"
          :chipAttrs="{ icon: 'check' }"
          iconWhenSelected
        />
        <DemoValue :value="selectedIcon" />
      </D1Group>

      <D1Group label="Custom Keys">
        <D1ChipGroup
          v-model:selected="selectedCustom"
          :list="listCustomKeys"
          keyLabel="title"
          keyValue="code"
          :readonly="false"
        />
        <DemoValue :value="selectedCustom" />
      </D1Group>

      <D1Group label="Chip Attributes">
        <DemoFlex>
          <D1ChipGroup
            v-model:selected="selectedSingle"
            :list="listBasic"
            :chipAttrs="{ palette: 'purple', size: 'sm', roundedFull: true }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <D1ChipGroup
          v-model:selected="selectedSingle"
          :list="listBasic"
          @click="(event, value) => onEvent('click', event, value)"
        />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
