<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1HorizontalScroll } from './index'
import { HorizontalScrollWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1HorizontalScrollAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="HorizontalScrollWikiStorybook"
    :component="D1HorizontalScroll"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item" style="width: 100%;">
  <D1HorizontalScroll v-bind="args">
    <template #default="{ classItem }">
      <div :class="classItem" style="width: 64px; height: 64px; background: #e0e0e0; margin-right: 8px;"></div>
      <div :class="classItem" style="width: 64px; height: 64px; background: #e0e0e0; margin-right: 8px;"></div>
      <div :class="classItem" style="width: 64px; height: 64px; background: #e0e0e0; margin-right: 8px;"></div>
    </template>
  </D1HorizontalScroll>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
