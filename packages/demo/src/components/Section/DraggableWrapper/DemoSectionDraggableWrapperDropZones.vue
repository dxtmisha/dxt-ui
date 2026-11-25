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
 * It manages two lists (Zone A and Zone B) and allows moving single or multiple selected items between them.
 *
 * Компонент, представляющий раздел зон сброса для демо-версии DraggableWrapper.
 * Управляет двумя списками (Зона А и Зона B) и позволяет перемещать один или несколько выбранных элементов между ними.
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

/** Selected item values for multi-item drop / Выбранные значения элементов для группового сброса */
const selectedValues = ref<string[]>([])

/**
 * Toggles selection state for an item value.
 *
 * Переключает состояние выбора для значения элемента.
 * @param value item value / значение элемента
 */
const toggleSelection = (value: string) => {
  if (selectedValues.value.includes(value)) {
    selectedValues.value = selectedValues.value.filter(entry => entry !== value)
  } else {
    selectedValues.value = [...selectedValues.value, value]
  }
}

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

  selectedValues.value = selectedValues.value.filter(entry => !draggedValues.includes(entry))
  onEvent('drop', parameters)
}
</script>

<template>
  <DemoFlex>
    <D1Button
      v-for="item in [...zoneA, ...zoneB]"
      :key="item.value"
      :label="'Select ' + item.label"
      :primary="selectedValues.includes(item.value)"
      :outline="!selectedValues.includes(item.value)"
      size="sm"
      @click="toggleSelection(item.value)"
    />
  </DemoFlex>
  <D1DraggableWrapper :delay="0" @drop="onDrop">
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
            :selected-values="selectedValues"
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
            :selected-values="selectedValues"
          />
        </div>
      </DemoFlex>
    </template>
  </D1DraggableWrapper>
  <DemoValue :value="zoneA.map(item => item.label).join(', ') || 'Empty'" label="Zone A Items" />
  <DemoValue :value="zoneB.map(item => item.label).join(', ') || 'Empty'" label="Zone B Items" />
  <DemoValue :value="eventName" label="Event" />
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-section-draggable-wrapper-drop-zones {
  &__zone {
    flex: 1;
    min-height: 150px;

    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');

    border-style: dashed;
    border-width: 2px;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.md');
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &.d1-draggableWrapper__drop--active {
      @include ui.borderColor(ui.v('?sys.palette.primary'), ui.v('?sys.opacity.primary'));
    }
  }
}
</style>
