<script setup lang="ts">
import { ref } from 'vue'
import type {
  DraggableWrapperEventParameters,
  DraggableWrapperExpose
} from '@dxtmisha/constructor/DraggableWrapper'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoSectionDraggableWrapperList from '../../components/Section/DraggableWrapper/DemoSectionDraggableWrapperList.vue'
import DemoSectionDraggableWrapperDropZones from '../../components/Section/DraggableWrapper/DemoSectionDraggableWrapperDropZones.vue'

interface DraggableDemoItem {
  value: string
  label: string
}

const { eventName, onEvent } = useDemoEvent()

const itemsBasic = ref<DraggableDemoItem[]>([
  { value: 'item-1', label: 'Item 1' },
  { value: 'item-2', label: 'Item 2' },
  { value: 'item-3', label: 'Item 3' },
  { value: 'item-4', label: 'Item 4' },
  { value: 'item-5', label: 'Item 5' }
])
const draggableBasicRef = ref<DraggableWrapperExpose | null>(null)

const onPositionBasic = (parameters: DraggableWrapperEventParameters) => {
  onEvent('position', parameters)

  if (draggableBasicRef.value) {
    itemsBasic.value = draggableBasicRef.value.toNewPosition(itemsBasic.value, parameters)
  }
}

const itemsHandle = ref<DraggableDemoItem[]>([
  { value: 'handle-1', label: 'Task 1' },
  { value: 'handle-2', label: 'Task 2' },
  { value: 'handle-3', label: 'Task 3' },
  { value: 'handle-4', label: 'Task 4' }
])
const draggableHandleRef = ref<DraggableWrapperExpose | null>(null)

const onPositionHandle = (parameters: DraggableWrapperEventParameters) => {
  onEvent('position-handle', parameters)

  if (draggableHandleRef.value) {
    itemsHandle.value = draggableHandleRef.value.toNewPosition(itemsHandle.value, parameters)
  }
}

const itemsMulti = ref<DraggableDemoItem[]>([
  { value: 'multi-1', label: 'Card 1' },
  { value: 'multi-2', label: 'Card 2' },
  { value: 'multi-3', label: 'Card 3' },
  { value: 'multi-4', label: 'Card 4' },
  { value: 'multi-5', label: 'Card 5' }
])
const selectedMulti = ref<string[]>(['multi-1', 'multi-2'])
const draggableMultiRef = ref<DraggableWrapperExpose | null>(null)

const toggleMultiSelection = (value: string) => {
  if (selectedMulti.value.includes(value)) {
    selectedMulti.value = selectedMulti.value.filter(entry => entry !== value)
  } else {
    selectedMulti.value = [...selectedMulti.value, value]
  }
}

const onPositionMulti = (parameters: DraggableWrapperEventParameters) => {
  onEvent('position-multi', parameters)

  if (draggableMultiRef.value) {
    itemsMulti.value = draggableMultiRef.value.toNewPosition(itemsMulti.value, parameters)
  }
}

const itemsDelayZero = ref<DraggableDemoItem[]>([
  { value: 'fast-1', label: 'Fast 1' },
  { value: 'fast-2', label: 'Fast 2' },
  { value: 'fast-3', label: 'Fast 3' }
])
const draggableDelayZeroRef = ref<DraggableWrapperExpose | null>(null)

const onPositionDelayZero = (parameters: DraggableWrapperEventParameters) => {
  onEvent('position-delay-0', parameters)

  if (draggableDelayZeroRef.value) {
    itemsDelayZero.value = draggableDelayZeroRef.value.toNewPosition(itemsDelayZero.value, parameters)
  }
}

const itemsDisabled = ref<DraggableDemoItem[]>([
  { value: 'disabled-1', label: 'Locked 1' },
  { value: 'disabled-2', label: 'Locked 2' },
  { value: 'disabled-3', label: 'Locked 3' }
])

const itemsCustomSquare = ref<DraggableDemoItem[]>([
  { value: 'square-1', label: 'Square 1' },
  { value: 'square-2', label: 'Square 2' },
  { value: 'square-3', label: 'Square 3' }
])
const draggableSquareRef = ref<DraggableWrapperExpose | null>(null)

const onPositionSquare = (parameters: DraggableWrapperEventParameters) => {
  onEvent('position-square', parameters)

  if (draggableSquareRef.value) {
    itemsCustomSquare.value = draggableSquareRef.value.toNewPosition(itemsCustomSquare.value, parameters)
  }
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="DraggableWrapper" class="demo-draggable-wrapper-page">
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
        <DemoValue :value="itemsBasic.map(item => item.label).join(', ')" label="Current Order" />
        <DemoValue :value="eventName" label="Event" />
      </D1Group>

      <D1Group label="Child Drag Handle (classClick)">
        <D1DraggableWrapper
          ref="draggableHandleRef"
          :delay="0"
          @position="onPositionHandle"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoFlex>
              <DemoBox
                v-for="item in itemsHandle"
                :key="item.value"
                size="sm"
                :class="[className, classPosition]"
                :data-value="item.value"
              >
                <span :class="['demo-draggable-wrapper-page__handle', classClick]">☰</span>
                <span>{{ item.label }}</span>
              </DemoBox>
            </DemoFlex>
          </template>
        </D1DraggableWrapper>
        <DemoValue :value="itemsHandle.map(item => item.label).join(', ')" label="Handle Order" />
      </D1Group>

      <D1Group label="Multiselection Sorting (item--selected)">
        <DemoFlex>
          <D1Button
            v-for="item in itemsMulti"
            :key="item.value"
            :label="item.label"
            :primary="selectedMulti.includes(item.value)"
            :outline="!selectedMulti.includes(item.value)"
            size="sm"
            @click="toggleMultiSelection(item.value)"
          />
        </DemoFlex>
        <D1DraggableWrapper
          ref="draggableMultiRef"
          :delay="0"
          @position="onPositionMulti"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoFlex>
              <DemoBox
                v-for="item in itemsMulti"
                :key="item.value"
                center
                size="sm"
                :class="[
                  className,
                  classClick,
                  classPosition,
                  selectedMulti.includes(item.value) ? 'd1-draggableWrapper__item--selected' : undefined,
                  selectedMulti.includes(item.value) ? 'demo-draggable-wrapper-page__selected' : undefined
                ]"
                :data-value="item.value"
              >
                {{ item.label }}
              </DemoBox>
            </DemoFlex>
          </template>
        </D1DraggableWrapper>
        <DemoValue :value="selectedMulti.join(', ') || 'None'" label="Selected" />
        <DemoValue :value="itemsMulti.map(item => item.label).join(', ')" label="Multi Order" />
      </D1Group>

      <D1Group label="Drop Zones">
        <DemoSectionDraggableWrapperDropZones />
      </D1Group>

      <D1Group label="Delay Zero (Immediate Drag) & Custom Tag (section)">
        <D1DraggableWrapper
          ref="draggableDelayZeroRef"
          tag="section"
          :delay="0"
          @position="onPositionDelayZero"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsDelayZero"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
        <DemoValue :value="itemsDelayZero.map(item => item.label).join(', ')" label="Fast Order" />
      </D1Group>

      <D1Group label="Custom Placeholder Classes (classesSquare)">
        <D1DraggableWrapper
          ref="draggableSquareRef"
          :delay="0"
          :classes-square="['demo-draggable-wrapper-page__square']"
          @position="onPositionSquare"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsCustomSquare"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
        <DemoValue :value="itemsCustomSquare.map(item => item.label).join(', ')" label="Square Order" />
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
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-draggable-wrapper-page {
  &__handle {
    display: inline-flex;
    align-items: center;
    margin-inline-end: 8px;
    cursor: grab;
    user-select: none;
  }

  &__selected {
    @include ui.borderColor(ui.v('?sys.palette.primary'), ui.v('?sys.opacity.primary'));
  }

  &__square {
    border-style: dashed;
    border-width: 2px;
    @include ui.borderColor(ui.v('?sys.palette.primary'), ui.v('?sys.opacity.primary'));
  }
}
</style>
