<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

// 1. Basic Usage Items
const listItems = ref([
  { label: 'Play', value: 'play', icon: 'play_arrow' },
  { label: 'Edit', value: 'edit', icon: 'edit' },
  { label: 'Settings', value: 'settings', icon: 'settings', disabled: true },
  { label: 'Delete', value: 'delete', icon: 'delete' }
])

// 2. Axis Layout Items
const axisItems = ref([
  { label: 'Alpha', value: 'a', icon: 'bookmark' },
  { label: 'Beta', value: 'b', icon: 'label' },
  { label: 'Gamma', value: 'g', icon: 'flag' }
])

// 3. Lite Mode Items
const liteItems = ref([
  { label: 'Alpha', value: 'a', icon: 'bookmark' },
  { label: 'Beta', value: 'b', icon: 'label' },
  { label: 'Gamma', value: 'g', icon: 'flag' },
  { label: 'Delta', value: 'd', icon: 'star' },
  { label: 'Epsilon', value: 'e', icon: 'bolt' }
])

// 4. Highlight Items
const highlightItems = ref([
  { label: 'Project index example', value: 'projects', icon: 'folder' },
  { label: 'Advanced context options', value: 'experiments', icon: 'tune' },
  { label: 'Next examination notes', value: 'example', icon: 'description' },
  { label: 'User experience metrics', value: 'express', icon: 'insights' }
])

// 5. Events State
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="List">
    <D1Section>
      <D1Group label="Basic Usage">
        <D1List
          :list="listItems"
          selected="play"
        />
      </D1Group>

      <D1Group label="Dividers">
        <D1List
          :list="listItems"
          divider
          selected="edit"
        />
      </D1Group>

      <D1Group label="Axis Layout">
        <h3>Vertical Layout (axis="y")</h3>
        <D1List
          :list="axisItems"
          axis="y"
          selected="a"
        />

        <h3>Horizontal Layout (axis="x")</h3>
        <D1List
          :list="axisItems"
          axis="x"
          selected="b"
        />
      </D1Group>

      <D1Group label="Lite Mode">
        <D1List
          :list="liteItems"
          lite
          :liteThreshold="3"
          selected="a"
        />
      </D1Group>

      <D1Group label="Selection Highlight">
        <D1List
          :list="highlightItems"
          highlight="exam"
          :highlightLengthStart="4"
          selected="experiments"
        />
      </D1Group>

      <D1Group label="Disabled List">
        <D1List
          :list="listItems"
          disabled
          selected="delete"
        />
      </D1Group>

      <D1Group label="Events">
        <D1List
          :list="listItems"
          selected="play"
          @click="onEvent('click')"
          @click-lite="onEvent('clickLite')"
          @close="onEvent('close')"
        />
        <div v-if="eventName" class="demo-list-page__event-log">
          Last event: {{ eventName }}
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-list-page {
  &__event-log {
    margin-top: 8px;
    font-size: 14px;
    color: var(--sys-palette-primary);
  }
}
</style>
