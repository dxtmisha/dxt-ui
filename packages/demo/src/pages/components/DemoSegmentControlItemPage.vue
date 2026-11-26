<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { SegmentControlItemExpose } from '@dxtmisha/constructor/SegmentControlItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedSegment = ref<string>('day')
const eventPayload = ref<string>('No click yet')
const segmentItemRef = ref<SegmentControlItemExpose | null>(null)
const exposeOutput = ref<string>('Not read yet')
const isSkeletonActive = ref<boolean>(true)
const isMountedDemo = ref<boolean>(true)

const palettes = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'black',
  'white'
] as const

const adaptiveModes = [
  'auto',
  'iconAlways',
  'iconSm',
  'iconMd',
  'iconLg',
  'iconXl',
  'icon2xl',
  'fullSm',
  'fullMd',
  'fullLg',
  'fullXl',
  'full2xl'
] as const

const containerModes = [
  'iconSm',
  'iconMd',
  'iconLg',
  'iconXl',
  'icon2xl',
  'fullSm',
  'fullMd',
  'fullLg',
  'fullXl',
  'full2xl'
] as const

const onSegmentClick = (_event: MouseEvent, value: EventClickValue): void => {
  onEvent('click', value)
  eventPayload.value = JSON.stringify({ value: value.value, detail: value.detail })
}

const readExposeValues = (): void => {
  if (!segmentItemRef.value) {
    exposeOutput.value = 'Ref not mounted'
    return
  }

  exposeOutput.value = JSON.stringify({
    value: segmentItemRef.value.getValue(),
    detail: segmentItemRef.value.getDetail(),
    hasElement: Boolean(segmentItemRef.value.elementHtml)
  })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="SegmentControlItem">
    <D1Section>
      <D1Group label="Basic & Interactive Selection">
        <div class="demo-segment-control-item-page" role="tablist" aria-label="Timeframe segments">
          <D1SegmentControlItem
            label="Day"
            icon="today"
            :selected="selectedSegment === 'day'"
            value="day"
            @click="selectedSegment = 'day'"
          />
          <D1SegmentControlItem
            label="Week"
            icon="date_range"
            badge="7"
            :selected="selectedSegment === 'week'"
            value="week"
            @click="selectedSegment = 'week'"
          />
          <D1SegmentControlItem
            label="Month"
            icon="calendar_month"
            icon-trailing="expand_more"
            :selected="selectedSegment === 'month'"
            value="month"
            @click="selectedSegment = 'month'"
          />
        </div>
        <DemoValue label="Selected Segment" :value="selectedSegment"/>
      </D1Group>

      <D1Group label="States (Default, Selected, Focus, Open, Readonly, Disabled)">
        <div class="demo-segment-control-item-page">
          <D1SegmentControlItem label="Default" icon="star"/>
          <D1SegmentControlItem label="Selected" icon="star" selected/>
          <D1SegmentControlItem label="Focus" icon="star" focus/>
          <D1SegmentControlItem label="Open" icon="expand_more" open/>
          <D1SegmentControlItem label="Readonly" icon="lock" readonly @click="onSegmentClick"/>
          <D1SegmentControlItem label="Disabled" icon="block" disabled @click="onSegmentClick"/>
          <D1SegmentControlItem label="Selected + Disabled" icon="check" selected disabled/>
        </div>
      </D1Group>

      <D1Group label="Palettes">
        <div class="demo-segment-control-item-page">
          <D1SegmentControlItem
            v-for="palette in palettes"
            :key="palette"
            :label="palette"
            :palette="palette"
            icon="palette"
            selected
          />
        </div>
      </D1Group>

      <D1Group label="Icons, Badges & Data Formats">
        <div class="demo-segment-control-item-page">
          <D1SegmentControlItem label="Leading icon" icon="home"/>
          <D1SegmentControlItem label="Trailing icon" icon-trailing="arrow_forward"/>
          <D1SegmentControlItem label="Both icons" icon="mail" icon-trailing="open_in_new"/>
          <D1SegmentControlItem label="Icon-only" icon="notifications" aria-label="Notifications segment"/>
          <D1SegmentControlItem label="Badge string" badge="New"/>
          <D1SegmentControlItem label="Badge number" :badge="12"/>
          <D1SegmentControlItem :label="0" value="zero-segment"/>
          <D1SegmentControlItem :label="2026" :badge="0"/>
        </div>
      </D1Group>

      <D1Group label="Adaptive & Container Modes">
        <div class="demo-segment-control-item-page">
          <D1SegmentControlItem
            v-for="mode in adaptiveModes"
            :key="mode"
            :label="mode"
            :adaptive="mode"
            icon="devices"
          />
        </div>
        <div class="demo-segment-control-item-page">
          <D1SegmentControlItem
            v-for="mode in containerModes"
            :key="mode"
            :label="mode"
            :container="mode"
            icon="view_quilt"
          />
        </div>
      </D1Group>

      <D1Group label="Tags, Links, Roles & Slots">
        <div class="demo-segment-control-item-page">
          <D1SegmentControlItem label="Button tag (default)" tag="button"/>
          <D1SegmentControlItem label="Span tag" tag="span" role="menuitem"/>
          <D1SegmentControlItem label="Anchor href" href="#segment-anchor"/>
          <D1SegmentControlItem label="Router link (to)" to="/component-segment-control-item"/>
          <D1SegmentControlItem icon="layers">
            <span>Custom Default Slot</span>
          </D1SegmentControlItem>
        </div>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <div class="demo-segment-control-item-page">
            <D1SegmentControlItem label="Loading 1" icon="home" is-skeleton/>
            <D1SegmentControlItem label="Loading 2" icon="analytics" badge="2" selected is-skeleton/>
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Events & Programmatic Expose">
        <DemoFlex align="center">
          <D1SegmentControlItem
            ref="segmentItemRef"
            label="Track Segment Click"
            icon="touch_app"
            value="tracked-segment"
            :detail="{ group: 'demo' }"
            @click="onSegmentClick"
          />
          <D1Button label="Read Expose" @click="readExposeValues"/>
        </DemoFlex>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Expose Output" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Boundary, Edge Cases & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-segment-control-item-page__narrow">
          <div v-if="isMountedDemo" class="demo-segment-control-item-page">
            <D1SegmentControlItem label="" aria-label="Empty label segment"/>
            <D1SegmentControlItem label="A"/>
            <D1SegmentControlItem label="Long single-line segment label inside scrollable narrow bounds"/>
            <D1SegmentControlItem label="Привет · Học tiếng Việt · 🚀"/>
            <D1SegmentControlItem label="<img src=x onerror=alert(1)>"/>
          </div>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-segment-control-item-page {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;

  &__narrow {
    max-width: 240px;
    overflow-x: auto;
  }
}
</style>
