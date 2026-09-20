<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

import {
  dataCollageStandard,
  dataCollageQuilted,
  dataCollageWoven,
  dataCollageMasonryHorizontal,
  dataCollageMasonryVertical,
  dataCollageControl,
  dataCollageEvent
} from '../../media/data/dataCollage'

const selectedItems = ref<string[]>(['select-1', 'select-3'])
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Collage">
    <D1Section>
      <D1Group label="Standard Variant">
        <D1Collage
          variant="standard"
          columns="4"
          :images="dataCollageStandard"
        />
      </D1Group>

      <D1Group label="Quilted Variant (Spans: Large, Tall, Wide, Standard)">
        <D1Collage
          variant="quilted"
          columns="4"
          :images="dataCollageQuilted"
        />
      </D1Group>

      <D1Group label="Woven Variant">
        <D1Collage
          variant="woven"
          columns="3"
          :images="dataCollageWoven"
        />
      </D1Group>

      <D1Group label="Masonry Horizontal Variant">
        <D1Collage
          variant="masonryHorizontal"
          :images="dataCollageMasonryHorizontal"
        />
      </D1Group>

      <D1Group label="Masonry Vertical Variant">
        <D1Collage
          variant="masonryVertical"
          columns="4"
          :images="dataCollageMasonryVertical"
        />
      </D1Group>

      <D1Group label="Selection & Control Mode">
        <D1Collage
          control
          variant="standard"
          columns="4"
          :images="dataCollageControl"
          v-model:selected="selectedItems"
        />
        <DemoValue :value="selectedItems" />
      </D1Group>

      <D1Group label="Click Event">
        <D1Collage
          variant="standard"
          columns="4"
          :images="dataCollageEvent"
          @click="(event, value) => onEvent('click', event, value)"
        />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
