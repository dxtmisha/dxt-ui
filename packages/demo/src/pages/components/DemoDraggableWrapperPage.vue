<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'
import type { DraggableWrapperEventParameters } from '@dxtmisha/constructor/DraggableWrapper'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoSectionDraggableWrapperList from '../../components/Section/DraggableWrapper/DemoSectionDraggableWrapperList.vue'
import DemoSectionDraggableWrapperDropZones from '../../components/Section/DraggableWrapper/DemoSectionDraggableWrapperDropZones.vue'

const { eventName, onEvent } = useDemoEvent()

const itemsBasic = ref([
  { value: 'item-1', label: 'Item 1' },
  { value: 'item-2', label: 'Item 2' },
  { value: 'item-3', label: 'Item 3' },
  { value: 'item-4', label: 'Item 4' },
  { value: 'item-5', label: 'Item 5' }
])
const draggableBasicRef = ref<any>(null)

const onPositionBasic = (parameters: DraggableWrapperEventParameters) => {
  onEvent('position', parameters)

  if (draggableBasicRef.value) {
    itemsBasic.value = draggableBasicRef.value.toNewPosition(itemsBasic.value, parameters)
  }
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="DraggableWrapper">
    <D1Section>
      <D1Group label="Basic Usage (Sorting)">
        <D1DraggableWrapper
          ref="draggableBasicRef"
          @position="onPositionBasic"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsBasic"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
        <DemoValue :value="itemsBasic.map(i => i.label).join(', ')" label="Current Order" />
        <DemoValue :value="eventName" label="Event" />
      </D1Group>

      <D1Group label="Drop Zones">
        <DemoSectionDraggableWrapperDropZones />
      </D1Group>
    </D1Section>
  </D1Page>
</template>
