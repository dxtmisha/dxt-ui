<script setup lang="ts">
import { ref } from 'vue'
import type { DraggableWrapperEventParameters } from '@dxtmisha/constructor/DraggableWrapper'
import type { DemoSectionDraggableWrapperDropZonesItem } from '../../../types/draggableWrapperDropZonesTypes'
import { useDemoEvent } from '../../../composables/useDemoEvent'
import DemoSectionDraggableWrapperList from './DemoSectionDraggableWrapperList.vue'

/**
 * Component representing the drop zones section for the DraggableWrapper demo.
 * It manages two lists (Zone A and Zone B) and allows moving items between them.
 *
 * Компонент, представляющий раздел зон сброса для демо-версии DraggableWrapper.
 * Управляет двумя списками (Зона А и Зона B) и позволяет перемещать элементы между ними.
 */

defineProps<{}>()

const { onEvent } = useDemoEvent()

/** Items currently located in zone A / Элементы, находящиеся в данный момент в зоне А */
const zoneA = ref<DemoSectionDraggableWrapperDropZonesItem[]>([
  { value: 'drag-a', label: 'Drag A' },
  { value: 'drag-b', label: 'Drag B' },
  { value: 'drag-c', label: 'Drag C' }
])

/** Items currently located in zone B / Элементы, находящиеся в данный момент в зоне B */
const zoneB = ref<DemoSectionDraggableWrapperDropZonesItem[]>([])

/**
 * Handles dropping of dragged items into a target zone.
 *
 * Обрабатывает сброс перетаскиваемых элементов в целевую зону.
 * @param parameters parameters from the draggable wrapper event / параметры события от draggable wrapper
 */
const onDrop = (parameters: DraggableWrapperEventParameters) => {
  const targetZone = parameters.valueTo
  const draggedValues = parameters.valueSelection

  if (!targetZone || !draggedValues.length) return

  if (targetZone === 'zone-a') {
    const movedItems = zoneB.value.filter(item => draggedValues.includes(item.value))
    zoneB.value = zoneB.value.filter(item => !draggedValues.includes(item.value))
    zoneA.value.push(...movedItems)
  } else if (targetZone === 'zone-b') {
    const movedItems = zoneA.value.filter(item => draggedValues.includes(item.value))
    zoneA.value = zoneA.value.filter(item => !draggedValues.includes(item.value))
    zoneB.value.push(...movedItems)
  }

  onEvent('drop', parameters)
}
</script>

<template>
  <div class="demo-section-draggable-wrapper-drop-zones">
    <D1DraggableWrapper @drop="onDrop">
      <template #default="{ className, classClick, classDrop }">
        <div class="demo-section-draggable-wrapper-drop-zones__drop-container">
          <div
            :class="['demo-section-draggable-wrapper-drop-zones__zone', className, classDrop]"
            data-value="zone-a"
          >
            <div class="demo-section-draggable-wrapper-drop-zones__zone-label">Zone A</div>
            <DemoSectionDraggableWrapperList
              :items="zoneA"
              :class-name="className"
              :class-click="classClick"
            />
          </div>

          <div
            :class="['demo-section-draggable-wrapper-drop-zones__zone', className, classDrop]"
            data-value="zone-b"
          >
            <div class="demo-section-draggable-wrapper-drop-zones__zone-label">Zone B</div>
            <DemoSectionDraggableWrapperList
              :items="zoneB"
              :class-name="className"
              :class-click="classClick"
            />
          </div>
        </div>
      </template>
    </D1DraggableWrapper>
  </div>
</template>

<style lang="scss">
.demo-section-draggable-wrapper-drop-zones {
  &__drop-container {
    display: flex;
    gap: 24px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  &__zone {
    flex: 1;
    min-width: 250px;
    border: 2px dashed;
    border-color: var(--sys-palette-outline);
    border-radius: 8px;
    padding: 16px;
    background-color: var(--sys-palette-surfaceContainerLow);
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &.d1-draggableWrapper__item--dragged {
      background-color: var(--sys-palette-primaryContainer);
      border-color: var(--sys-palette-primary);
    }
  }

  &__zone-label {
    display: block;
    margin-bottom: 12px;
    font-weight: bold;
    color: var(--sys-palette-onSurface);
  }
}
</style>
