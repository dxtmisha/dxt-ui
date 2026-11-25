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
const eventPayload = ref<string>('none')
const dynamicAlign = ref<'right' | 'left' | 'center' | 'block' | 'auto' | 'none'>('right')
const dynamicList = shallowRef<ConstrBind<ButtonProps>[]>([
  { label: 'Cancel', text: true, value: 'cancel' },
  { label: 'Confirm', primary: true, value: 'confirm' }
])
const customClickLog = ref<string[]>([])
const blockedStateLog = ref<string>('none')
const dynamicDisabled = ref(false)
const dynamicLoading = ref(false)
const dynamicSkeleton = ref(false)
const lifecycleMounted = ref(true)

const recordEvent = (name: string, ...args: unknown[]): void => {
  onEvent(name, ...args)
  try {
    const serialized = args.map((item) => {
      if (typeof Event !== 'undefined' && item instanceof Event) {
        return item.type
      }
      return item
    })
    eventPayload.value = serialized.length > 0 ? JSON.stringify(serialized) : 'no payload'
  } catch {
    eventPayload.value = name
  }
}

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

const onReorderDynamicList = () => {
  dynamicList.value = [...dynamicList.value].reverse()
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
  { label: 'Enabled', outline: true, value: 'enabled' },
  { label: 'With Icon', icon: 'download', outline: true, value: 'download' },
  { label: 'Save', iconTrailing: 'check', primary: true, value: 'save' }
]

const listSkeleton: ButtonProps[] = [
  { label: 'Skeleton Primary', isSkeleton: true, value: 'skeleton-primary' },
  { label: 'Skeleton Secondary', isSkeleton: true, outline: true, value: 'skeleton-secondary' }
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

const adaptiveFlexibleModes = [
  'adaptiveSm',
  'adaptiveMd',
  'adaptiveLg',
  'adaptiveXl',
  'adaptive2xl'
] as const

const containerFlexibleModes = [
  'containerSm',
  'containerMd',
  'containerLg',
  'containerXl',
  'container2xl'
] as const
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

      <D1Group label="Button States, Blocked Actions & Icons">
        <DemoBox>
          <D1Actions
            :list="listWithStates"
            @click-lite="(value) => { blockedStateLog = String(value?.value ?? 'none') }"
          />
        </DemoBox>
        <DemoBox>
          <D1Skeleton :active="true">
            <D1Actions :list="listSkeleton" />
          </D1Skeleton>
        </DemoBox>
        <DemoFlex>
          <D1Button label="Toggle Disabled" size="sm" outline @click="dynamicDisabled = !dynamicDisabled" />
          <D1Button label="Toggle Loading" size="sm" outline @click="dynamicLoading = !dynamicLoading" />
          <D1Button label="Toggle Skeleton" size="sm" outline @click="dynamicSkeleton = !dynamicSkeleton" />
        </DemoFlex>
        <DemoBox>
          <D1Skeleton :active="dynamicSkeleton">
            <D1Actions
              :list="listBasic"
              :buttonAttrs="{
                disabled: dynamicDisabled,
                loading: dynamicLoading,
                isSkeleton: dynamicSkeleton
              }"
              @click-lite="(value) => { blockedStateLog = String(value?.value ?? 'none') }"
            />
          </D1Skeleton>
        </DemoBox>
        <DemoValue label="Last Enabled Click" :value="blockedStateLog" />
      </D1Group>

      <D1Group label="Wrap & Multi-Item Layout">
        <DemoBox>
          <D1Actions :list="listMany" wrap />
        </DemoBox>
        <DemoBox class="demo-actions-page__nowrap-container">
          <D1Actions :list="listMany" :wrap="false" />
        </DemoBox>
      </D1Group>

      <D1Group label="Flexibility (Adaptive & Container)">
        <DemoBox
          v-for="mode in adaptiveFlexibleModes"
          :key="mode"
        >
          <D1Actions
            :list="listBasic"
            :listSecondary="listSecondary"
            :flexible="mode"
          />
        </DemoBox>
        <DemoBox
          v-for="mode in containerFlexibleModes"
          :key="mode"
          container
        >
          <D1Actions
            :list="listBasic"
            :listSecondary="listSecondary"
            :flexible="mode"
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
              { label: -10, outline: true, value: -10 },
              { label: 3.14, outline: true, value: 3.14 },
              { label: 'A', outline: true, value: 'single-char' },
              { label: '', outline: true, value: 'empty-label' },
              { label: '   ', outline: true, value: 'whitespace-label' },
              { label: 'Extremely Long Action Button Text For Layout Boundaries', outline: true, value: 'long' }
            ]"
            wrap
          />
        </DemoBox>
        <DemoBox>
          <D1Actions
            :list="[
              { label: 'UnbrokenActionTokenWithoutSpaces1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', outline: true, value: 'unbroken' },
              { label: 'Unicode • Tiếng Việt • Кириллица 🚀', outline: true, value: 'unicode' },
              { label: '<img src=x onerror=alert(1)>', outline: true, value: 'xss' }
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

      <D1Group label="Dynamic Controls & Lifecycle">
        <DemoFlex>
          <D1Button label="Align Left" size="sm" outline @click="dynamicAlign = 'left'" />
          <D1Button label="Align Right" size="sm" outline @click="dynamicAlign = 'right'" />
          <D1Button label="Align Center" size="sm" outline @click="dynamicAlign = 'center'" />
          <D1Button label="Align Block" size="sm" outline @click="dynamicAlign = 'block'" />
          <D1Button label="Align Auto" size="sm" outline @click="dynamicAlign = 'auto'" />
          <D1Button label="Align None" size="sm" outline @click="dynamicAlign = 'none'" />
          <D1Button label="Add Item" size="sm" outline @click="onAddDynamicItem" />
          <D1Button label="Reorder" size="sm" outline @click="onReorderDynamicList" />
          <D1Button label="Clear" size="sm" outline @click="onClearDynamicList" />
          <D1Button label="Reset" size="sm" primary @click="onResetDynamicList" />
          <D1Button
            :label="lifecycleMounted ? 'Unmount Actions' : 'Mount Actions'"
            size="sm"
            secondary
            @click="lifecycleMounted = !lifecycleMounted"
          />
        </DemoFlex>
        <DemoBox v-if="lifecycleMounted">
          <D1Actions
            :list="dynamicList"
            :listSecondary="listSecondary"
            :align="dynamicAlign"
          />
        </DemoBox>
        <DemoValue :value="`${dynamicAlign} (${dynamicList.length} items, mounted: ${lifecycleMounted})`" />
      </D1Group>

      <D1Group label="Events & Handler Composition">
        <DemoBox>
          <D1Actions
            :list="listBasic"
            :listSecondary="listSecondary"
            @click="(event, value) => recordEvent('click', event, value)"
            @click-lite="(value) => recordEvent('clickLite', value)"
          />
        </DemoBox>
        <DemoBox>
          <D1Actions
            :list="listMergedHandlers"
            :buttonAttrs="sharedButtonAttrsWithClick"
            @click="(event, value) => {
              pushClickLog('emit')
              recordEvent('mergedClick', event, value)
            }"
          />
        </DemoBox>
        <DemoValue :value="eventName" />
        <DemoValue label="Payload" :value="eventPayload" />
        <DemoValue label="Order" :value="customClickLog.join(' + ') || 'none'" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-actions-page {
  &__narrow-container {
    max-width: 480px;
  }

  &__nowrap-container {
    overflow-x: auto;
  }
}
</style>
