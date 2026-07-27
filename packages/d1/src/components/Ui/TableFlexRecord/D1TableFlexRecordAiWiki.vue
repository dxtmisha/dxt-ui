<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TableFlexRecord } from './index'
import { TableFlexRecordWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TableFlexRecordAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TableFlexRecordWikiStorybook"
    :component="D1TableFlexRecord"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <div class="wiki-storybook-flex" style="flex-direction: column;">
    <D1TableFlexRecord v-bind="args" />
  </div>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
