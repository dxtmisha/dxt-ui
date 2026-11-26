<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { NavigationListExpose } from '@dxtmisha/constructor/NavigationList'
import type { NavigationListProps } from '@dxtmisha/d1/D1NavigationList'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

// 1. Basic & Controlled Selection
const basicItems = ref([
  { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
  { label: 'Analytics', value: 'analytics', icon: 'analytics', badge: '12' },
  { label: 'Billing', value: 'billing', icon: 'payments', disabled: true },
  { label: 'Settings', value: 'settings', icon: 'settings' }
])
const selectedSingle = ref<string | undefined>('dashboard')
const selectedMultiple = ref<string[]>(['dashboard', 'analytics'])
const focusedItem = ref<string>('analytics')

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
    } else if (selectedMultiple.value.length < 2) {
      selectedMultiple.value = [...selectedMultiple.value, clickValue.value]
    }
  }
}

// 2. Record & Custom Key Mapping
const recordItems = ref({
  overview: { label: 'Overview', icon: 'home' },
  reports: { label: 'Reports', icon: 'bar_chart' },
  audit: { label: 'Audit Log', icon: 'history' }
})

const customKeyItems = ref([
  { title: 'Workspace One', slug: 'ws-1', icon: 'workspaces' },
  { title: 'Workspace Two', slug: 'ws-2', icon: 'folder_shared' },
  { title: 'Workspace Three', slug: 'ws-3', icon: 'lock' }
])
const selectedCustomKey = ref<string>('ws-2')

const onSelectCustomKey = (clickValue: EventClickValue): void => {
  if (typeof clickValue.value === 'string') {
    selectedCustomKey.value = clickValue.value
  }
}

// 3. Structured Navigation Hierarchy
const structuredItems = ref([
  { type: 'subtitle', value: 'subtitle-core', label: 'Workspace' },
  { label: 'Home', value: 'home', icon: 'home' },
  { type: 'line', value: 'line-1' },
  {
    type: 'group',
    index: 'group-team',
    label: 'Team Management',
    icon: 'group',
    value: [
      { label: 'Members', value: 'members', icon: 'person' },
      { label: 'Roles', value: 'roles', icon: 'security' }
    ]
  },
  {
    type: 'menu',
    index: 'menu-integrations',
    label: 'Integrations',
    icon: 'extension',
    value: [
      { label: 'Webhooks', value: 'webhooks', icon: 'webhook' },
      { label: 'API Keys', value: 'api-keys', icon: 'vpn_key' }
    ]
  },
  { type: 'space', value: 'space-1' },
  { type: 'html', value: 'customNavSlot', label: 'Slot Fallback' },
  { type: 'html', value: 'inlineNavHtml', label: '<strong>Navigation Badge</strong>' }
])

// 4. Axis, Tag & Selection Styles
const axisItems = ref([
  { label: 'Overview', value: 'overview', icon: 'dashboard' },
  { type: 'space', value: 'space-axis' },
  { label: 'Projects', value: 'projects', icon: 'folder' },
  { type: 'line', value: 'line-axis' },
  { label: 'Members', value: 'members', icon: 'group' }
])

const linkItems = ref([
  { label: 'Documentation', value: 'docs', href: '#docs', icon: 'menu_book' },
  { label: 'Changelog', value: 'changelog', href: '#changelog', icon: 'update' }
])

const selectionStyles: NonNullable<NavigationListProps['selectionStyle']>[] = [
  'none',
  'checkmark',
  'checkbox',
  'radio'
]

// 5. Search, Filter Mode & Highlight
const searchItems = ref([
  { label: 'User Management', value: 'users', icon: 'people' },
  { label: 'Role Permissions', value: 'roles', icon: 'security' },
  { label: 'System Manager Logs', value: 'logs', icon: 'receipt_long' },
  { label: 'Billing Statements', value: 'billing', icon: 'receipt' }
])
const dynamicHighlight = ref<string>('manag')

// 6. Lite Mode, Lazy & Skeleton
const liteItems = ref([
  { label: 'Route Alpha', value: 'alpha', icon: 'route' },
  { label: 'Route Beta', value: 'beta', icon: 'alt_route' },
  { label: 'Route Gamma', value: 'gamma', icon: 'signpost' },
  { label: 'Route Delta', value: 'delta', icon: 'explore' },
  { label: 'Route Epsilon', value: 'epsilon', icon: 'map' }
])
const isLiteActive = ref<boolean>(true)
const blockedTriggerCount = ref<number>(0)

const handleBlockedTrigger = (): void => {
  blockedTriggerCount.value += 1
}

const lazyItems = ref(
  Array.from({ length: 10 }, (_, itemIndex) => ({
    label: `Nav Entry ${itemIndex + 1}`,
    value: `nav-${itemIndex + 1}`,
    icon: 'list_alt'
  }))
)

// 7. Expose, Events & Keyboard Control
const navigationListRef = ref<NavigationListExpose | null>(null)
const exposeSelected = ref<string | undefined>('dashboard')
const exposeSummary = ref<string>('Not checked')
const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')
const isKeyboardControlActive = ref<boolean>(false)
const keyboardSelected = ref<string>('dashboard')

const readExposeState = (): void => {
  if (!navigationListRef.value) {
    exposeSummary.value = 'Ref not initialized'
    return
  }

  exposeSummary.value = JSON.stringify({
    isSelected: navigationListRef.value.isSelected(),
    selectedList: navigationListRef.value.getSelectedList().map(item => item.value),
    selectedNames: navigationListRef.value.getSelectedNames(),
    selectedValues: navigationListRef.value.getSelectedValues()
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

// 8. Boundary & Lifecycle State
const boundaryItems = ref([
  { label: 0, value: 0, description: 'Numeric zero entry' },
  { label: '', value: 'empty-label', description: 'Empty label fallback' },
  { label: 'Tiếng Việt / Кириллица / 🚀', value: 'unicode', description: 'Multilingual content' },
  { label: '<img src=x onerror=alert(1)>', value: 'xss', description: '<svg onload=alert(1)>' }
])

const narrowItems = ref([
  {
    label: 'Very long multi-sentence navigation label designed to verify wrapping inside narrow 240px sidebar container',
    value: 'long-text',
    icon: 'article'
  },
  {
    label: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    value: 'unbroken-text',
    icon: 'warning'
  }
])

const isLifecycleMounted = ref<boolean>(true)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="NavigationList">
    <D1Section class="demo-navigation-list-page">
      <D1Group label="Basic & Selection (Single & Multiple)">
        <DemoFlex>
          <DemoBox>
            <D1NavigationList
              :selected="selectedSingle"
              :focus="focusedItem"
              :list="basicItems"
              @click-lite="onSelectSingle"
            />
          </DemoBox>
          <DemoBox>
            <D1NavigationList
              :selected="selectedMultiple"
              :list="basicItems"
              :max="2"
              :aria-multiselectable="true"
              selection-style="checkbox"
              @click-lite="onSelectMultiple"
            />
          </DemoBox>
        </DemoFlex>
        <DemoFlex>
          <D1Button label="Select Analytics" size="sm" outline @click="selectedSingle = 'analytics'"/>
          <D1Button label="Select Settings" size="sm" outline @click="selectedSingle = 'settings'"/>
          <D1Button label="Clear Single" size="sm" outline @click="selectedSingle = undefined"/>
          <D1Button label="Focus Dashboard" size="sm" outline @click="focusedItem = 'dashboard'"/>
          <D1Button label="Focus Settings" size="sm" outline @click="focusedItem = 'settings'"/>
        </DemoFlex>
        <DemoValue label="selected (single)" :value="selectedSingle"/>
        <DemoValue label="focus" :value="focusedItem"/>
        <DemoValue label="selected (multiple, max=2)" :value="selectedMultiple"/>
      </D1Group>

      <D1Group label="Record List & Custom Keys">
        <DemoFlex>
          <DemoBox>
            <D1NavigationList :list="recordItems" selected="reports"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationList
              :selected="selectedCustomKey"
              :list="customKeyItems"
              key-label="title"
              key-value="slug"
              @click-lite="onSelectCustomKey"
            />
          </DemoBox>
        </DemoFlex>
        <DemoValue label="selectedCustomKey" :value="selectedCustomKey"/>
      </D1Group>

      <D1Group label="Groups, Sub-Menus, Dividers & HTML Slot">
        <DemoBox>
          <D1NavigationList
            :list="structuredItems"
            icon-arrow-down="keyboard_arrow_down"
            icon-arrow-right="keyboard_arrow_right"
            divider
            selected="home"
          >
            <template #customNavSlot>
              <span>Custom Navigation Slot</span>
            </template>
          </D1NavigationList>
        </DemoBox>
      </D1Group>

      <D1Group label="Axis, Selection Styles & Tags">
        <DemoFlex>
          <DemoBox>
            <D1NavigationList :list="axisItems" axis="y" selected="overview"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationList :list="axisItems" axis="x" selected="projects"/>
          </DemoBox>
        </DemoFlex>
        <DemoFlex>
          <DemoBox v-for="styleMode in selectionStyles" :key="styleMode">
            <D1NavigationList
              :list="basicItems"
              :selection-style="styleMode"
              :divider="styleMode === 'checkmark'"
              :tag="styleMode === 'checkmark' ? 'button' : 'div'"
              selected="analytics"
            />
          </DemoBox>
          <DemoBox>
            <D1NavigationList :list="linkItems" tag="a" selected="docs"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationList :list="axisItems.slice(0, 3)" tag="span" selected="overview"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Search, Filter Mode & Highlight">
        <DemoFlex>
          <DemoBox>
            <D1NavigationList
              :list="searchItems"
              show-search
              filter-mode
              icon-search="search"
              text-not-found="No navigation match"
              :input-search-attrs="{ placeholder: 'Filter navigation...' }"
              selected="users"
            />
          </DemoBox>
          <DemoBox>
            <D1NavigationList
              :list="searchItems"
              :highlight="dynamicHighlight"
              :highlight-length-start="3"
              selected="roles"
            />
            <DemoFlex>
              <D1Button label="Highlight 'manag'" size="sm" outline @click="dynamicHighlight = 'manag'"/>
              <D1Button label="Highlight 'role'" size="sm" outline @click="dynamicHighlight = 'role'"/>
              <D1Button label="Clear Highlight" size="sm" outline @click="dynamicHighlight = ''"/>
            </DemoFlex>
            <DemoValue label="highlight" :value="dynamicHighlight"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lite Mode, Skeleton, Lazy & Custom Attributes">
        <DemoFlex>
          <DemoBox>
            <D1NavigationList
              :list="liteItems"
              :lite="isLiteActive"
              :lite-threshold="3"
              selected="alpha"
            />
            <DemoFlex>
              <D1Button
                :label="isLiteActive ? 'Disable Lite Mode' : 'Enable Lite Mode'"
                size="sm"
                outline
                @click="isLiteActive = !isLiteActive"
              />
            </DemoFlex>
            <DemoValue label="lite" :value="isLiteActive"/>
          </DemoBox>
          <DemoBox>
            <D1Skeleton :active="true">
              <D1NavigationList :list="basicItems" :item-attrs="{ isSkeleton: true }"/>
            </D1Skeleton>
          </DemoBox>
          <DemoBox>
            <D1NavigationList
              :list="lazyItems"
              lazy
              lazy-margin="64px 0px"
              lazy-cache-height
              selected="nav-1"
            />
          </DemoBox>
          <DemoBox>
            <D1NavigationList
              :list="structuredItems"
              role="menu"
              role-item="menuitem"
              :item-attrs="{ 'data-nav-item': 'true' }"
              :item-group-attrs="{ 'data-nav-group': 'true' }"
              :item-menu-attrs="{ 'data-nav-menu': 'true' }"
              :item-management-attrs="{ 'data-nav-mgmt': 'true' }"
              selected="home"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Expose, Events & Keyboard Control">
        <DemoFlex>
          <D1Button label="Read Expose State" size="sm" @click="readExposeState"/>
          <D1Button label="Select Analytics" size="sm" outline @click="exposeSelected = 'analytics'"/>
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
            <D1NavigationList
              ref="navigationListRef"
              :list="basicItems"
              :selected="exposeSelected"
              @click="handleExposeClick"
              @click-lite="handleExposeClickLite"
            />
          </DemoBox>
          <DemoBox>
            <D1NavigationList
              :list="basicItems"
              :selected="keyboardSelected"
              :control="isKeyboardControlActive"
              role="listbox"
              role-item="option"
              :tabindex="0"
              aria-label="Accessible navigation list"
              @click-lite="(clickValue) => { if (typeof clickValue.value === 'string') keyboardSelected = clickValue.value }"
              @close="handleCloseEvent"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Blocked States, Boundary & Edge Cases">
        <DemoFlex>
          <DemoBox>
            <D1NavigationList
              :list="basicItems"
              disabled
              selected="settings"
              @click="handleBlockedTrigger"
              @click-lite="handleBlockedTrigger"
            />
            <DemoValue label="Blocked Click Count" :value="blockedTriggerCount"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationList :list="[]" filter-mode text-not-found="Empty navigation fallback"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationList :list="undefined"/>
          </DemoBox>
          <DemoBox>
            <D1NavigationList :list="boundaryItems" :selected="0" selection-style="checkmark"/>
          </DemoBox>
        </DemoFlex>
        <DemoBox class="demo-navigation-list-page__narrow" size="sm">
          <D1NavigationList :list="narrowItems" selected="long-text"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button label="Toggle Mount" size="sm" outline @click="isLifecycleMounted = !isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1NavigationList :list="basicItems" selected="dashboard"/>
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-navigation-list-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
