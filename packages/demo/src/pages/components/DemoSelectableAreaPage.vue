<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedBasic = ref<string[]>([])
const selectedModel = ref<string[]>(['item-2', 'item-4'])
const selectedActive = ref<string[]>([])
const selectedDisabled = ref<string[]>(['item-1'])
const selectedTag = ref<string[]>([])
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
            <div class="demo-selectable-area-page__list">
              <div
                v-for="item in 6"
                :key="item"
                :class="['demo-selectable-area-page__item', className, classClick]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
        <DemoValue :value="selectedBasic" />
      </D1Group>

      <D1Group label="v-model (Preselected Items)">
        <D1SelectableArea v-model:selected="selectedModel">
          <template #default="{ className, classSelection, classClick, onClick }">
            <div class="demo-selectable-area-page__list">
              <div
                v-for="item in 6"
                :key="item"
                :class="[
                  'demo-selectable-area-page__item',
                  className,
                  classClick,
                  selectedModel.includes('item-' + item) && classSelection
                ]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
        <DemoValue :value="selectedModel" />
      </D1Group>

      <D1Group label="Active (Continuous Selection)">
        <D1SelectableArea active v-model:selected="selectedActive">
          <template #default="{ className, classSelection, classClick, onClick }">
            <div class="demo-selectable-area-page__list">
              <div
                v-for="item in 6"
                :key="item"
                :class="[
                  'demo-selectable-area-page__item',
                  className,
                  classClick,
                  selectedActive.includes('item-' + item) && classSelection
                ]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
        <DemoValue :value="selectedActive" />
      </D1Group>

      <D1Group label="Disabled">
        <D1SelectableArea disabled v-model:selected="selectedDisabled">
          <template #default="{ className, classSelection, classClick, onClick }">
            <div class="demo-selectable-area-page__list">
              <div
                v-for="item in 6"
                :key="item"
                :class="[
                  'demo-selectable-area-page__item',
                  className,
                  classClick,
                  selectedDisabled.includes('item-' + item) && classSelection
                ]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
        <DemoValue :value="selectedDisabled" />
      </D1Group>

      <D1Group label="Custom Tag (Section)">
        <D1SelectableArea tag="section" v-model:selected="selectedTag">
          <template #default="{ className, classSelection, classClick, onClick }">
            <div class="demo-selectable-area-page__list">
              <div
                v-for="item in 6"
                :key="item"
                :class="[
                  'demo-selectable-area-page__item',
                  className,
                  classClick,
                  selectedTag.includes('item-' + item) && classSelection
                ]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
        <DemoValue :value="selectedTag" />
      </D1Group>

      <D1Group label="Events & Expose">
        <D1SelectableArea
          ref="selectableAreaRef"
          v-model:selected="selectedEvents"
          @selected="onSelected"
        >
          <template #default="{ className, classSelection, classClick, onClick }">
            <div class="demo-selectable-area-page__list">
              <div
                v-for="item in 6"
                :key="item"
                :class="[
                  'demo-selectable-area-page__item',
                  className,
                  classClick,
                  selectedEvents.includes('item-' + item) && classSelection
                ]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
        <DemoValue :value="eventDetail" />
        <DemoValue :value="eventName" />
        <DemoFlex>
          <D1Button label="Reset selection via expose" @click="resetExpose" />
          <D1Button label="Select items 1, 3, 5 via expose" @click="setSelectedExpose" />
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-selectable-area-page {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border: 1px solid;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.md');
    background-color: ui.v('?sys.palette.surface');
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(var(--d1-sys-palette-primary), var(--d1-sys-opacity-hover));
    }
  }
}
</style>
