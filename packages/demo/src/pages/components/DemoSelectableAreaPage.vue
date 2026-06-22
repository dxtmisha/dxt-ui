<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoSelectableAreaList from '../../components/DemoSelectableAreaList.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedBasic = ref<string[]>([])
const selectedActive = ref<string[]>([])
const selectedEvents = ref<string[]>([])

const selectableAreaRef = ref<any>(null)
const eventDetail = ref('')

const onSelected = (parameters: any) => {
  onEvent('selected', parameters)
  eventDetail.value = `Selected elements: ${JSON.stringify(parameters.selected)}, Focus: ${parameters.focus}`
}

const resetExpose = () => {
  if (selectableAreaRef.value) {
    selectableAreaRef.value.reset()
  }
}

const setSelectedExpose = () => {
  if (selectableAreaRef.value) {
    selectableAreaRef.value.setSelected(['item-1', 'item-3', 'item-5'])
  }
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="SelectableArea">
    <D1Section>
      <D1Group label="Basic Usage">
        <D1SelectableArea v-model:selected="selectedBasic">
          <template #default="{ className, classClick, onClick }">
            <DemoSelectableAreaList
              :class-name="className"
              :class-click="classClick"
              :on-click="onClick"
            />
          </template>
        </D1SelectableArea>
        <DemoValue :value="selectedBasic" />
      </D1Group>

      <D1Group label="Active (Continuous Selection)">
        <D1SelectableArea active v-model:selected="selectedActive">
          <template #default="{ className, classClick, onClick }">
            <DemoSelectableAreaList
              :class-name="className"
              :class-click="classClick"
              :on-click="onClick"
            />
          </template>
        </D1SelectableArea>
        <DemoValue :value="selectedActive" />
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoFlex>
          <D1Button label="Reset selection via expose" @click="resetExpose" />
          <D1Button label="Select items 1, 3, 5 via expose" @click="setSelectedExpose" />
        </DemoFlex>
        <D1SelectableArea
          ref="selectableAreaRef"
          v-model:selected="selectedEvents"
          @selected="onSelected"
        >
          <template #default="{ className, classClick, onClick }">
            <DemoSelectableAreaList
              :class-name="className"
              :class-click="classClick"
              :on-click="onClick"
            />
          </template>
        </D1SelectableArea>
        <DemoValue :value="eventDetail" />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
