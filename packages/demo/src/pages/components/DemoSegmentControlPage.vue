<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { SegmentControlExpose } from '@dxtmisha/constructor/SegmentControl'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedBasic = ref<string>('first')
const selectedIcon = ref<string>('home')
const selectedBadge = ref<string>('inbox')
const selectedDisabled = ref<string>('a')
const selectedCustomKeys = ref<number>(0)
const selectedLong = ref<string>('seg-1')
const selectedSlots = ref<string>('day')
const selectedEvents = ref<string>('alpha')
const eventPayload = ref<string>('No click yet')
const exposeIdsOutput = ref<string>('Not read yet')
const isMountedDemo = ref<boolean>(true)

const segmentControlRef = ref<SegmentControlExpose | null>(null)

const basicList = [
  { label: 'First', value: 'first' },
  { label: 'Second', value: 'second' },
  { label: 'Third', value: 'third' }
]

const iconList = [
  { label: 'Home', value: 'home', icon: 'home' },
  { label: 'Search', value: 'search', icon: 'search' },
  { label: 'Settings', value: 'settings', icon: 'settings' }
]

const badgeList = [
  { label: 'Inbox', value: 'inbox', badge: '5' },
  { label: 'Sent', value: 'sent' },
  { label: 'Drafts', value: 'drafts', badge: 'new' }
]

const disabledList = [
  { label: 'Active A', value: 'a' },
  { label: 'Disabled B', value: 'b', disabled: true },
  { label: 'Loading C', value: 'c', loading: true },
  { label: 'Active D', value: 'd' }
]

const customKeyList = [
  { id: 0, title: '0 (Zero Value)' },
  { id: 1, title: 'Option One' },
  { id: 2, title: 'Option Two' }
]

const longList = Array.from({ length: 12 }, (_, index) => ({
  value: `seg-${index + 1}`,
  label: `Segment ${index + 1}`,
  icon: index % 2 === 0 ? 'folder' : 'star'
}))

const slotList = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' }
]

const boundaryList = [
  { value: '0', label: '0' },
  { value: 'quoted "val"', label: 'Quoted value' },
  { value: 'unicode', label: 'Привет · Học tiếng Việt · 🚀' },
  { value: 'xss', label: '<img src=x onerror=alert(1)>' }
]

const onSegmentClick = (_event: MouseEvent, value: EventClickValue): void => {
  onEvent('click', value)
  eventPayload.value = JSON.stringify({ value: value.value })
}

const readExposeIds = (): void => {
  exposeIdsOutput.value = JSON.stringify(segmentControlRef.value?.ids() ?? {})
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="SegmentControl">
    <D1Section>
      <D1Group label="Basic Usage & v-model:selected">
        <DemoFlex align="center">
          <D1Button label="Select First" @click="selectedBasic = 'first'"/>
          <D1Button label="Select Second" @click="selectedBasic = 'second'"/>
          <D1Button label="Select Third" @click="selectedBasic = 'third'"/>
        </DemoFlex>
        <D1SegmentControl
          v-model:selected="selectedBasic"
          :list="basicList"
          aria-label="Basic segment control"
        />
        <DemoValue label="Selected Basic" :value="selectedBasic"/>
      </D1Group>

      <D1Group label="With Icons">
        <D1SegmentControl
          v-model:selected="selectedIcon"
          :list="iconList"
          aria-label="Icon segment control"
        />
        <DemoValue label="Selected Icon" :value="selectedIcon"/>
      </D1Group>

      <D1Group label="With Badges">
        <D1SegmentControl
          v-model:selected="selectedBadge"
          :list="badgeList"
          aria-label="Badge segment control"
        />
        <DemoValue label="Selected Badge" :value="selectedBadge"/>
      </D1Group>

      <D1Group label="Disabled & Loading Items">
        <D1SegmentControl
          v-model:selected="selectedDisabled"
          :list="disabledList"
          aria-label="States segment control"
        />
        <DemoValue label="Selected State" :value="selectedDisabled"/>
      </D1Group>

      <D1Group label="Divider & Custom Keys (Numeric 0)">
        <D1SegmentControl
          v-model:selected="selectedCustomKeys"
          :list="customKeyList"
          :divider="true"
          key-value="id"
          key-label="title"
          aria-label="Custom keys segment control"
        />
        <DemoValue label="Selected Custom Key" :value="selectedCustomKeys"/>
      </D1Group>

      <D1Group label="Horizontal Scroll & Left Alignment">
        <D1SegmentControl
          v-model:selected="selectedLong"
          :list="longList"
          horizontal-scroll-align="left"
          aria-label="Scrollable segment control"
        />
        <DemoValue label="Selected Scroll Segment" :value="selectedLong"/>
      </D1Group>

      <D1Group label="Slots (#leading, #trailing), tag & itemAttrs">
        <D1SegmentControl
          v-model:selected="selectedSlots"
          :list="slotList"
          tag="span"
          :item-attrs="{ 'data-custom-segment': 'yes' }"
          aria-label="Slotted segment control"
        >
          <template #leading>
            <D1Button label="Prev" size="sm" @click="selectedSlots = 'day'"/>
          </template>
          <template #trailing>
            <D1Button label="Next" size="sm" @click="selectedSlots = 'month'"/>
          </template>
        </D1SegmentControl>
        <DemoValue label="Selected Slotted" :value="selectedSlots"/>
      </D1Group>

      <D1Group label="Events & Programmatic Expose (ids)">
        <DemoFlex align="center">
          <D1Button label="Read Expose ids()" @click="readExposeIds"/>
        </DemoFlex>
        <D1SegmentControl
          ref="segmentControlRef"
          v-model:selected="selectedEvents"
          :list="[
            { value: 'alpha', label: 'Alpha' },
            { value: 'beta', label: 'Beta' },
            { value: 'gamma', label: 'Gamma' }
          ]"
          aria-label="Event tracked segment control"
          @click="onSegmentClick"
        />
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Expose ids()" :value="exposeIdsOutput"/>
      </D1Group>

      <D1Group label="Boundary Values, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-segment-control-page__narrow">
          <D1SegmentControl
            v-if="isMountedDemo"
            :list="boundaryList"
            aria-label="Boundary segment control"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-segment-control-page {
  &__narrow {
    max-width: 260px;
  }
}
</style>
