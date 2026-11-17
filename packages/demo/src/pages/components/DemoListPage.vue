<script setup lang="ts">
import { ref } from 'vue'
import type { ListExpose } from '@dxtmisha/constructor/List'
import type { EventClickValue } from '@dxtmisha/constructor'
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
const selectedSingle = ref<string>('play')
const selectedMultiple = ref<string[]>(['play', 'edit'])
const focusedItem = ref<string>('edit')

const onSelectSingle = (event: EventClickValue) => {
  if (typeof event.value === 'string') {
    selectedSingle.value = event.value
  }
}

const onSelectMultiple = (event: EventClickValue) => {
  if (typeof event.value === 'string') {
    const index = selectedMultiple.value.indexOf(event.value)

    if (index >= 0) {
      selectedMultiple.value = selectedMultiple.value.filter(item => item !== event.value)
    } else if (selectedMultiple.value.length < 2) {
      selectedMultiple.value = [...selectedMultiple.value, event.value]
    }
  }
}

// 2. Record Object Format
const recordItems = ref({
  first: { label: 'Record First', icon: 'looks_one' },
  second: { label: 'Record Second', icon: 'looks_two' },
  third: { label: 'Record Third', icon: 'looks_3' }
})

// 3. Hierarchical & Special Item Types
const structuredItems = ref([
  { type: 'subtitle', value: 'sub-main', label: 'Primary Section' },
  { label: 'Overview', value: 'overview', icon: 'dashboard' },
  { type: 'line', value: 'line-1' },
  {
    type: 'group',
    index: 'grp-workspace',
    label: 'Workspace Group',
    icon: 'folder',
    value: [
      { label: 'Projects', value: 'projects', icon: 'work' },
      { label: 'Templates', value: 'templates', icon: 'layers' }
    ]
  },
  {
    type: 'menu',
    index: 'mnu-more',
    label: 'More Menu',
    icon: 'menu',
    value: [
      { label: 'Export JSON', value: 'export-json', icon: 'download' },
      { label: 'Share Link', value: 'share-link', icon: 'share' }
    ]
  },
  { type: 'space', value: 'space-1' },
  { type: 'html', value: 'customSlot', label: 'Fallback HTML' },
  { type: 'html', value: 'rawHtml', label: '<strong>Inline HTML Item</strong>' }
])

// 4. Axis Layout Items
const axisItems = ref([
  { label: 'Alpha', value: 'a', icon: 'bookmark' },
  { label: 'Beta', value: 'b', icon: 'label' },
  { label: 'Gamma', value: 'g', icon: 'flag' }
])

// 5. Lite Mode Items
const liteItems = ref([
  { label: 'Alpha', value: 'a', icon: 'bookmark' },
  { label: 'Beta', value: 'b', icon: 'label' },
  { label: 'Gamma', value: 'g', icon: 'flag' },
  { label: 'Delta', value: 'd', icon: 'star' },
  { label: 'Epsilon', value: 'e', icon: 'bolt' }
])

// 6. Search, Filter & Highlight Items
const searchItems = ref([
  { label: 'Project index example', value: 'projects', icon: 'folder' },
  { label: 'Advanced context options', value: 'experiments', icon: 'tune' },
  { label: 'Next examination notes', value: 'example', icon: 'description' },
  { label: 'User experience metrics', value: 'express', icon: 'insights' }
])

// 7. Custom Keys Items
const customKeyItems = ref([
  { title: 'Custom Key One', code: 'k1', icon: 'key' },
  { title: 'Custom Key Two', code: 'k2', icon: 'vpn_key' },
  { title: 'Custom Key Three', code: 'k3', icon: 'lock' }
])
const selectedCustomKey = ref<string>('k2')

const onSelectCustomKey = (event: EventClickValue) => {
  if (typeof event.value === 'string') {
    selectedCustomKey.value = event.value
  }
}

// 8. Expose State
const listExposeRef = ref<ListExpose | null>(null)
const exposeSummary = ref<string>('Not checked')
const checkExpose = () => {
  if (listExposeRef.value) {
    exposeSummary.value = `isSelected=${listExposeRef.value.isSelected()}, names=${JSON.stringify(listExposeRef.value.getSelectedNames())}, values=${JSON.stringify(listExposeRef.value.getSelectedValues())}`
  }
}

// 9. Events State
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="List">
    <D1Section>
      <D1Group label="Basic & Selection">
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
              aria-multiselectable="true"
              selection-style="checkbox"
              @click-lite="onSelectMultiple"
            />
          </DemoBox>
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

      <D1Group label="Dividers & Selection Styles">
        <DemoFlex>
          <DemoBox>
            <D1List
              :list="basicItems"
              divider
              selected="edit"
              selection-style="checkmark"
              tag="button"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :list="basicItems"
              selected="play"
              selection-style="radio"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Axis Layout">
        <DemoFlex>
          <DemoBox>
            <D1List
              :list="axisItems"
              axis="y"
              selected="a"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :list="axisItems"
              axis="x"
              selected="b"
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
              highlight="exam"
              :highlight-length-start="4"
              selected="experiments"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lite Mode & Disabled">
        <DemoFlex>
          <DemoBox>
            <D1List
              :list="liteItems"
              lite
              :lite-threshold="3"
              selected="a"
            />
          </DemoBox>
          <DemoBox>
            <D1List
              :list="basicItems"
              disabled
              selected="delete"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Expose & Events">
        <DemoFlex>
          <D1Button label="Read Expose State" @click="checkExpose"/>
          <DemoValue label="expose" :value="exposeSummary"/>
          <DemoValue label="lastEvent" :value="eventName"/>
        </DemoFlex>
        <DemoBox>
          <D1List
            ref="listExposeRef"
            :list="basicItems"
            selected="play"
            @click="onEvent('click')"
            @click-lite="onEvent('clickLite')"
            @close="onEvent('close')"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
