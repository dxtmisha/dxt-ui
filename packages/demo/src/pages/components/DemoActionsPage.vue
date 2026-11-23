<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'
import { type ButtonProps, D1Button } from '@dxtmisha/d1/D1Button'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const dynamicAlign = ref<'right' | 'left' | 'center' | 'block'>('right')
const dynamicList = shallowRef<ConstrBind<ButtonProps>[]>([
  { label: 'Cancel', text: true, value: 'cancel' },
  { label: 'Confirm', primary: true, value: 'confirm' }
])
const customClickLog = ref<string[]>([])

const pushClickLog = (source: string) => {
  customClickLog.value = [...customClickLog.value, source]
}

const onAddDynamicItem = () => {
  const nextIndex = dynamicList.value.length + 1
  dynamicList.value = [
    ...dynamicList.value,
    { label: `Extra ${nextIndex}`, outline: true, value: `extra-${nextIndex}` }
  ]
}

const onClearDynamicList = () => {
  dynamicList.value = []
}

const onResetDynamicList = () => {
  dynamicList.value = [
    { label: 'Cancel', text: true, value: 'cancel' },
    { label: 'Confirm', primary: true, value: 'confirm' }
  ]
}

const listMergedHandlers: ConstrBind<ButtonProps>[] = [
  {
    label: 'Save & Notify',
    primary: true,
    value: 'save-notify',
    onClick: () => pushClickLog('item')
  }
]

const sharedButtonAttrsWithClick: ConstrBind<ButtonProps> = {
  outline: true,
  onClick: () => pushClickLog('buttonAttrs')
}

const listBasic: ButtonProps[] = [
  { label: 'Cancel', text: true, value: 'cancel' },
  { label: 'Apply', primary: true, value: 'apply' }
]

const listSecondary: ButtonProps[] = [
  { label: 'Delete', palette: 'red', text: true, value: 'delete' }
]

const listMultiple: ButtonProps[] = [
  { label: 'Previous', outline: true, value: 'prev' },
  { label: 'Skip', text: true, value: 'skip' },
  { label: 'Next', primary: true, value: 'next' }
]

const listWithStates: ButtonProps[] = [
  { label: 'Disabled', disabled: true, value: 'disabled' },
  { label: 'Readonly', readonly: true, value: 'readonly' },
  { label: 'Selected', selected: true, value: 'selected' },
  { label: 'Focus', focus: true, value: 'focus' },
  { label: 'Loading', loading: true, value: 'loading' },
  { label: 'Skeleton', isSkeleton: true, value: 'skeleton' },
  { label: 'With Icon', icon: 'download', outline: true, value: 'download' },
  { label: 'Save', iconTrailing: 'check', primary: true, value: 'save' }
]

const listMany: ButtonProps[] = [
  { label: 'Action 1', outline: true, value: '1' },
  { label: 'Action 2', outline: true, value: '2' },
  { label: 'Action 3', outline: true, value: '3' },
  { label: 'Action 4', outline: true, value: '4' },
  { label: 'Action 5', outline: true, value: '5' },
  { label: 'Action 6', outline: true, value: '6' },
  { label: 'Action 7', outline: true, value: '7' },
  { label: 'Action 8', primary: true, value: '8' }
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Actions">
    <D1Section>
      <D1Group label="Basic Lists">
        <DemoBox>
          <D1Actions :list="listBasic" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" :listSecondary="listSecondary" />
        </DemoBox>
        <DemoBox>
          <D1Actions :listSecondary="listSecondary" />
        </DemoBox>
      </D1Group>

      <D1Group label="Alignments">
        <DemoBox>
          <D1Actions :list="listBasic" :listSecondary="listSecondary" align="right" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" :listSecondary="listSecondary" align="left" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" align="center" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" align="block" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" align="auto" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" :listSecondary="listSecondary" align="none" />
        </DemoBox>
      </D1Group>

      <D1Group label="Paddings">
        <DemoBox>
          <D1Actions :list="listBasic" padding="sm" :paddingByIndent="false" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" padding="md" :paddingByIndent="false" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" padding="lg" :paddingByIndent="false" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" padding="ySm" :paddingByIndent="false" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" padding="yMd" :paddingByIndent="false" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" padding="yLg" :paddingByIndent="false" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" padding="none" :paddingByIndent="false" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" padding="lg" />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" :paddingByIndent="false" />
        </DemoBox>
      </D1Group>

      <D1Group label="Shared Button Attributes">
        <DemoBox>
          <D1Actions
            :list="listMultiple"
            :buttonAttrs="{ size: 'sm', outline: true }"
          />
        </DemoBox>
        <DemoBox>
          <D1Actions
            :list="listBasic"
            :buttonAttrs="{ palette: 'teal' }"
            :listSecondary="listSecondary"
            :buttonSecondaryAttrs="{ palette: 'red', outline: true }"
          />
        </DemoBox>
        <DemoBox>
          <D1Actions
            :list="listBasic"
            :buttonAttrs="{ size: 'xl' }"
            :listSecondary="listSecondary"
            :buttonSecondaryAttrs="{ size: 'xs' }"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Slots">
        <DemoBox>
          <D1Actions>
            <template #default>
              <D1Button label="Slot Button 1" outline />
              <D1Button label="Slot Button 2" primary />
            </template>
          </D1Actions>
        </DemoBox>
        <DemoBox>
          <D1Actions>
            <template #secondary>
              <D1Button label="Secondary Slot" palette="red" text />
            </template>
          </D1Actions>
        </DemoBox>
        <DemoBox>
          <D1Actions>
            <template #default>
              <D1Button label="Save Changes" primary />
            </template>
            <template #secondary>
              <D1Button label="Discard" text />
            </template>
          </D1Actions>
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listBasic" :listSecondary="listSecondary">
            <template #default>
              <D1Button label="Extra Primary" outline />
            </template>
            <template #secondary>
              <D1Button label="Extra Secondary" text />
            </template>
          </D1Actions>
        </DemoBox>
      </D1Group>

      <D1Group label="Button States & Icons">
        <DemoBox>
          <D1Actions :list="listWithStates" />
        </DemoBox>
      </D1Group>

      <D1Group label="Wrap & Multi-Item Layout">
        <DemoBox>
          <D1Actions :list="listMany" wrap />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="listMany" :wrap="false" />
        </DemoBox>
      </D1Group>

      <D1Group label="Flexibility (Adaptive & Container)">
        <DemoBox>
          <D1Actions
            :list="listBasic"
            :listSecondary="listSecondary"
            flexible="adaptiveMd"
          />
        </DemoBox>
        <DemoBox container>
          <D1Actions
            :list="listBasic"
            :listSecondary="listSecondary"
            flexible="containerMd"
          />
        </DemoBox>
        <DemoBox container class="demo-actions-page__narrow-container">
          <D1Actions
            :list="listBasic"
            :listSecondary="listSecondary"
            flexible="containerMd"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Empty & Boundary">
        <DemoBox>
          <D1Actions />
        </DemoBox>
        <DemoBox>
          <D1Actions :list="[]" :listSecondary="[]" />
        </DemoBox>
        <DemoBox>
          <D1Actions
            :list="[
              { label: 0, outline: true, value: 0 },
              { label: 'Single Action', primary: true, value: 'single' },
              { label: 'Extremely Long Action Button Text For Layout Boundaries', outline: true, value: 'long' }
            ]"
            wrap
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility & Semantics">
        <DemoBox>
          <D1Actions
            :list="listBasic"
            area="dialog-actions"
            role="toolbar"
            ariaLabel="Document Editing Actions"
          />
        </DemoBox>
        <DemoBox>
          <D1Actions
            :list="listBasic"
            textActions="Custom Actions Landmark"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Dynamic Controls">
        <DemoFlex>
          <D1Button label="Align Left" size="sm" outline @click="dynamicAlign = 'left'" />
          <D1Button label="Align Right" size="sm" outline @click="dynamicAlign = 'right'" />
          <D1Button label="Align Center" size="sm" outline @click="dynamicAlign = 'center'" />
          <D1Button label="Align Block" size="sm" outline @click="dynamicAlign = 'block'" />
          <D1Button label="Add Item" size="sm" outline @click="onAddDynamicItem" />
          <D1Button label="Clear" size="sm" outline @click="onClearDynamicList" />
          <D1Button label="Reset" size="sm" primary @click="onResetDynamicList" />
        </DemoFlex>
        <DemoBox>
          <D1Actions
            :list="dynamicList"
            :listSecondary="listSecondary"
            :align="dynamicAlign"
          />
        </DemoBox>
        <DemoValue :value="`${dynamicAlign} (${dynamicList.length} items)`" />
      </D1Group>

      <D1Group label="Events & Handler Composition">
        <DemoBox>
          <D1Actions
            :list="listBasic"
            :listSecondary="listSecondary"
            @click="(event, value) => onEvent('click', event, value)"
            @click-lite="(value) => onEvent('clickLite', value)"
          />
        </DemoBox>
        <DemoBox>
          <D1Actions
            :list="listMergedHandlers"
            :buttonAttrs="sharedButtonAttrsWithClick"
            @click="(event, value) => {
              pushClickLog('emit')
              onEvent('mergedClick', event, value)
            }"
          />
        </DemoBox>
        <DemoValue :value="eventName" />
        <DemoValue :value="customClickLog.join(' + ') || 'none'" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-actions-page {
  &__narrow-container {
    max-width: 480px;
  }
}
</style>
