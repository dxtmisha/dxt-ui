<script setup lang="ts">
import { ref } from 'vue'
import type {
  DraggableWrapperControl,
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

const lastPayload = ref<Record<string, unknown> | string>('No drag event yet')

const recordDragEvent = (name: string, parameters: DraggableWrapperEventParameters): void => {
  lastPayload.value = {
    value: parameters.value,
    valueActive: parameters.valueActive,
    valueSelection: parameters.valueSelection,
    valueTo: parameters.valueTo,
    before: parameters.before
  }
  onEvent(name, parameters)
}

const itemsBasic = ref<DraggableDemoItem[]>([
  { value: 'item-1', label: 'Item 1' },
  { value: 'item-2', label: 'Item 2' },
  { value: 'item-3', label: 'Item 3' },
  { value: 'item-4', label: 'Item 4' },
  { value: 'item-5', label: 'Item 5' }
])
const draggableBasicRef = ref<DraggableWrapperExpose | null>(null)

const onPositionBasic = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position', parameters)

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

const onPositionHandle = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position-handle', parameters)

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

const toggleMultiSelection = (value: string): void => {
  if (selectedMulti.value.includes(value)) {
    selectedMulti.value = selectedMulti.value.filter(entry => entry !== value)
  } else {
    selectedMulti.value = [...selectedMulti.value, value]
  }
}

const onPositionMulti = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position-multi', parameters)

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

const onPositionDelayZero = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position-delay-0', parameters)

  if (draggableDelayZeroRef.value) {
    itemsDelayZero.value = draggableDelayZeroRef.value.toNewPosition(itemsDelayZero.value, parameters)
  }
}

const itemsStringDelay = ref<DraggableDemoItem[]>([
  { value: 'delay-str-1', label: 'Delay 150ms A' },
  { value: 'delay-str-2', label: 'Delay 150ms B' },
  { value: 'delay-str-3', label: 'Delay 150ms C' }
])
const draggableStringDelayRef = ref<DraggableWrapperExpose | null>(null)

const onPositionStringDelay = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position-delay-string', parameters)

  if (draggableStringDelayRef.value) {
    itemsStringDelay.value = draggableStringDelayRef.value.toNewPosition(itemsStringDelay.value, parameters)
  }
}

const itemsDisabled = ref<DraggableDemoItem[]>([
  { value: 'disabled-1', label: 'Locked 1' },
  { value: 'disabled-2', label: 'Locked 2' },
  { value: 'disabled-3', label: 'Locked 3' }
])
const isInteractiveDisabled = ref<boolean>(true)
const draggableDisabledRef = ref<DraggableWrapperExpose | null>(null)

const onPositionDisabled = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position-disabled-toggle', parameters)

  if (draggableDisabledRef.value) {
    itemsDisabled.value = draggableDisabledRef.value.toNewPosition(itemsDisabled.value, parameters)
  }
}

const itemsCustomSquare = ref<DraggableDemoItem[]>([
  { value: 'square-1', label: 'Square 1' },
  { value: 'square-2', label: 'Square 2' },
  { value: 'square-3', label: 'Square 3' }
])
const draggableSquareRef = ref<DraggableWrapperExpose | null>(null)

const onPositionSquare = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position-square', parameters)

  if (draggableSquareRef.value) {
    itemsCustomSquare.value = draggableSquareRef.value.toNewPosition(itemsCustomSquare.value, parameters)
  }
}

const itemsSquareString = ref<DraggableDemoItem[]>([
  { value: 'sq-str-1', label: 'String Class 1' },
  { value: 'sq-str-2', label: 'String Class 2' },
  { value: 'sq-str-3', label: 'String Class 3' }
])
const draggableSquareStringRef = ref<DraggableWrapperExpose | null>(null)

const onPositionSquareString = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position-square-string', parameters)

  if (draggableSquareStringRef.value) {
    itemsSquareString.value = draggableSquareStringRef.value.toNewPosition(itemsSquareString.value, parameters)
  }
}

const itemsExpose = ref<DraggableDemoItem[]>([
  { value: 'exp-1', label: 'Alpha' },
  { value: 'exp-2', label: 'Beta' },
  { value: 'exp-3', label: 'Gamma' },
  { value: 'exp-4', label: 'Delta' }
])
const draggableExposeRef = ref<DraggableWrapperExpose | null>(null)

const moveFirstToLast = (): void => {
  if (!draggableExposeRef.value || itemsExpose.value.length < 2) {
    return
  }

  const firstItem = itemsExpose.value[0]
  const lastItem = itemsExpose.value[itemsExpose.value.length - 1]
  if (!firstItem || !lastItem) {
    return
  }

  const dummyElement = document.createElement('div')
  itemsExpose.value = draggableExposeRef.value.toNewPosition(itemsExpose.value, {
    active: dummyElement,
    value: [firstItem.value, lastItem.value],
    valueActive: firstItem.value,
    valueSelection: [firstItem.value],
    valueTo: lastItem.value,
    before: false
  })
}

const moveLastToFirst = (): void => {
  if (!draggableExposeRef.value || itemsExpose.value.length < 2) {
    return
  }

  const firstItem = itemsExpose.value[0]
  const lastItem = itemsExpose.value[itemsExpose.value.length - 1]
  if (!firstItem || !lastItem) {
    return
  }

  const dummyElement = document.createElement('div')
  itemsExpose.value = draggableExposeRef.value.toNewPosition(itemsExpose.value, {
    active: dummyElement,
    value: [lastItem.value, firstItem.value],
    valueActive: lastItem.value,
    valueSelection: [lastItem.value],
    valueTo: firstItem.value,
    before: true
  })
}

const resetExposeItems = (): void => {
  itemsExpose.value = [
    { value: 'exp-1', label: 'Alpha' },
    { value: 'exp-2', label: 'Beta' },
    { value: 'exp-3', label: 'Gamma' },
    { value: 'exp-4', label: 'Delta' }
  ]
}

const itemsA11y = ref<DraggableDemoItem[]>([
  { value: 'a11y-1', label: 'Accessible Item 1' },
  { value: 'a11y-2', label: 'Accessible Item 2' },
  { value: 'a11y-3', label: 'Accessible Item 3' }
])
const draggableA11yRef = ref<DraggableWrapperExpose | null>(null)

const onPositionA11y = (parameters: DraggableWrapperEventParameters): void => {
  recordDragEvent('position-a11y', parameters)

  if (draggableA11yRef.value) {
    itemsA11y.value = draggableA11yRef.value.toNewPosition(itemsA11y.value, parameters)
  }
}

const itemsBoundary = ref<DraggableDemoItem[]>([
  { value: '0', label: '0' },
  { value: 'unicode', label: 'Học tiếng Việt • Кириллица 🚀' },
  { value: 'long', label: 'SuperLongUnbrokenDraggableLabelWithoutSpaces1234567890' },
  { value: 'xss', label: '<img src=x onerror=alert(1)>' }
])
const itemsEmpty = ref<DraggableDemoItem[]>([])
const itemsSingle = ref<DraggableDemoItem[]>([{ value: 'single-1', label: 'Single Item' }])

const isLifecycleMounted = ref<boolean>(true)
const itemsLifecycle = ref<DraggableDemoItem[]>([
  { value: 'life-1', label: 'Lifecycle 1' },
  { value: 'life-2', label: 'Lifecycle 2' }
])

const formatSlotBindings = (slotProps: DraggableWrapperControl): Record<string, string> => ({
  className: slotProps.className,
  classClick: slotProps.classClick,
  classDrop: slotProps.classDrop,
  classPosition: slotProps.classPosition
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="DraggableWrapper" class="demo-draggable-wrapper-page">
    <D1Section>
      <D1Group label="Basic Usage (Sorting & Scoped Slot Bindings)">
        <D1DraggableWrapper
          ref="draggableBasicRef"
          @position="onPositionBasic"
        >
          <template #default="{ className, classClick, classPosition, classDrop }">
            <DemoSectionDraggableWrapperList
              :items="itemsBasic"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
            <DemoValue
              label="Scoped Slot Classes"
              :value="formatSlotBindings({ className, classClick, classPosition, classDrop })"
            />
          </template>
        </D1DraggableWrapper>
        <DemoValue :value="itemsBasic.map(item => item.label).join(', ')" label="Current Order"/>
        <DemoValue :value="eventName" label="Last Event"/>
        <DemoValue :value="lastPayload" label="Last Event Payload"/>
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
        <DemoValue :value="itemsHandle.map(item => item.label).join(', ')" label="Handle Order"/>
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
        <DemoValue :value="selectedMulti.join(', ') || 'None'" label="Selected"/>
        <DemoValue :value="itemsMulti.map(item => item.label).join(', ')" label="Multi Order"/>
      </D1Group>

      <D1Group label="Drop Zones">
        <DemoSectionDraggableWrapperDropZones/>
      </D1Group>

      <D1Group label="Delay Variants (delay=0, delay='150') & Custom Tag (section)">
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
        <DemoValue :value="itemsDelayZero.map(item => item.label).join(', ')" label="Fast Order (delay=0)"/>

        <D1DraggableWrapper
          ref="draggableStringDelayRef"
          delay="150"
          @position="onPositionStringDelay"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsStringDelay"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
        <DemoValue :value="itemsStringDelay.map(item => item.label).join(', ')" label="String Delay Order (delay='150')"/>
      </D1Group>

      <D1Group label="Custom Placeholder Classes (classesSquare: array & string)">
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
        <DemoValue :value="itemsCustomSquare.map(item => item.label).join(', ')" label="Array Square Order"/>

        <D1DraggableWrapper
          ref="draggableSquareStringRef"
          :delay="0"
          classes-square="demo-draggable-wrapper-page__square"
          @position="onPositionSquareString"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsSquareString"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
        <DemoValue :value="itemsSquareString.map(item => item.label).join(', ')" label="String Square Order"/>
      </D1Group>

      <D1Group label="Programmatic Expose (toNewPosition)">
        <DemoFlex>
          <D1Button label="Move First to Last" size="sm" @click="moveFirstToLast"/>
          <D1Button label="Move Last to First" size="sm" secondary @click="moveLastToFirst"/>
          <D1Button label="Reset Order" size="sm" outline @click="resetExposeItems"/>
        </DemoFlex>
        <D1DraggableWrapper ref="draggableExposeRef" :delay="0">
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsExpose"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
        <DemoValue label="Expose Order" :value="itemsExpose.map(item => item.label).join(', ')"/>
      </D1Group>

      <D1Group label="Disabled State (Static & Interactive Toggle)">
        <DemoFlex>
          <D1Button
            :label="isInteractiveDisabled ? 'Enable Dragging' : 'Disable Dragging'"
            size="sm"
            :primary="!isInteractiveDisabled"
            :outline="isInteractiveDisabled"
            @click="isInteractiveDisabled = !isInteractiveDisabled"
          />
          <DemoValue label="Disabled" :value="isInteractiveDisabled"/>
        </DemoFlex>
        <D1DraggableWrapper
          ref="draggableDisabledRef"
          :disabled="isInteractiveDisabled"
          :delay="0"
          @position="onPositionDisabled"
        >
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsDisabled"
              :class-name="className"
              :class-click="classClick"
              :class-position="classPosition"
            />
          </template>
        </D1DraggableWrapper>
        <DemoValue label="Disabled Group Order" :value="itemsDisabled.map(item => item.label).join(', ')"/>
      </D1Group>

      <D1Group label="Accessibility & Semantic List (tag='ul', ARIA)">
        <D1DraggableWrapper
          ref="draggableA11yRef"
          tag="ul"
          role="list"
          aria-label="Sortable accessible list"
          :delay="0"
          class="demo-draggable-wrapper-page__list"
          @position="onPositionA11y"
        >
          <template #default="{ className, classClick, classPosition }">
            <li
              v-for="item in itemsA11y"
              :key="item.value"
              :class="['demo-draggable-wrapper-page__list-item', className, classClick, classPosition]"
              :data-value="item.value"
              tabindex="0"
            >
              {{ item.label }}
            </li>
          </template>
        </D1DraggableWrapper>
        <DemoValue label="A11y List Order" :value="itemsA11y.map(item => item.label).join(', ')"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1DraggableWrapper :delay="0">
          <template #default="{ className, classClick, classPosition }">
            <DemoFlex>
              <DemoBox
                v-for="item in itemsBoundary"
                :key="item.value"
                size="sm"
                :class="['demo-draggable-wrapper-page__narrow-item', className, classClick, classPosition]"
                :data-value="item.value"
              >
                {{ item.label }}
              </DemoBox>
            </DemoFlex>
          </template>
        </D1DraggableWrapper>
        <DemoFlex>
          <D1DraggableWrapper :delay="0" data-testid="draggable-empty">
            <template #default="{ className, classClick, classPosition }">
              <DemoSectionDraggableWrapperList
                :items="itemsEmpty"
                :class-name="className"
                :class-click="classClick"
                :class-position="classPosition"
              />
            </template>
          </D1DraggableWrapper>
          <D1DraggableWrapper :delay="0" data-testid="draggable-single">
            <template #default="{ className, classClick, classPosition }">
              <DemoSectionDraggableWrapperList
                :items="itemsSingle"
                :class-name="className"
                :class-click="classClick"
                :class-position="classPosition"
              />
            </template>
          </D1DraggableWrapper>
        </DemoFlex>
      </D1Group>

      <D1Group label="SSR & Lifecycle (v-if mount/unmount)">
        <DemoFlex align="center">
          <D1Button
            :label="isLifecycleMounted ? 'Unmount DraggableWrapper' : 'Mount DraggableWrapper'"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <D1DraggableWrapper v-if="isLifecycleMounted" :delay="0">
          <template #default="{ className, classClick, classPosition }">
            <DemoSectionDraggableWrapperList
              :items="itemsLifecycle"
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

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__list-item {
    padding: 10px 14px;
    border-width: 1px;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.md');
    cursor: grab;
  }

  &__narrow-item {
    width: 100%;
    max-width: 220px;
    overflow: hidden;
    overflow-wrap: anywhere;
  }
}
</style>
