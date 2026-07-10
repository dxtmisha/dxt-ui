<script setup lang="ts">
import { ref } from 'vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

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
  { label: 'Active C', value: 'c' }
]

const selectedBasic = ref('first')
const selectedIcon = ref('home')
const selectedBadge = ref('inbox')
const selectedDisabled = ref('a')
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="SegmentControl">
    <D1Section>
      <D1Group label="Basic Usage">
        <D1SegmentControl :list="basicList" v-model:selected="selectedBasic" />
        <DemoValue :value="selectedBasic" />
      </D1Group>

      <D1Group label="With Icons">
        <D1SegmentControl :list="iconList" v-model:selected="selectedIcon" />
        <DemoValue :value="selectedIcon" />
      </D1Group>

      <D1Group label="With Badges">
        <D1SegmentControl :list="badgeList" v-model:selected="selectedBadge" />
        <DemoValue :value="selectedBadge" />
      </D1Group>

      <D1Group label="With Disabled Items">
        <D1SegmentControl :list="disabledList" v-model:selected="selectedDisabled" />
        <DemoValue :value="selectedDisabled" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
