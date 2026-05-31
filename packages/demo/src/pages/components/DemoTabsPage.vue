<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selected = ref('tab1')
const selectedEvents = ref('tab1')

const tabs = [
  { value: 'tab1', label: 'Home', icon: 'home' },
  { value: 'tab2', label: 'Search', icon: 'search', badge: 5 },
  { value: 'tab3', label: 'Settings', icon: 'settings', disabled: true }
]

const listLarge = [
  { value: 'tab1', label: 'Electronics' },
  { value: 'tab2', label: 'Clothing' },
  { value: 'tab3', label: 'Books' },
  { value: 'tab4', label: 'Home & Garden' },
  { value: 'tab5', label: 'Sports' },
  { value: 'tab6', label: 'Toys' },
  { value: 'tab7', label: 'Beauty' },
  { value: 'tab8', label: 'Automotive' }
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Tabs">
    <D1Section>
      <D1Group label="Basic Tabs with Icons & Badges">
        <D1Tabs v-model:selected="selected" :tabs="tabs">
          <template #tab1>
            <span>Welcome Home! This is the primary tab.</span>
          </template>
          <template #tab2>
            <span>Search results will appear here. Note the badge on the tab.</span>
          </template>
          <template #tab3>
            <span>This tab is disabled. You cannot select it.</span>
          </template>
        </D1Tabs>
        <DemoValue :value="selected" />
      </D1Group>

      <D1Group label="Alignment & Divider">
        <D1Tabs
          :tabs="tabs"
          :tabs-navigation-attrs="{ align: 'center', divider: true }"
        >
          <template #tab1><span>Centered tabs with a bottom divider.</span></template>
          <template #tab2><span>Second tab content.</span></template>
        </D1Tabs>
      </D1Group>

      <D1Group label="Vertical Animation (Axis Y)">
        <D1Tabs
          :tabs="tabs"
          :motion-axis-attrs="{ axis: 'y' }"
        >
          <template #tab1><span>Vertical slide animation.</span></template>
          <template #tab2><span>Try switching between tabs to see the motion.</span></template>
        </D1Tabs>
      </D1Group>

      <D1Group label="SSR Friendly (In DOM)">
        <D1Tabs
          :tabs="tabs"
          :motion-axis-attrs="{ inDom: true }"
        >
          <template #tab1><span>Content is always present in DOM.</span></template>
          <template #tab2><span>Inspect the page to see both tabs rendered.</span></template>
        </D1Tabs>
      </D1Group>

      <D1Group label="Events">
        <D1Tabs
          v-model:selected="selectedEvents"
          :tabs="tabs"
          @click="onEvent('click')"
          @clickLite="onEvent('clickLite')"
          @motionAxis="onEvent('motionAxis')"
        >
          <template #tab1><span>Trigger events by switching tabs.</span></template>
          <template #tab2><span>Inspect the event values below.</span></template>
        </D1Tabs>
        <DemoValue :value="eventName" />
      </D1Group>

      <D1Group label="Horizontal Scroll (Many Tabs)">
        <D1Tabs :tabs="listLarge" selected="tab4">
          <template #tab1><span>Latest gadgets and devices.</span></template>
          <template #tab2><span>Trendy apparel and accessories.</span></template>
          <template #tab3><span>Bestsellers and new releases.</span></template>
          <template #tab4><span>Decor and tools for your home.</span></template>
          <template #tab5><span>Gear for your favorite activities.</span></template>
          <template #tab6><span>Fun and games for all ages.</span></template>
          <template #tab7><span>Skincare and makeup products.</span></template>
          <template #tab8><span>Parts and accessories for vehicles.</span></template>
        </D1Tabs>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
