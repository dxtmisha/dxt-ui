<script setup lang="ts">
import { ref } from 'vue'
import type { DraggableWrapperEventParameters } from '@dxtmisha/constructor/DraggableWrapper'
import { useDemoEvent } from '../../../composables/useDemoEvent'

import DemoFlex from '../../DemoFlex.vue'
import DemoValue from '../../DemoValue.vue'
import DemoSectionDraggableWrapperList from './DemoSectionDraggableWrapperList.vue'

import type { DemoSectionDraggableWrapperDropZonesItem } from '../../../types/draggableWrapperDropZonesTypes'

/**
 * Component representing the drop zones section for the DraggableWrapper demo.
 * It manages two lists (Zone A and Zone B) and allows moving items between them.
 *
 * Компонент, представляющий раздел зон сброса для демо-версии DraggableWrapper.
 * Управляет двумя списками (Зона А и Зона B) и позволяет перемещать элементы между ними.
 */

defineProps<{}>()

const { eventName, onEvent } = useDemoEvent()

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
  <D1DraggableWrapper @drop="onDrop">
    <template #default="{ className, classClick, classDrop }">
      <DemoFlex>
        <div
          :class="['demo-section-draggable-wrapper-drop-zones__zone', className, classDrop]"
          data-value="zone-a"
        >
          <D1Header label="Zone A" tag="h5" />
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
          <D1Header label="Zone B" tag="h5" />
          <DemoSectionDraggableWrapperList
            :items="zoneB"
            :class-name="className"
            :class-click="classClick"
          />
        </div>
      </DemoFlex>
    </template>
  </D1DraggableWrapper>
  <DemoValue :value="eventName" label="Event" />
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-section-draggable-wrapper-drop-zones {
  &__zone {
    flex: 1;

    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');

    border-style: dashed;
    border-width: 2px;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.md');
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &.d1-draggableWrapper__item--dragged {
      @include ui.borderColor(ui.v('?sys.palette.primary'), ui.v('?sys.opacity.primary'));
    }
  }
}
</style>
