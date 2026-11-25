<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ListExpose } from '@dxtmisha/constructor/List'
import type { ListProps } from '@dxtmisha/d1/D1List'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

// 1. Basic & Controlled Selection Items
const basicItems = ref([
  { label: 'Play', value: 'play', icon: 'play_arrow' },
  { label: 'Edit', value: 'edit', icon: 'edit' },
  { label: 'Settings', value: 'settings', icon: 'settings', disabled: true },
  { label: 'Delete', value: 'delete', icon: 'delete' }
])
const selectedSingle = ref<string | undefined>('play')
const selectedMultiple = ref<string[]>(['play', 'edit'])
const focusedItem = ref<string>('edit')

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

// 2. Record Object & Custom Key Formats
const recordItems = ref({
  first: { label: 'Record First', icon: 'looks_one' },
  second: { label: 'Record Second', icon: 'looks_two' },
  third: { label: 'Record Third', icon: 'looks_3' }
})

const customKeyItems = ref([
  { title: 'Custom Key One', code: 'key-1', icon: 'key' },
  { title: 'Custom Key Two', code: 'key-2', icon: 'vpn_key' },
  { title: 'Custom Key Three', code: 'key-3', icon: 'lock' }
])
const selectedCustomKey = ref<string>('key-2')

const onSelectCustomKey = (clickValue: EventClickValue): void => {
  if (typeof clickValue.value === 'string') {
    selectedCustomKey.value = clickValue.value
  }
}

// 3. Hierarchical & Special Item Types
const structuredItems = ref([
  { type: 'subtitle', value: 'subtitle-main', label: 'Primary Section' },
  { label: 'Overview', value: 'overview', icon: 'dashboard' },
  { type: 'line', value: 'line-1' },
  {
    type: 'group',
    index: 'group-workspace',
    label: 'Workspace Group',
    icon: 'folder',
    value: [
      { label: 'Projects', value: 'projects', icon: 'work' },
      { label: 'Templates', value: 'templates', icon: 'layers' }
    ]
  },
  {
    type: 'group',
    index: 'group-disabled',
    label: 'Disabled Group',
    icon: 'folder_off',
    disabled: true,
    value: [
      { label: 'Hidden Child', value: 'hidden-child' }
    ]
  },
  {
    type: 'menu',
    index: 'menu-more',
    label: 'More Menu',
    icon: 'menu',
    value: [
      { label: 'Export JSON', value: 'export-json', icon: 'download' },
      { label: 'Share Link', value: 'share-link', icon: 'share' }
    ]
  },
  {
    type: 'menu',
    index: 'menu-disabled',
    label: 'Disabled Menu',
    icon: 'block',
    disabled: true,
    value: [
      { label: 'Locked Action', value: 'locked-action' }
    ]
  },
  { type: 'space', value: 'space-1' },
  { type: 'html', value: 'customSlot', label: 'Fallback HTML' },
  { type: 'html', value: 'rawHtml', label: '<strong>Inline HTML Item</strong>' }
])

// 4. Axis, Tag & Selection Styles
const axisItems = ref([
  { label: 'Alpha', value: 'alpha', icon: 'bookmark' },
  { type: 'space', value: 'space-axis' },
  { label: 'Beta', value: 'beta', icon: 'label' },
  { type: 'line', value: 'line-axis' },
  { label: 'Gamma', value: 'gamma', icon: 'flag' }
])

const linkItems = ref([
  { label: 'Documentation', value: 'docs', href: '#docs', icon: 'menu_book' },
  { label: 'Components', value: 'components', href: '#components', icon: 'widgets' }
])

const selectionStyles: NonNullable<ListProps['selectionStyle']>[] = [
  'none',
  'checkmark',
  'checkbox',
  'radio'
]

// 5. Lite Mode, Skeleton & Blocked States
const liteItems = ref([
  { label: 'Alpha', value: 'alpha', icon: 'bookmark' },
  { label: 'Beta', value: 'beta', icon: 'label' },
  { label: 'Gamma', value: 'gamma', icon: 'flag' },
  { label: 'Delta', value: 'delta', icon: 'star' },
  { label: 'Epsilon', value: 'epsilon', icon: 'bolt' }
])
const isLiteActive = ref<boolean>(true)
const blockedTriggerCount = ref<number>(0)

const handleBlockedTrigger = (): void => {
  blockedTriggerCount.value += 1
}

// 6. Search, Filter & Highlight Items
const searchItems = ref([
  { label: 'Project index example', value: 'projects', icon: 'folder' },
  { label: 'Advanced context options', value: 'experiments', icon: 'tune' },
  { label: 'Next examination notes', value: 'example', icon: 'description' },
  { label: 'User experience metrics', value: 'express', icon: 'insights' }
])
const dynamicHighlight = ref<string>('exam')

// 7. Lazy Items
const lazyItems = ref(
  Array.from({ length: 12 }, (_, itemIndex) => ({
    label: `Lazy Item ${itemIndex + 1}`,
    value: `lazy-${itemIndex + 1}`,
    icon: 'list_alt'
  }))
)

// 8. Expose & Events State
const listExposeRef = ref<ListExpose | null>(null)
const exposeSelected = ref<string | undefined>('play')
const exposeSummary = ref<string>('Not checked')
const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')
const isKeyboardControlActive = ref<boolean>(false)
const keyboardSelected = ref<string>('play')

const readExposeState = (): void => {
  if (!listExposeRef.value) {
    exposeSummary.value = 'Ref not initialized'
    return
  }

  exposeSummary.value = JSON.stringify({
    isSelected: listExposeRef.value.isSelected(),
    selectedList: listExposeRef.value.getSelectedList().map(item => item.value),
    selectedNames: listExposeRef.value.getSelectedNames(),
    selectedValues: listExposeRef.value.getSelectedValues()
  })
}

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleExposeListClick = (mouseEvent: MouseEvent, clickValue: EventClickValue): void => {
  if (typeof clickValue.value === 'string') {
    exposeSelected.value = clickValue.value
  }
  trackEvent('click', { eventType: mouseEvent.type, value: clickValue.value, type: clickValue.type })
}

const handleExposeListClickLite = (clickValue: EventClickValue): void => {
  trackEvent('clickLite', { value: clickValue.value, type: clickValue.type })
}

const handleCloseEvent = (): void => {
  isKeyboardControlActive.value = false
  trackEvent('close', { closed: true })
}

// 9. Boundary & Lifecycle State
const boundaryItems = ref([
  { label: 0, value: 0, description: 'Numeric zero value and label' },
  { label: '', value: 'empty-label', description: 'Empty string label' },
  { label: '   ', value: 'whitespace-label', description: 'Whitespace-only label' },
  { label: 'A', value: 'single-char' },
  { label: 'Tiếng Việt / Кириллица / 🚀', value: 'unicode', description: 'Multilingual content' },
  { label: '<img src=x onerror=alert(1)>', value: 'xss', description: '<svg onload=alert(1)>' }
])

const narrowItems = ref([
  {
    label: 'Very long multi-sentence item label designed to verify wrapping inside narrow 240px container',
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
  <D1Page label="List">
    <D1Section class="demo-list-page">
      <D1Group label="Basic & Selection (Single & Multiple)">
        <DemoFlex>
          <DemoBox>
            <D1List
              :selected="selectedSingle"
              :focus="focusedItem"
              :list="basicItems"
              @click-lite="onSelectSingle"
            />
          </DemoBox>
          <DemoBox>
            <D1List
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
          <D1Button label="Select Edit" size="sm" outline @click="selectedSingle = 'edit'"/>
          <D1Button label="Select Delete" size="sm" outline @click="selectedSingle = 'delete'"/>
          <D1Button label="Clear Single" size="sm" outline @click="selectedSingle = undefined"/>
          <D1Button label="Focus Play" size="sm" outline @click="focusedItem = 'play'"/>
          <D1Button label="Focus Edit" size="sm" outline @click="focusedItem = 'edit'"/>
          <D1Button label="Clear Multiple" size="sm" outline @click="selectedMultiple = []"/>
        </DemoFlex>
        <DemoValue label="selected (single)" :value="selectedSingle"/>
        <DemoValue label="focus" :value="focusedItem"/>
        <DemoValue label="selected (multiple, max=2)" :value="selectedMultiple"/>
      </D1Group>

      <D1Group label="Record List & Custom Keys">
        <DemoFlex>
          <DemoBox>
            <D1List
              :list="recordItems"
              selected="second"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :selected="selectedCustomKey"
              :list="customKeyItems"
              key-label="title"
              key-value="code"
              @click-lite="onSelectCustomKey"
            />
          </DemoBox>
        </DemoFlex>
        <DemoValue label="selectedCustomKey" :value="selectedCustomKey"/>
      </D1Group>

      <D1Group label="Item Types, Groups, Menus & HTML Slot">
        <DemoBox>
          <D1List
            :list="structuredItems"
            icon-arrow-down="keyboard_arrow_down"
            icon-arrow-right="keyboard_arrow_right"
            selected="overview"
          >
            <template #customSlot>
              <span>Custom HTML Slot Content</span>
            </template>
          </D1List>
        </DemoBox>
      </D1Group>

      <D1Group label="Selection Styles, Dividers & Tags">
        <DemoFlex>
          <DemoBox
            v-for="styleMode in selectionStyles"
            :key="styleMode"
          >
            <D1List
              :list="basicItems"
              :selection-style="styleMode"
              :divider="styleMode === 'checkmark'"
              :tag="styleMode === 'checkmark' ? 'button' : 'div'"
              selected="edit"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :list="linkItems"
              tag="a"
              selected="docs"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :list="axisItems.slice(0, 3)"
              tag="span"
              selected="alpha"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Axis Layout (y & x)">
        <DemoFlex>
          <DemoBox>
            <D1List
              :list="axisItems"
              axis="y"
              selected="alpha"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :list="axisItems"
              axis="x"
              selected="beta"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Search, Filter Mode & Highlight">
        <DemoFlex>
          <DemoBox>
            <D1List
              :list="searchItems"
              show-search
              filter-mode
              icon-search="search"
              text-not-found="No matching items"
              :input-search-attrs="{ placeholder: 'Search items...' }"
              selected="projects"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :list="searchItems"
              :highlight="dynamicHighlight"
              :highlight-length-start="3"
              selected="experiments"
            />
            <DemoFlex>
              <D1Button label="Highlight 'exam'" size="sm" outline @click="dynamicHighlight = 'exam'"/>
              <D1Button label="Highlight 'exp'" size="sm" outline @click="dynamicHighlight = 'exp'"/>
              <D1Button label="Clear Highlight" size="sm" outline @click="dynamicHighlight = ''"/>
            </DemoFlex>
            <DemoValue label="highlight" :value="dynamicHighlight"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lite Mode, Skeleton & Blocked States">
        <DemoFlex>
          <DemoBox>
            <D1List
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
              <D1List
                :list="basicItems"
                :item-attrs="{ isSkeleton: true }"
              />
            </D1Skeleton>
          </DemoBox>
          <DemoBox>
            <D1List
              :list="basicItems"
              disabled
              selected="delete"
              @click="handleBlockedTrigger"
              @click-lite="handleBlockedTrigger"
            />
            <DemoValue label="Blocked Click Count" :value="blockedTriggerCount"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lazy Rendering & Custom Roles">
        <DemoFlex>
          <DemoBox>
            <D1List
              :list="lazyItems"
              lazy
              lazy-margin="64px 0px"
              lazy-cache-height
              selected="lazy-1"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :list="structuredItems"
              role="menu"
              role-item="menuitem"
              :item-attrs="{ 'data-demo-item': 'true' }"
              :item-group-attrs="{ 'data-demo-group': 'true' }"
              :item-menu-attrs="{ 'data-demo-menu': 'true' }"
              :item-management-attrs="{ 'data-demo-mgmt': 'true' }"
              selected="overview"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Expose & Events">
        <DemoFlex>
          <D1Button label="Read Expose State" size="sm" @click="readExposeState"/>
          <D1Button label="Select Edit" size="sm" outline @click="exposeSelected = 'edit'"/>
          <D1Button label="Clear Selection" size="sm" outline @click="exposeSelected = undefined"/>
        </DemoFlex>
        <DemoValue label="expose" :value="exposeSummary"/>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoBox>
          <D1List
            ref="listExposeRef"
            :list="basicItems"
            :selected="exposeSelected"
            @click="handleExposeListClick"
            @click-lite="handleExposeListClickLite"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility & Keyboard Control">
        <DemoFlex>
          <D1Button
            :label="isKeyboardControlActive ? 'Disable Keyboard Control' : 'Enable Keyboard Control'"
            size="sm"
            outline
            @click="isKeyboardControlActive = !isKeyboardControlActive"
          />
        </DemoFlex>
        <DemoValue label="control" :value="isKeyboardControlActive"/>
        <DemoValue label="keyboardSelected" :value="keyboardSelected"/>
        <DemoBox>
          <D1List
            :list="basicItems"
            :selected="keyboardSelected"
            :control="isKeyboardControlActive"
            role="listbox"
            role-item="option"
            :tabindex="0"
            aria-label="Accessible action list"
            @click-lite="(clickValue) => { if (typeof clickValue.value === 'string') keyboardSelected = clickValue.value }"
            @close="handleCloseEvent"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <DemoBox>
            <D1List
              :list="[]"
              filter-mode
              text-not-found="Empty list fallback"
            />
          </DemoBox>
          <DemoBox>
            <D1List :list="undefined"/>
          </DemoBox>
          <DemoBox>
            <D1List
              :list="boundaryItems"
              :selected="0"
              selection-style="checkmark"
            />
          </DemoBox>
        </DemoFlex>
        <DemoBox class="demo-list-page__narrow" size="sm">
          <D1List :list="narrowItems" selected="long-text"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1List :list="basicItems" selected="play"/>
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-list-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
