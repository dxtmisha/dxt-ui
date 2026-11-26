<script setup lang="ts">
import { ref } from 'vue'
import type {
  SelectableAreaEventParameters,
  SelectableAreaExpose
} from '@dxtmisha/constructor/SelectableArea'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoSectionSelectableAreaList from '../../components/Section/SelectableArea/DemoSectionSelectableAreaList.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedBasic = ref<string[]>(['item-2'])
const selectedActive = ref<string[]>([])
const selectedDisabled = ref<string[]>(['item-1'])
const selectedSingleProp = ref<string>('item-3')
const selectedEvents = ref<string[]>([])
const selectedBoundary = ref<string[]>([])
const isLifecycleMounted = ref<boolean>(true)
const isDynamicDisabled = ref<boolean>(true)

const selectableAreaRef = ref<SelectableAreaExpose | null>(null)
const eventDetail = ref<string>('No selection event yet')

const specialValues = [
  { id: '0', label: '0 (Numeric Zero)' },
  { id: 'item "quoted"', label: 'Quoted value' },
  { id: 'Привет · Học tiếng Việt · 🚀', label: 'Unicode · Tiếng Việt' },
  { id: '<img src=x onerror=alert(1)>', label: 'XSS Literal' },
  { id: 'very-long-unbroken-value-without-spaces-0123456789', label: 'Long Unbroken Value' }
] as const

const onSelected = (parameters: SelectableAreaEventParameters): void => {
  onEvent('selected', parameters)
  eventDetail.value = `selected: ${JSON.stringify(parameters.selected)} | focus: ${String(parameters.focus)} | count: ${parameters.items.length}`
}

const resetExpose = (): void => {
  selectableAreaRef.value?.reset()
}

const setSelectedExpose = (): void => {
  selectableAreaRef.value?.setSelected(['item-1', 'item-3', 'item-5'])
}

const setModelValue = (values: string[]): void => {
  selectedBasic.value = values
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="SelectableArea">
    <D1Section>
      <D1Group label="Basic Selection (Click, Shift+Click, Ctrl/Meta+Click, Lasso Drag)">
        <DemoFlex align="center">
          <D1Button label="Select 1 & 4" @click="setModelValue(['item-1', 'item-4'])"/>
          <D1Button label="Clear Selection" @click="setModelValue([])"/>
        </DemoFlex>
        <D1SelectableArea v-model:selected="selectedBasic">
          <template #default="{ className, classClick, onClick }">
            <DemoSectionSelectableAreaList
              :class-name="className"
              :class-click="classClick"
              :on-click="onClick"
            />
          </template>
        </D1SelectableArea>
        <DemoValue label="v-model:selected" :value="selectedBasic"/>
      </D1Group>

      <D1Group label="Active Mode (Continuous Selection Without Modifiers)">
        <D1SelectableArea active v-model:selected="selectedActive">
          <template #default="{ className, classClick, onClick }">
            <DemoSectionSelectableAreaList
              :class-name="className"
              :class-click="classClick"
              :on-click="onClick"
            />
          </template>
        </D1SelectableArea>
        <DemoValue label="Active Selected" :value="selectedActive"/>
      </D1Group>

      <D1Group label="Disabled State & Dynamic Toggle">
        <DemoFlex align="center">
          <D1Button label="Toggle Disabled" @click="isDynamicDisabled = !isDynamicDisabled"/>
          <DemoValue label="Disabled" :value="isDynamicDisabled"/>
        </DemoFlex>
        <D1SelectableArea :disabled="isDynamicDisabled" v-model:selected="selectedDisabled">
          <template #default="{ className, classClick, onClick }">
            <DemoSectionSelectableAreaList
              :class-name="className"
              :class-click="classClick"
              :on-click="onClick"
            />
          </template>
        </D1SelectableArea>
        <DemoValue label="Disabled Area Selected" :value="selectedDisabled"/>
      </D1Group>

      <D1Group label="Custom Tag, String Selected Format & Scoped Slot (classSelection)">
        <D1SelectableArea tag="section" :selected="selectedSingleProp" aria-label="Custom section selectable area">
          <template #default="{ className, classClick, classSelection, onClick }">
            <DemoFlex>
              <DemoBox
                v-for="item in 4"
                :key="item"
                center
                size="sm"
                :class="[className, classClick, selectedSingleProp === 'item-' + item && classSelection]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Section Item {{ item }}
              </DemoBox>
            </DemoFlex>
          </template>
        </D1SelectableArea>
        <DemoValue label="Initial String Selected" :value="selectedSingleProp"/>
      </D1Group>

      <D1Group label="Events & Programmatic Expose (reset, setSelected)">
        <DemoFlex align="center">
          <D1Button label="Select 1, 3, 5 (expose)" @click="setSelectedExpose"/>
          <D1Button label="Reset (expose)" @click="resetExpose"/>
        </DemoFlex>
        <D1SelectableArea
          ref="selectableAreaRef"
          v-model:selected="selectedEvents"
          @selected="onSelected"
        >
          <template #default="{ className, classClick, onClick }">
            <DemoSectionSelectableAreaList
              :class-name="className"
              :class-click="classClick"
              :on-click="onClick"
            />
          </template>
        </D1SelectableArea>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Detail" :value="eventDetail"/>
        <DemoValue label="Selected Model" :value="selectedEvents"/>
      </D1Group>

      <D1Group label="Boundary Values, Special data-value, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isLifecycleMounted = !isLifecycleMounted"/>
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-selectable-area-page__narrow">
          <D1SelectableArea
            v-if="isLifecycleMounted"
            v-model:selected="selectedBoundary"
          >
            <template #default="{ className, classClick, onClick }">
              <DemoFlex>
                <DemoBox
                  v-for="item in specialValues"
                  :key="item.id"
                  size="sm"
                  :class="[className, classClick, 'demo-selectable-area-page__item']"
                  :data-value="item.id"
                  @click="onClick"
                >
                  {{ item.label }}
                </DemoBox>
              </DemoFlex>
            </template>
          </D1SelectableArea>
        </DemoBox>
        <DemoValue label="Boundary Selected" :value="selectedBoundary"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-selectable-area-page {
  &__narrow {
    max-width: 280px;
  }

  &__item {
    overflow-wrap: anywhere;
  }
}
</style>
