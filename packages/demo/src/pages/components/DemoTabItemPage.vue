<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { TabItemExpose } from '@dxtmisha/constructor/TabItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedTab = ref<string>('overview')
const eventPayload = ref<string>('No click yet')
const tabItemRef = ref<TabItemExpose | null>(null)
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

const onTabClick = (_event: MouseEvent, value: EventClickValue): void => {
  onEvent('click', value)
  eventPayload.value = JSON.stringify({ value: value.value, detail: value.detail })
}

const readExposeValues = (): void => {
  if (!tabItemRef.value) {
    exposeOutput.value = 'Ref not mounted'
    return
  }

  exposeOutput.value = JSON.stringify({
    value: tabItemRef.value.getValue(),
    detail: tabItemRef.value.getDetail(),
    hasElement: Boolean(tabItemRef.value.elementHtml)
  })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TabItem">
    <D1Section>
      <D1Group label="Basic & Interactive Selection">
        <div class="demo-tab-item-page" role="tablist" aria-label="Basic tab items">
          <D1TabItem
            label="Overview"
            icon="home"
            :selected="selectedTab === 'overview'"
            value="overview"
            @click="selectedTab = 'overview'"
          />
          <D1TabItem
            label="Analytics"
            icon="analytics"
            badge="4"
            :selected="selectedTab === 'analytics'"
            value="analytics"
            @click="selectedTab = 'analytics'"
          />
          <D1TabItem
            label="Settings"
            icon="settings"
            icon-trailing="chevron_right"
            :selected="selectedTab === 'settings'"
            value="settings"
            @click="selectedTab = 'settings'"
          />
        </div>
        <DemoValue label="Selected Tab" :value="selectedTab"/>
      </D1Group>

      <D1Group label="States (Default, Selected, Focus, Open, Readonly, Disabled)">
        <div class="demo-tab-item-page">
          <D1TabItem label="Default" icon="star"/>
          <D1TabItem label="Selected" icon="star" selected/>
          <D1TabItem label="Focus" icon="star" focus/>
          <D1TabItem label="Open" icon="expand_more" open/>
          <D1TabItem label="Readonly" icon="lock" readonly @click="onTabClick"/>
          <D1TabItem label="Disabled" icon="block" disabled @click="onTabClick"/>
          <D1TabItem label="Selected + Disabled" icon="check" selected disabled/>
        </div>
      </D1Group>

      <D1Group label="Palettes">
        <div class="demo-tab-item-page">
          <D1TabItem
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
        <div class="demo-tab-item-page">
          <D1TabItem label="Leading icon" icon="home"/>
          <D1TabItem label="Trailing icon" icon-trailing="arrow_forward"/>
          <D1TabItem label="Both icons" icon="mail" icon-trailing="open_in_new"/>
          <D1TabItem label="Icon object" :icon="{ icon: 'bolt', turn: true }"/>
          <D1TabItem label="Icon-only" icon="notifications" aria-label="Notifications tab"/>
          <D1TabItem label="Badge string" badge="New"/>
          <D1TabItem label="Badge number" :badge="99"/>
          <D1TabItem label="Badge object" :badge="{ label: 'VIP', dot: false }"/>
          <D1TabItem :label="0" value="zero-label"/>
          <D1TabItem :label="2026" :badge="0"/>
        </div>
      </D1Group>

      <D1Group label="Adaptive & Container Modes">
        <div class="demo-tab-item-page">
          <D1TabItem
            v-for="mode in adaptiveModes"
            :key="mode"
            :label="mode"
            :adaptive="mode"
            icon="devices"
          />
        </div>
        <div class="demo-tab-item-page">
          <D1TabItem
            v-for="mode in containerModes"
            :key="mode"
            :label="mode"
            :container="mode"
            icon="view_quilt"
          />
        </div>
      </D1Group>

      <D1Group label="Tags, Links, Roles & Slots">
        <div class="demo-tab-item-page">
          <D1TabItem label="Button tag (default)" tag="button"/>
          <D1TabItem label="Span tag" tag="span" role="menuitem"/>
          <D1TabItem label="Div tag" tag="div" role="option"/>
          <D1TabItem label="Anchor href" href="#tab-anchor"/>
          <D1TabItem label="Router link (to)" to="/component-tab-item"/>
          <D1TabItem icon="layers">
            <span>Custom Default Slot</span>
          </D1TabItem>
        </div>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <div class="demo-tab-item-page">
            <D1TabItem label="Loading Tab 1" icon="home" is-skeleton/>
            <D1TabItem label="Loading Tab 2" icon="analytics" badge="5" selected is-skeleton/>
            <D1TabItem label="Loading Tab 3" icon="settings" is-skeleton/>
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Events & Programmatic Expose">
        <DemoFlex align="center">
          <D1TabItem
            ref="tabItemRef"
            label="Track Click Event"
            icon="touch_app"
            value="tracked-tab"
            :detail="{ section: 'events', index: 1 }"
            @click="onTabClick"
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
        <DemoBox size="sm" class="demo-tab-item-page__narrow">
          <div v-if="isMountedDemo" class="demo-tab-item-page">
            <D1TabItem label="" aria-label="Empty label tab"/>
            <D1TabItem label="   " aria-label="Whitespace label tab"/>
            <D1TabItem label="A"/>
            <D1TabItem label="Very long multi-word tab item label that tests wrapping or truncation inside narrow bounds"/>
            <D1TabItem label="Multilingual: Привет · Học tiếng Việt · 🚀"/>
            <D1TabItem label="<img src=x onerror=alert(1)>"/>
          </div>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-tab-item-page {
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
