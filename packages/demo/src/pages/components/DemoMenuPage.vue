<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

// 1. Basic Usage States
const selectedBasic = ref('play')
const menuItems = ref([
  { label: 'Play', value: 'play', icon: 'play_arrow' },
  { label: 'Edit', value: 'edit', icon: 'edit' },
  { label: 'Settings', value: 'settings', icon: 'settings', disabled: true },
  { label: 'Delete', value: 'delete', icon: 'delete' }
])

// 2. AJAX Loading States
const selectedAjax = ref('settings')
const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([
  { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
  { label: 'Users', value: 'users', icon: 'people' },
  { label: 'Settings', value: 'settings', icon: 'settings' },
  { label: 'Reports', value: 'reports', icon: 'assessment' }
]), 512))

// 3. Step & Navigation States
const selectedNav = ref('color2')
const navItems = ref([
  { label: 'Red', value: 'color1', icon: 'palette' },
  { label: 'Green', value: 'color2', icon: 'palette' },
  { label: 'Blue', value: 'color3', icon: 'palette' },
  { label: 'Yellow', value: 'color4', icon: 'palette' }
])
const step = ref(1)

// 4. Embedded Menu States
const selectedEmbedded = ref('play')

// 5. Disabled Menu States
const selectedDisabled = ref('edit')

// 6. Events States
const selectedEvent = ref('play')
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Menu">
    <D1Section>
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

      <D1Group label="Embedded Menu">
        <D1Menu
          v-model:selected="selectedEmbedded"
          :list="menuItems"
          is-selected-by-value
          embedded
        />
        <DemoValue :value="selectedEmbedded" />
      </D1Group>

      <D1Group label="Disabled Menu">
        <DemoFlex>
          <D1Menu
            v-model:selected="selectedDisabled"
            :list="menuItems"
            is-selected-by-value
            disabled
          >
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Disabled Menu"
                disabled
              />
            </template>
          </D1Menu>
        </DemoFlex>
        <DemoValue :value="selectedDisabled" />
      </D1Group>

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
