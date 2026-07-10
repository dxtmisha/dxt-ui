<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TableRecord } from './index'
import { TableRecordWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TableRecordAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TableRecordWikiStorybook"
    :component="D1TableRecord"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <table style="border-collapse: collapse; width: 100%;">
    <D1TableRecord v-bind="args" />
  </table>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
