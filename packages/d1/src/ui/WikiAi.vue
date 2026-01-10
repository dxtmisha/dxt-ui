<script setup lang="ts">
import { wikiAiList } from './wikiAiList'
import { DxtTestPage } from '@dxtmisha/test'

defineOptions({
  name: 'WikiAi'
})
</script>

<template>
  <DxtTestPage
    title="List of available UI components"
    description="Below is a list of Vue 3 components available in the UI. These components are available immediately and do not need to be imported."
  >
    <component
      v-for="(item, key) in wikiAiList"
      :key="key"
      :is="item"
    />
  </DxtTestPage>
</template>

<style lang="scss"></style>
