<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ChipGroupProps } from '@dxtmisha/d1/D1ChipGroup'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type SelectedValue = NonNullable<ChipGroupProps['selected']>

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const listBasic: NonNullable<ChipGroupProps['list']> = [
  { label: 'Option A', value: 'a', detail: { group: 'basic' } },
  { label: 'Option B', value: 'b', detail: { group: 'basic' } },
  { label: 'Zero', value: 0, detail: { group: 'numeric' } },
  { label: 'Locked', value: 'locked', disabled: true }
]

const listCustomKeys: NonNullable<ChipGroupProps['list']> = [
  { title: 'First Choice', code: '1' },
  { title: 'Second Choice', code: '2' },
  { title: 'Third Choice', code: 0 }
]

const listRichAttrs: NonNullable<ChipGroupProps['list']> = [
  { label: 'Default Inherited', value: 'inherited' },
  { label: 'Custom Green', value: 'green', palette: 'green', icon: 'eco' },
  { label: 'Assistive Override', value: 'assistive', assistive: true, icon: 'auto_awesome' },
  { label: 'Disabled Item', value: 'disabled', disabled: true }
]

const listUnicode: NonNullable<ChipGroupProps['list']> = [
  { label: '', value: 'empty', ariaLabel: 'Empty label chip' },
  { label: '   ', value: 'space', ariaLabel: 'Whitespace chip' },
  { label: 0, value: 0 },
  { label: -42, value: -42 },
  { label: 3.14, value: 3.14 },
  { label: 'A', value: 'single' },
  { label: 'Tiếng Việt', value: 'vi' },
  { label: 'Кириллица 🚀 & <>', value: 'ru' },
  { label: '<img src=x onerror=alert(1)>', value: 'xss' },
  {
    label: 'Very long multi-sentence chip group item label for wrapping and truncation verification',
    value: 'sentence'
  }
]

const listUnbroken: NonNullable<ChipGroupProps['list']> = [
  { label: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', value: 'unbroken' }
]

const selectedSingle = ref<SelectedValue>('b')
const selectedModelProp = ref<SelectedValue>('a')
const selectedMultiple = ref<SelectedValue>(['a', 'b'])
const selectedReadonly = ref<SelectedValue>('a')
const selectedCustom = ref<SelectedValue>('2')
const selectedIcon = ref<SelectedValue>('a')
const selectedEvents = ref<SelectedValue>('a')

const isInteractiveReadonly = ref<boolean>(false)
const isIconWhenSelected = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)
const blockedUpdateCount = ref<number>(0)

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleClickEvent = (
  mouseEvent: MouseEvent,
  clickValue: EventClickValue
): void => {
  trackEvent('click', {
    eventType: mouseEvent.type,
    value: clickValue
  })
}

const handleClickLiteEvent = (clickValue: EventClickValue): void => {
  trackEvent('clickLite', clickValue)
}

const handleUpdateSelected = (nextSelected: SelectedValue): void => {
  trackEvent('update:selected', { selected: nextSelected })
}

const handleUpdateModelSelected = (nextSelected: SelectedValue): void => {
  trackEvent('update:modelSelected', { modelSelected: nextSelected })
}

const handleBlockedUpdate = (): void => {
  blockedUpdateCount.value += 1
}

const toggleZeroInMultiple = (): void => {
  const currentList = Array.isArray(selectedMultiple.value) ? [...selectedMultiple.value] : []
  const zeroPosition = currentList.indexOf(0)

  if (zeroPosition >= 0) {
    currentList.splice(zeroPosition, 1)
  } else {
    currentList.push(0)
  }

  selectedMultiple.value = currentList
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ChipGroup">
    <D1Section>
      <D1Group label="Basic Single Selection (v-model:selected & Controls)">
        <D1ChipGroup
          v-model:selected="selectedSingle"
          data-testid="demo-cg-single"
          :list="listBasic"
          :readonly="false"
        />
        <DemoFlex align="center">
          <D1Button label="Select A" size="sm" outline @click="selectedSingle = 'a'"/>
          <D1Button label="Select Zero (0)" size="sm" outline @click="selectedSingle = 0"/>
          <D1Button label="Clear" size="sm" outline @click="selectedSingle = ''"/>
        </DemoFlex>
        <DemoValue data-testid="demo-cg-single-output" label="selected" :value="selectedSingle"/>
      </D1Group>

      <D1Group label="ModelSelected Binding (v-model:modelSelected)">
        <D1ChipGroup
          v-model:model-selected="selectedModelProp"
          :list="listBasic"
          :readonly="false"
        />
        <DemoFlex align="center">
          <D1Button label="Set Option B" size="sm" outline @click="selectedModelProp = 'b'"/>
          <D1Button label="Reset to A" size="sm" outline @click="selectedModelProp = 'a'"/>
        </DemoFlex>
        <DemoValue label="modelSelected" :value="selectedModelProp"/>
      </D1Group>

      <D1Group label="Multiple Selection">
        <D1ChipGroup
          v-model:selected="selectedMultiple"
          data-testid="demo-cg-multiple"
          :list="listBasic"
          :readonly="false"
          multiple
        />
        <DemoFlex align="center">
          <D1Button label="Select All Active" size="sm" outline @click="selectedMultiple = ['a', 'b', 0]"/>
          <D1Button label="Toggle Zero (0)" size="sm" outline @click="toggleZeroInMultiple"/>
          <D1Button data-testid="demo-cg-clear" label="Clear Selection" size="sm" outline @click="selectedMultiple = []"/>
        </DemoFlex>
        <DemoValue data-testid="demo-cg-multiple-output" label="Multiple Selected" :value="selectedMultiple"/>
      </D1Group>

      <D1Group label="Readonly Guard & Interactive Toggle">
        <D1ChipGroup
          v-model:selected="selectedReadonly"
          data-testid="demo-cg-readonly"
          :list="listBasic"
          readonly
          @update:selected="handleBlockedUpdate"
        />
        <DemoValue data-testid="demo-cg-readonly-output" label="Readonly Selected" :value="selectedReadonly"/>
        <DemoValue label="Blocked Readonly Updates" :value="blockedUpdateCount"/>

        <D1ChipGroup
          v-model:selected="selectedIcon"
          :list="listBasic"
          :readonly="isInteractiveReadonly"
        />
        <DemoFlex align="center">
          <D1Button
            label="Toggle Readonly"
            size="sm"
            outline
            @click="isInteractiveReadonly = !isInteractiveReadonly"
          />
        </DemoFlex>
        <DemoValue label="Interactive Readonly" :value="isInteractiveReadonly"/>
      </D1Group>

      <D1Group label="Icon When Selected">
        <D1ChipGroup
          v-model:selected="selectedIcon"
          data-testid="demo-cg-icon"
          :list="listBasic"
          :readonly="false"
          :chip-attrs="{ icon: 'check' }"
          :icon-when-selected="isIconWhenSelected"
        />
        <DemoFlex align="center">
          <D1Button
            label="Toggle iconWhenSelected"
            size="sm"
            outline
            @click="isIconWhenSelected = !isIconWhenSelected"
          />
        </DemoFlex>
        <DemoValue data-testid="demo-cg-icon-output" label="Selected & Icon Flag" :value="{ selectedIcon, isIconWhenSelected }"/>
      </D1Group>

      <D1Group label="Custom Keys (keyLabel & keyValue)">
        <D1ChipGroup
          v-model:selected="selectedCustom"
          data-testid="demo-cg-keys"
          :list="listCustomKeys"
          key-label="title"
          key-value="code"
          :readonly="false"
        />
        <DemoValue data-testid="demo-cg-keys-output" label="Custom Key Selected" :value="selectedCustom"/>
      </D1Group>

      <D1Group label="Chip Attributes & Default Slot">
        <D1ChipGroup
          v-model:selected="selectedSingle"
          data-testid="demo-cg-attrs"
          :list="listRichAttrs"
          :readonly="false"
          :chip-attrs="{ palette: 'purple', size: 'sm', roundedFull: true }"
        >
          <template #default>
            <D1Chip data-testid="demo-cg-slot-chip" label="Custom Slot Chip" icon="star"/>
          </template>
        </D1ChipGroup>
        <D1ChipGroup>
          <template #default>
            <D1Chip label="Standalone Slot One" icon="bolt"/>
            <D1Chip label="Standalone Slot Two" selected/>
          </template>
        </D1ChipGroup>
      </D1Group>

      <D1Group label="Accessibility (Group Role & Label)">
        <D1ChipGroup
          v-model:selected="selectedSingle"
          role="group"
          aria-label="Filter options"
          :list="[
            { label: 'All', value: 'all' },
            { label: 'Active', value: 'active' },
            { icon: 'tune', value: 'filter', ariaLabel: 'Open filter chip' },
            { label: 'Unavailable', value: 'locked', disabled: true }
          ]"
          :readonly="false"
        />
      </D1Group>

      <D1Group label="Events">
        <D1ChipGroup
          v-model:selected="selectedEvents"
          data-testid="demo-cg-events"
          :list="listBasic"
          :readonly="false"
          @click="handleClickEvent"
          @click-lite="handleClickLiteEvent"
          @update:selected="handleUpdateSelected"
          @update:model-selected="handleUpdateModelSelected"
        />
        <DemoValue data-testid="demo-cg-event-output" label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1ChipGroup
          data-testid="demo-cg-unicode"
          :list="listUnicode"
          selected="vi"
        />
        <DemoBox class="demo-chip-group-page__narrow" size="sm">
          <D1ChipGroup :list="listUnbroken"/>
        </DemoBox>
        <D1ChipGroup
          data-testid="demo-cg-empty"
          :list="[]"
        />
        <D1ChipGroup/>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1ChipGroup
          v-if="isLifecycleMounted"
          v-model:selected="selectedSingle"
          :list="listBasic"
          :readonly="false"
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-chip-group-page {
  &__narrow {
    width: 100%;
    max-width: 220px;
  }
}
</style>
