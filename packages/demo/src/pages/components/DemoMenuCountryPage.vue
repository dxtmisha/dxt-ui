<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

// Basic usage state
const selectedBasic = ref('VN')

// Custom filtered list state
const selectedCustom = ref('RU')
const customList = ref(['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'CN', 'JP'])

// Selection by value state
const selectedByValue = ref('US')

// Disabled state
const selectedDisabled = ref('FR')

// Event tracking state
const { eventName, onEvent } = useDemoEvent()
const selectedEvents = ref('VN')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="MenuCountry">
    <D1Section>
      <D1Group label="Basic Usage (Default List)">
        <div class="demo-menu-country-page__row">
          <D1MenuCountry
            v-model:selected="selectedBasic"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames[0] || 'Select Country'"
                icon="public"
                primary
              />
            </template>
          </D1MenuCountry>
        </div>
        <DemoValue :value="selectedBasic" />
      </D1Group>

      <D1Group label="Custom Filtered List">
        <div class="demo-menu-country-page__row">
          <D1MenuCountry
            v-model:selected="selectedCustom"
            :country-list="customList"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Custom Country'"
                icon="flag"
                secondary
              />
            </template>
          </D1MenuCountry>
        </div>
        <DemoValue :value="selectedCustom" />
      </D1Group>

      <D1Group label="Selection by Value (is-selected-by-value)">
        <div class="demo-menu-country-page__row">
          <D1MenuCountry
            v-model:selected="selectedByValue"
            is-selected-by-value
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Country'"
                icon="check_circle"
                outline
              />
            </template>
          </D1MenuCountry>
        </div>
        <DemoValue :value="selectedByValue" />
      </D1Group>

      <D1Group label="Disabled State">
        <div class="demo-menu-country-page__row">
          <D1MenuCountry
            v-model:selected="selectedDisabled"
            disabled
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Country'"
                disabled
              />
            </template>
          </D1MenuCountry>
        </div>
        <DemoValue :value="selectedDisabled" />
      </D1Group>

      <D1Group label="Event Tracking">
        <div class="demo-menu-country-page__row">
          <D1MenuCountry
            v-model:selected="selectedEvents"
            @click="onEvent('click')"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Country'"
                icon="bolt"
                tonal
              />
            </template>
          </D1MenuCountry>
        </div>
        <DemoValue :value="eventName || 'No events triggered yet'" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-menu-country-page {
  &__row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    margin-bottom: 8px;
  }
}
</style>
