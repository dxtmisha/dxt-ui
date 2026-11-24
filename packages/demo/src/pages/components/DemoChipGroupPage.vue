<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const listBasic = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Zero', value: 0 },
  { label: 'Locked', value: 'locked', disabled: true }
]

const listCustomKeys = [
  { title: 'First Choice', code: '1' },
  { title: 'Second Choice', code: '2' },
  { title: 'Third Choice', code: '3' }
]

const listUnicode = [
  { label: 'Tiếng Việt', value: 'vi' },
  { label: 'Кириллица 🚀', value: 'ru' },
  { label: 'VeryLongChipGroupItemLabelText1234567890', value: 'long' }
]

const selectedSingle = ref<string | number>('b')
const selectedMultiple = ref<string[]>(['a', 'b'])
const selectedReadonly = ref<string>('a')
const selectedCustom = ref<string>('2')
const selectedIcon = ref<string>('a')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ChipGroup">
    <D1Section>
      <D1Group label="Basic Single Selection (Numeric Zero & Disabled Guard)">
        <D1ChipGroup
          v-model:selected="selectedSingle"
          data-testid="demo-cg-single"
          :list="listBasic"
          :readonly="false"
        />
        <DemoValue data-testid="demo-cg-single-output" :value="selectedSingle" />
      </D1Group>

      <D1Group label="Multiple Selection">
        <D1ChipGroup
          v-model:selected="selectedMultiple"
          data-testid="demo-cg-multiple"
          :list="listBasic"
          :readonly="false"
          multiple
        />
        <DemoFlex>
          <D1Button data-testid="demo-cg-clear" size="sm" outline label="Clear Selection" @click="selectedMultiple = []" />
        </DemoFlex>
        <DemoValue data-testid="demo-cg-multiple-output" :value="selectedMultiple" />
      </D1Group>

      <D1Group label="Readonly (Default)">
        <D1ChipGroup
          v-model:selected="selectedReadonly"
          data-testid="demo-cg-readonly"
          :list="listBasic"
          readonly
        />
        <DemoValue data-testid="demo-cg-readonly-output" :value="selectedReadonly" />
      </D1Group>

      <D1Group label="Icon When Selected">
        <D1ChipGroup
          v-model:selected="selectedIcon"
          data-testid="demo-cg-icon"
          :list="listBasic"
          :readonly="false"
          :chip-attrs="{ icon: 'check' }"
          icon-when-selected
        />
        <DemoValue data-testid="demo-cg-icon-output" :value="selectedIcon" />
      </D1Group>

      <D1Group label="Custom Keys (keyLabel & keyValue)">
        <D1ChipGroup
          v-model:selected="selectedCustom"
          data-testid="demo-cg-keys"
          :list="listCustomKeys"
          key-label="title"
          key-value="code"
          :readonly="false"
        />
        <DemoValue data-testid="demo-cg-keys-output" :value="selectedCustom" />
      </D1Group>

      <D1Group label="Chip Attributes & Default Slot">
        <DemoFlex>
          <D1ChipGroup
            v-model:selected="selectedSingle"
            data-testid="demo-cg-attrs"
            :list="listBasic"
            :chip-attrs="{ palette: 'purple', size: 'sm', roundedFull: true }"
          >
            <template #default>
              <D1Chip data-testid="demo-cg-slot-chip" label="Custom Slot Chip" icon="star" />
            </template>
          </D1ChipGroup>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundaries (Unicode, Long Text & Empty List)">
        <D1ChipGroup
          data-testid="demo-cg-unicode"
          :list="listUnicode"
          selected="vi"
        />
        <D1ChipGroup
          data-testid="demo-cg-empty"
          :list="[]"
        />
      </D1Group>

      <D1Group label="Events">
        <D1ChipGroup
          v-model:selected="selectedSingle"
          data-testid="demo-cg-events"
          :list="listBasic"
          :readonly="false"
          @click="(event, value) => onEvent('click', event, value)"
          @click-lite="(value) => onEvent('clickLite', value)"
        />
        <DemoValue data-testid="demo-cg-event-output" :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
