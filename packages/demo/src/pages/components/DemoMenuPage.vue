<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

// 1. Common datasets
const menuItems = ref([
  { label: 'Play', value: 'play', icon: 'play_arrow' },
  { label: 'Edit', value: 'edit', icon: 'edit' },
  { label: 'Settings', value: 'settings', icon: 'settings', disabled: true },
  { label: 'Delete', value: 'delete', icon: 'delete' }
])

const largeItems = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
  { label: 'Honeydew', value: 'honeydew' }
])

// 2. States for variations
const selectedBasic = ref('play')

const selectedNone = ref('play')
const selectedCheckmark = ref('edit')
const selectedRadio = ref('delete')
const selectedCheckbox = ref(['play'])

const selectedSearch = ref('cherry')
const selectedHeader = ref('play')

const selectedAutoClose = ref('play')
const selectedPersistent = ref('play')

const selectedEmbedded = ref('play')
const selectedIndent = ref('play')

const selectedAjax = ref('settings')
const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([
  { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
  { label: 'Users', value: 'users', icon: 'people' },
  { label: 'Settings', value: 'settings', icon: 'settings' },
  { label: 'Reports', value: 'reports', icon: 'assessment' }
]), 600))

const selectedNav = ref('color2')
const navItems = ref([
  { label: 'Red', value: 'color1', icon: 'palette' },
  { label: 'Green', value: 'color2', icon: 'palette' },
  { label: 'Blue', value: 'color3', icon: 'palette' },
  { label: 'Yellow', value: 'color4', icon: 'palette' }
])
const step = ref(1)

const selectedEvent = ref('play')
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Menu">
    <D1Section>
      <!-- Basic Usage -->
      <D1Group label="Basic Usage">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedBasic"
            :list="menuItems"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Open Basic Menu"
                primary
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue :value="selectedBasic" />
      </D1Group>

      <!-- Selection Styles -->
      <D1Group label="Selection Styles">
        <DemoFlex>
          <!-- None Selection Style -->
          <D1Menu
            v-model:selected="selectedNone"
            :list="menuItems"
            selection-style="none"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Style: none"
                secondary
              />
            </template>
          </D1Menu>

          <!-- Checkmark Selection Style -->
          <D1Menu
            v-model:selected="selectedCheckmark"
            :list="menuItems"
            selection-style="checkmark"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Style: checkmark"
                secondary
              />
            </template>
          </D1Menu>

          <!-- Radio Selection Style -->
          <D1Menu
            v-model:selected="selectedRadio"
            :list="menuItems"
            selection-style="radio"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Style: radio"
                secondary
              />
            </template>
          </D1Menu>

          <!-- Checkbox Selection Style -->
          <D1Menu
            v-model:selected="selectedCheckbox"
            :list="menuItems"
            selection-style="checkbox"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Style: checkbox"
                secondary
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue :value="`none: ${selectedNone}`" />
          <DemoValue :value="`checkmark: ${selectedCheckmark}`" />
          <DemoValue :value="`radio: ${selectedRadio}`" />
          <DemoValue :value="`checkbox: ${selectedCheckbox}`" />
        </DemoFlex>
      </D1Group>

      <!-- Search & Filtering -->
      <D1Group label="Search & Filtering">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedSearch"
            :list="largeItems"
            show-search
            filter-mode
            is-selected-by-value
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Open Searchable Menu"
                tonal
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue :value="selectedSearch" />
      </D1Group>

      <!-- Custom Header & Title -->
      <D1Group label="Header & Title Controls">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedHeader"
            :list="menuItems"
            is-selected-by-value
            :bars-hide="false"
            label="Category Selection"
            description="Select an active category action below"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Open Menu with Header"
                outline
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue :value="selectedHeader" />
      </D1Group>

      <!-- Auto Close & Persistent -->
      <D1Group label="Close Rules (autoClose & persistent)">
        <DemoFlex>
          <!-- autoClose: false -->
          <D1Menu
            v-model:selected="selectedAutoClose"
            :list="menuItems"
            is-selected-by-value
            :auto-close="false"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="autoClose: false"
                outline
              />
            </template>
          </D1Menu>

          <!-- persistent: true -->
          <D1Menu
            v-model:selected="selectedPersistent"
            :list="menuItems"
            is-selected-by-value
            persistent
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="persistent: true"
                outline
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoFlex>
          <DemoValue :value="`autoClose: ${selectedAutoClose}`" />
          <DemoValue :value="`persistent: ${selectedPersistent}`" />
        </DemoFlex>
      </D1Group>

      <!-- Position Offset & Indent -->
      <D1Group label="Custom Position Offset (indent)">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedIndent"
            :list="menuItems"
            is-selected-by-value
            :indent="24"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Open Offset Menu (indent: 24)"
                secondary
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue :value="selectedIndent" />
      </D1Group>

      <!-- Embedded Menu -->
      <D1Group label="Embedded Menu">
        <D1Menu
          v-model:selected="selectedEmbedded"
          :list="menuItems"
          is-selected-by-value
          embedded
        />
        <DemoValue :value="selectedEmbedded" />
      </D1Group>

      <!-- AJAX Loading -->
      <D1Group label="AJAX Loading">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedAjax"
            :ajax="loadMenuData"
            is-selected-by-value
          >
            <template #control="{ binds, loading }">
              <D1Button
                v-bind="binds"
                :label="`Open AJAX Menu${loading ? ' (loading...)' : ''}`"
                secondary
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue :value="selectedAjax" />
      </D1Group>

      <!-- Navigation & Step -->
      <D1Group label="Navigation & Step">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedNav"
            :list="navItems"
            :step="step"
            is-selected-by-value
          >
            <template #control="{ previous, next, selectedNames }">
              <DemoFlex>
                <D1Button
                  label="Previous"
                  @click="previous"
                  outline
                />
                <span>{{ selectedNames.value[0] || 'None' }}</span>
                <D1Button
                  label="Next"
                  @click="next"
                  outline
                />
              </DemoFlex>
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue :value="selectedNav" />
      </D1Group>

      <!-- Events -->
      <D1Group label="Events">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedEvent"
            :list="menuItems"
            is-selected-by-value
            @click="onEvent('click')"
            @click-lite="onEvent('clickLite')"
            @click-slot="onEvent('clickSlot')"
            @update-value="onEvent('updateValue')"
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Trigger Events"
                tonal
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue :value="eventName || 'No events triggered yet'" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
