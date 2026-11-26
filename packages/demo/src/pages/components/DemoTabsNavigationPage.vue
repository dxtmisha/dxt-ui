<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { TabsNavigationExpose } from '@dxtmisha/constructor/TabsNavigation'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedBasic = ref<string>('analytics')
const selectedCustomKeys = ref<number>(0)
const selectedLong = ref<string>('tab-1')
const selectedSlots = ref<string>('overview')
const selectedEvents = ref<string>('first')
const eventPayload = ref<string>('No click yet')
const exposeIdsOutput = ref<string>('Not read yet')
const isMountedDemo = ref<boolean>(true)

const tabsNavigationRef = ref<TabsNavigationExpose | null>(null)

const basicTabs = [
  { value: 'overview', label: 'Overview', icon: 'home' },
  { value: 'analytics', label: 'Analytics', icon: 'analytics', badge: '4' },
  { value: 'reports', label: 'Reports', icon: 'description' },
  { value: 'disabled', label: 'Disabled', icon: 'block', disabled: true },
  { value: 'settings', label: 'Settings', icon: 'settings' }
]

const customKeyTabs = [
  { id: 0, title: '0 (Zero Value)' },
  { id: 1, title: 'First Option' },
  { id: 2, title: 'Second Option' }
]

const longTabs = Array.from({ length: 14 }, (_, index) => ({
  value: `tab-${index + 1}`,
  label: `Section ${index + 1}`,
  icon: index % 2 === 0 ? 'folder' : 'star'
}))

const boundaryTabs = [
  { value: '0', label: '0' },
  { value: 'quoted "val"', label: 'Quoted value' },
  { value: 'unicode', label: 'Привет · Học tiếng Việt · 🚀' },
  { value: 'xss', label: '<img src=x onerror=alert(1)>' }
]

const onTabClick = (_event: MouseEvent, value: EventClickValue): void => {
  onEvent('click', value)
  eventPayload.value = JSON.stringify({ value: value.value })
}

const readExposeIds = (): void => {
  exposeIdsOutput.value = JSON.stringify(tabsNavigationRef.value?.ids() ?? {})
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TabsNavigation">
    <D1Section>
      <D1Group label="Basic, Divider & v-model:selected">
        <DemoFlex align="center">
          <D1Button label="Select Overview" @click="selectedBasic = 'overview'"/>
          <D1Button label="Select Reports" @click="selectedBasic = 'reports'"/>
          <D1Button label="Select Settings" @click="selectedBasic = 'settings'"/>
        </DemoFlex>
        <D1TabsNavigation
          v-model:selected="selectedBasic"
          :list="basicTabs"
          aria-label="Primary tabs navigation"
        />
        <DemoValue label="Selected Basic" :value="selectedBasic"/>
      </D1Group>

      <D1Group label="Without Divider & Custom Keys (Numeric 0)">
        <D1TabsNavigation
          v-model:selected="selectedCustomKeys"
          :list="customKeyTabs"
          :divider="false"
          key-value="id"
          key-label="title"
          aria-label="Custom key tabs"
        />
        <DemoValue label="Selected Custom Key" :value="selectedCustomKeys"/>
      </D1Group>

      <D1Group label="Horizontal Scroll & Alignment (block / left)">
        <D1TabsNavigation
          v-model:selected="selectedLong"
          :list="longTabs"
          horizontal-scroll-align="block"
          aria-label="Scrollable tabs"
        />
        <DemoValue label="Selected Scroll Tab" :value="selectedLong"/>
      </D1Group>

      <D1Group label="Slots (#leading, #trailing) & itemAttrs / tag">
        <D1TabsNavigation
          v-model:selected="selectedSlots"
          :list="basicTabs"
          tag="span"
          :item-attrs="{ 'data-custom-tab': 'yes' }"
          aria-label="Slotted tabs navigation"
        >
          <template #leading>
            <D1Button label="Prev" size="sm" @click="selectedSlots = 'overview'"/>
          </template>
          <template #trailing>
            <D1Button label="Next" size="sm" @click="selectedSlots = 'settings'"/>
          </template>
        </D1TabsNavigation>
        <DemoValue label="Slotted Selected" :value="selectedSlots"/>
      </D1Group>

      <D1Group label="Events & Programmatic Expose (ids)">
        <DemoFlex align="center">
          <D1Button label="Read Expose ids()" @click="readExposeIds"/>
        </DemoFlex>
        <D1TabsNavigation
          ref="tabsNavigationRef"
          v-model:selected="selectedEvents"
          :list="[
            { value: 'first', label: 'First' },
            { value: 'second', label: 'Second' },
            { value: 'third', label: 'Third' }
          ]"
          aria-label="Event tracked tabs"
          @click="onTabClick"
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
        <DemoBox size="sm" class="demo-tabs-navigation-page__narrow">
          <D1TabsNavigation
            v-if="isMountedDemo"
            :list="boundaryTabs"
            aria-label="Boundary tabs"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-tabs-navigation-page {
  &__narrow {
    max-width: 260px;
  }
}
</style>
