<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor/Button'
import type { ButtonProps } from '@dxtmisha/d1/D1Button'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')
const blockedClickCount = ref<number>(0)
const isLoadingSkeleton = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)
const selectedTool = ref<string>('bold')

const listBasic: ButtonProps[] = [
  { label: 'Left', value: 'left' },
  { label: 'Middle', value: 0 },
  { label: 'Right', value: 'right' }
]

const listMany: ButtonProps[] = [
  { label: 'Button 1', value: '1' },
  { label: 'Button 2', value: '2' },
  { label: 'Button 3', value: '3' },
  { label: 'Button 4', value: '4' },
  { label: 'Button 5', value: '5' },
  { label: 'Button 6', value: '6' },
  { label: 'Button 7', value: '7' },
  { label: 'Button 8', value: '8' }
]

const listStates: ButtonProps[] = [
  { label: 'Active', value: 'active', icon: 'check' },
  { label: 'Selected', value: 'selected', selected: true },
  { label: 'Disabled', value: 'disabled', disabled: true },
  { label: 'Readonly', value: 'readonly', readonly: true },
  { label: 'Loading', value: 'loading', loading: true }
]

const listWithEvents: ButtonProps[] = [
  { label: 'Save', value: 'save', detail: { scope: 'document' } },
  { label: 'Archive', value: 0, detail: { scope: 'zero-index' } },
  { label: 'Negative', value: -15 },
  { label: 'Locked', value: 'locked', disabled: true }
]

const listBoundary: ButtonProps[] = [
  { label: '', ariaLabel: 'Empty label' },
  { label: '   ', ariaLabel: 'Whitespace label' },
  { label: 0, value: 0 },
  { label: -5, value: -5 },
  { label: 2.5, value: 2.5 },
  { label: 'A', value: 'single' },
  { label: 'Tiếng Việt / Кириллица / 🚀', value: 'unicode' },
  { label: '<img src=x onerror=alert(1)>', value: 'xss' },
  { label: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', value: 'unbroken' }
]

const listEmpty: ButtonProps[] = []

const listWithBlocked: ButtonProps[] = [
  { label: 'Disabled Item', value: 'disabled', disabled: true },
  { label: 'Readonly Item', value: 'readonly', readonly: true },
  { label: 'Loading Item', value: 'loading', loading: true }
]

const handleClickEvent = (
  mouseEvent: MouseEvent,
  clickValue: EventClickValue
): void => {
  const payload = {
    eventType: mouseEvent.type,
    value: clickValue
  }
  onEvent('click', payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleClickLiteEvent = (clickValue: EventClickValue): void => {
  onEvent('clickLite', clickValue)
  eventPayload.value = JSON.stringify(clickValue)
}

const handleBlockedEvent = (): void => {
  blockedClickCount.value += 1
}

const handleToolSelect = (clickValue: EventClickValue): void => {
  if (typeof clickValue.value === 'string') {
    selectedTool.value = clickValue.value
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ButtonGroup">
    <D1Section>
      <D1Group label="Basic & ARIA Group">
        <D1ButtonGroup
          aria-label="Alignment actions"
          :list="listBasic"
        />
      </D1Group>

      <D1Group label="Orientation (Horizontal & Vertical)">
        <DemoFlex align="start">
          <D1ButtonGroup
            aria-label="Horizontal group"
            :list="listBasic"
            orientation="horizontal"
          />
          <D1ButtonGroup
            aria-label="Vertical group"
            :list="listBasic"
            orientation="vertical"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Wrap">
        <D1ButtonGroup
          aria-label="Wrapped group"
          :list="listMany"
          wrap
        />
      </D1Group>

      <D1Group label="Shared Button Attributes (buttonAttrs)">
        <DemoFlex align="center">
          <D1ButtonGroup :list="listBasic" :button-attrs="{ secondary: true }"/>
          <D1ButtonGroup :list="listBasic" :button-attrs="{ outline: true, palette: 'green' }"/>
          <D1ButtonGroup :list="listBasic" :button-attrs="{ size: 'sm', palette: 'red', roundedFull: true }"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Item States (Selected, Disabled, Readonly, Loading)">
        <D1ButtonGroup
          aria-label="Button states group"
          :list="listStates"
          wrap
        />
      </D1Group>

      <D1Group label="Default Slot & Combined List + Slot">
        <DemoFlex direction="column">
          <D1ButtonGroup aria-label="Custom slot actions">
            <D1Button label="Custom 1" primary/>
            <D1Button label="Custom 2" secondary/>
            <D1Button label="Custom 3" outline/>
          </D1ButtonGroup>
          <D1ButtonGroup aria-label="Combined list and slot" :list="listBasic">
            <D1Button label="Extra Slot Button" outline icon="add"/>
          </D1ButtonGroup>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive Selection & Events">
        <D1ButtonGroup
          aria-label="Formatting toolbar"
          role="toolbar"
          :list="[
            { label: 'Bold', value: 'bold', selected: selectedTool === 'bold' },
            { label: 'Italic', value: 'italic', selected: selectedTool === 'italic' },
            { label: 'Underline', value: 'underline', selected: selectedTool === 'underline' }
          ]"
          @click-lite="handleToolSelect"
        />
        <DemoValue label="Selected Tool" :value="selectedTool"/>

        <D1ButtonGroup
          aria-label="Document actions"
          area="custom-button-group"
          :list="listWithEvents"
          @click="handleClickEvent"
          @click-lite="handleClickLiteEvent"
        />
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Blocked Actions Guard">
        <D1ButtonGroup
          aria-label="Guarded buttons"
          :list="listWithBlocked"
          @click="handleBlockedEvent"
          @click-lite="handleBlockedEvent"
        />
        <DemoValue label="Blocked Click Count" :value="blockedClickCount"/>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button
            size="sm"
            outline
            label="Toggle Skeleton"
            @click="isLoadingSkeleton = !isLoadingSkeleton"
          />
        </DemoFlex>
        <D1Skeleton :active="isLoadingSkeleton">
          <D1ButtonGroup
            :is-skeleton="isLoadingSkeleton"
            :list="listBasic"
          />
        </D1Skeleton>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1ButtonGroup
          aria-label="Boundary cases group"
          :list="listBoundary"
          wrap
        />
        <D1ButtonGroup
          aria-label="Empty list group"
          :list="listEmpty"
        />
        <DemoBox class="demo-button-group-page__narrow" size="sm">
          <D1ButtonGroup
            aria-label="Narrow container group"
            :list="listMany"
            wrap
          />
        </DemoBox>
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
        <D1ButtonGroup
          v-if="isLifecycleMounted"
          aria-label="Mounted button group"
          :list="listBasic"
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-button-group-page {
  &__narrow {
    max-width: 220px;
  }
}
</style>
