<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'
import type { DraggableWrapperEventParameters } from '@dxtmisha/constructor/DraggableWrapper'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoSectionDraggableWrapperList from '../../components/Section/DraggableWrapper/DemoSectionDraggableWrapperList.vue'

const { eventName, onEvent } = useDemoEvent()

// 1. Basic Sorting State
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

// 2. Drop Zones State
const zoneA = ref([
  { value: 'drag-a', label: 'Drag A' },
  { value: 'drag-b', label: 'Drag B' },
  { value: 'drag-c', label: 'Drag C' }
])
const zoneB = ref<{ value: string, label: string }[]>([])

const onDrop = (parameters: DraggableWrapperEventParameters) => {
  onEvent('drop', parameters)
  const targetZone = parameters.valueTo
  const draggedValues = parameters.valueSelection

  if (!targetZone || !draggedValues.length) return

  if (targetZone === 'zone-a') {
    const moved = zoneB.value.filter(item => draggedValues.includes(item.value))
    zoneB.value = zoneB.value.filter(item => !draggedValues.includes(item.value))
    zoneA.value.push(...moved)
  } else if (targetZone === 'zone-b') {
    const moved = zoneA.value.filter(item => draggedValues.includes(item.value))
    zoneA.value = zoneA.value.filter(item => !draggedValues.includes(item.value))
    zoneB.value.push(...moved)
  }
}

// 3. Disabled & Delay States
const itemsDisabled = ref([
  { value: 'disabled-1', label: 'Disabled 1' },
  { value: 'disabled-2', label: 'Disabled 2' }
])

const itemsDelayed = ref([
  { value: 'delayed-1', label: 'Delayed 1 (500ms)' },
  { value: 'delayed-2', label: 'Delayed 2 (500ms)' }
])
const draggableDelayedRef = ref<any>(null)

const onPositionDelayed = (parameters: DraggableWrapperEventParameters) => {
  onEvent('position', parameters)
  if (draggableDelayedRef.value) {
    itemsDelayed.value = draggableDelayedRef.value.toNewPosition(itemsDelayed.value, parameters)
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
      </D1Group>

      <D1Group label="Drop Zones">
        <D1DraggableWrapper @drop="onDrop">
          <template #default="{ className, classClick, classDrop, classPosition }">
            <div class="demo-draggable-wrapper-page__drop-container">
              <div
                :class="['demo-draggable-wrapper-page__zone', className, classDrop]"
                data-value="zone-a"
              >
                <div class="demo-draggable-wrapper-page__zone-label">Zone A</div>
                <DemoSectionDraggableWrapperList
                  :items="zoneA"
                  :class-name="className"
                  :class-click="classClick"
                  :class-position="classPosition"
                />
              </div>

              <div
                :class="['demo-draggable-wrapper-page__zone', className, classDrop]"
                data-value="zone-b"
              >
                <div class="demo-draggable-wrapper-page__zone-label">Zone B</div>
                <DemoSectionDraggableWrapperList
                  :items="zoneB"
                  :class-name="className"
                  :class-click="classClick"
                  :class-position="classPosition"
                />
              </div>
            </div>
          </template>
        </D1DraggableWrapper>
      </D1Group>

      <D1Group label="Disabled State">
        <D1DraggableWrapper disabled>
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsDisabled"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
      </D1Group>

      <D1Group label="Delay (500ms)">
        <D1DraggableWrapper
          ref="draggableDelayedRef"
          delay="500"
          @position="onPositionDelayed"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsDelayed"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
      </D1Group>

      <D1Group label="Events Logger">
        <DemoValue :value="eventName" label="Last Event" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-draggable-wrapper-page {
  &__drop-container {
    display: flex;
    gap: 24px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  &__zone {
    flex: 1;
    min-width: 250px;
    border: 2px dashed var(--d1-sys-palette-outline);
    border-radius: 8px;
    padding: 16px;
    background-color: var(--d1-sys-palette-surfaceContainerLow);
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &.d1-draggableWrapper__item--dragged {
      background-color: var(--d1-sys-palette-primaryContainer);
      border-color: var(--d1-sys-palette-primary);
    }
  }

  &__zone-label {
    display: block;
    margin-bottom: 12px;
    font-weight: bold;
    color: var(--d1-sys-palette-onSurface);
  }
}
</style>
