<script setup lang="ts">
import { ref } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { MotionAxisEmitOptions } from '@dxtmisha/constructor/MotionAxis'
import type { TabsExpose } from '@dxtmisha/constructor/Tabs'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedBasic = ref<string>('overview')
const selectedStates = ref<string>('active')
const selectedCustomKeys = ref<number>(0)
const selectedObjectConfig = ref<string>('profile')
const selectedNoDivider = ref<string>('alpha')
const selectedAxisY = ref<string>('step1')
const selectedAxisZ = ref<string>('layer1')
const selectedDirection = ref<string>('slide1')
const selectedInDom = ref<string>('ssr1')
const selectedDynamic = ref<string>('dyn-1')
const selectedEvents = ref<string>('first')
const selectedBoundary = ref<string>('0')

const eventPayload = ref<string>('No events triggered yet')
const blockedClicks = ref<number>(0)
const exposeOutput = ref<string>('Not read yet')
const isLifecycleMounted = ref<boolean>(true)
const isSkeletonActive = ref<boolean>(true)

const tabsExposeRef = ref<TabsExpose | null>(null)

const basicTabs = [
  { value: 'overview', label: 'Overview', icon: 'home', detail: { section: 'overview' } },
  { value: 'search', label: 'Search', icon: 'search', badge: 5, detail: { section: 'search' } },
  { value: 'reports', label: 'Reports', icon: 'description', detail: { section: 'reports' } }
]

const stateTabs = [
  { value: 'active', label: 'Active', icon: 'check_circle' },
  { value: 'disabled', label: 'Disabled', icon: 'block', disabled: true },
  { value: 'readonly', label: 'Readonly', icon: 'lock', readonly: true },
  { value: 'loading', label: 'Loading', icon: 'sync', loading: true },
  { value: 'ready', label: 'Ready', icon: 'star' }
]

const customKeyTabs = [
  { id: 0, title: '0 (Zero Key)', icon: 'exposure_zero' },
  { id: 1, title: 'First Item', icon: 'looks_one' },
  { id: 2, title: 'Second Item', icon: 'looks_two' }
]

const objectConfigTabs = {
  'divider': true,
  'horizontalScrollAlign': 'block' as const,
  'aria-label': 'Account settings tabs',
  'list': [
    { value: 'profile', label: 'Profile', icon: 'person' },
    { value: 'billing', label: 'Billing', icon: 'credit_card', badge: '2' },
    { value: 'security', label: 'Security', icon: 'shield' }
  ]
}

const simpleTabs = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' }
]

const axisYTabs = [
  { value: 'step1', label: 'Step 1' },
  { value: 'step2', label: 'Step 2' },
  { value: 'step3', label: 'Step 3' }
]

const axisZTabs = [
  { value: 'layer1', label: 'Layer 1' },
  { value: 'layer2', label: 'Layer 2' },
  { value: 'layer3', label: 'Layer 3' }
]

const directionTabs = [
  { value: 'slide1', label: 'Short Slide' },
  { value: 'slide2', label: 'Tall Slide' },
  { value: 'slide3', label: 'Summary Slide' }
]

const ssrTabs = [
  { value: 'ssr1', label: 'Always In DOM 1' },
  { value: 'ssr2', label: 'Always In DOM 2' },
  { value: 'ssr3', label: 'Always In DOM 3' }
]

const dynamicTabs = ref([
  { value: 'dyn-1', label: 'Panel 1', content: 'Dynamic content for panel 1.' },
  { value: 'dyn-2', label: 'Panel 2', content: 'Dynamic content for panel 2.' }
])

const eventTabs = [
  { value: 'first', label: 'First Tab', detail: { origin: 'first-tab', index: 1 } },
  { value: 'second', label: 'Second Tab', detail: { origin: 'second-tab', index: 2 } },
  { value: 'third', label: 'Third Tab', detail: { origin: 'third-tab', index: 3 } }
]

const largeTabs = [
  { value: 'tab1', label: 'Electronics', icon: 'devices' },
  { value: 'tab2', label: 'Clothing', icon: 'checkroom' },
  { value: 'tab3', label: 'Books', icon: 'menu_book' },
  { value: 'tab4', label: 'Home & Garden', icon: 'yard' },
  { value: 'tab5', label: 'Sports', icon: 'sports_soccer' },
  { value: 'tab6', label: 'Toys', icon: 'toys' },
  { value: 'tab7', label: 'Beauty', icon: 'spa' },
  { value: 'tab8', label: 'Automotive', icon: 'directions_car' },
  { value: 'tab9', label: 'Music', icon: 'music_note' },
  { value: 'tab10', label: 'Travel', icon: 'flight' }
]

const boundaryTabs = [
  { value: '0', label: '0' },
  { value: 'single', label: 'A' },
  { value: 'long', label: 'Extremely Long Tab Label That Tests Overflow Handling Safely' },
  { value: 'unicode', label: 'Привет · Học tiếng Việt · 🚀' },
  { value: 'xss', label: '<img src=x onerror=alert(1)>' }
]

const handleAddDynamicTab = (): void => {
  const nextNumber = dynamicTabs.value.length + 1
  const nextValue = `dyn-${nextNumber}`
  dynamicTabs.value = [
    ...dynamicTabs.value,
    {
      value: nextValue,
      label: `Panel ${nextNumber}`,
      content: `Dynamically added slide content for panel ${nextNumber}.`
    }
  ]
  selectedDynamic.value = nextValue
}

const handleRemoveDynamicTab = (): void => {
  if (dynamicTabs.value.length > 1) {
    dynamicTabs.value = dynamicTabs.value.slice(0, -1)
    selectedDynamic.value = dynamicTabs.value[0]?.value ?? ''
  }
}

const handleTabClick = (_event: MouseEvent, value: EventClickValue): void => {
  onEvent('click', value)
  eventPayload.value = JSON.stringify({
    type: value.type,
    value: value.value,
    detail: value.detail
  })
}

const handleTabClickLite = (value: EventClickValue): void => {
  onEvent('clickLite', value)
  eventPayload.value = JSON.stringify({
    type: value.type,
    value: value.value,
    detail: value.detail
  })
}

const handleUpdateSelected = (value?: ListSelectedList): void => {
  if (typeof value === 'string' || typeof value === 'number') {
    selectedEvents.value = value
  }
  onEvent('update:selected', value)
  eventPayload.value = JSON.stringify({ selected: value })
}

const handleMotionAxis = (options: MotionAxisEmitOptions): void => {
  onEvent('motionAxis', options)
  eventPayload.value = JSON.stringify(options)
}

const handleBlockedClick = (): void => {
  blockedClicks.value += 1
}

const handleReadExpose = (): void => {
  exposeOutput.value = JSON.stringify({
    value: tabsExposeRef.value?.getValue?.(),
    detail: tabsExposeRef.value?.getDetail?.()
  })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Tabs">
    <D1Section class="demo-tabs-page">
      <D1Group label="Basic Usage, Icons, Badges & v-model:selected">
        <DemoFlex align="center">
          <D1Button label="Select Overview" size="sm" outline @click="selectedBasic = 'overview'"/>
          <D1Button label="Select Search" size="sm" outline @click="selectedBasic = 'search'"/>
          <D1Button label="Select Reports" size="sm" outline @click="selectedBasic = 'reports'"/>
        </DemoFlex>
        <D1Tabs
          v-model:selected="selectedBasic"
          :tabs="basicTabs"
          :tabs-navigation-attrs="{ 'aria-label': 'Basic section tabs' }"
        >
          <template #overview>
            <span>Welcome to the Overview panel. Use Arrow keys, Home, or End to navigate tabs.</span>
          </template>
          <template #search>
            <span>Search results panel with a numeric badge indicator on the tab trigger.</span>
          </template>
          <template #reports>
            <span>Monthly and quarterly analytics reports appear in this tabpanel.</span>
          </template>
        </D1Tabs>
        <DemoValue label="Selected Basic" :value="selectedBasic"/>
      </D1Group>

      <D1Group label="States & Guarded Actions (Disabled, Readonly, Loading, Skeleton)">
        <D1Tabs
          v-model:selected="selectedStates"
          :tabs="stateTabs"
          :tabs-navigation-attrs="{ 'aria-label': 'State guarded tabs' }"
          @click="handleBlockedClick"
        >
          <template #active>
            <span>Active tabpanel. Disabled, readonly, and loading tabs should block selection.</span>
          </template>
          <template #disabled>
            <span>Disabled tabpanel content.</span>
          </template>
          <template #readonly>
            <span>Readonly tabpanel content.</span>
          </template>
          <template #loading>
            <span>Loading tabpanel content.</span>
          </template>
          <template #ready>
            <span>Ready tabpanel content.</span>
          </template>
        </D1Tabs>
        <DemoValue label="Selected State Tab" :value="selectedStates"/>
        <DemoValue label="Click Handler Count" :value="blockedClicks"/>

        <DemoFlex align="center">
          <D1Button
            label="Toggle Skeleton"
            size="sm"
            outline
            @click="isSkeletonActive = !isSkeletonActive"
          />
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <D1Tabs
            :tabs="basicTabs"
            :tab-item-attrs="{ isSkeleton: isSkeletonActive }"
            :tabs-navigation-attrs="{ 'aria-label': 'Skeleton tabs' }"
          >
            <template #overview>
              <span>Skeleton state tab content.</span>
            </template>
            <template #search>
              <span>Second skeleton tab content.</span>
            </template>
            <template #reports>
              <span>Third skeleton tab content.</span>
            </template>
          </D1Tabs>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Custom Keys (keyValue / keyLabel) with Numeric 0">
        <DemoFlex align="center">
          <D1Button label="Select 0" size="sm" outline @click="selectedCustomKeys = 0"/>
          <D1Button label="Select 1" size="sm" outline @click="selectedCustomKeys = 1"/>
          <D1Button label="Select 2" size="sm" outline @click="selectedCustomKeys = 2"/>
        </DemoFlex>
        <D1Tabs
          v-model:selected="selectedCustomKeys"
          :tabs="customKeyTabs"
          :tabs-navigation-attrs="{
            keyValue: 'id',
            keyLabel: 'title',
            'aria-label': 'Numeric zero custom key tabs'
          }"
        >
          <template #0>
            <span>Numeric value 0 resolved cleanly as the active tabpanel.</span>
          </template>
          <template #1>
            <span>First numeric item panel (id: 1).</span>
          </template>
          <template #2>
            <span>Second numeric item panel (id: 2).</span>
          </template>
        </D1Tabs>
        <DemoValue label="Selected Custom Key" :value="selectedCustomKeys"/>
      </D1Group>

      <D1Group label="Object Config via tabs Prop & Palette / Adaptive tabItemAttrs">
        <D1Tabs
          v-model:selected="selectedObjectConfig"
          :tabs="objectConfigTabs"
          :tab-item-attrs="{ palette: 'blue', 'data-custom-tab-item': 'yes' }"
        >
          <template #profile>
            <span>Profile settings rendered from a TabsNavigation configuration object.</span>
          </template>
          <template #billing>
            <span>Billing history with blue palette styling applied via tabItemAttrs.</span>
          </template>
          <template #security>
            <span>Security credentials and audit preferences.</span>
          </template>
        </D1Tabs>
        <DemoValue label="Selected Object Config" :value="selectedObjectConfig"/>

        <D1Tabs
          :tabs="basicTabs"
          :tab-item-attrs="{ adaptive: 'iconAlways', palette: 'emerald' }"
          :tabs-navigation-attrs="{
            divider: false,
            horizontalScrollAlign: 'left',
            horizontalScrollBleed: false,
            'aria-label': 'Icon only tabs without divider'
          }"
        >
          <template #overview>
            <span>Icon-only adaptive tabs with divider disabled and bleed disabled.</span>
          </template>
          <template #search>
            <span>Search panel for icon-only tabs.</span>
          </template>
          <template #reports>
            <span>Reports panel for icon-only tabs.</span>
          </template>
        </D1Tabs>
      </D1Group>

      <D1Group label="Navigation Alignment, Divider & Custom Tag">
        <D1Tabs
          v-model:selected="selectedNoDivider"
          :tabs="simpleTabs"
          :tabs-navigation-attrs="{
            divider: false,
            tag: 'span',
            horizontalScrollAttrs: { align: 'center' },
            'aria-label': 'Centered tabs without divider'
          }"
        >
          <template #alpha>
            <span>Centered horizontal alignment with divider disabled and custom span tag.</span>
          </template>
          <template #beta>
            <span>Beta panel content.</span>
          </template>
          <template #gamma>
            <span>Gamma panel content.</span>
          </template>
        </D1Tabs>
        <DemoValue label="Selected Centered Tab" :value="selectedNoDivider"/>
      </D1Group>

      <D1Group label="MotionAxis Variants (Axis Y, Axis Z, Direction & Height Animation)">
        <D1Tabs
          v-model:selected="selectedAxisY"
          :tabs="axisYTabs"
          :motion-axis-attrs="{ axis: 'y' }"
          :tabs-navigation-attrs="{ 'aria-label': 'Vertical axis tabs' }"
        >
          <template #step1>
            <span>Vertical Y-axis transition — Step 1.</span>
          </template>
          <template #step2>
            <span>Vertical Y-axis transition — Step 2.</span>
          </template>
          <template #step3>
            <span>Vertical Y-axis transition — Step 3.</span>
          </template>
        </D1Tabs>

        <D1Tabs
          v-model:selected="selectedAxisZ"
          :tabs="axisZTabs"
          :motion-axis-attrs="{ axis: 'z' }"
          :tabs-navigation-attrs="{ 'aria-label': 'Depth axis tabs' }"
        >
          <template #layer1>
            <span>Depth Z-axis transition — Layer 1.</span>
          </template>
          <template #layer2>
            <span>Depth Z-axis transition — Layer 2.</span>
          </template>
          <template #layer3>
            <span>Depth Z-axis transition — Layer 3.</span>
          </template>
        </D1Tabs>

        <D1Tabs
          v-model:selected="selectedDirection"
          :tabs="directionTabs"
          :motion-axis-attrs="{ axis: 'x', direction: 'next', animationHeight: true }"
          :tabs-navigation-attrs="{ 'aria-label': 'Height animated forward direction tabs' }"
        >
          <template #slide1>
            <span>Single-line short slide.</span>
          </template>
          <template #slide2>
            <p>Tall slide with animated height transition.</p>
            <p>Second paragraph increases container height smoothly.</p>
            <p>Third paragraph confirms height interpolation.</p>
          </template>
          <template #slide3>
            <span>Summary slide returning to compact height.</span>
          </template>
        </D1Tabs>
      </D1Group>

      <D1Group label="Dynamic Slide Slots">
        <DemoFlex align="center">
          <D1Button label="Add Tab" size="sm" outline @click="handleAddDynamicTab"/>
          <D1Button label="Remove Last Tab" size="sm" outline @click="handleRemoveDynamicTab"/>
        </DemoFlex>
        <D1Tabs
          v-model:selected="selectedDynamic"
          :tabs="dynamicTabs"
          :tabs-navigation-attrs="{ 'aria-label': 'Dynamic slide slots tabs' }"
        >
          <template
            v-for="tabItem in dynamicTabs"
            :key="tabItem.value"
            #[tabItem.value]
          >
            <span>{{ tabItem.content }}</span>
          </template>
        </D1Tabs>
        <DemoValue label="Dynamic Selected" :value="selectedDynamic"/>
      </D1Group>

      <D1Group label="Events & Programmatic Expose (getValue / getDetail)">
        <DemoFlex align="center">
          <D1Button label="Read Expose getValue() / getDetail()" size="sm" @click="handleReadExpose"/>
        </DemoFlex>
        <D1Tabs
          ref="tabsExposeRef"
          :selected="selectedEvents"
          :tabs="eventTabs"
          :tabs-navigation-attrs="{ 'aria-label': 'Event and expose tracked tabs' }"
          @click="handleTabClick"
          @click-lite="handleTabClickLite"
          @update:selected="handleUpdateSelected"
          @motion-axis="handleMotionAxis"
        >
          <template #first>
            <span>Click tabs to emit click, click-lite, update:selected, and motion-axis events.</span>
          </template>
          <template #second>
            <span>Second event-tracked panel. Read expose values after switching.</span>
          </template>
          <template #third>
            <span>Third event-tracked panel.</span>
          </template>
        </D1Tabs>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Expose Output" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Horizontal Scroll (Many Tabs)">
        <D1Tabs
          :tabs="largeTabs"
          selected="tab4"
          :tabs-navigation-attrs="{
            horizontalScrollAlign: 'left',
            'aria-label': 'Scrollable catalog tabs'
          }"
        >
          <template #tab1><span>Latest gadgets and devices.</span></template>
          <template #tab2><span>Trendy apparel and accessories.</span></template>
          <template #tab3><span>Bestsellers and new releases.</span></template>
          <template #tab4><span>Decor and tools for your home.</span></template>
          <template #tab5><span>Gear for your favorite activities.</span></template>
          <template #tab6><span>Fun and games for all ages.</span></template>
          <template #tab7><span>Skincare and makeup products.</span></template>
          <template #tab8><span>Parts and accessories for vehicles.</span></template>
          <template #tab9><span>Instruments and studio equipment.</span></template>
          <template #tab10><span>Luggage and travel essentials.</span></template>
        </D1Tabs>
      </D1Group>

      <D1Group label="SSR (inDom / inDomSlide), Boundary Values & Lifecycle">
        <D1Tabs
          v-model:selected="selectedInDom"
          :tabs="ssrTabs"
          :motion-axis-attrs="{ inDom: true, inDomSlide: ['ssr1', 'ssr2'] }"
          :tabs-navigation-attrs="{ 'aria-label': 'SSR in-dom tabs' }"
        >
          <template #ssr1><span>Panel 1 remains mounted in DOM for SSR hydration.</span></template>
          <template #ssr2><span>Panel 2 remains mounted in DOM for SSR hydration.</span></template>
          <template #ssr3><span>Panel 3 remains mounted in DOM for SSR hydration.</span></template>
        </D1Tabs>

        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-tabs-page__narrow">
          <D1Tabs
            v-if="isLifecycleMounted"
            v-model:selected="selectedBoundary"
            :tabs="boundaryTabs"
            :tabs-navigation-attrs="{ 'aria-label': 'Boundary and Unicode tabs' }"
          >
            <template #0><span>Zero key panel content.</span></template>
            <template #single><span>Single-character label panel.</span></template>
            <template #long><span>Long tab label panel inside narrow container.</span></template>
            <template #unicode><span>Привет · Học tiếng Việt · 🚀</span></template>
            <template #xss><span>&lt;img src=x onerror=alert(1)&gt; rendered safely as text.</span></template>
          </D1Tabs>
        </DemoBox>
        <DemoValue label="Selected Boundary" :value="selectedBoundary"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-tabs-page {
  &__narrow {
    width: 100%;
    max-width: 280px;
  }
}
</style>
