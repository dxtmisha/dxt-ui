<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { NavigationRailExpose } from '@dxtmisha/constructor/NavigationRail'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

// 1. Basic & Selection
const basicItems = ref([
  { label: 'Home', value: 'home', icon: 'home' },
  { label: 'Inbox', value: 'inbox', icon: 'inbox', badge: '5' },
  { label: 'Explore', value: 'explore', icon: 'explore', badgeDot: true },
  { label: 'Billing', value: 'billing', icon: 'payments', disabled: true },
  { label: 'Settings', value: 'settings', icon: 'settings' }
])
const selectedSingle = ref<string | undefined>('home')
const selectedMultiple = ref<string[]>(['home', 'inbox'])
const focusedItem = ref<string>('inbox')

const onSelectSingle = (clickValue: EventClickValue): void => {
  if (typeof clickValue.value === 'string') {
    selectedSingle.value = clickValue.value
  }
}

const onSelectMultiple = (clickValue: EventClickValue): void => {
  if (typeof clickValue.value === 'string') {
    const foundIndex = selectedMultiple.value.indexOf(clickValue.value)

    if (foundIndex >= 0) {
      selectedMultiple.value = selectedMultiple.value.filter(item => item !== clickValue.value)
    } else {
      selectedMultiple.value = [...selectedMultiple.value, clickValue.value]
    }
  }
}

// 2. Record & Custom Key Mapping
const recordItems = ref({
  feed: { label: 'Feed', icon: 'dynamic_feed' },
  saved: { label: 'Saved', icon: 'bookmark' },
  profile: { label: 'Profile', icon: 'person' }
})

const customKeyItems = ref([
  { captionText: 'Board', codeKey: 'board', icon: 'view_kanban' },
  { captionText: 'Calendar', codeKey: 'calendar', icon: 'calendar_month' },
  { captionText: 'Files', codeKey: 'files', icon: 'folder' }
])
const selectedCustomKey = ref<string>('calendar')

const onSelectCustomKey = (clickValue: EventClickValue): void => {
  if (typeof clickValue.value === 'string') {
    selectedCustomKey.value = clickValue.value
  }
}

// 3. Hierarchical Menus, Dividers, Spaces & HTML Slot
const structuredItems = ref([
  { label: 'Home', value: 'home', icon: 'home' },
  { type: 'line', value: 'rail-line-1' },
  {
    type: 'menu',
    index: 'rail-menu-tools',
    label: 'Tools',
    icon: 'build',
    value: [
      { label: 'Console', value: 'console', icon: 'terminal' },
      { label: 'Metrics', value: 'metrics', icon: 'monitoring' }
    ]
  },
  {
    type: 'menu',
    index: 'rail-menu-disabled',
    label: 'Restricted',
    icon: 'lock',
    disabled: true,
    value: [
      { label: 'Hidden Entry', value: 'hidden-entry' }
    ]
  },
  { type: 'space', value: 'rail-space-1' },
  { type: 'html', value: 'railCustomSlot', label: 'Slot Fallback' },
  { type: 'html', value: 'railInlineHtml', label: '<strong>Rail Footer</strong>' }
])

// 4. Tags, Attributes & Disabled Guard
const linkItems = ref([
  { label: 'Docs', value: 'docs', href: '#rail-docs', icon: 'menu_book' },
  { label: 'Guide', value: 'guide', href: '#rail-guide', icon: 'school' }
])

const blockedTriggerCount = ref<number>(0)
const handleBlockedTrigger = (): void => {
  blockedTriggerCount.value += 1
}

// 5. Expose, Events & Keyboard Control
const navigationRailRef = ref<NavigationRailExpose | null>(null)
const exposeSelected = ref<string | undefined>('home')
const exposeSummary = ref<string>('Not checked')
const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')
const isKeyboardControlActive = ref<boolean>(false)
const keyboardSelected = ref<string>('home')

const readExposeState = (): void => {
  if (!navigationRailRef.value) {
    exposeSummary.value = 'Ref not initialized'
    return
  }

  exposeSummary.value = JSON.stringify({
    isSelected: navigationRailRef.value.isSelected(),
    selectedList: navigationRailRef.value.getSelectedList().map(item => item.value),
    selectedNames: navigationRailRef.value.getSelectedNames(),
    selectedValues: navigationRailRef.value.getSelectedValues()
  })
}

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleExposeClick = (mouseEvent: MouseEvent, clickValue: EventClickValue): void => {
  if (typeof clickValue.value === 'string') {
    exposeSelected.value = clickValue.value
  }
  trackEvent('click', { eventType: mouseEvent.type, value: clickValue.value, type: clickValue.type })
}

const handleExposeClickLite = (clickValue: EventClickValue): void => {
  trackEvent('clickLite', { value: clickValue.value, type: clickValue.type })
}

const handleCloseEvent = (): void => {
  isKeyboardControlActive.value = false
  trackEvent('close', { closed: true })
}

// 6. Boundary & Lifecycle State
const boundaryItems = ref([
  { label: 0, value: 0, icon: 'exposure_zero' },
  { label: '', value: 'empty-label', icon: 'help_outline' },
  { label: 'Tiếng Việt / Кириллица', value: 'unicode', icon: 'translate' },
  { label: '<img src=x onerror=alert(1)>', value: 'xss', icon: 'security' }
])

const narrowItems = ref([
  {
    label: 'Very long multi-word navigation rail label designed to test narrow container wrapping',
    value: 'long-rail',
    icon: 'article'
  },
  {
    label: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    value: 'unbroken-rail',
    icon: 'warning'
  }
])

const isLifecycleMounted = ref<boolean>(true)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="NavigationRail">
    <D1Section class="demo-navigation-rail-page">
      <D1Group label="Basic & Selection (Single & Multiple)">
        <DemoFlex>
          <DemoBox>
            <D1NavigationRail
              :selected="selectedSingle"
              :focus="focusedItem"
              :list="basicItems"
              @click-lite="onSelectSingle"
            />
          </DemoBox>
          <DemoBox>
            <D1NavigationRail
              :selected="selectedMultiple"
              :list="basicItems"
              :aria-multiselectable="true"
              divider
              @click-lite="onSelectMultiple"
            />
          </DemoBox>
        </DemoFlex>
        <DemoFlex>
          <D1Button label="Select Inbox" size="sm" outline @click="selectedSingle = 'inbox'"/>
          <D1Button label="Select Settings" size="sm" outline @click="selectedSingle = 'settings'"/>
          <D1Button label="Clear Single" size="sm" outline @click="selectedSingle = undefined"/>
          <D1Button label="Focus Explore" size="sm" outline @click="focusedItem = 'explore'"/>
          <D1Button label="Clear Multiple" size="sm" outline @click="selectedMultiple = []"/>
        </DemoFlex>
        <DemoValue label="selected (single)" :value="selectedSingle"/>
        <DemoValue label="focus" :value="focusedItem"/>
        <DemoValue label="selected (multiple)" :value="selectedMultiple"/>
      </D1Group>

      <D1Group label="Record List & Custom Key Mapping">
        <DemoFlex>
          <DemoBox>
            <D1NavigationRail :list="recordItems" selected="saved"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationRail
              :selected="selectedCustomKey"
              :list="customKeyItems"
              key-label="captionText"
              key-value="codeKey"
              @click-lite="onSelectCustomKey"
            />
          </DemoBox>
        </DemoFlex>
        <DemoValue label="selectedCustomKey" :value="selectedCustomKey"/>
      </D1Group>

      <D1Group label="Sub-Menus, Dividers, Spaces & HTML Slot">
        <DemoBox>
          <D1NavigationRail
            :list="structuredItems"
            icon-arrow-right="keyboard_arrow_right"
            divider
            selected="home"
          >
            <template #railCustomSlot>
              <span class="demo-navigation-rail-page__slot">Rail Slot</span>
            </template>
          </D1NavigationRail>
        </DemoBox>
      </D1Group>

      <D1Group label="Tags, Custom Roles & Item Attributes">
        <DemoFlex>
          <DemoBox>
            <D1NavigationRail :list="linkItems" tag="nav" selected="docs"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationRail :list="basicItems.slice(0, 3)" tag="section" selected="inbox"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationRail
              :list="structuredItems"
              role="menu"
              role-item="menuitem"
              :item-attrs="{ 'data-rail-item': 'true' }"
              :item-menu-attrs="{ 'data-rail-menu': 'true' }"
              :item-management-attrs="{ 'data-rail-mgmt': 'true' }"
              selected="home"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Expose, Events & Keyboard Control">
        <DemoFlex>
          <D1Button label="Read Expose State" size="sm" @click="readExposeState"/>
          <D1Button label="Select Inbox" size="sm" outline @click="exposeSelected = 'inbox'"/>
          <D1Button label="Clear Selection" size="sm" outline @click="exposeSelected = undefined"/>
          <D1Button
            :label="isKeyboardControlActive ? 'Disable Keyboard Control' : 'Enable Keyboard Control'"
            size="sm"
            outline
            @click="isKeyboardControlActive = !isKeyboardControlActive"
          />
        </DemoFlex>
        <DemoValue label="expose" :value="exposeSummary"/>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoFlex>
          <DemoBox>
            <D1NavigationRail
              ref="navigationRailRef"
              :list="basicItems"
              :selected="exposeSelected"
              @click="handleExposeClick"
              @click-lite="handleExposeClickLite"
            />
          </DemoBox>
          <DemoBox>
            <D1NavigationRail
              :list="basicItems"
              :selected="keyboardSelected"
              :control="isKeyboardControlActive"
              role="listbox"
              role-item="option"
              :tabindex="0"
              aria-label="Accessible navigation rail"
              @click-lite="(clickValue) => { if (typeof clickValue.value === 'string') keyboardSelected = clickValue.value }"
              @close="handleCloseEvent"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Disabled Rail Guard & Boundary Cases">
        <DemoFlex>
          <DemoBox>
            <D1NavigationRail
              :list="basicItems"
              disabled
              selected="settings"
              @click="handleBlockedTrigger"
              @click-lite="handleBlockedTrigger"
            />
            <DemoValue label="Blocked Click Count" :value="blockedTriggerCount"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationRail :list="[]"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationRail :list="undefined"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationRail :list="boundaryItems" :selected="0"/>
          </DemoBox>
        </DemoFlex>
        <DemoBox class="demo-navigation-rail-page__narrow" size="sm">
          <D1NavigationRail :list="narrowItems" selected="long-rail"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button label="Toggle Mount" size="sm" outline @click="isLifecycleMounted = !isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1NavigationRail :list="basicItems" selected="home"/>
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-navigation-rail-page {
  &__slot {
    display: block;
    padding: 4px 8px;
    font-size: 12px;
  }

  &__narrow {
    width: 100%;
    max-width: 120px;
  }
}
</style>
