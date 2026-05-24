<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedBasic = ref('js')
const valueSingle = ref('option2')

const options = ref([
  { label: 'JavaScript', value: 'js', icon: 'code' },
  { label: 'TypeScript', value: 'ts', icon: 'code' },
  { label: 'Python', value: 'py', icon: 'code' },
  { label: 'Java', value: 'java', icon: 'code' },
  { label: 'C++', value: 'cpp', icon: 'code' },
  { label: 'Ruby', value: 'rb', icon: 'code' },
  { label: 'Go', value: 'go', icon: 'code' },
  { label: 'PHP', value: 'php', icon: 'code' }
])

const optionsVModel = ref([
  { label: 'First option', value: 'option1' },
  { label: 'Second option', value: 'option2' },
  { label: 'Third option', value: 'option3' }
])
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="MenuButton">
    <D1Section>
      <D1Group label="Basic Usage">
        <div class="demo-menu-button-page">
          <D1MenuButton
            v-model="selectedBasic"
            label="Select Language"
            :option="options"
          />
        </div>
        <DemoValue :value="selectedBasic" />
      </D1Group>

      <D1Group label="Label Options">
        <div class="demo-menu-button-page">
          <D1MenuButton
            v-model="valueSingle"
            label="Hide Label Value (Default)"
            :option="optionsVModel"
          />
          <D1MenuButton
            v-model="valueSingle"
            label="Show Label Value"
            :hide-label-value="false"
            :option="optionsVModel"
          />
          <D1MenuButton
            v-model="valueSingle"
            label="Custom Separator"
            :hide-label-value="false"
            label-separator=" -> "
            :option="optionsVModel"
          />
        </div>
        <DemoValue :value="valueSingle" />
      </D1Group>

      <D1Group label="Search & Filtering">
        <div class="demo-menu-button-page">
          <D1MenuButton
            v-model="selectedBasic"
            label="With Search"
            show-search
            :option="options"
          />
          <D1MenuButton
            v-model="selectedBasic"
            label="With Filter Mode"
            show-search
            filter-mode
            :option="options"
          />
        </div>
        <DemoValue :value="selectedBasic" />
      </D1Group>

      <D1Group label="Icons & Arrow">
        <div class="demo-menu-button-page">
          <D1MenuButton
            v-model="selectedBasic"
            label="With Leading Icon"
            icon="settings"
            :option="options"
          />
          <D1MenuButton
            v-model="selectedBasic"
            label="Custom Dropdown Arrow"
            icon-arrow-down="arrow_drop_down"
            :option="options"
          />
          <D1MenuButton
            v-model="selectedBasic"
            label="No Dropdown Arrow"
            :icon-arrow-down="null"
            :option="options"
          />
        </div>
        <DemoValue :value="selectedBasic" />
      </D1Group>

      <D1Group label="Appearances">
        <div class="demo-menu-button-page">
          <D1MenuButton
            v-model="selectedBasic"
            label="Primary"
            primary
            :option="options"
          />
          <D1MenuButton
            v-model="selectedBasic"
            label="Secondary"
            secondary
            :option="options"
          />
          <D1MenuButton
            v-model="selectedBasic"
            label="Outline"
            outline
            :option="options"
          />
          <D1MenuButton
            v-model="selectedBasic"
            label="Tonal"
            tonal
            :option="options"
          />
        </div>
      </D1Group>

      <D1Group label="States">
        <div class="demo-menu-button-page">
          <D1MenuButton
            v-model="selectedBasic"
            label="Disabled"
            disabled
            :option="options"
          />
        </div>
      </D1Group>

      <D1Group label="Events">
        <div class="demo-menu-button-page">
          <D1MenuButton
            v-model="selectedBasic"
            label="Event Tracker"
            :option="options"
            @input="onEvent('input')"
            @input-lite="onEvent('inputLite')"
            @change="onEvent('change')"
            @change-lite="onEvent('changeLite')"
          />
        </div>
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-menu-button-page {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
</style>
